import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';
import { TABLE_TEST_CURRICULUM_DATA } from 'src/app/testing-dashboard/testingData';

@Component({
  selector: 'app-curriculum-grades-page',
  templateUrl: './curriculum-grades-page.component.html',
  styleUrls: ['./curriculum-grades-page.component.css']
})
export class CurriculumGradesPageComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  headers = ['name', 'grade', 'credits'];
  tableData = TABLE_TEST_CURRICULUM_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
