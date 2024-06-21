import { ErrorHandler, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as StackTrace from 'stacktrace-js';
import { LogError } from './LogError';
import { LogErrorService } from './log-error.service';


@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  router = inject(Router);
  logErrorService = inject(LogErrorService);
  logError: LogError = {
    Message: '',
    Time: '',
    Route: '',
    User: ''
  };
  handleError(error: any): void {
    console.log('handle and log the error here and send it to the server');
    StackTrace.fromError(error).then(stackframes => {
      const stringifiedStack = stackframes
        .map(sf => sf.toString())
        .join('\n');
    //  console.error(stringifiedStack);
        console.log('logError is not null');
        this.logError.Message = stringifiedStack; 
        this.logError.Time = new Date().toDateString();
        this.logError.Route = this.router.url;
        this.logError.User = 'testUser';
        this.logErrorService.logError(this.logError);
        this.router.navigate(['/error-page']);
    });
  }
}


