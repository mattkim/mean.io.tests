'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Myhome = new Module('myhome');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Myhome.register(function(system, app, auth, database) {
  // Make this the homepage
  // app.set('views', __dirname + '/server/views');

  //We enable routing. By default the Package Object is passed to the routes
  Myhome.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  //Myhome.menus.add({
  //  title: 'myhome example page',
  //  link: 'myhome example page',
  //  roles: ['authenticated'],
  //  menu: 'main'
  //});
  
  Myhome.aggregateAsset('css', 'myhome.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Myhome.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Myhome.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Myhome.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Myhome;
});
