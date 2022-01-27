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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
