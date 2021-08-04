import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:3000/users';
  constructor(private httpCliente: HttpClient) { }

  getUsers() {
    return this.httpCliente.get(`${this.url}`);
  }

  getUser(id: string) {
    return this.httpCliente.get(`${this.url}/${id}`);
  }

  createUser(user: Users) {
    return this.httpCliente.post(`${this.url}`, user);
  }

  updateUser(id: string|number, user: Users): Observable<Users> {
    return this.httpCliente.put(`${this.url}/${id}`, user);
  }

  deleteUser(id: string) {
    return this.httpCliente.delete(`${this.url}/${id}`);
  }
}
