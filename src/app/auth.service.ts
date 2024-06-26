import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  login(Email: string, Password: string): Observable<any> {
    const post = {
      Host: this.apiUrl,
      path: '/usuarios/login',
      payload: {
        Email: Email,
        Password: Password
      }
    };
    return this.http.post<any>(`${this.apiUrl}${post.path}`, post.payload);
  }

}