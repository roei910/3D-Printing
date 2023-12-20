import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-print-tok',
  templateUrl: './print-tok.component.html',
  styleUrls: ['./print-tok.component.css']
})
export class PrintTokComponent {
  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;
  videos!: string[];
  currentVideo!: number;

  constructor(private databaseService: DatabaseService){
    this.videos = this.databaseService.getAllVideos();
    this.currentVideo = 0;
  }

  nextVideo(){
    if(this.currentVideo === this.videos.length-1)
      this.currentVideo = 0;
    else
      this.currentVideo++;
    (this.videoPlayer.nativeElement as HTMLVideoElement).load()
  }

  prevVideo(){
    if(this.currentVideo === 0)
      this.currentVideo = this.videos.length-1;
    else
      this.currentVideo--;
    (this.videoPlayer.nativeElement as HTMLVideoElement).load()
    }
}
