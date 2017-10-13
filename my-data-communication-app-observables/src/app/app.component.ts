import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  logs: string[] = ['This is my first log'];

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.myLogs.subscribe((passing: string) => {
      this.logs.push(passing);
    });
  }
}


