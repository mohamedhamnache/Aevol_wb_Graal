import { Component, VERSION } from '@angular/core';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

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
  
  //this will fail since file.io dosen't accept this type of upload
  //but it is still possible to upload a file with this style
  basicUploadSingle(file: File,id_job){  
    const body = {file :file,path:id_job}  
    this.http.post('https://graal.ens-lyon.fr:9106/api/upload-param-file', body)
      .subscribe(event => {  
        console.log('done')
        console.log(event)
      })
  }
  
  uploadAndProgress(files: File[]){
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))
    
    this.http.post('https://file.io', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }
  
  //this will fail since file.io dosen't accept this type of upload
  //but it is still possible to upload a file with this style
  uploadAndProgressSingle(file: File){    
    this.http.post('https://file.io', file, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
    });
  }

}
