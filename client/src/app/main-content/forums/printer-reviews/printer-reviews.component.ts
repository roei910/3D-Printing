import { Component } from '@angular/core';

@Component({
  selector: 'app-printer-reviews',
  templateUrl: './printer-reviews.component.html',
  styleUrls: ['./printer-reviews.component.css']
})
export class PrinterReviewsComponent {
  messages: string[] = [
    'ender-3 v2 - best printer for the price, slow printing but works well',
    'creality k1 - great printer, very fast, bad firmware by creality - root is a must'
  ];
}
