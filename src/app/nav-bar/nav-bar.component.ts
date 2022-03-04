import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as userActions from '../actions/user.actions';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userEmail :any ;

  constructor(private route : ActivatedRoute,
    private authService :AuthService,
    private router : Router,private store: Store<AppState>) {
      store.select('userStore').subscribe((email:any) => {
        this.userEmail = email.email;
      });
     }

  ngOnInit(): void { }

  logoutUser(){
    this.store.dispatch(new userActions.RemoveUserEmail())
    this.authService.setIsAuthenticated(false);
    this.router.navigate(['login'])
  }

}
