export class AnimeImageUrl {
    private image_url: string;
    private large_image_url: string;
    private small_image_url: string;
    constructor(url: string, large_url: string, small_url: string) {
        this.image_url = url;
        this.large_image_url = large_url;
        this.small_image_url = small_url;
    }
    getImageUrl(): string {
        return this.image_url;
    }
}