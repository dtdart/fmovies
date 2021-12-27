import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fmovies';
  currentUser = true;
  constructor( private router: Router){
    this.router = router;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
