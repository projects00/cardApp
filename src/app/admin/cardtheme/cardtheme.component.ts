import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import 'rxjs/Rx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cardtheme',
  templateUrl: './cardtheme.component.html',
  styleUrls: ['./cardtheme.component.css']
})
export class CardthemeComponent implements OnInit {

  dt: Date = new Date();
  cForm: FormGroup;
  fb1: FormBuilder;

  constructor(private dataservice: DataService, fb: FormBuilder, private router: Router) {
  
    this.fb1 = fb;
    this.initilizeFrom();


  }

    initilizeFrom() {
    this.cForm = this.fb1.group({
      'cardName': [null, Validators.required],
      'cardMessage': [null, Validators.required],
      'cardImage': ["./assets/images/cardimage/card-img-001.png"] ,
      'cardIsActive':[null, Validators.required],
       'cardCss':[null, Validators.required]
    });
    // this.rForm.controls['CardName'].setValue(this.dataservice.recipient);
    // this.rForm.controls['CardMessage'].setValue(this.dataservice.name);
    // this.rForm.controls['CardImage'].setValue(this.dataservice.message);
    // this.rForm.controls['CardIsActive'].setValue(this.dataservice.theme);
    // this.rForm.controls['CardCss'].setValue(this.dataservice.theme);

  }

  ngOnInit() {
  }

}
