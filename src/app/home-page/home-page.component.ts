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
  day:string="";
  count:number=0;

  public today =Date.now();
  constructor(private apiserviceService: ApiserviceService,private localStorage : TokenStorageService){ }
   navData= null;
  ngOnInit(): any {
    // this.localStorage.removeToken();
     this.apiserviceService.readToken();
     //this.openingHours();
    // this.apiserviceService.readAddress("shivnager bidar");
    this.apiserviceService.CategoryGet(this.localStorage.getToken()).subscribe(
      (response) => {
        console.log("CategoryGet receive responce",response);

        if (response.Result) {
            console.log("CategoryGet success!",response.Result);    
            this.navData = response.Result;
            this.getEachItem(this.navData[0].ID);
        } else {
            return false;
        }
      },
      error => console.log("User CategoryGet failed!",error));
    
   ;


      
  }
  
  

  foodItems =[];

  getEachItem(id):any{
    this.apiserviceService.ItemGet(id).subscribe(
      (response) => {
        console.log("ItemGet receive responce",response);

        if (response.Result) {
            console.log("getEachItem success!",response.Result); 
            this.foodItems = response.Result;
            return this.foodItems;
        } else {
            return false;
        }
      },
      error => console.log("User getEachItem failed!",error));
  }

  

  orderinsert:any={
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
  
  addToCart(id:any){
    this.count++;
    this.addon(id);



  }
  addon_item:any={};
  itemdisp=[];
  varaddon=false;
  addon(itemid:any){
    debugger;
    this.apiserviceService.ItemIDByGet(itemid).subscribe(
      (response) => {
        console.log("addon receive responce",response);
        this.addon_item = response.Result;
        if((this.addon_item.AddOns!=""))
        {this.varaddon=true;}
      },
      error => console.log("addon failed!",error));
  }
  

orderinset(){
  this.apiserviceService.Orderinsert(this.orderinsert).subscribe(
    (response) => {
      console.log("Orderinsert receive responce",response);

      if (response.Result=="1") {
          console.log("Orderinsert success!",response.Result);
      } else {
          return false;
      }
    },
    error => console.log("User Orderinsert failed!",error));
}






  toogleTag(){
    this.showMe=!this.showMe
  }
}
