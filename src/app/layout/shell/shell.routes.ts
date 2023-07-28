
import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "reports",
        loadChildren: async () => {
          return (await import("../../features/reports")).ReportsModule;
        },
      },

      {
        path: "products",
        loadChildren: async () => {
          return (await import("../../features/products")).ProductsModule;
        },
      },

      {
        path: "merchants",
        loadChildren: async () => {
          return (await import("../../features/merchants")).MerchantsModule;
        },
      },

      {
        path: "bulk-resolutions",
        loadChildren: async () => {
          return (await import("../../features/bulk-resolutions")).BulkResolutionModule;
        },
      },
    ],
  },
];
