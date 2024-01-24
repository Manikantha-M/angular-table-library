import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    MyLibComponent,
    BasicTableComponent
  ],
  imports: [
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  exports: [
    MyLibComponent,
    BasicTableComponent
  ]
})
export class MyLibModule { }
