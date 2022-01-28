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

export const deleteVehicle = createAction(
  '[Vehicle] Delete Vehicle',
  props<{ data: Vehicle }>()
);

export const deleteVehicleSuccess = createAction(
  '[Vehicle] Delete Vehicle Success',
  props<{ data: Vehicle }>()
);

export const deleteVehicleFailure = createAction(
  '[Vehicle] Delete Vehicle Failure',
  props<{ error: Error }>()
);

export const updateVehicle = createAction(
  '[Vehicle] Update Vehicle',
  props<{ data: Vehicle, id: string | undefined }>()
);

export const updateVehicleSuccess = createAction(
  '[Vehicle] Update Vehicle Success',
  props<{ data: Vehicle }>()
);

export const updateVehicleFailure = createAction(
  '[Vehicle] Update Vehicle Failure',
  props<{ error: Error }>()
);

export const navigateOnUpdateVehicleSuccess = createAction(
  '[Vehicle] Navigate On UpdateVehicle Success',
  
);






