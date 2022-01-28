import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { vehicleSelector } from 'src/app/store/selectors/vehicle/vehicle.selectors';
import { Vehicle } from '../../../../../shared/models/vehicle.model';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {
  selectedVehicle$ : Observable<Vehicle | null>
  
  constructor(
    private store: Store<AppState>
  ) { 
    this.selectedVehicle$ = this.store.select(vehicleSelector)
  }

  ngOnInit(): void {
  }

}
