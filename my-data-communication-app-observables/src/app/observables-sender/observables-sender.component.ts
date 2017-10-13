import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-observables-sender',
  templateUrl: './observables-sender.component.html',
  styleUrls: ['./observables-sender.component.css']
})

export class ObservablesSenderComponent implements OnInit {
  // logToPass: string;

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {}

  onAddLog(logInput: HTMLInputElement) {
    // this.loggingService.addLog(logInput.value);
    // this.loggingService.logAdded.emit(logInput.value);
    this.loggingService.myLogs.next(logInput.value);
  }

}

// @Output ('logCreated') logCreated = new EventEmitter<string>();
// @ViewChild('logContentInput') logContentInput: ElementRef;

