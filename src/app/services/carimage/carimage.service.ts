import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagePathListDataResponseModel } from 'src/app/models/ResponseModels/imagePathListDataReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
  apiUrl:string = "https://localhost:5002/api/carimages";
  constructor(private httpClient: HttpClient) { }

  getImagesByCarId(carid: number):Observable<ImagePathListDataResponseModel>{
    return this.httpClient.get<ImagePathListDataResponseModel>(this.apiUrl + "/getimagesbycarid?carid=" + carid)
  }
}
