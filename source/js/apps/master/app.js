/**
 * apps/master/app
 */

define(['apps/master/app', 'backbone', 'apps/models/m_project'], function(require, Backbone, Project) {

  'use strict';

  //var settings = require('settings'),
    var App = {},

      bootBackboneRouter = function () {
        var AppRouter = Backbone.Router.extend({
          initialize: function () {
            this.projects = new Project.Collection();
          },
          routes: {
            '': 'main'
          },

          main: function () {
            var that = this;
            var view = new ProjectsView({ collection: that.projects });
            projects.fetch({
              success: function () {

              }
            });
          }
        });
      };


  // Mediaqueries
  // NOTE: make sure to sync with scss variables (/source/css/app/_modules/_variables.scss)
  App.mq = {
    small:  '38em', // *16 = 608
    medium: '57em', // *16 = 912
    large:  '82em'  // *16 = 1312
  };


  /**
   * start()
   *
   * Gets the application running
   */
  App.start = function() {
    bootBackboneRouter();
    $('main').append('<p>App Started</p>');
    console.log('App Started');
  };

  return App;

});
