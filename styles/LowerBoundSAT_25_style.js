var size = 0;
var placement = 'point';

var style_LowerBoundSAT_25 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Lower SAT");
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
    if (value >= 1200.000000 && value <= 1266.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(0,96,55,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1266.000000 && value <= 1332.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(19,134,62,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1332.000000 && value <= 1398.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(101,186,87,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1398.000000 && value <= 1464.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(213,237,151,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1464.000000 && value <= 1530.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(253,174,97,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
