var page1 = require('webpage').create();
page1.open('http://localhost:5757/capite.html', function() {
  window.setTimeout(function () {
    page1.render('capite.png');
        }, 1000); // Change timeout as required to allow sufficient time
  callback();
});

function callback() {
  var page2 = require('webpage').create();
  page2.open('http://localhost:5757/rivaz.html', function() {
    window.setTimeout(function () {
      page2.render('rivaz.png');
              phantom.exit();
          }, 1000); // Change timeout as required to allow sufficient time
  });
}
