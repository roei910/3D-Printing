import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  scrollUp(){
    window.scrollTo(window.scrollX, 0); // scroll up and left (y - vertical scroll, x - horizontal scroll)
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  getScrollY(){
    return window.scrollY;
  }
}
