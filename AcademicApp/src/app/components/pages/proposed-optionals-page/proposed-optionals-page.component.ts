import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';

import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TABLE_TEST_DATA } from 'src/app/testing-dashboard/testingData';

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

  optionals = TABLE_TEST_DATA

  entities : any = [];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.optionals, event.previousIndex, event.currentIndex);
  // }

  getOptionals(){
    /** 
     * @TO_DO - send to backend the list of optionals
     * */
  }
  drop(event: CdkDragDrop<any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.optionals = [...this.optionals];
}
  sendOptionals(){
    /** 
     * @TO_DO - send to backend the list of optionals
     * */

    console.log(this.optionals);  // you get them in the right order (based on what the student wanted)

    // decide what you exactly need to send to db..if you only send the first one or idk

    // TO DO: disable the button... + modal to confirm that the optionals were send.
  }
}
