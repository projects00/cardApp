import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {DataService } from './data.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ActivecardComponent } from './admin/activecard/activecard.component';
import { CardthemeComponent } from './admin/cardtheme/cardtheme.component';
import { PagesComponent } from './admin/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AdminLoginComponent,
    AdminComponent,
    AdmindashComponent,
    SettingComponent,
    ActivecardComponent,
    CardthemeComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
  path: 'app',
  component: AppComponent,
  children : [
                { path: 'card', component: CardComponent },
                { path: 'login', component: AdminLoginComponent},
                { path: 'admin', component: AdminComponent,   
      children:[
                {path: 'dash', component: AdmindashComponent},
                {path: 'setting', component: SettingComponent},
                {path: 'activecard', component: ActivecardComponent},
                {path: 'activecard', component: ActivecardComponent},
                {path: 'cardtheme', component: CardthemeComponent},
                {path: 'pages', component: PagesComponent} ]}
                ]
},
      {
        path: 'Card',
        component: CardComponent
      },
      {
        path: 'Card/:id',
        component: CardComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
