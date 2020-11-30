import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000';
  private userSource = new BehaviorSubject<string>('');
  private userIdSource = new BehaviorSubject<string>('');
  currentUser = this.userSource.asObservable();
  userId = this.userIdSource.asObservable();

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  setCurrentUser(user: string): void {
    this.userSource.next(user);
  }

  setIdUser(id: string): void {
    this.userIdSource.next(id);
  }

  signup(empleado): any {
    return this.httpClient.post<any>(this.url + '/auth/signup', empleado);
  }

  login(empleado): any {
    return this.httpClient.post<any>(this.url + '/auth/login', empleado)
      .pipe(catchError(this.errorHandler));
  }

  update(empleado, id: string): any {
    return this.httpClient.put<any>(this.url + '/empleados/empleado/' + id, empleado);
  }

  updatePass(empleado, id: string): any {
    return this.httpClient.put<any>(this.url + '/empleados/pass/' + id, empleado);
  }

  getUser(username: string): any {
    return this.httpClient.get<any>(this.url + '/empleados/username/' + username);
  }

  getUserById(id: string): any {
    return this.httpClient.get<any>(this.url + '/empleados/' + id);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.setCurrentUser('');
    this.setIdUser('');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  errorHandler(error: HttpErrorResponse): any {
    return throwError(error);
  }
}
