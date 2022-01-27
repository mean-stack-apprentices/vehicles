import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
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
    private vehicleService: VehicleService
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

    this.subscriptions.push (
      
    )

    this.vehicleService.addVehicle(this.addVehicleForm.value).subscribe(data => alert("Vehicle added successfully!"))

    this.addVehicleForm.reset();
  }


}
