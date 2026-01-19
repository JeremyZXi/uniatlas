ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102003").setExtent([-4526710.969476, -2669550.573579, 3575696.589603, 3002134.717776]);
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
var format_StateBorder_1 = new ol.format.GeoJSON();
var features_StateBorder_1 = format_StateBorder_1.readFeatures(json_StateBorder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StateBorder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBorder_1.addFeatures(features_StateBorder_1);
var lyr_StateBorder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBorder_1, 
                style: style_StateBorder_1,
                popuplayertitle: 'State Border',
                interactive: false,
                title: '<img src="styles/legend/StateBorder_1.png" /> State Border'
            });
var format_USABorder_2 = new ol.format.GeoJSON();
var features_USABorder_2 = format_USABorder_2.readFeatures(json_USABorder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USABorder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USABorder_2.addFeatures(features_USABorder_2);
var lyr_USABorder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USABorder_2, 
                style: style_USABorder_2,
                popuplayertitle: 'USA-Border',
                interactive: false,
                title: '<img src="styles/legend/USABorder_2.png" /> USA-Border'
            });
var format_UniversityBoundaries_3 = new ol.format.GeoJSON();
var features_UniversityBoundaries_3 = format_UniversityBoundaries_3.readFeatures(json_UniversityBoundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_UniversityBoundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversityBoundaries_3.addFeatures(features_UniversityBoundaries_3);
var lyr_UniversityBoundaries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversityBoundaries_3, 
                style: style_UniversityBoundaries_3,
                popuplayertitle: 'University Boundaries',
                interactive: true,
                title: '<img src="styles/legend/UniversityBoundaries_3.png" /> University Boundaries'
            });
var format_UndergraduateSize_4 = new ol.format.GeoJSON();
var features_UndergraduateSize_4 = format_UndergraduateSize_4.readFeatures(json_UndergraduateSize_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_UndergraduateSize_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UndergraduateSize_4.addFeatures(features_UndergraduateSize_4);
var lyr_UndergraduateSize_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UndergraduateSize_4, 
                style: style_UndergraduateSize_4,
                popuplayertitle: 'Undergraduate Size',
                interactive: true,
    title: 'Undergraduate Size<br />\
    <img src="styles/legend/UndergraduateSize_4_0.png" /> 921 - 6658<br />\
    <img src="styles/legend/UndergraduateSize_4_1.png" /> 6658 - 12395<br />\
    <img src="styles/legend/UndergraduateSize_4_2.png" /> 12395 - 18131<br />\
    <img src="styles/legend/UndergraduateSize_4_3.png" /> 18131 - 23868<br />\
    <img src="styles/legend/UndergraduateSize_4_4.png" /> 23868 - 29605<br />\
    <img src="styles/legend/UndergraduateSize_4_5.png" /> 29605 - 35342<br />\
    <img src="styles/legend/UndergraduateSize_4_6.png" /> 35342 - 41078<br />\
    <img src="styles/legend/UndergraduateSize_4_7.png" /> 41078 - 46815<br />' });
var format_StartingSalary_5 = new ol.format.GeoJSON();
var features_StartingSalary_5 = format_StartingSalary_5.readFeatures(json_StartingSalary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_StartingSalary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartingSalary_5.addFeatures(features_StartingSalary_5);
var lyr_StartingSalary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StartingSalary_5, 
                style: style_StartingSalary_5,
                popuplayertitle: 'Starting Salary($)',
                interactive: true,
    title: 'Starting Salary($)<br />\
    <img src="styles/legend/StartingSalary_5_0.png" /> 45731 - 52678<br />\
    <img src="styles/legend/StartingSalary_5_1.png" /> 52678 - 59815<br />\
    <img src="styles/legend/StartingSalary_5_2.png" /> 59815 - 64601<br />\
    <img src="styles/legend/StartingSalary_5_3.png" /> 64601 - 71066<br />\
    <img src="styles/legend/StartingSalary_5_4.png" /> 71066 - 80134<br />\
    <img src="styles/legend/StartingSalary_5_5.png" /> 80134 - 96255<br />\
    <img src="styles/legend/StartingSalary_5_6.png" /> 96255 - 114055<br />\
    <img src="styles/legend/StartingSalary_5_7.png" /> 114055 - 132140<br />' });
var format_AnnualTuition_6 = new ol.format.GeoJSON();
var features_AnnualTuition_6 = format_AnnualTuition_6.readFeatures(json_AnnualTuition_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_AnnualTuition_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnnualTuition_6.addFeatures(features_AnnualTuition_6);
var lyr_AnnualTuition_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnnualTuition_6, 
                style: style_AnnualTuition_6,
                popuplayertitle: 'Annual Tuition($)',
                interactive: true,
    title: 'Annual Tuition($)<br />\
    <img src="styles/legend/AnnualTuition_6_0.png" /> 28794 - 34590<br />\
    <img src="styles/legend/AnnualTuition_6_1.png" /> 34590 - 40386<br />\
    <img src="styles/legend/AnnualTuition_6_2.png" /> 40386 - 46182<br />\
    <img src="styles/legend/AnnualTuition_6_3.png" /> 46182 - 51978<br />\
    <img src="styles/legend/AnnualTuition_6_4.png" /> 51978 - 57774<br />\
    <img src="styles/legend/AnnualTuition_6_5.png" /> 57774 - 63570<br />\
    <img src="styles/legend/AnnualTuition_6_6.png" /> 63570 - 69366<br />\
    <img src="styles/legend/AnnualTuition_6_7.png" /> 69366 - 75162<br />' });
var format_QSRanking2026_7 = new ol.format.GeoJSON();
var features_QSRanking2026_7 = format_QSRanking2026_7.readFeatures(json_QSRanking2026_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_QSRanking2026_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QSRanking2026_7.addFeatures(features_QSRanking2026_7);
var lyr_QSRanking2026_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QSRanking2026_7, 
                style: style_QSRanking2026_7,
                popuplayertitle: 'QS Ranking(2026)',
                interactive: true,
    title: 'QS Ranking(2026)<br />\
    <img src="styles/legend/QSRanking2026_7_0.png" /> 1 - 30<br />\
    <img src="styles/legend/QSRanking2026_7_1.png" /> 30 - 60<br />\
    <img src="styles/legend/QSRanking2026_7_2.png" /> 60 - 100<br />\
    <img src="styles/legend/QSRanking2026_7_3.png" /> 100 - 250<br />\
    <img src="styles/legend/QSRanking2026_7_4.png" /> 250 - 350<br />\
    <img src="styles/legend/QSRanking2026_7_5.png" /> 350 - 500<br />\
    <img src="styles/legend/QSRanking2026_7_6.png" /> 500 - 590<br />\
    <img src="styles/legend/QSRanking2026_7_7.png" /> 590 - 668<br />' });
var format_HigherBoundSAT_8 = new ol.format.GeoJSON();
var features_HigherBoundSAT_8 = format_HigherBoundSAT_8.readFeatures(json_HigherBoundSAT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_HigherBoundSAT_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HigherBoundSAT_8.addFeatures(features_HigherBoundSAT_8);
var lyr_HigherBoundSAT_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HigherBoundSAT_8, 
                style: style_HigherBoundSAT_8,
                popuplayertitle: 'Higher Bound SAT',
                interactive: true,
    title: 'Higher Bound SAT<br />\
    <img src="styles/legend/HigherBoundSAT_8_0.png" /> 1480 - 1500<br />\
    <img src="styles/legend/HigherBoundSAT_8_1.png" /> 1500 - 1520<br />\
    <img src="styles/legend/HigherBoundSAT_8_2.png" /> 1520 - 1540<br />\
    <img src="styles/legend/HigherBoundSAT_8_3.png" /> 1540 - 1560<br />\
    <img src="styles/legend/HigherBoundSAT_8_4.png" /> 1560 - 1580<br />' });
var format_LowerBoundSAT_9 = new ol.format.GeoJSON();
var features_LowerBoundSAT_9 = format_LowerBoundSAT_9.readFeatures(json_LowerBoundSAT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_LowerBoundSAT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerBoundSAT_9.addFeatures(features_LowerBoundSAT_9);
var lyr_LowerBoundSAT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LowerBoundSAT_9, 
                style: style_LowerBoundSAT_9,
                popuplayertitle: 'Lower Bound SAT',
                interactive: true,
    title: 'Lower Bound SAT<br />\
    <img src="styles/legend/LowerBoundSAT_9_0.png" /> 1200 - 1255<br />\
    <img src="styles/legend/LowerBoundSAT_9_1.png" /> 1255 - 1310<br />\
    <img src="styles/legend/LowerBoundSAT_9_2.png" /> 1310 - 1365<br />\
    <img src="styles/legend/LowerBoundSAT_9_3.png" /> 1365 - 1420<br />\
    <img src="styles/legend/LowerBoundSAT_9_4.png" /> 1420 - 1475<br />\
    <img src="styles/legend/LowerBoundSAT_9_5.png" /> 1475 - 1530<br />' });
var format_USNewsRanking2026_10 = new ol.format.GeoJSON();
var features_USNewsRanking2026_10 = format_USNewsRanking2026_10.readFeatures(json_USNewsRanking2026_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_USNewsRanking2026_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USNewsRanking2026_10.addFeatures(features_USNewsRanking2026_10);
var lyr_USNewsRanking2026_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USNewsRanking2026_10, 
                style: style_USNewsRanking2026_10,
                popuplayertitle: 'U.S.News Ranking(2026)',
                interactive: true,
    title: 'U.S.News Ranking(2026)<br />\
    <img src="styles/legend/USNewsRanking2026_10_0.png" /> 1 - 5<br />\
    <img src="styles/legend/USNewsRanking2026_10_1.png" /> 5 - 7<br />\
    <img src="styles/legend/USNewsRanking2026_10_2.png" /> 7 - 13<br />\
    <img src="styles/legend/USNewsRanking2026_10_3.png" /> 13 - 15<br />\
    <img src="styles/legend/USNewsRanking2026_10_4.png" /> 15 - 21<br />\
    <img src="styles/legend/USNewsRanking2026_10_5.png" /> 21 - 26<br />\
    <img src="styles/legend/USNewsRanking2026_10_6.png" /> 26 - 32<br />\
    <img src="styles/legend/USNewsRanking2026_10_7.png" /> 32 - 42<br />\
    <img src="styles/legend/USNewsRanking2026_10_8.png" /> 42 - 46<br />' });
var format_TestPolicy_11 = new ol.format.GeoJSON();
var features_TestPolicy_11 = format_TestPolicy_11.readFeatures(json_TestPolicy_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_TestPolicy_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestPolicy_11.addFeatures(features_TestPolicy_11);
var lyr_TestPolicy_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestPolicy_11, 
                style: style_TestPolicy_11,
                popuplayertitle: 'Test-Policy',
                interactive: true,
    title: 'Test-Policy<br />\
    <img src="styles/legend/TestPolicy_11_0.png" /> Test-Optional<br />\
    <img src="styles/legend/TestPolicy_11_1.png" /> Test-Required<br />\
    <img src="styles/legend/TestPolicy_11_2.png" /> Test-Blind<br />' });
var format_AcceptanceRate_12 = new ol.format.GeoJSON();
var features_AcceptanceRate_12 = format_AcceptanceRate_12.readFeatures(json_AcceptanceRate_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_AcceptanceRate_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcceptanceRate_12.addFeatures(features_AcceptanceRate_12);
var lyr_AcceptanceRate_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcceptanceRate_12, 
                style: style_AcceptanceRate_12,
                popuplayertitle: 'Acceptance Rate %',
                interactive: true,
    title: 'Acceptance Rate %<br />\
    <img src="styles/legend/AcceptanceRate_12_0.png" /> 2 - 5<br />\
    <img src="styles/legend/AcceptanceRate_12_1.png" /> 5 - 8<br />\
    <img src="styles/legend/AcceptanceRate_12_2.png" /> 9 - 14<br />\
    <img src="styles/legend/AcceptanceRate_12_3.png" /> 14 - 20<br />\
    <img src="styles/legend/AcceptanceRate_12_4.png" /> 20 - 28<br />\
    <img src="styles/legend/AcceptanceRate_12_5.png" /> 28 - 36<br />\
    <img src="styles/legend/AcceptanceRate_12_6.png" /> 36 - 45<br />\
    <img src="styles/legend/AcceptanceRate_12_7.png" /> 45 - 65.4<br />' });
var format_University_Type_13 = new ol.format.GeoJSON();
var features_University_Type_13 = format_University_Type_13.readFeatures(json_University_Type_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_University_Type_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_University_Type_13.addFeatures(features_University_Type_13);
var lyr_University_Type_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_University_Type_13, 
                style: style_University_Type_13,
                popuplayertitle: 'University_Type',
                interactive: true,
    title: 'University_Type<br />\
    <img src="styles/legend/University_Type_13_0.png" /> Liberal Arts<br />\
    <img src="styles/legend/University_Type_13_1.png" /> Private<br />\
    <img src="styles/legend/University_Type_13_2.png" /> Public<br />' });
var format_University_Names_14 = new ol.format.GeoJSON();
var features_University_Names_14 = format_University_Names_14.readFeatures(json_University_Names_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102003'});
var jsonSource_University_Names_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_University_Names_14.addFeatures(features_University_Names_14);
var lyr_University_Names_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_University_Names_14, 
                style: style_University_Names_14,
                popuplayertitle: 'University_Names',
                interactive: true,
                title: '<img src="styles/legend/University_Names_14.png" /> University_Names'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_StateBorder_1.setVisible(true);lyr_USABorder_2.setVisible(true);lyr_UniversityBoundaries_3.setVisible(true);lyr_UndergraduateSize_4.setVisible(false);lyr_StartingSalary_5.setVisible(false);lyr_AnnualTuition_6.setVisible(false);lyr_QSRanking2026_7.setVisible(false);lyr_HigherBoundSAT_8.setVisible(false);lyr_LowerBoundSAT_9.setVisible(false);lyr_USNewsRanking2026_10.setVisible(false);lyr_TestPolicy_11.setVisible(false);lyr_AcceptanceRate_12.setVisible(false);lyr_University_Type_13.setVisible(false);lyr_University_Names_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_StateBorder_1,lyr_USABorder_2,lyr_UniversityBoundaries_3,lyr_UndergraduateSize_4,lyr_StartingSalary_5,lyr_AnnualTuition_6,lyr_QSRanking2026_7,lyr_HigherBoundSAT_8,lyr_LowerBoundSAT_9,lyr_USNewsRanking2026_10,lyr_TestPolicy_11,lyr_AcceptanceRate_12,lyr_University_Type_13,lyr_University_Names_14];
lyr_StateBorder_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_USABorder_2.set('fieldAliases', {'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', });
lyr_UniversityBoundaries_3.set('fieldAliases', {'AREALAND': 'AREALAND', 'CENTLON': 'CENTLON', 'AREAWATER': 'AREAWATER', 'AREA': 'AREA', 'BASENAME': 'BASENAME', 'OID': 'OID', 'FUNCSTAT': 'FUNCSTAT', 'INTPTLAT': 'INTPTLAT', 'LEN': 'LEN', 'CENTLAT': 'CENTLAT', 'LNDMRKNS': 'LNDMRKNS', 'MTFCC': 'MTFCC', 'INTPTLON': 'INTPTLON', 'LSADC': 'LSADC', 'NAME': 'NAME', });
lyr_UndergraduateSize_4.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_StartingSalary_5.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_AnnualTuition_6.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_QSRanking2026_7.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_HigherBoundSAT_8.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_LowerBoundSAT_9.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_USNewsRanking2026_10.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_TestPolicy_11.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_AcceptanceRate_12.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary ($)': 'Starting Salary ($)', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_University_Type_13.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_University_Names_14.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Abbr': 'Abbr', 'USNews(2026)': 'USNews(2026)', 'QS(2026)': 'QS(2026)', 'Tuition($)': 'Tuition($)', 'Undergraduate Size': 'Undergraduate Size', 'Lower SAT': 'Lower SAT', 'Medium SAT': 'Medium SAT', 'Upper SAT': 'Upper SAT', 'Location': 'Location', 'Website': 'Website', 'Test-Optional': 'Test-Optional', 'International Student %': 'International Student %', 'Acceptance Rate %': 'Acceptance Rate %', 'Type': 'Type', 'Key Enrolled': 'Key Enrolled', 'Key Accept': 'Key Accept', 'Application Type': 'Application Type', 'Starting Salary': 'Starting Salary', 'Deadline': 'Deadline', 'Need-Blind to Int': 'Need-Blind to Int', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_StateBorder_1.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_USABorder_2.set('fieldImages', {'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_UniversityBoundaries_3.set('fieldImages', {'AREALAND': 'TextEdit', 'CENTLON': 'TextEdit', 'AREAWATER': 'TextEdit', 'AREA': 'TextEdit', 'BASENAME': 'TextEdit', 'OID': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'INTPTLAT': 'TextEdit', 'LEN': 'TextEdit', 'CENTLAT': 'TextEdit', 'LNDMRKNS': 'TextEdit', 'MTFCC': 'TextEdit', 'INTPTLON': 'TextEdit', 'LSADC': 'TextEdit', 'NAME': 'TextEdit', });
lyr_UndergraduateSize_4.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_StartingSalary_5.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_AnnualTuition_6.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_QSRanking2026_7.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_HigherBoundSAT_8.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_LowerBoundSAT_9.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_USNewsRanking2026_10.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_TestPolicy_11.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_AcceptanceRate_12.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary ($)': 'Range', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_University_Type_13.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_University_Names_14.set('fieldImages', {'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Abbr': 'TextEdit', 'USNews(2026)': 'Range', 'QS(2026)': 'Range', 'Tuition($)': 'Range', 'Undergraduate Size': 'Range', 'Lower SAT': 'Range', 'Medium SAT': 'TextEdit', 'Upper SAT': 'Range', 'Location': 'TextEdit', 'Website': 'TextEdit', 'Test-Optional': 'TextEdit', 'International Student %': 'Range', 'Acceptance Rate %': 'TextEdit', 'Type': 'TextEdit', 'Key Enrolled': 'TextEdit', 'Key Accept': 'CheckBox', 'Application Type': 'TextEdit', 'Starting Salary': 'TextEdit', 'Deadline': 'TextEdit', 'Need-Blind to Int': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_StateBorder_1.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_USABorder_2.set('fieldLabels', {'AFFGEOID': 'hidden field', 'GEOID': 'hidden field', 'NAME': 'hidden field', });
lyr_UniversityBoundaries_3.set('fieldLabels', {'AREALAND': 'hidden field', 'CENTLON': 'hidden field', 'AREAWATER': 'hidden field', 'AREA': 'hidden field', 'BASENAME': 'hidden field', 'OID': 'hidden field', 'FUNCSTAT': 'hidden field', 'INTPTLAT': 'hidden field', 'LEN': 'hidden field', 'CENTLAT': 'hidden field', 'LNDMRKNS': 'hidden field', 'MTFCC': 'hidden field', 'INTPTLON': 'hidden field', 'LSADC': 'hidden field', 'NAME': 'header label - always visible', });
lyr_UndergraduateSize_4.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_StartingSalary_5.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_AnnualTuition_6.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_QSRanking2026_7.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_HigherBoundSAT_8.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'header label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_LowerBoundSAT_9.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'header label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'inline label - visible with data', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_USNewsRanking2026_10.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_TestPolicy_11.set('fieldLabels', {'Name': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_AcceptanceRate_12.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'header label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'hidden field', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary ($)': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_University_Type_13.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_University_Names_14.set('fieldLabels', {'Name': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Abbr': 'inline label - visible with data', 'USNews(2026)': 'inline label - visible with data', 'QS(2026)': 'inline label - visible with data', 'Tuition($)': 'inline label - visible with data', 'Undergraduate Size': 'inline label - visible with data', 'Lower SAT': 'inline label - visible with data', 'Medium SAT': 'hidden field', 'Upper SAT': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Test-Optional': 'inline label - visible with data', 'International Student %': 'inline label - visible with data', 'Acceptance Rate %': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Key Enrolled': 'inline label - visible with data', 'Key Accept': 'inline label - visible with data', 'Application Type': 'inline label - visible with data', 'Starting Salary': 'inline label - visible with data', 'Deadline': 'hidden field', 'Need-Blind to Int': 'hidden field', 'field_24': 'hidden field', 'field_25': 'hidden field', });
lyr_University_Names_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});