import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http:HttpClient) { }
 
 
  getProducts(){
      return this._http.get<any>("../assets/products.json")
  }

}
