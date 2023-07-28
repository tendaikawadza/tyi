import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MerchantsComponent } from "./features/merchants.component";
import { DataTableComponent } from "../../shared/ui";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatNativeDateModule } from "@angular/material/core";
import { RouterModule } from "@angular/router";

const MatModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: [MerchantsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: MerchantsComponent }]),
    ReactiveFormsModule,
    ...MatModules,
    SharedModule,
    DataTableComponent,
    MatDatepickerModule,
    MatSelectModule,
  ],
})
export class MerchantsModule {}
