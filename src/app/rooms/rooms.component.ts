import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRooms } from '../interfaces/i-rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private roomService: RoomsService,private router : Router) { }

  
  public rooms: IRooms[]=[];

  public numbers=[1,2,3,4,5];

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(){
    this.roomService.getAll().subscribe(data => {
      if(this.router.url=="/"){
        this.rooms=data.slice(0,4);
      }
      else{
        this.rooms = data;
      }
    })
  }

}
