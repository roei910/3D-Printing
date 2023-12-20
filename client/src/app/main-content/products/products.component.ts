import { Attribute, Component, Renderer2 } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { DatabaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProjectsComponent {
  products!: Product[];

  constructor(private _dataService: DatabaseService, private renderer: Renderer2){
    this.products = this._dataService.getAllProducts();
  }

  confirmNewWindow(link: string, event: Event) {
    // event.preventDefault();
    let answer = confirm('Would you like to open the link in a new window?');
    if(answer){
      window.open(link, '_blank');
      return false;
    } 
    return true;
  }
}
