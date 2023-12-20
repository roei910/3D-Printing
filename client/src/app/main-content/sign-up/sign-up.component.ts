import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @ViewChild('email')
  email!: ElementRef;

  @ViewChild('password')
  password!: ElementRef;

  @ViewChild('passwordConfirm')
  passwordConfirm!: ElementRef;

  constructor(private databaseService: DatabaseService){}

  signUp(){
    let emailText = this.email.nativeElement.value;
    let passwordText = this.password.nativeElement.value;
    let passwordConfirmText = this.passwordConfirm.nativeElement.value;
    if(this.databaseService.findUserByEmail(emailText) !== undefined){
      alert('User already exists under the email address');
      return;
    }

    if(passwordText !== passwordConfirmText){
      alert('Passwords do not match');
      return;
    }

    this.databaseService.addUser({email: emailText, password: passwordText})
    alert('User added successfully with the email: ' + emailText);
  }
}
