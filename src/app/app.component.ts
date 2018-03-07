import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor(private router:Router) {
      this.router.errorHandler = (error: any) => {
        this.router.navigate(['app/card/404']); // or redirect to default route
      }
    }

    ngOnInit() {
  //  this.router.navigateByUrl("app/card");
  }

}
