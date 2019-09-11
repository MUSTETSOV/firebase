import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

    constructor(private service:ImageService) { }
  
    ngOnInit() {
      this.service.getImageDetailList();
    }
  
  }