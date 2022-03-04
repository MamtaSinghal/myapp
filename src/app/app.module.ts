import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { reducer, metaReducers } from './reducers/user.reducer';
import {  ActionReducer, StoreModule, MetaReducer } from '@ngrx/store';


export const metaReducer:MetaReducer<any>[] = []
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
    NavBarComponent,
    PostDetailComponent,
    PhotoAlbumsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      userStore: (reducer) as any 
    })
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
