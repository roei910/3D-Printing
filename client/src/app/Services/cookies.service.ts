import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  createCookie(name: string, value: string){
    document.cookie = name + '=' + value + ';expires=' + this.getDateTommorow();
  }

  deleteCookie(name: string){
    document.cookie = name + '=';
  }

  getDateTommorow(){
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toUTCString();
  }

  getCookie(name: string) {
    name = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
