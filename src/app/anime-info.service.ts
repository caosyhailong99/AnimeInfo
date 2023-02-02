import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, GET_TOP_ANIME_URL, GET_ANIME } from './constants/ConstantApi';
import { AnimeInfo } from './models/AnimeInfo';

@Injectable({
  providedIn: 'root'
})
export class AnimeInfoService {
  
  constructor(private http: HttpClient) { }

  getTopAnimes() {
    return this.http.get(API_URL + GET_TOP_ANIME_URL);
  }

  getAnimeById(id: string) {
    return this.http.get(API_URL + GET_ANIME + `/${id}`);
  }
}
