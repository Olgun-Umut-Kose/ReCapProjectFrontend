import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalListDataResponseModel } from 'src/app/models/ResponseModels/rentalListDataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl:string = "https://localhost:5002/api/rentals";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<RentalListDataResponseModel>{
    return this.httpClient.get<RentalListDataResponseModel>(this.apiUrl + "/getrentaldetails");
  
    
  }
}
