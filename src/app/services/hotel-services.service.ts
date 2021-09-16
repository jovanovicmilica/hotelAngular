import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IServices } from '../interfaces/i-services';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HotelServicesService extends ApiService<IServices> {

  constructor(public http: HttpClient) {
    super(apiPaths.services, http);
  }
}
