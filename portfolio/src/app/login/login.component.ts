import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

arr1: any;
  constructor(public router:Router) { }

  ngOnInit(): void {
    sessionStorage.setItem("contact", "[]")
  }

  onvalidate(val:any){
    console.log(val)
    this.arr1 = JSON.parse(sessionStorage.getItem("register") || "[]");
    let verify = false;
    for (var str of this.arr1) {
      if(str.inputName === val.inputName && str.inputPassword === val.ipPassword){
        verify = true

      }
    }
    if (verify === true){
        sessionStorage.setItem("uName", val.inputName);
        this.router.navigate(["portfolio"]);
    }
  }

}

