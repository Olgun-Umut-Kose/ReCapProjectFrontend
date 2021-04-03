import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerListDataResponseModel } from 'src/app/models/ResponseModels/customerListDataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl:string = "https://localhost:5002/api/customers";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerListDataResponseModel>{
    return this.httpClient.get<CustomerListDataResponseModel>(this.apiUrl);
  
    
  }
}
