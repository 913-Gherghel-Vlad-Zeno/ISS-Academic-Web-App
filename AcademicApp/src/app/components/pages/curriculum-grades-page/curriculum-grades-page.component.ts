import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';

@Component({
  selector: 'app-curriculum-grades-page',
  templateUrl: './curriculum-grades-page.component.html',
  styleUrls: ['./curriculum-grades-page.component.css']
})
export class CurriculumGradesPageComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  constructor() { }

  ngOnInit(): void {
  }

}
