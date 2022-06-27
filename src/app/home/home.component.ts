import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public studentName = "";

  constructor(private router : Router) { }

  navigateToStudent(){
    // navigation vers la route de l'étudiant contenu dans studentName
    this.router.navigate(["/student", this.studentName]);
  }
}
