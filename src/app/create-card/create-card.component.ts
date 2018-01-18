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

  ngOnInit() {
     
  }
}
