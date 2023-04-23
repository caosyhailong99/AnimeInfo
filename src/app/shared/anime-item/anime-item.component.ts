import { Component, OnInit, Input } from '@angular/core';
import { AnimeGenre } from 'src/app/core/models/AnimeGenre';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {
  @Input()
  animePictureSrc: string = '';
  @Input()
  animeName: string = '';
  @Input()
  animeGenres: AnimeGenre[] = [];
  genresString: string = ''
  constructor() { }

  ngOnInit(): void {
    let genreArray: string[] = [];
    for(let genre of this.animeGenres)
      genreArray.push(genre.getName());
    this.genresString = genreArray.join(',');
  }

}
