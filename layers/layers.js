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
                interactive: false,
                title: '<img src="styles/legend/georefunitedstatesofamericastate_1.png" /> georef-united-states-of-america-state'
            });
var format_UniversityListcopy_2 = new ol.format.GeoJSON();
var features_UniversityListcopy_2 = format_UniversityListcopy_2.readFeatures(json_UniversityListcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversityListcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityListcopy_2.addFeatures(features_UniversityListcopy_2);
var lyr_UniversityListcopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityListcopy_2, 
                style: style_UniversityListcopy_2,
                popuplayertitle: 'University List copy',
                interactive: true,
    title: 'University List copy<br />\
    <img src="styles/legend/UniversityListcopy_2_0.png" /> 1460 - 1480.8<br />\
    <img src="styles/legend/UniversityListcopy_2_1.png" /> 1480.8 - 1500<br />\
    <img src="styles/legend/UniversityListcopy_2_2.png" /> 1500 - 1530<br />\
    <img src="styles/legend/UniversityListcopy_2_3.png" /> 1530 - 1530<br />\
    <img src="styles/legend/UniversityListcopy_2_4.png" /> 1530 - 1540<br />\
    <img src="styles/legend/UniversityListcopy_2_5.png" /> 1540 - 1545<br />\
    <img src="styles/legend/UniversityListcopy_2_6.png" /> 1545 - 1560<br />\
    <img src="styles/legend/UniversityListcopy_2_7.png" /> 1560 - 1570<br />\
    <img src="styles/legend/UniversityListcopy_2_8.png" /> 1570 - 1570<br />\
    <img src="styles/legend/UniversityListcopy_2_9.png" /> 1570 - 1570<br />\
    <img src="styles/legend/UniversityListcopy_2_10.png" /> 1570 - 1580<br />\
    <img src="styles/legend/UniversityListcopy_2_11.png" /> 1580 - 1580<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_georefunitedstatesofamericastate_1.setVisible(true);lyr_UniversityListcopy_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_georefunitedstatesofamericastate_1,lyr_UniversityListcopy_2];
lyr_georefunitedstatesofamericastate_1.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'ste_area_code': 'ste_area_code', 'ste_type': 'ste_type', 'ste_name_long': 'ste_name_long', 'ste_fp_code': 'ste_fp_code', 'ste_gnis_code': 'ste_gnis_code', });
lyr_UniversityListcopy_2.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Mean SAT': 'Mean SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', });
lyr_georefunitedstatesofamericastate_1.set('fieldImages', {'geo_point_2d': 'TextEdit', 'year': 'TextEdit', 'ste_code': 'List', 'ste_name': 'List', 'ste_area_code': 'TextEdit', 'ste_type': 'TextEdit', 'ste_name_long': 'TextEdit', 'ste_fp_code': 'TextEdit', 'ste_gnis_code': 'TextEdit', });
lyr_UniversityListcopy_2.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Mean SAT': 'Range', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'CheckBox', 'International Student %': 'Range', 'Acceptance Rate %': 'Range', });
lyr_georefunitedstatesofamericastate_1.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'ste_code': 'no label', 'ste_name': 'no label', 'ste_area_code': 'no label', 'ste_type': 'no label', 'ste_name_long': 'no label', 'ste_fp_code': 'no label', 'ste_gnis_code': 'no label', });
lyr_UniversityListcopy_2.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', 'Abbr': 'header label - always visible', 'USNews(2026)': 'no label', 'QS(2026)': 'no label', 'Tuition($)': 'no label', 'Undergraduate Size': 'no label', 'Lower SAT': 'no label', 'Mean SAT': 'no label', 'Upper SAT': 'no label', 'Location': 'no label', 'Website': 'no label', 'Test-Optional': 'no label', 'International Student %': 'no label', 'Acceptance Rate %': 'no label', });
lyr_UniversityListcopy_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});