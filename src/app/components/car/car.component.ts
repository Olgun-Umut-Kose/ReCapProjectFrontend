import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Entities/car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  dataLoaded: boolean = false;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => { 
      if(params["brandId"]){
      this.getByFilter(params["brandId"],params["colorId"]);
    }
    else{
      this.getAll();
    }
    })
  }

  getAll():void {
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getByFilter(brandId:number, colorId:number):void {
    this.carService.getByFilter(brandId,colorId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }



}
