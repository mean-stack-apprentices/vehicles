import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../../../../shared/models/vehicle.model';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.scss']
})
export class EditVehicleComponent implements OnInit {
  @Input() selectedVehicle: Vehicle | null = null;
  
  constructor() { 
    //this.selectedVehicle = 
  }

  ngOnInit(): void {
  }

}
