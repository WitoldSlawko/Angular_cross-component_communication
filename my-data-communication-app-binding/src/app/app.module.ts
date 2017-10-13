import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingSenderComponent } from './binding-sender/binding-sender.component';
import { BindingRecievierComponent } from './binding-recievier/binding-recievier.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingSenderComponent,
    BindingRecievierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
