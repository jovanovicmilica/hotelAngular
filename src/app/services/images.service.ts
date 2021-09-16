import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IImages } from '../interfaces/i-images';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService extends ApiService<IImages> {

  constructor(public http: HttpClient) {
    super(apiPaths.images, http);
  }
}
