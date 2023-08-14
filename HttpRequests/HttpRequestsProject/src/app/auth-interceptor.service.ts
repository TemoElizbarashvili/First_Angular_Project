import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable  } from "rxjs";
import { tap } from "rxjs/operators";


export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url === 'Gela.com'){
            return next.handle(req);
        }
        const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xzy') });
        return next.handle(modifiedRequest);
    }

}