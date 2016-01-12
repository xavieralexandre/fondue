var page = require('webpage').create();
page.open('http://localhost:5757/map.html', function() {
  page.clipRect = { top: 1, left: 1, width: 800, height: 800 };

  window.setTimeout(function () {
    page.render('map_preview.png');
    phantom.exit();
  }, 2000);
});
