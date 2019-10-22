import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemlistComponent  } from './itemlist/itemlist.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [{path:'list/:card', component:ItemlistComponent},
{path:'home', component:HomeComponent},
{path:'', component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
