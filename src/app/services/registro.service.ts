import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url = 'http://localhost:3000';
  private username: string;

  constructor(private httpClient: HttpClient) { }

  /*getAll() {
    return this.httpClient.get<any>(this.url + '/registros');
  }

  getById() {
    return this.httpClient.get<any>(this.url + '/registros/5f6f9e5739835905b88dddc5');
  }*/

  geyByDate(userId: string): any {
    return this.httpClient.get<any>(this.url + '/registros/date/' + userId);
  }

  getByUserId(userId: string): any {
    return this.httpClient.get<any>(this.url + '/registros/user/' + userId);
  }

  getByWeek(userId: string): any {
    return this.httpClient.get<any>(this.url + '/registros/week/' + userId);
  }


  addRegistro(registro): any {
    return this.httpClient.post<any>(this.url + '/registros', registro);
  }

  updateRegistro(registro, id: string): any {
    return this.httpClient.put<any>(this.url + '/registros/' + id, registro);
  }
}
