import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public arr: Array<any> = [];
  userName : String = sessionStorage.getItem("uName") || "";
  hasData : boolean = false;
  constructor() { }

  ngOnInit(): void {
    let arrS = JSON.parse(sessionStorage.getItem("contact")|| "[]")
    if (arrS)
    {
        this.arr = arrS;
        this.hasData = true;
    }
  }

  onPortf(val:any){
    this.arr.push(val)
    console.log(this.arr[0])
    sessionStorage.setItem("contact", JSON.stringify(this.arr))
     //location.reload();
    alert("added Succesfully")

  }

}
