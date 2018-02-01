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
  cardEditForm: FormGroup;
  fb1: FormBuilder;
dId:Number;

  constructor(private dataservice: DataService, fb: FormBuilder, private router: Router) {

    this.fb1 = fb;
    this.initilizeFrom();

    this.getCardTheme();
  }

  initilizeFrom() {
    this.cForm = this.fb1.group({
      'cardName': [null, Validators.required],
      'cardMessage': [null, Validators.required],
      'cardIsActive': [null],
      'cardCss': [null, Validators.required]
    });

        this.cardEditForm = this.fb1.group({
      'ecardname': [null, Validators.required],
      'emessage': [null, Validators.required],
      'eisactive': [null],
      'ecardcss': [null, Validators.required]
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


  
  updatecard() {
    debugger;
    const _cardtheme = new cardtheme();
    _cardtheme.id=this.dId;
    _cardtheme.name = this.cardEditForm.value.ecardname;
    _cardtheme.message = this.cardEditForm.value.emessage;
    _cardtheme.isactive = this.cardEditForm.value.eisactive;
    _cardtheme.cardcss = this.cardEditForm.value.ecardcss;
    this.dataservice.updateCardTheme(_cardtheme).subscribe(
      (respose) => {
        this.initilizeFrom();
        $("#EditCard").modal("toggle");
         this.getCardTheme();

      });
  }

    editCard(card) {
    this.dId = card.id;
    this.cardEditForm.controls['ecardname'].setValue(card.name);
    this.cardEditForm.controls['emessage'].setValue(card.message);
    this.cardEditForm.controls['ecardcss'].setValue(card.cardcss);
      this.cardEditForm.controls['eisactive'].setValue(card.isactive);
  
  }
    deleteCard(card){
       this.dId = card.id;
    }

    delete(){
      debugger;
         this.dataservice.deleteCardTheme(this.dId).subscribe(
      (respose) => {
        this.initilizeFrom();
        $("#DeleteCard").modal("toggle");
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
           card.isactive = element.isactive;
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
