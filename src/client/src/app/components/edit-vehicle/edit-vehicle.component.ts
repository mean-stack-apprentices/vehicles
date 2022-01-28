import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VehicleService } from 'src/app/services/vehicle.service';
import { AppState } from 'src/app/store';
import { updateVehicle } from 'src/app/store/actions/vehicle/vehicle.actions';
import { vehicleSelector } from 'src/app/store/selectors/vehicle/vehicle.selectors';
import { Vehicle } from '../../../../../shared/models/vehicle.model';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {
  selectedVehicle : Vehicle | null = null;
  editVehicleForm: FormGroup;
  
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private vehicleServices: VehicleService

  ) { 
    this.store.select(vehicleSelector).subscribe(data => this.selectedVehicle = data);

    this.editVehicleForm = this.fb.group({
      year: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
    })
  }

  ngOnInit(): void {
      this.editVehicleForm.get('year')?.setValue(this.selectedVehicle?.year);
      this.editVehicleForm.get('make')?.setValue(this.selectedVehicle?.make);
      this.editVehicleForm.get('model')?.setValue(this.selectedVehicle?.model);
  }

  editVehicle() {
    
    this.store.dispatch(updateVehicle({data: this.editVehicleForm.value, id: this.selectedVehicle?._id}));

    this.editVehicleForm.reset();

  }

}
