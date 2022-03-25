import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatingLabelInputComponent } from './floating-label-input/floating-label-input.component';
import { GameSetupComponent } from './game-setup/game-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingLabelInputComponent,
    GameSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
