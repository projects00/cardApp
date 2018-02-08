import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import 'rxjs/Rx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  editImage:any;
  editmessage:String;
  imagePath:any;
   file: File;
  editImageId:string;
  message:String;
   adminEditForm: FormGroup;
  imageid:Number;
  insertid:Number;
    fb1: FormBuilder;
  constructor(private dataservice: DataService, fb: FormBuilder, private router: Router) {
     this.fb1 = fb;
      this.initilizeFrom();
  }

   initilizeFrom() {
    this.adminEditForm = this.fb1.group({
       'emessage': [null, Validators.required]
    });

  
  }

    getDefaultSetting() {
 
    this.dataservice.getdefaultSetting().subscribe(
      (respose) => {
        debugger;
        respose.forEach(element => {
 
          this.message= element.message;
         this.imageid = element.imageid;
          this.getImage(element.imageid, null);
        

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

    onFileChange(event) {
    debugger;
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        debugger;
        this.editImage = reader.result;
        
      };
    }
  }

  editCard(){
    this.editImage=this.imagePath;
    this.editmessage=this.message;
    this.editImageId=this.imageid.toString();
     this.adminEditForm.controls['emessage'].setValue(this.message);
     this.getImage(this.editImageId, null);
  }

  updateCard(){
   debugger;
     this.dataservice.saveImage(this.file).subscribe(
      (respose) => {
        this.insertid = respose.result.insertId;
      
        this.dataservice.updatDashImage( this.adminEditForm.value.emessage, this.insertid ).subscribe(
          (respose) => {
            this.initilizeFrom();
            $("#EditDefault").modal("toggle");
           this.getDefaultSetting();

          });
      });
  }
   ngOnInit() {
     this.getDefaultSetting();
  }

}
