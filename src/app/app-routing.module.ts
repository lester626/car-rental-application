import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarUpdateComponent } from './car-update/car-update.component';

const routes: Routes = [
  {path: 'cars', component: CarListComponent},
  {path: 'add/car', component: CarCreateComponent},
  {path: 'car/:id', component: CarSearchComponent},
  {path: 'update/car/:id', component: CarUpdateComponent},
  {path: '', redirectTo: 'cars', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
