import { Component, OnInit, Input, Output, EventEmitter,ViewChild } from '@angular/core';
import { DataService } from '../../data.service';
declare var $: any;
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { cardtheme } from '../../model/cardtheme';
@Component({
  selector: 'app-activecard',
  templateUrl: './activecard.component.html',
  styleUrls: ['./activecard.component.css']
})
export class ActivecardComponent implements OnInit {
cardtheme: any;
  constructor(private dataservice: DataService) {
    this.getActiveCard();
   }

  ngOnInit() {
  }


    getActiveCard() {
    this.cardtheme = [];
    this.dataservice.getActiveCards().subscribe(
      (respose) => {
        debugger;
this.cardtheme=respose;


      },
      (error) => {
        console.log(error.json());
      }

    );
  }
}
