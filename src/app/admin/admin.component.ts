import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {}


  logout(menu){
    this.router.navigateByUrl('app/'+menu);
  }
  page(menu){
    this.router.navigateByUrl('app/card/'+menu);
    }
  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('admin');
  }
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("admin");
  }

}
