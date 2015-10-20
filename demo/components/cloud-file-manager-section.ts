/// <reference path="../../tsd.d.ts" />

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {tabs} from 'ng2-bootstrap/ng2-bootstrap';
import {SimpleDemo} from './cloud-file-manager/simple-demo';

@Component({
  selector: 'cloud-file-manager-section'
})
@View({
  template: `
  <section id="${name.toLowerCase()}">
    <div class="row">
      <simple-demo></simple-demo>
    </div>
  </section>
  `,
  directives: [SimpleDemo, tabs, CORE_DIRECTIVES]
})
export class CloudFileManagerSection {
}
