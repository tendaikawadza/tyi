import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UploadBatchService } from "../upload-batch.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Papa } from "ngx-papaparse";
import { FileInput } from "ngx-material-file-input";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as XLSX from 'xlsx';
import { MatDialog } from "@angular/material/dialog";
import { BulkResolveDetailComponent } from "../../bulk-resolve-detail/feature/bulk-resolve-detail.component";
import { MenuItem, MessageService } from "primeng/api";

@Component({
  selector: "app-upload-batch",
  styleUrls: ['upload-batch.component.css'],
  templateUrl: "./upload-batch.component.html",
  encapsulation:ViewEncapsulation.Emulated

})
export class UploadBatchComponent implements OnInit {
  constructor(
    private uploadBatchService: UploadBatchService,
    private parser: Papa,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    public messageService: MessageService

  ) { }
  activeIndex: number = 0;
  items: MenuItem[] | any;
  refs: string[] = [];
  public currentPage = 0;
  form!: FormGroup
  public tableData: any;
  public tableTitle: any;
  public customPagination = 1;
  public recordsPerPage = 10;
  public tableRecords = [];
  public pageStartCount = 0;
  public pageEndCount = 10;
  public totalPageCount = 0;
  date: any;
  data:any []=[];
  displayBasic = false;
  displayBasic2 = false;
  fromdate: Date | undefined;
  todate: Date | undefined;
  ngOnInit() {
    this.items = [
      {
          label: 'Bulk Resolution Upload',
          command: (event: any) => this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label})
      },
      {
          label: 'Bulk Resolution List',
          command: (event: any) => this.messageService.add({severity:'info', summary:'Second Step', detail: event.item.label})
      }
  ];
    this.date=new Date();
    this.form = this.fb.group({
      status: [],
      narrative: "",
      references: [[""], Validators.required],
      file: "",
    });

  }
  findDate(){
    console.log('test')
    console.log(this.fromdate);
  }
 
  onActiveIndexChange(event: number) {
    this.activeIndex = event;
}
  public onFileInputChange(e: any) {
    console.log(e.target.files[0]);
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(<unknown>e.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      console.log(data); // Data will be logged in array format containing objects
      this.form.controls['references'].setValue(data);
      this.tableData = data;
      this.tableTitle = Object.keys(this.tableData[0]);
      this.tableRecords = this.tableData.slice(
        this.pageStartCount,
        this.pageEndCount
      );
      this.totalPageCount = this.tableData.length / this.recordsPerPage;
    };
  }
next(){
  this.activeIndex++;
}
cancel(){
  this.displayBasic=false;
}
  onSubmit() {
    this.displayBasic = true;
    console.log(this.form);
    if (this.form.valid) {
      const formval:any=this.form.value;
      formval['date']=this.date;
this.data.push(formval);

      const references = this.form.value.references as string[];
      const status = this.form.value.status as string;
      this.uploadBatchService.setUploadInfo(this.form.value);


      // this.uploadBatchService.sendFormData({}).subscribe({
      //   next: (data) => {},
      // });
      //  const dialogRef = this.dialog.open(BulkResolveDetailComponent);



      // this.router.navigate(["/bulk-resolutions/batch-details"]);
      //   console.log(status, references);
    }
  }

  onRadioChange(event: any) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    this.uploadBatchService
      .bulkResolveCompleted(
        selectedValue,
        String(this.form.value.narrative),
        this.form.value.references as string[],
      )
      .subscribe((response) => {
        // Handle the response
        console.log(response);
      });
  }
}
