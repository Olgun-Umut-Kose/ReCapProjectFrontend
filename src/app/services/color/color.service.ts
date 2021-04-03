import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColoListDataResponseModel } from 'src/app/models/ResponseModels/colorListDataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl:string = "https://localhost:5002/api/colors";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ColoListDataResponseModel>{
    return this.httpClient.get<ColoListDataResponseModel>(this.apiUrl);
  
    
  }
}
