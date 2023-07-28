import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Product {
  name: string;
  code: string;
  minimumAmount: string;
  maximumAmount: string;
  merchantName: string;
}

export type Products = Product[];

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Products>(`reports/getProducts`, {});
  }
}
