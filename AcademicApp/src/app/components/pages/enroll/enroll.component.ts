import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';
import { TABLE_TEST_CURRICULUM_DATA } from 'src/app/testing-dashboard/testingData';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})



export class EnrollComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

facultiesHeader = ['faculties'];
yearsHeader = ['years']
/*facultyData = [
    'Faculty_1',
    'Faculty_2',
    'Faculty_3',
    'Faculty_4',
    'Faculty_5'
  ]*/

facultyData = [
  {"faculties": "Faculty_1"},
  {"faculties": "Faculty_2"},
  {"faculties": "Faculty_3"},
  {"faculties": "Faculty_4"},
  {"faculties": "Faculty_5"},
]

yearData = [
    {"years": "Year_1"},
    {"years": "Year_2"},
    {"years": "Year_3"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
