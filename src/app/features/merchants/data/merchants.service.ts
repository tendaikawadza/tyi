import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Merchant {
  name: string;
  code: string;
  status: string;
  id: string;
}

export type Merchants = Merchant[];

@Injectable({ providedIn: "root" })
export class MerchantService {
  constructor(private http: HttpClient) {}

  getMerchants() {
    return this.http.get<Merchants>(`reports/getMerchants`, {});
  }
}
