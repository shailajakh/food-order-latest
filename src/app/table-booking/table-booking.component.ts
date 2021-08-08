import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.scss']
})
export class TableBookingComponent implements OnInit {

  constructor(private apiserviceService: ApiserviceService,private localStorage : TokenStorageService) { }
  tab='one';
  ngOnInit(): void {
   


  }
 
 
  
}
