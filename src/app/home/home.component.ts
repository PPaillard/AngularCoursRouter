import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public studentName = "";

  constructor() { }

  navigateToStudent(){
    // navigation vers la route de l'étudiant contenu dans studentName
  }
}
