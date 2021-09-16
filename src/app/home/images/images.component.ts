import { Component, OnInit } from '@angular/core';
import { IImages } from 'src/app/interfaces/i-images';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImagesService) { }

  public images: IImages[]=[];


  ngOnInit(): void {
    this.getInstagram();
  }


  getInstagram(){
    this.imageService.getAll().subscribe(data => {
      this.images=data;
    })
  }

}
