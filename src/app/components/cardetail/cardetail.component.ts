import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from 'src/app/models/Entities/car';
import { CarService } from 'src/app/services/car/car.service';
import { CarimageService } from 'src/app/services/carimage/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  url:string = "https://localhost:5002/images/";
  temparray:string[] = [];
  car:Car = {id:0, brandName:"",colorName:"",colorHexCode:"",modelYear:0,dailyPrice:0,description:""}
  
  imagePathes:string[] = [];
  imageurls:string[] = [];
  dataLoaded:boolean = false;
  constructor(private carImageService: CarimageService, private activatedRoute:ActivatedRoute, private carService:CarService) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params => {
      
      this.getImagesByCarId(params["id"]);
      this.getById(params["id"]);
      
      
  });
  
    
  }

  getById(id:number):void{
    this.carService.getById(id).subscribe(response => {
      this.car = response.data;
    })
  }

  getImagesByCarId(carid:number):void{
    this.carImageService.getImagesByCarId(carid).subscribe(resonse => {
      
      this.imagePathes = resonse.data;
      console.log(this.imagePathes);
      this.dataLoaded = true;
      console.log(this.imagePathes);
      this.splitUrl();
    })
  }

  splitUrl(){
    this.imagePathes.forEach(element => {
        
      this.temparray = element.split("\\");
      console.log(this.temparray);
      this.imageurls.push(this.temparray[this.temparray.length -1]);
      
      
    });
    console.log(this.imageurls);
  }

}
