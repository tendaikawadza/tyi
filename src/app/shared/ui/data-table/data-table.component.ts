import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { SharedModule } from "../../shared.module";
import { PipingType } from "../../../data/types";

@Component({
  standalone: true,
  selector: "zimpayments-data-table",
  templateUrl: "./data-table.component.html",
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    SharedModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() columns: string[] = [];
  @Input() columnTypes: PipingType[] = [];
  @Input() clickable = false;
  @Input() filterable = false;
  @Input() downloadable = false;

  @Output() clicked = new EventEmitter();
  @Output() download = new EventEmitter();

  dataSource!: MatTableDataSource<any>;
  emptyData = new MatTableDataSource([{ empty: "row" }]);

  constructor() {}

  @Input() set data(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
