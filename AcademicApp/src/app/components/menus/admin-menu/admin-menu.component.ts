import { Component, Input, OnInit } from '@angular/core';
import { adminMenuData } from './adminMenuData';
import { SIDEMENU_WIDTH, SIDEMENU_PADDING } from 'src/app/constants/sizes';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  navData = adminMenuData;
  sidemenuWidth = SIDEMENU_WIDTH;
  sidemenuPadding = SIDEMENU_PADDING;

  @Input() name : string = 'Name Surnameeeeeeeeeeeeeeeee';


  constructor() { }

  ngOnInit(): void {
  }

}
