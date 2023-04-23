export class AnimeGenre {
    private mal_id: number;
    private name: string;
    private type: string;
    private url: string;
    constructor(genre_id: number, genre_name: string, genre_type: string, genre_url: string) {
        this.mal_id = genre_id;
        this.name = genre_name;
        this.type = genre_type;
        this.url = genre_url;
    }
    getName(): string {
        return this.name;
    }
}