define(['knockout'], function(ko) {
  'use strict';

  var toCammelCase = function(str) {
    return str.replace(/(-)([a-z])/g, function(g, m1, m2) {
      return m2.toUpperCase();
    });
  };

  var loader = {
    getConfig: function(name, callback) {
      callback({ require: ['components', toCammelCase(name)].join('/') });
    }
  };

  ko.components.loaders.unshift(loader);
});

