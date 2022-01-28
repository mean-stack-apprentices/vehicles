import { createReducer, on } from '@ngrx/store';
import { Vehicle } from '../../../../../../shared/models/vehicle.model';
import { selectVehicle } from '../../actions/vehicle/vehicle.actions';


export const vehicleFeatureKey = 'vehicle';

export interface State {
  selectedVehicle: Vehicle | null;
}

export const initialState: State = {
  selectedVehicle: null
};


export const reducer = createReducer(
  initialState,
  on(selectVehicle, (state, action) => {
    return {...state, selectedVehicle: action.data}
  })
);

