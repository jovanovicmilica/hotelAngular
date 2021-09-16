import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IInstagram } from '../interfaces/i-instagram';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InstagramService extends ApiService<IInstagram> {

  constructor(public http: HttpClient) {
    super(apiPaths.instagram, http);
  }
}
