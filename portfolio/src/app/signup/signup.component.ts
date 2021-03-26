import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  arr: Array<string> = [];
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  onRegister(obj:any) {  
    console.log(obj)
    let arrS = JSON.parse(sessionStorage.getItem("register")|| "[]")
    if (arrS)
    {
        this.arr = arrS;
    }
    this.arr.push(obj)
    console.log(this.arr)
    sessionStorage.setItem("register", JSON.stringify(this.arr))
    alert("Registered Succesfully")
    this.router.navigate(["login"]);
    
  }

}
