import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { UtilsService } from './Services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'R3D';
  @ViewChild('scrollButton')
  scrollButton!: ElementRef;

  constructor(public utilsService: UtilsService, private renderer: Renderer2){}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any){
    if(window.scrollY >= 10){
      this.renderer.setStyle(this.scrollButton.nativeElement, 'display', 'block');
    }
    else{
      this.renderer.setStyle(this.scrollButton.nativeElement, 'display', 'none');
    }
  }
}
