import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-input',
  templateUrl: './vehicle-input.component.html',
  styleUrls: ['./vehicle-input.component.scss']
})
export class VehicleInputComponent implements OnInit {
  addVehicleForm: FormGroup

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

  addVehicle() {

    this.vehicleService.addVehicle(this.addVehicleForm.value).subscribe(data => alert("Vehicle added successfully!"));

    this.addVehicleForm.reset();
  }


}
