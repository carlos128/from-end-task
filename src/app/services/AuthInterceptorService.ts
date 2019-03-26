import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { GetToken } from '../../app/modules/auth/login/get.token.auth'
import { Tokens } from  '../models/token.model'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
	getTokens=new GetToken();
	constructor() {
	}
	intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<HttpEvent<any>> {
	
		
		const authReq = req.clone(
			{ headers: req.headers.set('Authorization', 'Bearer '+ this.getTokens.returToken().acces_token) }
			);
		return next.handle(authReq);
	}
}
