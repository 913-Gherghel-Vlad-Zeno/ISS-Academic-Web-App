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

  async login() { 
    const typeUser = ["student", "teacher", "admin"];
    var found = false;
    //var str = this.http.get<any> ("http://localhost:8080/user/a").subscribe(res=>{alert(res);})
    //var f = fetch("http://localhost:8080/user/a");
   // console.log(f);
   let newUser;
   /*var account = async() => await fetch(`http://localhost:8080/user/${this.loginForm.value.username}`).then(res=>res.json()).then(res=>{return res as User})
   account.then(users=>{
     console.log(users.role.toString())
   });*/
  /* var user = fetch(`http://localhost:8080/user/${this.loginForm.value.username}`).then(res=>res.json()).then(res=>{return res as User})
    var user2 = user.then(users=>{
    console.log(users.role.toString())
  });*/


  this.http.get<IUser>(`http://localhost:8080/user/${this.loginForm.value.username}`)
        .subscribe((v:IUser) => {
          if (v.role == "null") {
            alert("Login failed");
          }
          else {
            alert(`login as ${v.role} success`);
            this.loginForm.reset();
            //this.router.navigate([${v.role}-dashboard]);
          }
        })


  /*var response = await http(`http://localhost:8080/user/${this.loginForm.value.username}`);
  console.log(response.role);
  response = response.replace(/\n/g, "\n")
               .replace(/\'/g, "\'")
               .replace(/\"/g, '\"')
               .replace(/\&/g, "\&")
               .replace(/\r/g, "\r")
               .replace(/\t/g, "\t")
               .replace(/\b/g, "\b")
               .replace(/\f/g, "\f");
// remove non-printable and other non-valid JSON chars
response = response.replace(/[\u0000-\u0019]+/g,"");
  let obj : User = JSON.parse(response);
  console.log(obj.role);*/
  


  //console.log(account);
  //console.log(newUser);

    /*getUsers().then(users=>{
      console.log(users.role.toString())
    });*/
    
    /*for (const type of typeUser) {
        console.log(type);*/
        //var string = this.http.get<any>(`http://localhost:8080/user/a`).subscribe(res=>{alert(res)});
       // console.log(string);
        /*setTimeout(() =>
        {var f = fetch("http://localhost:8080/user/a");
        console.log(f);}, 5000)*/
      
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

/*type User = {
  role: string;
}*/

/*function getUsers() : Promise<User> {
  return fetch(`http://localhost:8080/user/${loginForm.value.username}`).then(res=>res.json()).then(res=>{return res as User})
}*/

export default interface IUser {
  role: string
}

export async function http(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}
/*
// example consuming code
const data = await http(
  "https://jsonplaceholder.typicode.com/todos"
);*/


