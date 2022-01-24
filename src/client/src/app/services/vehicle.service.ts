import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Vehicle} from '../../../../shared/models/vehicle.model.js';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor( 
    private api: ApiService
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


}
