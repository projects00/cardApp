import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import 'rxjs/Rx';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
test:any;
rForm: FormGroup;
fb1: FormBuilder;
   constructor(private dataservice: DataService, fb: FormBuilder) {
    this.fb1 = fb;
  this.initilizeFrom();

  }

    initilizeFrom() {
    this.rForm = this.fb1.group({
      'viewTitle': [null, Validators.required],
      'viewName': [null, Validators.required],
      'viewMessage': [null, Validators.required]
      
    });
 this.rForm.controls['viewTitle'].setValue(this.dataservice.title);
    this.rForm.controls['viewName'].setValue(this.dataservice.name);
    this.rForm.controls['viewMessage'].setValue(this.dataservice.message);

       
  }
  ngOnInit() {
    
  }
  

}
