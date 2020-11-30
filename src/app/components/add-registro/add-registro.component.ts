import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-registro',
  templateUrl: './add-registro.component.html',
  styleUrls: ['./add-registro.component.css']
})
export class AddRegistroComponent implements OnInit {

  registro = {
    id: '',
    horaEntrada: '',
    horaSalida: '',
    fecha: undefined,
    user: '',
    descripcion: ''
  };
  errorMsg = '';
  successMsg = '';
  userId: string;
  update = false;

  constructor(
    private authService: AuthService,
    private registroService: RegistroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.userId.subscribe(userId => this.userId = userId);
    this.registroService.geyByDate(this.userId)
      .subscribe(
        res => {
          if (res.datos[0]) {
            this.update = true;
            this.registro = res.datos[0];
          }
        },
        err => {
          this.errorMsg = err.error;
        }
      );
  }

  add(): void {
    if (this.update) {
      this.registroService.updateRegistro(
      {
        horaEntrada: this.registro.horaEntrada,
        horaSalida: this.registro.horaSalida,
        fecha: new Date(),
        user: this.userId,
        descripcion: this.registro.descripcion
      },
      this.registro.id)
        .subscribe(
          res => {
            this.successMsg = res.accion;
          },
          err => {
            this.errorMsg = err.error;
          }
        );
    }
    else {
      this.registroService.addRegistro(
      {
        horaEntrada: this.registro.horaEntrada,
        horaSalida: this.registro.horaSalida,
        fecha: new Date(),
        user: this.userId,
        descripcion: this.registro.descripcion
      })
        .subscribe(
          res => {
            this.successMsg = res.accion;
          },
          err => {
            this.errorMsg = err.error;
          }
        );
    }
  }

  volver(): void {
    this.router.navigate(['/registro', this.userId]);
  }
}
