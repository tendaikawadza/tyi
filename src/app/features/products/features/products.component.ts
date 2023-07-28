import { Component, OnInit } from "@angular/core";
import { Product } from "../data/types/products";
import { Products, ProductService } from "../data";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styles: [],
})
export class ProductsComponent implements OnInit {
  tableData!: Products;
  tableColumns: Array<keyof Product> = [
    "name",
    "code",
    "minimumAmount",
    "maximumAmount",
    "merchantName",
  ];

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => (this.tableData = data),
      error: (e) => console.error(e),
    });
  }
}
