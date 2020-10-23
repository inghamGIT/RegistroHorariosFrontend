import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  empleado = {
    nomEmp: '',
    apeEmp: '',
    username: '',
    email: ''
  }
  errorMsg = '';
  successMsg = '';
  userId: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.authService.userId.subscribe(userId => this.userId = userId)
  }

  edit() {
    this.authService.update(this.empleado, this.activatedRoute.snapshot.params.id)
      .subscribe(
        res => {
          this.successMsg = res.accion;
        },
        err => {
          this.errorMsg = err.error;
        }
      )
  }

  volver() {
      this.router.navigate(['/profile', this.userId]);
  
  }
}

