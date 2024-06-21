import { Injectable, inject } from '@angular/core';
import { LogError } from './LogError';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogErrorService {

  private http = inject(HttpClient);

  logError(log: LogError):any {
    console.log(log);
    // this.http.post('http://your-api-url.com', log).subscribe(
    //   response => {
    //     console.log(response);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }
}
