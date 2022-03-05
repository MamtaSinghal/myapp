import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['../app.component.css']
})
export class PhotoAlbumsComponent implements OnInit {
  constructor(private postService: PostService) { }

  allPhotoAlbums: any = [];
  albums:any = []
  albumTitle:string=""

  ngOnInit(): void {
    this.postService.getPhotoAlbumn().subscribe((resp: any) => {
      this.allPhotoAlbums = resp?.splice(0, 10);
      this.albums = this.allPhotoAlbums;
    })
  }
  getFilteredImage(event: any){
    const value = (event.target as HTMLInputElement).value;
    let albumData = this.allPhotoAlbums.find((album:any) => album?.title === value);
    if(!albumData){
      this.allPhotoAlbums = this.albums
    }else{
      const res = this.allPhotoAlbums.filter((img: any) => img.id == albumData.id)
      this.allPhotoAlbums = res
    }
  }
}
