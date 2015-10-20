import {
  Component, View, OnInit, OnDestroy, OnChanges,
  EventEmitter, ElementRef, Renderer,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';


@Component({
  selector: 'cloud-file-manager'
})
@View({
  template: `
<div class="container">

    <div class="row">

        <div class="col-md-3">

            <input type="file" (change)="filesSelected()" multiple webkitdirectory="" directory="" /> <br />

             <button type="button" class="btn btn-success btn-s" (click)="uploadAll()">
                 <span class="glyphicon glyphicon-upload"></span> Upload all
             </button>
             <!--<button type="button" class="btn btn-warning btn-s"
                     (click)="uploader.cancelAll()" [disabled]="!uploader.isUploading">
                 <span class="glyphicon glyphicon-ban-circle"></span> Cancel all
             </button>-->
             <button type="button" class="btn btn-danger btn-s" (click)="clearQueue()">
                 <span class="glyphicon glyphicon-trash"></span> Remove all
             </button>
        </div>

    </div>

            <table class="table">
                <thead>
                <tr>
                    <th width="50%">Name</th>
                    <th>Size</th>
                    <th>Progress</th>
                    <!--<th>Status</th>
                    <th>Actions</th>-->
                </tr>
                </thead>
                <tbody>
                <tr *ng-for="#item of queue">
                    <td><strong>{{ item.webkitRelativePath }}</strong></td>
                    <td nowrap>{{ item.size/1024/1024 | number:'.2' }} MB</td>
                    <td>
                        <div class="progress" style="margin-bottom: 0;">
                            <div class="progress-bar" role="progressbar" [ng-style]="{ 'width': item.progress + '%' }"></div>
                        </div>
                    </td>
                    <!--<td class="text-center">
                        <span *ng-if="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>
                        <span *ng-if="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>
                        <span *ng-if="item.isError"><i class="glyphicon glyphicon-remove"></i></span>
                    </td>
                    <td nowrap>
                        <button type="button" class="btn btn-success btn-xs"
                                (click)="item.upload()" [disabled]="item.isReady || item.isUploading || item.isSuccess">
                            <span class="glyphicon glyphicon-upload"></span> Upload
                        </button>
                        <button type="button" class="btn btn-warning btn-xs"
                                (click)="item.cancel()" [disabled]="!item.isUploading">
                            <span class="glyphicon glyphicon-ban-circle"></span> Cancel
                        </button>
                        <button type="button" class="btn btn-danger btn-xs"
                                (click)="item.remove()">
                            <span class="glyphicon glyphicon-trash"></span> Remove
                        </button>
                    </td>-->
                </tr>
                </tbody>
            </table>


</div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class CloudFileManager {
  private queue:Array<any> = [];
  constructor(private element:ElementRef) {
  }

  private filesSelected() {
    this.queue = [];
    let fileEl:any = this.element.nativeElement.querySelector('input[type="file"]');
    if (fileEl.files) {
      for (let file of fileEl.files) {
        this.queue.push(file);
        // console.log(file.webkitRelativePath);
      }
    }
    console.log(this.queue);
  }

  private uploadAll() {
  }

  private clearQueue() {
    this.queue = [];
  }
}

export const cloudFileManager:Array<any> = [CloudFileManager];
