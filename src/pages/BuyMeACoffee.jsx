import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

import Footer from "../components/Footer.jsx";
import qrCode from "../assets/donate_qr.png";
import easterBall from "../assets/image.png"; // <- 换成你的彩蛋图片

function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}
function rand(min, max) {
    return Math.random() * (max - min) + min;
}
function randInt(min, max) {
    return Math.floor(rand(min, max + 1));
}
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * 生成一个“更像皮球”的随机弹道 keyframes
 * - x: 水平漂移（左右随机）
 * - y: 多段弹跳，幅度递减（带随机）
 * - rotate: 旋转更夸张一点
 * - scaleX/scaleY: 落地瞬间挤压/回弹
 */
function makeBallTrajectory() {
    const bounces = randInt(3, 5); // 弹几次
    const baseHeight = rand(260, 520); // 第一跳高度（越大越高）
    const decay = rand(0.48, 0.68); // 衰减系数（越小衰减越快）

    // 水平：随机左右 + 轻微摆动
    const dir = pick([-1, 1]);
    const drift = rand(120, 320) * dir; // 总漂移
    const wobble = rand(20, 80) * (Math.random() < 0.5 ? -1 : 1);

    // 旋转：更随机更大
    const rot0 = rand(-20, 20);
    const rot1 = rot0 + rand(260, 620) * dir;
    const rot2 = rot1 + rand(160, 420) * dir;

    // y keyframes：0 -> -H -> 0 -> -H2 -> 0 ...
    const y = [0];
    let h = baseHeight;
    for (let i = 0; i < bounces; i++) {
        y.push(-h);
        // “落地”回到 0（可以给一点点穿透更真实，但会显得抖；这里保持 0）
        y.push(0);
        h = h * decay * rand(0.92, 1.08);
    }

    // x keyframes：从 0 出发，逐步漂到 drift，并带一点 wobble
    // 让每次落地 x 都推进一点，显得“弹着走”
    const x = [0];
    for (let i = 0; i < y.length - 1; i++) {
        const t = (i + 1) / (y.length - 1);
        const easeDrift = drift * t;
        const wob = wobble * Math.sin(t * Math.PI * rand(1.2, 2.2));
        x.push(easeDrift + wob);
    }

    // scale：在“落地”帧（y=0 的那些点）做挤压
    // y 数组里 0 出现的位置：index 0,2,4,...（落地点）
    const scaleX = [];
    const scaleY = [];
    for (let i = 0; i < y.length; i++) {
        const isGround = y[i] === 0 && i !== 0; // 落地（排除起点）
        if (isGround) {
            // 落地挤压：横向变宽、纵向变扁
            scaleX.push(rand(1.18, 1.32));
            scaleY.push(rand(0.78, 0.88));
        } else {
            // 空中略拉伸/正常
            const airStretch = y[i] < 0 ? rand(0.96, 1.06) : 1;
            scaleX.push(airStretch);
            scaleY.push(clamp(2 - airStretch, 0.94, 1.08));
        }
    }

    // rotate keyframes：跟着弹跳走，给更多随机
    const rotate = [];
    for (let i = 0; i < y.length; i++) {
        const t = i / (y.length - 1);
        const r = rot0 + (rot2 - rot0) * t + rand(-18, 18);
        rotate.push(r);
    }

    // 时长：随高度/弹跳数变化
    const duration = clamp(1.15 + bounces * 0.25 + baseHeight / 900, 1.6, 2.6);

    // times：均匀分配即可（Framer 会按 keyframes 插值）
    const times = y.map((_, i) => i / (y.length - 1));

    return { x, y, rotate, scaleX, scaleY, duration, times };
}

function BuyMeACoffee() {
    const base = import.meta.env.BASE_URL || "/";

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const [showBall, setShowBall] = useState(false);
    const [ballKey, setBallKey] = useState(0);

    // 记录弹起起点（按钮中心）
    const [ballPos, setBallPos] = useState({ x: 0, y: 0 });

    // 记录每次随机弹道
    const [traj, setTraj] = useState(null);

    const btnRef = useRef(null);

    const getButtonOrigin = useCallback(() => {
        const btn = btnRef.current;
        if (!btn) return { x: 0.5, y: 0.5, px: window.innerWidth / 2, py: window.innerHeight / 2 };

        const rect = btn.getBoundingClientRect();
        const px = rect.left + rect.width / 2;
        const py = rect.top + rect.height / 2;

        return {
            x: px / window.innerWidth,
            y: py / window.innerHeight,
            px,
            py,
        };
    }, []);

    const burstConfettiSmall = useCallback(() => {
        const { x, y } = getButtonOrigin();
        confetti({
            particleCount: 24,
            spread: 60,
            startVelocity: 30,
            gravity: 1.15,
            scalar: 0.95,
            ticks: 200,
            origin: { x, y },
        });
    }, [getButtonOrigin]);

    const burstConfettiBig = useCallback(() => {
        const { x, y } = getButtonOrigin();
        confetti({
            particleCount: 120,
            spread: 85,
            startVelocity: 46,
            gravity: 1.05,
            scalar: 1.05,
            ticks: 280,
            origin: { x, y },
        });
    }, [getButtonOrigin]);

    const triggerBallBounce = useCallback(() => {
        const { px, py } = getButtonOrigin();
        setBallPos({ x: px, y: py });
        setTraj(makeBallTrajectory());
        setBallKey((k) => k + 1);
        setShowBall(true);
    }, [getButtonOrigin]);

    const handleLike = () => {
        setLiked(true);

        setLikes((prev) => {
            const next = prev + 1;

            if (next % 100 === 0) {
                burstConfettiSmall();
            } else {
                // 到 100 那一下更庆祝（可保留，也可删掉）
                if (next% 100 === 0) burstConfettiBig();

                triggerBallBounce();
            }

            return next;
        });

        setTimeout(() => setLiked(false), 450);
    };

    const hintText = useMemo(() => {
        if (likes < 100) {
            return (
                <>
                    点赞会放烟花～到 <span className="font-semibold text-white">100</span> 解锁彩蛋 😄
                </>
            );
        }
        return <>🎉 彩蛋已解锁！100 以后会随机“弹射皮球图”</>;
    }, [likes]);

    // 图片更大：这里统一控制尺寸
    const ballSizeClass = "w-40 h-40 sm:w-52 sm:h-52"; // ← 更大（你还想更大就继续加）

    return (
        <div>
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0A3161] text-white px-6 text-center py-16">
                <h1 className="text-5xl sm:text-6xl font-bold mb-4">Buy Me a Coffee ☕</h1>

                <p className="max-w-xl text-slate-200 mb-10">
                    If you found my work helpful, you can support me by scanning the QR code below.
                    Thank you — it really helps!
                </p>

                <div className="w-full max-w-md bg-white/10 backdrop-blur rounded-2xl shadow-xl p-6 sm:p-8 border border-white/15">
                    <div className="flex flex-col items-center">
                        <div className="bg-white rounded-xl p-3 shadow-md">
                            <img src={qrCode} alt="Donation QR code" className="w-56 h-56 object-contain" loading="lazy" />
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center">
                            <a
                                href={base}
                                className="px-6 py-3 rounded-full shadow-lg transition hover:opacity-90 inline-flex items-center justify-center"
                                style={{
                                    backgroundColor: "#f1c44f",
                                    color: "#0A3161",
                                    fontFamily: "Georgia, 'Times New Roman', serif",
                                }}
                            >
                                Return Home
                            </a>

                            <button
                                ref={btnRef}
                                onClick={handleLike}
                                className={`
                  px-6 py-3 rounded-full
                  border border-white/30
                  inline-flex items-center justify-center gap-2
                  transition-all duration-300
                  hover:bg-white/10
                  active:scale-95
                  ${liked ? "scale-110" : ""}
                `}
                            >
                                <span className={`text-xl transition-transform duration-300 ${liked ? "scale-125 rotate-12" : ""}`}>👍</span>
                                <span className="text-base font-medium">点赞</span>
                                {likes > 0 && <span className="ml-1 text-sm text-slate-300">{likes}</span>}
                            </button>
                        </div>

                        <div className="mt-4 text-slate-200 text-sm">{hintText}</div>
                    </div>
                </div>
            </div>

            {/* 随机弹射的“皮球图片” */}
            <AnimatePresence>
                {showBall && traj && (
                    <motion.img
                        key={ballKey}
                        src={easterBall}
                        alt="Easter egg"
                        className={`fixed z-[10000] ${ballSizeClass} pointer-events-none select-none`}
                        style={{
                            left: ballPos.x,
                            top: ballPos.y,
                            transform: "translate(-50%, -50%)",
                            filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.38))",
                        }}
                        initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scaleX: 0.55,
                            scaleY: 0.55,
                        }}
                        animate={{
                            opacity: [0, 1, 1, 1, 0],
                            x: traj.x,
                            y: traj.y,
                            rotate: traj.rotate,
                            scaleX: traj.scaleX,
                            scaleY: traj.scaleY,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: traj.duration,
                            times: traj.times,
                            ease: [0.18, 0.9, 0.22, 1],
                        }}
                        onAnimationComplete={() => setShowBall(false)}
                    />
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}

export default BuyMeACoffee;
