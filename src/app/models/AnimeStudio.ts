export class AnimeStudio {
    private mal_id;
    private type;
    private name;
    private url;

    constructor(animeId: number, animeType: string, animeName: string, animeUrl: string) {
        this.mal_id = animeId;
        this.type = animeType;
        this.name = animeName;
        this.url = animeUrl;
    }
}