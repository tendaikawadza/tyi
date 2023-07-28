import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { TransactionLogsService, Transactions } from "../data";
import { ReportsService } from "../../reports.service";
import { ProcessTransactions } from "../data/types/transactions";
import * as moment from "moment";
import { ReplaySubject, takeUntil } from "rxjs";
import { utc } from "moment/moment";
import { formatDate } from "@angular/common";
import { Merchants, MerchantService } from "../../../merchants/data";
import { Products, ProductService } from "../../../products/data";


@Component({
  selector: "app-transaction-logs",
  templateUrl: "./transaction-logs.component.html",
  styles: [],
})

export class TransactionLogsComponent implements OnInit {
  startDateMax = utc().subtract(1, "hour").local();
  endDateMin = this.startDateMax;
  endDateMax = utc().local();

  startDate!: string;
  endDate!: string;

  totalElements = 0;
  pageNumber = 0;
  tableLoading!: boolean;
  tableData!: Transactions;
  tableColumns: Array<keyof ProcessTransactions> = [
    "dateCreated",
    "reference",
    "transactionType",
    "amount",
    "merchantName",
    "status",
    "currencyCode",
    "utilityAccount",
    "mobileNumber",
    "narrative",
    "product",
    /*"paymentAccount",
    "paymentMethod",
    "paymentReference",
    "gatewayReference",*/
  ];

  @Output() clicked = new EventEmitter<ProcessTransactions>();
  selectedDate?: moment.Moment = moment(new Date());
  status = [
    "ALL",
    "COMPLETED",
    "FAILED",
    "DRAFT",
    "PENDING_PAYMENT",
    "FAILED_VALIDATION",
    "CREDIT_RESPONSE",
  ];
  merchants!: Merchants;

  products!: Products;
  currency = ["ALL", "USD", "ZWL"];

  form = this.fb.group({
    startDate: new Date(),
    endDate: new Date(),
    merchant: "",
    product: "",
    status: "",
    currencyCode: "",
  });

  protected readonly onsubmit = onsubmit;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
   private fb: FormBuilder,
    private reportService: ReportsService,
    private txnService: TransactionLogsService,
    private merchantService: MerchantService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.getTransactions();
    this.search(0, 10);

    this.merchantService.getMerchants().subscribe({
      next: (merchants) => {
        this.merchants = merchants;
        this.form.patchValue({ merchant: merchants[0].code });
      },
    });

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.form.patchValue({ product: products[0].code });
      },
    });
  }

  getTransactions() {
    this.txnService.getTransactions().subscribe({
      next: (data) => (this.tableData = data),
      error: (e) => console.error(e),
    });
  }

  search(pageNumber: number, pageSize: number) {
    if (this.form.valid) {
      this.tableLoading = true;
      this.startDate = formatDate(
        String(this.form.value.startDate),
        "yyyy-MM-dd HH:mm:ss",
        "en-GB",
      );
      this.endDate = formatDate(String(this.form.value.endDate), "yyyy-MM-dd HH:mm:ss", "en-GB");

      const status = String(this.form.value.status);

      this.txnService
        .getTransactionsByMerchantProductStatusCurrencyCodeAndTimeInterval(
          String(this.form.value.merchant),
          String(this.form.value.product),
          status === "ALL" ? "" : status,
          String(this.form.value.currencyCode),
          this.startDate,
          this.endDate,
          pageNumber,
          pageSize,
        )
        .pipe(takeUntil(this.destroyed$))
        .subscribe((data) => {
          this.totalElements = data.totalElements;
          this.pageNumber = data.number;
          this.tableLoading = false;
          this.tableData = data.content;
        });
    }
  }

  download() {
    let filename = this.downloadFilename(this.startDate, this.endDate);
  }

  onSubmit(pageNumber: number, pageSize: number) {
    if (this.form.valid) {
      this.search(this.pageNumber, pageSize);
    } else console.log("Form is invalid");
  }

  private downloadFilename(startDate: string, endDate: string): string {
    startDate = startDate.split(" ")[0].split("-").join("");
    endDate = endDate.split(" ")[0].split("-").join("");
    return `messages-summary-report-${startDate}-to-${endDate}.csv`;
  }
}
