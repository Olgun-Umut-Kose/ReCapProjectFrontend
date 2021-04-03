import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandListDataResponseModel } from 'src/app/models/ResponseModels/brandListDataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl:string = "https://localhost:5002/api/brands";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<BrandListDataResponseModel>{
    return this.httpClient.get<BrandListDataResponseModel>(this.apiUrl);
  
    
  }
}
