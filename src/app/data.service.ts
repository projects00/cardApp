import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
recipient:String="Recipient";
name:String="Test user name";
message:String="Test Messages";
theme:String="./assets/images/cardimage/card-img-001.png"
 dt: Date = new Date();
  constructor() { }

}
