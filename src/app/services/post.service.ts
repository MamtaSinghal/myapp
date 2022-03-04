import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    let url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get<any>(url)
  }  

  getPostById(postId:any):Observable<any>{
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.http.get<any>(url)
  }

  getPhotoAlbumn():Observable<any>{
    let url = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get<any>(url);
  }

  loginUser():Observable<any>{
    let url ="https://jsonplaceholder.typicode.com/users";
    return this.http.get<any>(url);
  }
}
