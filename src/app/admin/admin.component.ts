import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {}


  navigation(menu){
    this.router.navigateByUrl('app/admin/'+menu);
  }
  logout(menu){
    this.router.navigateByUrl('app/'+menu);
  }
  page(menu){
    this.router.navigateByUrl('app/card/'+menu);
    }
  ngOnInit() {
  }

}
