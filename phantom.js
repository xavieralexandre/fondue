var page = require('webpage').create();
page.open('http://localhost:5757/map.html', function() {
  window.setTimeout(function () {
    page.render('map.png');
    phantom.exit();
  }, 2000);
});
