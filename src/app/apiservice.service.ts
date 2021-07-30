import { Headers ,Http  } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


export interface Person{
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


  constructor(private _http : HttpClient) { }

  AccessToken:string="";
  private TokenAPI ="https://tketz.in/token";
  private token : any;

    login(): any {

      const newperson = {username:'tester1@widget.com',password :'5A1EEB8C-F1EC-4C88-B50A-144A039F8451',grant_type:'password',type:'widget',clientid:'7892'};

      this._http.post<Person>('https://tketz.in/token', newperson).subscribe(
                    (response) => console.log(response),
                    error => console.log(error));
      
     // var headersForTokenAPI = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
    //  var options = {headers: headersForTokenAPI};

  //   var url='https://tketz.in/token';
  //     const params = new HttpParams()
  //     .set('username','tester1@widget.com')
  //     .set('password','5A1EEB8C-F1EC-4C88-B50A-144A039F8451')
  //     .set('grant_type','password')
  //     .set('type','widget')
  //     .set('clientid','7892')
      
  //    var httpOptions = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
    
  //       })
  //     };
  //     const loginDetails={'username':'tester1@widget.com','password':'5A1EEB8C-F1EC-4C88-B50A-144A039F8451','grant_type':'password','type':'widget','clientid':'7892'}
      
    
  //     console.log('----obj1', loginDetails);
  //  //   console.log('----value.data', data1);
  //  this._http.post<any>('https://tketz.in/token', {params:params}).subscribe(
  //                   (response) => console.log(response),
  //                   error => console.log(error)
    
  // );

      // this._http.post( url , {username:"tester1@widget.com",password:"5A1EEB8C-F1EC-4C88-B50A-144A039F8451",grant_type:"password",type:"widget",clientid:"7892"}).subscribe(data => {
      //   console.log('----value.data', data);
      // });
    //  this._http.post('https://tketz.in/token',data.toString()
     // ).subscribe(
      //  (value:any) => this.token = value.data  
      console.log('after post'); 
     //   );
        
        //  console.log(this.token );
      //console.log('----value.data', data );
}

// CategoryGet_all(){ }
// ItemGet_all(){}
// ItemByIDGet(){}
// OrderInsert_all(){}


}
