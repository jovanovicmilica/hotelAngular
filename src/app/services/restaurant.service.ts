import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IRestaurant } from '../interfaces/i-restaurant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends ApiService<IRestaurant> {

  constructor(public http: HttpClient) { 
    super(apiPaths.restaurant, http);
  }
}
