import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarlayoutComponent } from './components/carlayout/carlayout.component';
import { CarComponent } from './components/car/car.component';

import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"car", component:CarlayoutComponent ,children:[
  {path: "brand/:brandId/color/:colorId", component:CarComponent},
  {path:"detail/:id",component:CardetailComponent}]
  },
  {path:"rental", component:RentalComponent},
  {path:"customer", component:CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
