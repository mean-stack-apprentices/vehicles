import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { VehicleInputComponent } from './components/vehicle-input/vehicle-input.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle.component';
import { StoreModule } from '@ngrx/store';
import * as fromVehicle from './store/reducers/vehicle/vehicle.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from './store/effects/vehicle/vehicle.effects';
import { metaReducers, reducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    VehicleInputComponent,
    VehiclesListComponent,
    EditVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromVehicle.vehicleFeatureKey, fromVehicle.reducer),
    EffectsModule.forRoot([VehicleEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
