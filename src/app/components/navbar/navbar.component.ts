import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: string;
  userId: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.user = user);
    this.authService.userId.subscribe(userId => this.userId = userId);
  }

  isLogged(): boolean {
    return this.authService.isLogged();
  }

  getUsername(): string {
    const username = localStorage.getItem('username');
    if (username) {
      return username;
    }
    else {
      return 'no estas logueado';
    }
  }

}
