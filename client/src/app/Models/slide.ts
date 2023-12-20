export class Slide {
    src: string;
    alt: string;
    caption: string;

    constructor(src: string, alt: string, caption: string) {
        this.src = src;
        this.alt = alt;
        this.caption = caption;
    }
}
