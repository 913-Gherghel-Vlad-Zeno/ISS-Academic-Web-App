import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import {LOGO_WIDTH} from "../constants/sizes";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logoWidth = 325;

  public loginForm !: FormGroup;
  STUDENT_USERNAME = "stephenmitchell";
  TEACHER_USERNAME = "johnordway";
  STAFF_USERNAME = "brittanybrown";
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router,
              private cookieService:CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      username: [''],
      password: ['']
    });
  }

  async login() {
    const typeUser = ["student", "teacher", "admin"];
    var found = false;
    let newUser;

    // do not delete
    /*
    this.http.get<IUser>(`http://localhost:8080/user/${this.loginForm.value.username}`)
          .subscribe((v:IUser) => {
            if (v.role == "null") {
              alert("Login failed");
            }
            else {
              alert(`login as ${v.role} successful`);
              this.loginForm.reset();
              this.router.navigate([`${v.role.toLocaleLowerCase()}-dashboard`]);
            }
          })
          */
    // only temporary
    var role = null;

    if(this.loginForm.value.username === 'a'){
      role = 'student';
      this.cookieService.set("username", this.STUDENT_USERNAME);
    }
    else if(this.loginForm.value.username === 'b'){
      role = 'teacher';
      this.cookieService.set("username", this.TEACHER_USERNAME);
    } else {
      role = 'staff';
      this.cookieService.set("username", this.STAFF_USERNAME);
    }

    this.loginForm.reset();
    this.router.navigate([`${role}-dashboard`]);
  }



}

// TO DO: make sure it's the whole user
export default interface IUser {
  role: string
}

export async function http(request: RequestInfo): Promise<any> {
  // returns the respone to the http request
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

