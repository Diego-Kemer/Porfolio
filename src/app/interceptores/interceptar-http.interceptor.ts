import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { UiServiceService } from '../services/ui/ui-service.service';

@Injectable()
export class InterceptarHttpInterceptor implements HttpInterceptor {

  constructor(private uiServ: UiServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.uiServ.loading()
    return next.handle(request).pipe(
      finalize(()=>this.uiServ.notLoading())
    );
  }
}
