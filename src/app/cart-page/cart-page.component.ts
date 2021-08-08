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
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    Deliverytype :new FormControl(''),
    Deliverylocation :new FormControl(''),
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

  loginUser(){
    console.warn(this.loginForm.value);
  }
  
}
