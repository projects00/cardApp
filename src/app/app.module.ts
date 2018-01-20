import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {DataService } from './data.service';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { SettingComponent } from './setting/setting.component';
import { ActivecardComponent } from './activecard/activecard.component';
import { CardthemeComponent } from './cardtheme/cardtheme.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AdminLoginComponent,
    AdminComponent,
    AdmindashComponent,
    SettingComponent,
    ActivecardComponent,
    CardthemeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
  path: 'app',
  component: AppComponent,
  children : [
                { path: 'card', component: CardComponent },
                { path: 'login', component: AdminLoginComponent},
                  { path: 'admin', component: AdminComponent,children:[{path: 'dash', component: AdmindashComponent},{path: 'setting', component: SettingComponent} ,{path: 'activecard', component: ActivecardComponent},
                  {path: 'activecard', component: ActivecardComponent},{path: 'cardtheme', component: CardthemeComponent} ]}
                   ]
},
      {
        path: 'Card',
        component: CardComponent
      },
      {
        path: 'Card/123',
        component: CardComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
