import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {

title:String;
name:String;
message:String;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.title=this.dataservice.title;
    this.name=this.dataservice.name;
    this.message=this.dataservice.message;
  }

}
