import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginhideshow = false;




  loginhide() {
    this.loginhideshow = !this.loginhideshow
  }
}
