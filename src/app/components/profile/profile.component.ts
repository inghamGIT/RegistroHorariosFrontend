import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  empleado = {
    id: '',
    nomEmp: '',
    apeEmp: '',
    username: '',
    email: ''
  }

  userId: string;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.userId.subscribe(userId => this.userId = userId)
    this.authService.getUserById(this.activatedRoute.snapshot.params.id)
    .subscribe(
      res => {
        this.empleado = res['datos'];
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

  editUser() {
    this.router.navigate(['/update', this.userId]);
  }

  editPassword() {
    this.router.navigate(['/setpassword', this.userId]);
  }


}
