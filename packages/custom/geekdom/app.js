'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Geekdom = new Module('geekdom');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Geekdom.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Geekdom.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Geekdom.menus.add({
    title: 'geekdom',
    link: 'geekdom example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Geekdom.aggregateAsset('css', 'geekdom.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Geekdom.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Geekdom.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Geekdom.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Geekdom;
});
