import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as fromVehicle from '../../reducers/vehicle/vehicle.reducer';

const vehicleFeatureSelector = createFeatureSelector<AppState, fromVehicle.State>(fromVehicle.vehicleFeatureKey);

export const vehicleSelector = createSelector(
  vehicleFeatureSelector,
  (state) => state.selectedVehicle
);

export const vehiclesSelector = createSelector(
  vehicleFeatureSelector,
  (state) => state.vehicles
);




