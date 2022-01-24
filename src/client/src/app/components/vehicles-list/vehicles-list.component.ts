import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from '../../../../../shared/models/vehicle.model';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>

  constructor(
    private vehicleService: VehicleService
  ) 
  { 
    this.vehicles$ = this.vehicleService.getVehicles();
  }

  ngOnInit(): void {
  }

}
