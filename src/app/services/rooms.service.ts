import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IRooms } from '../interfaces/i-rooms';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService extends ApiService<IRooms> {

  constructor(public http: HttpClient) {
    super(apiPaths.rooms, http);
  }
}
