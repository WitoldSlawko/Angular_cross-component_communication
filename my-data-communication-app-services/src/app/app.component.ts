import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  logs: string[] = [];

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.logs = this.loggingService.logs;
  }
}


