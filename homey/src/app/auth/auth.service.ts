import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/user';
import { tap } from 'rxjs/operators';
const apiURL = environment.ApiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser | undefined | null = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }
  
  constructor(private http: HttpClient) { }

  login(data: { email: string, password: string }) {
    return this.http.post<IUser>(`${apiURL}/auth/login`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  register(data: { email: string, password: string, username: string }) {
    return this.http.post<IUser>(`${apiURL}/auth/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  logout() {

  }
}
