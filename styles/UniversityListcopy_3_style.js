var size = 0;
var placement = 'point';

var style_UniversityListcopy_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Upper SAT");
    var labelFont = "13.0px \'Times New Roman\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    if (value >= 1460.000000 && value <= 1480.833333) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1480.833333 && value <= 1500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(230,240,249,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1500.000000 && value <= 1530.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(212,229,244,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1530.000000 && value <= 1530.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(194,217,238,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1530.000000 && value <= 1540.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(166,205,228,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1540.000000 && value <= 1545.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(133,188,220,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1545.000000 && value <= 1560.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(99,169,211,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1560.000000 && value <= 1570.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(70,149,200,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1570.000000 && value <= 1570.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(46,126,188,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1570.000000 && value <= 1570.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(25,103,173,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1570.000000 && value <= 1580.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(8,78,152,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1580.000000 && value <= 1580.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.34901960784313724)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
