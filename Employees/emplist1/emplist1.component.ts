import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {
  empFetch!: any[];

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.empFetch = this.myservice.empList();
  }

}
