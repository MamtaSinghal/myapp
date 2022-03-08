import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit {
  
  albumTitle!: string ;
  selectedIdx: number = 0;
  viewFirstSug: number = 0;
  show: boolean = false;
  form = new FormGroup({
    search: new FormControl()
  });
  inputVal:string=""
  searchControl: FormControl;

 @Input() allPhotoAlbums!:any
 @Input() albums: any
  constructor(private postService: PostService, @Inject(DOCUMENT) document: Document,elementRef: ElementRef, public route: ActivatedRoute,public cd: ChangeDetectorRef) { 
      this.searchControl = <FormControl>this.form.controls["search"];
  }

  ngOnInit(): void {}

   showList(value : any){
      this.show= value;
      // console.log("input",this.inputVal, value , this.albums);
   }

  getFilteredImage(value: any) {
    const albums = this.albums.filter((album: any) =>album.title.startsWith(value))   
    if(albums.length > 0){
      this.allPhotoAlbums = albums;
    }else{
      this.allPhotoAlbums = []
    }
  }

  public keydownHandlers(event: any,property:string, viewSize: number) {
    let code: string = event.code || event.keyIdentifier; 
    const value =(event.target as HTMLInputElement).value;

    if ((code === "ArrowDown" || code === "ArrowUp" || code === "Down" || code === "Up") && (this.allPhotoAlbums.length > 0)){
      this._selectionHandler(event,property, viewSize);
    } else if (code === "Enter" && this.inputVal.length) {
      this.getFilteredImage(value)
    }else if(code === "Enter" && !this.inputVal){
      this.allPhotoAlbums = this.albums
    }else{
      this.getFilteredImage(value)
    }
  }
  
  keydownHandler(event: any) {
    const value =(event.target as HTMLInputElement).value;
    this.show= true;
    console.log("app",this.albumTitle);

    this.inputVal = value;
    if (this.allPhotoAlbums.length > 0) {
      this.keydownHandlers(event,'title',this.allPhotoAlbums.length);
    }
  }

  public _selectionHandler(event: any,property:string, viewSize: number) {
    let code: string = event.code || event.keyIdentifier;
    if ((code == "ArrowDown" || code == "Down") && this.selectedIdx < this.allPhotoAlbums.length ) {
      this.selectedIdx++;
      if (this.selectedIdx == this.allPhotoAlbums.length ) {
        this.selectedIdx = 0;
        this.viewFirstSug = 0;
      } else if (this.selectedIdx > this.viewFirstSug + viewSize - 1) {
        this.viewFirstSug++;
      }
      this._updateModel(this.allPhotoAlbums[this.selectedIdx][property]);
    } else if ((code == "ArrowUp" || code == "Up")&& this.selectedIdx >= 0) {
      this.selectedIdx--;
      if (this.selectedIdx < 0) {
        this.selectedIdx = this.allPhotoAlbums.length - 1;
        this.viewFirstSug =this.allPhotoAlbums.length - viewSize;
      } else if (this.selectedIdx < this.viewFirstSug) {
        this.viewFirstSug--;
      }
      this._updateModel(this.allPhotoAlbums[this.selectedIdx][property]);
    }
  }

  public _updateModel(value: string) {
    this.inputVal = value;
    (<FormControl>this.searchControl).setValue(value, { emitEvent: false });
  }
}
