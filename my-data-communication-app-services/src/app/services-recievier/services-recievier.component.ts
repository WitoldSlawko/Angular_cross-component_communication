import { Component, Input, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-services-recievier',
  templateUrl: './services-recievier.component.html',
  styleUrls: ['./services-recievier.component.css']
})

export class ServicesRecievierComponent {
  @Input('myLog') myLog: string;
  /*
  @ViewChild('logging') logging: ElementRef;
  @ContentChild('contentLogs') contentLogs;
  */

  constructor(private loggingService: LoggingService) {
    this.loggingService.logAdded.subscribe((passed) => {
      console.log(passed);
    });
  }
}
