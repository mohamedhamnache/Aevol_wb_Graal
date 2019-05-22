import { Component, VERSION } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType,HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  apiURL: string = 'https://graal.ens-lyon.fr:9106/api';
  percentDone: number;
  uploadSuccess: boolean;

  constructor(private http: HttpClient,) { }
    

  
  upload(files: File[],id_job){
    //pick from one of the 4 styles of file uploads below
    this.basicUpload(files,id_job)
    //this.uploadAndProgress(files);
  }

  basicUpload(files: File[],id_job){
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))
    Array.from(files).forEach(f => formData.append('id_job', id_job))
    console.log(formData)
    this.http.post('https://graal.ens-lyon.fr:9106/api/upload-param-file', formData)
      .subscribe(event => {  
        
      })
  }
  
  public downloadResult(body)
  {
    return this.http.post(`${this.apiURL}/download-result`,body,
    {
      responseType: "blob",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

}
