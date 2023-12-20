import { Component } from '@angular/core';

@Component({
  selector: 'app-general-talk',
  templateUrl: './general-talk.component.html',
  styleUrls: ['./general-talk.component.css']
})
export class GeneralTalkComponent {
  messages: string[] = [
    'i love 3d printing',
    'i print everything i want and use it daily'
  ];
}
