import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { selectVehicle } from 'src/app/store/actions/vehicle/vehicle.actions';
import { Vehicle } from '../../../../../shared/models/vehicle.model';


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit, OnDestroy {
  vehicles$: Observable<Vehicle[]>;
  searchForm: FormGroup;
  vehicle: Vehicle | null = null;
  subscriptions: Subscription[] = [];

  constructor(
    private vehicleService: VehicleService,
    private fb: FormBuilder,
    private store: Store,
  ) 
  { 
    this.vehicles$ = this.vehicleService.getVehicles();

    this.searchForm = this.fb.group({
      id: ['']
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  searchVehicle(value: any) {
    this.vehicle = null;
    this.subscriptions.push(
      this.vehicleService.getVehicle(value.id).subscribe(data => this.vehicle = data)
    )
    
    this.searchForm.reset();
  }

  selectVehicle(vehicle: Vehicle) {
    this.store.dispatch(selectVehicle({data: vehicle}))
  }

  deleteVehicle(vehicle: any) {
    
    this.subscriptions.push(
      this.vehicleService.deleteVehicle(vehicle._id).subscribe()
    )
  }


}
