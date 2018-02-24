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
import { RecaptchaModule } from 'ng-recaptcha';
import { PostCardComponent } from './card/post-card/post-card.component';
import { PageAboutComponent } from './card/page-about/page-about.component';
import { PageDonateComponent } from './card/page-donate/page-donate.component';
import { PageFaqsComponent } from './card/page-faqs/page-faqs.component';
import { PageContactComponent } from './card/page-contact/page-contact.component';
import { PageTermsandconditionComponent } from './card/page-termsandcondition/page-termsandcondition.component';
import { PagePrivacypolicyComponent } from './card/page-privacypolicy/page-privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PostCardComponent,
    AdminLoginComponent,
    AdminComponent,
    AdmindashComponent,
    SettingComponent,
    ActivecardComponent,
    CardthemeComponent,
    PagesComponent,
    PageAboutComponent,
    PageDonateComponent,
    PageFaqsComponent,
    PageContactComponent,
    PageTermsandconditionComponent,
    PagePrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
     RecaptchaModule.forRoot(),
    RouterModule.forRoot([
      {
  path: 'app',
  component: AppComponent,
  children : [
                { path: 'card', component: CardComponent,
      children:[
                { path: 'home', component: PostCardComponent },
                { path: 'about', component: PageAboutComponent },
                { path: 'donate', component: PageDonateComponent },
                { path: 'faqs', component: PageFaqsComponent },
                { path: 'contact', component: PageContactComponent },
                { path: 'terms', component: PageTermsandconditionComponent },
                { path: 'privacy', component: PagePrivacypolicyComponent }]
              },
                { path: 'login', component: AdminLoginComponent},
                { path: 'admin', component: AdminComponent,   
      children:[
                { path: 'dash', component: AdmindashComponent},
                { path: 'setting', component: SettingComponent},
                { path: 'activecard', component: ActivecardComponent},
                { path: 'activecard', component: ActivecardComponent},
                { path: 'cardtheme', component: CardthemeComponent},
                { path: 'pages', component: PagesComponent} ]}
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
