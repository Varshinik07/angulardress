import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adddress',
  templateUrl: './adddress.component.html',
  styleUrls: ['./adddress.component.css']
})
export class AdddressComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  dressname=""
  dressmodel=""
  quantity=""
  description=""

  readValues=()=>{
    let data={
    "dressname":this.dressname,
    "dressmodel":this.dressmodel,
  "quantity":this.quantity,
  "description":this.description
  }
  console.log(data)
 this.myapi.adddress(data).subscribe(
  (data)=>{
    alert ("data added successfully")
  }
 )
}

  ngOnInit(): void {
  }

}
