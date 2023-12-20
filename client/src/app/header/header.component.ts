import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UtilsService } from '../Services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isCollapsed: boolean = true;

  constructor(private userService: UserService, private utilsService: UtilsService){}

  userAuth(){
    return this.userService.isAuthenticated();
  }

  signOut(){
    this.userService.signOut();
    this.scrollUp();
  }

  scrollUp(){
    this.utilsService.scrollUp();
    this.isCollapsed = true;
  }
}
