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
var lyr_DecMeanTemp2024_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Dec-MeanTemp-2024<br />\
    <img src="styles/legend/DecMeanTemp2024_1_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/DecMeanTemp2024_1_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DecMeanTemp2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_NovMeanTemp2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nov-MeanTemp-2024<br />\
    <img src="styles/legend/NovMeanTemp2024_2_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/NovMeanTemp2024_2_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NovMeanTemp2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_OctMeanTemp2024_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Oct-MeanTemp-2024<br />\
    <img src="styles/legend/OctMeanTemp2024_3_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/OctMeanTemp2024_3_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OctMeanTemp2024_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_SepMeanTemp2024_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sep-MeanTemp-2024<br />\
    <img src="styles/legend/SepMeanTemp2024_4_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/SepMeanTemp2024_4_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SepMeanTemp2024_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AugMeanTemp2024_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aug-MeanTemp-2024<br />\
    <img src="styles/legend/AugMeanTemp2024_5_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/AugMeanTemp2024_5_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AugMeanTemp2024_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JulMeanTemp2024_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jul-MeanTemp-2024<br />\
    <img src="styles/legend/JulMeanTemp2024_6_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/JulMeanTemp2024_6_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JulMeanTemp2024_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JunMeanTemp2024_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jun-MeanTemp-2024<br />\
    <img src="styles/legend/JunMeanTemp2024_7_0.png" /> <= -11.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_1.png" /> -11.00 - -7.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_2.png" /> -7.00 - -3.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_3.png" /> -3.00 - 1.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_4.png" /> 1.00 - 5.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_5.png" /> 5.00 - 9.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_6.png" /> 9.00 - 13.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_7.png" /> 13.00 - 17.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_8.png" /> 17.00 - 21.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_9.png" /> 21.00 - 25.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_10.png" /> 25.00 - 29.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_11.png" /> 29.00 - 33.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_12.png" /> 33.00 - 37.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_13.png" /> 37.00 - 41.00<br />\
    <img src="styles/legend/JunMeanTemp2024_7_14.png" /> > 41.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JunMeanTemp2024_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MayMeanTemp2024_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'May-MeanTemp-2024<br />\
    <img src="styles/legend/MayMeanTemp2024_8_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/MayMeanTemp2024_8_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MayMeanTemp2024_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_AprMeanTemp2024_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Apr-MeanTemp-2024<br />\
    <img src="styles/legend/AprMeanTemp2024_9_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/AprMeanTemp2024_9_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/AprMeanTemp2024_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MarMeanTemp2024_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mar-MeanTemp-2024<br />\
    <img src="styles/legend/MarMeanTemp2024_10_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/MarMeanTemp2024_10_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MarMeanTemp2024_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_FebMeanTemp2024_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Feb-MeanTemp-2024<br />\
    <img src="styles/legend/FebMeanTemp2024_11_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/FebMeanTemp2024_11_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FebMeanTemp2024_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_JanMeanTemp2024_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jan-MeanTemp-2024<br />\
    <img src="styles/legend/JanMeanTemp2024_12_0.png" /> <= -11.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_1.png" /> -11.0000 - -7.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_2.png" /> -7.0000 - -3.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_3.png" /> -3.0000 - 1.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_4.png" /> 1.0000 - 5.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_5.png" /> 5.0000 - 9.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_6.png" /> 9.0000 - 13.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_7.png" /> 13.0000 - 17.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_8.png" /> 17.0000 - 21.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_9.png" /> 21.0000 - 25.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_10.png" /> 25.0000 - 29.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_11.png" /> 29.0000 - 33.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_12.png" /> 33.0000 - 37.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_13.png" /> 37.0000 - 41.0000<br />\
    <img src="styles/legend/JanMeanTemp2024_12_14.png" /> > 41.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JanMeanTemp2024_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var format_StateBorder_13 = new ol.format.GeoJSON();
var features_StateBorder_13 = format_StateBorder_13.readFeatures(json_StateBorder_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateBorder_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBorder_13.addFeatures(features_StateBorder_13);
var lyr_StateBorder_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBorder_13, 
                style: style_StateBorder_13,
                popuplayertitle: 'State-Border',
                interactive: false,
                title: '<img src="styles/legend/StateBorder_13.png" /> State-Border'
            });
var format_USABorder_14 = new ol.format.GeoJSON();
var features_USABorder_14 = format_USABorder_14.readFeatures(json_USABorder_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USABorder_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USABorder_14.addFeatures(features_USABorder_14);
var lyr_USABorder_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USABorder_14, 
                style: style_USABorder_14,
                popuplayertitle: 'USA-Border',
                interactive: false,
                title: '<img src="styles/legend/USABorder_14.png" /> USA-Border'
            });
var format_AnnualTuition_15 = new ol.format.GeoJSON();
var features_AnnualTuition_15 = format_AnnualTuition_15.readFeatures(json_AnnualTuition_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnnualTuition_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualTuition_15.addFeatures(features_AnnualTuition_15);
cluster_AnnualTuition_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AnnualTuition_15
});
var lyr_AnnualTuition_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AnnualTuition_15, 
                style: style_AnnualTuition_15,
                popuplayertitle: 'Annual Tuition',
                interactive: true,
    title: 'Annual Tuition<br />\
    <img src="styles/legend/AnnualTuition_15_0.png" /> 28794 - 34590<br />\
    <img src="styles/legend/AnnualTuition_15_1.png" /> 34590 - 40386<br />\
    <img src="styles/legend/AnnualTuition_15_2.png" /> 40386 - 46182<br />\
    <img src="styles/legend/AnnualTuition_15_3.png" /> 46182 - 51978<br />\
    <img src="styles/legend/AnnualTuition_15_4.png" /> 51978 - 57774<br />\
    <img src="styles/legend/AnnualTuition_15_5.png" /> 57774 - 63570<br />\
    <img src="styles/legend/AnnualTuition_15_6.png" /> 63570 - 69366<br />\
    <img src="styles/legend/AnnualTuition_15_7.png" /> 69366 - 75162<br />' });
var format_QSRanking2026_16 = new ol.format.GeoJSON();
var features_QSRanking2026_16 = format_QSRanking2026_16.readFeatures(json_QSRanking2026_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QSRanking2026_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QSRanking2026_16.addFeatures(features_QSRanking2026_16);
cluster_QSRanking2026_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_QSRanking2026_16
});
var lyr_QSRanking2026_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_QSRanking2026_16, 
                style: style_QSRanking2026_16,
                popuplayertitle: 'QS Ranking(2026)',
                interactive: true,
    title: 'QS Ranking(2026)<br />\
    <img src="styles/legend/QSRanking2026_16_0.png" /> 1 - 30<br />\
    <img src="styles/legend/QSRanking2026_16_1.png" /> 30 - 60<br />\
    <img src="styles/legend/QSRanking2026_16_2.png" /> 60 - 100<br />\
    <img src="styles/legend/QSRanking2026_16_3.png" /> 100 - 250<br />\
    <img src="styles/legend/QSRanking2026_16_4.png" /> 250 - 350<br />\
    <img src="styles/legend/QSRanking2026_16_5.png" /> 350 - 500<br />\
    <img src="styles/legend/QSRanking2026_16_6.png" /> 500 - 590<br />\
    <img src="styles/legend/QSRanking2026_16_7.png" /> 590 - 668<br />' });
var format_USNewsRanking2026_17 = new ol.format.GeoJSON();
var features_USNewsRanking2026_17 = format_USNewsRanking2026_17.readFeatures(json_USNewsRanking2026_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USNewsRanking2026_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USNewsRanking2026_17.addFeatures(features_USNewsRanking2026_17);
cluster_USNewsRanking2026_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_USNewsRanking2026_17
});
var lyr_USNewsRanking2026_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_USNewsRanking2026_17, 
                style: style_USNewsRanking2026_17,
                popuplayertitle: 'U.S.News Ranking(2026)',
                interactive: true,
    title: 'U.S.News Ranking(2026)<br />\
    <img src="styles/legend/USNewsRanking2026_17_0.png" /> 1 - 5<br />\
    <img src="styles/legend/USNewsRanking2026_17_1.png" /> 5 - 7<br />\
    <img src="styles/legend/USNewsRanking2026_17_2.png" /> 7 - 13<br />\
    <img src="styles/legend/USNewsRanking2026_17_3.png" /> 13 - 15<br />\
    <img src="styles/legend/USNewsRanking2026_17_4.png" /> 15 - 21<br />\
    <img src="styles/legend/USNewsRanking2026_17_5.png" /> 21 - 26<br />\
    <img src="styles/legend/USNewsRanking2026_17_6.png" /> 26 - 32<br />\
    <img src="styles/legend/USNewsRanking2026_17_7.png" /> 32 - 42<br />\
    <img src="styles/legend/USNewsRanking2026_17_8.png" /> 42 - 46<br />' });
var format_TestPolicy_18 = new ol.format.GeoJSON();
var features_TestPolicy_18 = format_TestPolicy_18.readFeatures(json_TestPolicy_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestPolicy_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestPolicy_18.addFeatures(features_TestPolicy_18);
cluster_TestPolicy_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_TestPolicy_18
});
var lyr_TestPolicy_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TestPolicy_18, 
                style: style_TestPolicy_18,
                popuplayertitle: 'Test-Policy',
                interactive: true,
    title: 'Test-Policy<br />\
    <img src="styles/legend/TestPolicy_18_0.png" /> Test-Optional<br />\
    <img src="styles/legend/TestPolicy_18_1.png" /> Test-Required<br />\
    <img src="styles/legend/TestPolicy_18_2.png" /> Test-Blind<br />' });
var format_AcceptanceRate_19 = new ol.format.GeoJSON();
var features_AcceptanceRate_19 = format_AcceptanceRate_19.readFeatures(json_AcceptanceRate_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcceptanceRate_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcceptanceRate_19.addFeatures(features_AcceptanceRate_19);
cluster_AcceptanceRate_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AcceptanceRate_19
});
var lyr_AcceptanceRate_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AcceptanceRate_19, 
                style: style_AcceptanceRate_19,
                popuplayertitle: 'Acceptance Rate %',
                interactive: true,
    title: 'Acceptance Rate %<br />\
    <img src="styles/legend/AcceptanceRate_19_0.png" /> 2 - 5<br />\
    <img src="styles/legend/AcceptanceRate_19_1.png" /> 5 - 8<br />\
    <img src="styles/legend/AcceptanceRate_19_2.png" /> 9 - 14<br />\
    <img src="styles/legend/AcceptanceRate_19_3.png" /> 14 - 20<br />\
    <img src="styles/legend/AcceptanceRate_19_4.png" /> 20 - 28<br />\
    <img src="styles/legend/AcceptanceRate_19_5.png" /> 28 - 36<br />\
    <img src="styles/legend/AcceptanceRate_19_6.png" /> 36 - 45<br />\
    <img src="styles/legend/AcceptanceRate_19_7.png" /> 45 - 65.4<br />' });
var format_LowerBoundSAT_20 = new ol.format.GeoJSON();
var features_LowerBoundSAT_20 = format_LowerBoundSAT_20.readFeatures(json_LowerBoundSAT_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowerBoundSAT_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerBoundSAT_20.addFeatures(features_LowerBoundSAT_20);
cluster_LowerBoundSAT_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LowerBoundSAT_20
});
var lyr_LowerBoundSAT_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LowerBoundSAT_20, 
                style: style_LowerBoundSAT_20,
                popuplayertitle: 'Lower Bound SAT',
                interactive: true,
    title: 'Lower Bound SAT<br />\
    <img src="styles/legend/LowerBoundSAT_20_0.png" /> 1200 - 1255<br />\
    <img src="styles/legend/LowerBoundSAT_20_1.png" /> 1255 - 1310<br />\
    <img src="styles/legend/LowerBoundSAT_20_2.png" /> 1310 - 1365<br />\
    <img src="styles/legend/LowerBoundSAT_20_3.png" /> 1365 - 1420<br />\
    <img src="styles/legend/LowerBoundSAT_20_4.png" /> 1420 - 1475<br />\
    <img src="styles/legend/LowerBoundSAT_20_5.png" /> 1475 - 1530<br />' });
var format_StartingSalary_21 = new ol.format.GeoJSON();
var features_StartingSalary_21 = format_StartingSalary_21.readFeatures(json_StartingSalary_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StartingSalary_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartingSalary_21.addFeatures(features_StartingSalary_21);
cluster_StartingSalary_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_StartingSalary_21
});
var lyr_StartingSalary_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_StartingSalary_21, 
                style: style_StartingSalary_21,
                popuplayertitle: 'Starting Salary',
                interactive: true,
    title: 'Starting Salary<br />\
    <img src="styles/legend/StartingSalary_21_0.png" /> 45731 - 52678<br />\
    <img src="styles/legend/StartingSalary_21_1.png" /> 52678 - 59815<br />\
    <img src="styles/legend/StartingSalary_21_2.png" /> 59815 - 64601<br />\
    <img src="styles/legend/StartingSalary_21_3.png" /> 64601 - 71066<br />\
    <img src="styles/legend/StartingSalary_21_4.png" /> 71066 - 80134<br />\
    <img src="styles/legend/StartingSalary_21_5.png" /> 80134 - 96255<br />\
    <img src="styles/legend/StartingSalary_21_6.png" /> 96255 - 114055<br />\
    <img src="styles/legend/StartingSalary_21_7.png" /> 114055 - 132140<br />' });
var format_Nov12List_22 = new ol.format.GeoJSON();
var features_Nov12List_22 = format_Nov12List_22.readFeatures(json_Nov12List_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nov12List_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nov12List_22.addFeatures(features_Nov12List_22);
cluster_Nov12List_22 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Nov12List_22
});
var lyr_Nov12List_22 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Nov12List_22, 
                style: style_Nov12List_22,
                popuplayertitle: 'Nov12.List',
                interactive: true,
    title: 'Nov12.List<br />\
    <img src="styles/legend/Nov12List_22_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/Nov12List_22_1.png" /> Private<br />\
    <img src="styles/legend/Nov12List_22_2.png" /> Public<br />' });
var group_College_Info = new ol.layer.Group({
                                layers: [lyr_AnnualTuition_15,lyr_QSRanking2026_16,lyr_USNewsRanking2026_17,lyr_TestPolicy_18,lyr_AcceptanceRate_19,lyr_LowerBoundSAT_20,lyr_StartingSalary_21,],
                                fold: 'close',
                                title: 'College_Info'});
var group_TempMean = new ol.layer.Group({
                                layers: [lyr_DecMeanTemp2024_1,lyr_NovMeanTemp2024_2,lyr_OctMeanTemp2024_3,lyr_SepMeanTemp2024_4,lyr_AugMeanTemp2024_5,lyr_JulMeanTemp2024_6,lyr_JunMeanTemp2024_7,lyr_MayMeanTemp2024_8,lyr_AprMeanTemp2024_9,lyr_MarMeanTemp2024_10,lyr_FebMeanTemp2024_11,lyr_JanMeanTemp2024_12,],
                                fold: 'close',
                                title: 'TempMean'});

lyr_GoogleSatellite_0.setVisible(true);lyr_DecMeanTemp2024_1.setVisible(true);lyr_NovMeanTemp2024_2.setVisible(true);lyr_OctMeanTemp2024_3.setVisible(true);lyr_SepMeanTemp2024_4.setVisible(true);lyr_AugMeanTemp2024_5.setVisible(true);lyr_JulMeanTemp2024_6.setVisible(true);lyr_JunMeanTemp2024_7.setVisible(true);lyr_MayMeanTemp2024_8.setVisible(true);lyr_AprMeanTemp2024_9.setVisible(true);lyr_MarMeanTemp2024_10.setVisible(true);lyr_FebMeanTemp2024_11.setVisible(true);lyr_JanMeanTemp2024_12.setVisible(true);lyr_StateBorder_13.setVisible(true);lyr_USABorder_14.setVisible(true);lyr_AnnualTuition_15.setVisible(true);lyr_QSRanking2026_16.setVisible(true);lyr_USNewsRanking2026_17.setVisible(true);lyr_TestPolicy_18.setVisible(true);lyr_AcceptanceRate_19.setVisible(true);lyr_LowerBoundSAT_20.setVisible(true);lyr_StartingSalary_21.setVisible(true);lyr_Nov12List_22.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TempMean,lyr_StateBorder_13,lyr_USABorder_14,group_College_Info,lyr_Nov12List_22];
lyr_StateBorder_13.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'ste_area_code': 'ste_area_code', 'ste_type': 'ste_type', 'ste_name_long': 'ste_name_long', 'ste_fp_code': 'ste_fp_code', 'ste_gnis_code': 'ste_gnis_code', });
lyr_USABorder_14.set('fieldAliases', {'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', });
lyr_AnnualTuition_15.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_QSRanking2026_16.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_USNewsRanking2026_17.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_TestPolicy_18.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_AcceptanceRate_19.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_LowerBoundSAT_20.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_StartingSalary_21.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_Nov12List_22.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_StateBorder_13.set('fieldImages', {'geo_point_2d': 'TextEdit', 'year': 'TextEdit', 'ste_code': 'List', 'ste_name': 'List', 'ste_area_code': 'TextEdit', 'ste_type': 'TextEdit', 'ste_name_long': 'TextEdit', 'ste_fp_code': 'TextEdit', 'ste_gnis_code': 'TextEdit', });
lyr_USABorder_14.set('fieldImages', {'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_AnnualTuition_15.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_QSRanking2026_16.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_USNewsRanking2026_17.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_TestPolicy_18.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_AcceptanceRate_19.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_LowerBoundSAT_20.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_StartingSalary_21.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_Nov12List_22.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_StateBorder_13.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'ste_code': 'no label', 'ste_name': 'no label', 'ste_area_code': 'no label', 'ste_type': 'no label', 'ste_name_long': 'no label', 'ste_fp_code': 'no label', 'ste_gnis_code': 'no label', });
lyr_USABorder_14.set('fieldLabels', {'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', });
lyr_AnnualTuition_15.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_QSRanking2026_16.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_USNewsRanking2026_17.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_TestPolicy_18.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_AcceptanceRate_19.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_LowerBoundSAT_20.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'header label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_StartingSalary_21.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_Nov12List_22.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_Nov12List_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});