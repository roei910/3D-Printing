import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { DatabaseService } from './database.service';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn: boolean = false;
  private connectedUser?: User;

  constructor(private dataBase: DatabaseService, private cookieService: CookiesService){
    if(!this.isLoggedIn)
      this.checkUserCookie();
  }

  signIn(userDetail: User){
    const user = this.dataBase.findUser(userDetail);
    this.isLoggedIn = user !== undefined && user.password === userDetail.password;
    if(this.isLoggedIn){
      this.connectedUser = userDetail;
      this.cookieService.createCookie('email', userDetail.email);
    }
    return this.isLoggedIn;
  }

  signUp(userDetail: User){
    return this.dataBase.addUser(userDetail);
  }

  signOut(){
    this.isLoggedIn = false;
    this.connectedUser = undefined;
    this.cookieService.deleteCookie('email');
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }

  getUserDetail(){
    return this.connectedUser;
  }

  checkUserCookie(){
    let email = this.cookieService.getCookie('email');
    if(email){
      const user = this.dataBase.findUserByEmail(email);
      this.isLoggedIn = user !== undefined;
      if(this.isLoggedIn)
        this.connectedUser = user;
    }
  }
}
