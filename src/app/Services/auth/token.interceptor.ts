import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {NbAuthService} from '@nebular/auth';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import * as jwt_decode from "jwt-decode";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth : NbAuthService, private activatedRoute: ActivatedRoute) { 

  }
  
  resetToken = null
  getDecodedAccessToken(token: any): any {
    try{

        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

getToken() :any
{
  this.activatedRoute.queryParams.subscribe(params => {
    const token = params['token'];
    if (token != null)
    {
      return token;
    }
    else return null;
});
}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.activatedRoute.queryParams.subscribe(params => {
      this.resetToken = params['token'];
      
  });
    if (localStorage.getItem('auth_app_token')!= null)
    {
      const token = JSON.parse(localStorage.getItem('auth_app_token')).value ;
  
      request = request.clone({
        setHeaders: {
          
          Authorization: `Bearer ${token}`,
        },

      });  
    }
  
    
  
   
   if (request.url == "https://graal.ens-lyon.fr:9106/api/resetpassword")
   {
    request = request.clone({
      body : {
        password :request.body.password,
        email: this.getDecodedAccessToken(this.resetToken).identity,
        token : this.resetToken,
      }
    });
   }
    
   if (request.url == "https://graal.ens-lyon.fr:9106/api/login")
   {
    
    return next.handle(request)
	    .pipe(
	        tap(event => {
	          if (event instanceof HttpResponse) {
	             
	            //console.log(" all looks good");
	            // http response status code
              //console.log(event.status);
              //console.log("je suis la !!!")
              //console.log(event.body.ID_USER)
              localStorage.setItem('ID_USER', event.body.ID_USER);
	          }
	        }, error => {
	   			// http response status code
	          	//console.log("----response----");
	          	//console.error("status code:");
	          	//console.error(error.status);
	          	//console.error(error.message);
	          	//console.log("--- end of response---");

	        })
	      )

    }
   else{
    return next.handle(request);
   }
    
    
    
  }
}