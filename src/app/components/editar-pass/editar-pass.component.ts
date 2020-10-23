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
    pass: '',
    newPass: '',
    confirm: ''
  }
  errorMsg = '';
  successMsg = '';
  userId: string;
  regexPWD = '^[a-zA-Z0-9]{3,30}$';

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.authService.userId.subscribe(userId => this.userId = userId);
  }

  edit() {
    this.authService.updatePass(this.empleado, this.activatedRoute.snapshot.params.id)
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
