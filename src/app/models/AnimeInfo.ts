import { AnimeGenre } from "./AnimeGenre";
import { AnimeImage } from "./AnimeImage";
import { AnimeStudio } from "./AnimeStudio";
import { AnimeTrailer } from "./AnimeTrailer";

export class AnimeInfo {
    private id: number;
    private title: string;
    private images: AnimeImage;
    private genres: AnimeGenre[];
    private score!: number;
    private rating!: string;
    private rank!: number;
    private releaseDate!: string;
    private trailer!: AnimeTrailer;
    private studios!: AnimeStudio[];
    private status!: string;
    private episodes!: number;
    private duration!: string;
    private synopsis!: string;
    constructor(id: number, animeTitle: string, animeImages: AnimeImage, animeGenres: AnimeGenre[], animeScore?: number, animeRating?: string, animeRank?: number, animeReleaseDate?: string, animeStudios?: AnimeStudio[], animeTrailer?: AnimeTrailer, status?: string, episodes?: number, duration?: string, synopsis?: string) {
        this.id = id;
        this.title = animeTitle;
        this.images = animeImages;
        this.genres = animeGenres;
        if(animeTrailer)
            this.trailer = animeTrailer;
        if(animeScore)
            this.score = animeScore;
        if(animeRating)
            this.rating = animeRating;
        if(animeRank)
            this.rank = animeRank;
        if(animeReleaseDate)
            this.releaseDate = animeReleaseDate;
        if(animeStudios)
            this.studios = animeStudios;
        if(status)
            this.status = status;
        if(episodes)
            this.episodes = episodes;
        if(duration)
            this.duration = duration;
        if(synopsis)
            this.synopsis = synopsis;
    }
    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getImages(): AnimeImage {
        return this.images;
    }
    getGenres(): AnimeGenre[] {
        return this.genres;
    }
    getTrailer(): AnimeTrailer {
        return this.trailer;
    }
    getScore(): number {
        return this.score;
    }
    getRating(): string {
        return this.rating;
    }
    getRank(): number {
        return this.rank;
    }
    getReleaseDate(): string {
        return this.releaseDate;
    }
    getStudios(): AnimeStudio[] {
        return this.studios;
    }
}