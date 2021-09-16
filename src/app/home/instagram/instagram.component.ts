import { Component, OnInit } from '@angular/core';
import { IInstagram } from 'src/app/interfaces/i-instagram';
import { InstagramService } from 'src/app/services/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  constructor(private instagramService: InstagramService) { }


  public instagram: IInstagram[]=[];


  ngOnInit(): void {
    this.getInstagram();
  }


  getInstagram(){
    this.instagramService.getAll().subscribe(data => {
      this.instagram=data;
    })
  }

}
