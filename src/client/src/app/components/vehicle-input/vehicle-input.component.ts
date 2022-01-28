import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { AppState } from 'src/app/store';
import { createVehicle } from 'src/app/store/actions/vehicle/vehicle.actions';
import { Vehicle } from '../../../../../shared/models/vehicle.model';

@Component({
  selector: 'app-vehicle-input',
  templateUrl: './vehicle-input.component.html',
  styleUrls: ['./vehicle-input.component.scss']
})
export class VehicleInputComponent implements OnInit, OnDestroy {
  addVehicleForm: FormGroup;
  subscriptions: Subscription[] = [];
  

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private store: Store<AppState>
  ) 
  { 
    this.addVehicleForm = fb.group({
      year: [0, Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  addVehicle() {
    this.store.dispatch(createVehicle({data: this.addVehicleForm.value}));  
      
    this.addVehicleForm.reset();
  }

  get years() {
    const years = [];
    for(let i = 1990; i<=2050; i++) {
      years.push(i);
    }
    return years;
  }

}
