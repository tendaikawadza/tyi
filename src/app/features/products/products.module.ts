import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './features/products.component';
import { TransactionLogsComponent } from "../reports/transaction-logs/features/transaction-logs.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { DataTableComponent } from "../../shared/ui";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatNativeDateModule } from "@angular/material/core";
import { RouterModule } from '@angular/router';



const MatModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule
];




@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ProductsComponent }]),
    ReactiveFormsModule,
    ...MatModules,
    SharedModule,
    DataTableComponent,
    MatDatepickerModule,
    MatSelectModule,

  ]
})
export class ProductsModule { }
