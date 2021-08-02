import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Headers ,Http  } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenStorageService } from './service/token-storage.service';



export interface Person{
  [x: string]: any;
  username: string;
    password :string;
    grant_type : string;
    type : string;
    client_id : string;
}


@Injectable({
  providedIn: 'root'
})


export class ApiserviceService {


  constructor(private _http : HttpClient ,private tokenStorage : TokenStorageService) {}

  private Token;

  readToken(): any {
    this._http.post<any>('https://tketz.in/token', 'username=tester1%40widget.com&password=5A1EEB8C-F1EC-4C88-B50A-144A039F8451&grant_type=password&type=widget&clientid=7892')
    .subscribe(
      (response) => {
        // login successful if there's a jwt token in the response
        this.tokenStorage.setToken(response.access_token);
        if (response.access_token) {
            console.log("User authentication success!",response.access_token);
            return response.access_token;
        } else {
            return false;
        }
      },
       error => console.log("User authentication failed!",error));

}

CategoryGet(token:any):any{

                this._http.get<any>('https://tketz.in/api/wm/CategoryGet')
                .subscribe(
                  (response) => {
                    console.log("CategoryGet receive responce",response);

                    if (response.Result) {
                        console.log("CategoryGet success!",response.Result);     
                        return response.Result;
                    } else {
                        return false;
                    }
                  },
                  error => console.log("User CategoryGet failed!",error));
                  
              }


ItemGet():any{

                this._http.get<any>('https://tketz.in/api/wm/ItemGet?categoryID=12').subscribe(
                  (response) => {
                    console.log("ItemGet receive responce",response);

                    if (response.Result) {
                        console.log("CategoryGet success!",response.Result); 
                        return response.Result;
                    } else {
                        return false;
                    }
                  },
                  error => console.log("User CategoryGet failed!",error));
              }

ItemByIDGet():any{

                this._http.get<any>('https://tketz.in/api/wm/ItemByIDGet?ID=10').subscribe(
                  (response) => {
                    console.log("ItemByIDGet receive responce",response);

                    if (response.Result) {
                        console.log("ItemByIDGet success!",response.Result); 
                        return response.Result;
                    } else {
                        return false;
                    }
                  },
                  error => console.log("User ItemByIDGet failed!",error));
              }
UserAddressGet():any{

  this._http.get<any>('https://tketz.in/api/wm/UserAddressGet?guid=40FE2447-BA30-4910-BB6F-F60F2E26A1A9').subscribe(
                  (response) => {
                    console.log("ItemByIDGet receive responce",response);

                    if (response.Result) {
                        console.log("ItemByIDGet success!",response.Result); 
                        return response.Result;
                    } else {
                        return false;
                    }
                  },
                  error => console.log("User ItemByIDGet failed!",error));
}
OutletOpeningHoursGet():any{

  this._http.get<any>('https://tketz.in/api/wm/OutletOpeningHoursGet').subscribe(
    (response) => {
      console.log("OutletOpeningHoursGet receive responce",response);

      if (response.Result) {
          console.log("OutletOpeningHoursGet success!",response.Result); 
          return response.Result;
      } else {
          return false;
      }
    },
    error => console.log("User OutletOpeningHoursGet failed!",error));
}
StripeAccountIDGet():any{

  this._http.get<any>('https://tketz.in/api/wm/StripeAccountIDGet').subscribe(
    (response) => {
      console.log("StripeAccountIDGet receive responce",response);

      if (response.Result) {
          console.log("StripeAccountIDGet success!",response.Result); 
          return response.Result;
      } else {
          return false;
      }
    },
    error => console.log("User StripeAccountIDGet failed!",error));
}



//post api


// 2nd post

Orderinsert():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    "GUID": "40FE2447-BA30-4910-BB6F-F60F2E26A1A9",
      "AddressID": "2",
  
      "DeliveryCharge": "2",
    "DeliveryPromotionID": "1",
    "DeliveryPromotionType": "deliverypromotion",
      "PreOrderAlarmValue": "0",
    "FullfillmentAlarmValue": "15",
  
    "Note": "Less spicy",
    "IsPreOrder": "0",
    "IsTakeAway": "0",
    "PreOrderTime": "0",
  
    "OrderDetails": [{
        "ItemID": "16",
        "GUID": "123",
        "Note": "hi",
        "Quantity": "2",
        "AddOns": [{
          "ID": "1",
          "Quantity": "1"
        }],
        "FoodTypes": [{
          "ID": "9"
        }],
        "CombineItems": [{
          "CombineItemID": "4",
          "Quantity": "1"
        }]
      },
      {
        "ItemID": "6",
        "GUID": "321",
        "Note": "hi",
        "Quantity": "2",
        "PromotionID": "1",
        "PromotionType": "promotionitem",
        "AddOns": [{
          "ID": "9",
          "Quantity": "1"
        }],
        "FoodTypes": [],
        "CombineItems": []
      }
    ],
    "OrderCombos": [{
        "ComboID": "3",
        "GUID": "456",
        "Note": "hi",
        "Price": "12",
        "PromotionID": "1",
        "PromotionType": "promotioncombo",
        "OrderComboItems": [{
            "ItemID": "8",
            "AddOns": [{
              "ID": "10"
            }, {
              "ID": "11"
            }],
            "FoodTypes": [{
              "ID": "8"
            }]
          },
          {
            "ItemID": "7",
            "AddOns": [{
              "ID": "12"
            }],
            "FoodTypes": [{
              "ID": "5"
            }]
          }
        ]
      }
  
    ]
  };
  this._http.post<any>('https://tketz.in/api/wm/OrderInsert',body,{headers}).subscribe((response)=>{
                      console.log(" Orderinsertreceived responce",response);
  })
}
   

// 3rdpost

Userinsert():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    'FirstName':'John',
   'LastName':'Smith' ,
    'Gender':'male',
    'Age':'25',
    'DOB':'1987-07-04',
    'Password':'123',
    'Mobile':'9847121454',
    'OTP':'8536',
    'Email':'paul%40wh.com'
    
  };

  this._http.post<any>('https://tketz.in/api/wm/UserInsert',body,{headers}).subscribe((response)=>{
                      console.log(" Userinsert received responce",response);
  })
}

// 4th post

GenerateOtp():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    'Email':'fajarpm%40gmail.com',
    'Mobile':'9567775511'
    
  };

  this._http.post<any>('https://tketz.in/api/wm/GenerateOTP',body,{headers}).subscribe((response)=>{
                      console.log("GenerateOtp received responce",response);
  })
}

// 5th post

Validateuser():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    'Email':'9567775511',
    'Password':'123'
    
  };

  this._http.post<any>('https://tketz.in/api/wm/ValidateUser',body,{headers}).subscribe((response)=>{
                      console.log("Validateuser received responce",response);
  })
}


// 6th post

UserAddressInsert():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    'GUID':'5465646',
    'Name':'Smith',
    'Mobile':'854625',
    'Email':'smith%40s.com',
    'AddressType':'home',
    'DeliveryLocation':'123%20kmkmkm%20kmkmk',
    'Street':'main%20st',
    'Suburb':'sdsds',
    'City':'city%20name',
    'Pincode':'8546'
    
  };

  this._http.post<any>('https://tketz.in/api/wm/UserAddressInsert',body,{headers}).subscribe((response)=>{
                      console.log("UserAddressInsert received responce",response);
  })
}

// 7th post


UserAddressUpdate():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    'ID':'2',
    'GUID':'5465646',
    'Name':'Smith',
    'Mobile':'854625',
    'Email':'smith%40s.com',
    'AddressType':'home',
    'DeliveryLocation':'123%20kmkmkm%20kmkmk',
    'Street':'main%20st',
    'Suburb':'sdsds',
    'City':'city%20name',
    'Pincode':'8546'
    
  };

  this._http.post<any>('https://tketz.in/api/wm/UserAddressUpdate',body,{headers}).subscribe((response)=>{
                      console.log("UserAddressUpdate received responce",response);
  })
}



// 8th post


GenerateBookingOTP():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    'Customer':'Fajar',
    'Email':'fajarpm%40gmail.com',
    'Mobile':'9567775511'
    
  };

  this._http.post<any>('https://tketz.in/api/wm/GenerateBookingOTP',body,{headers}).subscribe((response)=>{
                      console.log("GenerateBookingOTP received responce",response);
  })
}

// 9th post

TableBookingInsertStep1():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
    'GUID':'8444C9A7-C23B-4B65-B55E-8093D8BE63C5',
    'TablePromotionID':'1',
    'TablePromotionType':'tablepromotion',
    'Note':'Make%20it%20fast',
    'BookingTime':'14%3A10',
    'NoPersons':'5',
    'Customer':'Fajar',
    'Email':'fajarpm%40gmail.com',
    'Mobile':'9566',
    'OTP':'598686'
    
  };

  this._http.post<any>('https://tketz.in/api/wm/GenerateBookingOTP',body,{headers}).subscribe((response)=>{
                      console.log("TableBookingInsertStep1 received responce",response);
  })
}


// 10th post


TableBookingInsertStep2():any{
  const headers = { 'Authorization': 'Bearer this.Token'};
  var body={
  	"GUID": "8444C9A7-C23B-4B65-B55E-8093D8BE63C5",
    "OrderID": "107",
	"Note": "Less spicy",

	"PreOrderAlarmValue": "0",

	"OrderDetails": [{
			"ItemID": "16",
			"GUID": "123",
			"Note": "hi",
			"Quantity": "2",
			"AddOns": [{
				"ID": "1",
				"Quantity": "1"
			}],
			"FoodTypes": [{
				"ID": "9"
			}],
			"CombineItems": [{
				"CombineItemID": "4",
				"Quantity": "1"
			}]
		},
		{
			"ItemID": "6",
			"GUID": "321",
			"Note": "hi",
			"Quantity": "2",
			"PromotionID": "1",
			"PromotionType": "promotionitem",
			"AddOns": [{
				"ID": "9",
				"Quantity": "1"
			}],
			"FoodTypes": [],
			"CombineItems": []
		}
	],
	"OrderCombos": [{
			"ComboID": "3",
			"GUID": "456",
			"Note": "hi",
			"Price": "12",
			"PromotionID": "1",
			"PromotionType": "promotioncombo",
			"OrderComboItems": [{
					"ItemID": "8",
					"AddOns": [{
						"ID": "10"
					}, {
						"ID": "11"
					}],
					"FoodTypes": [{
						"ID": "8"
					}]
				},
				{
					"ItemID": "7",
					"AddOns": [{
						"ID": "12"
					}],
					"FoodTypes": [{
						"ID": "5"
					}]
				}
			]
		}

	]
    
  };

  this._http.post<any>('https://tketz.in/api/wm/TableBookingInsertStep2',body,{headers}).subscribe((response)=>{
                      console.log("TableBookingInsertStep2 received responce",response);
  })
}








}
