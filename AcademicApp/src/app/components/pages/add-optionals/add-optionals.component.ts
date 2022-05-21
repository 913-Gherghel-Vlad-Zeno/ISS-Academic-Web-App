import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';
import { TABLE_TEST_DATA } from 'src/app/testing-dashboard/testingData';
import { DialogBoxComponent } from '../../dialog-box/dialog-box.component';
import { TableComponent } from '../../table/table.component';

@Component({
  selector: 'app-add-optionals',
  templateUrl: './add-optionals.component.html',
  styleUrls: ['./add-optionals.component.css']
})
export class AddOptionalsComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING
  headers = ['name', 'grade', 'credits'];
  tableData = TABLE_TEST_DATA;

  constructor(public dialog: MatDialog) {}

  @ViewChild(TableComponent,{static:true}) table!: TableComponent; // reference to table


  ngOnInit(): void {
  }

  /** for edit/show -> opens a dialog with what we want to update/see */
  openDialog(action: string, obj:any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '650px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
        console.log(this.tableData);
      }
    });
  }

  /** if you press on add button */
  addRowData(row_obj:any){
    this.table.addRowData(row_obj);
  }

  /** if you press on Send Optionals button */
  sendOptionals(){
    // TO DO : send to backend
    console.log(this.table.getAllRowsData());
  }

}
