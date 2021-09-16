import { Component, OnInit } from '@angular/core';
import { IRooms } from 'src/app/interfaces/i-rooms';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public roomService: RoomsService) { }

  public rooms:IRooms[]=[];
  
  ngOnInit(): void {
    this.getRooms();
  }


  getRooms(){
    this.roomService.getAll().subscribe(data => {
      this.rooms=data;
    })
  }

}
