define(function(require, exports, module) {
  "use strict";
  
  var Backbone = require("backbone");
  var Issue = require("issue");

  var Issues = Backbone.Collection.extend({
    model: Issue
  });
  
  module.exports = Issues;
});
