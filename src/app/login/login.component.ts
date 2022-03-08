import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import * as userActions from '../actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private postService: PostService, private router: Router,private authService :AuthService
    ,private store: Store<AppState>) { }

  allUserDetails: any = [];
  mobile: any; // check with this mobile or from api responses  --> 024-648-3804
  defaultMobile: number = 1234567890;
  defaultPassword : string = "1234";
  password: string = "";
  loggedInUserDetail :any;
  error: string =''

  ngOnInit(): void {}
  submit() {
    // if(this.defaultPassword === this.password ){
    //  let loggedInUser = this.allUserDetails.filter((user:any) => user.phone === this.mobile);
    //  if(loggedInUser.length > 0 ){
    //   this.loggedInUserDetail =  loggedInUser[0];
    //   this.error = false  
    //   this.store.dispatch(new userActions.AddUserEmail({email:this.loggedInUserDetail.email}))
    //   this.authService.setIsAuthenticated(true);
    //   this.router.navigate(['/post']) 
    //  }else{
    //   this.error = true  
    //  }
    // }

    if(this.mobile.length == 10 && this.password){
      this.error = "" 
      this.store.dispatch(new userActions.AddUserEmail({email:'test@gmail.com'}))
      this.authService.setIsAuthenticated(true);
      this.router.navigate(['/post']) 
    }else{
      this.error = "Something went wrong Please check again." 
    }
  }

}
