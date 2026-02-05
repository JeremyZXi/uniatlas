var size = 0;
var placement = 'point';

var style_UndergraduateSize_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Undergraduate Size");
    var labelFont = "10.4px \'Georgia\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 921.000000 && value <= 6000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6000.000000 && value <= 10000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10000.000000 && value <= 16000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16000.000000 && value <= 32000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 32000.000000 && value <= 48000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.6 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 48000.000000 && value <= 60710.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
