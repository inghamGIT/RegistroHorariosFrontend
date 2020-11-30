import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  empleado = new Empleado('', '', '', '', '', '');
  errorMsg = '';
  yaExiste = 'Ya existe un usuario con ese nombre de usuario.';
  user: string;
  userId: string;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.user = user);
  }

  signup(): void {
    this.authService.signup(this.empleado)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.authService.setCurrentUser(this.empleado.username);
          this.getUser();
          localStorage.setItem('username', this.empleado.username);
        },
        err => {
          this.errorMsg = err.error.mensaje;
        }
      );
  }

  getUser(): void {
    this.authService.getUser(this.empleado.username)
      .subscribe(
        res => {
          this.userId = res.datos._id;
          this.authService.setIdUser(this.userId);
          this.router.navigate(['/profile', this.userId]);
        },
        err => {
          this.errorMsg = err.error.mensaje;
        }
      );
  }
}
