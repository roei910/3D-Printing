import { Component } from '@angular/core';

@Component({
  selector: 'app-printer-issues',
  templateUrl: './printer-issues.component.html',
  styleUrls: ['./printer-issues.component.css']
})
export class PrinterIssuesComponent {
  messages: string[] = [
    'first layer not sticking to bed',
    'excessive stringing'
  ];
}
