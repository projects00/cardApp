import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
declare var $: any;
import 'rxjs/Rx';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public Newid: Guid;
  imagePath: any;
  imageid: Number;
  intro: String;
  recipient: String;
  name: String;
  message: String;
  today:String;
  cardclass:String="";
  showbtn:String='none';
  sharebtn:String='none';
  theme: String;
  viewtheme: String="./assets/images/cardimage/card-img-001.png";
  chosenOption:String;
  dt: Date = new Date();
  rForm: FormGroup;
  fb1: FormBuilder;
  selectedGroup:number=1;
  ddoption:any;
  selectedValue:any;
  captcharesponse:String="";
  ID:String;
  options = [
    {name: "option1", value:1},
    {name: "option2", value:2},
     {name: "option3", value:3}
  ];
  
  dtformat:String=`dd/MM/yyyy HH:mm`;
  constructor(private dataservice: DataService, fb: FormBuilder, private router: Router,private activatedroute :ActivatedRoute) {
  this.ID = activatedroute.snapshot.params['id'];
 // alert(this.ID);
    this.fb1 = fb;
    this.initilizeFrom();
this.Newid = Guid.create();
//alert("newid:"+this.Newid);

  }

  initilizeFrom() {
    this.rForm = this.fb1.group({
      'viewRecipient': [null, Validators.required],
      'viewName': [null, Validators.required],
      'viewMessage': [null, Validators.required],
      'viewTheme':["./assets/images/cardimage/card-img-001.png"],
      'viewCaptcha':[null, Validators.required]

    });
    this.rForm.controls['viewRecipient'].setValue(this.dataservice.recipient);
    this.rForm.controls['viewName'].setValue(this.dataservice.name);
    this.rForm.controls['viewMessage'].setValue(this.message);
    this.rForm.controls['viewTheme'].setValue(this.dataservice.theme);

  }
 
   resolved(captchaResponse: string) {
     debugger;
     this.captcharesponse = grecaptcha.getResponse();
     this.rForm.controls['viewCaptcha'].setValue(this.captcharesponse);
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }

 
  ngOnInit() {
    this.intro = this.dataservice.intro;
     this.recipient = this.dataservice.recipient;
    this.name = this.dataservice.name;
    this.message = this.dataservice.message;
     this.theme = this.dataservice.theme;
     this.getDefaultSetting();
     this.getCardThemes();
  }

  onChange(){
    debugger;
     this.selectedValue =  this.ddoption.filter(
          book => book.value ===Number(this.rForm.value.viewTheme));
this.rForm.controls['viewMessage'].setValue( this.selectedValue[0].message);
if (this.selectedValue[0].imageid==null){
 this.imagePath = null;
 this.theme=null;
}
else
this.getImage(this.selectedValue[0].imageid, null);

// switch (this.rForm.value.viewTheme) {
//     case "1":
//     {
//       this.theme="./assets/images/cardimage/card-img-001.png";
//        this.viewtheme="./assets/images/cardimage/card-img-001.png";
    
//       break;
//     }
//     case "2":
//     {
//       this.theme="./assets/images/cardimage/card-img-002.png";
//        this.viewtheme="./assets/images/cardimage/card-img-002.png";
//       break;
// }
//     case "3":
//     {
//       this.theme="./assets/images/cardimage/card-img-003.png";
//        this.viewtheme="./assets/images/cardimage/card-img-003.png";
//       break;
//     }

    
//   }

  }

 

  clicked() {
    debugger;
   // this.theme=this.rForm.value.viewTheme;
    this.dataservice.recipient = this.rForm.value.viewRecipient;
    this.dataservice.name = this.rForm.value.viewName;
    this.dataservice.message = this.rForm.value.viewMessage;
    this.dataservice.theme = this.rForm.value.viewTheme;
    $("#myModal").modal("toggle");
    this.router.navigateByUrl('Card/'+this.Newid);
    this.recipient = this.dataservice.recipient;
    this.name = this.dataservice.name;
    this.message = this.dataservice.message;
      this.viewtheme=this.theme;
   //this.theme=this.dataservice.theme;
    const d: Date = new Date();
       this.dt =d;
       this.sharebtn="block";
 
    
  }

  
  getCardThemes() {
    debugger;
  this.ddoption=[];
    this.dataservice.getcardthemes().subscribe(
      (respose) => {
        debugger;
        respose.forEach(element => {

           this.ddoption.push(   {name: element.name, value:element.id,message:element.message,imageid:element.imageId});
           });

      },
      (error) => {
        console.log(error.json());
      }

    );
  }

  
  getDefaultSetting() {

    this.dataservice.getdefaultSetting().subscribe(
      (respose) => {
        debugger;
        respose.forEach(element => {

          this.message = element.message;
          this.imageid = element.imageid;
          this.getImage(element.imageid, null);
          this.rForm.controls['viewMessage'].setValue(this.message);


        });

      },
      (error) => {
        console.log(error.json());
      }

    );
  }

  createImageFromBlob(image: Blob, slide: any) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      if (slide == null) {
        this.imagePath = reader.result;
        this.theme= this.imagePath;
        this.viewtheme= this.imagePath;
      }
      else
        slide.image = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  getImage(id: string, slide: any) {
    debugger;
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

  test(){
    //debugger;
    this.cardclass="postpopup";
    this.showbtn="block";
  }

  print(){
    alert('print this');
  }
  


}
