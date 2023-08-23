import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated: boolean = false;

  constructor() { }

  login() {
    console.log('login()');
    this._userIsAuthenticated = true;
  }

  logout() {
    console.log('logout()');
    this._userIsAuthenticated = false;
  }

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
}
