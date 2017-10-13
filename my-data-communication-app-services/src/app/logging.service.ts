import { EventEmitter } from '@angular/core';

export class LoggingService {

    logs: string[] = ['My first log'];

    logAdded = new EventEmitter<string>();

    addLog(log: string) {
        this.logs.push(log);
    }
}
