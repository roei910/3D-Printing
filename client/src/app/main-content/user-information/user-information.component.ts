import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent {
  user?: User;

  constructor(private _userService: UserService){
    this.user = this._userService.getUserDetail();
  }

  getUserEmail(){
    return this.user?.email;
  }
}
