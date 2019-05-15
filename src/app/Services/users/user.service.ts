import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'https://graal.ens-lyon.fr:9106/api';

  constructor(private httpClient: HttpClient) 
  {
  
  }

  public getUsers(){
    return this.httpClient.get<User[]>(`${this.apiURL}/users`);
  }
 
  public accountActivation(body)
  {
  
    return this.httpClient.post(`${this.apiURL}/activate-account`,body);
  }
  public setPermission(body)
  {
    return this.httpClient.post(`${this.apiURL}/set-permission`,body);
  }
  public deleteUser(body)
  {
    return this.httpClient.post(`${this.apiURL}/remove-user`,body);
  }
}

