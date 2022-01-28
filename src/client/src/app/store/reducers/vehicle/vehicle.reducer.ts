import { createReducer, on } from '@ngrx/store';
import { Vehicle } from '../../../../../../shared/models/vehicle.model';
import { loadVehiclesSuccess, selectVehicle } from '../../actions/vehicle/vehicle.actions';


export const vehicleFeatureKey = 'vehicle';

export interface State {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
}

export const initialState: State = {
  vehicles: [],
  selectedVehicle: null
};


export const reducer = createReducer(
  initialState,
  on(selectVehicle, (state, action) => {
    return {...state, selectedVehicle: action.data}
  }),
  on(loadVehiclesSuccess, (state, action) => {
    return {...state, vehicles: action.data}
  })
);


