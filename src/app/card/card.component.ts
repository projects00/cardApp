import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

title:String;
name:String;
message:String;
 test:any;
rForm: FormGroup;
fb1: FormBuilder;
   constructor(private dataservice: DataService, fb: FormBuilder, private router: Router) {
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
    this.title=this.dataservice.title;
    this.name=this.dataservice.name;
    this.message=this.dataservice.message;
  }
  
  clicked(){
   this.dataservice.title=this.rForm.value.viewTitle;
      this.dataservice.name=this.rForm.value.viewName;
       this.dataservice.message=this.rForm.value.viewMessage;
     $("#myModal").modal("toggle");
      this.router.navigateByUrl('Card/123');
       this.title=this.dataservice.title;
    this.name=this.dataservice.name;
    this.message=this.dataservice.message;
  }

}
