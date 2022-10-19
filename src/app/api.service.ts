import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewdress=()=>{
    return this.http.get("http://localhost:8080/viewdress")
  }
  adddress=(data:any)=>{
    return this.http.post("http://localhost:8080/adddress",data)
  }
}
