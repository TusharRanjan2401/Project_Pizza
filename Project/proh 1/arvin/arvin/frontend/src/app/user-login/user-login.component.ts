// user-login.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http.post<any>('http://localhost:3000/login', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
