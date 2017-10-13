import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-binding-sender',
  templateUrl: './binding-sender.component.html',
  styleUrls: ['./binding-sender.component.css']
})
export class BindingSenderComponent {

  @Output ('logCreated') logCreated = new EventEmitter<string>();

  @ViewChild('logContentInput') logContentInput: ElementRef;

  onAddLog(logInput: HTMLInputElement) {
    this.logCreated.emit(
      logInput.value
    );
  }

}
