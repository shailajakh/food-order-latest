import { ApiserviceService } from './apiservice.service';
import { Component } from '@angular/core';
import { TokenParams } from './classes/token-params.model';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './service/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tokenParams:TokenParams;
  
  title = 'food-order';
  


 constructor(private apiserviceService: ApiserviceService,private _http : HttpClient,private localStorage : TokenStorageService  ){ }

 ngOnInit(){

  this.localStorage.removeToken();
  this.apiserviceService.readToken(); 
 this.apiserviceService.CategoryGet(this.localStorage.getToken());
 //  this.apiserviceService.ItemGet();
// //   this.apiserviceService.ItemByIDGet();
//    this.apiserviceService.UserAddressGet();
//    this.apiserviceService.OutletOpeningHoursGet();
//    this.apiserviceService.StripeAccountIDGet();


  //  post

  // this.apiserviceService.Orderinsert();
  // this.apiserviceService.Userinsert();
  // this.apiserviceService.GenerateOtp();
  // this.apiserviceService.Validateuser();
  // this.apiserviceService.UserAddressInsert();
  // this.apiserviceService.UserAddressUpdate();
  // this.apiserviceService.GenerateBookingOTP();
  // this.apiserviceService.TableBookingInsertStep1();
  // this.apiserviceService.TableBookingInsertStep2();


 }

 
}
