webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aboutpage/aboutpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container wow fadeIn\">\n  <div class=\"row height-spacer\"></div>\n  <div class=\"row\">\n    <app-content-area [column]=\"1\" [title]=\"about.title\" [content]=\"about.description\" *ngFor=\"let about of abouts\"></app-content-area>\n    <app-next-session></app-next-session>\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/aboutpage/aboutpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutpage/aboutpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutpageComponent = (function () {
    function AboutpageComponent(http) {
        this.http = http;
    }
    AboutpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'about')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            if (json[0]['image']) {
                _this.image = json[0]['image']['image'];
            }
            _this.abouts = json;
        });
    };
    return AboutpageComponent;
}());
AboutpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aboutpage',
        template: __webpack_require__("../../../../../src/app/aboutpage/aboutpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/aboutpage/aboutpage.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AboutpageComponent);

var _a;
//# sourceMappingURL=aboutpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Chiswick Pier Canoe Club';
        this.image = 'https://f58619eed67ecf47f9c5-69635130c45beb2524d5bafa9c042fe0.ssl.cf3.rackcdn.com/heroImages/_2000xAUTO_crop_center-center_70/Claire-Williams-nature-environment-wildlife.jpg';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_lazyload_image__ = __webpack_require__("../../../../ng-lazyload-image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__asymmetrik_ngx_leaflet__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_tidelevel_data_service__ = __webpack_require__("../../../../../src/app/shared/tidelevel-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mainheader_mainheader_component__ = __webpack_require__("../../../../../src/app/mainheader/mainheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mainheader_logo_logo_component__ = __webpack_require__("../../../../../src/app/mainheader/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mainimage_mainimage_component__ = __webpack_require__("../../../../../src/app/mainimage/mainimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__content_area_content_area_component__ = __webpack_require__("../../../../../src/app/content-area/content-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__next_session_next_session_component__ = __webpack_require__("../../../../../src/app/next-session/next-session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__next_session_next_session_service__ = __webpack_require__("../../../../../src/app/next-session/next-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__safe_html_pipe__ = __webpack_require__("../../../../../src/app/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__aboutpage_aboutpage_component__ = __webpack_require__("../../../../../src/app/aboutpage/aboutpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__articles_articleslist_articleslist_component__ = __webpack_require__("../../../../../src/app/articles/articleslist/articleslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__articles_articlesdetail_articlesdetail_component__ = __webpack_require__("../../../../../src/app/articles/articlesdetail/articlesdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__articles_article_data_service__ = __webpack_require__("../../../../../src/app/articles/article-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__enquiry_enquiry_component__ = __webpack_require__("../../../../../src/app/enquiry/enquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__square_item_square_item_component__ = __webpack_require__("../../../../../src/app/square-item/square-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__faqpage_faqpage_component__ = __webpack_require__("../../../../../src/app/faqpage/faqpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__orderby_pipe__ = __webpack_require__("../../../../../src/app/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__session_session_component__ = __webpack_require__("../../../../../src/app/session/session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__newsletter_newsletterlist_newsletter_component__ = __webpack_require__("../../../../../src/app/newsletter/newsletterlist/newsletter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__newsletter_newsletterdetail_newsletterdetail_component__ = __webpack_require__("../../../../../src/app/newsletter/newsletterdetail/newsletterdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__trips_triplist_triplist_component__ = __webpack_require__("../../../../../src/app/trips/triplist/triplist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__trips_tripdetail_tripdetail_component__ = __webpack_require__("../../../../../src/app/trips/tripdetail/tripdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__maplist_item_maplist_item_component__ = __webpack_require__("../../../../../src/app/maplist-item/maplist-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__session_sessiondata_service__ = __webpack_require__("../../../../../src/app/session/sessiondata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__newsletter_newsletter_data_service__ = __webpack_require__("../../../../../src/app/newsletter/newsletter-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__trips_tripdata_service__ = __webpack_require__("../../../../../src/app/trips/tripdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__membership_membership_component__ = __webpack_require__("../../../../../src/app/membership/membership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__membership_membership_service__ = __webpack_require__("../../../../../src/app/membership/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__events_calendar_service__ = __webpack_require__("../../../../../src/app/events/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__gallery_gallery_service__ = __webpack_require__("../../../../../src/app/gallery/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__gallery_gallerylist_gallerylist_component__ = __webpack_require__("../../../../../src/app/gallery/gallerylist/gallerylist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__gallery_gallerydetail_gallerydetail_component__ = __webpack_require__("../../../../../src/app/gallery/gallerydetail/gallerydetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__events_eventlist_eventlist_component__ = __webpack_require__("../../../../../src/app/events/eventlist/eventlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__events_evetndetail_evetndetail_component__ = __webpack_require__("../../../../../src/app/events/evetndetail/evetndetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// system






// thirdparty






// services

// components




































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_21__aboutpage_aboutpage_component__["a" /* AboutpageComponent */] },
    { path: 'enquiry', component: __WEBPACK_IMPORTED_MODULE_26__enquiry_enquiry_component__["a" /* EnquiryComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_28__faqpage_faqpage_component__["a" /* FaqpageComponent */] },
    { path: 'article', component: __WEBPACK_IMPORTED_MODULE_23__articles_articleslist_articleslist_component__["a" /* ArticleslistComponent */] },
    { path: 'article/:slug', component: __WEBPACK_IMPORTED_MODULE_24__articles_articlesdetail_articlesdetail_component__["a" /* ArticlesdetailComponent */] },
    { path: 'session', component: __WEBPACK_IMPORTED_MODULE_30__session_session_component__["a" /* SessionComponent */] },
    { path: 'newsletter', component: __WEBPACK_IMPORTED_MODULE_31__newsletter_newsletterlist_newsletter_component__["a" /* NewsletterComponent */] },
    { path: 'newsletter/:slug', component: __WEBPACK_IMPORTED_MODULE_32__newsletter_newsletterdetail_newsletterdetail_component__["a" /* NewsletterdetailComponent */] },
    { path: 'trips', component: __WEBPACK_IMPORTED_MODULE_33__trips_triplist_triplist_component__["a" /* TriplistComponent */] },
    { path: 'trips/:slug', component: __WEBPACK_IMPORTED_MODULE_34__trips_tripdetail_tripdetail_component__["a" /* TripdetailComponent */] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_36__events_events_component__["a" /* EventsComponent */] },
    { path: 'calendarlist', component: __WEBPACK_IMPORTED_MODULE_47__events_eventlist_eventlist_component__["a" /* EventlistComponent */] },
    { path: 'calendarlist/:date', component: __WEBPACK_IMPORTED_MODULE_48__events_evetndetail_evetndetail_component__["a" /* EvetndetailComponent */] },
    { path: 'membership', component: __WEBPACK_IMPORTED_MODULE_40__membership_membership_component__["a" /* MembershipComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_45__gallery_gallerylist_gallerylist_component__["a" /* GallerylistComponent */] },
    { path: 'gallery/:slug', component: __WEBPACK_IMPORTED_MODULE_46__gallery_gallerydetail_gallerydetail_component__["a" /* GallerydetailComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_42__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__mainheader_mainheader_component__["a" /* MainheaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__mainheader_logo_logo_component__["a" /* LogoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__mainimage_mainimage_component__["a" /* MainimageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__content_area_content_area_component__["a" /* ContentAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_18__next_session_next_session_component__["a" /* NextSessionComponent */],
            __WEBPACK_IMPORTED_MODULE_20__safe_html_pipe__["a" /* SafeHtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_21__aboutpage_aboutpage_component__["a" /* AboutpageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__articles_articleslist_articleslist_component__["a" /* ArticleslistComponent */],
            __WEBPACK_IMPORTED_MODULE_24__articles_articlesdetail_articlesdetail_component__["a" /* ArticlesdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_26__enquiry_enquiry_component__["a" /* EnquiryComponent */],
            __WEBPACK_IMPORTED_MODULE_27__square_item_square_item_component__["a" /* SquareItemComponent */],
            __WEBPACK_IMPORTED_MODULE_28__faqpage_faqpage_component__["a" /* FaqpageComponent */],
            __WEBPACK_IMPORTED_MODULE_29__orderby_pipe__["a" /* OrderbyPipe */],
            __WEBPACK_IMPORTED_MODULE_30__session_session_component__["a" /* SessionComponent */],
            __WEBPACK_IMPORTED_MODULE_31__newsletter_newsletterlist_newsletter_component__["a" /* NewsletterComponent */],
            __WEBPACK_IMPORTED_MODULE_32__newsletter_newsletterdetail_newsletterdetail_component__["a" /* NewsletterdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_33__trips_triplist_triplist_component__["a" /* TriplistComponent */],
            __WEBPACK_IMPORTED_MODULE_34__trips_tripdetail_tripdetail_component__["a" /* TripdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_35__maplist_item_maplist_item_component__["a" /* MaplistItemComponent */],
            __WEBPACK_IMPORTED_MODULE_36__events_events_component__["a" /* EventsComponent */],
            __WEBPACK_IMPORTED_MODULE_40__membership_membership_component__["a" /* MembershipComponent */],
            __WEBPACK_IMPORTED_MODULE_42__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_45__gallery_gallerylist_gallerylist_component__["a" /* GallerylistComponent */],
            __WEBPACK_IMPORTED_MODULE_46__gallery_gallerydetail_gallerydetail_component__["a" /* GallerydetailComponent */],
            __WEBPACK_IMPORTED_MODULE_47__events_eventlist_eventlist_component__["a" /* EventlistComponent */],
            __WEBPACK_IMPORTED_MODULE_48__events_evetndetail_evetndetail_component__["a" /* EvetndetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__asymmetrik_ngx_leaflet__["a" /* LeafletModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng_lazyload_image__["LazyLoadImageModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_lightbox__["b" /* LightboxModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__shared_tidelevel_data_service__["a" /* TidelevelDataService */],
            __WEBPACK_IMPORTED_MODULE_19__next_session_next_session_service__["a" /* NextSessionService */],
            __WEBPACK_IMPORTED_MODULE_25__articles_article_data_service__["a" /* ArticleDataService */],
            __WEBPACK_IMPORTED_MODULE_37__session_sessiondata_service__["a" /* SessiondataService */],
            __WEBPACK_IMPORTED_MODULE_38__newsletter_newsletter_data_service__["a" /* NewsletterDataService */],
            __WEBPACK_IMPORTED_MODULE_39__trips_tripdata_service__["a" /* TripdataService */],
            __WEBPACK_IMPORTED_MODULE_41__membership_membership_service__["a" /* MembershipService */],
            __WEBPACK_IMPORTED_MODULE_43__events_calendar_service__["a" /* CalendarService */],
            __WEBPACK_IMPORTED_MODULE_44__gallery_gallery_service__["a" /* GalleryService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/articles/article-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article__ = __webpack_require__("../../../../../src/app/articles/article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleDataService = (function () {
    function ArticleDataService(http) {
        this.http = http;
        this.articles = [];
    }
    ArticleDataService.prototype.getData = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'article')
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var article = new __WEBPACK_IMPORTED_MODULE_1__article__["a" /* Article */](item);
                _this.addArticle(article);
            }
        });
    };
    ArticleDataService.prototype.addArticle = function (article) {
        if (!this.articles.find(function (x) { return x.pk == article.pk; })) {
            this.articles.push(article);
        }
        return this;
    };
    ArticleDataService.prototype.getAllArticles = function () {
        if (this.articles.length == 0 && !this.checking) {
            this.getData();
            this.checking = true;
        }
        return this.articles;
    };
    ArticleDataService.prototype.getArticleBySlug = function (slug) {
        var _this = this;
        if (!this.articles) {
            this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'article/' + slug)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                var article = new __WEBPACK_IMPORTED_MODULE_1__article__["a" /* Article */](json);
                _this.addArticle(article);
                return article;
            });
        }
        else {
            return this.articles
                .filter(function (article) { return article.slug == slug; })
                .pop();
        }
    };
    ArticleDataService.prototype.getArticleForCategory = function (slug) {
        return this.articles
            .filter(function (article) { return article.category.indexOf(slug) !== -1; })
            .pop();
    };
    return ArticleDataService;
}());
ArticleDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArticleDataService);

var _a;
//# sourceMappingURL=article-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/articles/article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Article;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ "../../../../../src/app/articles/articlesdetail/articlesdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + article?.main_image.image.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\">\n  <div class=\"row wow fadeIn\">\n    <div class=\"col s12\">\n      <div class=\"card-panel\">\n\n        <h1>{{ article?.title }}</h1>\n        <div class=\"boxarea-content\" [innerHTML]=\"article?.description | safeHtml\"></div>\n\n        <div class=\"imagegroup\">\n          <div class=\"imagethumb\" *ngFor=\"let image of article?.gallery; let i=index\">\n            <img [src]=\"image?.image.small\" (click)=\"open(i)\"/>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/articles/articlesdetail/articlesdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/articlesdetail/articlesdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_data_service__ = __webpack_require__("../../../../../src/app/articles/article-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticlesdetailComponent = (function () {
    function ArticlesdetailComponent(route, articleDataService, router, _lightbox) {
        this.route = route;
        this.articleDataService = articleDataService;
        this.router = router;
        this._lightbox = _lightbox;
        this._album = [];
    }
    ArticlesdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.slug = params['slug'];
            _this.article = _this.articleDataService.getArticleBySlug(_this.slug);
            if (_this.article) {
                for (var _i = 0, _a = _this.article.gallery; _i < _a.length; _i++) {
                    var gallery = _a[_i];
                    _this._album.push(gallery.image);
                }
            }
        });
    };
    ArticlesdetailComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._album, index);
    };
    return ArticlesdetailComponent;
}());
ArticlesdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-articlesdetail',
        template: __webpack_require__("../../../../../src/app/articles/articlesdetail/articlesdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/articles/articlesdetail/articlesdetail.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__article_data_service__["a" /* ArticleDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article_data_service__["a" /* ArticleDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_lightbox__["a" /* Lightbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_lightbox__["a" /* Lightbox */]) === "function" && _d || Object])
], ArticlesdetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=articlesdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/articles/articleslist/articleslist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"card-panel\">\n      <h1>Articles</h1>\n      <div class=\"row\">\n        <div class=\"col s12 m3 l3 wow fadeIn\" *ngFor=\"let article of articles\">\n          <app-square-item [article]=\"article\" [endpoint]=\"'article'\"></app-square-item>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/articles/articleslist/articleslist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/articles/articleslist/articleslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleslistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_data_service__ = __webpack_require__("../../../../../src/app/articles/article-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleslistComponent = (function () {
    function ArticleslistComponent(http, articleDataService) {
        this.http = http;
        this.articleDataService = articleDataService;
    }
    ArticleslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    Object.defineProperty(ArticleslistComponent.prototype, "articles", {
        get: function () {
            return this.articleDataService.getAllArticles();
        },
        enumerable: true,
        configurable: true
    });
    return ArticleslistComponent;
}());
ArticleslistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-articleslist',
        template: __webpack_require__("../../../../../src/app/articles/articleslist/articleslist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/articles/articleslist/articleslist.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__article_data_service__["a" /* ArticleDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__article_data_service__["a" /* ArticleDataService */]) === "function" && _b || Object])
], ArticleslistComponent);

var _a, _b;
//# sourceMappingURL=articleslist.component.js.map

/***/ }),

/***/ "../../../../../src/app/content-area/content-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col \" [ngClass]=\"{'s12 m12 l9':column == 1, 's12 m12 l6':column == 2, 's12 m12 l4':column >= 3}\">\n  <div class=\"card-panel\">\n    <div class=\"boxarea-action\" *ngIf=\"paginate\">\n      <a href=\"#\">Previous</a>\n      <a href=\"#\">Next</a>\n    </div>\n    <div class=\"boxarea-header\">\n      <h1>{{ title }}</h1>\n    </div>\n    <div class=\"boxarea-content\" [innerHTML]=\"content | safeHtml\">\n\n    </div>\n    <div class=\"box-area-action\">\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/content-area/content-area.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-area/content-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentAreaComponent = (function () {
    function ContentAreaComponent() {
    }
    ContentAreaComponent.prototype.ngOnInit = function () {
    };
    return ContentAreaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ContentAreaComponent.prototype, "column", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ContentAreaComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ContentAreaComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ContentAreaComponent.prototype, "paginate", void 0);
ContentAreaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-content-area',
        template: __webpack_require__("../../../../../src/app/content-area/content-area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content-area/content-area.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContentAreaComponent);

//# sourceMappingURL=content-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/enquiry/enquiry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer half\"></div>\n<div class=\"container wow fadeIn\">\n  <div class=\"row height-spacer\"></div>\n  <div class=\"row\">\n    <!-- This is for main section -->\n    <div class=\"col s12 m12 l9\">\n      <div class=\"card-panel\">\n        <h1>Enquiries</h1>\n        <p>If you have a question or would like more information about the club and what we do.<br>\n        Please fill in the form below or send us an email and we shall get back in contact with you shortly.</p>\n\n        <div>\n          <p *ngIf=\"maincomplete\">Thank you for sending us a message, we shall be in touch shortly.</p>\n          <form [formGroup]=\"mainForm\" (ngSubmit)=\"mainsend(mainForm.value)\" class=\"formhalf\">\n            <div class=\"input-field\">\n              <input id=\"message_email\" type=\"email\" class=\"validate\" name=\"email\" [formControl]=\"mainForm.controls['email']\" required>\n              <label for=\"message_email\">Email</label>\n            </div>\n\n            <div class=\"input-field\">\n              <input id=\"message_name\" type=\"text\" class=\"validate\" name=\"name\" [formControl]=\"mainForm.controls['name']\" required>\n              <label for=\"message_name\">Name</label>\n            </div>\n\n            <div class=\"input-field\">\n              <textarea id=\"message_text\" class=\"materialize-textarea\" name=\"comment\" [formControl]=\"mainForm.controls['comment']\" required></textarea>\n              <label for=\"message_text\">Comment</label>\n            </div>\n\n            <div class=\"input-field\">\n              <button class=\"waves-effect waves-light btn\" type=\"submit\">Send</button>\n            </div>\n\n\n          </form>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- This is for the left col -->\n    <div class=\"col s12 m12 l3\">\n      <!-- get in touch box -->\n        <div class=\"card session-card\">\n          <div class=\"card-content\">\n            <span class=\"card-title\">Get in Touch</span>\n            <p>If you want to join us or contact us for information.</p>\n          </div>\n          <div class=\"card-action\">\n            <a href=\"mailto:enquiries@chiswickcanoeclub.co.uk\">Email </a>\n          </div>\n        </div>\n\n        <!-- mailing list subscribe -->\n        <div class=\"card session-card\">\n          <form class=\"card-content\" [formGroup]=\"mailForm\" (ngSubmit)=\"mailsend(mailForm.value)\">\n            <span class=\"card-title\">Subscribe to the Mailing list</span>\n            <p *ngIf=\"mailcomplete\">Thank you for signing up, you should receive a email shortly.</p>\n            <div class=\"input-field\">\n              <input id=\"sub_email\" type=\"email\" class=\"validate\" name=\"email\" [formControl]=\"mailForm.controls['email']\" required>\n              <label for=\"sub_email\">Email</label>\n            </div>\n\n            <div class=\"input-field\">\n              <input id=\"sub_name\" type=\"text\" class=\"validate\" name=\"name\" [formControl]=\"mailForm.controls['name']\" required>\n              <label for=\"sub_name\">First Name</label>\n            </div>\n\n            <div class=\"input-field\">\n              <input id=\"sub_lastname\" type=\"text\" class=\"validate\" name=\"lastname\" [formControl]=\"mailForm.controls['lastname']\" required>\n              <label for=\"sub_lastname\">Last Name</label>\n            </div>\n\n            <div class=\"hidden\">\n              <input name=\"b_608521f94ccfeee308925028f_1068db21b2\" tabindex=\"-1\" value=\"\" [formControl]=\"mailForm.controls['b_608521f94ccfeee308925028f_1068db21b2']\" type=\"hidden\">\n            </div>\n\n            <div class=\"input-field\">\n              <button class=\"waves-effect waves-light btn\" type=\"submit\">Send</button>\n            </div>\n\n          </form>\n\n        </div>\n\n\n    </div>\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/enquiry/enquiry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/enquiry/enquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnquiryComponent = (function () {
    function EnquiryComponent(http) {
        this.http = http;
        this.maincomplete = false;
        this.mailcomplete = false;
    }
    EnquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            'comment': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]()
        });
        this.mailForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            'lastname': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](),
            'b_608521f94ccfeee308925028f_1068db21b2': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]()
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    EnquiryComponent.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    };
    EnquiryComponent.prototype.mainsend = function (form) {
        var _this = this;
        var formObj = this.mainForm.value;
        var simledata = JSON.stringify(formObj);
        console.log(simledata);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('X-CSRFToken', this.getCookie('csrftoken'));
        this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'enquiry', simledata, { headers: headers })
            .subscribe(function (ret_data) {
            _this.maincomplete = true;
            _this.mainForm.reset();
        }, function (error) {
            console.log(error.json());
        });
    };
    EnquiryComponent.prototype.mailsend = function (form) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Origin', '*');
        this.http
            .post('//chiswickcanoeclub.us10.list-manage.com/subscribe/post?u=608521f94ccfeee308925028f&amp;id=1068db21b2', JSON.stringify({ EMAIL: form.email, FNAME: form.name, LNAME: form.last_name, b_608521f94ccfeee308925028f_1068db21b2: form.b_608521f94ccfeee308925028f_1068db21b2 }), { headers: headers })
            .subscribe(function (ret_data) {
            console.log(ret_data);
            _this.mailcomplete = true;
            _this.mailForm.reset();
            form.reset();
        }, function (error) {
        });
    };
    return EnquiryComponent;
}());
EnquiryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-enquiry',
        template: __webpack_require__("../../../../../src/app/enquiry/enquiry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/enquiry/enquiry.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EnquiryComponent);

var _a;
//# sourceMappingURL=enquiry.component.js.map

/***/ }),

/***/ "../../../../../src/app/events/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventdate__ = __webpack_require__("../../../../../src/app/events/eventdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarService = (function () {
    function CalendarService(http) {
        this.http = http;
        this.calendar = {};
        this.datecheck = [];
    }
    CalendarService.prototype.getMonth = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'calender/' + this.year + '/' + this.month)
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var day = new __WEBPACK_IMPORTED_MODULE_1__eventdate__["a" /* Eventdate */](item);
                day.start = new Date(day.date);
                _this.calendar[day.date] = day;
            }
        });
    };
    CalendarService.prototype.getRemoteDay = function (year, month, day) {
        var _this = this;
        var str_date = year + '-' + month + '-' + day;
        if (this.datecheck.indexOf(str_date) === -1) {
            this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'calender/' + year + '/' + month + '/' + day)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                _this.calendar[str_date] = new __WEBPACK_IMPORTED_MODULE_1__eventdate__["a" /* Eventdate */](json);
                var index = _this.datecheck.indexOf(str_date, 0);
                if (index > -1) {
                    _this.datecheck.splice(index, 1);
                }
            });
        }
    };
    CalendarService.prototype.getDayRemote = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'calender/' + year + '/' + month + '/' + day)
            .map(function (res) { return res.json(); }).toPromise();
    };
    CalendarService.prototype.getMonthData = function (year, month) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'calender/' + year + '/' + month)
            .map(function (res) { return res.json(); }).toPromise();
    };
    CalendarService.prototype.getDay = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var str_year = year.toString();
        var str_month = month.toString();
        var str_day = day.toString();
        if (str_month.length < 2) {
            str_month = '0' + str_month;
        }
        if (str_day.length < 2) {
            str_day = '0' + str_day;
        }
        var str_date = str_year + '-' + str_month + '-' + str_day;
        if (this.calendar[str_date] === undefined || null) {
            if (this.datecheck.indexOf(str_date) === -1) {
                this.getRemoteDay(str_year, str_month, str_day);
                this.datecheck.push(str_date);
            }
        }
        setTimeout(function () {
        }, 1000);
        return Promise.resolve(this.calendar[str_date]);
    };
    ;
    CalendarService.prototype.getCalendar = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth();
        if (this.year != year || this.month != month) {
            this.year = year;
            this.month = month;
            this.checking = false;
        }
        if (!this.checking) {
            this.getMonth();
            this.checking = true;
        }
        return Promise.resolve(this.calendar);
    };
    return CalendarService;
}());
CalendarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CalendarService);

var _a;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ "../../../../../src/app/events/eventdate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Windy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eventdate; });
var Windy = (function () {
    function Windy() {
    }
    return Windy;
}());

var Eventdate = (function () {
    function Eventdate(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Eventdate;
}());

//# sourceMappingURL=eventdate.js.map

/***/ }),

/***/ "../../../../../src/app/events/eventlist/eventlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"container\">\n  <div class=\"row \"></div>\n  <div class=\"row\">\n    <div class=\"col s12 m12 l9\">\n      <div class=\"card-panel\">\n        <h1>{{ viewDate| date:'longDate' }}</h1>\n        <div class=\"row\">\n\n          <div class=\"col s6\"><div class=\"btn btn-primary\" (click)=\"previous()\">Previous</div>\n            <div class=\"col s6\"><div class=\"btn btn-primary\" (click)=\"next()\">Next</div></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col s12\">\n              <div class=\"collection calendar\" >\n                <a routerLink=\"/calendarlist/{{ day.date }}\" class=\"collection-item\" *ngFor=\"let day of days\">\n                  <div class=\"flexalign\">\n                    <p>{{ day.date| date:'mediumDate' }}</p>\n\n                    <div class=\"cal-actions\" *ngIf=\"day?.trips_set.length > 0\">\n                      <div class=\"chip go\">\n                        <i class=\"close material-icons\">warning</i>Trip {{ day.trips_set.length }}\n                      </div>\n                    </div>\n\n                    <div class=\"cal-actions\" *ngIf=\"day?.event_set.length > 0\">\n                      <div class=\"chip important\">\n                        <i class=\"close material-icons\">warning</i>Important {{ day.event_set.length }}\n                      </div>\n                    </div>\n\n                    <div class=\"cal-actions\" *ngIf=\"day?.plaevent_set.length > 0\">\n                      <div class=\"chip event\">\n                        <i class=\"close material-icons\">warning</i>Notice {{ day.plaevent_set.length }}\n                      </div>\n                    </div>\n\n\n                  </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <app-next-session></app-next-session>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events/eventlist/eventlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/eventlist/eventlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__("../../../../../src/app/events/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventlistComponent = (function () {
    function EventlistComponent(http, calser) {
        this.http = http;
        this.calser = calser;
        this.viewDate = new Date();
    }
    EventlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var year = '' + this.viewDate.getFullYear();
        var month = '' + (this.viewDate.getMonth() + 1);
        this.calser.getMonthData(year, month).then(function (json) {
            _this.days = json;
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    EventlistComponent.prototype.reload = function () {
        var _this = this;
        var year = '' + this.viewDate.getFullYear();
        var month = '' + (this.viewDate.getMonth() + 1);
        this.calser.getMonthData(year, month).then(function (json) {
            _this.days = json;
        });
    };
    EventlistComponent.prototype.previous = function () {
        this.viewDate.setMonth(this.viewDate.getMonth() - 1);
        this.reload();
    };
    EventlistComponent.prototype.next = function () {
        this.viewDate.setMonth(this.viewDate.getMonth() + 1);
        this.reload();
    };
    return EventlistComponent;
}());
EventlistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-eventlist',
        template: __webpack_require__("../../../../../src/app/events/eventlist/eventlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events/eventlist/eventlist.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */]) === "function" && _b || Object])
], EventlistComponent);

var _a, _b;
//# sourceMappingURL=eventlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row height-spacer\"></div>\n  <div class=\"row\">\n\n    <div class=\"col s12 m12 l8\">\n      <div class=\"card-panel\">\n\n        <div class=\"row\">\n          <div class=\"col s6\">\n            <div class=\"btn-group\">\n              <div\n                class=\"btn btn-primary\"\n                mwlCalendarPreviousView\n                view=\"month\"\n                [(viewDate)]=\"viewDate\">\n                Previous\n              </div>\n              <div\n                class=\"btn btn-secondary\"\n                mwlCalendarToday\n                [(viewDate)]=\"viewDate\">\n                Today\n              </div>\n              <div\n                class=\"btn btn-primary\"\n                mwlCalendarNextView\n                view=\"month\"\n                [(viewDate)]=\"viewDate\">\n                Next\n              </div>\n            </div>\n          </div>\n          <div class=\"col s6 text-right\" >\n            <h3>{{ viewDate | calendarDate:'monthViewTitle':'en' }}</h3>\n\n          </div>\n        </div>\n        <br>\n\n        <ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n          <div class=\"cal-cell-tide\">\n            <span class=\"cal-date\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n            <span class=\"cal-weather\">{{ day.dayData?.temperature }} C</span>\n            <div class=\"cal-chart\">\n              <canvas baseChart style=\"width:100%;height:100%;\"\n                      [datasets]=\"day?.tideData\"\n                      [options]=\"day.tideOptions\"\n                      [colors]=\"day.tideColour\"\n                      [chartType]=\"'line'\"></canvas>\n            </div>\n\n            <div class=\"cal-actions absolute\" *ngIf=\"day?.plaEvents > 0\">\n              <div class=\"chip event\">\n                <i class=\"close material-icons\">warning</i>Notice {{ day.plaEvents }}\n              </div>\n            </div>\n\n            <div class=\"cal-actions absolute\" *ngIf=\"day?.tideImportant > 0\">\n              <div class=\"chip important\">\n                <i class=\"close material-icons\">warning</i>Important {{ day.tideImportant }}\n              </div>\n            </div>\n\n            <div class=\"cal-actions absolute\" *ngIf=\"day.dayData?.trips_set.length > 0\">\n              <div class=\"chip go\">\n                <i class=\"close material-icons\">warning</i>Trip {{ day.dayData.trips_set.length }}\n              </div>\n            </div>\n\n\n          </div>\n        </ng-template>\n\n        <mwl-calendar-month-view\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [cellTemplate]=\"customCellTemplate\"\n          [refresh]=\"refresh\"\n          [extra]=\"calser\"\n          (dayClicked)=\"openModal($event.day.date)\"\n          [dayModifier]=\"dayData\">\n        </mwl-calendar-month-view>\n\n\n      </div>\n    </div>\n    <app-next-session></app-next-session>\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n\n<div id=\"modal1\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n  <div class=\"modal-header\">\n    <a class=\"waves-effect waves-green btn-flat\" (click)=\"closeModal()\"><i class=\"material-icons\">close</i></a>\n  </div>\n  <div class=\"modal-content\">\n    <h4>{{ clickDate | date:'fullDate' }}</h4>\n    <div class=\"row\">\n      <div class=\"col s12 m6\">\n        <canvas baseChart\n                width=\"100%\"\n                [datasets]=\"daytide\"\n                [options]=\"tideoptionslarge\"\n                [colors]=\"tideColour\"\n                [chartType]=\"'line'\"></canvas>\n        <div class=\"winddata\">\n          <div class=\"wcol\">\n            <p>hr</p>\n            <p></p>\n            <p>kt</p>\n            <p>°C</p>\n            <p><i class=\"material-icons\">grain</i></p>\n          </div>\n          <div class=\"wcol\" *ngFor=\"let wind of daydata?.windy_set\">\n            <p>{{ wind?.hour }}</p>\n            <p><i class=\"material-icons\" [style]=\"getdirection(wind)\">arrow_upward</i></p>\n            <p>{{ wind?.speed }}</p>\n            <p>{{ wind?.celsius }}</p>\n            <p>{{ wind?.rain }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s12 m6\">\n        <ul>\n          <li><strong>Days Forecast</strong></li>\n          <li>Sun rise: {{ daydata?.sun_rise }}</li>\n          <li>Sun set: {{ daydata?.sun_set }}</li>\n          <li>Max temperature {{ daydata?.temperature }} C</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <h4>Events today on the Thames</h4>\n        <div>\n          <div *ngIf=\"daydata?.trips_set.length > 0\">\n            <h5>Club Trips</h5>\n            <div *ngFor=\"let event of daydata.trips_set\" class=\"col s12 eventblock\" >\n              <p>{{ event?.title }}</p>\n              <a routerLink='/trips/{{ event.slug }}'>Read more</a>\n              <p [innerHTML]=\"event?.list_description\"></p>\n              <p [innerHTML]=\"event?.description\"></p>\n            </div>\n          </div>\n          <div *ngIf=\"daydata?.event_set.length > 0\">\n            <h5>Club Notices</h5>\n            <div *ngFor=\"let event of daydata.event_set\" class=\"col s12 eventblock\" >\n              <p class=\"eventype\">{{ event?.event_type }}</p>\n              <p>{{ event?.title }}</p>\n              <p>{{event?.start_time }} - {{ event?.end_time }}</p>\n              <p [innerHTML]=\"event?.description\"></p>\n            </div>\n          </div>\n          <div *ngIf=\"daydata?.plaevent_set.length > 0\">\n            <h5>PLA Notices</h5>\n            <div *ngFor=\"let event of daydata.plaevent_set\" class=\"col s12 eventblock\">\n              <p>{{ event?.title }} - {{ event?.club_name }}</p>\n              <p>Is river clsoed : {{ event?.river_closure }}</p>\n              <p>Direction: {{ event?.district_description_one }}</p>\n              <p>From: {{ event?.from_time}}</p>\n              <p>To: {{ event?.to_time}}</p>\n              <a href=\"{{ event?.link }}\">Link to activity</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n  </div>\n  <div class=\"modal-footer\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__("../../../../../src/app/events/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventdate__ = __webpack_require__("../../../../../src/app/events/eventdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventsComponent = (function () {
    function EventsComponent(calser, sanitizer) {
        var _this = this;
        this.calser = calser;
        this.sanitizer = sanitizer;
        this.viewDate = new Date();
        this.view = 'month';
        this.refresh = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.daytide = [
            { data: [], label: 'Tide' },
        ];
        this.tideoptionslarge = {
            responsive: true,
            maintainAspectRatio: true,
            legend: { display: false },
            tooltips: {
                enable: true,
                mode: 'single',
                callbacks: {
                    label: function (tooltipItems, data) {
                        return tooltipItems.yLabel + ' meters';
                    },
                    title: function (tooltipItems, data) {
                        var date = new Date(null);
                        date.setSeconds(tooltipItems[0].xLabel);
                        return 'Time: ' + date.toISOString().substr(14, 5);
                    }
                }
            },
            scales: { yAxes: [{ display: true, labelString: 'Level (m)', ticks: {
                            callback: function (value, index, values) {
                                return value + 'm';
                            }
                        } }],
                xAxes: [{ display: true, type: 'linear', position: 'bottom', labelString: 'Time of day', ticks: {
                            callback: function (value, index, values) {
                                var date = new Date(null);
                                date.setSeconds(value);
                                var time = date.toISOString().substr(14, 5);
                                if (time == '25:00') {
                                    return '23:59';
                                }
                                else {
                                    return time;
                                }
                            }
                        } }] }
        };
        this.tideColour = [{
                backgroundColor: 'transparent',
                borderColor: '#2287b0',
                pointBackgroundColor: '#2287b0',
                pointBorderColor: '#2287b0',
                pointHoverBackgroundColor: '#2287b0',
                pointHoverBorderColor: '#2287b0'
            }];
        this.eventcount = 0;
        this.addExtraData = function (day) {
            day['extra'] = Object.assign(_this.calser.getDay(day.date));
        };
    }
    EventsComponent.prototype.getDate = function () {
        var _this = this;
        this.calser.getDayRemote(this.clickDate).then(function (json) {
            _this.daydata = new __WEBPACK_IMPORTED_MODULE_3__eventdate__["a" /* Eventdate */](json);
            _this.daytide = [
                { data: _this.daydata.tide, label: 'Tide' },
            ];
            _this.eventcount = _this.daydata.plaevent_set.length + _this.daydata.event_set.length;
        });
    };
    ;
    EventsComponent.prototype.getdirection = function (number) {
        return this.sanitizer.bypassSecurityTrustStyle('transform:rotate(' + number.direction + 'deg)');
    };
    EventsComponent.prototype.dayData = function (cell) {
        this.extra.getDayRemote(cell.date).then(function (json) {
            var item = new __WEBPACK_IMPORTED_MODULE_3__eventdate__["a" /* Eventdate */](json);
            cell['dayData'] = Object.assign(item);
            cell['tideData'] = [
                { data: item.tide, label: 'Tide' },
            ];
            cell['plaEvents'] = item.plaevent_set.length;
            cell['tideImportant'] = item.event_set.length;
        });
        var tide = [
            { data: [], label: 'Tide' },
        ];
        var tideoptions = {
            responsive: false,
            maintainAspectRatio: true,
            legend: { display: false },
            scales: { yAxes: [{ display: false }], xAxes: [{ display: false, type: 'linear', position: 'bottom' }] }
        };
        var colour = [{
                backgroundColor: 'transparent',
                borderColor: '#2287b0',
                pointBackgroundColor: '#2287b0',
                pointBorderColor: '#2287b0',
                pointHoverBackgroundColor: '#2287b0',
                pointHoverBorderColor: '#2287b0'
            }];
        cell['tideData'] = Object.assign(tide);
        cell['tideOptions'] = Object.assign(tideoptions);
        cell['tideColour'] = Object.assign(colour);
        cell['tideEvents'] = 0;
    };
    EventsComponent.prototype.ngOnInit = function () {
        //this.calser.getCalendar(this.viewDate);
    };
    EventsComponent.prototype.openModal = function (date) {
        this.clickDate = date;
        this.getDate();
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    EventsComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events',
        template: __webpack_require__("../../../../../src/app/events/events.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        styles: [__webpack_require__("../../../../../src/app/events/events.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], EventsComponent);

var _a, _b;
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ "../../../../../src/app/events/evetndetail/evetndetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n\n</div>\n<div class=\"container\">\n  <div class=\"row \"></div>\n  <div class=\"row\">\n    <div class=\"col s12 m12 l9\">\n      <div class=\"card-panel\">\n        <h1>{{ viewDate| date:'longDate' }}</h1>\n        <div class=\"row\">\n          <div class=\"col s12 m6\">\n            <canvas baseChart\n                    width=\"100%\"\n                    [datasets]=\"tideData\"\n                    [options]=\"tideoptionslarge\"\n                    [colors]=\"tideColour\"\n                    [chartType]=\"'line'\"></canvas>\n            <div class=\"winddata\">\n              <div class=\"wcol\">\n                <p>hr</p>\n                <p></p>\n                <p>kt</p>\n                <p>°C</p>\n                <p><i class=\"material-icons\">grain</i></p>\n              </div>\n              <div  *ngIf=\"day?.windy_set.length > 0\">\n                <div class=\"wcol\" *ngFor=\"let wind of day.windy_set\">\n                  <p>{{ wind?.hour }}</p>\n                  <p><i class=\"material-icons\" [style]=\"getdirection(wind)\">arrow_upward</i></p>\n                  <p>{{ wind?.speed }}</p>\n                  <p>{{ wind?.celsius }}</p>\n                  <p>{{ wind?.rain }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s12 m6\">\n            <ul>\n              <li><strong>Days Forecast</strong></li>\n              <li>Sun rise: {{ day?.sun_rise }}</li>\n              <li>Sun set: {{ day?.sun_set }}</li>\n              <li>Max temperature {{ day?.temperature }} C</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"row\">\n      <div class=\"col s12\">\n        <h4>Events today on the Thames</h4>\n        <div>\n          <div *ngIf=\"day?.trips_set.length > 0\">\n            <h5>Club Trips</h5>\n            <div *ngFor=\"let event of day.trips_set\" class=\"col s12 eventblock\" >\n              <p>{{ event?.title }}</p>\n              <a routerLink='/trips/{{ event.slug }}'>Read more</a>\n              <p [innerHTML]=\"event?.list_description\"></p>\n              <p [innerHTML]=\"event?.description\"></p>\n            </div>\n          </div>\n          <div *ngIf=\"day?.event_set.length > 0\">\n            <h5>Club Notices</h5>\n            <div *ngFor=\"let event of day.event_set\" class=\"col s12 eventblock\" >\n              <p class=\"eventype\">{{ event?.event_type }}</p>\n              <p>{{ event?.title }}</p>\n              <p>{{event?.start_time }} - {{ event?.end_time }}</p>\n              <p [innerHTML]=\"event?.description\"></p>\n            </div>\n          </div>\n          <div *ngIf=\"day?.plaevent_set.length > 0\">\n            <h5>PLA Notices</h5>\n            <div *ngFor=\"let event of day.plaevent_set\" class=\"col s12 eventblock\">\n              <p>{{ event?.title }} - {{ event?.club_name }}</p>\n              <p>Is river clsoed : {{ event?.river_closure }}</p>\n              <p>Direction: {{ event?.district_description_one }}</p>\n              <p>From: {{ event?.from_time}}</p>\n              <p>To: {{ event?.to_time}}</p>\n              <a href=\"{{ event?.link }}\">Link to activity</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events/evetndetail/evetndetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/evetndetail/evetndetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvetndetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__("../../../../../src/app/events/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventdate__ = __webpack_require__("../../../../../src/app/events/eventdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EvetndetailComponent = (function () {
    function EvetndetailComponent(route, router, calser, sanitizer) {
        this.route = route;
        this.router = router;
        this.calser = calser;
        this.sanitizer = sanitizer;
        this.tideData = [{ data: [] }];
        this.tideoptionslarge = {
            responsive: true,
            maintainAspectRatio: true,
            legend: { display: false },
            tooltips: {
                enable: true,
                mode: 'single',
                callbacks: {
                    label: function (tooltipItems, data) {
                        return tooltipItems.yLabel + ' meters';
                    },
                    title: function (tooltipItems, data) {
                        var date = new Date(null);
                        date.setSeconds(tooltipItems[0].xLabel);
                        return 'Time: ' + date.toISOString().substr(14, 5);
                    }
                }
            },
            scales: { yAxes: [{ display: true, labelString: 'Level (m)', ticks: {
                            callback: function (value, index, values) {
                                return value + 'm';
                            }
                        } }],
                xAxes: [{ display: true, type: 'linear', position: 'bottom', labelString: 'Time of day', ticks: {
                            callback: function (value, index, values) {
                                var date = new Date(null);
                                date.setSeconds(value);
                                var time = date.toISOString().substr(14, 5);
                                if (time == '25:00') {
                                    return '23:59';
                                }
                                else {
                                    return time;
                                }
                            }
                        } }] }
        };
        this.tideColour = [{
                backgroundColor: 'transparent',
                borderColor: '#2287b0',
                pointBackgroundColor: '#2287b0',
                pointBorderColor: '#2287b0',
                pointHoverBackgroundColor: '#2287b0',
                pointHoverBorderColor: '#2287b0'
            }];
    }
    EvetndetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.slug = params['date'];
            _this.viewDate = new Date(_this.slug);
            _this.calser.getDayRemote(_this.viewDate).then(function (json) {
                _this.day = new __WEBPACK_IMPORTED_MODULE_2__eventdate__["a" /* Eventdate */](json);
                var tide = _this.day.tide;
                _this.tideData = [{ data: tide, label: 'Tide' },];
                console.log(_this.tideData);
            });
        });
    };
    EvetndetailComponent.prototype.getdirection = function (number) {
        return this.sanitizer.bypassSecurityTrustStyle('transform:rotate(' + number.direction + 'deg)');
    };
    return EvetndetailComponent;
}());
EvetndetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-evetndetail',
        template: __webpack_require__("../../../../../src/app/events/evetndetail/evetndetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events/evetndetail/evetndetail.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], EvetndetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=evetndetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/faqpage/faq.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Faq; });
var Faq = (function () {
    function Faq(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Faq;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ "../../../../../src/app/faqpage/faqdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faq__ = __webpack_require__("../../../../../src/app/faqpage/faq.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqdataService = (function () {
    function FaqdataService(http) {
        this.http = http;
        this.lastId = 0;
        this.faqs = [];
    }
    FaqdataService.prototype.getFaq = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'faq')
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var faq = new __WEBPACK_IMPORTED_MODULE_1__faq__["a" /* Faq */](item);
                _this.addFaq(faq);
            }
        });
    };
    FaqdataService.prototype.addFaq = function (faq) {
        if (!faq.id) {
            faq.id = ++this.lastId;
        }
        this.faqs.push(faq);
        return this;
    };
    FaqdataService.prototype.getAllFaq = function () {
        //this.getFaq();
        if (this.faqs.length == 0 && !this.checking) {
            this.getFaq();
            this.checking = true;
        }
        return this.faqs;
    };
    FaqdataService.prototype.getAllFaqId = function (id) {
        return this.faqs
            .filter(function (faq) { return faq.id === id; })
            .pop();
    };
    return FaqdataService;
}());
FaqdataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FaqdataService);

var _a;
//# sourceMappingURL=faqdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/faqpage/faqpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\">\n  <div class=\"row\"></div>\n  <div class=\"row\">\n\n    <div class=\"col s12 m12 l9\">\n      <div class=\"card-panel\">\n        <h1>FAQ</h1>\n        <p></p>\n        <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"accordion\">\n          <li *ngFor=\"let faq of faqs\">\n            <div class=\"collapsible-header\"><h1 class=\"icon q\">Q</h1>{{ faq.question }}</div>\n            <div class=\"collapsible-body\"><h1 class=\"icon a\">A</h1><p [innerHTML]=\"faq.answer| safeHtml\"></p></div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <app-next-session></app-next-session>\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/faqpage/faqpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faqpage/faqpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faqdata_service__ = __webpack_require__("../../../../../src/app/faqpage/faqdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqpageComponent = (function () {
    function FaqpageComponent(faqdataService, http) {
        this.faqdataService = faqdataService;
        this.http = http;
    }
    FaqpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    Object.defineProperty(FaqpageComponent.prototype, "faqs", {
        get: function () {
            return this.faqdataService.getAllFaq();
        },
        enumerable: true,
        configurable: true
    });
    return FaqpageComponent;
}());
FaqpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faqpage',
        template: __webpack_require__("../../../../../src/app/faqpage/faqpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faqpage/faqpage.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__faqdata_service__["a" /* FaqdataService */]],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__faqdata_service__["a" /* FaqdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__faqdata_service__["a" /* FaqdataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], FaqpageComponent);

var _a, _b;
//# sourceMappingURL=faqpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__("../../../../../src/app/gallery/gallery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryService = (function () {
    function GalleryService(http) {
        this.http = http;
        this.gallerys = [];
        this.checking = false;
    }
    GalleryService.prototype.getData = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'gallery')
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            _this.checking = true;
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var gallery = new __WEBPACK_IMPORTED_MODULE_1__gallery__["a" /* Gallery */](item);
                _this.addGallery(gallery);
            }
        });
    };
    GalleryService.prototype.addGallery = function (gallery) {
        if (!this.gallerys.find(function (x) { return x.pk == gallery.pk; })) {
            this.gallerys.push(gallery);
        }
        return this;
    };
    GalleryService.prototype.getAllGallery = function () {
        if (this.gallerys.length == 0 && !this.checking) {
            this.getData();
            this.checking = true;
        }
        return this.gallerys;
    };
    GalleryService.prototype.getGalleryBySlug = function (slug) {
        var _this = this;
        if (!this.gallerys) {
            this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'gallery/' + slug)
                .map(function (res) { return res.json(); })
                .subscribe(function (json) {
                var gallery = new __WEBPACK_IMPORTED_MODULE_1__gallery__["a" /* Gallery */](json);
                _this.addGallery(gallery);
                return gallery;
            });
        }
        else {
            return this.gallerys
                .filter(function (gallery) { return gallery.slug == slug; })
                .pop();
        }
    };
    return GalleryService;
}());
GalleryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GalleryService);

var _a;
//# sourceMappingURL=gallery.service.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gallery; });
var Gallery = (function () {
    function Gallery(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Gallery;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallerydetail/gallerydetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + gallery?.main_image.image.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\">\n  <div class=\"row wow fadeIn\">\n    <div class=\"col s12\">\n      <div class=\"card-panel\">\n\n        <h1>{{ gallery?.title }}</h1>\n        <div class=\"boxarea-content\" [innerHTML]=\"gallery?.description | safeHtml\"></div>\n\n        <div class=\"imagegroup\">\n          <div class=\"imagethumb\" *ngFor=\"let image of gallery?.gallery; let i=index\">\n            <img [src]=\"image?.image.small\" (click)=\"open(i)\"/>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallerydetail/gallerydetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallerydetail/gallerydetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallerydetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery_service__ = __webpack_require__("../../../../../src/app/gallery/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GallerydetailComponent = (function () {
    function GallerydetailComponent(route, galleryService, router, _lightbox) {
        this.route = route;
        this.galleryService = galleryService;
        this.router = router;
        this._lightbox = _lightbox;
        this._album = [];
    }
    GallerydetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.slug = params['slug'];
        });
        this.gallery = this.galleryService.getGalleryBySlug(this.slug);
        if (this.gallery) {
            for (var _i = 0, _a = this.gallery.gallery; _i < _a.length; _i++) {
                var gallery = _a[_i];
                this._album.push(gallery.image);
            }
        }
    };
    GallerydetailComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._album, index);
    };
    return GallerydetailComponent;
}());
GallerydetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallerydetail',
        template: __webpack_require__("../../../../../src/app/gallery/gallerydetail/gallerydetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallerydetail/gallerydetail.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gallery_service__["a" /* GalleryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["a" /* Lightbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["a" /* Lightbox */]) === "function" && _d || Object])
], GallerydetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gallerydetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallerylist/gallerylist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"card-panel\">\n      <h1>Gallery</h1>\n      <div class=\"row\">\n        <div class=\"col s12 m3 l3 wow fadeIn\" *ngFor=\"let gallery of galleries; trackBy: trackByFn;\">\n          <app-square-item [article]=\"gallery\" [endpoint]=\"'gallery'\"></app-square-item>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallerylist/gallerylist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallerylist/gallerylist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallerylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gallery_service__ = __webpack_require__("../../../../../src/app/gallery/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GallerylistComponent = (function () {
    function GallerylistComponent(http, galleryService) {
        this.http = http;
        this.galleryService = galleryService;
    }
    GallerylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
        this.galleryService.getData();
    };
    Object.defineProperty(GallerylistComponent.prototype, "galleries", {
        get: function () {
            return this.galleryService.getAllGallery();
        },
        enumerable: true,
        configurable: true
    });
    GallerylistComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    return GallerylistComponent;
}());
GallerylistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-gallerylist',
        template: __webpack_require__("../../../../../src/app/gallery/gallerylist/gallerylist.component.html"),
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        styles: [__webpack_require__("../../../../../src/app/gallery/gallerylist/gallerylist.component.scss")],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__gallery_service__["a" /* GalleryService */]) === "function" && _b || Object])
], GallerylistComponent);

var _a, _b;
//# sourceMappingURL=gallerylist.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + images?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container wow fadeIn\">\n  <div class=\"row height-spacer\"></div>\n  <div class=\"row\">\n\n    <app-content-area [column]=\"1\" [title]=\"home.title\" [content]=\"home.description\" [paginate]=\"False\" *ngFor=\"let home of homepage\"></app-content-area>\n    <app-next-session></app-next-session>\n    <app-content-area *ngFor=\"let notif of notification\" [paginate]=\"False\" [column]=\"1\" [title]=\"notif.title\" [content]=\"notif.message\"></app-content-area>\n\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomepageComponent = (function () {
    function HomepageComponent(http) {
        this.http = http;
        this.title = 'Chiswick Pier Canoe Club';
        this.defaultImage = 'https://www.placecage.com/1000/1000';
        this.offset = 1000;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'homepage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            if (json[0]['main_image']) {
                _this.images = json[0]['main_image']['image'];
            }
            _this.homepage = json;
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'notification')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.notification = json;
        });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainheader/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-logo\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/mainheader/logo/logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-logo {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainheader/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    return LogoComponent;
}());
LogoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logo',
        template: __webpack_require__("../../../../../src/app/mainheader/logo/logo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainheader/logo/logo.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LogoComponent);

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainheader/mainheader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n    <nav >\n      <div class=\"nav-wrapper\">\n        <a routerLink=\"/\" class=\"brand-logo\"><app-logo></app-logo>Chiswick Canoe Pier Club</a>\n        <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\" materialize=\"sideNav\"><i class=\"material-icons\">menu</i></a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li><a routerLink=\"/about\">About</a></li>\n          <li><a >Membership</a></li>\n          <li><a routerLink=\"/enquiry\">Enquiries</a></li>\n          <li><a routerLink=\"/faq\">FAQ</a></li>\n          <li><a routerLink=\"/article\">Articles</a></li>\n          <li><a href=\"\">Events</a></li>\n          <li><a routerLink=\"/session\">Sessions</a></li>\n          <li><a href=\"\">Trips</a></li>\n          <li><a routerLink=\"/newsletter\">Newsletter</a></li>\n        </ul>\n        <ul class=\"side-nav\" id=\"mobile-demo\" >\n          <li><a routerLink=\"/about\">About</a></li>\n          <li><a >Membership</a></li>\n          <li><a routerLink=\"/enquiry\">Enquiries</a></li>\n          <li><a routerLink=\"/faq\">FAQ</a></li>\n          <li><a routerLink=\"/article\">Articles</a></li>\n          <li><a href=\"\">Events</a></li>\n          <li><a routerLink=\"/session\">Sessions</a></li>\n          <li><a href=\"\">Trips</a></li>\n          <li><a routerLink=\"/newsletter\">Newsletter</a></li>\n        </ul>\n      </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mainheader/mainheader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainheader/mainheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainheaderComponent = (function () {
    function MainheaderComponent() {
    }
    MainheaderComponent.prototype.ngOnInit = function () {
    };
    return MainheaderComponent;
}());
MainheaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mainheader',
        template: __webpack_require__("../../../../../src/app/mainheader/mainheader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainheader/mainheader.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MainheaderComponent);

//# sourceMappingURL=mainheader.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainimage/mainimage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imageelement\" [defaultImage]=\"defaultImage\" [lazyLoad]=\"image\" [offset]=\"offset\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/mainimage/mainimage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 700px;\n  top: 0px;\n  left: 0px;\n  z-index: -1; }\n\n.imageelement {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: background-image 1s ease-in-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainimage/mainimage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainimageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainimageComponent = (function () {
    function MainimageComponent(http) {
        this.http = http;
        this.defaultImage = 'http://127.0.0.1:8000/media/media/images/IMG_8442.JPG';
        this.offset = 100;
    }
    MainimageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.image == null) {
            this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'homepageimage')
                .map(function (res) { return res.json(); }).subscribe(function (json) {
                _this.image = json['main_image']['image']['file'];
            });
        }
    };
    return MainimageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MainimageComponent.prototype, "image", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MainimageComponent.prototype, "map", void 0);
MainimageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mainimage',
        template: __webpack_require__("../../../../../src/app/mainimage/mainimage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainimage/mainimage.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MainimageComponent);

var _a;
//# sourceMappingURL=mainimage.component.js.map

/***/ }),

/***/ "../../../../../src/app/maplist-item/maplist-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"goToEndpoint()\">\n  <div class=\"card horizontal session-card\">\n    <div class=\"card-image\">\n      <div leaflet class=\"leafletmap\"\n           [leafletOptions]=\"trip.options\"></div>\n    </div>\n    <div class=\"card-stacked\">\n      <div class=\"card-content\">\n        <span class=\"card-title\">{{ trip.title }}</span>\n        <p class=\"date small\">{{ trip.start_date| date:'mediumDate' }}</p>\n        <p class=\"weather\">10 C</p>\n        <p class=\"breif\">{{ trip.list_description }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/maplist-item/maplist-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Catamaran', sans-serif;\n  color: #0e0e0e; }\n\nh1 {\n  font-size: 30px;\n  line-height: 31px; }\n\n.height-spacer {\n  /*width:100%;*/\n  height: 100%;\n  position: absolute; }\n\n.btn {\n  text-decoration: none;\n  color: #fff;\n  background-color: #140d47;\n  text-align: center;\n  letter-spacing: .5px;\n  cursor: pointer;\n  margin-bottom: 5px;\n  transition: background 1s, color 1s;\n  transition-timing-function: ease-in-out;\n  border: 1px solid #140d47; }\n  .btn:hover {\n    background: #ffffff;\n    color: #140d47;\n    border: 1px solid #140d47; }\n\ninput:not([type]).invalid + label:after, input:not([type]):focus.invalid + label:after, input[type=text].invalid + label:after, input[type=text]:focus.invalid + label:after, input[type=password].invalid + label:after, input[type=password]:focus.invalid + label:after, input[type=email].invalid + label:after, input[type=email]:focus.invalid + label:after, input[type=url].invalid + label:after, input[type=url]:focus.invalid + label:after, input[type=time].invalid + label:after, input[type=time]:focus.invalid + label:after, input[type=date].invalid + label:after, input[type=date]:focus.invalid + label:after, input[type=datetime].invalid + label:after, input[type=datetime]:focus.invalid + label:after, input[type=datetime-local].invalid + label:after, input[type=datetime-local]:focus.invalid + label:after, input[type=tel].invalid + label:after, input[type=tel]:focus.invalid + label:after, input[type=number].invalid + label:after, input[type=number]:focus.invalid + label:after, input[type=search].invalid + label:after, input[type=search]:focus.invalid + label:after, textarea.materialize-textarea.invalid + label:after, textarea.materialize-textarea:focus.invalid + label:after {\n  content: attr(data-error);\n  color: #140d47; }\n\n.mt10 {\n  margin-top: 10px; }\n\n.mt20 {\n  margin-top: 20px; }\n\n.mt30 {\n  margin-top: 30px; }\n\n.mt40 {\n  margin-top: 40px; }\n\n.leaflet-top.leaflet-right {\n  visibility: hidden !important; }\n\n:host .leafletmap {\n  height: 200px;\n  width: 200px; }\n\n:host .card-content {\n  color: #0e0e0e; }\n\n:host .card {\n  border: 1px solid #140d47;\n  background: #ffffff;\n  transition: background 1s, color 1s;\n  transition-timing-function: ease-in-out; }\n  :host .card:hover {\n    background: #140d47;\n    color: #ffffff;\n    border: 1px solid #140d47; }\n    :host .card:hover .card-content {\n      color: #ffffff; }\n      :host .card:hover .card-content .date {\n        color: #ffffff; }\n\n@media only screen and (max-width: 758px) {\n  :host .leafletmap {\n    height: 200px;\n    width: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maplist-item/maplist-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaplistItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trips_trip__ = __webpack_require__("../../../../../src/app/trips/trip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaplistItemComponent = (function () {
    function MaplistItemComponent(router) {
        this.router = router;
    }
    MaplistItemComponent.prototype.ngOnInit = function () {
    };
    MaplistItemComponent.prototype.goToEndpoint = function () {
        this.router.navigate(['trips', this.trip.slug]);
    };
    return MaplistItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trips_trip__["a" /* Trip */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trips_trip__["a" /* Trip */]) === "function" && _a || Object)
], MaplistItemComponent.prototype, "trip", void 0);
MaplistItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maplist-item',
        template: __webpack_require__("../../../../../src/app/maplist-item/maplist-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/maplist-item/maplist-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MaplistItemComponent);

var _a, _b;
//# sourceMappingURL=maplist-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/membership/membership.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\">\n  <div class=\"row height-spacer\"></div>\n  <div class=\"row\">\n\n    <div *ngIf=\"featured\">\n      <div class=\"col s12\">\n        <div class=\"card-panel\">\n          <div class=\"boxarea-header\">\n            <h1>{{ featured?.title }}</h1>\n            <a *ngIf=\"member?.download?.download.file\" href=\"{{ featured?.download?.download.file }}\" target=\"_blank\" class=\"btn download\">Download Form</a>\n          </div>\n\n          <p class=\"date\" *ngIf=\"featured.from_date\">From {{ featured.from_date| date:'d/M/yy'}} to {{ featured.end_date| date:'d/M/yy'}}</p>\n          <div class=\"boxarea-content\" [innerHTML]=\"featured?.description | safeHtml\"></div>\n\n          <div class=\"boxarea-content\" [innerHTML]=\"featured?.cost | safeHtml\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngFor=\"let member of members\">\n      <div class=\"col \" [ngClass]=\"{'s12 m12 l9':column == 1, 's12 m12 l6':column == 2, 's12 m12 l4':column >= 3}\" *ngIf=\"!member.is_featured\">\n        <div class=\"card-panel\">\n\n          <div class=\"boxarea-header\">\n            <h1 class=\"center\">{{ member.title }}</h1>\n          </div>\n          <div class=\"boxarea-content cost\" [innerHTML]=\"member.cost | safeHtml\"></div>\n          <p class=\"date\" *ngIf=\"member.from_date\">From {{ member.from_date| date:'d/M/yy'}} to {{ member.end_date| date:'d/M/yy'}}</p>\n          <div class=\"boxarea-content\" [innerHTML]=\"member.description | safeHtml\"></div>\n\n          <a *ngIf=\"member?.download?.download.file\" href=\"{{ member?.download?.download.file }}\" target=\"_blank\" class=\"btn download mt20\">Download Form</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/membership/membership.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/membership/membership.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__membership_service__ = __webpack_require__("../../../../../src/app/membership/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MembershipComponent = (function () {
    function MembershipComponent(http, membershipService) {
        this.http = http;
        this.membershipService = membershipService;
        this.column = 0;
    }
    MembershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    Object.defineProperty(MembershipComponent.prototype, "members", {
        get: function () {
            var memberships = this.membershipService.getAllMembership();
            if (memberships) {
                this.column = memberships.length;
            }
            return memberships;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MembershipComponent.prototype, "featured", {
        get: function () {
            var featured = this.membershipService.getFeatureMembership();
            return featured;
        },
        enumerable: true,
        configurable: true
    });
    return MembershipComponent;
}());
MembershipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-membership',
        template: __webpack_require__("../../../../../src/app/membership/membership.component.html"),
        styles: [__webpack_require__("../../../../../src/app/membership/membership.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__membership_service__["a" /* MembershipService */]) === "function" && _b || Object])
], MembershipComponent);

var _a, _b;
//# sourceMappingURL=membership.component.js.map

/***/ }),

/***/ "../../../../../src/app/membership/membership.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembershipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__membership__ = __webpack_require__("../../../../../src/app/membership/membership.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembershipService = (function () {
    function MembershipService(http) {
        this.http = http;
        this.memberships = [];
    }
    MembershipService.prototype.getMembership = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'membership')
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var member = new __WEBPACK_IMPORTED_MODULE_1__membership__["a" /* Membership */](item);
                _this.addMembership(member);
            }
        });
    };
    MembershipService.prototype.addMembership = function (membership) {
        this.memberships.push(membership);
        return this;
    };
    MembershipService.prototype.getAllMembership = function () {
        if (this.memberships.length == 0 && !this.checking) {
            this.getMembership();
            this.checking = true;
        }
        return this.memberships;
    };
    MembershipService.prototype.getFeatureMembership = function () {
        var member = this.memberships
            .filter(function (memers) { return memers.is_featured == true; })
            .pop();
        return member;
    };
    return MembershipService;
}());
MembershipService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MembershipService);

var _a;
//# sourceMappingURL=membership.service.js.map

/***/ }),

/***/ "../../../../../src/app/membership/membership.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Membership; });
var Membership = (function () {
    function Membership(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Membership;
}());

//# sourceMappingURL=membership.js.map

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletter-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsletter__ = __webpack_require__("../../../../../src/app/newsletter/newsletter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsletterDataService = (function () {
    function NewsletterDataService(http) {
        this.http = http;
        this.newsletters = [];
    }
    NewsletterDataService.prototype.getNewsletter = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'newsletter/')
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var news = new __WEBPACK_IMPORTED_MODULE_1__newsletter__["a" /* Newsletter */](item);
                _this.addNewsletter(news);
            }
        });
    };
    NewsletterDataService.prototype.addNewsletter = function (newsletter) {
        this.newsletters.push(newsletter);
        return this;
    };
    NewsletterDataService.prototype.getAllNewsletter = function () {
        if (this.newsletters.length == 0 && !this.checking) {
            this.getNewsletter();
            this.checking = true;
        }
        return this.newsletters;
    };
    NewsletterDataService.prototype.getNewsltterBySlug = function (slug) {
        var news = this.newsletters
            .filter(function (newsletter) { return newsletter.slug === slug; })
            .pop();
        return news;
    };
    return NewsletterDataService;
}());
NewsletterDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NewsletterDataService);

var _a;
//# sourceMappingURL=newsletter-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Author */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newsletter; });
var Author = (function () {
    function Author(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Author;
}());

var Newsletter = (function () {
    function Newsletter(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Newsletter;
}());

//# sourceMappingURL=newsletter.js.map

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletterdetail/newsletterdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"container\">\n  <div class=\"row\"></div>\n  <div class=\"row\">\n\n    <div class=\"col s12 m12 l12\">\n      <div class=\"card-panel\">\n        <div class=\"boxarea-header\">\n          <h1>{{ newsletter.number }}{{ newsletter.title }}</h1>\n        </div>\n        <div class=\"boxarea-content\" [innerHTML]=\"newsletter.newsletter | safeHtml\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletterdetail/newsletterdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletterdetail/newsletterdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsletter_data_service__ = __webpack_require__("../../../../../src/app/newsletter/newsletter-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsletterdetailComponent = (function () {
    function NewsletterdetailComponent(http, route, newsletterData, router) {
        this.http = http;
        this.route = route;
        this.newsletterData = newsletterData;
        this.router = router;
    }
    NewsletterdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.slug = params['slug'];
        });
        this.newsletter = this.newsletterData.getNewsltterBySlug(this.slug);
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    return NewsletterdetailComponent;
}());
NewsletterdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-newsletterdetai',
        template: __webpack_require__("../../../../../src/app/newsletter/newsletterdetail/newsletterdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newsletter/newsletterdetail/newsletterdetail.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_5__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__newsletter_data_service__["a" /* NewsletterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__newsletter_data_service__["a" /* NewsletterDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], NewsletterdetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=newsletterdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletterlist/newsletter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\">\n  <div class=\"row\"></div>\n  <div class=\"row\">\n\n    <div class=\"col s12 m12 l9\">\n      <div class=\"card-panel\">\n        <h1>Newsletter</h1>\n        <p></p>\n        <div class=\"collection\" >\n          <a routerLink=\"/newsletter/{{ news.slug }}\"class=\"collection-item\" *ngFor=\"let news of newsletters\">\n            <div class=\"col s2\">\n              {{ news.number}}\n            </div>\n            <div class=\"col s8\">\n              {{ news.title }}\n            </div>\n            <div class=\"col s2\">\n              {{ news.postdate }}\n            </div>\n          </a>\n\n        </div>\n      </div>\n    </div>\n    <app-next-session></app-next-session>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletterlist/newsletter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newsletter/newsletterlist/newsletter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__newsletter_data_service__ = __webpack_require__("../../../../../src/app/newsletter/newsletter-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsletterComponent = (function () {
    function NewsletterComponent(http, newsletterDataService) {
        this.http = http;
        this.newsletterDataService = newsletterDataService;
    }
    NewsletterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    Object.defineProperty(NewsletterComponent.prototype, "newsletters", {
        get: function () {
            return this.newsletterDataService.getAllNewsletter();
        },
        enumerable: true,
        configurable: true
    });
    return NewsletterComponent;
}());
NewsletterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-newsletter',
        template: __webpack_require__("../../../../../src/app/newsletter/newsletterlist/newsletter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newsletter/newsletterlist/newsletter.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__newsletter_data_service__["a" /* NewsletterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__newsletter_data_service__["a" /* NewsletterDataService */]) === "function" && _b || Object])
], NewsletterComponent);

var _a, _b;
//# sourceMappingURL=newsletter.component.js.map

/***/ }),

/***/ "../../../../../src/app/next-session/next-session.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s12 m12 l3\">\n  <div class=\"card session-card\">\n    <div class=\"card-content\">\n      <span class=\"card-title\">Next Session</span>\n      <p class=\"locationsection\" *ngIf=\"session?.club\">at Chiswick Pier</p>\n      <p class=\"locationsection\" *ngIf=\"!session?.club\">at the Pool</p>\n      <p class=\"date\">{{(session)?.date}}</p>\n      <p class=\"brief\">{{(session)?.content}}</p>\n    </div>\n    <div class=\"card-action\">\n      <a href=\"/session\">Find us</a>\n      <a href=\"/faq\">FAQ</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/next-session/next-session.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/next-session/next-session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextSessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__next_session_service__ = __webpack_require__("../../../../../src/app/next-session/next-session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__next_session__ = __webpack_require__("../../../../../src/app/next-session/next-session.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NextSessionComponent = (function () {
    function NextSessionComponent(nextsessionService) {
        this.nextsessionService = nextsessionService;
        this.tideOptions = {
            legend: { display: false },
            scales: { yAxes: [{ display: false }], xAxes: [{ display: false, type: 'linear', position: 'bottom' }] }
        };
        this.tideColour = [{
                backgroundColor: '#fff',
                borderColor: '#2287b0',
                pointBackgroundColor: '#2287b0',
                pointBorderColor: '#2287b0',
                pointHoverBackgroundColor: '#2287b0',
                pointHoverBorderColor: '#2287b0'
            }];
    }
    NextSessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nextsessionService.getSession().subscribe(function (json) {
            _this.session = new __WEBPACK_IMPORTED_MODULE_2__next_session__["a" /* NextSession */]().fromJSON(json);
        });
    };
    return NextSessionComponent;
}());
NextSessionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-next-session',
        template: __webpack_require__("../../../../../src/app/next-session/next-session.component.html"),
        styles: [__webpack_require__("../../../../../src/app/next-session/next-session.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__next_session_service__["a" /* NextSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__next_session_service__["a" /* NextSessionService */]) === "function" && _a || Object])
], NextSessionComponent);

var _a;
//# sourceMappingURL=next-session.component.js.map

/***/ }),

/***/ "../../../../../src/app/next-session/next-session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextSessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NextSessionService = (function () {
    function NextSessionService(http) {
        this.http = http;
    }
    NextSessionService.prototype.getSession = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'nextsession')
            .map(function (res) { return res.json(); });
    };
    return NextSessionService;
}());
NextSessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NextSessionService);

var _a;
//# sourceMappingURL=next-session.service.js.map

/***/ }),

/***/ "../../../../../src/app/next-session/next-session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextSession; });
var NextSession = (function () {
    function NextSession(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    NextSession.prototype.fromJSON = function (json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    };
    return NextSession;
}());

//# sourceMappingURL=next-session.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"card-panel\">\n      <h1>Sorry this page doesn't exist</h1>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbyPipe = (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (array, args) {
        // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id
        if (array) {
            // get the first element
            var orderByValue_1 = args[0];
            var byVal_1 = 1;
            // check if exclamation point
            if (orderByValue_1.charAt(0) == "!") {
                // reverse the array
                byVal_1 = -1;
                orderByValue_1 = orderByValue_1.substring(1);
            }
            array.sort(function (a, b) {
                if (a[orderByValue_1] < b[orderByValue_1]) {
                    return -1 * byVal_1;
                }
                else if (a[orderByValue_1] > b[orderByValue_1]) {
                    return 1 * byVal_1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
        //
    };
    return OrderbyPipe;
}());
OrderbyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'orderby'
    })
], OrderbyPipe);

//# sourceMappingURL=orderby.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export fadeInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/**
 * Created by sam on 02/06/17.
 */

function routerTransition() {
    return fadeInOut();
}
function fadeInOut() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=router.animations.js.map

/***/ }),

/***/ "../../../../../src/app/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtmlPipe);

var _a;
//# sourceMappingURL=safe-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\">\n  <div class=\"row height-spacer\"></div>\n  <div class=\"row\">\n\n    <div *ngFor=\"let section of sections\">\n      <div class=\"col \" [ngClass]=\"{'s12 m12 l9':column == 1, 's12 m12 l6':column == 2, 's12 m12 l4':column >= 3}\">\n        <div class=\"card-panel\">\n          <div class=\"boxarea-action\" *ngIf=\"paginate\">\n            <a href=\"#\">Previous</a>\n            <a href=\"#\">Next</a>\n          </div>\n          <div class=\"boxarea-header\">\n            <h1>{{ section.title }}</h1>\n          </div>\n          <div class=\"boxarea-content\" [innerHTML]=\"section.description | safeHtml\"></div>\n\n          <div class=\"boxarea-content\" [innerHTML]=\"section.cost | safeHtml\"></div>\n\n          <div class=\"boxarea-map\">\n            <div leaflet class=\"leafletmap\"\n                 [leafletOptions]=\"section.options\"\n            ></div>\n          </div>\n\n          <div class=\"card-action\">\n            <a href=\"{{ section.link }}\" target=\"_blank\">Directions</a>\n            <a href=\"/faq\">FAQ</a>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/session/session.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/session/session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sessiondata_service__ = __webpack_require__("../../../../../src/app/session/sessiondata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionComponent = (function () {
    function SessionComponent(http, sessionsdata) {
        this.http = http;
        this.sessionsdata = sessionsdata;
    }
    SessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    Object.defineProperty(SessionComponent.prototype, "sections", {
        get: function () {
            var session = this.sessionsdata.getAllSession();
            this.column = session.length;
            return session;
        },
        enumerable: true,
        configurable: true
    });
    return SessionComponent;
}());
SessionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-session',
        template: __webpack_require__("../../../../../src/app/session/session.component.html"),
        styles: [__webpack_require__("../../../../../src/app/session/session.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sessiondata_service__["a" /* SessiondataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sessiondata_service__["a" /* SessiondataService */]) === "function" && _b || Object])
], SessionComponent);

var _a, _b;
//# sourceMappingURL=session.component.js.map

/***/ }),

/***/ "../../../../../src/app/session/session.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
var Session = (function () {
    function Session(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ "../../../../../src/app/session/sessiondata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessiondataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session__ = __webpack_require__("../../../../../src/app/session/session.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessiondataService = (function () {
    function SessiondataService(http) {
        this.http = http;
        this.lastId = 0;
        this.sessions = [];
    }
    SessiondataService.prototype.getSession = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_ENDPOINT + 'sessions')
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var session = new __WEBPACK_IMPORTED_MODULE_3__session__["a" /* Session */](item);
                if (session.location) {
                    var coord = session.location.map.centre.coordinates;
                    session.options = {
                        layers: [
                            __WEBPACK_IMPORTED_MODULE_4_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', { maxZoom: 18 }),
                            __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]({ lat: coord[1], lng: coord[0] }, {
                                icon: __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
                                    iconSize: [41, 41],
                                    iconAnchor: [20, 40],
                                    iconUrl: '/static/map.svg',
                                })
                            })
                        ],
                        zoom: 14,
                        zoomControl: false,
                        center: __WEBPACK_IMPORTED_MODULE_4_leaflet__["latLng"]({ lat: coord[1], lng: coord[0] })
                    };
                    session.link = 'https://www.google.com/maps/dir/?api=1&destination=' + coord[1] + ',' + coord[0] + '';
                }
                _this.addSession(session);
            }
        });
    };
    SessiondataService.prototype.addSession = function (session) {
        if (!session.pk) {
            session.pk = ++this.lastId;
        }
        this.sessions.push(session);
        return this;
    };
    SessiondataService.prototype.getAllSession = function () {
        //this.getFaq();
        if (this.sessions.length == 0 && !this.checking) {
            this.getSession();
            this.checking = true;
        }
        return this.sessions;
    };
    return SessiondataService;
}());
SessiondataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessiondataService);

var _a;
//# sourceMappingURL=sessiondata.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/tidelevel-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TidelevelDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TidelevelDataService = (function () {
    function TidelevelDataService() {
        this.tidelevels = [];
    }
    TidelevelDataService.prototype.addTideLevel = function (tidelevel) {
        if (!tidelevel.id) {
            tidelevel.id = ++this.lastId;
        }
        this.tidelevels.push(tidelevel);
        return this;
    };
    TidelevelDataService.prototype.deleteTideLevel = function (id) {
        this.tidelevels = this.tidelevels
            .filter(function (tidelevels) { return tidelevels.id !== id; });
        return this;
    };
    TidelevelDataService.prototype.getAllTides = function () {
        return this.tidelevels;
    };
    TidelevelDataService.prototype.getTideLevelById = function (id) {
        return this.tidelevels
            .filter(function (tidelevels) { return tidelevels.id === id; })
            .pop();
    };
    TidelevelDataService.prototype.updateTideLevel = function (id, value) {
        if (value === void 0) { value = {}; }
        var tide = this.getTideLevelById(id);
        if (!tide) {
            return null;
        }
        Object.assign(tide, value);
        return tide;
    };
    return TidelevelDataService;
}());
TidelevelDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TidelevelDataService);

//# sourceMappingURL=tidelevel-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/square-item/square-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card session-card\" (click)=\"goToEndpoint()\">\n  <div class=\"card-image\">\n    <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + article.main_image.image?.small + ')'}\"></div>\n  </div>\n  <div class=\"card-content\">\n    <span class=\"card-title\">{{ article.title }}</span>\n    <p class=\"date small\">{{ article.post_date }}</p>\n    <p class=\"brief\">{{ article.list_description }}</p>\n  </div>\n  <div class=\"card-action\">\n    <a routerLink='/{{ endpoint }}/{{ article.slug }}' >Read more</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/square-item/square-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/square-item/square-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquareItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_article__ = __webpack_require__("../../../../../src/app/articles/article.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SquareItemComponent = (function () {
    function SquareItemComponent(router) {
        this.router = router;
        this.defaultImage = 'https://www.placecage.com/1000/1000';
        this.offset = 100;
    }
    SquareItemComponent.prototype.goToEndpoint = function () {
        this.router.navigate([this.endpoint, this.article.slug]);
    };
    SquareItemComponent.prototype.ngOnInit = function () {
    };
    return SquareItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__articles_article__["a" /* Article */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__articles_article__["a" /* Article */]) === "function" && _a || Object)
], SquareItemComponent.prototype, "article", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SquareItemComponent.prototype, "endpoint", void 0);
SquareItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-square-item',
        template: __webpack_require__("../../../../../src/app/square-item/square-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/square-item/square-item.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SquareItemComponent);

var _a, _b;
//# sourceMappingURL=square-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/trips/trip.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Day */
/* unused harmony export TripExtra */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trip; });
var Day = (function () {
    function Day(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Day;
}());

var TripExtra = (function () {
    function TripExtra(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return TripExtra;
}());

var Trip = (function () {
    function Trip(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Trip;
}());

//# sourceMappingURL=trip.js.map

/***/ }),

/***/ "../../../../../src/app/trips/tripdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trip__ = __webpack_require__("../../../../../src/app/trips/trip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TripdataService = (function () {
    function TripdataService(http) {
        this.http = http;
        this.trips = [];
    }
    TripdataService.prototype.getTrip = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'trips')
            .map(function (res) { return res.json(); })
            .subscribe(function (json) {
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var item = json_1[_i];
                var trip = new __WEBPACK_IMPORTED_MODULE_1__trip__["a" /* Trip */](item);
                if (trip.map) {
                    var coord = trip.map.map.centre.coordinates;
                    trip.options = {
                        layers: [
                            __WEBPACK_IMPORTED_MODULE_4_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', { maxZoom: 18 }),
                            __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]({ lat: coord[1], lng: coord[0] })
                        ],
                        zoom: 14,
                        zoomControl: false,
                        center: __WEBPACK_IMPORTED_MODULE_4_leaflet__["latLng"]({ lat: coord[1], lng: coord[0] })
                    };
                }
                _this.addTrip(trip);
            }
        });
    };
    TripdataService.prototype.addTrip = function (trip) {
        this.trips.push(trip);
        return this;
    };
    TripdataService.prototype.getAllTrips = function () {
        if (this.trips.length == 0 && !this.checking) {
            this.getTrip();
            this.checking = true;
        }
        return this.trips;
    };
    TripdataService.prototype.getTripBySlug = function (slug) {
        return this.trips
            .filter(function (trip) { return trip.slug === slug; })
            .pop();
    };
    TripdataService.prototype.getRemoteTripBySlug = function (slug) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + 'trips/' + slug)
            .map(function (res) { return res.json(); }).toPromise();
    };
    return TripdataService;
}());
TripdataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TripdataService);

var _a;
//# sourceMappingURL=tripdata.service.js.map

/***/ }),

/***/ "../../../../../src/app/trips/tripdetail/tripdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement map\" leaflet [leafletBaseLayers]=\"baseLayers\" [leafletLayers]=\"layers\" [leafletOptions]=\"options\" [leafletCenter]=\"center\"></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\" *ngIf=\"trip\">\n  <div class=\"row height-spacer\"></div>\n  <div class=\"row\">\n    <div class=\"col s12 m12 l9\">\n      <div class=\"card-panel\">\n        <div class=\"boxarea-header\">\n          <h1>{{  trip?.title }}</h1>\n        </div>\n        <div class=\"boxarea-content\" [innerHTML]=\"trip?.description | safeHtml\"></div>\n\n        <div class=\"documentgroup\" *ngIf=\"trip.documents.length > 0\">\n          <div class=\"documentitem\" *ngFor=\"let doc of trip.documents; let i=index\">\n            <a *ngIf=\"doc?.download.file\" href=\"{{ doc?.download.file }}\" target=\"_blank\" class=\"btn download\">Download {{ doc?.download.name }}</a>\n          </div>\n        </div>\n\n        <div class=\"imagegroup\" *ngIf=\"trip.gallery.length > 0\">\n          <div class=\"imagethumb\" *ngFor=\"let image of trip.gallery; let i=index\">\n            <img [src]=\"image?.image.small\" (click)=\"open(i)\"/>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col s12 m12 l3\">\n      <div class=\"col s12 m12 l12\">\n        <div class=\"card session-card\">\n          <div class=\"card-content\">\n            <p class=\"card-title\">{{ trip?.start_date | date:'mediumDate' }}</p>\n            <div *ngIf=\"trip.extrafields_set.length > 0\">\n              <div class=\"row\" *ngFor=\"let extra of trip.extrafields_set; let i=index\">\n                <div class=\"col s12 m6\">\n                  <p class=\"brief\"><strong>{{ extra.title}}</strong></p>\n                </div>\n                <div class=\"col s12 m6\">\n                  <p class=\"brief\">{{ extra.value}}</p>\n                </div>\n              </div>\n              </div>\n            <canvas baseChart style=\"width:100%;\"\n                    [datasets]=\"tideData\"\n                    [options]=\"tideoptionslarge\"\n                    [colors]=\"tideColour\"\n                    [chartType]=\"'line'\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"imagespacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/trips/tripdetail/tripdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trips/tripdetail/tripdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trip__ = __webpack_require__("../../../../../src/app/trips/trip.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tripdata_service__ = __webpack_require__("../../../../../src/app/trips/tripdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__ = __webpack_require__("../../../../angular2-lightbox/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TripdetailComponent = (function () {
    function TripdetailComponent(route, tripdataService, router, _lightbox) {
        this.route = route;
        this.tripdataService = tripdataService;
        this.router = router;
        this._lightbox = _lightbox;
        this._album = [];
        this.tideData = [{ data: [] }];
        this.center = Object(__WEBPACK_IMPORTED_MODULE_5_leaflet__["latLng"])(51.482293, -0.251203);
        this.layers = [];
        this.baseLayers = { 'Open Street Map': __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', { maxZoom: 18 }) };
        this.options = {
            zoom: 14,
            zoomControl: true,
        };
        this.tideoptionslarge = {
            responsive: true,
            maintainAspectRatio: true,
            legend: { display: false },
            tooltips: {
                enable: true,
                mode: 'single',
                callbacks: {
                    label: function (tooltipItems, data) {
                        return tooltipItems.yLabel + ' meters';
                    },
                    title: function (tooltipItems, data) {
                        var date = new Date(null);
                        date.setSeconds(tooltipItems[0].xLabel);
                        return 'Time: ' + date.toISOString().substr(14, 5);
                    }
                }
            },
            scales: { yAxes: [{ display: true, labelString: 'Level (m)', ticks: {
                            callback: function (value, index, values) {
                                return value + 'm';
                            }
                        } }],
                xAxes: [{ display: true, type: 'linear', position: 'bottom', labelString: 'Time of day', ticks: {
                            callback: function (value, index, values) {
                                var date = new Date(null);
                                date.setSeconds(value);
                                var time = date.toISOString().substr(14, 5);
                                if (time == '25:00') {
                                    return '23:59';
                                }
                                else {
                                    return time;
                                }
                            }
                        } }] }
        };
        this.tideColour = [{
                backgroundColor: 'transparent',
                borderColor: '#2287b0',
                pointBackgroundColor: '#2287b0',
                pointBorderColor: '#2287b0',
                pointHoverBackgroundColor: '#2287b0',
                pointHoverBorderColor: '#2287b0'
            }];
    }
    TripdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.slug = params['slug'];
            _this.tripdataService.getRemoteTripBySlug(_this.slug).then(function (json) {
                _this.trip = new __WEBPACK_IMPORTED_MODULE_1__trip__["a" /* Trip */](json);
                for (var _i = 0, _a = _this.trip.gallery; _i < _a.length; _i++) {
                    var gallery = _a[_i];
                    _this._album.push(gallery.image);
                }
                _this.tideData = [{ data: _this.trip.day.tide, label: 'Tide' },];
                var coord = _this.trip.map.map.centre.coordinates;
                var path = [];
                for (var _b = 0, _c = _this.trip.map.map.path.coordinates; _b < _c.length; _b++) {
                    var pt = _c[_b];
                    var newpt = [pt[1], pt[0]];
                    path.push(newpt);
                }
                _this.center = __WEBPACK_IMPORTED_MODULE_5_leaflet__["latLng"]({ lat: coord[1], lng: coord[0] });
                _this.layers.push(__WEBPACK_IMPORTED_MODULE_5_leaflet__["polyline"](path, { color: 'red' }));
                _this.options = {
                    zoom: 14,
                    zoomControl: true,
                };
            });
        });
    };
    TripdetailComponent.prototype.open = function (index) {
        // open lightbox
        this._lightbox.open(this._album, index);
    };
    return TripdetailComponent;
}());
TripdetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tripdetail',
        template: __webpack_require__("../../../../../src/app/trips/tripdetail/tripdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trips/tripdetail/tripdetail.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_6__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__tripdata_service__["a" /* TripdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tripdata_service__["a" /* TripdataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["a" /* Lightbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_lightbox__["a" /* Lightbox */]) === "function" && _d || Object])
], TripdetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tripdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/trips/triplist/triplist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imagewrap\">\n  <div class=\"imageelement\" [ngStyle]=\"{'background-image': 'url(' + image?.file + ')'}\" ></div>\n</div>\n<div class=\"imagespacer\"></div>\n<div class=\"container\">\n  <div class=\"row\"></div>\n  <div class=\"row\">\n\n    <div class=\"col s12 m12 l8\">\n      <div class=\"card-panel\">\n        <h1>Trips</h1>\n        <p></p>\n\n        <div class=\"row\">\n          <div class=\"col s12\" *ngFor=\"let trip of trips\">\n            <app-maplist-item [trip]=\"trip\"></app-maplist-item>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n    <app-next-session></app-next-session>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/trips/triplist/triplist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/trips/triplist/triplist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TriplistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tripdata_service__ = __webpack_require__("../../../../../src/app/trips/tripdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TriplistComponent = (function () {
    function TriplistComponent(http, tripdataservice) {
        this.http = http;
        this.tripdataservice = tripdataservice;
    }
    TriplistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + 'pageimage')
            .map(function (res) { return res.json(); }).subscribe(function (json) {
            _this.image = json[0]['main_image']['image'];
        });
    };
    Object.defineProperty(TriplistComponent.prototype, "trips", {
        get: function () {
            return this.tripdataservice.getAllTrips();
        },
        enumerable: true,
        configurable: true
    });
    return TriplistComponent;
}());
TriplistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-triplist',
        template: __webpack_require__("../../../../../src/app/trips/triplist/triplist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/trips/triplist/triplist.component.scss")],
        animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__tripdata_service__["a" /* TripdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tripdata_service__["a" /* TripdataService */]) === "function" && _b || Object])
], TriplistComponent);

var _a, _b;
//# sourceMappingURL=triplist.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    API_ENDPOINT: 'http://127.0.0.1:8000/api/v1/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map