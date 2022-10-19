import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdress',
  templateUrl: './viewdress.component.html',
  styleUrls: ['./viewdress.component.css']
})
export class ViewdressComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
     this.myapi.viewdress().subscribe(
      (data)=>{
        this.viewdress=data
      }
      )
   }
   viewdress:any=[]

  ngOnInit(): void {
  }

}
