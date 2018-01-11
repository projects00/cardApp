import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {DataService } from './data.service';
import { AppComponent } from './app.component';
import { ViewCardComponent } from './view-card/view-card.component';
import { CreateCardComponent } from './create-card/create-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewCardComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'View-Card',
        component: ViewCardComponent
      },
      {
        path: 'Create-Card',
        component: CreateCardComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
