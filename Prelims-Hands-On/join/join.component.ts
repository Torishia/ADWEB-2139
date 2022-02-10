import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  firstName = " ";
  lastName = " ";
  emel = " ";
  ins = " ";

  getData(data:any){
    console.warn(data);
  }
  
  ngOnInit(): void {
  }

}
