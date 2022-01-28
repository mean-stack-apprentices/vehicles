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

export const createVehicle = createAction(
  '[Vehicle] Create Vehicle',
  props<{ data: Vehicle }>()
);

export const createVehicleSuccess = createAction(
  '[Vehicle] Create Vehicle Success',
  props<{ data: Vehicle }>()
);

export const createVehicleFailure = createAction(
  '[Vehicle] Create Vehicle Failure',
  props<{ error: Error }>()
);


