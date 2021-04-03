import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Entities/customer';
import { Rental } from 'src/app/models/Entities/rental';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[] = [];
  dataLoaded: boolean = false;

  constructor(private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void{
    this.customerservice.getAll().subscribe(response =>{
      this.customers = response.data;
      this.dataLoaded = true;
    })
  }

}
