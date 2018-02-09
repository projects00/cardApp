import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class DataService {
recipient:String="Recipient";
name:String="Test user name";
message:String="Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mock ups. Lorem Ipsum is place1";
theme:String="./assets/images/cardimage/card-img-001.png"
 dt: Date = new Date();
public baseApi = 'http://ec2-52-91-21-206.compute-1.amazonaws.com:5000/';
 //public baseApi = 'http://localhost:5000/';
 constructor(private http: Http) {




  }
 saveCardTheme(cardimage) {
   debugger;
   cardimage.isactive=0;
    return this.http.post(this.baseApi + "add/cardtheme",  cardimage ).map(response => response.json());
  }

 getCardTheme() {
    return this.http.get(this.baseApi + "get/cardtheme" ).map(response => response.json());
  }

getdefaultSetting()
{
     return this.http.get(this.baseApi + "get/defaultsetting" ).map(response => response.json());

}

  getImage(id) {
    return this.http.get(this.baseApi + "get/img/" + id, { responseType: ResponseContentType.Blob })
      .map((res: Response) => res.blob());

  }
  
    updateCardTheme(cardimage){
       return this.http.put(this.baseApi + "update/cardtheme/" + cardimage.id, cardimage).map(response => response.json());

  }

     updatDashImage(message,imageid){
       return this.http.put(this.baseApi + "updatedash/dashimage", {message:message,imageid:imageid}).map(response => response.json());

  }
  deleteCardTheme(id){
       return this.http.put(this.baseApi + "delete/cardtheme/"+id,null).map(response => response.json());

  }

    saveImage(fileToUpload: File) {
      debugger;
    const _formData = new FormData();
    _formData.append("Name", fileToUpload.name);
    _formData.append("img", fileToUpload);
    let body = _formData;
    let headers = new Headers();
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.baseApi + "post/img", body, options).map(response => response.json());
  }
}
