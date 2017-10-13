import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservablesRecievierComponent } from './observables-recievier/observables-recievier.component';
import { ObservablesSenderComponent } from './observables-sender/observables-sender.component';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesRecievierComponent,
    ObservablesSenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
