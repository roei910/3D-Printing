import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UtilsService } from '../Services/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private userService: UserService, public utilsService: UtilsService){}

  signOut(){
    this.userService.signOut();
    this.utilsService.scrollUp()
  }
}
