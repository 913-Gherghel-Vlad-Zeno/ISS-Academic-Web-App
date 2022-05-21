import { Component, Input, OnInit } from '@angular/core';
import { studentMenuData } from './studentMenuData';
import { SIDEMENU_WIDTH, SIDEMENU_PADDING } from 'src/app/constants/sizes';
import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {STUDENT_FULL_NAME_URL} from "../../../constants/url";
import {Observable} from "rxjs";

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})

export class StudentMenuComponent implements OnInit {
  navData = studentMenuData;
  sidemenuWidth = SIDEMENU_WIDTH;
  sidemenuPadding = SIDEMENU_PADDING;
  name : string = '';

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(STUDENT_FULL_NAME_URL + this.cookieService.get("username"), {responseType: 'text'})
      .subscribe(result => {
        console.log(result);
        })

  }

  getFullName(){
    return this.http.get<Object>(STUDENT_FULL_NAME_URL + this.cookieService.get("username"))
      .subscribe((name: Object) => {
        console.log(name);
      })
  }



  logout(){
    console.log("button pressed");
    this.cookieService.delete('username');
  }
}
