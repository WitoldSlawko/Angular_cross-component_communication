import { Component, Input, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-observables-recievier',
  templateUrl: './observables-recievier.component.html',
  styleUrls: ['./observables-recievier.component.css']
})

export class ObservablesRecievierComponent {
  @Input('myLog') myLog: string;
  /*
  @ViewChild('logging') logging: ElementRef;
  @ContentChild('contentLogs') contentLogs;
  */

  constructor(private loggingService: LoggingService) {
    this.loggingService.myLogs.subscribe((passed) => {
      console.log(passed);
    });
  }
}
