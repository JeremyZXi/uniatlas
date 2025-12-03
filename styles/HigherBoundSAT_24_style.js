var size = 0;
var placement = 'point';

var style_HigherBoundSAT_24 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Upper SAT");
    var labelFont = "10.4px \'Georgia\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Abbr") !== null) {
        labelText = String(feature.get("Abbr"));
    }
    if (value >= 1480.000000 && value <= 1500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(166,217,106,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1500.000000 && value <= 1520.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(253,254,190,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1520.000000 && value <= 1540.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(253,188,113,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1540.000000 && value <= 1560.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(217,99,66,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1560.000000 && value <= 1580.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(189,8,7,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
