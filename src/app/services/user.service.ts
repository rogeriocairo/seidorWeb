import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // incluir(data: ClienteCreate) {
  //   data.loginUsuarioInclusao = this.authorizationService.getLogin();
  //   return this.http.post<RequestResponse>(
  //     `${environment.apiUrl}/${this.controller}/incluir`,
  //     data
  //   );
  // }

  login(data: Users) {
    return this.http.post<Users>('https://localhost:7205/Home/Login', data);
  }

  getUsuarios() {
    return this.http.get<Usuario[]>('https://localhost:7205/Home/ListarUsuarios');
  }
}
