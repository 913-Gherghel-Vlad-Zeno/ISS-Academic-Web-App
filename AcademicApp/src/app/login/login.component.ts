import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group ({
      username: [''],
      password: ['']
    })
  }

  login() { 
    const typeUser = ["student", "teacher", "admin"];
    var found = false;
    /*for (const type of typeUser) {
        console.log(type);*/
        //var string = this.http.get<any>(`http://localhost:8080/user/a`).subscribe(res=>{alert(res)});
       // console.log(string);
        setTimeout(() =>
        {var f = fetch("http://localhost:8080/user/a");
        console.log(f);}, 5000)
       // var g = f.json();
        
        /*.subscribe(res=>{
          console.log(res);
          alert(res);

          //const user = res.find((foundUser:any)=>{
            //return foundUser.username === this.loginForm.value.username && foundUser.password === this.loginForm.value.password;
            //return foundUser == this.loginForm.value.username;
          //});
          /*if (user) {
            found = true;
            //console.log(found)
            alert("login success");
            this.loginForm.reset();
            //this.router.navigate([`${type}-dashboard`]);
          }*/
          /*if (res !== "null") {
            alert("not found");
          }
        },err=>{
          alert("something went wrong");
        })*/
    //} 
    /*setTimeout(()=>{
      if (found === false) {
        //console.log(found);
        alert("user not found");
      }},5000);*/
    
    
  }

}
