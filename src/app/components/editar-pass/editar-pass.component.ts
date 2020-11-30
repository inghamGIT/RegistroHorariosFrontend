import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-editar-pass',
  templateUrl: './editar-pass.component.html',
  styleUrls: ['./editar-pass.component.css']
})
export class EditarPassComponent implements OnInit {

  empleado = {
    oldpass: '',
    pass: '',
    confirm: ''
  };
  errorMsg = '';
  successMsg = '';
  noCoinciden = 'Contraseña erronea.';
  errConfirm = 'Las contraseñas no coinciden.';
  userId: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.authService.userId.subscribe(userId => this.userId = userId);
  }

  edit(): void {
    this.authService.updatePass(this.empleado, this.userId)
      .subscribe(
        res => {
          this.successMsg = res.accion;
        },
        err => {
          this.errorMsg = err.error.mensaje;
          console.log(this.errorMsg);
        }
      );
  }

  volver(): void {
      this.router.navigate(['/profile', this.userId]);
  }
}
