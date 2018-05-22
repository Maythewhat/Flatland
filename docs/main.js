(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_0__["PageComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["appRouting"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, appRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'page/:id',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]
    }
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/button/button.component.html":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/img/next.png\">"

/***/ }),

/***/ "./src/app/button/button.component.scss":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block; }\n  :host.back img {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  :host img {\n    width: 80px; }\n"

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/flatland.service.ts":
/*!*************************************!*\
  !*** ./src/app/flatland.service.ts ***!
  \*************************************/
/*! exports provided: FlatlandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatlandService", function() { return FlatlandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IMGBASE = 'assets/img/';
var FlatlandService = /** @class */ (function () {
    function FlatlandService() {
    }
    FlatlandService.prototype.getMetas = function (page) {
        var meta = METAS[page];
        this.fillMetas(meta, page);
        return meta;
    };
    FlatlandService.prototype.fillMetas = function (meta, pageNumber) {
        meta.pageNumber = pageNumber;
        if (meta.pageNumber !== 1) {
            meta.loaderSource = IMGBASE + "loader" + pageNumber + ".svg";
        }
        else {
            meta.light = true;
        }
        meta.imageSource = IMGBASE + "page" + pageNumber + ".svg";
    };
    FlatlandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FlatlandService);
    return FlatlandService;
}());

var METAS = {
    1: {
        title: 'World 1 : Lineland'
    },
    2: {
        title: 'World 1 : Lineland'
    },
    3: {
        title: 'World 2 : Flatland'
    },
    4: {
        title: 'World 2 : Flatland'
    },
    5: {
        title: 'World 3 : Spaceland'
    },
    6: {
        title: 'World 3 : Spaceland'
    },
    7: {
        title: 'World 3 : Spaceland'
    },
    8: {
        title: 'World 3 : Spaceland'
    },
    9: {
        title: 'World 4 : Hyperspaceland'
    },
    10: {
        title: 'World 4 : Hyperspaceland'
    }
};


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "VERSION 3\r\n<button (click)=\"goPage1()\">GO PAGE 1</button>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.goPage1 = function () {
        this.router.navigate(['page', 1]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"loader animated fadeIn\" [style.background-image]=\"'url('+pageInfo.loaderSource+')'\">\r\n  <div class=\"loader-text\">\r\n    <div class=\"text\">Chargement...</div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"pageInfo && !isLoading\" class=\"content\" [style.background-image]=\"'url('+pageInfo.imageSource+')'\">\r\n  <div class=\"layout animated fadeIn\">\r\n    <div class=\"top\">\r\n      <div class=\"title-block\">\r\n        <div class=\"title\">{{pageInfo.title}}</div>\r\n        <div class=\"page\">Page {{pageInfo.pageNumber}}</div>\r\n      </div>\r\n      <div class=\"spacer\"></div>\r\n      <div class=\"next\" (click)=\"goToPage(pageInfo.pageNumber +1)\">\r\n        <ng-container *ngIf=\"pageInfo.pageNumber !== 10;else home\">\r\n          <app-button></app-button>\r\n          <div *ngIf=\"pageInfo.pageNumber === 1\">Cliquez ici pour accéder à la page suivante</div>\r\n        </ng-container>\r\n        <ng-template #home>Accueil</ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"spacer\"></div>\r\n    <div class=\"bottom\">\r\n      <div class=\"previous\" (click)=\"goToPage(pageInfo.pageNumber -1)\">\r\n        <div *ngIf=\"pageInfo.pageNumber === 1\">Cliquez ici pour accéder à la page précédente</div>\r\n        <app-button class=\"back\"></app-button>\r\n      </div>\r\n      <div class=\"stepper\" [class.light]=\"pageInfo.light\">\r\n        <div class=\"step\" [class.selected]=\"step === pageInfo.pageNumber\" (click)=\"goToPage(step)\" *ngFor=\"let step of steps\">\r\n          {{step}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/page.component.scss":
/*!******************************************!*\
  !*** ./src/app/page/page.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%; }\n  :host .loader {\n    overflow: hidden;\n    background-size: cover;\n    background-position: center center;\n    height: 100%;\n    width: 100%;\n    position: relative; }\n  :host .loader .loader-text {\n      font-weight: 300;\n      position: absolute;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      z-index: 20; }\n  :host .loader .loader-text .text {\n        padding: 12px;\n        font-size: 32px;\n        background: #000;\n        color: #fff; }\n  :host .next,\n  :host .previous {\n    display: flex;\n    cursor: pointer;\n    flex-direction: column;\n    justify-content: center; }\n  :host .next div,\n    :host .previous div {\n      font-size: 11px;\n      font-weight: 300; }\n  :host .next {\n    align-items: flex-end; }\n  :host .next div {\n      margin-right: 6px;\n      width: 80px;\n      text-align: right; }\n  :host .previous div {\n    margin-left: 6px;\n    text-align: left;\n    width: 90px; }\n  :host .content {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background-position: center center;\n    background-repeat: no-repeat; }\n  :host .layout {\n    padding: 24px;\n    height: 100%;\n    z-index: 20;\n    display: flex;\n    flex-direction: column; }\n  :host .layout * {\n      z-index: 20; }\n  :host .layout .top {\n      display: flex; }\n  :host .layout .top .title-block {\n        display: flex;\n        flex-direction: column;\n        background: #000;\n        color: #fff;\n        padding: 6px; }\n  :host .layout .top .title-block .title {\n          font-weight: 300;\n          font-size: 24px; }\n  :host .layout .top .title-block .page {\n          font-size: 18px;\n          font-style: italic; }\n  :host .layout .bottom {\n      display: flex;\n      justify-content: center;\n      position: relative; }\n  :host .layout .bottom .previous {\n        position: absolute;\n        left: 0;\n        bottom: 0; }\n  :host .layout .bottom .stepper {\n        display: flex;\n        align-items: center; }\n  :host .layout .bottom .stepper.light .step {\n          background: #fff;\n          color: #000; }\n  :host .layout .bottom .stepper .step {\n          font-weight: 300;\n          cursor: pointer;\n          width: 30px;\n          height: 30px;\n          font-size: 20px;\n          padding: 6px;\n          margin: 0 6px;\n          background: #000;\n          color: #fff;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n  :host .layout .bottom .stepper .step.selected {\n            width: 44px;\n            height: 44px;\n            font-size: 30px; }\n  :host .spacer {\n    flex: 1; }\n"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flatland_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flatland.service */ "./src/app/flatland.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = /** @class */ (function () {
    function PageComponent(route, flatlandService, router) {
        this.route = route;
        this.flatlandService = flatlandService;
        this.router = router;
        this.steps = [];
        for (var i = 1; i <= 10; i++) {
            this.steps.push(i);
        }
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params && params['id']) {
                _this.goToPage(+params['id']);
            }
        });
    };
    PageComponent.prototype.goToPage = function (id) {
        var _this = this;
        if (id === 11 || id === 0) {
            this.router.navigate(['home']);
            return;
        }
        this.pageInfo = null;
        var pageInfo = this.flatlandService.getMetas(id);
        this.router.navigateByUrl('/page/' + id);
        if (pageInfo.loaderSource) {
            this.isLoading = true;
            this.pageInfo = pageInfo;
            setTimeout(function () {
                _this.isLoading = false;
            }, 1500);
        }
        else {
            this.pageInfo = pageInfo;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PageComponent.prototype, "pageInfo", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/page/page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _flatland_service__WEBPACK_IMPORTED_MODULE_2__["FlatlandService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WS\Madeleine\flatland2\Flatland\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map