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
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { PageNotfoundComponent } from './card/page-notfound/page-notfound.component';
import { ShareButtonsModule} from "ngx-sharebuttons";
import { HttpClientModule } from '@angular/common/http';

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
    PagePrivacypolicyComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    RecaptchaModule.forRoot(),
    ShareButtonsModule.forRoot(),
    RouterModule.forRoot([
      {
  path: 'app',
  component: AppComponent,
  children : [
                { path: 'card', component: CardComponent,
      children:[
                { path: '', component: PostCardComponent },
                { path: 'home', component: PostCardComponent },
                { path: 'about', component: PageAboutComponent },
                { path: 'donate', component: PageDonateComponent },
                { path: 'faqs', component: PageFaqsComponent },
                { path: 'contact', component: PageContactComponent },
                { path: 'terms', component: PageTermsandconditionComponent },
                { path: 'privacy', component: PagePrivacypolicyComponent },
                { path: '404', component: PageNotfoundComponent }]
              },
                { path: 'login', component: AdminLoginComponent},
                { path: 'admin', component: AdminComponent,   
      children:[
                { path: '', component: AdmindashComponent},
                { path: 'dash', component: AdmindashComponent},
                { path: 'setting', component: SettingComponent},
                { path: 'activecard', component: ActivecardComponent},
                { path: 'activecard', component: ActivecardComponent},
                { path: 'cardtheme', component: CardthemeComponent},
                { path: 'pages', component: PagesComponent} ]}
                ]
              },
              { path: '', component: CardComponent, children:[{path: '', component: PostCardComponent }]},
              { path: 'card:id', component: CardComponent},
    ])
  ],
  providers: [DataService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
