var layer = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
var map_capites = new ga.Map({
  target: 'map_capites',
  layers: [layer],
  interactions: ol.interaction.defaults({mouseWheelZoom: false, dragPan: false}),
  view: new ol.View({
    resolution: 4,
    center: [543985, 150255]
  }),
});

// Create the KML Layer
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'http://xavieralexandre.org/fondue/routes/capites.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: false
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    }),
  })
});
map_capites.addLayer(vector);

var layer = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
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
    url: 'http://xavieralexandre.org/fondue/routes/rivaz.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: false
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    })
  })
});
map_rivaz.addLayer(vector);

var layer = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
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
    url: 'http://xavieralexandre.org/fondue/routes/riex.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: false
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    })
  })
});
map_riex.addLayer(vector);

var layer = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
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
    url: 'http://xavieralexandre.org/fondue/routes/aran.kml',
    format : new ol.format.KML({
      projection: 'EPSG:21781'
    }),
    extractStyles: false
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(255,0,0,0.8)',
      width: 6
    })
  })
});
map_aran.addLayer(vector);
