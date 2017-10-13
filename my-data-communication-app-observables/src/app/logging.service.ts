import { Subject } from 'rxjs/Subject';

export class LoggingService {
    myLogs = new Subject();
}
