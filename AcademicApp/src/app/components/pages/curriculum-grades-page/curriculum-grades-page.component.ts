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

    // getting the faculties and years that the student is enrolled in
    this.apisService.getFacultiesAndYearsForStudent().subscribe((result) => {
      let array : any = [];
      // creating the array for the dropdown element
      result.forEach((value, index) =>{
        let obj = {"id":index, "name": value.name + " - Year " + value.year, "actualName": value.name, "actualYear": value.year};
        array.push(obj);
      })
      // setting the options for the dropdown
      this.options = array;
      // putting the data into the table for the first faculty that the guy/girl/non binary/etc is in
      if(result.length > 0){ // checking if the guy is enrolled at least in a faculty in the first place
        this.apisService.getGrades(result[0]).subscribe((result) =>{
          this.table.changeRowsData(result); // this is how you change it.
          this.facultyDropdown.setOptions(this.options); // updating the options for the dropdown list
        });

      }

    });
  }


  onOptionChanged() {
    /**
     * @TO_DO - when the dropdown selected option is changed, send request to backend to update the table.
     */
    //console.log(this.facultyDropdown.getSelectedObject()); // to get whole object
    //console.log((this.facultyDropdown.getSelectedValue())); // to get the id(index in list) of object

    // here we should send from dropdown and get the rows (replace this.tableDataAfter with your variables) 

    // selecting the full object from the drop down list
    let obj = this.facultyDropdown.getSelectedObject()[0];
    // creating the data to send for the api 
    let model : FacultyAndYearData = new FacultyAndYearData(obj["actualName"], obj["actualYear"]);
    // getting the courses and grades that the student is enrolled in
    this.apisService.getGrades(model).subscribe((result) =>{
      this.table.changeRowsData(result); // this is how you change it.
    });
  // this.table.changeRowsData(this.apisService.getGrades()); // this is how you change it.

  }

}
