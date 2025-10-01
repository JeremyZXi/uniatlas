var wms_layers = [];

var format_usstateboundaries_0 = new ol.format.GeoJSON();
var features_usstateboundaries_0 = format_usstateboundaries_0.readFeatures(json_usstateboundaries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_usstateboundaries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usstateboundaries_0.addFeatures(features_usstateboundaries_0);
var lyr_usstateboundaries_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_usstateboundaries_0, 
                style: style_usstateboundaries_0,
                popuplayertitle: 'us-state-boundaries',
                interactive: true,
                title: '<img src="styles/legend/usstateboundaries_0.png" /> us-state-boundaries'
            });
var lyr_MeanTemperature2024_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mean Temperature 2024<br />\
    <img src="styles/legend/MeanTemperature2024_1_0.png" /> -4.1965<br />\
    <img src="styles/legend/MeanTemperature2024_1_1.png" /> 3.5933<br />\
    <img src="styles/legend/MeanTemperature2024_1_2.png" /> 11.3831<br />\
    <img src="styles/legend/MeanTemperature2024_1_3.png" /> 19.1729<br />\
    <img src="styles/legend/MeanTemperature2024_1_4.png" /> 26.9627<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MeanTemperature2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var format_UNI_TOP50uscollegesanduniversitiespublic_2 = new ol.format.GeoJSON();
var features_UNI_TOP50uscollegesanduniversitiespublic_2 = format_UNI_TOP50uscollegesanduniversitiespublic_2.readFeatures(json_UNI_TOP50uscollegesanduniversitiespublic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNI_TOP50uscollegesanduniversitiespublic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNI_TOP50uscollegesanduniversitiespublic_2.addFeatures(features_UNI_TOP50uscollegesanduniversitiespublic_2);
cluster_UNI_TOP50uscollegesanduniversitiespublic_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UNI_TOP50uscollegesanduniversitiespublic_2
});
var lyr_UNI_TOP50uscollegesanduniversitiespublic_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UNI_TOP50uscollegesanduniversitiespublic_2, 
                style: style_UNI_TOP50uscollegesanduniversitiespublic_2,
                popuplayertitle: 'UNI_TOP50 — uscollegesanduniversitiespublic',
                interactive: true,
                title: '<img src="styles/legend/UNI_TOP50uscollegesanduniversitiespublic_2.png" /> UNI_TOP50 — uscollegesanduniversitiespublic'
            });

lyr_usstateboundaries_0.setVisible(true);lyr_MeanTemperature2024_1.setVisible(true);lyr_UNI_TOP50uscollegesanduniversitiespublic_2.setVisible(true);
var layersList = [lyr_usstateboundaries_0,lyr_MeanTemperature2024_1,lyr_UNI_TOP50uscollegesanduniversitiespublic_2];
lyr_usstateboundaries_0.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'ste_area_code': 'ste_area_code', 'ste_type': 'ste_type', 'ste_name_long': 'ste_name_long', 'ste_fp_code': 'ste_fp_code', 'ste_gnis_code': 'ste_gnis_code', });
lyr_UNI_TOP50uscollegesanduniversitiespublic_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ipedsid': 'ipedsid', 'name': 'name', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'zip4': 'zip4', 'telephone': 'telephone', 'type': 'type', 'status': 'status', 'population': 'population', 'county': 'county', 'countyfips': 'countyfips', 'country': 'country', 'latitude': 'latitude', 'longitude': 'longitude', 'naics_code': 'naics_code', 'naics_desc': 'naics_desc', 'source': 'source', 'sourcedate': 'sourcedate', 'val_method': 'val_method', 'val_date': 'val_date', 'website': 'website', 'stfips': 'stfips', 'cofips': 'cofips', 'sector': 'sector', 'level': 'level', 'hi_offer': 'hi_offer', 'deg_grant': 'deg_grant', 'locale': 'locale', 'close_date': 'close_date', 'merge_id': 'merge_id', 'alias': 'alias', 'size_set': 'size_set', 'inst_size': 'inst_size', 'pt_enroll': 'pt_enroll', 'ft_enroll': 'ft_enroll', 'tot_enroll': 'tot_enroll', 'housing': 'housing', 'dorm_cap': 'dorm_cap', 'tot_emp': 'tot_emp', 'shelter_id': 'shelter_id', 'geo_point_2d': 'geo_point_2d', });
lyr_usstateboundaries_0.set('fieldImages', {'geo_point_2d': 'TextEdit', 'year': '', 'ste_code': '', 'ste_name': '', 'ste_area_code': '', 'ste_type': '', 'ste_name_long': '', 'ste_fp_code': '', 'ste_gnis_code': '', });
lyr_UNI_TOP50uscollegesanduniversitiespublic_2.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ipedsid': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'zip4': 'TextEdit', 'telephone': 'TextEdit', 'type': 'TextEdit', 'status': 'TextEdit', 'population': 'TextEdit', 'county': 'TextEdit', 'countyfips': 'TextEdit', 'country': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'naics_code': 'TextEdit', 'naics_desc': 'TextEdit', 'source': 'TextEdit', 'sourcedate': 'DateTime', 'val_method': 'TextEdit', 'val_date': 'DateTime', 'website': 'TextEdit', 'stfips': 'TextEdit', 'cofips': 'TextEdit', 'sector': 'TextEdit', 'level': 'TextEdit', 'hi_offer': 'TextEdit', 'deg_grant': 'TextEdit', 'locale': 'TextEdit', 'close_date': 'TextEdit', 'merge_id': 'TextEdit', 'alias': 'TextEdit', 'size_set': 'TextEdit', 'inst_size': 'TextEdit', 'pt_enroll': 'TextEdit', 'ft_enroll': 'TextEdit', 'tot_enroll': 'TextEdit', 'housing': 'TextEdit', 'dorm_cap': 'TextEdit', 'tot_emp': 'TextEdit', 'shelter_id': 'TextEdit', 'geo_point_2d': 'TextEdit', });
lyr_usstateboundaries_0.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'ste_code': 'no label', 'ste_name': 'no label', 'ste_area_code': 'no label', 'ste_type': 'no label', 'ste_name_long': 'no label', 'ste_fp_code': 'no label', 'ste_gnis_code': 'no label', });
lyr_UNI_TOP50uscollegesanduniversitiespublic_2.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'ipedsid': 'no label', 'name': 'no label', 'address': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'zip4': 'no label', 'telephone': 'no label', 'type': 'no label', 'status': 'no label', 'population': 'no label', 'county': 'no label', 'countyfips': 'no label', 'country': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'naics_code': 'no label', 'naics_desc': 'no label', 'source': 'no label', 'sourcedate': 'no label', 'val_method': 'no label', 'val_date': 'no label', 'website': 'no label', 'stfips': 'no label', 'cofips': 'no label', 'sector': 'no label', 'level': 'no label', 'hi_offer': 'no label', 'deg_grant': 'no label', 'locale': 'no label', 'close_date': 'no label', 'merge_id': 'no label', 'alias': 'no label', 'size_set': 'no label', 'inst_size': 'no label', 'pt_enroll': 'no label', 'ft_enroll': 'no label', 'tot_enroll': 'no label', 'housing': 'no label', 'dorm_cap': 'no label', 'tot_emp': 'no label', 'shelter_id': 'no label', 'geo_point_2d': 'no label', });
lyr_UNI_TOP50uscollegesanduniversitiespublic_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});