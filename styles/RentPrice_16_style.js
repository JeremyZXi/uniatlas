var size = 0;
var placement = 'point';

var style_RentPrice_16 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("1_rent_50_0");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 424.000000 && value <= 800.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(43,118,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 800.000000 && value <= 1200.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(97,164,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1200.000000 && value <= 1400.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(144,186,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1400.000000 && value <= 1800.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(191,208,184,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1800.000000 && value <= 2000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(238,230,170,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2000.000000 && value <= 2400.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(252,230,101,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2400.000000 && value <= 2800.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(255,209,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2800.000000 && value <= 3310.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.2784313725490196)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(255,174,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
