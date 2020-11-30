import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registros-weekly',
  templateUrl: './registros-weekly.component.html',
  styleUrls: ['./registros-weekly.component.css']
})
export class RegistrosWeeklyComponent implements OnInit {

  registro;
  userId: string;

  constructor(
    private authService: AuthService,
    private registroService: RegistroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.authService.userId.subscribe(userId => this.userId = userId);
    this.registroService.getByWeek(this.userId)
    .subscribe(
      res => {
        this.registro = res.datos;
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
          if (err.status === 500) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }
}
