import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
title:String="title test data";
name:String="sample name";
message:String="sample Message";
theme:String="./assets/img/img-01.png"
 dt: Date = new Date();
  constructor() { }

}
