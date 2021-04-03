import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/Entities/rental';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rents:Rental[] = [];
  dataLoaded: boolean = false;

  constructor(private rentalservice:RentalService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void{
    this.rentalservice.getAll().subscribe(response =>{
      this.rents = response.data;
      this.dataLoaded = true;
    })
  }


}
