import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRooms } from '../interfaces/i-rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-one-room',
  templateUrl: './one-room.component.html',
  styleUrls: ['./one-room.component.css']
})
export class OneRoomComponent implements OnInit {

  constructor(private route : ActivatedRoute,private roomService: RoomsService) { }

  public room:IRooms[]=[];

  public numbers=[1,2,3,4,5];



  ngOnInit(): void {
    this.getRoom();
  }

  getRoom(){
    this.roomService.getAll().subscribe(data => {
        this.room = data.filter(x=>x.id==this.route.snapshot.params['id']);
    })
  }

}
