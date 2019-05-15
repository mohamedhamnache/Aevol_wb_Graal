import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  apiURL: string = 'https://graal.ens-lyon.fr:9106/api';

  constructor(private httpClient: HttpClient) { 
   
  }
  
  public getJobInfo()
  {
    return this.httpClient.get(`${this.apiURL}/job-info-g5k`);
  }
  public creatNewJob(body)
  {
    return this.httpClient.post(`${this.apiURL}/create-job`,body);
  }
  public makeG5kReservation(body)
  {
    return this.httpClient.post(`${this.apiURL}/nodeReservation`,body);
  }
  
  public runSingleSim(body)
  {
    return this.httpClient.post(`${this.apiURL}/run-single-sim`,body);
  }

}


