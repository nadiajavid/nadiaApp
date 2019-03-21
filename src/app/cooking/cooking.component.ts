import { Component, OnInit } from '@angular/core';
import { HelloNadiaComponent } from '../hello-nadia/hello-nadia.component';
var loadash = require('lodash');

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']

})

export class CookingComponent implements OnInit {

  pets: any;
  temp: number = 68;
  hello: any;
  constructor() {

    var petsDetails = this.getPetDetails();
    loadash.orderBy(petsDetails, ['age', 'name'], ['asc', 'desc']);
    this.pets = petsDetails;
    // this.pets = JSON.stringify(petsDetails);

  }
  displayTemMessage() {
    console.log("CHECKING :", this.temp)
  }
  displaySmileMessage() {
      console.log("Smile please :", this.hello)
    
  }
  getPetDetails() {
    var pets = [];
    var petTaha = { "name": "Taha", "color": "white", "age": 2 };
    var petZee = { "name": "Zee", "color": "Blue", "age": 12 };
    var petEbni = { "name": "Ebni", "color": "grey", "age": 8 };

    pets.push(petTaha);
    pets.push(petZee);
    pets.push(petEbni);

    return pets;
  }
  ngOnInit() {
  }

}
