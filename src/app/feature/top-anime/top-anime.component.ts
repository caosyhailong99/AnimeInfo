import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimeGenre } from 'src/app/core/models/AnimeGenre';
import { AnimeImage } from 'src/app/core/models/AnimeImage';
import { AnimeImageUrl } from 'src/app/core/models/AnimeImageUrl';
import { AnimeInfo } from 'src/app/core/models/AnimeInfo';
import { AnimeInfoService } from 'src/app/core/services/anime-info.service';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.scss']
})
export class TopAnimeComponent implements OnInit {
  topAnimeList: AnimeInfo[] = [];
  constructor(
    private animeService: AnimeInfoService,
    private router: Router
    ) { }

  async ngOnInit() {
    await this.getTopAnimeList();
  }

  async getTopAnimeList() {
    this.animeService.getTopAnimes().subscribe({
      next: (data: any) => {
        for(let item of data.data) {
          let image = item.images;
          let jpg_url: AnimeImageUrl = new AnimeImageUrl(image.jpg.image_url as string, image.jpg.large_image_url as string, image.jpg.small_image_url as string);
          let webp_url: AnimeImageUrl = new AnimeImageUrl(image.webp.image_url as string, image.webp.large_image_url as string, image.webp.small_image_url as string);
          let animeImage: AnimeImage = new AnimeImage(jpg_url, webp_url);
          let genres = item.genres;
          let animeGenres: AnimeGenre[] = [];
          for(let genre_item of genres) {
            animeGenres.push(new AnimeGenre(genre_item.mal_id as number, genre_item.name as string, genre_item.type as string, genre_item.url as string));
          }
          this.topAnimeList.push(new AnimeInfo(item.mal_id as number, item.title as string, animeImage, animeGenres));
        }
        console.log(this.topAnimeList);
      },
      error(err) {
        console.log(`Oh boy, there's an error: ${err}`);
      },
      complete() {
        console.log("My job has done.");
      },
    });
  }

  onClickAnime(animeId: number) {
    this.router.navigate(["anime-info"], {queryParams: {id: animeId}});
  }
}
