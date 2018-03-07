import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-notfound',
  template: `
  <div class="row">
    <div class="col">
        <div class="wrap">
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div class="postouter">
                <img src="assets/images/404.svg" class="postcard" alt="postcard icon" title="PostCatd! Not Found">
                <img src="assets/images/postcover1.svg" class="postcover1" alt="postcard top icon" title="404">
                <img src="assets/images/postcover2.svg" class="postcover2" alt="postcard bottom icon" title="404 Not Found">
            </div>
        </div>
    </div>
</div>

  `,
  styleUrls: ['./page-notfound.component.css']
})
export class PageNotfoundComponent implements OnInit {

  constructor(private router: Router)  { }

  ngOnInit() {
  }

}
