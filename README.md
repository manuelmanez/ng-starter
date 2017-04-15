# ng-starter

> smart starter for AngularJS projects using bootstrap

> created by: Manuel Mañez Ramon -<mmanez3@gmail.com>-

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Description
ng-starter is a starter kit to develop angularJS projects. These are the main features:
* Linter javascript files
* Dynamic web server with live reload
* Precompile less
* Prepare project to production:
  * Compress images
  * Minify css
  * Uglify javascript
  * Revisioning
  * Copy fonts

## Install

1. clone or download the project from:
https://github.com/manuelmanez/ng-starter

2. Install dependencies form command line:

  ``$ npm install``   
  ``$ bower install``

3. Copy your favicon in app/images folder and rename it to favicon.png

4. Enjoy coding!

## Usage
##### General commands:
* `$ gulp dev`: Open index.html in browser with livereload. Steps:
  1. javascript linter watching js files
  2. create server
  3. precompile less watching less files


* $ `gulp dist`: Prepare project to upload in production. Steps:
  1. clean dist folder
  2. javascript linter watching js files
  3. precompile less watching less files
  4. minify css, uglify js, rename with a revision random number, copy to dist and reference links and scripts in index.html
  5. compress images and save in dist/images folder
  6. copy all fonts to dist/fonts


##### Particular commands:
* `$ gulp less-dev`: Precompile less files in development folder
* `$ gulp jshint`: Linter javascript in development folder
* `$ gulp clean`: Delete files and folders in distribution folder
* `$ gulp imagemin`: Compress images in development folder and save them in dist/images folder
* `$ gulp copyfonts`: Copy all fonts from development folder to dist/fonts folder

## Contribute

PRs accepted.

## License

MIT © 2017 Manuel Mañez Ramon
