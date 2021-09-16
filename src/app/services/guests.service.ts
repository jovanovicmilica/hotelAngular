import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IGuests } from '../interfaces/i-guests';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GuestsService extends ApiService<IGuests> {

  constructor(public http: HttpClient) {
    super(apiPaths.guests, http);
  }
}
