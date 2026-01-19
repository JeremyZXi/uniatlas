var size = 0;
var placement = 'point';

var style_University_Names_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Georgia\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#bebebe";
    var bufferWidth = 0.8999999999999999;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Abbr") !== null) {
        labelText = String(feature.get("Abbr"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2e-06 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(119,119,119,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
