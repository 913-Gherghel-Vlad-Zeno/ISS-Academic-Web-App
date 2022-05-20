import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';

@Component({
  selector: 'app-classement-grants',
  templateUrl: './classement-grants.component.html',
  styleUrls: ['./classement-grants.component.css']
})
export class ClassementGrantsComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  constructor() { }

  ngOnInit(): void {
  }

}
