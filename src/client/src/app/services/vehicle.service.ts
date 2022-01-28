import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Vehicle} from '../../../../shared/models/vehicle.model.js';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor( 
    private api: ApiService,
    private router: Router
  ) 
  { }

  addVehicle(vehicle: Vehicle) {
      return this.api.post<Vehicle, Vehicle>('create-vehicle', vehicle);
  }

  getVehicles() {
    return this.api.get<Vehicle[]>('vehicles');
  }

  getVehicle(id: string) {
    return this.api.get<Vehicle>('vehicle/'+id);
  }

  updateVehicle(vehicle: Vehicle, id: string | undefined) {
    return this.api.put<Vehicle, Vehicle>('update-vehicle/'+ id, vehicle);
  }

  deleteVehicle(vehicle: Vehicle) {
    return this.api.delete<Vehicle>('delete-vehicle/'+vehicle._id);
  }

  navigateOnUpdateVehicle() {
    return of(this.router.navigate(['/']));
  }

}
