# Evolve-ng5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.


	ng new <project name>


This is a customized template that uses Node to serve the app instead of the `ng` server. It utilizes Gulp to initiate to build the app using `ng` commandds and then serves the app with Node/Express. It also is modified to use Sass. Some external libraries I have built and use regularaly have been imported as well both in JavaScript and CSS. They can be removed simply by removing their import statements.


To serve the app, don't use `ng serve`, instead use:


	gulp serve


this will cause Node/Express to serve the application and the ability to write a ackend application. The ports are set according to which environment the app is released within, see the `./server.js` file for more information



What follows is the remaining standard README for an Angular 5 application, which still applies to projects forked from this template


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
