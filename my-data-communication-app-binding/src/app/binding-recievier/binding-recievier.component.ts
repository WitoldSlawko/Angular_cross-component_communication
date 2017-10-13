import { Component, Input, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-binding-recievier',
  templateUrl: './binding-recievier.component.html',
  styleUrls: ['./binding-recievier.component.css']
})
export class BindingRecievierComponent   {
  @Input('myLog') myLog: string;
  @ViewChild('logging') logging: ElementRef;
  @ContentChild('contentLogs') contentLogs;

}
