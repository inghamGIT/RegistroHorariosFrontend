import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  empleado = {
    username: '',
    pass: ''
  }
  user: string;
  userId: string;
  errorMsg = '';
  noExiste = 'No existe el usuario.';
  passErronea = 'Contraseña erronea.';

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => this.user = user)
  }

  login() {
    this.authService.login(this.empleado)
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
      )
  }

  getUser() {
    this.authService.getUser(this.empleado.username)
      .subscribe(
        res => {
          this.userId = res.datos._id
          this.authService.setIdUser(this.userId);
          this.router.navigate(['/profile', this.userId]);
        },
        err => {
          this.errorMsg = err.error.mensaje;
        }
      )
  }
}
