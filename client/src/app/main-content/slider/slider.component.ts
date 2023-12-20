import { Component, Input } from '@angular/core';
import { Slide } from '../../Models/slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input()
  slides!: Slide[];

  slideIndex: number = 0;

  plusSlides(n: number) {
    let tempNumber = this.slideIndex + n;
    if(tempNumber < this.slides.length && tempNumber >= 0)
      this.slideIndex += n;
    if(tempNumber >= this.slides.length)
      this.slideIndex = 0;
    if(tempNumber < 0)
      this.slideIndex = this.slides.length-1;

    // need to add fade class to create animation for fade away
  }
  
  currentSlide(n: number) {
    this.slideIndex = n;
  }
}
