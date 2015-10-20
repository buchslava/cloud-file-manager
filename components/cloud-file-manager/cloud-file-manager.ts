import {
  Component, View, OnInit, OnDestroy, OnChanges,
  EventEmitter, ElementRef, Renderer,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';


@Component({
  selector: 'cloud-file-manager',
  host: {
    '(drop)': 'onDrop($event)',
    '(dragover)': 'onDragOver($event)',
    '(dragleave)': 'onDragLeave($event)'
  }
})
@View({
  template: `
  foo
  `,
  directives: [CORE_DIRECTIVES]
})
export class CloudFileManager {
  constructor(private element:ElementRef) {
  }

  onDrop(event:any) {
    console.log(event);
  }

  onDragOver(event:any) {
    console.log(event);
  }

  onDragLeave(event:any) {
    console.log(event);
  }
}

export const cloudFileManager:Array<any> = [CloudFileManager];
