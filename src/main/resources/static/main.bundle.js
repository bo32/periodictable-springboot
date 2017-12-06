webpackJsonp([0,3],{

/***/ 1064:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(496);


/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getOneElement = function (elementName) {
        return this.http.get('/api/elements/' + elementName).map(function (response) { return response.json(); });
    };
    HttpService.prototype.getTable = function () {
        return this.http.get('/api/table').map(function (response) { return response.json(); });
    };
    HttpService.prototype.getTablePerPeriods = function () {
        return this.http.get('/api/table/periods').map(function (response) { return response.json(); });
    };
    HttpService.prototype.getGroups = function () {
        return this.http.get('/api/groups').map(function (response) { return response.json(); });
    };
    HttpService.prototype.getElementByGroupIdAndPeriodId = function (groupId, periodId) {
        var url = '/api/elements?groupId=' + groupId + '&periodId=' + periodId;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/http.service.js.map

/***/ },

/***/ 253:
/***/ function(module, exports) {

module.exports = ".liquid {\n    color: navy;\n}\n\n.gas {\n    color: rgb(20, 122, 0);\n}\n\n.solid {\n    color: black;\n}\n\n.synthetic {\n    color: rgb(36, 59, 59);\n}\n\n.noblegas {\n    background: linear-gradient(to bottom right, rgb(30, 165, 243) , rgb(177, 220, 255));\n}\n\n.basicmetal {\n    background: linear-gradient(to bottom right, #EC9600 , #FFDF93);\n}\n\n.transitionmetal {\n    background: linear-gradient(to bottom right, rgb(25, 196, 19) , rgb(173, 255, 228));\n}\n\n.alkalimetal {\n    background: linear-gradient(to bottom right, rgb(179, 0, 0) , rgb(255, 135, 135));\n}\n.alkalineearthmetal {\n    background: linear-gradient(to bottom right, rgb(114, 0, 0) , rgb(214, 147, 147));\n}\n.lanthanide {\n    background: linear-gradient(to bottom right, rgb(20, 196, 122) , rgb(196, 236, 219));\n}\n.aclinide {\n    background: linear-gradient(to bottom right, rgb(4, 95, 175) , rgb(203, 226, 255));\n}\n.seminmetal {\n    background: linear-gradient(to bottom right, #BBBBBB , #F1F1F1);\n}\n.nonmetal {\n    background: linear-gradient(to bottom right, #BBBBBB , #F1F1F1);\n}\n.chalcogens {\n    background: linear-gradient(to bottom right, #BBBBBB , #F1F1F1);\n}\n.halogens {\n    background: linear-gradient(to bottom right, #BBBBBB , #F1F1F1);\n}"

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModalElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalElementComponent = (function () {
    function ModalElementComponent() {
        this.curElement = {
            group: { index: '', name: '' },
            period: { index: '', name: '' },
            atomicMass: '',
            atomicNumber: '',
            name: '',
            metal: {
                metalId: ''
            }
        };
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalElementComponent.prototype.ngOnInit = function () {
    };
    ModalElementComponent.prototype.show = function (element) {
        var _this = this;
        this.curElement = element;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalElementComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalElementComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ModalElementComponent.prototype.getCellStyle = function () {
        var tmp = '';
        switch (this.curElement.metal.metalId) {
            case 1:
                tmp += 'basicmetal';
                break;
            case 2:
                tmp += 'alkalimetal';
                break;
            case 3:
                tmp += 'alkalineearthmetal';
                break;
            case 4:
                tmp += 'transitionmetal';
                break;
            case 5:
                tmp += 'lanthanide';
                break;
            case 6:
                tmp += 'aclinide';
                break;
            case 7:
                tmp += 'seminmetal';
                break;
            case 8:
                tmp += 'nonmetal';
                break;
            case 9:
                tmp += 'chalcogens';
                break;
            case 10:
                tmp += 'halogens';
                break;
            case 11:
                tmp += 'noblegas';
                break;
        }
        return tmp;
    };
    ModalElementComponent.prototype.getGroupName = function () {
        return this.firstToUpperCase(this.curElement.group.name);
    };
    ModalElementComponent.prototype.firstToUpperCase = function (str) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
    };
    ModalElementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-modal-element',
            template: __webpack_require__(767),
            styles: [__webpack_require__(763), __webpack_require__(253)]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalElementComponent);
    return ModalElementComponent;
}());
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/modal-element.component.js.map

/***/ },

/***/ 495:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 495;


/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(604);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/main.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(765),
            styles: [__webpack_require__(253)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/app.component.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__element_element_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_table_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_element_modal_element_component__ = __webpack_require__(355);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__element_element_component__["a" /* ElementComponent */],
                __WEBPACK_IMPORTED_MODULE_7__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_8__modal_element_modal_element_component__["a" /* ModalElementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/app.module.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_facade_async__ = __webpack_require__(506);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ElementRef } from '@angular/core/src/linker/element_ref';
var ElementComponent = (function () {
    function ElementComponent(httpService) {
        this.httpService = httpService;
        // getElement() {
        //   this.httpService.getElementByGroupIdAndPeriodId(this.groupId, this.periodId).subscribe(
        //     data => {
        //       console.log(data);
        //       this.element.name = data.name;
        //     },
        //     error => console.error(error)
        //   );
        // }
        // onGetElement() {
        //   this.httpService.getOneElement('hydrogen').subscribe(
        //     data => {
        //       console.log(data);
        //       this.element.name = data.name;
        //     },
        //     error => console.error(error)
        //   );
        // }
        // @ViewChild('modalElement') modalDialog: ElementRef;
        // @ViewChild('modalElementHeader') modalElementHeader: ElementRef;
        this.onClicked = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_facade_async__["a" /* EventEmitter */]();
    }
    ElementComponent.prototype.ngOnInit = function () {
    };
    ElementComponent.prototype.onSelectedElement = function () {
        console.log(this.element);
        // this.modalDialog.nativeElement.show();
        // this.modalElementHeader.nativeElement.value = 'kjkjlkjlkjlkj';
        this.onClicked.emit(this.element);
    };
    ElementComponent.prototype.getCellStyle = function () {
        var tmp = '';
        if (this.element.symbol !== '') {
            tmp += 'periodic-cell ';
        }
        switch (this.element.state.stateId) {
            case 1:
                tmp += 'solid ';
                break;
            case 2:
                tmp += 'gas ';
                break;
            case 3:
                tmp += 'synthetic ';
                break;
            case 4:
                tmp += 'liquid ';
                break;
        }
        switch (this.element.metal.metalId) {
            case 1:
                tmp += 'basicmetal';
                break;
            case 2:
                tmp += 'alkalimetal';
                break;
            case 3:
                tmp += 'alkalineearthmetal';
                break;
            case 4:
                tmp += 'transitionmetal';
                break;
            case 5:
                tmp += 'lanthanide';
                break;
            case 6:
                tmp += 'aclinide';
                break;
            case 7:
                tmp += 'seminmetal';
                break;
            case 8:
                tmp += 'nonmetal';
                break;
            case 9:
                tmp += 'chalcogens';
                break;
            case 10:
                tmp += 'halogens';
                break;
            case 11:
                tmp += 'noblegas';
                break;
        }
        return tmp;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ElementComponent.prototype, "element", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], ElementComponent.prototype, "onClicked", void 0);
    ElementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* Component */])({
            selector: 'app-element',
            template: __webpack_require__(766),
            styles: [__webpack_require__(762), __webpack_require__(253)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */]) === 'function' && _a) || Object])
    ], ElementComponent);
    return ElementComponent;
    var _a;
}());
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/element.component.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_element_modal_element_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @Directive({
//   selector: '[element]',
//   exportAs: 'element'
// })
// export class ElementDirective {
//   @Input() element: any;
// }
var TableComponent = (function () {
    function TableComponent(httpService) {
        this.httpService = httpService;
        this.periods = [];
        this.actinideSerie = [];
        this.lanthanideSerie = [];
        this.groups = [];
        // private modalDialog: ModalElementComponent;
        this.emptyElement = {
            'symbol': '',
            'metal': {
                'metalId': ''
            },
            'state': {
                'stateId': ''
            }
        };
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getTable().subscribe(function (data) {
            console.log(data);
            var index = 0;
            var countElements = data.elements.length;
            var emptyElement = {
                'symbol': '',
                'name': '',
                'atomicNumber': '',
                'group': { 'index': '' },
                'period': { 'index': '' },
                'metal': { 'metalId': '' },
                'state': { 'stateId': '' }
            };
            while (index < countElements) {
                var period = { 'index': '', 'elements': [] };
                for (var i = 1; i < 19; i++) {
                    var curElem = data.elements[index];
                    if (curElem.atomicNumber != null && curElem.atomicNumber >= 57 && curElem.atomicNumber <= 71) {
                        _this.lanthanideSerie.push(curElem);
                        index++;
                        i--;
                    }
                    else if (curElem.atomicNumber != null && curElem.atomicNumber >= 89 && curElem.atomicNumber <= 103) {
                        _this.actinideSerie.push(curElem);
                        index++;
                        i--;
                    }
                    else {
                        if (curElem.group.index === i) {
                            period.index = curElem.period.index;
                            period.elements.push(curElem);
                            index++;
                        }
                        else {
                            period.elements.push(emptyElement);
                        }
                    }
                }
                _this.periods.push(period);
            }
            _this.description = data.description;
        });
        this.httpService.getGroups().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var g = data_1[_i];
                _this.groups.push(g);
            }
        });
    };
    TableComponent.prototype.onSelectedElement = function (elementName) {
        var _this = this;
        this.httpService.getOneElement(elementName).subscribe(function (data) {
            _this.displayElement(data);
        });
    };
    TableComponent.prototype.displayElement = function (element) {
        console.log(element);
    };
    TableComponent.prototype.displayModal = function (event) {
        console.log(event);
        console.log(this.modalDialog);
        this.modalDialogHeader.nativeElement.text = event.name;
        this.modalDialogBody.nativeElement.text = event.name;
        this.modalDialog.show(event);
    };
    TableComponent.prototype.getPeriodClass = function () {
        return '';
    };
    TableComponent.prototype.getGroupClass = function () {
        return '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_1" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__modal_element_modal_element_component__["a" /* ModalElementComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__modal_element_modal_element_component__["a" /* ModalElementComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__modal_element_modal_element_component__["a" /* ModalElementComponent */]) === 'function' && _a) || Object)
    ], TableComponent.prototype, "modalDialog", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_1" /* ViewChild */])('modalElementHeader'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */]) === 'function' && _b) || Object)
    ], TableComponent.prototype, "modalDialogHeader", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_1" /* ViewChild */])('modalElementBody'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */]) === 'function' && _c) || Object)
    ], TableComponent.prototype, "modalDialogBody", void 0);
    TableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__(768),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === 'function' && _d) || Object])
    ], TableComponent);
    return TableComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/table.component.js.map

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/environment.js.map

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/david/workspace/periodic-table-ui/src/polyfills.js.map

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = ".atomicNumber { \n    grid-area: header-left; \n    font-size: 0.7em;\n    text-align: left;\n    margin-left: 3px;\n}\n\n.atomicMass { \n    grid-area: header-right; \n    font-size: 0.7em;\n    text-align: right;\n    margin-right: 3px;\n}\n\n.elementSymbol { \n    grid-area: main; \n    font-size: 1.4em;\n    text-align: center;\n}\n\n.elementName { \n    grid-area: footer; \n    font-size: 0.7em;\n    text-align: center;\n}\n\n.periodic-cell {\n    width: 60px;\n    height: 60px;\n    border: 1px solid #E9E9E9;\n    display: table;\n    /* background: linear-gradient(to bottom right, #BBBBBB , #F1F1F1); */\n    position: relative;\n    transition:0.25s;\n\n    display: -ms-grid;\n\n    display: grid;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch; \n    -ms-grid-columns: 25% 75%; \n        grid-template-columns: 25% 75%;\n    -ms-grid-rows: 24% auto 24%;\n        grid-template-rows: 24% auto 24%;\n    grid-template-areas: 'header-left header-right'\n                         'main main'\n                         'footer footer';\n\n    position:relative;\n}\n\n.periodic-cell:hover {\n    -webkit-transform: scale(1.2,1.2);\n            transform: scale(1.2,1.2);\n    -webkit-transform-origin: center;\n            transform-origin: center;\n    background-size: 100% 100%;\n    background-color: rgba(200, 200, 200,0.2);\n    cursor: pointer;\n    z-index: 5;\n}\n\n"

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = ".modal {\n  background: rgba(0,0,0,0.6);\n}\n\n.modal-header {\n  padding: 0px 15px;\n}"

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = "th {\n    width: 50px;\n    height: 50px;\n    /* background: #8cafff; */\n    /* background: linear-gradient(to bottom right, #4b80ff , #d1e0ff); */\n    text-align: center;\n    width: 60px;\n    height: 60px;\n}\n\ntable {\n    table-layout:fixed;\n    margin: auto;\n}\n\ntr:hover {\n    background-color: rgba(200, 200, 200, 0.2);\n}\n\n.extraRows {\n    margin: 30px;\n}\n"

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = "<!-- <h1>\n  {{title}}\n</h1> -->\n\n<app-table></app-table>\n"

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = "\n<div [ngClass]=\"getCellStyle()\" (click)=\"onSelectedElement()\" >\n    <div class=\"atomicNumber\">{{element.atomicNumber}}</div>\n    <div class=\"atomicMass\">{{element.atomicMass | number}}</div>\n    <div class=\"elementSymbol\">{{element.symbol}}</div>\n    <div class=\"elementName\">{{element.name}}</div>\n</div>"

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" [ngClass]=\"getCellStyle()\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n        <h3>{{ curElement.name }}</h3>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n        <table>\n          <tr>\n            <td>\n              <label for=\"atomicNumber\">Atomic number:</label> <span id=\"atomicNumber\">{{curElement.atomicNumber}}</span> \n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for=\"atomicMass\">Atomic mass:</label> <span id=\"atomicMass\">{{curElement.atomicMass}}</span> \n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for=\"group\">Group:</label> <span id=\"group\">{{curElement.group.name}}</span> \n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content> \n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = "<h1>Periodic table</h1>\n\n<div>\n  <table>\n    <tr>\n      <td><!-- empty cell --></td>\n      <th *ngFor=\"let group of groups\" [ngClass]=\"getGroupClass()\">\n        {{group.index}}\n      </th>\n    </tr>\n    <tr *ngFor=\"let period of periods\" [ngClass]=\"getPeriodClass()\">\n      <th>{{period.index}}</th>\n\n      <td *ngFor=\"let e of period.elements\" >\n        <app-element [element]=\"e\" (onClicked)=\"displayModal($event)\"></app-element>\n      </td>\n      \n    </tr>\n  </table>\n</div>\n\n<div class=\"extraRows\">\n  <table>\n    <tr>\n      <th>Lanth.</th>\n      <td *ngFor=\"let e of lanthanideSerie\" >\n        <app-element [element]=\"e\" (onClicked)=\"displayModal($event)\"></app-element>\n      </td>\n    </tr>\n    <tr>\n      <th>Actin.</th>\n      <td *ngFor=\"let e of actinideSerie\" >\n        <app-element [element]=\"e\" (onClicked)=\"displayModal($event)\"></app-element>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<p>{{description}}</p>\n\n<app-modal-element #modalElement>\n  <div class=\"app-modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"modalElement.hide()\">&times;</button> \n      <h3 #modalElementHeader></h3>\n  </div>\n  <div class=\"app-modal-body\" #modalElementBody></div>\n  <div class=\"app-modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"modalElement.hide()\">Close</button>\n  </div>\n</app-modal-element> \n"

/***/ }

},[1064]);
//# sourceMappingURL=main.bundle.map