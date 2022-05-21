import { Component, OnInit } from '@angular/core';
import { TABLE_TEST_DATA } from './testingData';

@Component({
  selector: 'app-testing-dashboard',
  templateUrl: './testing-dashboard.component.html',
  styleUrls: ['./testing-dashboard.component.css']
})

export class TestingDashboardComponent implements OnInit {
  // -- table testing stuff don't delete pls
  tableTestData = TABLE_TEST_DATA
  testHeaders = ['name', 'year']
  // ---

  constructor() { }

  ngOnInit(): void {
  }

}
