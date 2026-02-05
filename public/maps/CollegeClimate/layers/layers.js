ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102003").setExtent([-4002123.900275, -3762129.268046, 5825775.499834, 3801127.381652]);
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
var lyr_TempMeanAverage_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TempMean-Average<br />\
    <img src="styles/legend/TempMeanAverage_1_0.png" /> -10.0<br />\
    <img src="styles/legend/TempMeanAverage_1_1.png" /> -5.0<br />\
    <img src="styles/legend/TempMeanAverage_1_2.png" /> 0.0<br />\
    <img src="styles/legend/TempMeanAverage_1_3.png" /> 5.0<br />\
    <img src="styles/legend/TempMeanAverage_1_4.png" /> 10.0<br />\
    <img src="styles/legend/TempMeanAverage_1_5.png" /> 15.0<br />\
    <img src="styles/legend/TempMeanAverage_1_6.png" /> 20.0<br />\
    <img src="styles/legend/TempMeanAverage_1_7.png" /> 25.0<br />\
    <img src="styles/legend/TempMeanAverage_1_8.png" /> 30.0<br />\
    <img src="styles/legend/TempMeanAverage_1_9.png" /> 35.0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TempMeanAverage_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917255.134152, 2761025.857949, -7400427.352759, 6435458.969311]
        })
    });
var lyr_Winter_Mean_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Winter_Mean<br />\
    <img src="styles/legend/Winter_Mean_2_0.png" /> Cold as hell (-12 to -7)<br />\
    <img src="styles/legend/Winter_Mean_2_1.png" /> Freezing (-7 to -2)<br />\
    <img src="styles/legend/Winter_Mean_2_2.png" /> Frigid (-2 to 3)<br />\
    <img src="styles/legend/Winter_Mean_2_3.png" /> Cold (3 to 8)<br />\
    <img src="styles/legend/Winter_Mean_2_4.png" /> Cool (8 to 14)<br />\
    <img src="styles/legend/Winter_Mean_2_5.png" /> Nice (14 to 19)<br />\
    <img src="styles/legend/Winter_Mean_2_6.png" /> Warm (19 to 24)<br />\
    <img src="styles/legend/Winter_Mean_2_7.png" /> A bit hot (24 to 29)<br />\
    <img src="styles/legend/Winter_Mean_2_8.png" /> Hot (29 to 34)<br />\
    <img src="styles/legend/Winter_Mean_2_9.png" /> Scorching Hot (34 to 39)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Winter_Mean_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Fall_Mean_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fall_Mean<br />\
    <img src="styles/legend/Fall_Mean_3_0.png" /> Cold as hell (-12 to -7)<br />\
    <img src="styles/legend/Fall_Mean_3_1.png" /> Freezing (-7 to -2)<br />\
    <img src="styles/legend/Fall_Mean_3_2.png" /> Frigid (-2 to 3)<br />\
    <img src="styles/legend/Fall_Mean_3_3.png" /> Cold (3 to 8)<br />\
    <img src="styles/legend/Fall_Mean_3_4.png" /> Cool (8 to 14)<br />\
    <img src="styles/legend/Fall_Mean_3_5.png" /> Nice (14 to 19)<br />\
    <img src="styles/legend/Fall_Mean_3_6.png" /> Warm (19 to 24)<br />\
    <img src="styles/legend/Fall_Mean_3_7.png" /> A bit hot (24 to 29)<br />\
    <img src="styles/legend/Fall_Mean_3_8.png" /> Hot (29 to 34)<br />\
    <img src="styles/legend/Fall_Mean_3_9.png" /> Scorching Hot (34 to 39)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Fall_Mean_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Summer_Mean_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Summer_Mean<br />\
    <img src="styles/legend/Summer_Mean_4_0.png" /> Cold as hell (-12 to -7)<br />\
    <img src="styles/legend/Summer_Mean_4_1.png" /> Freezing (-7 to -2)<br />\
    <img src="styles/legend/Summer_Mean_4_2.png" /> Frigid (-2 to -3)<br />\
    <img src="styles/legend/Summer_Mean_4_3.png" /> Cold (3 to 8)<br />\
    <img src="styles/legend/Summer_Mean_4_4.png" /> Cool (8 to 14)<br />\
    <img src="styles/legend/Summer_Mean_4_5.png" /> Nice (14 to 19)<br />\
    <img src="styles/legend/Summer_Mean_4_6.png" /> Warm (19 to 24)<br />\
    <img src="styles/legend/Summer_Mean_4_7.png" /> A bit hot (24 to 29)<br />\
    <img src="styles/legend/Summer_Mean_4_8.png" /> Hot (29 to 34)<br />\
    <img src="styles/legend/Summer_Mean_4_9.png" /> Scorching hot (34 to 39)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Summer_Mean_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var lyr_Spring_Mean_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Spring_Mean<br />\
    <img src="styles/legend/Spring_Mean_5_0.png" /> Cold as hell (-12 to -7)<br />\
    <img src="styles/legend/Spring_Mean_5_1.png" /> Freezing (-7 to -2)<br />\
    <img src="styles/legend/Spring_Mean_5_2.png" /> Frigid (-2 to 3)<br />\
    <img src="styles/legend/Spring_Mean_5_3.png" /> Cold (3 to 8)<br />\
    <img src="styles/legend/Spring_Mean_5_4.png" /> Cool (8 to 14)<br />\
    <img src="styles/legend/Spring_Mean_5_5.png" /> Nice (14 to 19)<br />\
    <img src="styles/legend/Spring_Mean_5_6.png" /> Warm (19 to 24)<br />\
    <img src="styles/legend/Spring_Mean_5_7.png" /> A bit hot (24 to 29)<br />\
    <img src="styles/legend/Spring_Mean_5_8.png" /> Hot (29 to 34)<br />\
    <img src="styles/legend/Spring_Mean_5_9.png" /> Scorching Hot (34 to 39)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Spring_Mean_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277677, 2761026.286428, -7400426.809803, 6435460.721396]
        })
    });
var format_Universities_6 = new ol.format.GeoJSON();
var features_Universities_6 = format_Universities_6.readFeatures(json_Universities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_Universities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universities_6.addFeatures(features_Universities_6);
var lyr_Universities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universities_6, 
                style: style_Universities_6,
                popuplayertitle: 'Universities',
                interactive: true,
    title: 'Universities<br />\
    <img src="styles/legend/Universities_6_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/Universities_6_1.png" /> Private<br />\
    <img src="styles/legend/Universities_6_2.png" /> Public<br />' });
var format_StateBorder_7 = new ol.format.GeoJSON();
var features_StateBorder_7 = format_StateBorder_7.readFeatures(json_StateBorder_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StateBorder_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBorder_7.addFeatures(features_StateBorder_7);
var lyr_StateBorder_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBorder_7, 
                style: style_StateBorder_7,
                popuplayertitle: 'State Border',
                interactive: false,
                title: '<img src="styles/legend/StateBorder_7.png" /> State Border'
            });
var format_USABorder_8 = new ol.format.GeoJSON();
var features_USABorder_8 = format_USABorder_8.readFeatures(json_USABorder_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USABorder_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USABorder_8.addFeatures(features_USABorder_8);
var lyr_USABorder_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USABorder_8, 
                style: style_USABorder_8,
                popuplayertitle: 'USA-Border',
                interactive: false,
                title: '<img src="styles/legend/USABorder_8.png" /> USA-Border'
            });
var group_TempMean = new ol.layer.Group({
                                layers: [lyr_TempMeanAverage_1,lyr_Winter_Mean_2,lyr_Fall_Mean_3,lyr_Summer_Mean_4,lyr_Spring_Mean_5,],
                                fold: 'open',
                                title: 'TempMean'});

lyr_GoogleSatellite_0.setVisible(true);lyr_TempMeanAverage_1.setVisible(true);lyr_Winter_Mean_2.setVisible(false);lyr_Fall_Mean_3.setVisible(false);lyr_Summer_Mean_4.setVisible(false);lyr_Spring_Mean_5.setVisible(false);lyr_Universities_6.setVisible(true);lyr_StateBorder_7.setVisible(true);lyr_USABorder_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TempMean,lyr_Universities_6,lyr_StateBorder_7,lyr_USABorder_8];
lyr_Universities_6.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', 'field_29': 'field_29', 'field_30': 'field_30', 'field_31': 'field_31', 'field_32': 'field_32', 'field_33': 'field_33', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', 'field_38': 'field_38', 'field_39': 'field_39', 'field_40': 'field_40', 'field_41': 'field_41', 'field_42': 'field_42', 'field_43': 'field_43', });
lyr_StateBorder_7.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_USABorder_8.set('fieldAliases', {'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', });
lyr_Universities_6.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': '', 'field_27': '', 'field_28': '', 'field_29': '', 'field_30': '', 'field_31': '', 'field_32': '', 'field_33': '', 'field_34': '', 'field_35': '', 'field_36': '', 'field_37': '', 'field_38': '', 'field_39': '', 'field_40': '', 'field_41': '', 'field_42': '', 'field_43': '', });
lyr_StateBorder_7.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_USABorder_8.set('fieldImages', {'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Universities_6.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', 'field_26': 'no label', 'field_27': 'no label', 'field_28': 'no label', 'field_29': 'no label', 'field_30': 'no label', 'field_31': 'no label', 'field_32': 'no label', 'field_33': 'no label', 'field_34': 'no label', 'field_35': 'no label', 'field_36': 'no label', 'field_37': 'no label', 'field_38': 'no label', 'field_39': 'no label', 'field_40': 'no label', 'field_41': 'no label', 'field_42': 'no label', 'field_43': 'no label', });
lyr_StateBorder_7.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_USABorder_8.set('fieldLabels', {'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', });
lyr_USABorder_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});