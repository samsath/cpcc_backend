// system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XSRFStrategy, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// thirdparty
import { MaterializeModule } from 'angular2-materialize';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CalendarModule } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts';
import { LightboxModule } from 'angular2-lightbox';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

// services
import { TidelevelDataService } from './shared/tidelevel-data.service';

// components
import { AppComponent } from './app.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { LogoComponent } from './mainheader/logo/logo.component';
import { MainimageComponent } from './mainimage/mainimage.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { NextSessionComponent } from './next-session/next-session.component';
import { NextSessionService } from './next-session/next-session.service';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleslistComponent } from './articles/articleslist/articleslist.component';
import { ArticlesdetailComponent } from './articles/articlesdetail/articlesdetail.component';
import { ArticleDataService } from './articles/article-data.service';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { SquareItemComponent } from './square-item/square-item.component';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { OrderbyPipe } from './orderby.pipe';
import { SessionComponent } from './session/session.component';
import { NewsletterComponent } from './newsletter/newsletterlist/newsletter.component';
import { NewsletterdetailComponent } from './newsletter/newsletterdetail/newsletterdetail.component';
import { TriplistComponent } from './trips/triplist/triplist.component';
import { TripdetailComponent } from './trips/tripdetail/tripdetail.component';
import { MaplistItemComponent } from './maplist-item/maplist-item.component';
import { EventsComponent } from './events/events.component';
import { SessiondataService } from './session/sessiondata.service';
import { NewsletterDataService } from './newsletter/newsletter-data.service';
import { TripdataService } from './trips/tripdata.service';
import { MembershipComponent } from './membership/membership.component';
import { MembershipService } from './membership/membership.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CalendarService } from './events/calendar.service';
import { GalleryService } from "./gallery/gallery.service";
import { GallerylistComponent } from './gallery/gallerylist/gallerylist.component';
import { GallerydetailComponent } from './gallery/gallerydetail/gallerydetail.component';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import { EvetndetailComponent } from './events/evetndetail/evetndetail.component';
import { MaillistComponent} from "./maillist/maillist.component";


const appRoutes: Routes = [
  { path: '', component:HomepageComponent },
  { path: 'about', component:AboutpageComponent},
  { path: 'enquiry', component:EnquiryComponent },
  { path: 'faq', component:FaqpageComponent },
  { path: 'article', component:ArticleslistComponent},
  { path: 'article/:slug', component:ArticlesdetailComponent},
  { path: 'session', component:SessionComponent},
  { path: 'newsletter', component:NewsletterComponent },
  { path: 'newsletter/:slug', component:NewsletterdetailComponent },
  { path: 'trips', component:TriplistComponent },
  { path: 'trips/:slug', component:TripdetailComponent },
  { path: 'calendar', component:EventsComponent },
  { path: 'calendarlist', component:EventlistComponent },
  { path: 'calendarlist/:date', component:EvetndetailComponent },
  { path: 'membership', component:MembershipComponent },
  { path: 'gallery', component:GallerylistComponent },
  { path: 'gallery/:slug', component:GallerydetailComponent },
  { path: '**', component:NotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    LogoComponent,
    MainimageComponent,
    ContentAreaComponent,
    NextSessionComponent,
    SafeHtmlPipe,
    AboutpageComponent,
    HomepageComponent,
    ArticleslistComponent,
    ArticlesdetailComponent,
    EnquiryComponent,
    SquareItemComponent,
    FaqpageComponent,
    OrderbyPipe,
    SessionComponent,
    NewsletterComponent,
    NewsletterdetailComponent,
    TriplistComponent,
    TripdetailComponent,
    MaplistItemComponent,
    EventsComponent,
    MembershipComponent,
    NotFoundComponent,
    GallerylistComponent,
    GallerydetailComponent,
    EventlistComponent,
    EvetndetailComponent,
    MaillistComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CalendarModule.forRoot(),
    LeafletModule.forRoot(),
    MaterializeModule,
    JsonpModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LazyLoadImageModule,
    ChartsModule,
    LightboxModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  providers: [
    TidelevelDataService,
    NextSessionService,
    ArticleDataService,
    SessiondataService,
    NewsletterDataService,
    TripdataService,
    MembershipService,
    CalendarService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
