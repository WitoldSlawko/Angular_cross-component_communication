import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesRecievierComponent } from './services-recievier/services-recievier.component';
import { ServicesSenderComponent } from './services-sender/services-sender.component';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicesRecievierComponent,
    ServicesSenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
