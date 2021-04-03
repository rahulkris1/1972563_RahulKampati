import { Component, OnInit } from '@angular/core';
import { TakServiceService } from '../tak-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  temp : boolean = false;
  fData: any= [];
  
  constructor(public service:TakServiceService) { }

  ngOnInit(){
     this.lddata();
  }


  lddata(){
    this.service.loadData().subscribe((data: {})=>{
        console.log(data);
        this.fData=data;
        this.temp=true;
    })
  }
  frmData(dataf: any){

    console.log(dataf)
    this.service.store(dataf);
  }

}
