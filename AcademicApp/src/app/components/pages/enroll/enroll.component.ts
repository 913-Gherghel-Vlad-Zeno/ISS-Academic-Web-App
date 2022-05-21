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

  headers = ['faculties'];
 facultyData = [
    'Faculty_1',
    'Faculty_2',
    'Faculty_3',
    'Faculty_4',
    'Faculty_5'
  ]

  yearData = [
    'Year_1',
    'Year_2',
    'Year_3'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
