import { createAction, props } from '@ngrx/store';

export const loadVehicles = createAction(
  '[Vehicle] Load Vehicles'
);

export const loadVehiclesSuccess = createAction(
  '[Vehicle] Load Vehicles Success',
  props<{ data: any }>()
);

export const loadVehiclesFailure = createAction(
  '[Vehicle] Load Vehicles Failure',
  props<{ error: any }>()
);
