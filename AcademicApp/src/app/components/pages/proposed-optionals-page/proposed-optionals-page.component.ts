import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';

import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-proposed-optionals-page',
  templateUrl: './proposed-optionals-page.component.html',
  styleUrls: ['./proposed-optionals-page.component.css']
})
export class ProposedOptionalsPageComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  constructor() { }

  ngOnInit(): void {
  }

  optionals = [
    'Optional 1',
    'Optional 2',
    'Optional 3',
    'Optional 4'
  ];

  entities : any = [];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.optionals, event.previousIndex, event.currentIndex);
  }
}
