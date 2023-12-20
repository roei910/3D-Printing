import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forum-template',
  templateUrl: './forum-template.component.html',
  styleUrls: ['./forum-template.component.css']
})
export class ForumTemplateComponent {
  @Input('messages')
  forumMessages!: string[];
}
