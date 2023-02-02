export class AnimeTrailer {
    private youtube_id: string;
    private embed_url: string;
    private image_url: string;

    constructor(id: string, embed: string, image: string) {
        this.youtube_id = id;
        this.embed_url = embed;
        this.image_url = image;
    }

    getEmbedUrl(): string {
        return this.embed_url;
    }

    getImageUrl(): string {
        return this.image_url;
    }
}