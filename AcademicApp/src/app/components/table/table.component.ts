import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { TABLE_WIDTH } from 'src/app/constants/sizes';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  
  dataSource = new MatTableDataSource<any>();  // our table
  selection = new SelectionModel<any>(true, []);  // for checkboxes, here we save the data regarding the checkboxes
  displayColumns: string[] = [];  // headers - {edit, selected} (basically only stuff regarding objects)

  @Input() tableWidth: string = TABLE_WIDTH
  @Input() headers: string[] = [];  // headers of table
  @Input() objectsFromDb: any[] = [];  // the objects that are shown in table and are taken from the db
  @Input() pageSize: number = 5;  // how many objects per page
  @Input() hasCheckbox: boolean = true;  // you specify if the table can have a checkbox option
  @Input() hasAction: boolean = true;   // if you want to add/update/delete

  @ViewChild(MatTableDataSource,{static:true}) table!: MatTableDataSource<any>; // reference to table
  @ViewChild(MatPaginator) paginator!: MatPaginator;  // reference to paginator

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // our table data will be the objects from db
    this.dataSource.data = this.objectsFromDb;

    // we decide the headers 
    this.displayColumns = this.headers;
    if (this.hasCheckbox) {
      this.headers = ['select'].concat(this.headers);
    }
    if (this.hasAction) {
      this.headers = this.headers.concat(['action']);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** for checkboxes -> Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** for checkboxes -> Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    console.log(this.getSelectedRowsData());
  }

  /* get all oobjects from table */
  getAllRowsData() {
    return this.dataSource.data;
  }

  /** for checkboxes -> Get the objects that were selected */
  getSelectedRowsData() {
    return this.selection.selected;
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
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
        console.log(this.getSelectedRowsData());
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj:any){
    this.dataSource.data.push({
      cid: row_obj.cid,
      name: row_obj.name,
      fid: row_obj.fid,
      year: row_obj.year,
      semester: row_obj.semester,
      priority: row_obj.priority,
      // add credits here
    });
    this.dataSource.data = [...this.dataSource.data]; //refresh the dataSource
    
  }

  updateRowData(row_obj:any){
    this.dataSource.data = this.dataSource.data.filter((value:any,key:any)=>{
      console.log(value, row_obj);
      if(value.cid == row_obj.cid){
        value.name = row_obj.name;
        value.fid = row_obj.fid;
        value.year = row_obj.year;
        value.semester = row_obj.semester;
        value.priority = row_obj.priority;
        // don't forget to add here credits
      }
      return true;
    });
  }

  deleteRowData(row_obj:any){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      return value.cid != row_obj.cid;
    });
  }
}