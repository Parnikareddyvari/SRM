var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_srmbuildings_1 = new ol.format.GeoJSON();
var features_srmbuildings_1 = format_srmbuildings_1.readFeatures(json_srmbuildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmbuildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmbuildings_1.addFeatures(features_srmbuildings_1);
var lyr_srmbuildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srmbuildings_1, 
                style: style_srmbuildings_1,
                popuplayertitle: 'srm buildings',
                interactive: true,
                title: '<img src="styles/legend/srmbuildings_1.png" /> srm buildings'
            });
var format_buildingsshapefilesrm_buildings_2 = new ol.format.GeoJSON();
var features_buildingsshapefilesrm_buildings_2 = format_buildingsshapefilesrm_buildings_2.readFeatures(json_buildingsshapefilesrm_buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildingsshapefilesrm_buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildingsshapefilesrm_buildings_2.addFeatures(features_buildingsshapefilesrm_buildings_2);
var lyr_buildingsshapefilesrm_buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildingsshapefilesrm_buildings_2, 
                style: style_buildingsshapefilesrm_buildings_2,
                popuplayertitle: 'buildings shapefile — srm_buildings',
                interactive: true,
                title: '<img src="styles/legend/buildingsshapefilesrm_buildings_2.png" /> buildings shapefile — srm_buildings'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_srmbuildings_1.setVisible(true);lyr_buildingsshapefilesrm_buildings_2.setVisible(true);lyr_roads_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_srmbuildings_1,lyr_buildingsshapefilesrm_buildings_2,lyr_roads_3];
lyr_srmbuildings_1.set('fieldAliases', {'id': 'id', 'Buildings': 'Buildings', });
lyr_buildingsshapefilesrm_buildings_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Buildings': 'Buildings', });
lyr_roads_3.set('fieldAliases', {'id': 'id', 'roads': 'roads', });
lyr_srmbuildings_1.set('fieldImages', {'id': '', 'Buildings': '', });
lyr_buildingsshapefilesrm_buildings_2.set('fieldImages', {'fid': '', 'id': '', 'Buildings': '', });
lyr_roads_3.set('fieldImages', {'id': '', 'roads': '', });
lyr_srmbuildings_1.set('fieldLabels', {'id': 'no label', 'Buildings': 'no label', });
lyr_buildingsshapefilesrm_buildings_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Buildings': 'no label', });
lyr_roads_3.set('fieldLabels', {'id': 'no label', 'roads': 'no label', });
lyr_roads_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});