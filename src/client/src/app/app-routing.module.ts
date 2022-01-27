import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleInputComponent } from './components/vehicle-input/vehicle-input.component';

const routes: Routes = [
  {path: 'vehicles', component: VehicleInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
