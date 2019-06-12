import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SimulationService} from'../../Services/simulation/simulation.service'
@Component({
  selector: 'ngx-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss']
})
export class CompanionComponent implements OnInit {
  arr: any[]=[]; 
  rumSimForm: FormGroup;
  submitted = false;
  PlatforState :String;
    simName:string;
    nbGenerations;
    nbThreads;
    TimeLetfUnix ;
    bound = 1800;
    id_deployment
    Id_user;
    id_job;
    paramFile: any;
    file:any;
    params;
    json;
  constructor(private formBuilder: FormBuilder,private simulationService : SimulationService,private router : Router) { }

  ngOnInit() {this.rumSimForm = this.formBuilder.group({
    simName: ['', Validators.required],
    NBGen: ['', Validators.required],
    NBth: ['', Validators.required],
    paramFile: ['', Validators.required],
    params : ['', Validators.required],
  });

  }

  get f() { return this.rumSimForm.controls; }
  
  fileChanged(ev) {
    this.file = ev.target.files[0];
   }
   
  OnRunSimComp(form : NgForm)
  {
    this.submitted = true;

        // stop here if form is invalid
        if (this.rumSimForm.invalid) {
            return;
        }
        this.arr = form.value
        this.simulationService.getJobInfo().subscribe(data => {
          console.log(data)
          this.PlatforState = JSON.parse(JSON.stringify(data)).state
          this.TimeLetfUnix =  JSON.parse(JSON.stringify(data)).time_left
          this.id_deployment =JSON.parse(JSON.stringify(data)).id_deployment
          this.Id_user = localStorage.getItem('ID_USER')
          let reader = new FileReader();
          reader.onload = (function (theFile) {
            return function (e) {
              try {
                this.json = JSON.parse(e.target.result);
                console.log(this.json)
              } catch (ex) {
                alert('ex when trying to parse json = ' + ex);
              }
            }
          })(this.file);
          reader.readAsText(this.file);
          console.log("****************************")
          console.log(this.json)

        })


       
        
        

    
    //console.log(this.arr)
  }

}
