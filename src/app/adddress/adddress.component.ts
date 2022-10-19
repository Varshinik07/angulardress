import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddress',
  templateUrl: './adddress.component.html',
  styleUrls: ['./adddress.component.css']
})
export class AdddressComponent implements OnInit {

  constructor() { }

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
}

  ngOnInit(): void {
  }

}
