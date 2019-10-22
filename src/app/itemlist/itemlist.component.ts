import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  itemList
  products
  itemparam

  constructor(public api:ApiService,private route: ActivatedRoute ) {

    this.route.params.subscribe( params => 
      this.itemparam = params.card
      );
      console.log('adfnb '+ JSON.stringify(this.itemparam ))
   }

  ngOnInit() {
    let cardname = this.itemparam;
      


    let data:any;
    console.log('data ' + data)
    let temp_array = [];
    this.api.getProducts().subscribe( res => {
      let temp = JSON.parse(JSON.stringify(res))
      data = temp.menu[cardname].item;
      this.products = temp.display ;

      console.log('asas ' + JSON.stringify( data))

      for(let i=0;i < this.products.length;i++){
        for(let k =0;k<data.length;k++){
          
          if(this.products[i].id != undefined){
            if(this.products[i].id == data[k]){
              console.log('test works '+data[k]);
              temp_array.push(this.products[i]);
            }
          }
         
        }
      }
      this.itemList= temp_array
      console.log('test working array '+JSON.stringify(temp_array))
    })
  }

}
