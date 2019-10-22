import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products;
  
  constructor(public api:ApiService,public _router:Router){

    this.api.getProducts().subscribe( res => {
      let temp = JSON.parse(JSON.stringify(res))

      this.products = temp.menu ;
      console.log('asas ' + JSON.stringify( this.products))
    })

  }
  ngOnInit() {
  }



  test(pera){
    return Object.keys(pera)
  }
  fun(pera){
    console.log(JSON.stringify(this.products[pera]))
  }
  method(item){
    let data = this.products[item].item
    console.log('item ' + data)
    //this._router.navigate([data]);
    this._router.navigate(['/list', item]);
  
  }

}
