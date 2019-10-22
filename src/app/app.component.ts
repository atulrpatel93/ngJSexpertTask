import { Component } from '@angular/core';
import { ApiService } from './api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products;


  constructor(public api:ApiService,public _router:Router){

 

  }



}
