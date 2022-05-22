import { Component, OnInit, ViewChild } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';
import { TABLE_TEST_CURRICULUM_DATA, TABLE_TEST_CURRICULUM_DATA_AFTER } from 'src/app/testing-dashboard/testingData';
import { BLUE_TEXT } from 'src/app/constants/colors';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { TableComponent, } from '../../table/table.component';
import { ApisService } from 'src/app/apis/apis.service';
import { FacultyAndYearData } from 'src/app/entities/facultyAndYearData';

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
  options: FacultyAndYearData[] = [];
  nameOfPropertyToShow: string = "name";

  @ViewChild('facultyDd') facultyDropdown!: DropdownComponent; // reference to dropdown
  @ViewChild('table') table!: TableComponent; // reference to dropdown

  headers = ['course', 'grade'];
  tableData = TABLE_TEST_CURRICULUM_DATA;
  tableDataAfter = TABLE_TEST_CURRICULUM_DATA_AFTER;

  constructor(private apisService: ApisService) {

   }

  ngOnInit(): void {
    facultyAndYear: Array<FacultyAndYearData>();

    this.apisService.getFacultiesAndYearsForStudent().subscribe((result) => {
      let array : any = [];
      result.forEach((value, index) =>{
        let obj = {"id":index, "name": value.name + " - Year " + value.year, "actualName": value.name, "actualYear": value.year};
        array.push(obj);
      })
      this.options = array;
      this.apisService.getGrades(result[0]).subscribe((result) =>{
        this.table.changeRowsData(result); // this is how you change it.
        this.facultyDropdown.setOptions(this.options);
      });

    });
  }


  onOptionChanged() {
    /**
     * @TO_DO - when the dropdown selected option is changed, send request to backend to update the table.
     */
    //console.log(this.facultyDropdown.getSelectedObject()); // to get whole object
    //console.log((this.facultyDropdown.getSelectedValue())); // to get the id(index in list) of object

    // here we should send from dropdown and get the rows (replace this.tableDataAfter with your variables) 
    let obj = this.facultyDropdown.getSelectedObject()[0];
    let model : FacultyAndYearData = new FacultyAndYearData(obj["actualName"], obj["actualYear"]);
    this.apisService.getGrades(model).subscribe((result) =>{
      this.table.changeRowsData(result); // this is how you change it.
    });
  // this.table.changeRowsData(this.apisService.getGrades()); // this is how you change it.

  }

}
