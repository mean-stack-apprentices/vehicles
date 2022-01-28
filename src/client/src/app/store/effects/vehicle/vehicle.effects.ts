import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { VehicleService } from 'src/app/services/vehicle.service';
import { loadVehicles, loadVehiclesFailure, loadVehiclesSuccess } from '../../actions/vehicle/vehicle.actions';



@Injectable()
export class VehicleEffects {
  loadVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVehicles),
      mergeMap(() =>
        this.vehicleService.getVehicles().pipe(
          map((data) => loadVehiclesSuccess( {data} )),
          catchError((error) => of(loadVehiclesFailure({ error })))
        )
      )
    )
  );


  constructor(private actions$: Actions,
    private vehicleService: VehicleService
  ) 
  {}

}




