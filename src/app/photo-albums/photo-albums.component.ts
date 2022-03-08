import { Component, Input, OnInit} from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['../app.component.css']
})
export class PhotoAlbumsComponent implements OnInit {

  constructor(private postService: PostService) {
    this.postService.getPhotoAlbumn().subscribe((resp: any) => {
      this.allPhotoAlbums = resp?.splice(0, 10);
      this.albums = this.allPhotoAlbums;
    })
   }

  allPhotoAlbums: any = [];
  albums: any = []
  albumTitle: string = ""


  ngOnInit(): void {   
  
  }

  // getFilteredImage(event: any){       ---previous
  //   const value = (event.target as HTMLInputElement).value;
  //   let albumData = this.allPhotoAlbums.find((album:any) => album?.title === value);
  //   if(!albumData){
  //     this.allPhotoAlbums = this.albums
  //   }else{
  //     const res = this.allPhotoAlbums.filter((img: any) => img.id == albumData.id)
  //     this.allPhotoAlbums = res
  //   }
  // }
  // getFilteredImage(value: any) {        ----new
  //   const albums = this.allPhotoAlbums.filter((album: any) =>album.title.startsWith(value))
  //   if(albums.length > 0){
  //     this.allPhotoAlbums = albums;
  //   }else{
  //     this.allPhotoAlbums = []
  //   }
  // }

  handleClickInput() {
    console.log("Ad");
    var x = document.getElementById("wrapper") as HTMLElement;
    x.style.display = "block"
    document.getElementById("inputField")?.addEventListener("keyup", (event) => {
      const target = (event.target as HTMLInputElement);
      
      console.log(target, event.key, event.keyCode)
      if(event.keyCode == 40){
       //down

      }else if(event.keyCode == 38){
        //up
      }
      if (!target.value) {
        x.style.display = "none";
      } else {
        x.style.display = "block"
      }
    });
    document.getElementById("myElementID")?.addEventListener("click", (e) => {
      const target = (e.target as HTMLInputElement);
      console.log(target.id);
    })
  }

}
