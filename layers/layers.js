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
var lyr_PRISM_tmean_stable_4kmM3_202412_bil_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202412_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_1_0.png" /> -15.0000<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_1_1.png" /> 0.0000<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_1_2.png" /> 15.0000<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_1_3.png" /> 23.5817<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_1_4.png" /> 34.0385<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_1_5.png" /> 45.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202412_bil_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var format_georefunitedstatesofamericastate_2 = new ol.format.GeoJSON();
var features_georefunitedstatesofamericastate_2 = format_georefunitedstatesofamericastate_2.readFeatures(json_georefunitedstatesofamericastate_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_georefunitedstatesofamericastate_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_georefunitedstatesofamericastate_2.addFeatures(features_georefunitedstatesofamericastate_2);
var lyr_georefunitedstatesofamericastate_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_georefunitedstatesofamericastate_2, 
                style: style_georefunitedstatesofamericastate_2,
                popuplayertitle: 'georef-united-states-of-america-state',
                interactive: false,
                title: '<img src="styles/legend/georefunitedstatesofamericastate_2.png" /> georef-united-states-of-america-state'
            });
var format_USNewsRanking2026_3 = new ol.format.GeoJSON();
var features_USNewsRanking2026_3 = format_USNewsRanking2026_3.readFeatures(json_USNewsRanking2026_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USNewsRanking2026_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USNewsRanking2026_3.addFeatures(features_USNewsRanking2026_3);
var lyr_USNewsRanking2026_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USNewsRanking2026_3, 
                style: style_USNewsRanking2026_3,
                popuplayertitle: 'U.S.News Ranking(2026)',
                interactive: true,
    title: 'U.S.News Ranking(2026)<br />\
    <img src="styles/legend/USNewsRanking2026_3_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/USNewsRanking2026_3_1.png" /> Private<br />\
    <img src="styles/legend/USNewsRanking2026_3_2.png" /> Public<br />' });
var format_TestPolicy_4 = new ol.format.GeoJSON();
var features_TestPolicy_4 = format_TestPolicy_4.readFeatures(json_TestPolicy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestPolicy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestPolicy_4.addFeatures(features_TestPolicy_4);
var lyr_TestPolicy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestPolicy_4, 
                style: style_TestPolicy_4,
                popuplayertitle: 'Test-Policy',
                interactive: true,
    title: 'Test-Policy<br />\
    <img src="styles/legend/TestPolicy_4_0.png" /> Test-Optional<br />\
    <img src="styles/legend/TestPolicy_4_1.png" /> Test-Required<br />\
    <img src="styles/legend/TestPolicy_4_2.png" /> Test-Blind<br />' });
var format_Nov12List_5 = new ol.format.GeoJSON();
var features_Nov12List_5 = format_Nov12List_5.readFeatures(json_Nov12List_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nov12List_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nov12List_5.addFeatures(features_Nov12List_5);
cluster_Nov12List_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Nov12List_5
});
var lyr_Nov12List_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Nov12List_5, 
                style: style_Nov12List_5,
                popuplayertitle: 'Nov12.List',
                interactive: true,
    title: 'Nov12.List<br />\
    <img src="styles/legend/Nov12List_5_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/Nov12List_5_1.png" /> Private<br />\
    <img src="styles/legend/Nov12List_5_2.png" /> Public<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202412_bil_1.setVisible(true);lyr_georefunitedstatesofamericastate_2.setVisible(true);lyr_USNewsRanking2026_3.setVisible(true);lyr_TestPolicy_4.setVisible(true);lyr_Nov12List_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PRISM_tmean_stable_4kmM3_202412_bil_1,lyr_georefunitedstatesofamericastate_2,lyr_USNewsRanking2026_3,lyr_TestPolicy_4,lyr_Nov12List_5];
lyr_georefunitedstatesofamericastate_2.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'ste_area_code': 'ste_area_code', 'ste_type': 'ste_type', 'ste_name_long': 'ste_name_long', 'ste_fp_code': 'ste_fp_code', 'ste_gnis_code': 'ste_gnis_code', });
lyr_USNewsRanking2026_3.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_TestPolicy_4.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_Nov12List_5.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_georefunitedstatesofamericastate_2.set('fieldImages', {'geo_point_2d': 'TextEdit', 'year': 'TextEdit', 'ste_code': 'List', 'ste_name': 'List', 'ste_area_code': 'TextEdit', 'ste_type': 'TextEdit', 'ste_name_long': 'TextEdit', 'ste_fp_code': 'TextEdit', 'ste_gnis_code': 'TextEdit', });
lyr_USNewsRanking2026_3.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_TestPolicy_4.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_Nov12List_5.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_georefunitedstatesofamericastate_2.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'ste_code': 'no label', 'ste_name': 'no label', 'ste_area_code': 'no label', 'ste_type': 'no label', 'ste_name_long': 'no label', 'ste_fp_code': 'no label', 'ste_gnis_code': 'no label', });
lyr_USNewsRanking2026_3.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'hidden field', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_TestPolicy_4.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'hidden field', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_Nov12List_5.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_Nov12List_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});