import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
declare var $: any;
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title: String;
  name: String;
  message: String;
  today:String;
  theme: String;
  chosenOption:String;
  dt: Date = new Date();
  rForm: FormGroup;
  fb1: FormBuilder;
  options = [
    {name: "option1", value:1},
    {name: "option2", value:2},
     {name: "option2", value:2}
  ]
  dtformat:String=`dd/MM/yyyy HH:mm`;
  constructor(private dataservice: DataService, fb: FormBuilder, private router: Router) {
    this.fb1 = fb;
    this.initilizeFrom();
    this.onChange();

  }

  initilizeFrom() {
    this.rForm = this.fb1.group({
      'viewTitle': [null, Validators.required],
      'viewName': [null, Validators.required],
      'viewMessage': [null, Validators.required],
      'viewTheme':["./assets/img/img-01.png"]

    });
    this.rForm.controls['viewTitle'].setValue(this.dataservice.title);
    this.rForm.controls['viewName'].setValue(this.dataservice.name);
    this.rForm.controls['viewMessage'].setValue(this.dataservice.message);
    this.rForm.controls['viewTheme'].setValue(this.dataservice.theme);

  }
 

  ngOnInit() {
     this.title = this.dataservice.title;
    this.name = this.dataservice.name;
    this.message = this.dataservice.message;
     this.theme = this.dataservice.theme;
  }

  onChange(){
    debugger;
switch (this.rForm.value.viewTheme) {
    case "1":
      this.theme="./assets/img/img-01.png";
      break;
    case "2":
      this.theme="./assets/img/img-02.png";
      break;
    case "3":
      this.theme="./assets/img/img-03.png";
      break;

    
  }

  }
  clicked() {
    debugger;
   // this.theme=this.rForm.value.viewTheme;
    this.dataservice.title = this.rForm.value.viewTitle;
    this.dataservice.name = this.rForm.value.viewName;
    this.dataservice.message = this.rForm.value.viewMessage;
    this.dataservice.theme = this.rForm.value.viewTheme;
    $("#myModal").modal("toggle");
    this.router.navigateByUrl('Card/123');
    this.title = this.dataservice.title;
    this.name = this.dataservice.name;
    this.message = this.dataservice.message;
   //this.theme=this.dataservice.theme;
    const d: Date = new Date();
       this.dt =d;
    
  }

}
