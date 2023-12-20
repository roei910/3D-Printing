import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  @ViewChild('email')
  email?: ElementRef;

  @ViewChild('password')
  password?: ElementRef;

  constructor(private _userService: UserService, private router: Router){}

  OnSignIn(){
    const userEmail = this.email?.nativeElement.value;
    const userPassword = this.password?.nativeElement.value;
    
    const checkCredentials = this._userService.signIn({email: userEmail, password: userPassword} as User);
    if(checkCredentials){
      alert('User connected successfully');
      this.router.navigate(['user-information']);
    }
    else
      alert('Failed connecting the user');
  }
}
