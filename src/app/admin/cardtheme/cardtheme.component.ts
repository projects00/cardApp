import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { cardtheme } from '../../model/cardtheme';
@Component({
  selector: 'app-cardtheme',
  templateUrl: './cardtheme.component.html',
  styleUrls: ['./cardtheme.component.css']
})
export class CardthemeComponent implements OnInit {
  cardtheme: any;
  dt: Date = new Date();
  cForm: FormGroup;
  fb1: FormBuilder;

  constructor(private dataservice: DataService, fb: FormBuilder, private router: Router) {

    this.fb1 = fb;
    this.initilizeFrom();

    this.getCardTheme();
  }

  initilizeFrom() {
    this.cForm = this.fb1.group({
      'cardName': [null, Validators.required],
      'cardMessage': [null, Validators.required],
      'cardIsActive': [null, Validators.required],
      'cardCss': [null, Validators.required]
    });

  }

  savecard() {
    debugger;
    const _cardtheme = new cardtheme();
    _cardtheme.name = this.cForm.value.cardName;
    _cardtheme.message = this.cForm.value.cardMessage;
    _cardtheme.isactive = this.cForm.value.cardIsActive;
    _cardtheme.cardcss = this.cForm.value.cardCss;
    this.dataservice.saveCardTheme(_cardtheme).subscribe(
      (respose) => {
        console.log(respose);
        this.initilizeFrom();
        $("#NewCard").modal("toggle");
         this.getCardTheme();

      });
  }

  getCardTheme() {
    this.cardtheme = [];
    this.dataservice.getCardTheme().subscribe(
      (respose) => {
        debugger;
        respose.forEach(element => {
          const card = new cardtheme();
          card.id = element.id;
          card.name = element.name;
          card.message = element.message;
          card.isactive=1;
          this.cardtheme.push(card);
          
        });
        
      },
      (error) => {
        console.log(error.json());
      }

    );
  }
  ngOnInit() {
  }

}
