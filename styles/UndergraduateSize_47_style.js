var size = 0;
var placement = 'point';

var style_UndergraduateSize_47 = function(feature, resolution){
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
    if (feature.get("Abbr") !== null) {
        labelText = String(feature.get("Abbr"));
    }
    if (value >= 921.000000 && value <= 6657.750000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6657.750000 && value <= 12394.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.71428 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12394.500000 && value <= 18131.250000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.42858 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 18131.250000 && value <= 23868.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.14286 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23868.000000 && value <= 29604.750000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.85714 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 29604.750000 && value <= 35341.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.57142 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 35341.500000 && value <= 41078.250000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 14.28572 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(25,25,25,0.29411764705882354)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(229,229,229,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 41078.250000 && value <= 46815.000000) {
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
