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
var format_georefunitedstatesofamericastate_1 = new ol.format.GeoJSON();
var features_georefunitedstatesofamericastate_1 = format_georefunitedstatesofamericastate_1.readFeatures(json_georefunitedstatesofamericastate_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_georefunitedstatesofamericastate_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_georefunitedstatesofamericastate_1.addFeatures(features_georefunitedstatesofamericastate_1);
var lyr_georefunitedstatesofamericastate_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_georefunitedstatesofamericastate_1, 
                style: style_georefunitedstatesofamericastate_1,
                popuplayertitle: 'georef-united-states-of-america-state',
                interactive: true,
                title: '<img src="styles/legend/georefunitedstatesofamericastate_1.png" /> georef-united-states-of-america-state'
            });
var format_Undergraduate_Size_2 = new ol.format.GeoJSON();
var features_Undergraduate_Size_2 = format_Undergraduate_Size_2.readFeatures(json_Undergraduate_Size_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Undergraduate_Size_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Undergraduate_Size_2.addFeatures(features_Undergraduate_Size_2);
var lyr_Undergraduate_Size_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Undergraduate_Size_2, 
                style: style_Undergraduate_Size_2,
                popuplayertitle: 'Undergraduate_Size',
                interactive: true,
                title: '<img src="styles/legend/Undergraduate_Size_2.png" /> Undergraduate_Size'
            });
var format_UniversityListcopy_3 = new ol.format.GeoJSON();
var features_UniversityListcopy_3 = format_UniversityListcopy_3.readFeatures(json_UniversityListcopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversityListcopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityListcopy_3.addFeatures(features_UniversityListcopy_3);
var lyr_UniversityListcopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityListcopy_3, 
                style: style_UniversityListcopy_3,
                popuplayertitle: 'University List copy',
                interactive: true,
    title: 'University List copy<br />\
    <img src="styles/legend/UniversityListcopy_3_0.png" /> 1460 - 1480.8<br />\
    <img src="styles/legend/UniversityListcopy_3_1.png" /> 1480.8 - 1500<br />\
    <img src="styles/legend/UniversityListcopy_3_2.png" /> 1500 - 1530<br />\
    <img src="styles/legend/UniversityListcopy_3_3.png" /> 1530 - 1530<br />\
    <img src="styles/legend/UniversityListcopy_3_4.png" /> 1530 - 1540<br />\
    <img src="styles/legend/UniversityListcopy_3_5.png" /> 1540 - 1545<br />\
    <img src="styles/legend/UniversityListcopy_3_6.png" /> 1545 - 1560<br />\
    <img src="styles/legend/UniversityListcopy_3_7.png" /> 1560 - 1570<br />\
    <img src="styles/legend/UniversityListcopy_3_8.png" /> 1570 - 1570<br />\
    <img src="styles/legend/UniversityListcopy_3_9.png" /> 1570 - 1570<br />\
    <img src="styles/legend/UniversityListcopy_3_10.png" /> 1570 - 1580<br />\
    <img src="styles/legend/UniversityListcopy_3_11.png" /> 1580 - 1580<br />' });
var format_TestOptionalcopy_4 = new ol.format.GeoJSON();
var features_TestOptionalcopy_4 = format_TestOptionalcopy_4.readFeatures(json_TestOptionalcopy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestOptionalcopy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestOptionalcopy_4.addFeatures(features_TestOptionalcopy_4);
var lyr_TestOptionalcopy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestOptionalcopy_4, 
                style: style_TestOptionalcopy_4,
                popuplayertitle: 'Test-Optional copy',
                interactive: true,
    title: 'Test-Optional copy<br />\
    <img src="styles/legend/TestOptionalcopy_4_0.png" /> false<br />\
    <img src="styles/legend/TestOptionalcopy_4_1.png" /> true<br />\
    <img src="styles/legend/TestOptionalcopy_4_2.png" /> <br />' });
var format_Acceptance_Rate_5 = new ol.format.GeoJSON();
var features_Acceptance_Rate_5 = format_Acceptance_Rate_5.readFeatures(json_Acceptance_Rate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acceptance_Rate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acceptance_Rate_5.addFeatures(features_Acceptance_Rate_5);
cluster_Acceptance_Rate_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Acceptance_Rate_5
});
var lyr_Acceptance_Rate_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Acceptance_Rate_5, 
                style: style_Acceptance_Rate_5,
                popuplayertitle: 'Acceptance_Rate',
                interactive: true,
    title: 'Acceptance_Rate<br />\
    <img src="styles/legend/Acceptance_Rate_5_0.png" /> 3 - 5<br />\
    <img src="styles/legend/Acceptance_Rate_5_1.png" /> 5 - 7<br />\
    <img src="styles/legend/Acceptance_Rate_5_2.png" /> 7 - 11<br />\
    <img src="styles/legend/Acceptance_Rate_5_3.png" /> 11 - 14<br />\
    <img src="styles/legend/Acceptance_Rate_5_4.png" /> 14 - 24<br />\
    <img src="styles/legend/Acceptance_Rate_5_5.png" /> 24 - 37<br />\
    <img src="styles/legend/Acceptance_Rate_5_6.png" /> 37 - 60<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_georefunitedstatesofamericastate_1.setVisible(true);lyr_Undergraduate_Size_2.setVisible(true);lyr_UniversityListcopy_3.setVisible(true);lyr_TestOptionalcopy_4.setVisible(true);lyr_Acceptance_Rate_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_georefunitedstatesofamericastate_1,lyr_Undergraduate_Size_2,lyr_UniversityListcopy_3,lyr_TestOptionalcopy_4,lyr_Acceptance_Rate_5];
lyr_georefunitedstatesofamericastate_1.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'ste_area_code': 'ste_area_code', 'ste_type': 'ste_type', 'ste_name_long': 'ste_name_long', 'ste_fp_code': 'ste_fp_code', 'ste_gnis_code': 'ste_gnis_code', });
lyr_Undergraduate_Size_2.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Mean SAT': 'Mean SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', });
lyr_UniversityListcopy_3.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Mean SAT': 'Mean SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', });
lyr_TestOptionalcopy_4.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Mean SAT': 'Mean SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', });
lyr_Acceptance_Rate_5.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Mean SAT': 'Mean SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', });
lyr_georefunitedstatesofamericastate_1.set('fieldImages', {'geo_point_2d': 'TextEdit', 'year': 'TextEdit', 'ste_code': 'List', 'ste_name': 'List', 'ste_area_code': 'TextEdit', 'ste_type': 'TextEdit', 'ste_name_long': 'TextEdit', 'ste_fp_code': 'TextEdit', 'ste_gnis_code': 'TextEdit', });
lyr_Undergraduate_Size_2.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Mean SAT': 'Range', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'CheckBox', 'International Student %': 'Range', 'Acceptance Rate %': 'Range', });
lyr_UniversityListcopy_3.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Mean SAT': 'Range', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'CheckBox', 'International Student %': 'Range', 'Acceptance Rate %': 'Range', });
lyr_TestOptionalcopy_4.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Mean SAT': 'Range', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'CheckBox', 'International Student %': 'Range', 'Acceptance Rate %': 'Range', });
lyr_Acceptance_Rate_5.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Mean SAT': 'Range', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'CheckBox', 'International Student %': 'Range', 'Acceptance Rate %': 'Range', });
lyr_georefunitedstatesofamericastate_1.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'ste_code': 'no label', 'ste_name': 'no label', 'ste_area_code': 'no label', 'ste_type': 'no label', 'ste_name_long': 'no label', 'ste_fp_code': 'no label', 'ste_gnis_code': 'no label', });
lyr_Undergraduate_Size_2.set('fieldLabels', {'Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Abbr': 'no label', 'USNews(2026)': 'no label', 'QS(2026)': 'no label', 'Tuition($)': 'no label', 'Undergraduate Size': 'no label', 'Lower SAT': 'no label', 'Mean SAT': 'no label', 'Upper SAT': 'no label', 'Location': 'no label', 'Website': 'no label', 'Test-Optional': 'no label', 'International Student %': 'no label', 'Acceptance Rate %': 'no label', });
lyr_UniversityListcopy_3.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', 'Abbr': 'header label - always visible', 'USNews(2026)': 'no label', 'QS(2026)': 'no label', 'Tuition($)': 'no label', 'Undergraduate Size': 'no label', 'Lower SAT': 'no label', 'Mean SAT': 'no label', 'Upper SAT': 'no label', 'Location': 'no label', 'Website': 'no label', 'Test-Optional': 'no label', 'International Student %': 'no label', 'Acceptance Rate %': 'no label', });
lyr_TestOptionalcopy_4.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - always visible', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Mean SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', });
lyr_Acceptance_Rate_5.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - always visible', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'header label - visible with data', 'Tuition($)': 'no label', 'Undergraduate Size': 'no label', 'Lower SAT': 'no label', 'Mean SAT': 'no label', 'Upper SAT': 'no label', 'Location': 'no label', 'Website': 'no label', 'Test-Optional': 'no label', 'International Student %': 'no label', 'Acceptance Rate %': 'no label', });
lyr_Acceptance_Rate_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});