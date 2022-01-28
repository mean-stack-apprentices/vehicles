import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle.component';
import { VehicleInputComponent } from './components/vehicle-input/vehicle-input.component';

const routes: Routes = [
  {path: '', component: VehicleInputComponent},
  {path: 'edit-vehicle', component: EditVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
