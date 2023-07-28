import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "upload-batch",
        loadChildren: async () => (await import("./features/upload-batch")).UploadBatchModule,
      },

      {
        path: "batch-details",
        loadChildren: async () =>
          (await import("./features/bulk-resolve-detail")).BulkResolveDetailModule,
      },
    ]),
    MatProgressSpinnerModule,
    ButtonModule,
    DialogModule,
    MatCardModule,
  ],
  declarations: [],
  exports: [],
})
export class BulkResolutionModule {}
