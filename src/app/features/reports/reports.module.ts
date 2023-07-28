import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";



@NgModule({
  imports:[RouterModule.forChild([
{

  path: "transaction-logs",
       loadChildren: async () =>
         (await import("./transaction-logs/transaction-logs.module")).TransactionLogsModule,
}
  ])],
})
export class ReportsModule {}


// [
//   RouterModule.forChild([
//     {
//       path: "transaction-logs",
//       loadChildren: async () =>
//         (await import("./transaction-logs/transaction-logs.module")).TransactionLogsModule,
//     },
//   ]),
// ],