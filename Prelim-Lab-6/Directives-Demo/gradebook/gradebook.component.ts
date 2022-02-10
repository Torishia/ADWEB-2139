import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //ngIf Statement
  isLogIn:boolean=false;
  isLogOut:boolean=true;

  //ngFor Statement
  list = [1,2,3,4,5];

  //ngFor Statement using TrackBy
  studentArr : any[] = [
    {"id": 1, "name": "student1"},
    {"id": 2, "name": "student2"},
    {"id": 3, "name": "student3"},
    {"id": 4, "name": "student4"}
  ];
    trackByData (index:number, studArr:any): number
    {
      return studArr.id;
    }    

    //ngFor Statement (Angular - Display a list items)
    staff = [
      { firstname: "Miguel", lastname: "Tiamzon", email: "Miguel.Tiamzon@test.com", role: "admin"},
      { firstname: "Sam", lastname: "Garcia", email: "Sam.Garcia@test.com", role: "admin"},
      { firstname: "Charles ", lastname: "Garcia", email: "Charles.Garcia@test.com", role: "admin"},
      { firstname: "Ashley ", lastname: "Delacruz", email: "Ashley.Delacruz@test.com", role: "admin"},
      { firstname: "Jarell", lastname: "Galura", email: "Jarell.Galura@test.com", role: "admin"}
    ];

    //Switch Statement
    logInName = "admin";
    
  constructor() { }

  ngOnInit(): void {
  }

}