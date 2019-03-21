import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }
)
export class AppComponent {
  title = 'nadia-app';
  msg = "Be Happy for ever!";
  temMsg = "Wait please!, I'm checking. ";
  temp = 67;
  constructor() {
    this.displayTemMessage();
  }

  displayTemMessage() {

    if (this.temp > 80) {
      this.temMsg = "Do not go out, it is going to be hot."
    }
    if (this.temp < 80) {
      this.temMsg = "Do not go out, it is going to be cold."
    }
  }
}
