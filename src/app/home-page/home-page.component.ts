import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showMe: boolean=true;
  constructor(private apiserviceService: ApiserviceService ){ }
  
  ngOnInit(): void {
       
      
  }
  toogleTag(){
    this.showMe=!this.showMe
  }

}
