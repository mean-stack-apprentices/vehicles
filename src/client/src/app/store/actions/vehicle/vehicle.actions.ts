import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../../../../../../shared/models/vehicle.model';

export const loadVehicles = createAction(
  '[Vehicle] Load Vehicles'
);

export const loadVehiclesSuccess = createAction(
  '[Vehicle] Load Vehicles Success',
  props<{ data: Vehicle[] }>()
);

export const loadVehiclesFailure = createAction(
  '[Vehicle] Load Vehicles Failure',
  props<{ error: Error }>()
);

export const selectVehicle = createAction(
  '[Vehicle] Select Vehicle',
  props<{ data: Vehicle }>()
);


