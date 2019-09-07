import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {

  imgSrc: string = '/src/assets/img/image_placeholder.jpg';
  selectedImage: any = null;

  formTemplate = new FormGroup ({
    caption: new FormControl(''),
    category: new FormControl(''),
    imageUrl: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }


  showPreview(event: any) {
    if(event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];

    } else {
      this.imgSrc = '/src/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

}
