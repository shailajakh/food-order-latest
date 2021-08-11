import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  tab='one';
  addreForm = new FormGroup({
    GUID :new FormControl(''),
    Name : new FormControl(''),
    Mobile :new FormControl(''),
    Email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    AddressType :new FormControl(''),
    DeliveryLocation :new FormControl(''),
    Street :new FormControl(''),
    Suburb :new FormControl(''),
    City :new FormControl(''),
    Pincode :new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(6)]),
    
    });
  constructor(private apiserviceService: ApiserviceService,private localStorage : TokenStorageService) { }

  ngOnInit(): any {
    this.useraddressGet();
  }
  address = [];
 
  useraddressGet(){
    this.apiserviceService.UserAddressGet().subscribe(
      (response) => {
        console.log("useraddressGet receive responce",response);

        if (response.Result) {
            this.address = response.Result;
            return response.Result;
        } else {
            return false;
        }
      },
      error => console.log("User useraddressGet failed!",error));
  }

  userAddress(user:any){
    var body={
      'GUID':'5465646',
      'Name':user.Name,
      'Mobile':user.Mobile,
      'Email':user.Email,
      'AddressType':user.AddressType,
      'DeliveryLocation':user.DeliveryLocation,
      'Street':user.Street,
      'Suburb':user.Suburb,
      'City':user.City,
      'Pincode':user.Pincode
      
    };
    this.apiserviceService.UserAddressInsert(body).subscribe(
      (response) => {
        console.log("UserAddressInsert receive responce",response);

        if (response.Result) {
            this.address = response.Result;
            return response.Result;
        } else {
            return false;
        }
      },
      error => console.log("UserAddressInsert failed!",error));
  }
  
  forLater=false;
  forLater_set(){
    this.forLater=true;
  }
}
