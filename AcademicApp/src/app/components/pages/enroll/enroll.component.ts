import { Component, OnInit, ViewChild } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';
import { FacultyAndYearData } from 'src/app/entities/facultyAndYearData';
import { TABLE_TEST_CURRICULUM_DATA } from 'src/app/testing-dashboard/testingData';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { TableComponent } from '../../table/table.component';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})



export class EnrollComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  facultiesOptions: any = [
    {
      "fid": 1,
      "name": "Faculty_1",
      "max_years": 2
    },
    {
      "fid": 2,
      "name": "Faculty_2",
      "max_years": 4
    },
    {
      "fid": 3,
      "name": "Faculty_3",
      "max_years": 5
    },
  ];

  nameOfFPropertyToShow: string = "name";
  idFPropery: string = "fid";

  yearsOptions: any = [
    { "year": 1 },
    { "year": 2 },
    { "year": 3 },
    { "year": 4 },
    { "year": 5 },
  ];

  nameOfYPropertyToShow: string = "year";
  idYPropery: string = "year";

  @ViewChild('facultyTable') table!: TableComponent;
  @ViewChild('facultyDd ') facultyDd!: DropdownComponent;
  @ViewChild('yearDd ') yearDd!: DropdownComponent;

  enrollmentsHeader: any = [];
  tableData: any = [];

  constructor() { }

  ngOnInit(): void {

  }

  onFacultyOptionChanged(){
    /**  
     * @TO_DO 
     * */
  }

  onClickAddFacultyToTable(){
    /**  
     * @TO_DO 
     * */

  }

  onClickClear(){
    this.table.changeRowsData([]);
  }

  onClickSend(){
    /**  
     * @TO_DO 
     * */
    let data = this.table.getAllRowsData();

  }


}
