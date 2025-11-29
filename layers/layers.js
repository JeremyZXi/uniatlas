ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102003").setExtent([-7337477.495830, -2091680.355909, 3582266.092087, 5235625.848737]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DecTempMin2024_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Dec-TempMin-2024<br />\
    <img src="styles/legend/DecTempMin2024_1_0.png" /> <= -17.0<br />\
    <img src="styles/legend/DecTempMin2024_1_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/DecTempMin2024_1_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/DecTempMin2024_1_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/DecTempMin2024_1_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/DecTempMin2024_1_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/DecTempMin2024_1_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/DecTempMin2024_1_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/DecTempMin2024_1_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/DecTempMin2024_1_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/DecTempMin2024_1_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/DecTempMin2024_1_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/DecTempMin2024_1_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/DecTempMin2024_1_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/DecTempMin2024_1_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/DecTempMin2024_1_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/DecTempMin2024_1_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/DecTempMin2024_1_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DecTempMin2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_NovTempMin2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nov-TempMin-2024<br />\
    <img src="styles/legend/NovTempMin2024_2_0.png" /> <= -17.0<br />\
    <img src="styles/legend/NovTempMin2024_2_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/NovTempMin2024_2_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/NovTempMin2024_2_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/NovTempMin2024_2_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/NovTempMin2024_2_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/NovTempMin2024_2_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/NovTempMin2024_2_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/NovTempMin2024_2_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/NovTempMin2024_2_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/NovTempMin2024_2_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/NovTempMin2024_2_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/NovTempMin2024_2_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/NovTempMin2024_2_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/NovTempMin2024_2_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/NovTempMin2024_2_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/NovTempMin2024_2_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/NovTempMin2024_2_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NovTempMin2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_OctTempMin2024_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Oct-TempMin-2024<br />\
    <img src="styles/legend/OctTempMin2024_3_0.png" /> <= -17.0<br />\
    <img src="styles/legend/OctTempMin2024_3_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/OctTempMin2024_3_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/OctTempMin2024_3_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/OctTempMin2024_3_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/OctTempMin2024_3_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/OctTempMin2024_3_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/OctTempMin2024_3_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/OctTempMin2024_3_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/OctTempMin2024_3_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/OctTempMin2024_3_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/OctTempMin2024_3_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/OctTempMin2024_3_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/OctTempMin2024_3_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/OctTempMin2024_3_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/OctTempMin2024_3_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/OctTempMin2024_3_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/OctTempMin2024_3_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OctTempMin2024_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_SepTempMin2024_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sep-TempMin-2024<br />\
    <img src="styles/legend/SepTempMin2024_4_0.png" /> <= -17.0<br />\
    <img src="styles/legend/SepTempMin2024_4_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/SepTempMin2024_4_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/SepTempMin2024_4_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/SepTempMin2024_4_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/SepTempMin2024_4_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/SepTempMin2024_4_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/SepTempMin2024_4_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/SepTempMin2024_4_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/SepTempMin2024_4_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/SepTempMin2024_4_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/SepTempMin2024_4_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/SepTempMin2024_4_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/SepTempMin2024_4_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/SepTempMin2024_4_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/SepTempMin2024_4_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/SepTempMin2024_4_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/SepTempMin2024_4_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SepTempMin2024_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AugTempMin2024_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aug-TempMin-2024<br />\
    <img src="styles/legend/AugTempMin2024_5_0.png" /> <= -17.0<br />\
    <img src="styles/legend/AugTempMin2024_5_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/AugTempMin2024_5_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/AugTempMin2024_5_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/AugTempMin2024_5_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/AugTempMin2024_5_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/AugTempMin2024_5_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/AugTempMin2024_5_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/AugTempMin2024_5_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/AugTempMin2024_5_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/AugTempMin2024_5_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/AugTempMin2024_5_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/AugTempMin2024_5_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/AugTempMin2024_5_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/AugTempMin2024_5_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/AugTempMin2024_5_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/AugTempMin2024_5_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/AugTempMin2024_5_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AugTempMin2024_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JulTempMin2024_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jul-TempMin-2024<br />\
    <img src="styles/legend/JulTempMin2024_6_0.png" /> <= -17.0<br />\
    <img src="styles/legend/JulTempMin2024_6_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/JulTempMin2024_6_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/JulTempMin2024_6_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/JulTempMin2024_6_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/JulTempMin2024_6_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/JulTempMin2024_6_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/JulTempMin2024_6_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/JulTempMin2024_6_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/JulTempMin2024_6_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/JulTempMin2024_6_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/JulTempMin2024_6_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/JulTempMin2024_6_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/JulTempMin2024_6_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/JulTempMin2024_6_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/JulTempMin2024_6_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/JulTempMin2024_6_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/JulTempMin2024_6_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JulTempMin2024_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JunTempMin2024_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jun-TempMin-2024<br />\
    <img src="styles/legend/JunTempMin2024_7_0.png" /> <= -17.0<br />\
    <img src="styles/legend/JunTempMin2024_7_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/JunTempMin2024_7_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/JunTempMin2024_7_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/JunTempMin2024_7_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/JunTempMin2024_7_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/JunTempMin2024_7_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/JunTempMin2024_7_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/JunTempMin2024_7_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/JunTempMin2024_7_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/JunTempMin2024_7_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/JunTempMin2024_7_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/JunTempMin2024_7_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/JunTempMin2024_7_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/JunTempMin2024_7_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/JunTempMin2024_7_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/JunTempMin2024_7_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/JunTempMin2024_7_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JunTempMin2024_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MayTempMin2024_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'May-TempMin-2024<br />\
    <img src="styles/legend/MayTempMin2024_8_0.png" /> <= -17.0<br />\
    <img src="styles/legend/MayTempMin2024_8_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/MayTempMin2024_8_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/MayTempMin2024_8_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/MayTempMin2024_8_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/MayTempMin2024_8_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/MayTempMin2024_8_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/MayTempMin2024_8_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/MayTempMin2024_8_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/MayTempMin2024_8_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/MayTempMin2024_8_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/MayTempMin2024_8_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/MayTempMin2024_8_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/MayTempMin2024_8_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/MayTempMin2024_8_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/MayTempMin2024_8_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/MayTempMin2024_8_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/MayTempMin2024_8_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MayTempMin2024_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AprTempMin2024_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Apr-TempMin-2024<br />\
    <img src="styles/legend/AprTempMin2024_9_0.png" /> <= -17.0<br />\
    <img src="styles/legend/AprTempMin2024_9_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/AprTempMin2024_9_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/AprTempMin2024_9_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/AprTempMin2024_9_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/AprTempMin2024_9_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/AprTempMin2024_9_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/AprTempMin2024_9_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/AprTempMin2024_9_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/AprTempMin2024_9_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/AprTempMin2024_9_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/AprTempMin2024_9_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/AprTempMin2024_9_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/AprTempMin2024_9_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/AprTempMin2024_9_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/AprTempMin2024_9_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/AprTempMin2024_9_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/AprTempMin2024_9_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AprTempMin2024_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MarTempMin2024_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mar-TempMin-2024<br />\
    <img src="styles/legend/MarTempMin2024_10_0.png" /> <= -17.0<br />\
    <img src="styles/legend/MarTempMin2024_10_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/MarTempMin2024_10_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/MarTempMin2024_10_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/MarTempMin2024_10_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/MarTempMin2024_10_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/MarTempMin2024_10_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/MarTempMin2024_10_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/MarTempMin2024_10_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/MarTempMin2024_10_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/MarTempMin2024_10_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/MarTempMin2024_10_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/MarTempMin2024_10_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/MarTempMin2024_10_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/MarTempMin2024_10_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/MarTempMin2024_10_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/MarTempMin2024_10_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/MarTempMin2024_10_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MarTempMin2024_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_FebTempMin2024_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Feb-TempMin-2024<br />\
    <img src="styles/legend/FebTempMin2024_11_0.png" /> <= -17.0<br />\
    <img src="styles/legend/FebTempMin2024_11_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/FebTempMin2024_11_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/FebTempMin2024_11_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/FebTempMin2024_11_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/FebTempMin2024_11_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/FebTempMin2024_11_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/FebTempMin2024_11_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/FebTempMin2024_11_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/FebTempMin2024_11_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/FebTempMin2024_11_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/FebTempMin2024_11_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/FebTempMin2024_11_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/FebTempMin2024_11_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/FebTempMin2024_11_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/FebTempMin2024_11_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/FebTempMin2024_11_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/FebTempMin2024_11_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FebTempMin2024_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JanTempMin2024_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jan-TempMin-2024<br />\
    <img src="styles/legend/JanTempMin2024_12_0.png" /> <= -17.0<br />\
    <img src="styles/legend/JanTempMin2024_12_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/JanTempMin2024_12_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/JanTempMin2024_12_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/JanTempMin2024_12_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/JanTempMin2024_12_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/JanTempMin2024_12_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/JanTempMin2024_12_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/JanTempMin2024_12_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/JanTempMin2024_12_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/JanTempMin2024_12_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/JanTempMin2024_12_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/JanTempMin2024_12_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/JanTempMin2024_12_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/JanTempMin2024_12_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/JanTempMin2024_12_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/JanTempMin2024_12_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/JanTempMin2024_12_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JanTempMin2024_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_TempMinAverage_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMin-Average<br />\
    <img src="styles/legend/TempMinAverage_13_0.png" /> <= -17.00<br />\
    <img src="styles/legend/TempMinAverage_13_1.png" /> -17.00 - -13.00<br />\
    <img src="styles/legend/TempMinAverage_13_2.png" /> -13.00 - -9.00<br />\
    <img src="styles/legend/TempMinAverage_13_3.png" /> -9.00 - -5.00<br />\
    <img src="styles/legend/TempMinAverage_13_4.png" /> -5.00 - -1.00<br />\
    <img src="styles/legend/TempMinAverage_13_5.png" /> -1.00 - 3.00<br />\
    <img src="styles/legend/TempMinAverage_13_6.png" /> 3.00 - 7.00<br />\
    <img src="styles/legend/TempMinAverage_13_7.png" /> 7.00 - 11.00<br />\
    <img src="styles/legend/TempMinAverage_13_8.png" /> 11.00 - 15.00<br />\
    <img src="styles/legend/TempMinAverage_13_9.png" /> 15.00 - 19.00<br />\
    <img src="styles/legend/TempMinAverage_13_10.png" /> 19.00 - 23.00<br />\
    <img src="styles/legend/TempMinAverage_13_11.png" /> 23.00 - 27.00<br />\
    <img src="styles/legend/TempMinAverage_13_12.png" /> 27.00 - 31.00<br />\
    <img src="styles/legend/TempMinAverage_13_13.png" /> 31.00 - 35.00<br />\
    <img src="styles/legend/TempMinAverage_13_14.png" /> 35.00 - 39.00<br />\
    <img src="styles/legend/TempMinAverage_13_15.png" /> 39.00 - 43.00<br />\
    <img src="styles/legend/TempMinAverage_13_16.png" /> 43.00 - 47.00<br />\
    <img src="styles/legend/TempMinAverage_13_17.png" /> > 47.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMinAverage_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917255.134152, 2761025.857949, -7400427.352759, 6435458.969311]
        })
    });
var lyr_DecMeanTemp2024_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Dec-MeanTemp-2024<br />\
    <img src="styles/legend/DecMeanTemp2024_14_0.png" /> <= -11.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/DecMeanTemp2024_14_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DecMeanTemp2024_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_NovMeanTemp2024_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nov-MeanTemp-2024<br />\
    <img src="styles/legend/NovMeanTemp2024_15_0.png" /> <= -11.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/NovMeanTemp2024_15_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NovMeanTemp2024_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_OctMeanTemp2024_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Oct-MeanTemp-2024<br />\
    <img src="styles/legend/OctMeanTemp2024_16_0.png" /> <= -11.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/OctMeanTemp2024_16_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OctMeanTemp2024_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_SepMeanTemp2024_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sep-MeanTemp-2024<br />\
    <img src="styles/legend/SepMeanTemp2024_17_0.png" /> <= -11.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/SepMeanTemp2024_17_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SepMeanTemp2024_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AugMeanTemp2024_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aug-MeanTemp-2024<br />\
    <img src="styles/legend/AugMeanTemp2024_18_0.png" /> <= -11.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/AugMeanTemp2024_18_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AugMeanTemp2024_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JulMeanTemp2024_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jul-MeanTemp-2024<br />\
    <img src="styles/legend/JulMeanTemp2024_19_0.png" /> <= -11.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/JulMeanTemp2024_19_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JulMeanTemp2024_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JunMeanTemp2024_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jun-MeanTemp-2024<br />\
    <img src="styles/legend/JunMeanTemp2024_20_0.png" /> <= -11.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/JunMeanTemp2024_20_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JunMeanTemp2024_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MayMeanTemp2024_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'May-MeanTemp-2024<br />\
    <img src="styles/legend/MayMeanTemp2024_21_0.png" /> <= -11.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/MayMeanTemp2024_21_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MayMeanTemp2024_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AprMeanTemp2024_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Apr-MeanTemp-2024<br />\
    <img src="styles/legend/AprMeanTemp2024_22_0.png" /> <= -11.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/AprMeanTemp2024_22_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AprMeanTemp2024_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MarMeanTemp2024_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mar-MeanTemp-2024<br />\
    <img src="styles/legend/MarMeanTemp2024_23_0.png" /> <= -11.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_1.png" /> -11.0 - -7.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_2.png" /> -7.0 - -3.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_3.png" /> -3.0 - 1.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_4.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_5.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_6.png" /> 9.0 - 13.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_7.png" /> 13.0 - 17.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_8.png" /> 17.0 - 21.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_9.png" /> 21.0 - 25.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_10.png" /> 25.0 - 29.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_11.png" /> 29.0 - 33.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_12.png" /> 33.0 - 37.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_13.png" /> 37.0 - 41.0<br />\
    <img src="styles/legend/MarMeanTemp2024_23_14.png" /> > 41.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MarMeanTemp2024_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_FebMeanTemp2024_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Feb-MeanTemp-2024<br />\
    <img src="styles/legend/FebMeanTemp2024_24_0.png" /> <= -17.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_1.png" /> -17.0000 - -13.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_2.png" /> -13.0000 - -9.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_3.png" /> -9.0000 - -5.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_4.png" /> -5.0000 - -1.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_5.png" /> -1.0000 - 3.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_6.png" /> 3.0000 - 7.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_7.png" /> 7.0000 - 11.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_8.png" /> 11.0000 - 15.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_9.png" /> 15.0000 - 19.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_10.png" /> 19.0000 - 23.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_11.png" /> 23.0000 - 27.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_12.png" /> 27.0000 - 31.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_13.png" /> 31.0000 - 35.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_14.png" /> 35.0000 - 39.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_15.png" /> 39.0000 - 43.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_16.png" /> 43.0000 - 47.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_24_17.png" /> > 47.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FebMeanTemp2024_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JanMeanTemp2024_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jan-MeanTemp-2024<br />\
    <img src="styles/legend/JanMeanTemp2024_25_0.png" /> <= -17.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_1.png" /> -17.0000 - -13.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_2.png" /> -13.0000 - -9.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_3.png" /> -9.0000 - -5.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_4.png" /> -5.0000 - -1.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_5.png" /> -1.0000 - 3.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_6.png" /> 3.0000 - 7.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_7.png" /> 7.0000 - 11.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_8.png" /> 11.0000 - 15.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_9.png" /> 15.0000 - 19.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_10.png" /> 19.0000 - 23.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_11.png" /> 23.0000 - 27.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_12.png" /> 27.0000 - 31.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_13.png" /> 31.0000 - 35.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_14.png" /> 35.0000 - 39.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_15.png" /> 39.0000 - 43.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_16.png" /> 43.0000 - 47.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_25_17.png" /> > 47.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JanMeanTemp2024_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_TempMaxAvg_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMaxAvg<br />\
    <img src="styles/legend/TempMaxAvg_26_0.png" /> 0<br />\
    <img src="styles/legend/TempMaxAvg_26_1.png" /> 1<br />\
    <img src="styles/legend/TempMaxAvg_26_2.png" /> 2<br />\
    <img src="styles/legend/TempMaxAvg_26_3.png" /> 3<br />\
    <img src="styles/legend/TempMaxAvg_26_4.png" /> 4<br />\
    <img src="styles/legend/TempMaxAvg_26_5.png" /> 5<br />\
    <img src="styles/legend/TempMaxAvg_26_6.png" /> 6<br />\
    <img src="styles/legend/TempMaxAvg_26_7.png" /> 7<br />\
    <img src="styles/legend/TempMaxAvg_26_8.png" /> 8<br />\
    <img src="styles/legend/TempMaxAvg_26_9.png" /> 9<br />\
    <img src="styles/legend/TempMaxAvg_26_10.png" /> 10<br />\
    <img src="styles/legend/TempMaxAvg_26_11.png" /> 11<br />\
    <img src="styles/legend/TempMaxAvg_26_12.png" /> 12<br />\
    <img src="styles/legend/TempMaxAvg_26_13.png" /> 13<br />\
    <img src="styles/legend/TempMaxAvg_26_14.png" /> 14<br />\
    <img src="styles/legend/TempMaxAvg_26_15.png" /> 15<br />\
    <img src="styles/legend/TempMaxAvg_26_16.png" /> 16<br />\
    <img src="styles/legend/TempMaxAvg_26_17.png" /> 17<br />\
    <img src="styles/legend/TempMaxAvg_26_18.png" /> 18<br />\
    <img src="styles/legend/TempMaxAvg_26_19.png" /> 19<br />\
    <img src="styles/legend/TempMaxAvg_26_20.png" /> 20<br />\
    <img src="styles/legend/TempMaxAvg_26_21.png" /> 21<br />\
    <img src="styles/legend/TempMaxAvg_26_22.png" /> 22<br />\
    <img src="styles/legend/TempMaxAvg_26_23.png" /> 23<br />\
    <img src="styles/legend/TempMaxAvg_26_24.png" /> 24<br />\
    <img src="styles/legend/TempMaxAvg_26_25.png" /> 25<br />\
    <img src="styles/legend/TempMaxAvg_26_26.png" /> 26<br />\
    <img src="styles/legend/TempMaxAvg_26_27.png" /> 27<br />\
    <img src="styles/legend/TempMaxAvg_26_28.png" /> 28<br />\
    <img src="styles/legend/TempMaxAvg_26_29.png" /> 29<br />\
    <img src="styles/legend/TempMaxAvg_26_30.png" /> 30<br />\
    <img src="styles/legend/TempMaxAvg_26_31.png" /> 31<br />\
    <img src="styles/legend/TempMaxAvg_26_32.png" /> 32<br />\
    <img src="styles/legend/TempMaxAvg_26_33.png" /> 33<br />\
    <img src="styles/legend/TempMaxAvg_26_34.png" /> 34<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMaxAvg_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-19453771.012968, -55660.451865, 19333251.564258, 44927335.427096]
        })
    });
var lyr_TempMeanAverage_27 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMean-Average<br />\
    <img src="styles/legend/TempMeanAverage_27_0.png" /> <= -17.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_1.png" /> -17.0000 - -13.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_2.png" /> -13.0000 - -9.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_3.png" /> -9.0000 - -5.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_4.png" /> -5.0000 - -1.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_5.png" /> -1.0000 - 3.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_6.png" /> 3.0000 - 7.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_7.png" /> 7.0000 - 11.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_8.png" /> 11.0000 - 15.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_9.png" /> 15.0000 - 19.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_10.png" /> 19.0000 - 23.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_11.png" /> 23.0000 - 27.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_12.png" /> 27.0000 - 31.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_13.png" /> 31.0000 - 35.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_14.png" /> 35.0000 - 39.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_15.png" /> 39.0000 - 43.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_16.png" /> 43.0000 - 47.0000<br />\
    <img src="styles/legend/TempMeanAverage_27_17.png" /> > 47.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMeanAverage_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917255.134152, 2761025.857949, -7400427.352759, 6435458.969311]
        })
    });
var lyr_DecTempMax2024_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Dec-TempMax-2024<br />\
    <img src="styles/legend/DecTempMax2024_28_0.png" /> <= -17.0<br />\
    <img src="styles/legend/DecTempMax2024_28_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/DecTempMax2024_28_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/DecTempMax2024_28_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/DecTempMax2024_28_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/DecTempMax2024_28_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/DecTempMax2024_28_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/DecTempMax2024_28_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/DecTempMax2024_28_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/DecTempMax2024_28_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/DecTempMax2024_28_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/DecTempMax2024_28_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/DecTempMax2024_28_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/DecTempMax2024_28_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/DecTempMax2024_28_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/DecTempMax2024_28_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/DecTempMax2024_28_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/DecTempMax2024_28_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DecTempMax2024_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_NovTempMax2024_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nov-TempMax-2024<br />\
    <img src="styles/legend/NovTempMax2024_29_0.png" /> <= -17.0<br />\
    <img src="styles/legend/NovTempMax2024_29_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/NovTempMax2024_29_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/NovTempMax2024_29_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/NovTempMax2024_29_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/NovTempMax2024_29_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/NovTempMax2024_29_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/NovTempMax2024_29_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/NovTempMax2024_29_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/NovTempMax2024_29_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/NovTempMax2024_29_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/NovTempMax2024_29_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/NovTempMax2024_29_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/NovTempMax2024_29_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/NovTempMax2024_29_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/NovTempMax2024_29_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/NovTempMax2024_29_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/NovTempMax2024_29_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NovTempMax2024_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_OctTempMax2024_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Oct-TempMax-2024<br />\
    <img src="styles/legend/OctTempMax2024_30_0.png" /> <= -17.0<br />\
    <img src="styles/legend/OctTempMax2024_30_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/OctTempMax2024_30_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/OctTempMax2024_30_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/OctTempMax2024_30_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/OctTempMax2024_30_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/OctTempMax2024_30_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/OctTempMax2024_30_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/OctTempMax2024_30_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/OctTempMax2024_30_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/OctTempMax2024_30_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/OctTempMax2024_30_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/OctTempMax2024_30_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/OctTempMax2024_30_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/OctTempMax2024_30_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/OctTempMax2024_30_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/OctTempMax2024_30_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/OctTempMax2024_30_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OctTempMax2024_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_SepTempMax2024_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sep-TempMax-2024<br />\
    <img src="styles/legend/SepTempMax2024_31_0.png" /> <= -17.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_1.png" /> -17.0000 - -13.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_2.png" /> -13.0000 - -9.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_3.png" /> -9.0000 - -5.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_4.png" /> -5.0000 - -1.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_5.png" /> -1.0000 - 3.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_6.png" /> 3.0000 - 7.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_7.png" /> 7.0000 - 11.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_8.png" /> 11.0000 - 15.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_9.png" /> 15.0000 - 19.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_10.png" /> 19.0000 - 23.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_11.png" /> 23.0000 - 27.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_12.png" /> 27.0000 - 31.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_13.png" /> 31.0000 - 35.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_14.png" /> 35.0000 - 39.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_15.png" /> 39.0000 - 43.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_16.png" /> 43.0000 - 47.0000<br />\
    <img src="styles/legend/SepTempMax2024_31_17.png" /> > 47.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SepTempMax2024_31.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AugTempMax2024_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aug-TempMax-2024<br />\
    <img src="styles/legend/AugTempMax2024_32_0.png" /> <= -17.0<br />\
    <img src="styles/legend/AugTempMax2024_32_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/AugTempMax2024_32_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/AugTempMax2024_32_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/AugTempMax2024_32_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/AugTempMax2024_32_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/AugTempMax2024_32_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/AugTempMax2024_32_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/AugTempMax2024_32_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/AugTempMax2024_32_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/AugTempMax2024_32_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/AugTempMax2024_32_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/AugTempMax2024_32_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/AugTempMax2024_32_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/AugTempMax2024_32_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/AugTempMax2024_32_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/AugTempMax2024_32_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/AugTempMax2024_32_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AugTempMax2024_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JulTempMax2024_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jul-TempMax-2024<br />\
    <img src="styles/legend/JulTempMax2024_33_0.png" /> <= -17.0<br />\
    <img src="styles/legend/JulTempMax2024_33_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/JulTempMax2024_33_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/JulTempMax2024_33_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/JulTempMax2024_33_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/JulTempMax2024_33_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/JulTempMax2024_33_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/JulTempMax2024_33_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/JulTempMax2024_33_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/JulTempMax2024_33_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/JulTempMax2024_33_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/JulTempMax2024_33_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/JulTempMax2024_33_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/JulTempMax2024_33_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/JulTempMax2024_33_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/JulTempMax2024_33_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/JulTempMax2024_33_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/JulTempMax2024_33_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JulTempMax2024_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JunTempMax2024_34 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jun-TempMax-2024<br />\
    <img src="styles/legend/JunTempMax2024_34_0.png" /> <= -17.0<br />\
    <img src="styles/legend/JunTempMax2024_34_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/JunTempMax2024_34_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/JunTempMax2024_34_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/JunTempMax2024_34_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/JunTempMax2024_34_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/JunTempMax2024_34_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/JunTempMax2024_34_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/JunTempMax2024_34_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/JunTempMax2024_34_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/JunTempMax2024_34_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/JunTempMax2024_34_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/JunTempMax2024_34_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/JunTempMax2024_34_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/JunTempMax2024_34_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/JunTempMax2024_34_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/JunTempMax2024_34_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/JunTempMax2024_34_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JunTempMax2024_34.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MayTempMax2024_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'May-TempMax-2024<br />\
    <img src="styles/legend/MayTempMax2024_35_0.png" /> <= -17.0<br />\
    <img src="styles/legend/MayTempMax2024_35_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/MayTempMax2024_35_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/MayTempMax2024_35_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/MayTempMax2024_35_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/MayTempMax2024_35_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/MayTempMax2024_35_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/MayTempMax2024_35_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/MayTempMax2024_35_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/MayTempMax2024_35_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/MayTempMax2024_35_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/MayTempMax2024_35_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/MayTempMax2024_35_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/MayTempMax2024_35_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/MayTempMax2024_35_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/MayTempMax2024_35_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/MayTempMax2024_35_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/MayTempMax2024_35_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MayTempMax2024_35.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AprTempMax2024_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Apr-TempMax-2024<br />\
    <img src="styles/legend/AprTempMax2024_36_0.png" /> <= -17.0<br />\
    <img src="styles/legend/AprTempMax2024_36_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/AprTempMax2024_36_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/AprTempMax2024_36_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/AprTempMax2024_36_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/AprTempMax2024_36_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/AprTempMax2024_36_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/AprTempMax2024_36_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/AprTempMax2024_36_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/AprTempMax2024_36_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/AprTempMax2024_36_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/AprTempMax2024_36_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/AprTempMax2024_36_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/AprTempMax2024_36_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/AprTempMax2024_36_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/AprTempMax2024_36_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/AprTempMax2024_36_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/AprTempMax2024_36_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AprTempMax2024_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MarTempMax2024_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mar-TempMax-2024<br />\
    <img src="styles/legend/MarTempMax2024_37_0.png" /> <= -17.0<br />\
    <img src="styles/legend/MarTempMax2024_37_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/MarTempMax2024_37_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/MarTempMax2024_37_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/MarTempMax2024_37_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/MarTempMax2024_37_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/MarTempMax2024_37_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/MarTempMax2024_37_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/MarTempMax2024_37_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/MarTempMax2024_37_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/MarTempMax2024_37_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/MarTempMax2024_37_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/MarTempMax2024_37_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/MarTempMax2024_37_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/MarTempMax2024_37_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/MarTempMax2024_37_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/MarTempMax2024_37_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/MarTempMax2024_37_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MarTempMax2024_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_FebTempMax2024_38 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Feb-TempMax-2024<br />\
    <img src="styles/legend/FebTempMax2024_38_0.png" /> <= -17.0<br />\
    <img src="styles/legend/FebTempMax2024_38_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/FebTempMax2024_38_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/FebTempMax2024_38_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/FebTempMax2024_38_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/FebTempMax2024_38_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/FebTempMax2024_38_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/FebTempMax2024_38_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/FebTempMax2024_38_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/FebTempMax2024_38_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/FebTempMax2024_38_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/FebTempMax2024_38_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/FebTempMax2024_38_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/FebTempMax2024_38_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/FebTempMax2024_38_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/FebTempMax2024_38_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/FebTempMax2024_38_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/FebTempMax2024_38_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FebTempMax2024_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JanTempMax2024_39 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jan-TempMax-2024<br />\
    <img src="styles/legend/JanTempMax2024_39_0.png" /> <= -17.0<br />\
    <img src="styles/legend/JanTempMax2024_39_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/JanTempMax2024_39_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/JanTempMax2024_39_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/JanTempMax2024_39_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/JanTempMax2024_39_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/JanTempMax2024_39_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/JanTempMax2024_39_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/JanTempMax2024_39_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/JanTempMax2024_39_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/JanTempMax2024_39_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/JanTempMax2024_39_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/JanTempMax2024_39_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/JanTempMax2024_39_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/JanTempMax2024_39_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/JanTempMax2024_39_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/JanTempMax2024_39_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/JanTempMax2024_39_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JanTempMax2024_39.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_TempMaxAverage_40 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMax-Average<br />\
    <img src="styles/legend/TempMaxAverage_40_0.png" /> <= -17.00<br />\
    <img src="styles/legend/TempMaxAverage_40_1.png" /> -17.00 - -13.00<br />\
    <img src="styles/legend/TempMaxAverage_40_2.png" /> -13.00 - -9.00<br />\
    <img src="styles/legend/TempMaxAverage_40_3.png" /> -9.00 - -5.00<br />\
    <img src="styles/legend/TempMaxAverage_40_4.png" /> -5.00 - -1.00<br />\
    <img src="styles/legend/TempMaxAverage_40_5.png" /> -1.00 - 3.00<br />\
    <img src="styles/legend/TempMaxAverage_40_6.png" /> 3.00 - 7.00<br />\
    <img src="styles/legend/TempMaxAverage_40_7.png" /> 7.00 - 11.00<br />\
    <img src="styles/legend/TempMaxAverage_40_8.png" /> 11.00 - 15.00<br />\
    <img src="styles/legend/TempMaxAverage_40_9.png" /> 15.00 - 19.00<br />\
    <img src="styles/legend/TempMaxAverage_40_10.png" /> 19.00 - 23.00<br />\
    <img src="styles/legend/TempMaxAverage_40_11.png" /> 23.00 - 27.00<br />\
    <img src="styles/legend/TempMaxAverage_40_12.png" /> 27.00 - 31.00<br />\
    <img src="styles/legend/TempMaxAverage_40_13.png" /> 31.00 - 35.00<br />\
    <img src="styles/legend/TempMaxAverage_40_14.png" /> 35.00 - 39.00<br />\
    <img src="styles/legend/TempMaxAverage_40_15.png" /> 39.00 - 43.00<br />\
    <img src="styles/legend/TempMaxAverage_40_16.png" /> 43.00 - 47.00<br />\
    <img src="styles/legend/TempMaxAverage_40_17.png" /> > 47.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMaxAverage_40.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917255.134152, 2761025.857949, -7400427.352759, 6435458.969311]
        })
    });
var format_AnnualTuition_41 = new ol.format.GeoJSON();
var features_AnnualTuition_41 = format_AnnualTuition_41.readFeatures(json_AnnualTuition_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_AnnualTuition_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualTuition_41.addFeatures(features_AnnualTuition_41);
var lyr_AnnualTuition_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnnualTuition_41, 
                style: style_AnnualTuition_41,
                popuplayertitle: 'Annual Tuition',
                interactive: true,
    title: 'Annual Tuition<br />\
    <img src="styles/legend/AnnualTuition_41_0.png" /> 28794 - 34590<br />\
    <img src="styles/legend/AnnualTuition_41_1.png" /> 34590 - 40386<br />\
    <img src="styles/legend/AnnualTuition_41_2.png" /> 40386 - 46182<br />\
    <img src="styles/legend/AnnualTuition_41_3.png" /> 46182 - 51978<br />\
    <img src="styles/legend/AnnualTuition_41_4.png" /> 51978 - 57774<br />\
    <img src="styles/legend/AnnualTuition_41_5.png" /> 57774 - 63570<br />\
    <img src="styles/legend/AnnualTuition_41_6.png" /> 63570 - 69366<br />\
    <img src="styles/legend/AnnualTuition_41_7.png" /> 69366 - 75162<br />' });
var format_QSRanking2026_42 = new ol.format.GeoJSON();
var features_QSRanking2026_42 = format_QSRanking2026_42.readFeatures(json_QSRanking2026_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_QSRanking2026_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QSRanking2026_42.addFeatures(features_QSRanking2026_42);
var lyr_QSRanking2026_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QSRanking2026_42, 
                style: style_QSRanking2026_42,
                popuplayertitle: 'QS Ranking(2026)',
                interactive: true,
    title: 'QS Ranking(2026)<br />\
    <img src="styles/legend/QSRanking2026_42_0.png" /> 1 - 30<br />\
    <img src="styles/legend/QSRanking2026_42_1.png" /> 30 - 60<br />\
    <img src="styles/legend/QSRanking2026_42_2.png" /> 60 - 100<br />\
    <img src="styles/legend/QSRanking2026_42_3.png" /> 100 - 250<br />\
    <img src="styles/legend/QSRanking2026_42_4.png" /> 250 - 350<br />\
    <img src="styles/legend/QSRanking2026_42_5.png" /> 350 - 500<br />\
    <img src="styles/legend/QSRanking2026_42_6.png" /> 500 - 590<br />\
    <img src="styles/legend/QSRanking2026_42_7.png" /> 590 - 668<br />' });
var format_USNewsRanking2026_43 = new ol.format.GeoJSON();
var features_USNewsRanking2026_43 = format_USNewsRanking2026_43.readFeatures(json_USNewsRanking2026_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USNewsRanking2026_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USNewsRanking2026_43.addFeatures(features_USNewsRanking2026_43);
var lyr_USNewsRanking2026_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USNewsRanking2026_43, 
                style: style_USNewsRanking2026_43,
                popuplayertitle: 'U.S.News Ranking(2026)',
                interactive: true,
    title: 'U.S.News Ranking(2026)<br />\
    <img src="styles/legend/USNewsRanking2026_43_0.png" /> 1 - 5<br />\
    <img src="styles/legend/USNewsRanking2026_43_1.png" /> 5 - 7<br />\
    <img src="styles/legend/USNewsRanking2026_43_2.png" /> 7 - 13<br />\
    <img src="styles/legend/USNewsRanking2026_43_3.png" /> 13 - 15<br />\
    <img src="styles/legend/USNewsRanking2026_43_4.png" /> 15 - 21<br />\
    <img src="styles/legend/USNewsRanking2026_43_5.png" /> 21 - 26<br />\
    <img src="styles/legend/USNewsRanking2026_43_6.png" /> 26 - 32<br />\
    <img src="styles/legend/USNewsRanking2026_43_7.png" /> 32 - 42<br />\
    <img src="styles/legend/USNewsRanking2026_43_8.png" /> 42 - 46<br />' });
var format_TestPolicy_44 = new ol.format.GeoJSON();
var features_TestPolicy_44 = format_TestPolicy_44.readFeatures(json_TestPolicy_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_TestPolicy_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestPolicy_44.addFeatures(features_TestPolicy_44);
var lyr_TestPolicy_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestPolicy_44, 
                style: style_TestPolicy_44,
                popuplayertitle: 'Test-Policy',
                interactive: true,
    title: 'Test-Policy<br />\
    <img src="styles/legend/TestPolicy_44_0.png" /> Test-Optional<br />\
    <img src="styles/legend/TestPolicy_44_1.png" /> Test-Required<br />\
    <img src="styles/legend/TestPolicy_44_2.png" /> Test-Blind<br />' });
var format_AcceptanceRate_45 = new ol.format.GeoJSON();
var features_AcceptanceRate_45 = format_AcceptanceRate_45.readFeatures(json_AcceptanceRate_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_AcceptanceRate_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcceptanceRate_45.addFeatures(features_AcceptanceRate_45);
var lyr_AcceptanceRate_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcceptanceRate_45, 
                style: style_AcceptanceRate_45,
                popuplayertitle: 'Acceptance Rate %',
                interactive: true,
    title: 'Acceptance Rate %<br />\
    <img src="styles/legend/AcceptanceRate_45_0.png" /> 2 - 5<br />\
    <img src="styles/legend/AcceptanceRate_45_1.png" /> 5 - 8<br />\
    <img src="styles/legend/AcceptanceRate_45_2.png" /> 9 - 14<br />\
    <img src="styles/legend/AcceptanceRate_45_3.png" /> 14 - 20<br />\
    <img src="styles/legend/AcceptanceRate_45_4.png" /> 20 - 28<br />\
    <img src="styles/legend/AcceptanceRate_45_5.png" /> 28 - 36<br />\
    <img src="styles/legend/AcceptanceRate_45_6.png" /> 36 - 45<br />\
    <img src="styles/legend/AcceptanceRate_45_7.png" /> 45 - 65.4<br />' });
var format_LowerBoundSAT_46 = new ol.format.GeoJSON();
var features_LowerBoundSAT_46 = format_LowerBoundSAT_46.readFeatures(json_LowerBoundSAT_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_LowerBoundSAT_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerBoundSAT_46.addFeatures(features_LowerBoundSAT_46);
var lyr_LowerBoundSAT_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowerBoundSAT_46, 
                style: style_LowerBoundSAT_46,
                popuplayertitle: 'Lower Bound SAT',
                interactive: true,
    title: 'Lower Bound SAT<br />\
    <img src="styles/legend/LowerBoundSAT_46_0.png" /> 1200 - 1255<br />\
    <img src="styles/legend/LowerBoundSAT_46_1.png" /> 1255 - 1310<br />\
    <img src="styles/legend/LowerBoundSAT_46_2.png" /> 1310 - 1365<br />\
    <img src="styles/legend/LowerBoundSAT_46_3.png" /> 1365 - 1420<br />\
    <img src="styles/legend/LowerBoundSAT_46_4.png" /> 1420 - 1475<br />\
    <img src="styles/legend/LowerBoundSAT_46_5.png" /> 1475 - 1530<br />' });
var format_UndergraduateSize_47 = new ol.format.GeoJSON();
var features_UndergraduateSize_47 = format_UndergraduateSize_47.readFeatures(json_UndergraduateSize_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_UndergraduateSize_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UndergraduateSize_47.addFeatures(features_UndergraduateSize_47);
var lyr_UndergraduateSize_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UndergraduateSize_47, 
                style: style_UndergraduateSize_47,
                popuplayertitle: 'Undergraduate Size',
                interactive: true,
    title: 'Undergraduate Size<br />\
    <img src="styles/legend/UndergraduateSize_47_0.png" /> 921 - 6658<br />\
    <img src="styles/legend/UndergraduateSize_47_1.png" /> 6658 - 12395<br />\
    <img src="styles/legend/UndergraduateSize_47_2.png" /> 12395 - 18131<br />\
    <img src="styles/legend/UndergraduateSize_47_3.png" /> 18131 - 23868<br />\
    <img src="styles/legend/UndergraduateSize_47_4.png" /> 23868 - 29605<br />\
    <img src="styles/legend/UndergraduateSize_47_5.png" /> 29605 - 35342<br />\
    <img src="styles/legend/UndergraduateSize_47_6.png" /> 35342 - 41078<br />\
    <img src="styles/legend/UndergraduateSize_47_7.png" /> 41078 - 46815<br />' });
var format_StartingSalary_48 = new ol.format.GeoJSON();
var features_StartingSalary_48 = format_StartingSalary_48.readFeatures(json_StartingSalary_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StartingSalary_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartingSalary_48.addFeatures(features_StartingSalary_48);
var lyr_StartingSalary_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StartingSalary_48, 
                style: style_StartingSalary_48,
                popuplayertitle: 'Starting Salary',
                interactive: true,
    title: 'Starting Salary<br />\
    <img src="styles/legend/StartingSalary_48_0.png" /> 45731 - 52678<br />\
    <img src="styles/legend/StartingSalary_48_1.png" /> 52678 - 59815<br />\
    <img src="styles/legend/StartingSalary_48_2.png" /> 59815 - 64601<br />\
    <img src="styles/legend/StartingSalary_48_3.png" /> 64601 - 71066<br />\
    <img src="styles/legend/StartingSalary_48_4.png" /> 71066 - 80134<br />\
    <img src="styles/legend/StartingSalary_48_5.png" /> 80134 - 96255<br />\
    <img src="styles/legend/StartingSalary_48_6.png" /> 96255 - 114055<br />\
    <img src="styles/legend/StartingSalary_48_7.png" /> 114055 - 132140<br />' });
var format_UniversityBoundaries_49 = new ol.format.GeoJSON();
var features_UniversityBoundaries_49 = format_UniversityBoundaries_49.readFeatures(json_UniversityBoundaries_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_UniversityBoundaries_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityBoundaries_49.addFeatures(features_UniversityBoundaries_49);
var lyr_UniversityBoundaries_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityBoundaries_49, 
                style: style_UniversityBoundaries_49,
                popuplayertitle: 'University Boundaries',
                interactive: false,
                title: '<img src="styles/legend/UniversityBoundaries_49.png" /> University Boundaries'
            });
var format_Universities_Nov21_50 = new ol.format.GeoJSON();
var features_Universities_Nov21_50 = format_Universities_Nov21_50.readFeatures(json_Universities_Nov21_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_Universities_Nov21_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universities_Nov21_50.addFeatures(features_Universities_Nov21_50);
cluster_Universities_Nov21_50 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Universities_Nov21_50
});
var lyr_Universities_Nov21_50 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Universities_Nov21_50, 
                style: style_Universities_Nov21_50,
                popuplayertitle: 'Universities_Nov21',
                interactive: true,
    title: 'Universities_Nov21<br />\
    <img src="styles/legend/Universities_Nov21_50_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/Universities_Nov21_50_1.png" /> Private<br />\
    <img src="styles/legend/Universities_Nov21_50_2.png" /> Public<br />' });
var format_ski_resorts_51 = new ol.format.GeoJSON();
var features_ski_resorts_51 = format_ski_resorts_51.readFeatures(json_ski_resorts_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_ski_resorts_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ski_resorts_51.addFeatures(features_ski_resorts_51);
var lyr_ski_resorts_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ski_resorts_51, 
                style: style_ski_resorts_51,
                popuplayertitle: 'ski_resorts',
                interactive: false,
                title: '<img src="styles/legend/ski_resorts_51.png" /> ski_resorts'
            });
var format_beach_attributes_20240228_52 = new ol.format.GeoJSON();
var features_beach_attributes_20240228_52 = format_beach_attributes_20240228_52.readFeatures(json_beach_attributes_20240228_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_beach_attributes_20240228_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beach_attributes_20240228_52.addFeatures(features_beach_attributes_20240228_52);
var lyr_beach_attributes_20240228_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beach_attributes_20240228_52, 
                style: style_beach_attributes_20240228_52,
                popuplayertitle: 'beach_attributes_20240228',
                interactive: false,
                title: '<img src="styles/legend/beach_attributes_20240228_52.png" /> beach_attributes_20240228'
            });
var format_StateBorder_53 = new ol.format.GeoJSON();
var features_StateBorder_53 = format_StateBorder_53.readFeatures(json_StateBorder_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StateBorder_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBorder_53.addFeatures(features_StateBorder_53);
var lyr_StateBorder_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBorder_53, 
                style: style_StateBorder_53,
                popuplayertitle: 'State-Border',
                interactive: false,
                title: '<img src="styles/legend/StateBorder_53.png" /> State-Border'
            });
var format_USABorder_54 = new ol.format.GeoJSON();
var features_USABorder_54 = format_USABorder_54.readFeatures(json_USABorder_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USABorder_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USABorder_54.addFeatures(features_USABorder_54);
var lyr_USABorder_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USABorder_54, 
                style: style_USABorder_54,
                popuplayertitle: 'USA-Border',
                interactive: false,
                title: '<img src="styles/legend/USABorder_54.png" /> USA-Border'
            });
var group_Leisure = new ol.layer.Group({
                                layers: [lyr_ski_resorts_51,lyr_beach_attributes_20240228_52,],
                                fold: 'close',
                                title: 'Leisure'});
var group_College_Info = new ol.layer.Group({
                                layers: [lyr_AnnualTuition_41,lyr_QSRanking2026_42,lyr_USNewsRanking2026_43,lyr_TestPolicy_44,lyr_AcceptanceRate_45,lyr_LowerBoundSAT_46,lyr_UndergraduateSize_47,lyr_StartingSalary_48,],
                                fold: 'close',
                                title: 'College_Info'});
var group_TempMax = new ol.layer.Group({
                                layers: [lyr_DecTempMax2024_28,lyr_NovTempMax2024_29,lyr_OctTempMax2024_30,lyr_SepTempMax2024_31,lyr_AugTempMax2024_32,lyr_JulTempMax2024_33,lyr_JunTempMax2024_34,lyr_MayTempMax2024_35,lyr_AprTempMax2024_36,lyr_MarTempMax2024_37,lyr_FebTempMax2024_38,lyr_JanTempMax2024_39,lyr_TempMaxAverage_40,],
                                fold: 'close',
                                title: 'TempMax'});
var group_TempMean = new ol.layer.Group({
                                layers: [lyr_DecMeanTemp2024_14,lyr_NovMeanTemp2024_15,lyr_OctMeanTemp2024_16,lyr_SepMeanTemp2024_17,lyr_AugMeanTemp2024_18,lyr_JulMeanTemp2024_19,lyr_JunMeanTemp2024_20,lyr_MayMeanTemp2024_21,lyr_AprMeanTemp2024_22,lyr_MarMeanTemp2024_23,lyr_FebMeanTemp2024_24,lyr_JanMeanTemp2024_25,lyr_TempMaxAvg_26,lyr_TempMeanAverage_27,],
                                fold: 'close',
                                title: 'TempMean'});
var group_TempMin = new ol.layer.Group({
                                layers: [lyr_DecTempMin2024_1,lyr_NovTempMin2024_2,lyr_OctTempMin2024_3,lyr_SepTempMin2024_4,lyr_AugTempMin2024_5,lyr_JulTempMin2024_6,lyr_JunTempMin2024_7,lyr_MayTempMin2024_8,lyr_AprTempMin2024_9,lyr_MarTempMin2024_10,lyr_FebTempMin2024_11,lyr_JanTempMin2024_12,lyr_TempMinAverage_13,],
                                fold: 'close',
                                title: 'TempMin'});

lyr_GoogleSatellite_0.setVisible(true);lyr_DecTempMin2024_1.setVisible(true);lyr_NovTempMin2024_2.setVisible(true);lyr_OctTempMin2024_3.setVisible(true);lyr_SepTempMin2024_4.setVisible(true);lyr_AugTempMin2024_5.setVisible(true);lyr_JulTempMin2024_6.setVisible(true);lyr_JunTempMin2024_7.setVisible(true);lyr_MayTempMin2024_8.setVisible(true);lyr_AprTempMin2024_9.setVisible(true);lyr_MarTempMin2024_10.setVisible(true);lyr_FebTempMin2024_11.setVisible(true);lyr_JanTempMin2024_12.setVisible(true);lyr_TempMinAverage_13.setVisible(true);lyr_DecMeanTemp2024_14.setVisible(true);lyr_NovMeanTemp2024_15.setVisible(true);lyr_OctMeanTemp2024_16.setVisible(true);lyr_SepMeanTemp2024_17.setVisible(true);lyr_AugMeanTemp2024_18.setVisible(true);lyr_JulMeanTemp2024_19.setVisible(true);lyr_JunMeanTemp2024_20.setVisible(true);lyr_MayMeanTemp2024_21.setVisible(true);lyr_AprMeanTemp2024_22.setVisible(true);lyr_MarMeanTemp2024_23.setVisible(true);lyr_FebMeanTemp2024_24.setVisible(true);lyr_JanMeanTemp2024_25.setVisible(true);lyr_TempMaxAvg_26.setVisible(true);lyr_TempMeanAverage_27.setVisible(true);lyr_DecTempMax2024_28.setVisible(true);lyr_NovTempMax2024_29.setVisible(true);lyr_OctTempMax2024_30.setVisible(true);lyr_SepTempMax2024_31.setVisible(true);lyr_AugTempMax2024_32.setVisible(true);lyr_JulTempMax2024_33.setVisible(true);lyr_JunTempMax2024_34.setVisible(true);lyr_MayTempMax2024_35.setVisible(true);lyr_AprTempMax2024_36.setVisible(true);lyr_MarTempMax2024_37.setVisible(true);lyr_FebTempMax2024_38.setVisible(true);lyr_JanTempMax2024_39.setVisible(true);lyr_TempMaxAverage_40.setVisible(true);lyr_AnnualTuition_41.setVisible(true);lyr_QSRanking2026_42.setVisible(true);lyr_USNewsRanking2026_43.setVisible(true);lyr_TestPolicy_44.setVisible(true);lyr_AcceptanceRate_45.setVisible(true);lyr_LowerBoundSAT_46.setVisible(true);lyr_UndergraduateSize_47.setVisible(true);lyr_StartingSalary_48.setVisible(true);lyr_UniversityBoundaries_49.setVisible(true);lyr_Universities_Nov21_50.setVisible(true);lyr_ski_resorts_51.setVisible(true);lyr_beach_attributes_20240228_52.setVisible(true);lyr_StateBorder_53.setVisible(true);lyr_USABorder_54.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TempMin,group_TempMean,group_TempMax,group_College_Info,lyr_UniversityBoundaries_49,lyr_Universities_Nov21_50,group_Leisure,lyr_StateBorder_53,lyr_USABorder_54];
lyr_AnnualTuition_41.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_QSRanking2026_42.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_USNewsRanking2026_43.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_TestPolicy_44.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_AcceptanceRate_45.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_LowerBoundSAT_46.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_UndergraduateSize_47.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_StartingSalary_48.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_UniversityBoundaries_49.set('fieldAliases', {'AREALAND': 'AREALAND', 'CENTLON': 'CENTLON', 'AREAWATER': 'AREAWATER', 'AREA': 'AREA', 'BASENAME': 'BASENAME', 'OID': 'OID', 'FUNCSTAT': 'FUNCSTAT', 'INTPTLAT': 'INTPTLAT', 'LEN': 'LEN', 'CENTLAT': 'CENTLAT', 'LNDMRKNS': 'LNDMRKNS', 'MTFCC': 'MTFCC', 'INTPTLON': 'INTPTLON', 'LSADC': 'LSADC', 'NAME': 'NAME', });
lyr_Universities_Nov21_50.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_ski_resorts_51.set('fieldAliases', {'LAT': 'LAT', 'LONG': 'LONG', 'STATE': 'STATE', 'NAME': 'NAME', 'TYPE': 'TYPE', 'ObjectId': 'ObjectId', 'Feature': 'Feature', 'Size_Value': 'Size_Value', });
lyr_beach_attributes_20240228_52.set('fieldAliases', {'BEACH_ID': 'BEACH_ID', 'PRG_INT_CODE': 'PRG_INT_CODE', 'BEACH_NAME': 'BEACH_NAME', 'BEACH_COUNTY': 'BEACH_COUNTY', 'BEACH_STATE': 'BEACH_STATE', 'BEACH_TRIBE_CODE': 'BEACH_TRIBE_CODE', 'HISTORICAL_ID_FLAG': 'HISTORICAL_ID_FLAG', 'BEACH_LEN_IN_MI': 'BEACH_LEN_IN_MI', 'BEACH_LATEST_BEACH_YEAR': 'BEACH_LATEST_BEACH_YEAR', 'BEACH_ACCESS': 'BEACH_ACCESS', 'OWNER_ACCESS': 'OWNER_ACCESS', 'DORMANT_STATUS': 'DORMANT_STATUS', 'START_LATITUDE_MEASURE': 'START_LATITUDE_MEASURE', 'START_LONGITUDE_MEASURE': 'START_LONGITUDE_MEASURE', 'END_LATITUDE_MEASURE': 'END_LATITUDE_MEASURE', 'END_LONGITUDE_MEASURE': 'END_LONGITUDE_MEASURE', 'SOURCE_MAP_SCALE': 'SOURCE_MAP_SCALE', 'H_REREFENCE_DATUM_NAME': 'H_REREFENCE_DATUM_NAME', 'STATE_CONTACT_FIRST_NAME': 'STATE_CONTACT_FIRST_NAME', 'STATE_CONTACT_LAST_NAME': 'STATE_CONTACT_LAST_NAME', 'STATE_CONTACT_AGENCY_NAME': 'STATE_CONTACT_AGENCY_NAME', 'STATE_CONTACT_TEL_NUMBER': 'STATE_CONTACT_TEL_NUMBER', 'STATE_CONTACT_URL': 'STATE_CONTACT_URL', 'SOURCE_JOINKEY': 'SOURCE_JOINKEY', });
lyr_StateBorder_53.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'ste_area_code': 'ste_area_code', 'ste_type': 'ste_type', 'ste_name_long': 'ste_name_long', 'ste_fp_code': 'ste_fp_code', 'ste_gnis_code': 'ste_gnis_code', });
lyr_USABorder_54.set('fieldAliases', {'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', });
lyr_AnnualTuition_41.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_QSRanking2026_42.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_USNewsRanking2026_43.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_TestPolicy_44.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_AcceptanceRate_45.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_LowerBoundSAT_46.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_UndergraduateSize_47.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_StartingSalary_48.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_UniversityBoundaries_49.set('fieldImages', {'AREALAND': 'TextEdit', 'CENTLON': 'TextEdit', 'AREAWATER': 'TextEdit', 'AREA': 'TextEdit', 'BASENAME': 'TextEdit', 'OID': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'INTPTLAT': 'TextEdit', 'LEN': 'TextEdit', 'CENTLAT': 'TextEdit', 'LNDMRKNS': 'TextEdit', 'MTFCC': 'TextEdit', 'INTPTLON': 'TextEdit', 'LSADC': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Universities_Nov21_50.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_ski_resorts_51.set('fieldImages', {'LAT': 'TextEdit', 'LONG': 'TextEdit', 'STATE': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'ObjectId': 'Range', 'Feature': 'TextEdit', 'Size_Value': 'TextEdit', });
lyr_beach_attributes_20240228_52.set('fieldImages', {'BEACH_ID': 'TextEdit', 'PRG_INT_CODE': 'Range', 'BEACH_NAME': 'TextEdit', 'BEACH_COUNTY': 'TextEdit', 'BEACH_STATE': 'TextEdit', 'BEACH_TRIBE_CODE': 'TextEdit', 'HISTORICAL_ID_FLAG': 'TextEdit', 'BEACH_LEN_IN_MI': 'TextEdit', 'BEACH_LATEST_BEACH_YEAR': 'Range', 'BEACH_ACCESS': 'TextEdit', 'OWNER_ACCESS': 'TextEdit', 'DORMANT_STATUS': 'TextEdit', 'START_LATITUDE_MEASURE': 'TextEdit', 'START_LONGITUDE_MEASURE': 'TextEdit', 'END_LATITUDE_MEASURE': 'TextEdit', 'END_LONGITUDE_MEASURE': 'TextEdit', 'SOURCE_MAP_SCALE': 'Range', 'H_REREFENCE_DATUM_NAME': 'TextEdit', 'STATE_CONTACT_FIRST_NAME': 'TextEdit', 'STATE_CONTACT_LAST_NAME': 'TextEdit', 'STATE_CONTACT_AGENCY_NAME': 'TextEdit', 'STATE_CONTACT_TEL_NUMBER': 'TextEdit', 'STATE_CONTACT_URL': 'TextEdit', 'SOURCE_JOINKEY': 'TextEdit', });
lyr_StateBorder_53.set('fieldImages', {'geo_point_2d': 'TextEdit', 'year': 'TextEdit', 'ste_code': 'List', 'ste_name': 'List', 'ste_area_code': 'TextEdit', 'ste_type': 'TextEdit', 'ste_name_long': 'TextEdit', 'ste_fp_code': 'TextEdit', 'ste_gnis_code': 'TextEdit', });
lyr_USABorder_54.set('fieldImages', {'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_AnnualTuition_41.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_QSRanking2026_42.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_USNewsRanking2026_43.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_TestPolicy_44.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_AcceptanceRate_45.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_LowerBoundSAT_46.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'header label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_UndergraduateSize_47.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_StartingSalary_48.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_UniversityBoundaries_49.set('fieldLabels', {'AREALAND': 'no label', 'CENTLON': 'no label', 'AREAWATER': 'no label', 'AREA': 'no label', 'BASENAME': 'no label', 'OID': 'no label', 'FUNCSTAT': 'no label', 'INTPTLAT': 'no label', 'LEN': 'no label', 'CENTLAT': 'no label', 'LNDMRKNS': 'no label', 'MTFCC': 'no label', 'INTPTLON': 'no label', 'LSADC': 'no label', 'NAME': 'no label', });
lyr_Universities_Nov21_50.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_ski_resorts_51.set('fieldLabels', {'LAT': 'no label', 'LONG': 'no label', 'STATE': 'no label', 'NAME': 'no label', 'TYPE': 'no label', 'ObjectId': 'no label', 'Feature': 'no label', 'Size_Value': 'no label', });
lyr_beach_attributes_20240228_52.set('fieldLabels', {'BEACH_ID': 'no label', 'PRG_INT_CODE': 'no label', 'BEACH_NAME': 'no label', 'BEACH_COUNTY': 'no label', 'BEACH_STATE': 'no label', 'BEACH_TRIBE_CODE': 'no label', 'HISTORICAL_ID_FLAG': 'no label', 'BEACH_LEN_IN_MI': 'no label', 'BEACH_LATEST_BEACH_YEAR': 'no label', 'BEACH_ACCESS': 'no label', 'OWNER_ACCESS': 'no label', 'DORMANT_STATUS': 'no label', 'START_LATITUDE_MEASURE': 'no label', 'START_LONGITUDE_MEASURE': 'no label', 'END_LATITUDE_MEASURE': 'no label', 'END_LONGITUDE_MEASURE': 'no label', 'SOURCE_MAP_SCALE': 'no label', 'H_REREFENCE_DATUM_NAME': 'no label', 'STATE_CONTACT_FIRST_NAME': 'no label', 'STATE_CONTACT_LAST_NAME': 'no label', 'STATE_CONTACT_AGENCY_NAME': 'no label', 'STATE_CONTACT_TEL_NUMBER': 'no label', 'STATE_CONTACT_URL': 'no label', 'SOURCE_JOINKEY': 'no label', });
lyr_StateBorder_53.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'ste_code': 'no label', 'ste_name': 'no label', 'ste_area_code': 'no label', 'ste_type': 'no label', 'ste_name_long': 'no label', 'ste_fp_code': 'no label', 'ste_gnis_code': 'no label', });
lyr_USABorder_54.set('fieldLabels', {'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', });
lyr_USABorder_54.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});