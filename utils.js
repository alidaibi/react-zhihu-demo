var path = require('path');
var glob = require('glob');

exports.getMultiEntry = function (globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry)) 
    console.log(basename);
    // 过滤router.js
    if (basename == 'router') {
      return;
    };
    tmp = entry.split('/').splice(-3);
    var pathsrc = tmp[1];
    pathname = pathsrc + '/' + basename; // 正确输出js和html的路径
    entries[pathname] = entry;
    console.log(pathname+'-----------'+entry);   
  });
  
  return entries;
}