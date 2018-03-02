import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.css']
})
export class PageNotfoundComponent implements OnInit {

  constructor(private router: Router,private activatedroute :ActivatedRoute)  { }

  ngOnInit() {
  }

  page(home){
    this.router.navigateByUrl('app/card/'+home);
    }

}
