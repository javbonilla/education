import { Component } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    console.log('onLogout()');
    this.authService.logout();

    // And redirect to Auth
    this.router.navigateByUrl('/auth');
  }
}
