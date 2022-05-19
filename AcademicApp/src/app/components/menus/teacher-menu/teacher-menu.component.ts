import { Component, Input, OnInit } from '@angular/core';
import { teacherMenuData, chiefMenuData } from './teacherMenuData'; 
import { SIDEMENU_WIDTH, SIDEMENU_PADDING } from 'src/app/constants/sizes';

@Component({
  selector: 'app-teacher-menu',
  templateUrl: './teacher-menu.component.html',
  styleUrls: ['./teacher-menu.component.css']
})
export class TeacherMenuComponent implements OnInit {
  teacherData = teacherMenuData;
  chiefData = chiefMenuData;
  sidemenuWidth = SIDEMENU_WIDTH;
  sidemenuPadding = SIDEMENU_PADDING;

  @Input() name : string = 'Name Surnameeeeeeeeeeeeeeeee';

  constructor() { }

  ngOnInit(): void {
  }

}
