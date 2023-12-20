import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Printer } from 'src/app/Models/printer';
import { DatabaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-printer-detail',
  templateUrl: './printer-detail.component.html',
  styleUrls: ['./printer-detail.component.css']
})
export class PrinterDetailComponent implements OnInit {
  currentPrinter!: Printer;
  printerId!: number;

  constructor(private databaseService: DatabaseService, private activeRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.printerId = this.activeRoute.snapshot.params['printer_id'];
    this.currentPrinter = this.databaseService.getAllPrinters()[this.printerId];
  }

}
