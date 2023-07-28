import { Component, OnInit,ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UploadBatchService } from "../../upload-batch/upload-batch.service";


@Component({
  selector: "app-bulk-resolve-detail",
  styleUrls: ['bulk-resolve-detail.component.css'],
  templateUrl: 'bulk-resolve-detail.component.html',
  encapsulation:ViewEncapsulation.Emulated
})
export class BulkResolveDetailComponent implements OnInit {
  refs: string[] = [];
date:any;
data:any;
public tableData: any;
  public tableTitle: any;
  public customPagination = 1;
  public recordsPerPage = 10;
  public tableRecords = [];
  public pageStartCount = 0;
  public pageEndCount = 10;
  public totalPageCount = 0;
  public currentPage = 0;

  constructor(private route: ActivatedRoute,private uploadSvc:UploadBatchService) {}

  ngOnInit() {
    this.date=new Date();
this.data=this.uploadSvc.getUploadInfo();
console.log(this.data.references)
this.formateTabel()
;   // this.refs = this.route.snapshot.queryParams["refs"].split(",");
  
  }
  formateTabel(){
    this.tableData = this.data?.references;
    this.tableTitle = Object.keys(this.tableData[0]);
    this.tableRecords = this.tableData.slice(
      this.pageStartCount,
      this.pageEndCount
    );
    this.totalPageCount = this.tableData.length / this.recordsPerPage;
 
  }
}
