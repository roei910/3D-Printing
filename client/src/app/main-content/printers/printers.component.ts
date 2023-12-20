import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/Services/database.service';
import { Printer } from 'src/app/Models/printer';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.css']
})
export class PrintersComponent {
  printers: Printer[];

  constructor(private dataService: DatabaseService){
    this.printers = this.dataService.getAllPrinters();
  }
}
