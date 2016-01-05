/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';

import {version} from './second';

@Component({
  selector: 'socially'
})
@View({
  template: "<p>Hello World!</p>"
})
class App {}

bootstrap(App);