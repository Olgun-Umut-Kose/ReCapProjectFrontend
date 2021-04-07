import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarListDataResponseModel } from 'src/app/models/ResponseModels/carListDataResponseModel';
import { CarDataResponseModel } from 'src/app/models/ResponseModels/carDataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string = "https://localhost:5002/api/cars";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CarListDataResponseModel>{
    return this.httpClient.get<CarListDataResponseModel>(this.apiUrl + "/getcardetails");
  
    
  }

  getByFilter(brandId:number, colorId:number):Observable<CarListDataResponseModel>{
    return this.httpClient.get<CarListDataResponseModel>(this.apiUrl  + "/getcardetailsbyfilter?brandid=" + brandId + "&colorid=" + colorId);
  }

  getById(id:number):Observable<CarDataResponseModel>{
    return this.httpClient.get<CarDataResponseModel>(this.apiUrl + "/getcardetailbyid?id="+ id);
  }
}
