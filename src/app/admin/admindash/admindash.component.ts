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

  imagePath:any;
  message:String;
  imageid:Number;
  constructor(private dataservice: DataService, fb: FormBuilder, private router: Router) {
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

   ngOnInit() {
     this.getDefaultSetting();
  }

}
