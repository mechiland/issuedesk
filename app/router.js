define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Issue = require("issue");
  var Issues = require("issues");
  var _ = require("underscore");

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "welcome",
      "app": "app"
    },
    
    welcome: function() {
      require(["template!templates/welcome"], function(template) {
        var contents = template();
        $("#main").html(contents);
      });
    },

    app: function() {
      
      $.getJSON("https://api.github.com/repos/mechiland/stompc/issues", function(issues) {
        require(["template!templates/card"], function(template) {
          _.each(issues, function(iss) {
            var issue = new Issue(iss);
            var contents = template(issue.attributes);
            $("#main").append(contents);
          })
        });
      });
      // console.log("Welcome to your / route.");
    }
  });

  module.exports = Router;
});
