ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102003").setExtent([-6554869.432980, -3805411.541640, 4104131.464180, 4373932.035453]);
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
var lyr_TempMinAverage_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMin-Average<br />\
    <img src="styles/legend/TempMinAverage_1_0.png" /> <= -17.00<br />\
    <img src="styles/legend/TempMinAverage_1_1.png" /> -17.00 - -13.00<br />\
    <img src="styles/legend/TempMinAverage_1_2.png" /> -13.00 - -9.00<br />\
    <img src="styles/legend/TempMinAverage_1_3.png" /> -9.00 - -5.00<br />\
    <img src="styles/legend/TempMinAverage_1_4.png" /> -5.00 - -1.00<br />\
    <img src="styles/legend/TempMinAverage_1_5.png" /> -1.00 - 3.00<br />\
    <img src="styles/legend/TempMinAverage_1_6.png" /> 3.00 - 7.00<br />\
    <img src="styles/legend/TempMinAverage_1_7.png" /> 7.00 - 11.00<br />\
    <img src="styles/legend/TempMinAverage_1_8.png" /> 11.00 - 15.00<br />\
    <img src="styles/legend/TempMinAverage_1_9.png" /> 15.00 - 19.00<br />\
    <img src="styles/legend/TempMinAverage_1_10.png" /> 19.00 - 23.00<br />\
    <img src="styles/legend/TempMinAverage_1_11.png" /> 23.00 - 27.00<br />\
    <img src="styles/legend/TempMinAverage_1_12.png" /> 27.00 - 31.00<br />\
    <img src="styles/legend/TempMinAverage_1_13.png" /> 31.00 - 35.00<br />\
    <img src="styles/legend/TempMinAverage_1_14.png" /> 35.00 - 39.00<br />\
    <img src="styles/legend/TempMinAverage_1_15.png" /> 39.00 - 43.00<br />\
    <img src="styles/legend/TempMinAverage_1_16.png" /> 43.00 - 47.00<br />\
    <img src="styles/legend/TempMinAverage_1_17.png" /> > 47.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMinAverage_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917255.134152, 2761025.857949, -7400427.352759, 6435458.969311]
        })
    });
var lyr_Winter_Min_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Winter_Min<br />\
    <img src="styles/legend/Winter_Min_2_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Winter_Min_2_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Winter_Min_2_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Winter_Min_2_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Winter_Min_2_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Winter_Min_2_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Winter_Min_2_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Winter_Min_2_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Winter_Min_2_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Winter_Min_2_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Winter_Min_2_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Winter_Min_2_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Winter_Min_2_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Winter_Min_2_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Winter_Min_2_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Winter_Min_2_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Winter_Min_2_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Winter_Min_2_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Winter_Min_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Spring_Min_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Spring_Min<br />\
    <img src="styles/legend/Spring_Min_3_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Spring_Min_3_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Spring_Min_3_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Spring_Min_3_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Spring_Min_3_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Spring_Min_3_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Spring_Min_3_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Spring_Min_3_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Spring_Min_3_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Spring_Min_3_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Spring_Min_3_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Spring_Min_3_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Spring_Min_3_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Spring_Min_3_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Spring_Min_3_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Spring_Min_3_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Spring_Min_3_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Spring_Min_3_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Spring_Min_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Summer_Min_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Summer_Min<br />\
    <img src="styles/legend/Summer_Min_4_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Summer_Min_4_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Summer_Min_4_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Summer_Min_4_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Summer_Min_4_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Summer_Min_4_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Summer_Min_4_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Summer_Min_4_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Summer_Min_4_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Summer_Min_4_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Summer_Min_4_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Summer_Min_4_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Summer_Min_4_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Summer_Min_4_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Summer_Min_4_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Summer_Min_4_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Summer_Min_4_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Summer_Min_4_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Summer_Min_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Fall_Min_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fall_Min<br />\
    <img src="styles/legend/Fall_Min_5_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Fall_Min_5_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Fall_Min_5_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Fall_Min_5_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Fall_Min_5_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Fall_Min_5_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Fall_Min_5_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Fall_Min_5_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Fall_Min_5_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Fall_Min_5_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Fall_Min_5_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Fall_Min_5_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Fall_Min_5_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Fall_Min_5_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Fall_Min_5_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Fall_Min_5_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Fall_Min_5_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Fall_Min_5_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Fall_Min_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_TempMeanAverage_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMean-Average<br />\
    <img src="styles/legend/TempMeanAverage_6_0.png" /> <= -17.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_1.png" /> -17.0000 - -13.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_2.png" /> -13.0000 - -9.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_3.png" /> -9.0000 - -5.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_4.png" /> -5.0000 - -1.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_5.png" /> -1.0000 - 3.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_6.png" /> 3.0000 - 7.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_7.png" /> 7.0000 - 11.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_8.png" /> 11.0000 - 15.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_9.png" /> 15.0000 - 19.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_10.png" /> 19.0000 - 23.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_11.png" /> 23.0000 - 27.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_12.png" /> 27.0000 - 31.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_13.png" /> 31.0000 - 35.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_14.png" /> 35.0000 - 39.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_15.png" /> 39.0000 - 43.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_16.png" /> 43.0000 - 47.0000<br />\
    <img src="styles/legend/TempMeanAverage_6_17.png" /> > 47.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMeanAverage_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917255.134152, 2761025.857949, -7400427.352759, 6435458.969311]
        })
    });
var lyr_Winter_Mean_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Winter_Mean<br />\
    <img src="styles/legend/Winter_Mean_7_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Winter_Mean_7_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Winter_Mean_7_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Winter_Mean_7_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Winter_Mean_7_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Winter_Mean_7_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Winter_Mean_7_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Winter_Mean_7_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Winter_Mean_7_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Winter_Mean_7_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Winter_Mean_7_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Winter_Mean_7_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Winter_Mean_7_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Winter_Mean_7_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Winter_Mean_7_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Winter_Mean_7_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Winter_Mean_7_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Winter_Mean_7_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Winter_Mean_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Fall_Mean_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fall_Mean<br />\
    <img src="styles/legend/Fall_Mean_8_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Fall_Mean_8_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Fall_Mean_8_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Fall_Mean_8_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Fall_Mean_8_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Fall_Mean_8_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Fall_Mean_8_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Fall_Mean_8_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Fall_Mean_8_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Fall_Mean_8_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Fall_Mean_8_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Fall_Mean_8_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Fall_Mean_8_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Fall_Mean_8_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Fall_Mean_8_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Fall_Mean_8_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Fall_Mean_8_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Fall_Mean_8_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Fall_Mean_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Summer_Mean_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Summer_Mean<br />\
    <img src="styles/legend/Summer_Mean_9_0.png" /> <= -17.0000<br />\
    <img src="styles/legend/Summer_Mean_9_1.png" /> -17.0000 - -13.0000<br />\
    <img src="styles/legend/Summer_Mean_9_2.png" /> -13.0000 - -9.0000<br />\
    <img src="styles/legend/Summer_Mean_9_3.png" /> -9.0000 - -5.0000<br />\
    <img src="styles/legend/Summer_Mean_9_4.png" /> -5.0000 - -1.0000<br />\
    <img src="styles/legend/Summer_Mean_9_5.png" /> -1.0000 - 3.0000<br />\
    <img src="styles/legend/Summer_Mean_9_6.png" /> 3.0000 - 7.0000<br />\
    <img src="styles/legend/Summer_Mean_9_7.png" /> 7.0000 - 11.0000<br />\
    <img src="styles/legend/Summer_Mean_9_8.png" /> 11.0000 - 15.0000<br />\
    <img src="styles/legend/Summer_Mean_9_9.png" /> 15.0000 - 19.0000<br />\
    <img src="styles/legend/Summer_Mean_9_10.png" /> 19.0000 - 23.0000<br />\
    <img src="styles/legend/Summer_Mean_9_11.png" /> 23.0000 - 27.0000<br />\
    <img src="styles/legend/Summer_Mean_9_12.png" /> 27.0000 - 31.0000<br />\
    <img src="styles/legend/Summer_Mean_9_13.png" /> 31.0000 - 35.0000<br />\
    <img src="styles/legend/Summer_Mean_9_14.png" /> 35.0000 - 39.0000<br />\
    <img src="styles/legend/Summer_Mean_9_15.png" /> 39.0000 - 43.0000<br />\
    <img src="styles/legend/Summer_Mean_9_16.png" /> 43.0000 - 47.0000<br />\
    <img src="styles/legend/Summer_Mean_9_17.png" /> > 47.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Summer_Mean_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Spring_Mean_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Spring_Mean<br />\
    <img src="styles/legend/Spring_Mean_10_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Spring_Mean_10_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Spring_Mean_10_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Spring_Mean_10_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Spring_Mean_10_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Spring_Mean_10_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Spring_Mean_10_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Spring_Mean_10_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Spring_Mean_10_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Spring_Mean_10_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Spring_Mean_10_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Spring_Mean_10_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Spring_Mean_10_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Spring_Mean_10_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Spring_Mean_10_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Spring_Mean_10_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Spring_Mean_10_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Spring_Mean_10_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Spring_Mean_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_TempMaxAverage_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMax-Average<br />\
    <img src="styles/legend/TempMaxAverage_11_0.png" /> <= -17.00<br />\
    <img src="styles/legend/TempMaxAverage_11_1.png" /> -17.00 - -13.00<br />\
    <img src="styles/legend/TempMaxAverage_11_2.png" /> -13.00 - -9.00<br />\
    <img src="styles/legend/TempMaxAverage_11_3.png" /> -9.00 - -5.00<br />\
    <img src="styles/legend/TempMaxAverage_11_4.png" /> -5.00 - -1.00<br />\
    <img src="styles/legend/TempMaxAverage_11_5.png" /> -1.00 - 3.00<br />\
    <img src="styles/legend/TempMaxAverage_11_6.png" /> 3.00 - 7.00<br />\
    <img src="styles/legend/TempMaxAverage_11_7.png" /> 7.00 - 11.00<br />\
    <img src="styles/legend/TempMaxAverage_11_8.png" /> 11.00 - 15.00<br />\
    <img src="styles/legend/TempMaxAverage_11_9.png" /> 15.00 - 19.00<br />\
    <img src="styles/legend/TempMaxAverage_11_10.png" /> 19.00 - 23.00<br />\
    <img src="styles/legend/TempMaxAverage_11_11.png" /> 23.00 - 27.00<br />\
    <img src="styles/legend/TempMaxAverage_11_12.png" /> 27.00 - 31.00<br />\
    <img src="styles/legend/TempMaxAverage_11_13.png" /> 31.00 - 35.00<br />\
    <img src="styles/legend/TempMaxAverage_11_14.png" /> 35.00 - 39.00<br />\
    <img src="styles/legend/TempMaxAverage_11_15.png" /> 39.00 - 43.00<br />\
    <img src="styles/legend/TempMaxAverage_11_16.png" /> 43.00 - 47.00<br />\
    <img src="styles/legend/TempMaxAverage_11_17.png" /> > 47.00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMaxAverage_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917255.134152, 2761025.857949, -7400427.352759, 6435458.969311]
        })
    });
var lyr_Winter_Max_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Winter_Max<br />\
    <img src="styles/legend/Winter_Max_12_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Winter_Max_12_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Winter_Max_12_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Winter_Max_12_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Winter_Max_12_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Winter_Max_12_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Winter_Max_12_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Winter_Max_12_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Winter_Max_12_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Winter_Max_12_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Winter_Max_12_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Winter_Max_12_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Winter_Max_12_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Winter_Max_12_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Winter_Max_12_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Winter_Max_12_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Winter_Max_12_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Winter_Max_12_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Winter_Max_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Spring_Max_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Spring_Max<br />\
    <img src="styles/legend/Spring_Max_13_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Spring_Max_13_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Spring_Max_13_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Spring_Max_13_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Spring_Max_13_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Spring_Max_13_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Spring_Max_13_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Spring_Max_13_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Spring_Max_13_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Spring_Max_13_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Spring_Max_13_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Spring_Max_13_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Spring_Max_13_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Spring_Max_13_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Spring_Max_13_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Spring_Max_13_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Spring_Max_13_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Spring_Max_13_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Spring_Max_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Summer_Max_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Summer_Max<br />\
    <img src="styles/legend/Summer_Max_14_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Summer_Max_14_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Summer_Max_14_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Summer_Max_14_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Summer_Max_14_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Summer_Max_14_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Summer_Max_14_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Summer_Max_14_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Summer_Max_14_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Summer_Max_14_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Summer_Max_14_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Summer_Max_14_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Summer_Max_14_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Summer_Max_14_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Summer_Max_14_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Summer_Max_14_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Summer_Max_14_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Summer_Max_14_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Summer_Max_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Fall_Max_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fall_Max<br />\
    <img src="styles/legend/Fall_Max_15_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Fall_Max_15_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Fall_Max_15_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Fall_Max_15_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Fall_Max_15_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Fall_Max_15_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Fall_Max_15_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Fall_Max_15_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Fall_Max_15_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Fall_Max_15_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Fall_Max_15_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Fall_Max_15_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Fall_Max_15_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Fall_Max_15_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Fall_Max_15_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Fall_Max_15_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Fall_Max_15_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Fall_Max_15_17.png" /> > 47.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Fall_Max_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var format_RentPrice_16 = new ol.format.GeoJSON();
var features_RentPrice_16 = format_RentPrice_16.readFeatures(json_RentPrice_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_RentPrice_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RentPrice_16.addFeatures(features_RentPrice_16);
var lyr_RentPrice_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RentPrice_16, 
                style: style_RentPrice_16,
                popuplayertitle: 'Rent Price',
                interactive: false,
    title: 'Rent Price<br />\
    <img src="styles/legend/RentPrice_16_0.png" /> 400 - 800<br />\
    <img src="styles/legend/RentPrice_16_1.png" /> 800 - 1200<br />\
    <img src="styles/legend/RentPrice_16_2.png" /> 1200 - 1400<br />\
    <img src="styles/legend/RentPrice_16_3.png" /> 1400 - 1800<br />\
    <img src="styles/legend/RentPrice_16_4.png" /> 1800 - 2000<br />\
    <img src="styles/legend/RentPrice_16_5.png" /> 2000 - 2400<br />\
    <img src="styles/legend/RentPrice_16_6.png" /> 2400 - 2800<br />\
    <img src="styles/legend/RentPrice_16_7.png" /> 2800 - 3300<br />' });
var format_CrimeDataper100000_17 = new ol.format.GeoJSON();
var features_CrimeDataper100000_17 = format_CrimeDataper100000_17.readFeatures(json_CrimeDataper100000_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_CrimeDataper100000_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrimeDataper100000_17.addFeatures(features_CrimeDataper100000_17);
var lyr_CrimeDataper100000_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrimeDataper100000_17, 
                style: style_CrimeDataper100000_17,
                popuplayertitle: 'Crime Data per 100000',
                interactive: false,
    title: 'Crime Data per 100000<br />\
    <img src="styles/legend/CrimeDataper100000_17_0.png" /> 0 - 0<br />\
    <img src="styles/legend/CrimeDataper100000_17_1.png" /> 0 - 100<br />\
    <img src="styles/legend/CrimeDataper100000_17_2.png" /> 100 - 200<br />\
    <img src="styles/legend/CrimeDataper100000_17_3.png" /> 200 - 300<br />\
    <img src="styles/legend/CrimeDataper100000_17_4.png" /> 300 - 400<br />\
    <img src="styles/legend/CrimeDataper100000_17_5.png" /> 400 - 500<br />\
    <img src="styles/legend/CrimeDataper100000_17_6.png" /> 500 - 600<br />\
    <img src="styles/legend/CrimeDataper100000_17_7.png" /> 600 - 600<br />' });
var format_UniversityBoundaries_18 = new ol.format.GeoJSON();
var features_UniversityBoundaries_18 = format_UniversityBoundaries_18.readFeatures(json_UniversityBoundaries_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_UniversityBoundaries_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityBoundaries_18.addFeatures(features_UniversityBoundaries_18);
var lyr_UniversityBoundaries_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityBoundaries_18, 
                style: style_UniversityBoundaries_18,
                popuplayertitle: 'University Boundaries',
                interactive: false,
                title: '<img src="styles/legend/UniversityBoundaries_18.png" /> University Boundaries'
            });
var format_AnnualTuition_19 = new ol.format.GeoJSON();
var features_AnnualTuition_19 = format_AnnualTuition_19.readFeatures(json_AnnualTuition_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_AnnualTuition_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualTuition_19.addFeatures(features_AnnualTuition_19);
var lyr_AnnualTuition_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnnualTuition_19, 
                style: style_AnnualTuition_19,
                popuplayertitle: 'Annual Tuition',
                interactive: true,
    title: 'Annual Tuition<br />\
    <img src="styles/legend/AnnualTuition_19_0.png" /> 28794 - 34590<br />\
    <img src="styles/legend/AnnualTuition_19_1.png" /> 34590 - 40386<br />\
    <img src="styles/legend/AnnualTuition_19_2.png" /> 40386 - 46182<br />\
    <img src="styles/legend/AnnualTuition_19_3.png" /> 46182 - 51978<br />\
    <img src="styles/legend/AnnualTuition_19_4.png" /> 51978 - 57774<br />\
    <img src="styles/legend/AnnualTuition_19_5.png" /> 57774 - 63570<br />\
    <img src="styles/legend/AnnualTuition_19_6.png" /> 63570 - 69366<br />\
    <img src="styles/legend/AnnualTuition_19_7.png" /> 69366 - 75162<br />' });
var format_QSRanking2026_20 = new ol.format.GeoJSON();
var features_QSRanking2026_20 = format_QSRanking2026_20.readFeatures(json_QSRanking2026_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_QSRanking2026_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QSRanking2026_20.addFeatures(features_QSRanking2026_20);
var lyr_QSRanking2026_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QSRanking2026_20, 
                style: style_QSRanking2026_20,
                popuplayertitle: 'QS Ranking(2026)',
                interactive: true,
    title: 'QS Ranking(2026)<br />\
    <img src="styles/legend/QSRanking2026_20_0.png" /> 1 - 30<br />\
    <img src="styles/legend/QSRanking2026_20_1.png" /> 30 - 60<br />\
    <img src="styles/legend/QSRanking2026_20_2.png" /> 60 - 100<br />\
    <img src="styles/legend/QSRanking2026_20_3.png" /> 100 - 250<br />\
    <img src="styles/legend/QSRanking2026_20_4.png" /> 250 - 350<br />\
    <img src="styles/legend/QSRanking2026_20_5.png" /> 350 - 500<br />\
    <img src="styles/legend/QSRanking2026_20_6.png" /> 500 - 590<br />\
    <img src="styles/legend/QSRanking2026_20_7.png" /> 590 - 668<br />' });
var format_USNewsRanking2026_21 = new ol.format.GeoJSON();
var features_USNewsRanking2026_21 = format_USNewsRanking2026_21.readFeatures(json_USNewsRanking2026_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USNewsRanking2026_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USNewsRanking2026_21.addFeatures(features_USNewsRanking2026_21);
var lyr_USNewsRanking2026_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USNewsRanking2026_21, 
                style: style_USNewsRanking2026_21,
                popuplayertitle: 'U.S.News Ranking(2026)',
                interactive: true,
    title: 'U.S.News Ranking(2026)<br />\
    <img src="styles/legend/USNewsRanking2026_21_0.png" /> 1 - 5<br />\
    <img src="styles/legend/USNewsRanking2026_21_1.png" /> 5 - 7<br />\
    <img src="styles/legend/USNewsRanking2026_21_2.png" /> 7 - 13<br />\
    <img src="styles/legend/USNewsRanking2026_21_3.png" /> 13 - 15<br />\
    <img src="styles/legend/USNewsRanking2026_21_4.png" /> 15 - 21<br />\
    <img src="styles/legend/USNewsRanking2026_21_5.png" /> 21 - 26<br />\
    <img src="styles/legend/USNewsRanking2026_21_6.png" /> 26 - 32<br />\
    <img src="styles/legend/USNewsRanking2026_21_7.png" /> 32 - 42<br />\
    <img src="styles/legend/USNewsRanking2026_21_8.png" /> 42 - 46<br />' });
var format_TestPolicy_22 = new ol.format.GeoJSON();
var features_TestPolicy_22 = format_TestPolicy_22.readFeatures(json_TestPolicy_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_TestPolicy_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestPolicy_22.addFeatures(features_TestPolicy_22);
var lyr_TestPolicy_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestPolicy_22, 
                style: style_TestPolicy_22,
                popuplayertitle: 'Test-Policy',
                interactive: true,
    title: 'Test-Policy<br />\
    <img src="styles/legend/TestPolicy_22_0.png" /> Test-Optional<br />\
    <img src="styles/legend/TestPolicy_22_1.png" /> Test-Required<br />\
    <img src="styles/legend/TestPolicy_22_2.png" /> Test-Blind<br />' });
var format_AcceptanceRate_23 = new ol.format.GeoJSON();
var features_AcceptanceRate_23 = format_AcceptanceRate_23.readFeatures(json_AcceptanceRate_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_AcceptanceRate_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcceptanceRate_23.addFeatures(features_AcceptanceRate_23);
var lyr_AcceptanceRate_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcceptanceRate_23, 
                style: style_AcceptanceRate_23,
                popuplayertitle: 'Acceptance Rate %',
                interactive: true,
    title: 'Acceptance Rate %<br />\
    <img src="styles/legend/AcceptanceRate_23_0.png" /> 2 - 5<br />\
    <img src="styles/legend/AcceptanceRate_23_1.png" /> 5 - 8<br />\
    <img src="styles/legend/AcceptanceRate_23_2.png" /> 9 - 14<br />\
    <img src="styles/legend/AcceptanceRate_23_3.png" /> 14 - 20<br />\
    <img src="styles/legend/AcceptanceRate_23_4.png" /> 20 - 28<br />\
    <img src="styles/legend/AcceptanceRate_23_5.png" /> 28 - 36<br />\
    <img src="styles/legend/AcceptanceRate_23_6.png" /> 36 - 45<br />\
    <img src="styles/legend/AcceptanceRate_23_7.png" /> 45 - 65.4<br />' });
var format_HigherBoundSAT_24 = new ol.format.GeoJSON();
var features_HigherBoundSAT_24 = format_HigherBoundSAT_24.readFeatures(json_HigherBoundSAT_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_HigherBoundSAT_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HigherBoundSAT_24.addFeatures(features_HigherBoundSAT_24);
var lyr_HigherBoundSAT_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HigherBoundSAT_24, 
                style: style_HigherBoundSAT_24,
                popuplayertitle: 'Higher Bound SAT',
                interactive: true,
    title: 'Higher Bound SAT<br />\
    <img src="styles/legend/HigherBoundSAT_24_0.png" /> 1480 - 1500<br />\
    <img src="styles/legend/HigherBoundSAT_24_1.png" /> 1500 - 1520<br />\
    <img src="styles/legend/HigherBoundSAT_24_2.png" /> 1520 - 1540<br />\
    <img src="styles/legend/HigherBoundSAT_24_3.png" /> 1540 - 1560<br />\
    <img src="styles/legend/HigherBoundSAT_24_4.png" /> 1560 - 1580<br />' });
var format_LowerBoundSAT_25 = new ol.format.GeoJSON();
var features_LowerBoundSAT_25 = format_LowerBoundSAT_25.readFeatures(json_LowerBoundSAT_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_LowerBoundSAT_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerBoundSAT_25.addFeatures(features_LowerBoundSAT_25);
var lyr_LowerBoundSAT_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowerBoundSAT_25, 
                style: style_LowerBoundSAT_25,
                popuplayertitle: 'Lower Bound SAT',
                interactive: true,
    title: 'Lower Bound SAT<br />\
    <img src="styles/legend/LowerBoundSAT_25_0.png" /> 1200 - 1266<br />\
    <img src="styles/legend/LowerBoundSAT_25_1.png" /> 1266 - 1332<br />\
    <img src="styles/legend/LowerBoundSAT_25_2.png" /> 1332 - 1398<br />\
    <img src="styles/legend/LowerBoundSAT_25_3.png" /> 1398 - 1464<br />\
    <img src="styles/legend/LowerBoundSAT_25_4.png" /> 1464 - 1530<br />' });
var format_UndergraduateSize_26 = new ol.format.GeoJSON();
var features_UndergraduateSize_26 = format_UndergraduateSize_26.readFeatures(json_UndergraduateSize_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_UndergraduateSize_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UndergraduateSize_26.addFeatures(features_UndergraduateSize_26);
var lyr_UndergraduateSize_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UndergraduateSize_26, 
                style: style_UndergraduateSize_26,
                popuplayertitle: 'Undergraduate Size',
                interactive: true,
    title: 'Undergraduate Size<br />\
    <img src="styles/legend/UndergraduateSize_26_0.png" /> 921 - 6658<br />\
    <img src="styles/legend/UndergraduateSize_26_1.png" /> 6658 - 12395<br />\
    <img src="styles/legend/UndergraduateSize_26_2.png" /> 12395 - 18131<br />\
    <img src="styles/legend/UndergraduateSize_26_3.png" /> 18131 - 23868<br />\
    <img src="styles/legend/UndergraduateSize_26_4.png" /> 23868 - 29605<br />\
    <img src="styles/legend/UndergraduateSize_26_5.png" /> 29605 - 35342<br />\
    <img src="styles/legend/UndergraduateSize_26_6.png" /> 35342 - 41078<br />\
    <img src="styles/legend/UndergraduateSize_26_7.png" /> 41078 - 46815<br />' });
var format_StartingSalary_27 = new ol.format.GeoJSON();
var features_StartingSalary_27 = format_StartingSalary_27.readFeatures(json_StartingSalary_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StartingSalary_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartingSalary_27.addFeatures(features_StartingSalary_27);
var lyr_StartingSalary_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StartingSalary_27, 
                style: style_StartingSalary_27,
                popuplayertitle: 'Starting Salary',
                interactive: true,
    title: 'Starting Salary<br />\
    <img src="styles/legend/StartingSalary_27_0.png" /> 45731 - 52678<br />\
    <img src="styles/legend/StartingSalary_27_1.png" /> 52678 - 59815<br />\
    <img src="styles/legend/StartingSalary_27_2.png" /> 59815 - 64601<br />\
    <img src="styles/legend/StartingSalary_27_3.png" /> 64601 - 71066<br />\
    <img src="styles/legend/StartingSalary_27_4.png" /> 71066 - 80134<br />\
    <img src="styles/legend/StartingSalary_27_5.png" /> 80134 - 96255<br />\
    <img src="styles/legend/StartingSalary_27_6.png" /> 96255 - 114055<br />\
    <img src="styles/legend/StartingSalary_27_7.png" /> 114055 - 132140<br />' });
var format_Universities_Nov21_28 = new ol.format.GeoJSON();
var features_Universities_Nov21_28 = format_Universities_Nov21_28.readFeatures(json_Universities_Nov21_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_Universities_Nov21_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universities_Nov21_28.addFeatures(features_Universities_Nov21_28);
cluster_Universities_Nov21_28 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Universities_Nov21_28
});
var lyr_Universities_Nov21_28 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Universities_Nov21_28, 
                style: style_Universities_Nov21_28,
                popuplayertitle: 'Universities_Nov21',
                interactive: true,
    title: 'Universities_Nov21<br />\
    <img src="styles/legend/Universities_Nov21_28_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/Universities_Nov21_28_1.png" /> Private<br />\
    <img src="styles/legend/Universities_Nov21_28_2.png" /> Public<br />' });
var format_ski_resorts_29 = new ol.format.GeoJSON();
var features_ski_resorts_29 = format_ski_resorts_29.readFeatures(json_ski_resorts_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_ski_resorts_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ski_resorts_29.addFeatures(features_ski_resorts_29);
var lyr_ski_resorts_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ski_resorts_29, 
                style: style_ski_resorts_29,
                popuplayertitle: 'ski_resorts',
                interactive: false,
                title: '<img src="styles/legend/ski_resorts_29.png" /> ski_resorts'
            });
var format_beach_attributes_20240228_30 = new ol.format.GeoJSON();
var features_beach_attributes_20240228_30 = format_beach_attributes_20240228_30.readFeatures(json_beach_attributes_20240228_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_beach_attributes_20240228_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beach_attributes_20240228_30.addFeatures(features_beach_attributes_20240228_30);
var lyr_beach_attributes_20240228_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beach_attributes_20240228_30, 
                style: style_beach_attributes_20240228_30,
                popuplayertitle: 'beach_attributes_20240228',
                interactive: false,
                title: '<img src="styles/legend/beach_attributes_20240228_30.png" /> beach_attributes_20240228'
            });
var format_StateBorder_31 = new ol.format.GeoJSON();
var features_StateBorder_31 = format_StateBorder_31.readFeatures(json_StateBorder_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StateBorder_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBorder_31.addFeatures(features_StateBorder_31);
var lyr_StateBorder_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBorder_31, 
                style: style_StateBorder_31,
                popuplayertitle: 'State Border',
                interactive: false,
                title: '<img src="styles/legend/StateBorder_31.png" /> State Border'
            });
var format_USABorder_32 = new ol.format.GeoJSON();
var features_USABorder_32 = format_USABorder_32.readFeatures(json_USABorder_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USABorder_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USABorder_32.addFeatures(features_USABorder_32);
var lyr_USABorder_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USABorder_32, 
                style: style_USABorder_32,
                popuplayertitle: 'USA-Border',
                interactive: false,
                title: '<img src="styles/legend/USABorder_32.png" /> USA-Border'
            });
var group_Leisure = new ol.layer.Group({
                                layers: [lyr_ski_resorts_29,lyr_beach_attributes_20240228_30,],
                                fold: 'close',
                                title: 'Leisure'});
var group_College_Info = new ol.layer.Group({
                                layers: [lyr_AnnualTuition_19,lyr_QSRanking2026_20,lyr_USNewsRanking2026_21,lyr_TestPolicy_22,lyr_AcceptanceRate_23,lyr_HigherBoundSAT_24,lyr_LowerBoundSAT_25,lyr_UndergraduateSize_26,lyr_StartingSalary_27,],
                                fold: 'close',
                                title: 'College_Info'});
var group_TempMax = new ol.layer.Group({
                                layers: [lyr_TempMaxAverage_11,lyr_Winter_Max_12,lyr_Spring_Max_13,lyr_Summer_Max_14,lyr_Fall_Max_15,],
                                fold: 'close',
                                title: 'TempMax'});
var group_TempMean = new ol.layer.Group({
                                layers: [lyr_TempMeanAverage_6,lyr_Winter_Mean_7,lyr_Fall_Mean_8,lyr_Summer_Mean_9,lyr_Spring_Mean_10,],
                                fold: 'close',
                                title: 'TempMean'});
var group_TempMin = new ol.layer.Group({
                                layers: [lyr_TempMinAverage_1,lyr_Winter_Min_2,lyr_Spring_Min_3,lyr_Summer_Min_4,lyr_Fall_Min_5,],
                                fold: 'close',
                                title: 'TempMin'});

lyr_GoogleSatellite_0.setVisible(true);lyr_TempMinAverage_1.setVisible(true);lyr_Winter_Min_2.setVisible(true);lyr_Spring_Min_3.setVisible(true);lyr_Summer_Min_4.setVisible(true);lyr_Fall_Min_5.setVisible(true);lyr_TempMeanAverage_6.setVisible(true);lyr_Winter_Mean_7.setVisible(true);lyr_Fall_Mean_8.setVisible(true);lyr_Summer_Mean_9.setVisible(true);lyr_Spring_Mean_10.setVisible(true);lyr_TempMaxAverage_11.setVisible(true);lyr_Winter_Max_12.setVisible(true);lyr_Spring_Max_13.setVisible(true);lyr_Summer_Max_14.setVisible(true);lyr_Fall_Max_15.setVisible(true);lyr_RentPrice_16.setVisible(true);lyr_CrimeDataper100000_17.setVisible(true);lyr_UniversityBoundaries_18.setVisible(true);lyr_AnnualTuition_19.setVisible(true);lyr_QSRanking2026_20.setVisible(true);lyr_USNewsRanking2026_21.setVisible(true);lyr_TestPolicy_22.setVisible(true);lyr_AcceptanceRate_23.setVisible(true);lyr_HigherBoundSAT_24.setVisible(true);lyr_LowerBoundSAT_25.setVisible(true);lyr_UndergraduateSize_26.setVisible(true);lyr_StartingSalary_27.setVisible(true);lyr_Universities_Nov21_28.setVisible(true);lyr_ski_resorts_29.setVisible(true);lyr_beach_attributes_20240228_30.setVisible(true);lyr_StateBorder_31.setVisible(true);lyr_USABorder_32.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TempMin,group_TempMean,group_TempMax,lyr_RentPrice_16,lyr_CrimeDataper100000_17,lyr_UniversityBoundaries_18,group_College_Info,lyr_Universities_Nov21_28,group_Leisure,lyr_StateBorder_31,lyr_USABorder_32];
lyr_RentPrice_16.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', '1_rent_50_0': '1_rent_50_0', '1_rent_50_1': '1_rent_50_1', '1_rent_50_2': '1_rent_50_2', '1_rent_50_3': '1_rent_50_3', '1_rent_50_4': '1_rent_50_4', });
lyr_CrimeDataper100000_17.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Crime_Rate': 'Crime_Rate', 'Murder Rate': 'Murder Rate', 'Rape Rate': 'Rape Rate', 'Buglary Rate': 'Buglary Rate', 'Agrevated Assalt rate': 'Agrevated Assalt rate', 'Robbery Rate': 'Robbery Rate', });
lyr_UniversityBoundaries_18.set('fieldAliases', {'AREALAND': 'AREALAND', 'CENTLON': 'CENTLON', 'AREAWATER': 'AREAWATER', 'AREA': 'AREA', 'BASENAME': 'BASENAME', 'OID': 'OID', 'FUNCSTAT': 'FUNCSTAT', 'INTPTLAT': 'INTPTLAT', 'LEN': 'LEN', 'CENTLAT': 'CENTLAT', 'LNDMRKNS': 'LNDMRKNS', 'MTFCC': 'MTFCC', 'INTPTLON': 'INTPTLON', 'LSADC': 'LSADC', 'NAME': 'NAME', });
lyr_AnnualTuition_19.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_QSRanking2026_20.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_USNewsRanking2026_21.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_TestPolicy_22.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_AcceptanceRate_23.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_HigherBoundSAT_24.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_LowerBoundSAT_25.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_UndergraduateSize_26.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_StartingSalary_27.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_Universities_Nov21_28.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_ski_resorts_29.set('fieldAliases', {'LAT': 'LAT', 'LONG': 'LONG', 'STATE': 'STATE', 'NAME': 'NAME', 'TYPE': 'TYPE', 'ObjectId': 'ObjectId', 'Feature': 'Feature', 'Size_Value': 'Size_Value', });
lyr_beach_attributes_20240228_30.set('fieldAliases', {'BEACH_ID': 'BEACH_ID', 'PRG_INT_CODE': 'PRG_INT_CODE', 'BEACH_NAME': 'BEACH_NAME', 'BEACH_COUNTY': 'BEACH_COUNTY', 'BEACH_STATE': 'BEACH_STATE', 'BEACH_TRIBE_CODE': 'BEACH_TRIBE_CODE', 'HISTORICAL_ID_FLAG': 'HISTORICAL_ID_FLAG', 'BEACH_LEN_IN_MI': 'BEACH_LEN_IN_MI', 'BEACH_LATEST_BEACH_YEAR': 'BEACH_LATEST_BEACH_YEAR', 'BEACH_ACCESS': 'BEACH_ACCESS', 'OWNER_ACCESS': 'OWNER_ACCESS', 'DORMANT_STATUS': 'DORMANT_STATUS', 'START_LATITUDE_MEASURE': 'START_LATITUDE_MEASURE', 'START_LONGITUDE_MEASURE': 'START_LONGITUDE_MEASURE', 'END_LATITUDE_MEASURE': 'END_LATITUDE_MEASURE', 'END_LONGITUDE_MEASURE': 'END_LONGITUDE_MEASURE', 'SOURCE_MAP_SCALE': 'SOURCE_MAP_SCALE', 'H_REREFENCE_DATUM_NAME': 'H_REREFENCE_DATUM_NAME', 'STATE_CONTACT_FIRST_NAME': 'STATE_CONTACT_FIRST_NAME', 'STATE_CONTACT_LAST_NAME': 'STATE_CONTACT_LAST_NAME', 'STATE_CONTACT_AGENCY_NAME': 'STATE_CONTACT_AGENCY_NAME', 'STATE_CONTACT_TEL_NUMBER': 'STATE_CONTACT_TEL_NUMBER', 'STATE_CONTACT_URL': 'STATE_CONTACT_URL', 'SOURCE_JOINKEY': 'SOURCE_JOINKEY', });
lyr_StateBorder_31.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_USABorder_32.set('fieldAliases', {'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', });
lyr_RentPrice_16.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', '1_rent_50_0': 'Range', '1_rent_50_1': 'Range', '1_rent_50_2': 'Range', '1_rent_50_3': 'Range', '1_rent_50_4': 'Range', });
lyr_CrimeDataper100000_17.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Crime_Rate': 'TextEdit', 'Murder Rate': 'TextEdit', 'Rape Rate': 'TextEdit', 'Buglary Rate': 'TextEdit', 'Agrevated Assalt rate': 'TextEdit', 'Robbery Rate': 'TextEdit', });
lyr_UniversityBoundaries_18.set('fieldImages', {'AREALAND': 'TextEdit', 'CENTLON': 'TextEdit', 'AREAWATER': 'TextEdit', 'AREA': 'TextEdit', 'BASENAME': 'TextEdit', 'OID': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'INTPTLAT': 'TextEdit', 'LEN': 'TextEdit', 'CENTLAT': 'TextEdit', 'LNDMRKNS': 'TextEdit', 'MTFCC': 'TextEdit', 'INTPTLON': 'TextEdit', 'LSADC': 'TextEdit', 'NAME': 'TextEdit', });
lyr_AnnualTuition_19.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_QSRanking2026_20.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_USNewsRanking2026_21.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_TestPolicy_22.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_AcceptanceRate_23.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_HigherBoundSAT_24.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_LowerBoundSAT_25.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_UndergraduateSize_26.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_StartingSalary_27.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_Universities_Nov21_28.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_ski_resorts_29.set('fieldImages', {'LAT': 'TextEdit', 'LONG': 'TextEdit', 'STATE': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'ObjectId': 'Range', 'Feature': 'TextEdit', 'Size_Value': 'TextEdit', });
lyr_beach_attributes_20240228_30.set('fieldImages', {'BEACH_ID': 'TextEdit', 'PRG_INT_CODE': 'Range', 'BEACH_NAME': 'TextEdit', 'BEACH_COUNTY': 'TextEdit', 'BEACH_STATE': 'TextEdit', 'BEACH_TRIBE_CODE': 'TextEdit', 'HISTORICAL_ID_FLAG': 'TextEdit', 'BEACH_LEN_IN_MI': 'TextEdit', 'BEACH_LATEST_BEACH_YEAR': 'Range', 'BEACH_ACCESS': 'TextEdit', 'OWNER_ACCESS': 'TextEdit', 'DORMANT_STATUS': 'TextEdit', 'START_LATITUDE_MEASURE': 'TextEdit', 'START_LONGITUDE_MEASURE': 'TextEdit', 'END_LATITUDE_MEASURE': 'TextEdit', 'END_LONGITUDE_MEASURE': 'TextEdit', 'SOURCE_MAP_SCALE': 'Range', 'H_REREFENCE_DATUM_NAME': 'TextEdit', 'STATE_CONTACT_FIRST_NAME': 'TextEdit', 'STATE_CONTACT_LAST_NAME': 'TextEdit', 'STATE_CONTACT_AGENCY_NAME': 'TextEdit', 'STATE_CONTACT_TEL_NUMBER': 'TextEdit', 'STATE_CONTACT_URL': 'TextEdit', 'SOURCE_JOINKEY': 'TextEdit', });
lyr_StateBorder_31.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_USABorder_32.set('fieldImages', {'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_RentPrice_16.set('fieldLabels', {'fid': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', '1_rent_50_0': 'no label', '1_rent_50_1': 'no label', '1_rent_50_2': 'no label', '1_rent_50_3': 'no label', '1_rent_50_4': 'no label', });
lyr_CrimeDataper100000_17.set('fieldLabels', {'fid': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Crime_Rate': 'no label', 'Murder Rate': 'no label', 'Rape Rate': 'no label', 'Buglary Rate': 'no label', 'Agrevated Assalt rate': 'no label', 'Robbery Rate': 'no label', });
lyr_UniversityBoundaries_18.set('fieldLabels', {'AREALAND': 'no label', 'CENTLON': 'no label', 'AREAWATER': 'no label', 'AREA': 'no label', 'BASENAME': 'no label', 'OID': 'no label', 'FUNCSTAT': 'no label', 'INTPTLAT': 'no label', 'LEN': 'no label', 'CENTLAT': 'no label', 'LNDMRKNS': 'no label', 'MTFCC': 'no label', 'INTPTLON': 'no label', 'LSADC': 'no label', 'NAME': 'no label', });
lyr_AnnualTuition_19.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_QSRanking2026_20.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_USNewsRanking2026_21.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_TestPolicy_22.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_AcceptanceRate_23.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_HigherBoundSAT_24.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'header label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_LowerBoundSAT_25.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'header label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_UndergraduateSize_26.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_StartingSalary_27.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_Universities_Nov21_28.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_ski_resorts_29.set('fieldLabels', {'LAT': 'no label', 'LONG': 'no label', 'STATE': 'no label', 'NAME': 'no label', 'TYPE': 'no label', 'ObjectId': 'no label', 'Feature': 'no label', 'Size_Value': 'no label', });
lyr_beach_attributes_20240228_30.set('fieldLabels', {'BEACH_ID': 'no label', 'PRG_INT_CODE': 'no label', 'BEACH_NAME': 'no label', 'BEACH_COUNTY': 'no label', 'BEACH_STATE': 'no label', 'BEACH_TRIBE_CODE': 'no label', 'HISTORICAL_ID_FLAG': 'no label', 'BEACH_LEN_IN_MI': 'no label', 'BEACH_LATEST_BEACH_YEAR': 'no label', 'BEACH_ACCESS': 'no label', 'OWNER_ACCESS': 'no label', 'DORMANT_STATUS': 'no label', 'START_LATITUDE_MEASURE': 'no label', 'START_LONGITUDE_MEASURE': 'no label', 'END_LATITUDE_MEASURE': 'no label', 'END_LONGITUDE_MEASURE': 'no label', 'SOURCE_MAP_SCALE': 'no label', 'H_REREFENCE_DATUM_NAME': 'no label', 'STATE_CONTACT_FIRST_NAME': 'no label', 'STATE_CONTACT_LAST_NAME': 'no label', 'STATE_CONTACT_AGENCY_NAME': 'no label', 'STATE_CONTACT_TEL_NUMBER': 'no label', 'STATE_CONTACT_URL': 'no label', 'SOURCE_JOINKEY': 'no label', });
lyr_StateBorder_31.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_USABorder_32.set('fieldLabels', {'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', });
lyr_USABorder_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});