import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FullName} from "../entities/fullName";
import {CookieService} from "ngx-cookie-service";
import {map, Observable} from "rxjs";
import {UserData} from "../entities/userData";
import {Message} from "../entities/message";
import {Faculty} from "../entities/faculty";
import {CourseGradeData} from "../entities/courseGradeData";
import {FacultyAndYearData} from "../entities/facultyAndYearData";

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http : HttpClient, private cookieService: CookieService) { }

  //user data apis
  getFullName(name: string): Observable<FullName>{
    return this.http.get<FullName>("http://localhost:8080/userdata/" + this.cookieService.get("username") + "/" +
      name);
  }

  getUserData(): Observable<UserData>{
    return this.http.get<UserData>("http://localhost:8080/userdata/" + this.cookieService.get("username"));
  }


  postUserData(userData: UserData) {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(userData);
    console.log(body);
    return this.http.post<Message>("http://localhost:8080/userdata/" + this.cookieService.get("username"), body,{'headers':headers})
      .pipe(
        map((message: Message) => {
          return message;
        })
      )
  }


  //student apis
  //enroll page
  getAllFaculties(): Observable<Faculty[]>{
    return this.http.get<Faculty[]>("http://localhost:8080/student/getFaculties");
  }


  //view grades page
  getGrades(facultyAndYearData: FacultyAndYearData): Observable<CourseGradeData[]>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(facultyAndYearData);
    return this.http.post<CourseGradeData[]>("http://localhost:8080/student/getGrades/" + this.cookieService.get("username"), body,{'headers':headers})
      .pipe(
        map((courseGradeData:CourseGradeData[]) => {
          return courseGradeData;
        })
      )
  }

  //for each enrolled student, get the faculties and years
  getFacultiesAndYearsForStudent(): Observable<FacultyAndYearData[]>{
    return this.http.get<FacultyAndYearData[]>("http://localhost:8080/student/getFacultiesAndYears/" + this.cookieService.get("username"));
  }


}
