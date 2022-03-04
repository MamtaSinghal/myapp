import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../app.component.css']
})
export class PostComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}

  allPosts: any = []

  ngOnInit(): void {
    this.postService.getPosts().subscribe((resp: any) => {
      this.allPosts = resp?.splice(0, 10)      
    })
  }
  getPostDetail(post: any) {
    this.router.navigate(['/post-detail'], {
      queryParams: {
        postId: post.id
      }
    })
  }
}
