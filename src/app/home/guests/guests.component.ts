import { Component, OnInit } from '@angular/core';
import { IGuests } from 'src/app/interfaces/i-guests';
import { GuestsService } from 'src/app/services/guests.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  constructor(private guestsService: GuestsService) { }

  public guests: IGuests[]=[];

  public numbers=[1,2,3,4,5];

  ngOnInit(): void {
    this.getGuests();
  }
  getGuests(){
    this.guestsService.getAll().subscribe(data => {
      this.guests = data;
    })
  }

}
