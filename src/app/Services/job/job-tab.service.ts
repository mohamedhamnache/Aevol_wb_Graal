import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobTabService {
  apiURL: string = 'https://graal.ens-lyon.fr:9106/api';
  constructor(private httpClient: HttpClient) { 
   
  }

  public getUserJobs(body)
  {
    return this.httpClient.post(`${this.apiURL}/userJobs`,body);
  }
  public createJob(body)
  {
    return this.httpClient.post(`${this.apiURL}/create-job`,body);
  }

  public RemoveSim(body)
  {
    return this.httpClient.post(`${this.apiURL}/remove-job`,body);
  }
  public CancelSim(body)
  {
    return this.httpClient.post(`${this.apiURL}/update-status`,body);
  }
}

