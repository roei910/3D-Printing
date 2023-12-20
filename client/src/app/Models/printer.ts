import { Image } from "./image";
import { Slide } from "./slide";

export class Printer {
    name!: string;
    shortDescription!: string;
    image!: Image;
    upgrades!: {name: string, image: Image, link: string}[];
    slides?: Slide[];
}
