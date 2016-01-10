var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map_capites = new ga.Map({
  target: 'map_capites',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  controls: ol.control.defaults({zoom:false, attribution: true, attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })}),
  view: new ol.View({
    resolution: 4,
    center: [543985, 150255]
  }),
});

// Create the KML Layer
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
map_capites.addLayer(vector);

var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map_rivaz = new ga.Map({
  target: 'map_rivaz',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 4,
    center: [549487.50, 147570]
  }),
});

// Create the KML Layer
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
map_rivaz.addLayer(vector);

var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map_riex = new ga.Map({
  target: 'map_riex',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 4,
    center: [546285, 149315]
  }),
});

// Create the KML Layer
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
map_riex.addLayer(vector);

var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map_aran = new ga.Map({
  target: 'map_aran',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 4,
    center: [544090, 149717.50]
  }),
});

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://www.duvindufromageetdupain.ch/routes/aran.kml',
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
map_aran.addLayer(vector);

var layer = ga.layer.create('ch.swisstopo.pixelkarte-grau');
var map_aran = new ga.Map({
  target: 'map_chatelard',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 4,
    center: [543399, 150328]
  }),
});

// Create the KML Layer
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
map_chatelard.addLayer(vector);
