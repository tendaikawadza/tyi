import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter, NgxMatDateFormats, NgxMatDatetimePickerModule } from "@angular-material-components/datetime-picker";
import { SharedModule } from "src/app/shared/shared.module";
import { DataTableComponent } from "src/app/shared/ui";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxMatMomentAdapter } from "@angular-material-components/moment-adapter";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from "@angular/material-moment-adapter";
import { TransactionLogsComponent } from "./features/transaction-logs.component";


const MatModules = [
 ];

const MY_NGX_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS",
  },
  display: {
    dateInput: "DD.MM.yyyy HH:mm",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@NgModule({
  declarations: [TransactionLogsComponent],
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule, //Required for form controls
    NgxMatDatetimePickerModule, //Datetime picker module
    MatInputModule, //Required for material input
      SharedModule,
    DataTableComponent,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
  ],

  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: NgxMatMomentAdapter, //Moment adapter
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: NGX_MAT_DATE_FORMATS, useValue: MY_NGX_DATE_FORMATS },
  ],
})
export class TransactionLogsModule {}
