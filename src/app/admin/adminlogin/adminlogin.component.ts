import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) {}

  login(menu){
    this.router.navigateByUrl('app/admin/'+menu);
}
  ngOnInit() {
  }

}
