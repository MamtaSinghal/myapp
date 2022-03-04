import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['../app.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute) { }
  postId :any;
  postDetail:any;

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.postId = params['postId'];
      }
    );
    this.postService.getPostById(this.postId).subscribe((resp : any) =>{
     this.postDetail = resp
    })
  }

}


