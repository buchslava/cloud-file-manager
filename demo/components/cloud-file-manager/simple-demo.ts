/// <reference path="../../../tsd.d.ts" />

import {
  Component, View, EventEmitter,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle
} from 'angular2/angular2';

import {cloudFileManager} from '../../../components/index';

// webpack html imports
let template = require('./simple-demo.html');

@Component({
  selector: 'simple-demo'
})
@View({
  template: template,
  directives: [cloudFileManager, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class SimpleDemo {
}
