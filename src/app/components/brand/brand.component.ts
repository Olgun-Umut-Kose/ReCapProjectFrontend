import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Entities/brand';
import { Color } from 'src/app/models/Entities/color';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  currentBrand:Brand | null = null;
  currentColor:Color | null = null;
  colorId:number = 0;
  dataLoaded: boolean = false;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAll();
    console.log("anan");
  }
  
  getAll():void{
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand:Brand | null):void{
    this.currentBrand = brand;
    
    
  }
  setCurrentColor(color: Color |null):void{
    this.currentColor = color;
    this.colorId = this.currentColor?.id == null ? 0 : this.currentColor?.id
  }

  getCurrentBrandClass(brand:Brand):string {
    if(brand == this.currentBrand){
      return "list-group-item active";
    }
    return "list-group-item";
  }
  getAllBrandClass():string {
    if(null == this.currentBrand){
      return "list-group-item active";
    }
    return "list-group-item";
  }

}
