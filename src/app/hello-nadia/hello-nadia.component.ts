import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-nadia',
  templateUrl: './hello-nadia.component.html',
  styleUrls: ['./hello-nadia.component.css']
})
export class HelloNadiaComponent {
  name: any;
  message: any;

  constructor() {
    this.name = "nadia.";
    this.message = "This is my First compnent.";
  }



}
