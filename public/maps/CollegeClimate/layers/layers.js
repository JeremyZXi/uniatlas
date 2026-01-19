ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102003").setExtent([-4311048.958853, -2647023.899827, 3763020.653424, 3233405.794959]);
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
    <img src="styles/legend/Summer_Mean_9_0.png" /> <= -17.0<br />\
    <img src="styles/legend/Summer_Mean_9_1.png" /> -17.0 - -13.0<br />\
    <img src="styles/legend/Summer_Mean_9_2.png" /> -13.0 - -9.0<br />\
    <img src="styles/legend/Summer_Mean_9_3.png" /> -9.0 - -5.0<br />\
    <img src="styles/legend/Summer_Mean_9_4.png" /> -5.0 - -1.0<br />\
    <img src="styles/legend/Summer_Mean_9_5.png" /> -1.0 - 3.0<br />\
    <img src="styles/legend/Summer_Mean_9_6.png" /> 3.0 - 7.0<br />\
    <img src="styles/legend/Summer_Mean_9_7.png" /> 7.0 - 11.0<br />\
    <img src="styles/legend/Summer_Mean_9_8.png" /> 11.0 - 15.0<br />\
    <img src="styles/legend/Summer_Mean_9_9.png" /> 15.0 - 19.0<br />\
    <img src="styles/legend/Summer_Mean_9_10.png" /> 19.0 - 23.0<br />\
    <img src="styles/legend/Summer_Mean_9_11.png" /> 23.0 - 27.0<br />\
    <img src="styles/legend/Summer_Mean_9_12.png" /> 27.0 - 31.0<br />\
    <img src="styles/legend/Summer_Mean_9_13.png" /> 31.0 - 35.0<br />\
    <img src="styles/legend/Summer_Mean_9_14.png" /> 35.0 - 39.0<br />\
    <img src="styles/legend/Summer_Mean_9_15.png" /> 39.0 - 43.0<br />\
    <img src="styles/legend/Summer_Mean_9_16.png" /> 43.0 - 47.0<br />\
    <img src="styles/legend/Summer_Mean_9_17.png" /> > 47.0<br />' ,
        
        
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
var format_Universities_16 = new ol.format.GeoJSON();
var features_Universities_16 = format_Universities_16.readFeatures(json_Universities_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_Universities_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universities_16.addFeatures(features_Universities_16);
cluster_Universities_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Universities_16
});
var lyr_Universities_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Universities_16, 
                style: style_Universities_16,
                popuplayertitle: 'Universities',
                interactive: true,
    title: 'Universities<br />\
    <img src="styles/legend/Universities_16_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/Universities_16_1.png" /> Private<br />\
    <img src="styles/legend/Universities_16_2.png" /> Public<br />' });
var format_StateBorder_17 = new ol.format.GeoJSON();
var features_StateBorder_17 = format_StateBorder_17.readFeatures(json_StateBorder_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StateBorder_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBorder_17.addFeatures(features_StateBorder_17);
var lyr_StateBorder_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBorder_17, 
                style: style_StateBorder_17,
                popuplayertitle: 'State Border',
                interactive: false,
                title: '<img src="styles/legend/StateBorder_17.png" /> State Border'
            });
var format_USABorder_18 = new ol.format.GeoJSON();
var features_USABorder_18 = format_USABorder_18.readFeatures(json_USABorder_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USABorder_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USABorder_18.addFeatures(features_USABorder_18);
var lyr_USABorder_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USABorder_18, 
                style: style_USABorder_18,
                popuplayertitle: 'USA-Border',
                interactive: false,
                title: '<img src="styles/legend/USABorder_18.png" /> USA-Border'
            });
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

lyr_GoogleSatellite_0.setVisible(true);lyr_TempMinAverage_1.setVisible(false);lyr_Winter_Min_2.setVisible(false);lyr_Spring_Min_3.setVisible(false);lyr_Summer_Min_4.setVisible(false);lyr_Fall_Min_5.setVisible(false);lyr_TempMeanAverage_6.setVisible(true);lyr_Winter_Mean_7.setVisible(false);lyr_Fall_Mean_8.setVisible(false);lyr_Summer_Mean_9.setVisible(false);lyr_Spring_Mean_10.setVisible(false);lyr_TempMaxAverage_11.setVisible(false);lyr_Winter_Max_12.setVisible(false);lyr_Spring_Max_13.setVisible(false);lyr_Summer_Max_14.setVisible(false);lyr_Fall_Max_15.setVisible(false);lyr_Universities_16.setVisible(true);lyr_StateBorder_17.setVisible(true);lyr_USABorder_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TempMin,group_TempMean,group_TempMax,lyr_Universities_16,lyr_StateBorder_17,lyr_USABorder_18];
lyr_Universities_16.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_StateBorder_17.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_USABorder_18.set('fieldAliases', {'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', });
lyr_Universities_16.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_StateBorder_17.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_USABorder_18.set('fieldImages', {'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Universities_16.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_StateBorder_17.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_USABorder_18.set('fieldLabels', {'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', });
lyr_USABorder_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});