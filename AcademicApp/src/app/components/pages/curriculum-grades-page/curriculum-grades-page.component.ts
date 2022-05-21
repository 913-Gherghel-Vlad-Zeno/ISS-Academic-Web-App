import { Component, OnInit, ViewChild } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';
import { TABLE_TEST_CURRICULUM_DATA, TABLE_TEST_CURRICULUM_DATA_AFTER } from 'src/app/testing-dashboard/testingData';
import { BLUE_TEXT } from 'src/app/constants/colors';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { TableComponent, } from '../../table/table.component';

@Component({
  selector: 'app-curriculum-grades-page',
  templateUrl: './curriculum-grades-page.component.html',
  styleUrls: ['./curriculum-grades-page.component.css']
})
export class CurriculumGradesPageComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING
  blueText = BLUE_TEXT
  options: any = [
    {
      myId: 1,
      text: 'Faculty-1',
      otherStuff: 'vvdvvdf',
      value: 1
    },
    {
      myId: 2,
      text: 'Faculty-2',
      otherStuff: 'aaaaaa',
      value: 2
    },
    {
      myId: 3,
      text: 'Faculty-3',
      otherStuff: 'bbbbbb',
      value: 3
    },
  ];

  @ViewChild('facultyDd') facultyDropdown!: DropdownComponent; // reference to dropdown
  @ViewChild('table') table!: TableComponent; // reference to dropdown

  headers = ['name', 'grade', 'credits'];
  tableData = TABLE_TEST_CURRICULUM_DATA;
  tableDataAfter = TABLE_TEST_CURRICULUM_DATA_AFTER;

  constructor() { }

  ngOnInit(): void {
  }

  onOptionChanged() {
    /**
     * @TO_DO - when the dropdown selected option is changed, send request to backend to update the table.
     */
    console.log(this.facultyDropdown.getSelectedObject()); // to get whole object
    console.log((this.facultyDropdown.getSelectedValue())); // to get the id(index in list) of object

    // here we should send from dropdown and get the rows (replace this.tableDataAfter with your variables) 

    this.table.changeRowsData(this.tableDataAfter); // this is how you change it.

  }

}
