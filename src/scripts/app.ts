/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import "es6-shim";
import "reflect-metadata";
import "rxjs/Rx";
import "zone.js/dist/zone";

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
  selector: `hello-world`,
  template: `
    <h1>Hello World!</h1>
  `
})
class HelloWorldComponent {
}

@Component({
  selector: `my-app`,
  template: `
    <hello-world></hello-world>
  `,
  directives: [HelloWorldComponent]
})
class MyAppComponent {
}

bootstrap(MyAppComponent);