import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { VehicleService } from 'src/app/services/vehicle.service';
import { createVehicle, createVehicleFailure, createVehicleSuccess, deleteVehicle, deleteVehicleFailure, deleteVehicleSuccess, loadVehicles, loadVehiclesFailure, loadVehiclesSuccess, navigateOnUpdateVehicleSuccess, updateVehicle, updateVehicleFailure, updateVehicleSuccess } from '../../actions/vehicle/vehicle.actions';



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

  createVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createVehicle),
      mergeMap((action) =>
        this.vehicleService.addVehicle(action.data).pipe(
          map((data) => createVehicleSuccess({data})),
          catchError((error) => of(createVehicleFailure({ error })))
        )
      )
    )
  );

  deleteVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteVehicle),
      mergeMap((action) =>
        this.vehicleService.deleteVehicle(action.data).pipe(
          map((data) => deleteVehicleSuccess({data})),
          catchError((error) => of(deleteVehicleFailure({ error })))
        )
      )
    )
  );

  updateVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVehicle),
      mergeMap((action) =>
        this.vehicleService.updateVehicle(action.data, action.id).pipe(
          map((data) => updateVehicleSuccess({data})),
          catchError((error) => of(updateVehicleFailure({ error })))
        )
      )
    )
  );

  navigateOnUpdateVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVehicleSuccess),
      mergeMap(() => 
      this.vehicleService.navigateOnUpdateVehicle().pipe(
        map(() => navigateOnUpdateVehicleSuccess())
      ))
    )
  ); 

  constructor(private actions$: Actions,
    private vehicleService: VehicleService
  ) 
  {}

}




