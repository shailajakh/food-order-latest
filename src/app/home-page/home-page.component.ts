import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { TokenStorageService } from '../service/token-storage.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showMe: boolean=true;
  constructor(private apiserviceService: ApiserviceService,private localStorage : TokenStorageService){ }
  
  ngOnInit(): any {
    // this.localStorage.removeToken();
    // this.apiserviceService.readToken(); 
    // this.apiserviceService.CategoryGet(this.localStorage.getToken());


      
  }
  toogleTag(){
    this.showMe=!this.showMe
  }

}
