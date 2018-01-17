var rimraf = require('rimraf');
rimraf('public/files/**', function () { console.log('done'); });