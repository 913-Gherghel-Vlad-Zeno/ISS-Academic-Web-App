import { Component, OnInit } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TABLE_TEST_DATA } from 'src/app/testing-dashboard/testingData';
import {Course} from "../../../entities/course";

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

  optionals: Course[] = [new Course(40, "Analiza convexa",2,2,"francespergola", 3,169,2, 6),
    new Course(41, "adadsd",2,2,"francespergola", 3,169,2, 6),
    new Course(42, "ererr",2,2,"francespergola", 3,169,2, 6),
    new Course(43, "Avfdgfdg",2,2,"francespergola", 3,169,2, 6),
    new Course(44, "ioiori",2,2,"francespergola", 3,169,2, 6),
    new Course(45, "qwqqqww",2,2,"francespergola", 3,169,2, 6)]
  chosenOptionals: Course[] = []

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
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.optionals = [...this.optionals];
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.chosenOptionals = [...this.chosenOptionals];
    }
}

eventPredicate(){
  return this.chosenOptionals && this.chosenOptionals.length < 5;
}

eventFirstPredicate(){
    return this.optionals && this.optionals.length < 1000;
}

chosenOptionalsPredicate = (): boolean => {
    return this.eventPredicate();
}

optionalsPredicate = (): boolean => {
    return this.eventFirstPredicate();
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
