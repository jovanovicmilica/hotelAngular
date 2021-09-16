import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../interfaces/i-restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }

  
  public restaurant: IRestaurant[]=[];

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(){
    this.restaurantService.getAll().subscribe(data => {
      this.restaurant = data;
    })
  }
}
