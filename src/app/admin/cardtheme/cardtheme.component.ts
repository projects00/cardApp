import { Component, OnInit, Input, Output, EventEmitter,ViewChild } from '@angular/core';
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
 @ViewChild('cForm') form;
  insertid: number;
  file: File;
  imagePath: any;
  dt: Date = new Date();
  cForm: FormGroup;
  cardEditForm: FormGroup;
  fb1: FormBuilder;
  dId: Number;
  intro: String;
  recipient: String;
  name: String;
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
      'cardCss': [null],
      'cardImage': [null],
    });

    this.cardEditForm = this.fb1.group({
      'ecardname': [null, Validators.required],
      'emessage': [null, Validators.required],
      'eisactive': [null],
      'ecardcss': [null],
      'ecardImage': [null],
      'ecardImageid': [null]

    });
  }

  savecard() {
    debugger;
    this.dataservice.saveImage(this.file).subscribe(
      (respose) => {
        this.insertid = respose.result.insertId;
        const _cardtheme = new cardtheme();
        _cardtheme.name = this.cForm.value.cardName;
        _cardtheme.message = this.cForm.value.cardMessage;
        _cardtheme.isactive = this.cForm.value.cardIsActive;
        _cardtheme.cardcss = this.cForm.value.cardCss;
        _cardtheme.imageId = this.insertid;
        this.dataservice.saveCardTheme(_cardtheme).subscribe(
          (respose) => {
            console.log(respose);
            this.cForm.reset();
            this.imagePath="";
           $("#avatar").value = "";
            this.initilizeFrom();
            $("#NewCard").modal("toggle");
            this.getCardTheme();

          });
      });
  }

  reset(){
    this.initilizeFrom();
  }
  createImageFromBlob(image: Blob, slide: any) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      if (slide == null) {
        this.imagePath = reader.result;
      }
      else
        slide.image = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  getImage(id: string, slide: any) {
    let imgid;
    if (id == null)
      imgid = slide.imageId;
    else
      imgid = id;
    this.dataservice.getImage(imgid).subscribe(data => {
      let reader = new FileReader();
      this.createImageFromBlob(data, slide);
    }, error => {
      return null

    });
  }


  updatecard() {
    debugger;
    this.dataservice.saveImage(this.file).subscribe(
      (respose) => {
        this.insertid = respose.result.insertId;
        const _cardtheme = new cardtheme();
        _cardtheme.id = this.dId;
        _cardtheme.name = this.cardEditForm.value.ecardname;
        _cardtheme.message = this.cardEditForm.value.emessage;
        _cardtheme.isactive = this.cardEditForm.value.eisactive;
        _cardtheme.cardcss = this.cardEditForm.value.ecardcss;
        _cardtheme.imageId = this.insertid;

        this.dataservice.updateCardTheme(_cardtheme).subscribe(
          (respose) => {
            this.initilizeFrom();
            $("#EditCard").modal("toggle");
            this.getCardTheme();

          });
      });
  }

  editCard(card) {
    debugger;
    this.dId = card.id;
    this.cardEditForm.controls['ecardname'].setValue(card.name);
    this.cardEditForm.controls['emessage'].setValue(card.message);
    this.cardEditForm.controls['ecardcss'].setValue(card.cardcss);
    this.cardEditForm.controls['eisactive'].setValue(card.isactive);
    this.getImage(card.imageId, null);

  }
  deleteCard(card) {
    this.dId = card.id;
  }

  delete() {
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
          card.imageId = element.imageId;
          this.getImage(element.imgageId, card);
          card.isactive = element.isactive;
          this.cardtheme.push(card);

        });

      },
      (error) => {
        console.log(error.json());
      }

    );
  }

  onFileChange(event) {
    debugger;
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        debugger;
        this.imagePath = reader.result;
      };
    }
  }
  ngOnInit() {
    this.intro = this.dataservice.intro;
    this.recipient = this.dataservice.recipient;
    this.name = this.dataservice.name;
  }

}
