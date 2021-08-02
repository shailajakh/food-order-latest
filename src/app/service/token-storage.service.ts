import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  TOKEN_KEY = "default token"

  constructor() { }

  setToken(token:string){
    if(!token){
      return console.log("notable to read token");
    }
    this.removeToken();
    window.localStorage.setItem(this.TOKEN_KEY,token);
  }


  getToken(){
   return window.localStorage.getItem(this.TOKEN_KEY);
  }


  removeToken(){
    window.localStorage.removeItem(this.TOKEN_KEY);
  }


}
