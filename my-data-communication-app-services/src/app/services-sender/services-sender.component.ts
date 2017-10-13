import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-services-sender',
  templateUrl: './services-sender.component.html',
  styleUrls: ['./services-sender.component.css']
})

export class ServicesSenderComponent {

  constructor(private loggingService: LoggingService) {}

  onAddLog(logInput: HTMLInputElement) {
    this.loggingService.addLog(logInput.value);
    this.loggingService.logAdded.emit(logInput.value);
  }

}

// @Output ('logCreated') logCreated = new EventEmitter<string>();
// @ViewChild('logContentInput') logContentInput: ElementRef;

