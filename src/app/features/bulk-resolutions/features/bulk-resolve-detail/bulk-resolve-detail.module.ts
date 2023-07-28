import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BulkResolveDetailComponent } from "./feature/bulk-resolve-detail.component";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatGridListModule} from '@angular/material/grid-list';
import {CdkListboxModule} from '@angular/cdk/listbox';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [BulkResolveDetailComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    CdkListboxModule,
    RouterModule.forChild([
      {
        path: "",
        component: BulkResolveDetailComponent,
      },
    ]),
    MatCardModule,
    MatProgressSpinnerModule,
    DialogModule,
    ButtonModule
  ],
})
export class BulkResolveDetailModule {}
