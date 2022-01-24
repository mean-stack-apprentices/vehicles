import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from '../../../../../shared/models/vehicle.model';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;
  searchForm: FormGroup;
  vehicle: Vehicle | null = null;

  constructor(
    private vehicleService: VehicleService,
    private fb: FormBuilder
  ) 
  { 
    this.vehicles$ = this.vehicleService.getVehicles();

    this.searchForm = this.fb.group({
      id: ['']
    })
  }

  ngOnInit(): void {
  }

  searchVehicle(value: any) {
    return this.vehicleService.getVehicle(value.id).subscribe(data => this.vehicle = data);
  }

}
