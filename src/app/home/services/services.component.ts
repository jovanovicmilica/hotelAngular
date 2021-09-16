import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/interfaces/i-services';
import { HotelServicesService } from 'src/app/services/hotel-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private serviceService: HotelServicesService) { }

  public services: IServices[]=[];


  ngOnInit(): void {
    this.getInstagram();
  }


  getInstagram(){
    this.serviceService.getAll().subscribe(data => {
      this.services=data;
    })
  }

}
