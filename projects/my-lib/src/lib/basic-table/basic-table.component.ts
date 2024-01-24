import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';;
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'lib-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() data:any
  @Input() displayedColumns:any
  @Output('outputSelection') outputSelection: any = new EventEmitter<any>();

  dataSource:any;

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.data);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onRowClick(row: any){
    this.outputSelection.emit(row)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
