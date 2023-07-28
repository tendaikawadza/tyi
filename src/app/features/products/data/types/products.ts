import { ProcessTransactions } from "../../../reports/transaction-logs/data/types";

export interface Product {
  name: string;

  code: string;

  minimumAmount: string;

  maximumAmount: string;

  imageUrl: string;

  description: string;

  categoryCode: string;

  categoryName: string;

  accountNumberName: string;

  merchantCode: string;
  merchantName: string;
  accountNumber: string;

  processTransaction: ProcessTransactions;
}

export type Products = Product[];
