import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { HttpRequest } from '@angular/common/http';
@Injectable()
export class AuthService {

  cachedRequests: Array<HttpRequest<any>> = [];

  public getToken(): string {
    //console.log(localStorage.getItem('auth_app_token'))
    return localStorage.getItem('auth_app_token');
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}