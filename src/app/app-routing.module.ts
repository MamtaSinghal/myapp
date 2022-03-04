import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent },
  { path: 'post-detail',canActivate: [AuthGuardService],component: PostDetailComponent },
  { path: 'album',canActivate: [AuthGuardService],component: PhotoAlbumsComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
