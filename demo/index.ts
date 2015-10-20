/// <reference path="../tsd.d.ts" />
import {Component, View, bootstrap, NgClass} from 'angular2/angular2';

import {CloudFileManagerSection} from './components/cloud-file-manager-section';

@Component({
  selector: 'app'
})
@View({
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>cloud-file-manager</h1>
      <!--<p>Native Angular2 component for Select</p>
      <a class="btn btn-primary" href="https://github.com/valor-software/ng2-select">View on GitHub</a>
      <div class="row">
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-select&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-select&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>-->
    </div>
  </main>

    <cloud-file-manager-section class="col-md-12"></cloud-file-manager-section>
  </div>

  </div>
  <footer class="footer">
    <div class="container">
      <!--<p class="text-muted text-center"><a href="https://github.com/valor-software/ng2-select">ng2-select</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>.</p>-->
    </div>
  </footer>
  `,
  directives: [
    NgClass,
    CloudFileManagerSection
  ]
})
export class Demo {
}

bootstrap(Demo);
