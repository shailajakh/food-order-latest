import { ApiserviceService } from './apiservice.service';
import { Component } from '@angular/core';
import { TokenParams } from './classes/token-params.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tokenParams:TokenParams;
  
  title = 'food-order';
  getdata: Object;

 constructor(private apiserviceService: ApiserviceService ){ }

 ngOnInit(){

  this.apiserviceService.login()
  
 }

 
}
