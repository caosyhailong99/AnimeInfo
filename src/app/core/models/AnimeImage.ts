import { AnimeImageUrl } from "./AnimeImageUrl";

export class AnimeImage {
    private jpg: AnimeImageUrl;
    private webp: AnimeImageUrl;
    constructor(jpg_url: AnimeImageUrl, webp_url: AnimeImageUrl) {
        this.jpg = jpg_url;
        this.webp = webp_url;
    }

    getJpgUrl(): AnimeImageUrl {
        return this.jpg;
    }
}