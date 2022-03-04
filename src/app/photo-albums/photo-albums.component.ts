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
  selectedLevel:any;
  selectedImage = new FormControl([]);
  filteredImage: string = ''
  searchValue: string = ''

  selected(){    
    console.log(this.selectedLevel)
  }
  ngOnInit(): void {
    this.postService.getPhotoAlbumn().subscribe((resp: any) => {
      this.allPhotoAlbums = resp?.splice(0, 10);
      this.albums = this.allPhotoAlbums;
    })
  }

  searchHandler(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    const res = this.allPhotoAlbums.filter((photo: any) => photo.title.substring(0, val.length) === val)
    console.log(res);
    this.completeDataList(event)
  }

  fillDataListIfEmpty(event: Event) {
    const inputTag = document.getElementById('languages') as HTMLInputElement;
    if (!inputTag.innerHTML) {
      // let event :Event  = {target : {}};
      this.completeDataList(event);
    }
  }
  completeDataList(e: Event) {
    const target = (e.target as HTMLInputElement);
    const inputTag = document.getElementById('languages') as HTMLInputElement;

    const fill = (val: any) => inputTag.innerHTML = val;
    if (!target.value) {
      fill(this.allPhotoAlbums.reduce((sum: any, [html]: any) => sum + html, ''));
    } else if (!(e instanceof InputEvent)) {
      target.blur();
    } else {
      const inputValue = target.value.toLowerCase();
      let result = '';
      for (const [html, valuePattern] of this.allPhotoAlbums) {
        if (!valuePattern.indexOf(inputValue)) {
          result += html;
        } else if (result) {
          break;
        }
      }
      fill(result);
    }
  }
  onKeydown(e : Event){
    const val = (e.target as HTMLInputElement).value;
    console.log(val);
  }

  getFilteredImage(event: any){
    this.filteredImage = event
    console.log(this.selectedImage);
    if(!this.selectedImage.value.length){
      this.allPhotoAlbums = this.albums
    }else{
      const res = this.allPhotoAlbums.filter((img: any) => img.id == this.selectedImage.value)
      this.allPhotoAlbums = res
    }
   
  }

  gettitle(event: any){
this.filteredImage = event.target.value
  }
}
