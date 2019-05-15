import { Component, OnInit } from '@angular/core';
import { HttpModule, RequestOptions, Http, Response, Headers,  } from '@angular/http';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Router,  } from '@angular/router';

let  urlActive: string;

@Component({
  selector: 'ngx-tables',
  template: `<router-outlet></router-outlet>`,
})
export class TablesComponent implements OnInit {
  constructor() {
  
  }
  ngOnInit(){
    
}




}
