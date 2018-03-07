import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  constructor(private router: Router) {}


  logout(menu){
    this.router.navigateByUrl('app/'+menu);
  }
  ngOnInit() {
  }

}