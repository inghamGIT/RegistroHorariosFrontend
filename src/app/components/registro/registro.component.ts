import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registros;

  constructor(
    private registroService: RegistroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.registroService.getByUserId(this.activatedRoute.snapshot.params.id)
    .subscribe(
      res => {
        this.registros = res['datos'];
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
