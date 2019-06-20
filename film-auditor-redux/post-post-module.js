(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-page\">\r\n    <div *ngIf=\"postData\" class=\"post\">\r\n        <h1>{{postData.name}}</h1>\r\n        <p>{{postData.date}}</p>\r\n        <img [src]=\"postData.image\">\r\n        <div markdown [src]=\"post\"></div>\r\n    </div>\r\n    <div class=\"sidebar\">\r\n        <div class=\"sidebar-box\">\r\n            <h2>Follow Me:</h2>\r\n            <div class=\"follow-me\">\r\n                <a href=\"https://www.imdb.com/user/ur37514398/?ref_=nb_usr_prof_0\" target=\"_blank\"><img class=\"imdb-logo logo\" src=\"assets/img/imdb-logo.png\" alt=\"IMDb logo\"/></a>\r\n                <a href=\"https://letterboxd.com/TheFilmAuditor/\" target=\"_blank\"><img class=\"letterboxd-logo logo\" src=\"assets/img/letterboxd-logo.png\" alt=\"letterboxd logo\"/></a>\r\n                <a href=\"https://www.youtube.com/channel/UCcB-rukqO7jGd6ssKin5Fiw\" target=\"_blank\"><img class=\"youtube-logo logo\" src=\"assets/img/youtube-logo.png\" alt=\"youtube logo\"/></a>\r\n            </div>\r\n        </div>\r\n        <div class=\"sidebar-box\">\r\n            <h2>Recommended Posts:</h2>\r\n            <div *ngFor=\"let rec of recommended\" class=\"side-card\">\r\n                <a href=\"/post/{{rec.id}}\">\r\n                    <img [src]=\"rec.image\" class=\"rec-img\">\r\n                    <div class=\"rec-info\">\r\n                        <h3>{{rec.name}}</h3>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/post/post.component.less":
/*!******************************************!*\
  !*** ./src/app/post/post.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-page {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.post {\n  width: 65%;\n  background-color: white;\n  padding: 2rem;\n  margin: 2rem auto;\n}\n@media (min-width: 767px) {\n  .post {\n    width: 55%;\n  }\n}\n.post img {\n  width: 100%;\n}\n.post p img {\n  width: 100%;\n}\n.rec-img {\n  width: 100%;\n  margin: 1rem auto;\n  display: block;\n}\n@media (min-width: 480px) {\n  .rec-img {\n    width: 20rem;\n  }\n}\n.rec-info {\n  position: absolute;\n  bottom: 0.5rem;\n  left: 2.825rem;\n  background: rgba(16, 16, 16, 0.75);\n  color: white;\n  padding: 0.75rem;\n  max-width: 17rem;\n}\n.rec-info h3 {\n  margin: 0;\n  font-size: 1rem;\n}\n.side-card {\n  position: relative;\n  text-align: center;\n}\n.sidebar-box {\n  background-color: white;\n  padding: 1rem;\n  margin: 2rem;\n}\n.sidebar {\n  margin: auto;\n}\n@media (min-width: 1200px) {\n  .sidebar {\n    margin: initial;\n  }\n}\n.logo {\n  display: initial;\n  padding: 0.5rem 0.5rem;\n}\n.follow-me {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9DOi91c2Vycy9qb3NoL0RvY3VtZW50cy9HaXRIdWIvZmlsbS1hdWRpdG9yLXJlZHV4L2ZpbG0tYXVkaXRvci1yZWR1eC9zcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElJO0VBQUE7SUFDSSxVQUFBO0VDRE47QUFDRjtBRFBBO0VBV1EsV0FBQTtBQ0RSO0FEVkE7RUFlUSxXQUFBO0FDRlI7QURNQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSjtBRE1JO0VBQUE7SUFDSSxZQUFBO0VDSE47QUFDRjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBREhBO0VBVU0sU0FBQTtFQUNBLGVBQUE7QUNKTjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDUEo7QURVQTtFQUNJLFlBQUE7QUNSSjtBRFVJO0VBQUE7SUFDSSxlQUFBO0VDUE47QUFDRjtBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEVUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2JyZWFrcG9pbnRzLmxlc3NcIjtcblxuLmJsb2ctcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wb3N0IHtcbiAgICB3aWR0aDogNjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG5cbiAgICBAbWVkaWEgQGRlc2t0b3Age1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIHAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ucmVjLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAbWVkaWEgQHRhYmxldCB7XG4gICAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICB9XG59XG5cbi5yZWMtaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMC41cmVtO1xuICAgIGxlZnQ6IDIuODI1cmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsMTYsMTYsLjc1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBtYXgtd2lkdGg6IDE3cmVtO1xuICBcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxufVxuXG4uc2lkZS1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lkZWJhci1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAycmVtO1xufVxuXG4uc2lkZWJhciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgQG1lZGlhIEB3aWRlLXNjcmVlbiB7XG4gICAgICAgIG1hcmdpbjogaW5pdGlhbDtcbiAgICB9XG59XG4ubG9nbyB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xufVxuXG4uZm9sbG93LW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi5ibG9nLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBvc3Qge1xuICB3aWR0aDogNjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLnBvc3Qge1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cbn1cbi5wb3N0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBvc3QgcCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWMtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucmVjLWltZyB7XG4gICAgd2lkdGg6IDIwcmVtO1xuICB9XG59XG4ucmVjLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMC41cmVtO1xuICBsZWZ0OiAyLjgyNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTYsIDE2LCAwLjc1KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBtYXgtd2lkdGg6IDE3cmVtO1xufVxuLnJlYy1pbmZvIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uc2lkZS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lkZWJhci1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAycmVtO1xufVxuLnNpZGViYXIge1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBtYXJnaW46IGluaXRpYWw7XG4gIH1cbn1cbi5sb2dvIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbn1cbi5mb2xsb3ctbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PostComponent = /** @class */ (function () {
    function PostComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.post = './assets/blog/' + params['id'] + '.md';
            _this.http.get('../assets/blogs.json').subscribe(function (data) {
                _this.recommended = data.filter(function (x) { return x.id !== params['id'] && x.id !== 'my-rating-system'; })
                    .sort(function () { return Math.random() - 0.5; })
                    .splice(0, 2);
                _this.recommended.push(data.filter(function (x) { return x.id === 'my-rating-system'; })[0]);
                _this.postData = data.filter(function (x) { return x.id === params['id']; })[0];
            });
        });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.less */ "./src/app/post/post.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");






var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"] },
                    { path: ':id', component: _post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"], pathMatch: 'full' }
                ]),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forChild()
            ]
        })
    ], PostModule);
    return PostModule;
}());



/***/ })

}]);
//# sourceMappingURL=post-post-module.js.map