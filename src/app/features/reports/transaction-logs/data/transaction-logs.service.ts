import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Page } from "../../../../data/types";
import { Product } from "../../../products/data/types/products";

export interface ProcessTransactions {
  dateCreated: string;
  reference: string;
  amount: string;
  paymentAccount: string;
  gatewayReference: string;
  paymentMethod: string;
  merchantName: string;
  status: string;
  currencyCode: string;
  transactionType: string;
  email: string;
  mobileNumber: string;
  paymentReference: string;
  utilityAccount: string;
  product: Product;
}

export type Transactions = ProcessTransactions[];

@Injectable({ providedIn: "root" })
export class TransactionLogsService {
  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get<Transactions>(`reports/getAllProcessTransactions`, {});
  }

  /* getIntervalTransactions(
     merchantName: string,
     status: string,
     fromDate: string,
     toDate: string,
     pageNumber: number = 0,
     pageSize: number = 10,
   ) {
     return this.http.post<Page<ProcessTransactions>>(
       `reports/processtransaction-status-criteria-date-interval/`,
       {
         merchantName,
         status,
         fromDate,
         toDate,
         pageNumber,
         pageSize,
       },
     );
   }*/

  getTransactionsByMerchantProductStatusCurrencyCodeAndTimeInterval(
    merchantName: string,
    product: string,
    status: string,
    currencyCode: string,
    fromDate: string,
    toDate: string,
    pageNumber: number = 0,
    pageSize: number = 10,
  ) {
    console.log("fetch");
    return this.http.post<Page<ProcessTransactions>>(
      `reports/processtransaction-merchant-product-status-currency-date-interval`,
      {
        merchantName,
        product,
        status,
        currencyCode,
        fromDate,
        toDate,
        pageNumber,
        pageSize,
      },
    );
  }

  downloadMessageSummaryReport(customerId: unknown, startDate: string, endDate: string) {
    return undefined;
  }
}
