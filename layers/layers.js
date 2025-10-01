var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });
var lyr_PRISM_tmean_stable_4kmM3_202401_bil_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202401_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202401_bil_1_0.png" /> -14.5020<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202401_bil_1_1.png" /> -5.2348<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202401_bil_1_2.png" /> 4.0325<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202401_bil_1_3.png" /> 13.2998<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202401_bil_1_4.png" /> 22.5670<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202401_bil_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202402_bil_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202402_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202402_bil_2_0.png" /> -11.7710<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202402_bil_2_1.png" /> -3.4413<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202402_bil_2_2.png" /> 4.8884<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202402_bil_2_3.png" /> 13.2182<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202402_bil_2_4.png" /> 21.5479<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202402_bil_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202403_bil_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202403_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202403_bil_3_0.png" /> -10.5683<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202403_bil_3_1.png" /> -1.4688<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202403_bil_3_2.png" /> 7.6308<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202403_bil_3_3.png" /> 16.7304<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202403_bil_3_4.png" /> 25.8299<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202403_bil_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202404_bil_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202404_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202404_bil_4_0.png" /> -7.4868<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202404_bil_4_1.png" /> 1.0217<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202404_bil_4_2.png" /> 9.5302<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202404_bil_4_3.png" /> 18.0386<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202404_bil_4_4.png" /> 26.5471<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202404_bil_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202405_bil_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202405_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202405_bil_5_0.png" /> -6.2934<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202405_bil_5_1.png" /> 3.2032<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202405_bil_5_2.png" /> 12.6998<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202405_bil_5_3.png" /> 22.1965<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202405_bil_5_4.png" /> 31.6931<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202405_bil_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202406_bil_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202406_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202406_bil_6_0.png" /> -1.1510<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202406_bil_6_1.png" /> 8.8517<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202406_bil_6_2.png" /> 18.8544<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202406_bil_6_3.png" /> 28.8571<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202406_bil_6_4.png" /> 38.8598<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202406_bil_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202407_bil_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202407_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202407_bil_7_0.png" /> 6.2772<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202407_bil_7_1.png" /> 15.3771<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202407_bil_7_2.png" /> 24.4771<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202407_bil_7_3.png" /> 33.5770<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202407_bil_7_4.png" /> 42.6769<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202407_bil_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202408_bil_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202408_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202408_bil_8_0.png" /> 3.5208<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202408_bil_8_1.png" /> 12.5191<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202408_bil_8_2.png" /> 21.5174<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202408_bil_8_3.png" /> 30.5157<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202408_bil_8_4.png" /> 39.5140<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202408_bil_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202409_bil_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202409_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202409_bil_9_0.png" /> 3.0215<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202409_bil_9_1.png" /> 11.2373<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202409_bil_9_2.png" /> 19.4532<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202409_bil_9_3.png" /> 27.6690<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202409_bil_9_4.png" /> 35.8849<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202409_bil_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202410_bil_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202410_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202410_bil_10_0.png" /> -1.8273<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202410_bil_10_1.png" /> 6.0522<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202410_bil_10_2.png" /> 13.9316<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202410_bil_10_3.png" /> 21.8111<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202410_bil_10_4.png" /> 29.6905<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202410_bil_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202411_bil_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202411_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202411_bil_11_0.png" /> -9.7375<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202411_bil_11_1.png" /> -0.7598<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202411_bil_11_2.png" /> 8.2179<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202411_bil_11_3.png" /> 17.1956<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202411_bil_11_4.png" /> 26.1733<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202411_bil_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_PRISM_tmean_stable_4kmM3_202412_bil_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PRISM_tmean_stable_4kmM3_202412_bil<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_12_0.png" /> -12.7758<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_12_1.png" /> -3.9078<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_12_2.png" /> 4.9603<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_12_3.png" /> 13.8284<br />\
    <img src="styles/legend/PRISM_tmean_stable_4kmM3_202412_bil_12_4.png" /> 22.6964<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRISM_tmean_stable_4kmM3_202412_bil_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var lyr_MeanTemperature2024_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mean Temperature 2024<br />\
    <img src="styles/legend/MeanTemperature2024_13_0.png" /> -4.1965<br />\
    <img src="styles/legend/MeanTemperature2024_13_1.png" /> 3.5933<br />\
    <img src="styles/legend/MeanTemperature2024_13_2.png" /> 11.3831<br />\
    <img src="styles/legend/MeanTemperature2024_13_3.png" /> 19.1729<br />\
    <img src="styles/legend/MeanTemperature2024_13_4.png" /> 26.9627<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MeanTemperature2024_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-13917257.277675, 2761026.286434, -7400426.814962, 6435460.717859]
        })
    });
var format_UNI_TOP50uscollegesanduniversitiespublic_14 = new ol.format.GeoJSON();
var features_UNI_TOP50uscollegesanduniversitiespublic_14 = format_UNI_TOP50uscollegesanduniversitiespublic_14.readFeatures(json_UNI_TOP50uscollegesanduniversitiespublic_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNI_TOP50uscollegesanduniversitiespublic_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNI_TOP50uscollegesanduniversitiespublic_14.addFeatures(features_UNI_TOP50uscollegesanduniversitiespublic_14);
cluster_UNI_TOP50uscollegesanduniversitiespublic_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UNI_TOP50uscollegesanduniversitiespublic_14
});
var lyr_UNI_TOP50uscollegesanduniversitiespublic_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UNI_TOP50uscollegesanduniversitiespublic_14, 
                style: style_UNI_TOP50uscollegesanduniversitiespublic_14,
                popuplayertitle: 'UNI_TOP50 — uscollegesanduniversitiespublic',
                interactive: true,
                title: '<img src="styles/legend/UNI_TOP50uscollegesanduniversitiespublic_14.png" /> UNI_TOP50 — uscollegesanduniversitiespublic'
            });
var format_usstateboundaries_15 = new ol.format.GeoJSON();
var features_usstateboundaries_15 = format_usstateboundaries_15.readFeatures(json_usstateboundaries_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_usstateboundaries_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usstateboundaries_15.addFeatures(features_usstateboundaries_15);
var lyr_usstateboundaries_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_usstateboundaries_15, 
                style: style_usstateboundaries_15,
                popuplayertitle: 'us-state-boundaries',
                interactive: false,
                title: '<img src="styles/legend/usstateboundaries_15.png" /> us-state-boundaries'
            });
var group_TemperaturebyMonth2024 = new ol.layer.Group({
                                layers: [lyr_PRISM_tmean_stable_4kmM3_202401_bil_1,lyr_PRISM_tmean_stable_4kmM3_202402_bil_2,lyr_PRISM_tmean_stable_4kmM3_202403_bil_3,lyr_PRISM_tmean_stable_4kmM3_202404_bil_4,lyr_PRISM_tmean_stable_4kmM3_202405_bil_5,lyr_PRISM_tmean_stable_4kmM3_202406_bil_6,lyr_PRISM_tmean_stable_4kmM3_202407_bil_7,lyr_PRISM_tmean_stable_4kmM3_202408_bil_8,lyr_PRISM_tmean_stable_4kmM3_202409_bil_9,lyr_PRISM_tmean_stable_4kmM3_202410_bil_10,lyr_PRISM_tmean_stable_4kmM3_202411_bil_11,lyr_PRISM_tmean_stable_4kmM3_202412_bil_12,],
                                fold: 'close',
                                title: 'Temperature by Month 2024'});

lyr_BingMap_0.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202401_bil_1.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202402_bil_2.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202403_bil_3.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202404_bil_4.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202405_bil_5.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202406_bil_6.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202407_bil_7.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202408_bil_8.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202409_bil_9.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202410_bil_10.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202411_bil_11.setVisible(true);lyr_PRISM_tmean_stable_4kmM3_202412_bil_12.setVisible(true);lyr_MeanTemperature2024_13.setVisible(true);lyr_UNI_TOP50uscollegesanduniversitiespublic_14.setVisible(true);lyr_usstateboundaries_15.setVisible(true);
var layersList = [lyr_BingMap_0,group_TemperaturebyMonth2024,lyr_MeanTemperature2024_13,lyr_UNI_TOP50uscollegesanduniversitiespublic_14,lyr_usstateboundaries_15];
lyr_UNI_TOP50uscollegesanduniversitiespublic_14.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'ipedsid': 'ipedsid', 'name': 'name', 'address': 'address', 'city': 'city', 'state': 'state', 'zip': 'zip', 'zip4': 'zip4', 'telephone': 'telephone', 'type': 'type', 'status': 'status', 'population': 'population', 'county': 'county', 'countyfips': 'countyfips', 'country': 'country', 'latitude': 'latitude', 'longitude': 'longitude', 'naics_code': 'naics_code', 'naics_desc': 'naics_desc', 'source': 'source', 'sourcedate': 'sourcedate', 'val_method': 'val_method', 'val_date': 'val_date', 'website': 'website', 'stfips': 'stfips', 'cofips': 'cofips', 'sector': 'sector', 'level': 'level', 'hi_offer': 'hi_offer', 'deg_grant': 'deg_grant', 'locale': 'locale', 'close_date': 'close_date', 'merge_id': 'merge_id', 'alias': 'alias', 'size_set': 'size_set', 'inst_size': 'inst_size', 'pt_enroll': 'pt_enroll', 'ft_enroll': 'ft_enroll', 'tot_enroll': 'tot_enroll', 'housing': 'housing', 'dorm_cap': 'dorm_cap', 'tot_emp': 'tot_emp', 'shelter_id': 'shelter_id', 'geo_point_2d': 'geo_point_2d', });
lyr_usstateboundaries_15.set('fieldAliases', {'geo_point_2d': 'geo_point_2d', 'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'ste_area_code': 'ste_area_code', 'ste_type': 'ste_type', 'ste_name_long': 'ste_name_long', 'ste_fp_code': 'ste_fp_code', 'ste_gnis_code': 'ste_gnis_code', });
lyr_UNI_TOP50uscollegesanduniversitiespublic_14.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'ipedsid': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'zip4': 'TextEdit', 'telephone': 'TextEdit', 'type': 'TextEdit', 'status': 'TextEdit', 'population': 'TextEdit', 'county': 'TextEdit', 'countyfips': 'TextEdit', 'country': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'naics_code': 'TextEdit', 'naics_desc': 'TextEdit', 'source': 'TextEdit', 'sourcedate': 'DateTime', 'val_method': 'TextEdit', 'val_date': 'DateTime', 'website': 'TextEdit', 'stfips': 'TextEdit', 'cofips': 'TextEdit', 'sector': 'TextEdit', 'level': 'TextEdit', 'hi_offer': 'TextEdit', 'deg_grant': 'TextEdit', 'locale': 'TextEdit', 'close_date': 'TextEdit', 'merge_id': 'TextEdit', 'alias': 'TextEdit', 'size_set': 'TextEdit', 'inst_size': 'TextEdit', 'pt_enroll': 'TextEdit', 'ft_enroll': 'TextEdit', 'tot_enroll': 'TextEdit', 'housing': 'TextEdit', 'dorm_cap': 'TextEdit', 'tot_emp': 'TextEdit', 'shelter_id': 'TextEdit', 'geo_point_2d': 'TextEdit', });
lyr_usstateboundaries_15.set('fieldImages', {'geo_point_2d': 'TextEdit', 'year': 'TextEdit', 'ste_code': 'List', 'ste_name': 'List', 'ste_area_code': 'TextEdit', 'ste_type': 'TextEdit', 'ste_name_long': 'TextEdit', 'ste_fp_code': 'TextEdit', 'ste_gnis_code': 'TextEdit', });
lyr_UNI_TOP50uscollegesanduniversitiespublic_14.set('fieldLabels', {'fid': 'header label - visible with data', 'objectid': 'hidden field', 'ipedsid': 'hidden field', 'name': 'hidden field', 'address': 'hidden field', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'zip4': 'hidden field', 'telephone': 'hidden field', 'type': 'hidden field', 'status': 'hidden field', 'population': 'hidden field', 'county': 'hidden field', 'countyfips': 'hidden field', 'country': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'naics_code': 'hidden field', 'naics_desc': 'hidden field', 'source': 'hidden field', 'sourcedate': 'hidden field', 'val_method': 'hidden field', 'val_date': 'hidden field', 'website': 'inline label - visible with data', 'stfips': 'hidden field', 'cofips': 'hidden field', 'sector': 'hidden field', 'level': 'hidden field', 'hi_offer': 'hidden field', 'deg_grant': 'hidden field', 'locale': 'hidden field', 'close_date': 'hidden field', 'merge_id': 'hidden field', 'alias': 'hidden field', 'size_set': 'hidden field', 'inst_size': 'hidden field', 'pt_enroll': 'hidden field', 'ft_enroll': 'hidden field', 'tot_enroll': 'hidden field', 'housing': 'hidden field', 'dorm_cap': 'hidden field', 'tot_emp': 'hidden field', 'shelter_id': 'hidden field', 'geo_point_2d': 'hidden field', });
lyr_usstateboundaries_15.set('fieldLabels', {'geo_point_2d': 'no label', 'year': 'no label', 'ste_code': 'no label', 'ste_name': 'no label', 'ste_area_code': 'no label', 'ste_type': 'no label', 'ste_name_long': 'no label', 'ste_fp_code': 'no label', 'ste_gnis_code': 'no label', });
lyr_usstateboundaries_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});