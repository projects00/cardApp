import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class DataService {
intro:String="Test intro";
newID:String;
recipient:String="User";
name:String="Card Team";
message:String="The data server is down or busy please try again later. If the problem still exists please report to the administrator. Sorry for the inconvenience caused. :(";
theme:String="./assets/images/card-data-error.png"
dt: Date = new Date();
//Common Data
webslag:string="webslag";
webtitle:string="webtitle";
webdesc:string="webdesc";
webkey:string="webkey";
webauthor:string="webauthor";

public baseApi = 'https://gentle-gorge-98542.herokuapp.com/';
 //public baseApi = 'http://localhost:5000/';
 constructor(private http: Http) {




  }
 saveCardTheme(cardimage) {
   debugger;
 
    return this.http.post(this.baseApi + "add/cardtheme",  cardimage ).map(response => response.json());
  }

 getCardTheme() {
    return this.http.get(this.baseApi + "get/cardtheme" ).map(response => response.json());
  }

getdefaultSetting()
{
     return this.http.get(this.baseApi + "get/defaultsetting" ).map(response => response.json());

}

getcardthemes()
{
     return this.http.get(this.baseApi + "get/cardthemes" ).map(response => response.json());

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
