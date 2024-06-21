import { Injectable } from "@angular/core";
import { LogUpdatedService } from "./logupdated.service";


@Injectable({
    providedIn:'root',
    useClass:LogUpdatedService
})
export class LogService {

}