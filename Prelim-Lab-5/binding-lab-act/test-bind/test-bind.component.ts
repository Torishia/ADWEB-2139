import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  studName1 = "";
  studNum1 = 0;
  prelim1 = 0;
  midterm1 = 0;
  final1 = 0;

  studName2 = "";
  studNum2 = 0;
  prelim2 = 0;
  midterm2 = 0;
  final2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}