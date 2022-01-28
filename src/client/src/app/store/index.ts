import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
import * as fromVehicle from './reducers/vehicle/vehicle.reducer';
  
  
  
  export interface AppState {
  
    
    [fromVehicle.vehicleFeatureKey]: fromVehicle.State;
}
  
  export const reducers: ActionReducerMap<AppState> = {
  
    
    [fromVehicle.vehicleFeatureKey]: fromVehicle.reducer,
};
  
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
  