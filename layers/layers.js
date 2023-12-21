var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sungai_1 = new ol.format.GeoJSON();
var features_sungai_1 = format_sungai_1.readFeatures(json_sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_1.addFeatures(features_sungai_1);
var lyr_sungai_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_1, 
                style: style_sungai_1,
                interactive: true,
                title: '<img src="styles/legend/sungai_1.png" /> sungai'
            });
var format_pemukiman_2 = new ol.format.GeoJSON();
var features_pemukiman_2 = format_pemukiman_2.readFeatures(json_pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukiman_2.addFeatures(features_pemukiman_2);
var lyr_pemukiman_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukiman_2, 
                style: style_pemukiman_2,
                interactive: true,
                title: '<img src="styles/legend/pemukiman_2.png" /> pemukiman'
            });
var format_nonagrisemakbelukar_3 = new ol.format.GeoJSON();
var features_nonagrisemakbelukar_3 = format_nonagrisemakbelukar_3.readFeatures(json_nonagrisemakbelukar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nonagrisemakbelukar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nonagrisemakbelukar_3.addFeatures(features_nonagrisemakbelukar_3);
var lyr_nonagrisemakbelukar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nonagrisemakbelukar_3, 
                style: style_nonagrisemakbelukar_3,
                interactive: true,
                title: '<img src="styles/legend/nonagrisemakbelukar_3.png" /> nonagrisemakbelukar'
            });
var format_nonagrialang_4 = new ol.format.GeoJSON();
var features_nonagrialang_4 = format_nonagrialang_4.readFeatures(json_nonagrialang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nonagrialang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nonagrialang_4.addFeatures(features_nonagrialang_4);
var lyr_nonagrialang_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nonagrialang_4, 
                style: style_nonagrialang_4,
                interactive: true,
                title: '<img src="styles/legend/nonagrialang_4.png" /> nonagrialang'
            });
var format_Kecamatan_Anggana_5 = new ol.format.GeoJSON();
var features_Kecamatan_Anggana_5 = format_Kecamatan_Anggana_5.readFeatures(json_Kecamatan_Anggana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_Anggana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_Anggana_5.addFeatures(features_Kecamatan_Anggana_5);
var lyr_Kecamatan_Anggana_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_Anggana_5, 
                style: style_Kecamatan_Anggana_5,
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_Anggana_5.png" /> Kecamatan_Anggana'
            });
var format_agrikebun_6 = new ol.format.GeoJSON();
var features_agrikebun_6 = format_agrikebun_6.readFeatures(json_agrikebun_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agrikebun_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agrikebun_6.addFeatures(features_agrikebun_6);
var lyr_agrikebun_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agrikebun_6, 
                style: style_agrikebun_6,
                interactive: true,
                title: '<img src="styles/legend/agrikebun_6.png" /> agrikebun'
            });
var format_agrisawah_7 = new ol.format.GeoJSON();
var features_agrisawah_7 = format_agrisawah_7.readFeatures(json_agrisawah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agrisawah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agrisawah_7.addFeatures(features_agrisawah_7);
var lyr_agrisawah_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agrisawah_7, 
                style: style_agrisawah_7,
                interactive: true,
                title: '<img src="styles/legend/agrisawah_7.png" /> agrisawah'
            });
var format_agriladang_8 = new ol.format.GeoJSON();
var features_agriladang_8 = format_agriladang_8.readFeatures(json_agriladang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agriladang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agriladang_8.addFeatures(features_agriladang_8);
var lyr_agriladang_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agriladang_8, 
                style: style_agriladang_8,
                interactive: true,
                title: '<img src="styles/legend/agriladang_8.png" /> agriladang'
            });
var format_danau_9 = new ol.format.GeoJSON();
var features_danau_9 = format_danau_9.readFeatures(json_danau_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danau_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danau_9.addFeatures(features_danau_9);
var lyr_danau_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danau_9, 
                style: style_danau_9,
                interactive: true,
                title: '<img src="styles/legend/danau_9.png" /> danau'
            });
var format_jalan_10 = new ol.format.GeoJSON();
var features_jalan_10 = format_jalan_10.readFeatures(json_jalan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_10.addFeatures(features_jalan_10);
var lyr_jalan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_10, 
                style: style_jalan_10,
                interactive: true,
                title: '<img src="styles/legend/jalan_10.png" /> jalan'
            });
var format_saranaibadah_11 = new ol.format.GeoJSON();
var features_saranaibadah_11 = format_saranaibadah_11.readFeatures(json_saranaibadah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saranaibadah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saranaibadah_11.addFeatures(features_saranaibadah_11);
var lyr_saranaibadah_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saranaibadah_11, 
                style: style_saranaibadah_11,
                interactive: true,
                title: '<img src="styles/legend/saranaibadah_11.png" /> saranaibadah'
            });
var format_pilarbatas_12 = new ol.format.GeoJSON();
var features_pilarbatas_12 = format_pilarbatas_12.readFeatures(json_pilarbatas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pilarbatas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pilarbatas_12.addFeatures(features_pilarbatas_12);
var lyr_pilarbatas_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pilarbatas_12, 
                style: style_pilarbatas_12,
                interactive: true,
                title: '<img src="styles/legend/pilarbatas_12.png" /> pilarbatas'
            });
var format_puskesmas_13 = new ol.format.GeoJSON();
var features_puskesmas_13 = format_puskesmas_13.readFeatures(json_puskesmas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puskesmas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puskesmas_13.addFeatures(features_puskesmas_13);
var lyr_puskesmas_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puskesmas_13, 
                style: style_puskesmas_13,
                interactive: true,
                title: '<img src="styles/legend/puskesmas_13.png" /> puskesmas'
            });
var format_pendidikan_14 = new ol.format.GeoJSON();
var features_pendidikan_14 = format_pendidikan_14.readFeatures(json_pendidikan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_14.addFeatures(features_pendidikan_14);
var lyr_pendidikan_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pendidikan_14, 
                style: style_pendidikan_14,
                interactive: true,
                title: '<img src="styles/legend/pendidikan_14.png" /> pendidikan'
            });
var format_pemerintahan_15 = new ol.format.GeoJSON();
var features_pemerintahan_15 = format_pemerintahan_15.readFeatures(json_pemerintahan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintahan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_15.addFeatures(features_pemerintahan_15);
var lyr_pemerintahan_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemerintahan_15, 
                style: style_pemerintahan_15,
                interactive: true,
                title: '<img src="styles/legend/pemerintahan_15.png" /> pemerintahan'
            });
var format_pelabuhan_16 = new ol.format.GeoJSON();
var features_pelabuhan_16 = format_pelabuhan_16.readFeatures(json_pelabuhan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pelabuhan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pelabuhan_16.addFeatures(features_pelabuhan_16);
var lyr_pelabuhan_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pelabuhan_16, 
                style: style_pelabuhan_16,
                interactive: true,
                title: '<img src="styles/legend/pelabuhan_16.png" /> pelabuhan'
            });
var format_olahminyak_17 = new ol.format.GeoJSON();
var features_olahminyak_17 = format_olahminyak_17.readFeatures(json_olahminyak_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_olahminyak_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_olahminyak_17.addFeatures(features_olahminyak_17);
var lyr_olahminyak_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_olahminyak_17, 
                style: style_olahminyak_17,
                interactive: true,
                title: '<img src="styles/legend/olahminyak_17.png" /> olahminyak'
            });
var format_niaga_18 = new ol.format.GeoJSON();
var features_niaga_18 = format_niaga_18.readFeatures(json_niaga_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_niaga_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_niaga_18.addFeatures(features_niaga_18);
var lyr_niaga_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_niaga_18, 
                style: style_niaga_18,
                interactive: true,
                title: '<img src="styles/legend/niaga_18.png" /> niaga'
            });
var format_makam_19 = new ol.format.GeoJSON();
var features_makam_19 = format_makam_19.readFeatures(json_makam_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_makam_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_makam_19.addFeatures(features_makam_19);
var lyr_makam_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_makam_19, 
                style: style_makam_19,
                interactive: true,
                title: '<img src="styles/legend/makam_19.png" /> makam'
            });
var format_layanankesehatan_20 = new ol.format.GeoJSON();
var features_layanankesehatan_20 = format_layanankesehatan_20.readFeatures(json_layanankesehatan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layanankesehatan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layanankesehatan_20.addFeatures(features_layanankesehatan_20);
var lyr_layanankesehatan_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layanankesehatan_20, 
                style: style_layanankesehatan_20,
                interactive: true,
                title: '<img src="styles/legend/layanankesehatan_20.png" /> layanankesehatan'
            });
var format_kntrpln_21 = new ol.format.GeoJSON();
var features_kntrpln_21 = format_kntrpln_21.readFeatures(json_kntrpln_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kntrpln_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kntrpln_21.addFeatures(features_kntrpln_21);
var lyr_kntrpln_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kntrpln_21, 
                style: style_kntrpln_21,
                interactive: true,
                title: '<img src="styles/legend/kntrpln_21.png" /> kntrpln'
            });
var format_kntrairminum_22 = new ol.format.GeoJSON();
var features_kntrairminum_22 = format_kntrairminum_22.readFeatures(json_kntrairminum_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kntrairminum_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kntrairminum_22.addFeatures(features_kntrairminum_22);
var lyr_kntrairminum_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kntrairminum_22, 
                style: style_kntrairminum_22,
                interactive: true,
                title: '<img src="styles/legend/kntrairminum_22.png" /> kntrairminum'
            });
var format_jembatan_23 = new ol.format.GeoJSON();
var features_jembatan_23 = format_jembatan_23.readFeatures(json_jembatan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jembatan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jembatan_23.addFeatures(features_jembatan_23);
var lyr_jembatan_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jembatan_23, 
                style: style_jembatan_23,
                interactive: true,
                title: '<img src="styles/legend/jembatan_23.png" /> jembatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_sungai_1.setVisible(true);lyr_pemukiman_2.setVisible(true);lyr_nonagrisemakbelukar_3.setVisible(true);lyr_nonagrialang_4.setVisible(true);lyr_Kecamatan_Anggana_5.setVisible(true);lyr_agrikebun_6.setVisible(true);lyr_agrisawah_7.setVisible(true);lyr_agriladang_8.setVisible(true);lyr_danau_9.setVisible(true);lyr_jalan_10.setVisible(true);lyr_saranaibadah_11.setVisible(true);lyr_pilarbatas_12.setVisible(true);lyr_puskesmas_13.setVisible(true);lyr_pendidikan_14.setVisible(true);lyr_pemerintahan_15.setVisible(true);lyr_pelabuhan_16.setVisible(true);lyr_olahminyak_17.setVisible(true);lyr_niaga_18.setVisible(true);lyr_makam_19.setVisible(true);lyr_layanankesehatan_20.setVisible(true);lyr_kntrpln_21.setVisible(true);lyr_kntrairminum_22.setVisible(true);lyr_jembatan_23.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sungai_1,lyr_pemukiman_2,lyr_nonagrisemakbelukar_3,lyr_nonagrialang_4,lyr_Kecamatan_Anggana_5,lyr_agrikebun_6,lyr_agrisawah_7,lyr_agriladang_8,lyr_danau_9,lyr_jalan_10,lyr_saranaibadah_11,lyr_pilarbatas_12,lyr_puskesmas_13,lyr_pendidikan_14,lyr_pemerintahan_15,lyr_pelabuhan_16,lyr_olahminyak_17,lyr_niaga_18,lyr_makam_19,lyr_layanankesehatan_20,lyr_kntrpln_21,lyr_kntrairminum_22,lyr_jembatan_23];
lyr_sungai_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_pemukiman_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_nonagrisemakbelukar_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_nonagrialang_4.set('fieldAliases', {'AQDATE': 'AQDATE', 'FCODE': 'FCODE', 'KLSRMP': 'KLSRMP', 'KODATC': 'KODATC', 'NAMOBJ': 'NAMOBJ', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'JNSPDG': 'JNSPDG', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kecamatan_Anggana_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_agrikebun_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_agrisawah_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_agriladang_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_danau_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_saranaibadah_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_pilarbatas_12.set('fieldAliases', {'IDENTF': 'IDENTF', 'NAMOBJ': 'NAMOBJ', 'METUKR': 'METUKR', 'AKURAH': 'AKURAH', 'KARKTR': 'KARKTR', 'MONUMN': 'MONUMN', 'TIPHPT': 'TIPHPT', 'LOKASI': 'LOKASI', 'FCODE': 'FCODE', 'AKURAV': 'AKURAV', 'KLSPLR': 'KLSPLR', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'KLBADM': 'KLBADM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_puskesmas_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_pendidikan_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_pemerintahan_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_pelabuhan_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_olahminyak_17.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_niaga_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FUNGSI': 'FUNGSI', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FGSKOD': 'FGSKOD', 'JNSPSR': 'JNSPSR', 'JNSTKO': 'JNSTKO', 'JNSKTR': 'JNSKTR', 'PRSTRP': 'PRSTRP', });
lyr_makam_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPMKM': 'TPMKM', });
lyr_layanankesehatan_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_kntrpln_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_kntrairminum_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_jembatan_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_sungai_1.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_pemukiman_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_nonagrisemakbelukar_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_nonagrialang_4.set('fieldImages', {'AQDATE': '', 'FCODE': '', 'KLSRMP': '', 'KODATC': '', 'NAMOBJ': '', 'PUDATE': '', 'REMARK': '', 'SRS_ID': '', 'JNSPDG': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Kecamatan_Anggana_5.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_agrikebun_6.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_agrisawah_7.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_agriladang_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_danau_9.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_jalan_10.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_saranaibadah_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_pilarbatas_12.set('fieldImages', {'IDENTF': '', 'NAMOBJ': '', 'METUKR': '', 'AKURAH': '', 'KARKTR': '', 'MONUMN': '', 'TIPHPT': '', 'LOKASI': '', 'FCODE': '', 'AKURAV': '', 'KLSPLR': '', 'ELEVAS': '', 'REMARK': '', 'KLBADM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_puskesmas_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'TextEdit', 'KMPPKM_': 'TextEdit', 'JPLPKM_': 'TextEdit', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'TextEdit', 'PKMLMT_': 'TextEdit', });
lyr_pendidikan_14.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_pemerintahan_15.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_pelabuhan_16.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ADMPEL': '', 'JNSPEL': '', 'FGSPEL': '', 'PJAPEL': '', 'LAMPEL': '', 'STUPEL': '', 'KONKON': '', 'LUAS': '', 'KMXPEL': '', 'KMNPEL': '', 'STPPEL': '', 'SRPPEL': '', 'ALJPEL': '', 'REMARK': '', 'KLSPEL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KODPEL': '', });
lyr_olahminyak_17.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_niaga_18.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FUNGSI': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FGSKOD': '', 'JNSPSR': '', 'JNSTKO': '', 'JNSKTR': '', 'PRSTRP': '', });
lyr_makam_19.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPMKM': '', });
lyr_layanankesehatan_20.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_kntrpln_21.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_kntrairminum_22.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_jembatan_23.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_sungai_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_pemukiman_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_nonagrisemakbelukar_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_nonagrialang_4.set('fieldLabels', {'AQDATE': 'no label', 'FCODE': 'no label', 'KLSRMP': 'no label', 'KODATC': 'no label', 'NAMOBJ': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'JNSPDG': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Kecamatan_Anggana_5.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_agrikebun_6.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_agrisawah_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_agriladang_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_danau_9.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_10.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_saranaibadah_11.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_pilarbatas_12.set('fieldLabels', {'IDENTF': 'no label', 'NAMOBJ': 'no label', 'METUKR': 'no label', 'AKURAH': 'no label', 'KARKTR': 'no label', 'MONUMN': 'no label', 'TIPHPT': 'no label', 'LOKASI': 'no label', 'FCODE': 'no label', 'AKURAV': 'no label', 'KLSPLR': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'KLBADM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_puskesmas_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_pendidikan_14.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_pemerintahan_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_pelabuhan_16.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_olahminyak_17.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_niaga_18.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FUNGSI': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FGSKOD': 'no label', 'JNSPSR': 'no label', 'JNSTKO': 'no label', 'JNSKTR': 'no label', 'PRSTRP': 'no label', });
lyr_makam_19.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPMKM': 'no label', });
lyr_layanankesehatan_20.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_kntrpln_21.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_kntrairminum_22.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_jembatan_23.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_jembatan_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});