var wms_layers = [];

var format_syr_admin2_0 = new ol.format.GeoJSON();
var features_syr_admin2_0 = format_syr_admin2_0.readFeatures(json_syr_admin2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_syr_admin2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_syr_admin2_0.addFeatures(features_syr_admin2_0);
var lyr_syr_admin2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_syr_admin2_0, 
                style: style_syr_admin2_0,
                popuplayertitle: 'syr_admin2',
                interactive: true,
                title: '<img src="styles/legend/syr_admin2_0.png" /> syr_admin2'
            });

lyr_syr_admin2_0.setVisible(true);
var layersList = [lyr_syr_admin2_0];
lyr_syr_admin2_0.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_syr_admin2_0.set('fieldImages', {'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm2_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_syr_admin2_0.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'inline label - always visible', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'inline label - always visible', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_syr_admin2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});