import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated:any;

  public isRouteAuthenticated():boolean{
    return this.isAuthenticated;
  }

  public setIsAuthenticated(isAuth:boolean):void{
    this.isAuthenticated = isAuth;
  }

}
