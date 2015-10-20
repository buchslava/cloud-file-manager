export class QueueItem {
  public isUploading:boolean = false;
  public isSuccess:boolean = null;
  public isCancel:boolean = null;
  public isError:boolean = null;
  public proggress:number = 0;

  constructor(public file:any) {
  }
}
