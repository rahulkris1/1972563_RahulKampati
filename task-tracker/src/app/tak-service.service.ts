import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {format} from "./format"
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TakServiceService {

  constructor(public http:HttpClient) { }

  store(data:any){
    this.http.post("http://localhost:3000/tracker",data).
    subscribe(data=>console.log(data),error=>console.log(error));
  }

  loadData(): Observable<format[]> {
    return this.http.get<format[]>("http://localhost:3000/tracker");
}
}
