import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeInfoService } from 'src/app/anime-info.service';
import { AnimeGenre } from 'src/app/models/AnimeGenre';
import { AnimeImage } from 'src/app/models/AnimeImage';
import { AnimeImageUrl } from 'src/app/models/AnimeImageUrl';
import { AnimeInfo } from 'src/app/models/AnimeInfo';
import { AnimeStudio } from 'src/app/models/AnimeStudio';
import { AnimeTrailer } from 'src/app/models/AnimeTrailer';

@Component({
  selector: 'app-anime-info-screen',
  templateUrl: './anime-info-screen.component.html',
  styleUrls: ['./anime-info-screen.component.scss']
})
export class AnimeInfoScreenComponent implements OnInit {
  animeInfo!: AnimeInfo;
  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeInfoService
  ) { }
  trailerImage!: string;
  posterImage!: string;
  score!: number;
  rating!: string;
  rank!: number;
  title!: string;
  genres!: string;
  releaseDate!: string;
  studios!: string;
  status!: string;
  episodes!: number;
  duration!: string;
  synopsis!: string;

  ngOnInit() {
    let animeId: string = '';
    this.route.queryParams.subscribe(params => {
      animeId = params.id;
    });
    this.getAnimeDetails(animeId);
  }

  onClickOpen() {
    let modal = document.getElementById('modal');
    modal!.style.display = 'block';
    let closeButton = document.getElementsByClassName('close-button') as HTMLCollectionOf<HTMLElement>;
    closeButton[0].style.display = 'block';
    let iframe = document.getElementById('trailer-video') as HTMLIFrameElement;
    let trailer = this.animeInfo.getTrailer();
    let trailerSrc = '';
    if (trailer)
      trailerSrc = trailer.getEmbedUrl();
    iframe.contentWindow!.location.replace(trailerSrc);
  }

  getAnimeDetails(id: string) {
    this.animeService.getAnimeById(id).subscribe((obj: any) => {
      let data = obj.data;
      // id and title
      let id: number = data.mal_id;
      let title: string = data.title;
      // anime image
      let jpg: AnimeImageUrl = new AnimeImageUrl(data.images.jpg.image_url as string, data.images.jpg.large_image_url as string, data.images.jpg.small_image_url as string);
      let webp: AnimeImageUrl = new AnimeImageUrl(data.images.webp.image_url as string, data.images.webp.large_image_url as string, data.images.webp.small_image_url as string);
      let images: AnimeImage = new AnimeImage(jpg, webp);
      // anime genre
      let genres: AnimeGenre[] = [];
      let dataGenre = data.genres;
      for(let item of dataGenre) {
        let genre: AnimeGenre = new AnimeGenre(item.mal_id as number, item.name as string, item.type as string, item.url as string);
        genres.push(genre);
      }
      // score, rating, rank
      let score = data.score;
      let rating = data.rating;
      let rank = data.rank
      // Release date
      let dateObj = data.aired.prop.from;
      let releaseDate = [dateObj["day"], dateObj["month"], dateObj["year"]].join("/");
      // Studios
      let studioArr = data.studios;
      let studioObjs: AnimeStudio[] = [];
      let studioNames: string[] = [];
      for(let studio of studioArr) {
        studioObjs.push(new AnimeStudio(studio.mal_id, studio.type, studio.name, studio.url));
        studioNames.push(studio.name);
      }
      // anime trailer
      let trailer: AnimeTrailer = new AnimeTrailer(data.trailer.youtube_id as string, data.trailer.embed_url as string, data.trailer.images.maximum_image_url as string);
      
      this.trailerImage = trailer.getImageUrl();
      // status
      let status = data.status;
      // episodes
      let episodes = data.episodes;
      // duration
      let duration = data.duration;
      // synopsis
      let synopsis = data.synopsis;

      this.animeInfo = new AnimeInfo(id, title, images, genres, score, rating, rank, releaseDate, studioObjs, trailer, status, episodes, duration);
      this.title = title;
      this.posterImage = jpg.getImageUrl();
      let genresNameArray = [];
      for(let item of genres) {
        genresNameArray.push(item.getName());
      }
      this.genres = genresNameArray.join(", ");
      this.score = score;
      this.rating = rating;
      this.rank = rank;
      this.releaseDate = [dateObj["day"], dateObj["month"], dateObj["year"]].join("/");
      this.studios = studioNames.join(", ");
      this.status = status;
      this.episodes = episodes;
      this.duration = duration;
      this.synopsis = synopsis;
    });
  }

  onHoverPlayButton() {
    let overlay = document.querySelector<HTMLDivElement>(".overlay");
    overlay!.style.opacity = "1";
  }

  onLeavePlayButton() {
    let overlay = document.querySelector<HTMLDivElement>(".overlay");
    overlay!.style.opacity = "0";
  }
}
