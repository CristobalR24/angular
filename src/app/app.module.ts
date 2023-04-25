import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperiorComponent } from './superior/superior.component';
import { InferiorComponent } from './inferior/inferior.component';
import { FuzzBuzzComponent } from './fuzz-buzz/fuzz-buzz.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperiorComponent,
    InferiorComponent,
    FuzzBuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,SuperiorComponent,InferiorComponent]
})
export class AppModule {

 }
