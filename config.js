'use strict';

module.exports = {
  buildDir: './build/',
  css: {
    src: [
      'node_modules/angular-material/angular-material.css',
      'app/src/components/**/*.css'
    ],
    filename: 'app.css',
    dest: 'build/css'
  },
  js: {
    src: [
      'app/src/**/*.js'
    ],
    filename: 'app.js',
    dest: 'build/js'
  },
  index: {
    src: 'app/index.html',
    dest: 'build/'
  },
  templates: {
    src: 'app/src/components/**/*.html',
    dest: 'build/templates'
  },
  assets: {
    src: [
      'app/assets/**/*.{svg,png}'
    ],
    dest: 'build/assets'
  },
  libs: {
    src: [
      'node_modules/lodash/lodash.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-material/angular-material.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.js'
    ],
    dest: 'build/js',
    filename: 'libs.js'
  }
};
