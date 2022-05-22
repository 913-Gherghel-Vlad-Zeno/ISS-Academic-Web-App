import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';

@Component({
  selector: 'app-approve-optionals',
  templateUrl: './approve-optionals.component.html',
  styleUrls: ['./approve-optionals.component.css']
})

export class ApproveOptionalsComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  tableHeaders = ['Optional course name', 'Max students'];

  coursesData = [
    {
      'Optional course name': 'Optional_1',
      'Max students': 1
    },
    {
      'Optional course name': 'Optional_2',
      'Max students': 2
    },
    {
      'Optional course name': 'Optional_3',
      'Max students': 3
    },
    {
      'Optional course name': 'Optional_4',
      'Max students': 4
    },
    {
      'Optional course name': 'Optional_5',
      'Max students': 5
    }
  ]

  approveOptionalsButton() {
    console.log("approved");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
