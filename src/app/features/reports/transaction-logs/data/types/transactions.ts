import { Product } from "../../../../products/data/types/products";

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
  narrative: string;
  product: Product;
}

/*
export interface TransactionsDetails {
  processTransactions: ProcessTransactions;
  product: Product;
}
*/
