import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Brand } from 'src/app/models/Entities/brand';

import { Color } from 'src/app/models/Entities/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = []
  currentColor:Color | null = null;
  @Input() currentBrand:Brand | null = null;
  brandId:number = 0;
  @Output() changeColor = new EventEmitter();
  dataLoaded: boolean = false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentColor(color:Color | null):void{
    this.currentColor = color;
    this.changeColor.emit(color);
    
  }

  getCurrentColorClass(color: Color):string {
    if(color == this.currentColor){
      this.brandId = this.currentBrand?.id == null ? 0 : this.currentBrand?.id
      return "list-group-item active";
    }
    this.brandId = this.currentBrand?.id == null ? 0 : this.currentBrand?.id
    return "list-group-item";

  }
  getAllColorClass():string {
    if(null == this.currentColor){
      return "list-group-item active";
    }
    return "list-group-item";
  }

}
