import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProcessTransactions } from "../../../reports/transaction-logs/data";
import { Page } from "../../../../data/types";
import { List } from "postcss/lib/list";

@Injectable({
  providedIn: "root",
})
export class UploadBatchService {
  serverUrl: string = "csv";
filesInfo:any;
  constructor(private httpClient: HttpClient) {}

  /* public sendFormData(formData: any) {
     return this.httpClient.post<any>(this.serverUrl, formData, {
       reportProgress: true,
       observe: "events",
     });
   }*/

   setUploadInfo(file:any){
this.filesInfo=file;
   }
   getUploadInfo(){
return this.filesInfo;
   }

  bulkResolveCompleted(status: string, narrative: string, references: string[]) {
    console.log("fetch");
    return this.httpClient.post<Page<ProcessTransactions>>(
      `reports/batch-manual-resolve-completed`,
      {
        status,
        narrative,
        references,
      },
    );
  }

  bulkResolveFailed(status: string, narrative: string, references: List) {
    console.log("fetch");
    return this.httpClient.post<Page<ProcessTransactions>>(`reports/batch-manual-resolve-failed`, {
      status,
      narrative,
      references,
    });
  }
}
