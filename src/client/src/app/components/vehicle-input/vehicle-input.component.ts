import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-input',
  templateUrl: './vehicle-input.component.html',
  styleUrls: ['./vehicle-input.component.scss']
})
export class VehicleInputComponent implements OnInit {
  addVehicleForm: FormGroup

  constructor(
    private fb: FormBuilder
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
    console.log(this.addVehicleForm.value);
  }


}
