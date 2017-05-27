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
  html: {
    src: 'app/index.html',
    dest: 'build/'
  },
  libs: {
    src: [
      'node_modules/lodash/lodash.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-material/angular-material.js'
    ],
    dest: 'build/js',
    filename: 'libs.js'
  }
};
