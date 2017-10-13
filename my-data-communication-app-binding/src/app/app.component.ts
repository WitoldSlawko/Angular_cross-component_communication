import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  logs: string[] = ['First log'];

  onLogAdded(logData: string) {
    this.logs.push(logData);
  }
}


