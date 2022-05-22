import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LOGO_WIDTH, PAGE_PADDING, CONTENT_PADDING } from 'src/app/constants/sizes';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import { FullName } from 'src/app/entities/fullName';


@Component({
  selector: 'app-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.css']
})
export class DocumentsPageComponent implements OnInit {
  logoWidth = LOGO_WIDTH
  pagePadding = PAGE_PADDING
  contentPadding = CONTENT_PADDING

  name: string = '';
  courses = [
    {
      "cid": 40,
      "name": "Analiza convexa",
      "semester": 3,
      "priority": 2,
      "credits": 3,
    },
    {
      "cid": 2,
      "name": "course_2",
      "semester": 2,
      "priority": 2,
      "credits": 2
    },
    {
      "cid": 40,
      "name": "Analiza convexa",
      "semester": 3,
      "priority": 2,
      "credits": 3,
    },
    {
      "cid": 2,
      "name": "course_2",
      "semester": 2,
      "priority": 2,
      "credits": 2
    },
    {
      "cid": 40,
      "name": "Analiza convexa",
      "semester": 3,
      "priority": 2,
      "credits": 3,
    },
    {
      "cid": 2,
      "name": "course_2",
      "semester": 2,
      "priority": 2,
      "credits": 2
    },
    {
      "cid": 40,
      "name": "Analiza convexa",
      "semester": 3,
      "priority": 2,
      "credits": 3,
    },
    {
      "cid": 2,
      "name": "course_2",
      "semester": 2,
      "priority": 2,
      "credits": 2
    },
    {
      "cid": 40,
      "name": "Analiza convexa",
      "semester": 3,
      "priority": 2,
      "credits": 3,
    },
    {
      "cid": 2,
      "name": "course_2",
      "semester": 2,
      "priority": 2,
      "credits": 2
    },
    {
      "cid": 40,
      "name": "Analiza convexa",
      "semester": 3,
      "priority": 2,
      "credits": 3,
    },
    {
      "cid": 2,
      "name": "course_2",
      "semester": 2,
      "priority": 2,
      "credits": 2
    },
    {
      "cid": 40,
      "name": "Analiza convexa",
      "semester": 3,
      "priority": 2,
      "credits": 3,
    },
    {
      "cid": 2,
      "name": "course_2",
      "semester": 2,
      "priority": 2,
      "credits": 2
    }
]

exportAsPDF(divId: any) {
  // the content of the pdf
  const data = document.createElement('myContractDiv');
  // add data to html
  document.body.appendChild(data);
  data.innerHTML = `
    <style>
    table, th, td {
    border:1px solid black;
    }
    </style>

    <h1>STUDIES CONTRACT</h1>
    <br>
    <p>Name of student: ${this.name}</p>
    <table>
      <tr>
        <th>cid</th>
        <th>name</th>
        <th>semester</th>
        <th>priority</th>
        <th>credits</th>
      </tr>
      <tr>
        <td>${this.courses[0].cid}</td>
        <td>${this.courses[0].name}</td>
        <td>${this.courses[0].semester}</td>
        <td>${this.courses[0].priority}</td>
        <td>${this.courses[0].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[1].cid}</td>
        <td>${this.courses[1].name}</td>
        <td>${this.courses[1].semester}</td>
        <td>${this.courses[1].priority}</td>
        <td>${this.courses[1].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[2].cid}</td>
        <td>${this.courses[2].name}</td>
        <td>${this.courses[2].semester}</td>
        <td>${this.courses[2].priority}</td>
        <td>${this.courses[2].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[3].cid}</td>
        <td>${this.courses[3].name}</td>
        <td>${this.courses[3].semester}</td>
        <td>${this.courses[3].priority}</td>
        <td>${this.courses[3].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[4].cid}</td>
        <td>${this.courses[4].name}</td>
        <td>${this.courses[4].semester}</td>
        <td>${this.courses[4].priority}</td>
        <td>${this.courses[4].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[5].cid}</td>
        <td>${this.courses[5].name}</td>
        <td>${this.courses[5].semester}</td>
        <td>${this.courses[5].priority}</td>
        <td>${this.courses[5].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[0].cid}</td>
        <td>${this.courses[0].name}</td>
        <td>${this.courses[0].semester}</td>
        <td>${this.courses[0].priority}</td>
        <td>${this.courses[0].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[1].cid}</td>
        <td>${this.courses[1].name}</td>
        <td>${this.courses[1].semester}</td>
        <td>${this.courses[1].priority}</td>
        <td>${this.courses[1].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[2].cid}</td>
        <td>${this.courses[2].name}</td>
        <td>${this.courses[2].semester}</td>
        <td>${this.courses[2].priority}</td>
        <td>${this.courses[2].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[3].cid}</td>
        <td>${this.courses[3].name}</td>
        <td>${this.courses[3].semester}</td>
        <td>${this.courses[3].priority}</td>
        <td>${this.courses[3].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[4].cid}</td>
        <td>${this.courses[4].name}</td>
        <td>${this.courses[4].semester}</td>
        <td>${this.courses[4].priority}</td>
        <td>${this.courses[4].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[5].cid}</td>
        <td>${this.courses[5].name}</td>
        <td>${this.courses[5].semester}</td>
        <td>${this.courses[5].priority}</td>
        <td>${this.courses[5].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[4].cid}</td>
        <td>${this.courses[4].name}</td>
        <td>${this.courses[4].semester}</td>
        <td>${this.courses[4].priority}</td>
        <td>${this.courses[4].credits}</td>
      </tr>
      <tr>
        <td>${this.courses[5].cid}</td>
        <td>${this.courses[5].name}</td>
        <td>${this.courses[5].semester}</td>
        <td>${this.courses[5].priority}</td>
        <td>${this.courses[5].credits}</td>
      </tr>
    </table>
    <br><br><br><br>
    <p>Student signature:<br>_______________</p>
    `

    html2canvas(data).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png')  // 'image/jpeg' for lower quality output.
    let pdf = new jspdf.jsPDF('p', 'cm', 'a4'); //Generates PDF in portrait mode
    
    let pageHeight = 29.75;
    let imgHeight = 8 + (this.courses.length * 2.5);
    let heightLeft = imgHeight;
    let position = 0;
    
    pdf.addImage(contentDataURL, 'jpg', 2, position, 80, imgHeight);  
    heightLeft -= pageHeight;
    while(heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(contentDataURL, 'jpg', 2, position, 80, imgHeight);  
      heightLeft -= pageHeight;
    }
    // remove the html
    const e = document.querySelector("myContractDiv");
    if (e) {
      const pe = e.parentElement;
      if (pe) {
        pe.removeChild(e);
      } 
    }  
    pdf.save('Filename.pdf');
    });    
  }

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getFullName();

  }

  getFullName(){
    this.http.get<FullName>("http://localhost:8080/userdata/" + this.cookieService.get("username") + "/" +
      this.cookieService.get("username"))
      .subscribe((response:FullName) => {
        console.log(response.fullname);
        this.name = response.fullname;
      });
  }
}
