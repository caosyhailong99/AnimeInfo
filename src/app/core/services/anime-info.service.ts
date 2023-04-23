import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL, GET_ANIME_URL, GET_SEARCH_ANIME_URL, GET_TOP_ANIME_URL } from '../constants/ConstantApi';

@Injectable({
  providedIn: 'root'
})
export class AnimeInfoService {
  
  constructor(private http: HttpClient) { }

  getTopAnimes() {
    return this.http.get(API_URL + GET_TOP_ANIME_URL);
  }

  getAnimeById(id: string) {
    return this.http.get(API_URL + GET_ANIME_URL + `/${id}`);
  }

  getSearchedAnime(id: string) {
    id = id.trim();
    const options = id ? {
      params: new HttpParams().set("q", id)
    } : {};
    return this.http.get(GET_SEARCH_ANIME_URL, options);
  }
}
