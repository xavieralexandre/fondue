var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map = new ga.Map({
  target: 'map',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  controls: ol.control.defaults({zoom:false, attribution: true, attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
  collapsible: false
})}),
  view: new ol.View({
    resolution: 9,
    center: [546300, 149000]
  }),
});

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://www.duvindufromageetdupain.ch/routes/aran.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
});
map.addLayer(vector);

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://www.duvindufromageetdupain.ch/routes/capites.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    }),
  })
});
map.addLayer(vector);

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://www.duvindufromageetdupain.ch/routes/rivaz.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    })
  })
});
map.addLayer(vector);

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://www.duvindufromageetdupain.ch/routes/riex.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    })
  })
});
map.addLayer(vector);

var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://www.duvindufromageetdupain.ch/routes/chatelard.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: true
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    })
  })
});
map.addLayer(vector);
