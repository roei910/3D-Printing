import { Component } from '@angular/core';
import { Slide } from 'src/app/Models/slide';
import { DatabaseService } from 'src/app/Services/database.service';
import { UtilsService } from 'src/app/Services/utils.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  printerSlides!: Slide[];
  productSlides!: Slide[];

  constructor(private databaseService: DatabaseService, private utilsService: UtilsService){
    this.productSlides = this.databaseService.getAllProducts().slice(0, 3).map(product => {
      let img = product.images[0];
      return {
        src: img.src,
        alt: img.alt,
        caption: product.name
      }
    });

    this.printerSlides = this.databaseService.getAllPrinters().slice(0, 3).map(printer => {
      return {
        src: printer.image.src,
        alt: printer.image.alt,
        caption: printer.name
      }
    })
  }

  scrollUp(){
    this.utilsService.scrollUp();
  }
}
