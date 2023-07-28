import { Component, OnInit } from "@angular/core";

import { FormBuilder } from "@angular/forms";
import { Merchant, Merchants, MerchantService } from "../data";

@Component({
  selector: "app-merchants",
  templateUrl: "./merchants.component.html",
  styles: [],
})
export class MerchantsComponent implements OnInit {
  tableData!: Merchants;
  tableColumns: Array<keyof Merchant> = ["name", "code", "status", "id"];

  constructor(private fb: FormBuilder, private merchantService: MerchantService) {}

  ngOnInit() {
    this.getMerchants();
  }

  getMerchants(): void {
    this.merchantService.getMerchants().subscribe({
      next: (data) => (this.tableData = data),
      error: (e) => console.error(e),
    });
  }
}
