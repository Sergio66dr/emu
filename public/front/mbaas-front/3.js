(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/modules/cam/common/components/check-sino/check-sino.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/check-sino/check-sino.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\r\n    <input type=\"checkbox\" class=\"cambiar tamano\" [ngModel]=\"status\" (ngModelChange)=\"onChange($event);\"/>\r\n    <div class=\"switch\">\r\n        <span></span>\r\n    </div>\r\n  </label>"

/***/ }),

/***/ "./src/app/modules/cam/common/components/check-sino/check-sino.component.sass":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/check-sino/check-sino.component.sass ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2NvbW1vbi9jb21wb25lbnRzL2NoZWNrLXNpbm8vY2hlY2stc2luby5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/check-sino/check-sino.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/check-sino/check-sino.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CheckSinoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSinoComponent", function() { return CheckSinoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckSinoComponent = class CheckSinoComponent {
    constructor() {
        this.checkChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onChange(statusCheck) {
        this.checkChange.emit({ statusCheck });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckSinoComponent.prototype, "checkChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], CheckSinoComponent.prototype, "status", void 0);
CheckSinoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-check-sino',
        template: __webpack_require__(/*! ./check-sino.component.html */ "./src/app/modules/cam/common/components/check-sino/check-sino.component.html"),
        styles: [__webpack_require__(/*! ./check-sino.component.sass */ "./src/app/modules/cam/common/components/check-sino/check-sino.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckSinoComponent);



/***/ }),

/***/ "./src/app/modules/cam/common/components/check-sino/check-sino.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/check-sino/check-sino.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckSinoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckSinoModule", function() { return CheckSinoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _check_sino_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-sino.component */ "./src/app/modules/cam/common/components/check-sino/check-sino.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CheckSinoModule = class CheckSinoModule {
};
CheckSinoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_check_sino_component__WEBPACK_IMPORTED_MODULE_3__["CheckSinoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        exports: [_check_sino_component__WEBPACK_IMPORTED_MODULE_3__["CheckSinoComponent"]]
    })
], CheckSinoModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/input-date/input-date.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-date/input-date.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section [formGroup]='form'>\r\n    <div class=\"formGroup__flexRow\" formGroupName='fecha'>\r\n        <select formControlName='dia'\r\n        (focus)='focus()'\r\n        class=\"formGroup__input formGroup__input--select formGroup__input--alignCenter formGroup__flexRow__child\"\r\n        [ngClass] = '{\r\n          \"formGroup__errorBorder--show\": formulario.get(ControlGroupName).errors && ( formulario.get(ControlGroupName).touched || formulario.get(ControlGroupName).dirty )\r\n        }'>\r\n          <option hidden disabled value='' label='DD'></option>\r\n          <option *ngFor='let item of getDias' [value]='item.value' [label]='item.value'></option>\r\n        </select>\r\n        <select formControlName='mes'\r\n        (focus)='focus()'\r\n        class=\"formGroup__input formGroup__input--select formGroup__input--alignCenter formGroup__flexRow__child\"\r\n        [ngClass] = '{\r\n          \"formGroup__errorBorder--show\": formulario.get(ControlGroupName).errors && ( formulario.get(ControlGroupName).touched || formulario.get(ControlGroupName).dirty )\r\n        }'>\r\n          <option hidden disabled value='' label='MM'></option>\r\n          <option *ngFor='let item of getMeses' [value]='item.value' [label]='item.label'></option>\r\n        </select>\r\n        <input formControlName='anio'\r\n        (focus)='focus()'\r\n        class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n        [ngClass] = '{\r\n          \"formGroup__errorBorder--show\": formulario.get(ControlGroupName).errors && ( formulario.get(ControlGroupName).touched || formulario.get(ControlGroupName).dirty )\r\n        }'\r\n        placeholder=\"AAAA\"\r\n        [ccRestrict]='\"1234567890\"'\r\n        maxlength=\"4\">\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/common/components/input-date/input-date.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-date/input-date.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2NvbW1vbi9jb21wb25lbnRzL2lucHV0LWRhdGUvaW5wdXQtZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/input-date/input-date.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-date/input-date.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InputDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateComponent", function() { return InputDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let InputDateComponent = class InputDateComponent {
    constructor(forms) {
        this.getMeses = [
            { label: 'Enero', value: '01' },
            { label: 'Febrero', value: '02' },
            { label: 'Marzo', value: '03' },
            { label: 'Abril', value: '04' },
            { label: 'Mayo', value: '05' },
            { label: 'Junio', value: '06' },
            { label: 'Julio', value: '07' },
            { label: 'Agosto', value: '08' },
            { label: 'Septiembre', value: '09' },
            { label: 'Octubre', value: '10' },
            { label: 'Noviembre', value: '11' },
            { label: 'Diciembre', value: '12' }
        ];
        this.form = forms.group({
            fecha: forms.group({
                dia: ['', []],
                mes: ['', []],
                anio: ['', []]
            })
        });
    }
    ngOnInit() {
        setInterval(() => {
            const fecha = this.form.get('fecha');
            const value = fecha.get('anio').value + '- ' + fecha.get('mes').value + '-' + fecha.get('dia').value;
            if (fecha.get('anio').value !== '' && fecha.get('mes').value !== '' && fecha.get('dia').value !== '') {
                const ddd = new Date(value);
                this.formulario.get(this.ControlGroupName).setValue(ddd);
            }
            if (fecha.get('anio').value === '' || fecha.get('mes').value === '' || fecha.get('dia').value === '') {
                this.formulario.get(this.ControlGroupName).setValue('');
            }
        }, 100);
    }
    focus() {
        this.formulario.get(this.ControlGroupName).markAsDirty();
        this.formulario.get(this.ControlGroupName).markAsTouched();
    }
    esBisiesto(year) {
        if (((parseInt(year, 10) % 4 === 0) && (parseInt(year, 10) % 100 !== 0)) || (parseInt(year, 10) % 400 === 0)) {
            return true;
        }
        return false;
    }
    get getDias() {
        // tslint:disable-next-line: prefer-const
        let dias = [];
        if (this.form.get('fecha').get('mes').value === '01' ||
            this.form.get('fecha').get('mes').value === '03' ||
            this.form.get('fecha').get('mes').value === '05' ||
            this.form.get('fecha').get('mes').value === '07' ||
            this.form.get('fecha').get('mes').value === '10' ||
            this.form.get('fecha').get('mes').value === '12') {
            for (let i = 1; i < 31; i++) {
                dias.push({ value: i });
            }
        }
        if (this.form.get('fecha').get('mes').value === '04' ||
            this.form.get('fecha').get('mes').value === '06' ||
            this.form.get('fecha').get('mes').value === '08' ||
            this.form.get('fecha').get('mes').value === '09' ||
            this.form.get('fecha').get('mes').value === '11') {
            for (let i = 1; i < 31; i++) {
                dias.push({ value: i });
            }
        }
        if (this.form.get('fecha').get('mes').value === '02') {
            for (let i = 1; i < ((this.esBisiesto(this.form.get('fecha').get('anio').value)) ? 29 : 28); i++) {
                dias.push({ value: i });
            }
        }
        return dias;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], InputDateComponent.prototype, "formulario", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputDateComponent.prototype, "ControlGroupName", void 0);
InputDateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'input-date',
        template: __webpack_require__(/*! ./input-date.component.html */ "./src/app/modules/cam/common/components/input-date/input-date.component.html"),
        styles: [__webpack_require__(/*! ./input-date.component.scss */ "./src/app/modules/cam/common/components/input-date/input-date.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], InputDateComponent);



/***/ }),

/***/ "./src/app/modules/cam/common/components/input-date/input-date.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/input-date/input-date.module.ts ***!
  \*******************************************************************************/
/*! exports provided: InputDateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateModule", function() { return InputDateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _input_date_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-date.component */ "./src/app/modules/cam/common/components/input-date/input-date.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modules_common_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/common/directives/directive.module */ "./src/app/modules/common/directives/directive.module.ts");






let InputDateModule = class InputDateModule {
};
InputDateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_input_date_component__WEBPACK_IMPORTED_MODULE_3__["InputDateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_modules_common_directives_directive_module__WEBPACK_IMPORTED_MODULE_5__["DirectiveModule"]],
        exports: [_input_date_component__WEBPACK_IMPORTED_MODULE_3__["InputDateComponent"]]
    })
], InputDateModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/search-list/search-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/search-list/search-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  display: block;\r\n}\r\n\r\n.dropdown-menu {\r\n  width: 100% !important;\r\n  max-height: 30em;\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n}\r\n\r\n.dropdown-menu::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: none;\r\n    border-radius: 5px;\r\n    background-color: rgba(white, 0);\r\n    cursor: pointer !important;\r\n}\r\n\r\n.dropdown-menu::-webkit-scrollbar\r\n{\r\n    width: 5px;\r\n    background-color: rgba(white, 0);\r\n    cursor: pointer !important;\r\n}\r\n\r\n.dropdown-menu::-webkit-scrollbar-thumb\r\n{\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: none;\r\n    background-color: lightgray;\r\n    cursor: pointer !important;\r\n}\r\n\r\n.formGroup__TextSearch {\r\n  width: 100% !important;\r\n  border-radius: 0px !important;\r\n  border-left: 1px solid lightgray;\r\n  border-right: 1px solid lightgray;\r\n  border-bottom: 1px solid lightgray;\r\n  background-color: white;\r\n  height: 3em;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n          align-items: center\r\n}\r\n\r\n.formGroup__TextSearch:hover {\r\n  background-color: lightgray;\r\n  border: 1px solid gray;\r\n}\r\n\r\n.formGroup__TextSearch:first-child {\r\n  border-top: 1px solid lightgray;\r\n}\r\n\r\n.oculto {\r\n  display: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vY29tbW9uL2NvbXBvbmVudHMvc2VhcmNoLWxpc3Qvc2VhcmNoLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix5QkFBa0I7VUFBbEI7QUFDRjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NhbS9jb21tb24vY29tcG9uZW50cy9zZWFyY2gtbGlzdC9zZWFyY2gtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgOjphZnRlciwgOjpiZWZvcmUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogMzBlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh3aGl0ZSwgMCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHdoaXRlLCAwKTtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtR3JvdXBfX1RleHRTZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcblxyXG4uZm9ybUdyb3VwX19UZXh0U2VhcmNoOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmZvcm1Hcm91cF9fVGV4dFNlYXJjaDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLm9jdWx0byB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/search-list/search-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/search-list/search-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section\r\n  class=\"dropdown\"\r\n  [ngClass]='{\r\n    show: lista\r\n  }'\r\n  [formGroup]='formulario'>\r\n    <input [formControlName]='ControlName' class='oculto'>\r\n    <input class=\"formGroup__input\"\r\n      (focusout)=\"ocultarLista()\"\r\n      (focusin)=\"mostrarLista()\"\r\n      (focus)='touch()'\r\n      [ngClass]=\"{\r\n        'ng-invalid ng-touched': ( !!formulario.get(ControlName).errors && !!formulario.get(ControlName).dirty) ? true : false\r\n      }\"\r\n      [placeholder]=\"placeholder\"\r\n      [(ngModel)]='valor'\r\n      [ngModelOptions]=\"{standalone: true}\"\r\n      (input)='search($event)'\r\n      autocomplete=\"off|none\"\r\n    />\r\n  <div\r\n    class='dropdown-menu'\r\n    [ngClass]='{\r\n      show: lista\r\n    }'\r\n    style=\"position: absolute; transform: translate3d(0px, 38px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n    <div class='formGroup__TextSearch formGroup__input'\r\n      *ngFor=\"let item of fil(cont, valor, filtro)\" (click)='set(item)' (click)='ocutar()'>\r\n      {{ setLabel(item) }}\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/common/components/search-list/search-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/search-list/search-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: SearchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchListComponent", function() { return SearchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modules_common_pipe_search_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/common/pipe/search/search.pipe */ "./src/app/modules/common/pipe/search/search.pipe.ts");




let SearchListComponent = class SearchListComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.setValue = (item) => '';
        this.setLabel = (item) => '';
        this.lista = false;
        this.valor = '';
        this.cont = [];
        setTimeout(() => this.formulario.get(this.ControlName).setValue(''), 150);
    }
    set contenido(c) {
        this.cont = c;
        this.ngOnInit();
    }
    set InitialValue(va) {
        this.initialValue = va;
        this.ngOnInit();
    }
    ngOnInit() {
        const value = this.cont.filter(item => {
            if (this.initialValue === this.setValue(item)) {
                return true;
            }
            return false;
        });
        if (value.length > 0) {
            this.set(value[0]);
        }
    }
    ocultarLista() {
        setTimeout(() => this.lista = false, 250);
    }
    ocutar() {
        this.lista = false;
    }
    mostrarLista() {
        this.lista = true;
    }
    touch() {
        this.formulario.get(this.ControlName).markAsTouched();
        this.formulario.get(this.ControlName).markAsDirty();
    }
    search(event) {
        this.valor = event.target.value;
        this.formulario.get(this.ControlName).setValue(this.valor);
    }
    set(item) {
        this.valor = this.setLabel(item);
        this.formulario.get(this.ControlName).setValue(this.setValue(item));
        this.change.emit(item);
        this.touch();
    }
    fil(searchInArray, valor, filtro) {
        return new src_app_modules_common_pipe_search_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"]().transform(searchInArray, valor, filtro);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], SearchListComponent.prototype, "formulario", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SearchListComponent.prototype, "ControlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], SearchListComponent.prototype, "contenido", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], SearchListComponent.prototype, "setValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], SearchListComponent.prototype, "filtro", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SearchListComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], SearchListComponent.prototype, "InitialValue", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchListComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], SearchListComponent.prototype, "setLabel", void 0);
SearchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-list',
        template: __webpack_require__(/*! ./search-list.component.html */ "./src/app/modules/cam/common/components/search-list/search-list.component.html"),
        styles: [__webpack_require__(/*! ./search-list.component.css */ "./src/app/modules/cam/common/components/search-list/search-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchListComponent);



/***/ }),

/***/ "./src/app/modules/cam/common/components/search-list/search-list.module..ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/search-list/search-list.module..ts ***!
  \**********************************************************************************/
/*! exports provided: SearchListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchListModule", function() { return SearchListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _search_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-list.component */ "./src/app/modules/cam/common/components/search-list/search-list.component.ts");
/* harmony import */ var src_app_modules_common_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/common/pipe/pipe.module */ "./src/app/modules/common/pipe/pipe.module.ts");






let SearchListModule = class SearchListModule {
};
SearchListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_search_list_component__WEBPACK_IMPORTED_MODULE_4__["SearchListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_modules_common_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]],
        exports: [_search_list_component__WEBPACK_IMPORTED_MODULE_4__["SearchListComponent"]]
    })
], SearchListModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/select-input/select-input.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-input/select-input.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select name=\"\" [id]=\"fCname\" class=\"formGroup__input formGroup__input--select\">\r\n  <option disabled selected value=\"0\"> Seleccione </option>\r\n  <option *ngFor=\"let item of arrayItems\" value=\"item\">{{item[showOpt]}}</option>\r\n</select>"

/***/ }),

/***/ "./src/app/modules/cam/common/components/select-input/select-input.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-input/select-input.component.sass ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2NvbW1vbi9jb21wb25lbnRzL3NlbGVjdC1pbnB1dC9zZWxlY3QtaW5wdXQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/select-input/select-input.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-input/select-input.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SelectInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInputComponent", function() { return SelectInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectInputComponent = class SelectInputComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectInputComponent.prototype, "showOpt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectInputComponent.prototype, "arrayItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SelectInputComponent.prototype, "fCname", void 0);
SelectInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-input',
        template: __webpack_require__(/*! ./select-input.component.html */ "./src/app/modules/cam/common/components/select-input/select-input.component.html"),
        styles: [__webpack_require__(/*! ./select-input.component.sass */ "./src/app/modules/cam/common/components/select-input/select-input.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SelectInputComponent);



/***/ }),

/***/ "./src/app/modules/cam/common/components/select-input/select-input.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/select-input/select-input.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectInputModule", function() { return SelectInputModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _select_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-input.component */ "./src/app/modules/cam/common/components/select-input/select-input.component.ts");




let SelectInputModule = class SelectInputModule {
};
SelectInputModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _select_input_component__WEBPACK_IMPORTED_MODULE_3__["SelectInputComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _select_input_component__WEBPACK_IMPORTED_MODULE_3__["SelectInputComponent"]
        ]
    })
], SelectInputModule);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin001/vin001.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin001/vin001.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n\r\n<section class=\"container\">\r\n\r\n  <!-- Back button -->\r\n  <app-button-back class=\"backButton\" (click)=\"onBack(getDataToBackButton())\"></app-button-back>\r\n  <!-- End -->\r\n\r\n  <!-- Form container -->\r\n  <div class=\"formContainer\">\r\n    <!-- Initial title -->\r\n    <div class=\"initialTitle\">\r\n      <h3>Mis datos personales</h3>\r\n      <app-form-wizard class=\"initialTitle__stepsCounter\" [steps]=\"4\" [currentStep]=\"1\"></app-form-wizard>\r\n      <h5>Vamos a completar la información requerida para la apertura de su cuenta</h5>\r\n    </div>\r\n    <!-- End -->\r\n    <!-- Form column container -->\r\n    <section class=\"formContainer__columnContainer\">\r\n      <!-- Form column - Las columnas se ajustan, si inluyes otra columna toma la distancia y se alinean dependiendo del dispositivo. -->\r\n      <article class=\"formColumn\">\r\n        <!-- User info -->\r\n        <div class=\"userInfo\">\r\n          <div class=\"userInfo__userAvatar\">\r\n            <img src=\"../../assets/cam/img/demo/avatar.jpg\" alt=\"\">\r\n          </div>\r\n          <div class=\"userInfo__userData\">\r\n            <h5>Nombre Completo</h5>\r\n            <h4>{{ payload?.cliente?.nombre || 'HELENA SANCHEZ'}}</h4>\r\n\r\n            <h5>Tipo de documento</h5>\r\n            <h4> {{ getTipoId(payload?.cliente?.documento?.tipo) }}</h4>\r\n\r\n            <!-- ============================** Número de documento **============================== -->\r\n            <!-- ============================ Salvador ============================== -->\r\n            <ng-container *ngIf=\"pais === 'SV'\">\r\n              <h5>Número de documento DUI</h5>\r\n              <h4>{{ payload?.cliente?.documento?.numero || '1.232.234.789' }}</h4>\r\n\r\n              <h5>Número de identificación NIT</h5>\r\n              <h4>{{ payload?.cliente?.nit || '32.987.432' }}</h4>\r\n            </ng-container>\r\n\r\n            <!-- ========================= Honduras, Costa Rica, Panamá ================================= -->\r\n            <ng-container *ngIf=\"pais === 'HN' || pais === 'CR' || pais === 'PA'\">\r\n              <h5>Número de documento</h5>\r\n              <h4>{{ payload?.cliente?.documento?.numero || '1.232.234.789' }}</h4>\r\n            </ng-container>\r\n\r\n            <!-- ============================ fin ============================== -->\r\n\r\n            <h5>Sexo</h5>\r\n            <h4>{{ genero[payload?.cliente?.sexo] || 'FEMENINO'}}</h4>\r\n          </div>\r\n        </div>\r\n        <!-- <app-user-info class=\"userInfo\" [user]=\"userInfo\"></app-user-info> -->\r\n        <!-- End -->\r\n      </article>\r\n      <!-- End -->\r\n    </section>\r\n    <!-- End -->\r\n    <!-- Button Container -->\r\n    <!-- Comentamos el boton que llama a WF y colocamos uno solo para redirigir-->\r\n    <!-- <app-button-continue [disableIf]='disableButton || formulario.invalid' (call)='onCall(getDataToPayload())'></app-button-continue>-->\r\n    <app-button-continue [disableIf]='disableButton || formulario.invalid' (call)='onRedirect(\"VIN002\")'></app-button-continue>\r\n    <!-- End -->\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin001/vin001.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin001/vin001.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL3ZpbmN1bGFjaW9uL3ZpbjAwMS92aW4wMDEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin001/vin001.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin001/vin001.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin001Component", function() { return Vin001Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/common/CONST */ "./src/app/modules/common/CONST.ts");
/* harmony import */ var src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/common/components/encaptulation */ "./src/app/modules/common/components/encaptulation.ts");
/* harmony import */ var src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");





let Vin001Component = class Vin001Component extends src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    ngOnInit() {
        this.genero = { M: 'Masculino', F: 'Femenino' };
        this.typeIdentification = [];
        this.catalogo.data('ING002', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_2__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_2__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_2__["LENGUAJE"]])).subscribe(response => {
            this.typeIdentification = response ? response : [];
        });
    }
    getTipoId(tipo) {
        const vall = this.typeIdentification.filter(item => {
            if (tipo === item.value) {
                return true;
            }
            return false;
        });
        if (vall.length === 1) {
            return vall[0].label;
        }
        return 'CC';
    }
    ngOnDestroy() {
    }
    getDataToPayload(data) {
        this.disableButton = true;
        return () => ({});
    }
    getDataToBackButton(data) {
        return () => ({
            flujo: {
                atras: true,
                continuar: false,
                callback: () => { }
            }
        });
    }
};
Vin001Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin001',
        template: __webpack_require__(/*! ./vin001.component.html */ "./src/app/modules/cam/vinculacion/vin001/vin001.component.html"),
        encapsulation: src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].ShadowDom,
        styles: [__webpack_require__(/*! ./vin001.component.scss */ "./src/app/modules/cam/vinculacion/vin001/vin001.component.scss"), __webpack_require__(/*! ../../../../../assets/cam/scss/components/vinculacion/_vin001.scss */ "./src/assets/cam/scss/components/vinculacion/_vin001.scss")]
    })
], Vin001Component);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin002/vin002.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin002/vin002.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n\r\n<section class=\"container\">\r\n\r\n  <!-- Back button -->\r\n  <app-button-back class=\"backButton\" (click)=\"onCall(getDataToBackButton())\"></app-button-back>\r\n  <!-- End -->\r\n\r\n  <!-- Form container -->\r\n  <div class=\"formContainer\">\r\n    <!-- Initial title -->\r\n    <div class=\"initialTitle\">\r\n      <h3>Mis datos personales</h3>\r\n      <app-form-wizard class=\"initialTitle__stepsCounter\" [steps]=\"4\" [currentStep]=\"1\"></app-form-wizard>\r\n      <h5><b>{{ payload?.nombre || 'XXXXXXXXXXX' }}</b></h5>\r\n    </div>\r\n\r\n    <!-- End -->\r\n    <!-- <button (click)='show()'>Show Form</button> -->\r\n    <!-- Form column container -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]='formulario'>\r\n\r\n        <article class=\"formColumn\" *ngIf='pais === \"PA\"'>\r\n                <!-- Panamá fields -->\r\n            <div class=\"formGroup\" >\r\n                <label for=\"\" class=\"formGroup__Label\">\r\n                  ¿Cuál es su fecha de nacimiento?\r\n                </label>\r\n                <div class=\"formGroup__flexRow\">\r\n                  <app-search-list\r\n                    style=\"min-width: 33%\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"diaNacimiento\"'\r\n                    [contenido]=\"(dias[formulario.get('mesNacimiento').value] || [])[esBisiesto(formulario.get('anioNacimiento').value)] || []\"\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'DD'\"\r\n                  ></app-search-list>\r\n                  <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"mesNacimiento\"'\r\n                      [contenido]=\"meses\"\r\n                      [setValue]=\"setValuePA\"\r\n                      [setLabel]=\"setLabelPA\"\r\n                      [filtro]=\"filtroPA\"\r\n                      (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'MM'\"\r\n                  ></app-search-list>\r\n                  <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                    placeholder=\"AAAA\" formControlName='anioNacimiento'\r\n                    [form]='formulario'\r\n                    (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='4'/>\r\n                </div>\r\n                <app-labels-error\r\n                    [fControlName]='\"diaNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                    [validator]='diaNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"mesNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                    [validator]='mesNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"anioNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                    [validator]='anioNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su país de nacimiento?\r\n                </label>\r\n                <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"paisNacimiento\"'\r\n                    [contenido]='paisesPA'\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"paisNacimiento\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='paisNacimientoErroresPA'\r\n                ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Tiene otra nacionalidad?\r\n                </label>\r\n                <div class=\"contCheckboxSiNo\">\r\n                  <label><input formControlName=\"otraNacionalidad\" type=\"checkbox\" class=\"cambiar tamano\"/>\r\n                    <div class=\"switch\">\r\n                      <span></span>\r\n                    </div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"formGroup\" *ngIf='formulario.get(\"otraNacionalidad\").value === true'>\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿De que país?\r\n                </label>\r\n                <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"otroPaisNacimiento\"'\r\n                    [contenido]='paisesPA'\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"otroPaisNacimiento\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='otroPaisNacimientoErroresPA'\r\n                ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__Label\">\r\n                  ¿Cuál es la fecha de expedición de su documento?\r\n                </label>\r\n                <div class=\"formGroup__flexRow\">\r\n                  <app-search-list\r\n                    style=\"min-width: 33%\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"diaExpedicion\"'\r\n                    [contenido]=\"(dias[formulario.get('mesExpedicion').value] || [])[esBisiesto(formulario.get('anioExpedicion').value)] || []\"\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'DD'\"\r\n                ></app-search-list>\r\n                <app-search-list\r\n                    style=\"min-width: 33%; margin-left: 5px;\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"mesExpedicion\"'\r\n                    [contenido]=\"meses\"\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    (change)=\"formulario.get('diaExpedicion').setValue('')\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'MM'\"\r\n                ></app-search-list>\r\n                <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                  placeholder=\"AAAA\" formControlName='anioExpedicion'\r\n                  (change)=\"formulario.get('diaExpedicion').setValue('')\"\r\n                  [form]='formulario'\r\n                  [ccRestrict]='\"1234567890\"'\r\n                  [ccMaxLength]='4'/>\r\n                </div>\r\n                <app-labels-error\r\n                  [fControlName]='\"diaExpedicion\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                  [validator]='diaNacimientoErroresCR'\r\n                ></app-labels-error>\r\n                <app-labels-error\r\n                  [fControlName]='\"mesExpedicion\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                  [validator]='mesNacimientoErroresCR'\r\n                ></app-labels-error>\r\n                <app-labels-error\r\n                  [fControlName]='\"anioExpedicion\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                  [validator]='anioNacimientoErroresCR'\r\n                ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__Label\">\r\n                  ¿Cuál es la fecha de vencimiento de su documento?\r\n                </label>\r\n                <div class=\"formGroup__flexRow\">\r\n                    <app-search-list\r\n                      style=\"min-width: 33%\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"diaVencimiento\"'\r\n                      [contenido]=\"(dias[formulario.get('mesVencimiento').value] || [])[esBisiesto(formulario.get('anioVencimiento').value)] || []\"\r\n                      [setValue]=\"setValuePA\"\r\n                      [setLabel]=\"setLabelPA\"\r\n                      [filtro]=\"filtroPA\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'DD'\"\r\n                  ></app-search-list>\r\n                  <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"mesVencimiento\"'\r\n                      [contenido]=\"meses\"\r\n                      [setValue]=\"setValuePA\"\r\n                      [setLabel]=\"setLabelPA\"\r\n                      [filtro]=\"filtroPA\"\r\n                      [InitialValue]=\"''\"\r\n                      (change)=\"formulario.get('diaVencimiento').setValue('')\"\r\n                      [placeholder]=\"'MM'\"\r\n                  ></app-search-list>\r\n                  <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                    placeholder=\"AAAA\" formControlName='anioVencimiento'\r\n                    [form]='formulario'\r\n                    (change)=\"formulario.get('diaVencimiento').setValue('')\"\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='4'/>\r\n                </div>\r\n                <app-labels-error\r\n                    [fControlName]='\"diaVencimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                    [validator]='diaNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"mesVencimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                    [validator]='mesNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"anioVencimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                    [validator]='anioNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n              </div>\r\n\r\n              <!-- select es dependiente de país , falta servicio (VALIDAR) -->\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es el lugar de expedición de su documento?\r\n                </label>\r\n                <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"lugarExpedicion\"'\r\n                    [contenido]=\"paisesPA\"\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"lugarExpedicion\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='lugarExpedicionErroresPA'\r\n                ></app-labels-error>\r\n              </div>\r\n              <!-- End -->\r\n\r\n\r\n                <!-- Panamá fields -->\r\n              <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su estado civil?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"estadoCivil\"'\r\n                    [contenido]=\"estadoCivilPA\"\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"estadoCivil\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='estadoCivilErroresPA'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su correo electrónico?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                    formControlName=\"correo\"\r\n                    [form]='formulario'\r\n                    [ccMaxLength]='40'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"correo\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='correoErroresPA'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su número de celular?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"+507\"\r\n                    formControlName=\"noCelular\"\r\n                    [form]='formulario'\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='11'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"noCelular\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='noCelularErroresPA'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su país de residencia?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"paisResidencia\"'\r\n                    [contenido]=\"paisesPA\"\r\n                    [setValue]=\"setValuePA\"\r\n                    [setLabel]=\"setLabelPA\"\r\n                    [filtro]=\"filtroPA\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"paisResidencia\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='paisResidenciaErroresPA'\r\n                  ></app-labels-error>\r\n                </div>\r\n                <!-- Campo dependiente , falta servicio (VALIDAR) -->\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su dirección de domicilio?\r\n                  </label>\r\n                  <div class=\"formGroup__flexRow\">\r\n                    <app-search-list\r\n                      style=\"min-width: 33%;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"provincia\"'\r\n                      [contenido]=\"provinciaPA\"\r\n                      [setValue]=\"setValuePA\"\r\n                      [setLabel]=\"setLabelPA\"\r\n                      [filtro]=\"filtroPA\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'Provincia'\"\r\n                    ></app-search-list>\r\n                    <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"distrito\"'\r\n                      [contenido]=\"distritoPA\"\r\n                      [setValue]=\"setValuePA\"\r\n                      [setLabel]=\"setLabelPA\"\r\n                      [filtro]=\"filtroPA\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'Distrito'\"\r\n                    ></app-search-list>\r\n                    <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"corregimiento\"'\r\n                      [contenido]=\"corregimientoPA\"\r\n                      [setValue]=\"setValuePA\"\r\n                      [setLabel]=\"setLabelPA\"\r\n                      [filtro]=\"filtroPA\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'Corregimiento'\"\r\n                    ></app-search-list>\r\n                  </div>\r\n                  <app-labels-error\r\n                    [fControlName]='\"provincia\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en provincia:\"'\r\n                    [validator]='provinciaErroresPA'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"distrito\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en distrito:\"'\r\n                    [validator]='distritoErroresPA'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"corregimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en corregimiento:\"'\r\n                    [validator]='corregimientoErroresPA'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <div class=\"radiobuttonContainer\">\r\n                    <p>Tipo de vivienda</p>\r\n                    <div class=\"radiobuttonContainer radiobuttonContainer--naked\">\r\n                      <input type=\"radio\" id=\"si\" name=\"\"\r\n                        formControlName=\"tipoVivienda\"\r\n                        [value]=\"'Casa'\"/>\r\n                      <label class=\"radiobuttonContainer__label radiobuttonContainer__label--naked\"> Casa</label>\r\n                      <div class=\"radiobtn\"></div>\r\n                    </div>\r\n                    <div class=\"radiobuttonContainer radiobuttonContainer--naked\">\r\n                      <input type=\"radio\" id=\"no\" name=\"\"\r\n                        formControlName=\"tipoVivienda\"\r\n                        [value]=\"'Apartamento'\"/>\r\n                      <label class=\"radiobuttonContainer__label radiobuttonContainer__label--naked\"> Apartamento</label>\r\n                      <div class=\"radiobtn\"></div>\r\n                    </div>\r\n                  </div>\r\n                  <app-labels-error\r\n                    [fControlName]='\"tipoVivienda\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en corregimiento:\"'\r\n                    [validator]='tipoViviendaErroresPA'\r\n                  ></app-labels-error>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su dirección\"\r\n                    formControlName=\"detalleDireccion\">\r\n\r\n                  <div class=\"checkboxContainer\">\r\n                    <input type=\"checkbox\" formControlName=\"esPrincipal\">\r\n                    <div class=\"checkmark\"></div>\r\n                    <span>\r\n                      Seleccionar como dirección principal.\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- End -->\r\n\r\n        </article>\r\n        <article class=\"formColumn\" *ngIf='pais === \"SV\"'>\r\n                <!-- El Salvador Fields -->\r\n              <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su fecha de nacimiento?\r\n                  </label>\r\n                  <div class=\"formGroup__flexRow\">\r\n                    <app-search-list\r\n                      style=\"min-width: 33%\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"diaNacimiento\"'\r\n                      [contenido]=\"(dias[formulario.get('mesNacimiento').value] || [])[esBisiesto(formulario.get('anioNacimiento').value)] || []\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'DD'\"\r\n                    ></app-search-list>\r\n                    <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"mesNacimiento\"'\r\n                      [contenido]=\"meses\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'MM'\"\r\n                    ></app-search-list>\r\n                    <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                      placeholder=\"AAAA\" formControlName='anioNacimiento'\r\n                      [form]='formulario'\r\n                      (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                      [ccRestrict]='\"1234567890\"'\r\n                      [ccMaxLength]='4'/>\r\n                  </div>\r\n                  <app-labels-error\r\n                    [fControlName]='\"diaNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                    [validator]='diaNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"mesNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                    [validator]='mesNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"anioNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                    [validator]='anioNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su país de nacimiento?\r\n                  </label>\r\n                  <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                    formControlName='paisNacimiento'>\r\n                    <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                    <option *ngFor=\"let item of paisesSV\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n                  </select>\r\n                  <app-labels-error\r\n                    [fControlName]='\"paisNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='paisNacimientoSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su nacionalidad?\r\n                  </label>\r\n                  <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                    formControlName='nacionalidad'>\r\n                    <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                    <option *ngFor=\"let item of paisesSV\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n                  </select>\r\n                  <app-labels-error\r\n                    [fControlName]='\"nacionalidad\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='nacionalidadSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=formGroup>\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es la fecha de expedición de su identificación DUI?\r\n                  </label>\r\n                  <div class=\"formGroup__flexRow\">\r\n                    <app-search-list\r\n                      style=\"min-width: 33%\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"diaExpedicionDUI\"'\r\n                      [contenido]=\"(dias[formulario.get('mesExpedicionDUI').value] || [])[esBisiesto(formulario.get('anioExpedicionDUI').value)] || []\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'DD'\"\r\n                    ></app-search-list>\r\n                    <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"mesExpedicionDUI\"'\r\n                      [contenido]=\"meses\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      (change)=\"formulario.get('diaExpedicionDUI').setValue('')\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'MM'\"\r\n                    ></app-search-list>\r\n                    <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                      placeholder=\"AAAA\" formControlName='anioExpedicionDUI'\r\n                      [form]='formulario'\r\n                      (change)=\"formulario.get('diaExpedicionDUI').setValue('')\"\r\n                      [ccRestrict]='\"1234567890\"'\r\n                      [ccMaxLength]='4'/>\r\n                  </div>\r\n                  <app-labels-error\r\n                    [fControlName]='\"diaExpedicionDUI\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                    [validator]='diaNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"mesExpedicionDUI\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                    [validator]='mesNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"anioExpedicionDUI\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                    [validator]='anioNacimientoErroresCR'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <!-- select es dependiente de país , falta servicio (VALIDAR) -->\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es el lugar de expedición de su documento único de identidad?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"lugarExpedicion\"'\r\n                    [contenido]=\"paisesSV\"\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"lugarExpedicion\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='lugarExpedicionSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su estado civil?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"estadoCivil\"'\r\n                    [contenido]=\"estadoCivilSV\"\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"estadoCivil\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='estadoCivilSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n                <!-- End -->\r\n\r\n\r\n                <!-- El Salvador fields -->\r\n              <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su correo electrónico?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\"\r\n                    formControlName='correo'/>\r\n                  <app-labels-error\r\n                    [fControlName]='\"correo\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='correoSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su número de celular?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"+507\"\r\n                    formControlName='noCelular'\r\n                    [form]='formulario'\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='8'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"noCelular\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='noCelularSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su país de residencia?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"paisResidencia\"'\r\n                    [contenido]=\"paisesSV\"\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"paisResidencia\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='paisResidenciaSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n                <!-- campo dependiente , falta servicio (Validar)-->\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su departamento de residencia?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"paisDepartamento\"'\r\n                    [contenido]=\"paisesSV\"\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"paisDepartamento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='paisDepartamentoSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n                <!-- campo dependiente , falta servicio (Validar)-->\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su municipio de residencia?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"paisMunicipio\"'\r\n                    [contenido]=\"paisesSV\"\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"paisMunicipio\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='paisMunicipioSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su dirección de residencia?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su dirección\"\r\n                    formControlName='direccionExacta'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"direccionExacta\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='direccionExactaSVErrores'\r\n                  ></app-labels-error>\r\n\r\n                  <div class=\"checkboxContainer\">\r\n                    <input type=\"checkbox\">\r\n                    <div class=\"checkmark\"></div>\r\n                    <span>\r\n                      Seleccionar como dirección principal.\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- End -->\r\n\r\n        </article>\r\n        <article class=\"formColumn\" *ngIf='pais === \"HN\"'>\r\n\r\n                <!-- Honduras fields -->\r\n              <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__Label\">\r\n                    ¿Cuál es su fecha de nacimiento?\r\n                  </label>\r\n                  <div class=\"formGroup__flexRow\">\r\n                      <app-search-list\r\n                      style=\"min-width: 33%\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"diaNacimiento\"'\r\n                      [contenido]=\"(dias[formulario.get('mesNacimiento').value] || [])[esBisiesto(formulario.get('anioNacimiento').value)] || []\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'DD'\"\r\n                    ></app-search-list>\r\n                    <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"mesNacimiento\"'\r\n                      [contenido]=\"meses\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'MM'\"\r\n                    ></app-search-list>\r\n                    <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                      placeholder=\"AAAA\" formControlName='anioNacimiento'\r\n                      [form]='formulario'\r\n                      (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                      [ccRestrict]='\"1234567890\"'\r\n                      [ccMaxLength]='4'/>\r\n                  </div>\r\n                      <app-labels-error\r\n                        [fControlName]='\"diaNacimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                        [validator]='diaNacimientoErroresCR'\r\n                      ></app-labels-error>\r\n                      <app-labels-error\r\n                        [fControlName]='\"mesNacimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                        [validator]='mesNacimientoErroresCR'\r\n                      ></app-labels-error>\r\n                      <app-labels-error\r\n                        [fControlName]='\"anioNacimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                        [validator]='anioNacimientoErroresCR'\r\n                      ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su país de nacimiento?\r\n                  </label>\r\n                  <app-search-list\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"paisNacimiento\"'\r\n                    [contenido]='paisesHN'\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"paisNacimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='paisNacimientoErroresHN'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su estado civil?\r\n                  </label>\r\n                  <app-search-list\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"estadoCivil\"'\r\n                    [contenido]='[{ value: \"S\", label: \"Soltero\"}, { value: \"C\", label: \"Casado\"}]'\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"estadoCivil\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='estadoCivilErroresHN'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\" *ngIf='formulario.get(\"estadoCivil\").value === \"C\"'>\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es el nombre completo de su cónyuge?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su número de documento\"\r\n                    formControlName='conyuge'\r\n                    [form]='formulario'\r\n                    [ccRestrict]='\"qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNMÁÉÍÚÓáéíóú \"'\r\n                    [ccMaxLength]='60'/>\r\n                  <app-labels-error\r\n                    [fControlName]='\"conyuge\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='conyugeErroresHN'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su nacionalidad principal?\r\n                  </label>\r\n                  <app-search-list\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"nacionalidad\"'\r\n                    [contenido]='paisesHN'\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\"\r\n                  ></app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"nacionalidad\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='nacionalidadErroresHN'\r\n                  ></app-labels-error>\r\n                </div>\r\n              <!-- End -->\r\n\r\n\r\n\r\n                <!-- Honduras fields -->\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su correo electrónico?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                    formControlName='correo'\r\n                    [form]='formulario'\r\n                    [ccRestrict]='\"1234567890qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM_@. \"'\r\n                    [ccMaxLength]='40'/>\r\n                  <app-labels-error\r\n                    [fControlName]='\"correo\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='correoErroresHN'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su número de celular?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"+507\"\r\n                    formControlName='noCelular'\r\n                    [form]='formulario'\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='8'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"noCelular\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='noCelularErroresHN'\r\n                  ></app-labels-error>\r\n                  <div class=\"checkboxContainer\">\r\n                    <input type=\"checkbox\" formControlName='autorizoSMS'>\r\n                    <div class=\"checkmark\"></div>\r\n                    <span>\r\n                      Autorizo el envío de menajes a mi celular.\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su número de teléfono de su domicilio/casa?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                    formControlName='noTelefono'\r\n                    [form]='formulario'\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='8'/>\r\n                  <app-labels-error\r\n                    [fControlName]='\"noTelefono\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='noTelefonoErroresHN'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <!-- grupo dependiente , falta servicio (VALIDAR) -->\r\n                <div class=\"formGroup\">\r\n                  <div class=\"formGroup__flexRow\">\r\n                    <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                      formControlName='colonia'>\r\n                      <option disabled selected hidden value=\"0\"> Colonia </option>\r\n                      <option value=\"1\">Opción 1</option>\r\n                      <option value=\"2\">Opción 2</option>\r\n                      <option value=\"3\">Opción 3</option>\r\n                    </select>\r\n                    <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                      formControlName='barrio'>\r\n                      <option disabled selected hidden value=\"0\"> Barrio </option>\r\n                      <option value=\"1\">Opción 1</option>\r\n                      <option value=\"2\">Opción 2</option>\r\n                      <option value=\"3\">Opción 3</option>\r\n                    </select>\r\n                    <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                      formControlName='municipio'>\r\n                      <option disabled selected hidden value=\"0\"> Municipio </option>\r\n                      <option value=\"1\">Opción 1</option>\r\n                      <option value=\"2\">Opción 2</option>\r\n                      <option value=\"3\">Opción 3</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <!-- campo dependiente , falta servicio (VALIDAR) -->\r\n                <div class=\"formGroup\">\r\n                  <div class=\"formGroup__flexRow\">\r\n                    <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                      formControlName='departamento'>\r\n                      <option disabled selected hidden value=\"0\"> Departamento </option>\r\n                      <option value=\"1\">Opción 1</option>\r\n                      <option value=\"2\">Opción 2</option>\r\n                      <option value=\"3\">Opción 3</option>\r\n                    </select>\r\n                    <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\" placeholder=\"BI/Casa/Avenida/Calle\"\r\n                      [form]='formulario'\r\n                      formControlName='detalle'\r\n                      [ccMaxLength]='40'\r\n                      [ccRestrict]='\"qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNMÁÉÍÚÓáéíóú \"'>\r\n                    <app-labels-error\r\n                      [fControlName]='\"detalle\"'\r\n                      [form]='formulario'\r\n                      [messageGeneralError]='\"Información Incorrecta:\"'\r\n                      [validator]='detalleErroresHN'\r\n                    ></app-labels-error>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"Punto de referencia\"\r\n                    formControlName='referenica'\r\n                    [form]='formulario'\r\n                    [ccRestrict]='\"1234567890,.qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNMÁÉÍÚÓáéíóú \"'\r\n                    [ccMaxLength]='40'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"referenica\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='referenicaErroresHN'\r\n                  ></app-labels-error>\r\n                  <div class=\"checkboxContainer\">\r\n                    <input type=\"checkbox\" formControlName='esDireccionPrincipal'>\r\n                    <div class=\"checkmark\"></div>\r\n                    <span>\r\n                      Seleccionar como dirección principal.\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- End -->\r\n\r\n        </article>\r\n        <article class=\"formColumn\" *ngIf='pais === \"CR\"'>\r\n\r\n                <!-- CostaRica fields -->\r\n                  <div class=\"formGroup\">\r\n                      <label for=\"\" class=\"formGroup__Label\">\r\n                        ¿Cuál es su fecha de nacimiento?\r\n                      </label>\r\n                      <div class=\"formGroup__flexRow\">\r\n                         <app-search-list\r\n                          style=\"min-width: 33%\"\r\n                          class=\"formGroup__input--select\"\r\n                          [formulario]=\"formulario\"\r\n                          [ControlName]='\"diaNacimiento\"'\r\n                          [contenido]=\"(dias[formulario.get('mesNacimiento').value] || [])[esBisiesto(formulario.get('anioNacimiento').value)] || []\"\r\n                          [setValue]=\"setValueCR\"\r\n                          [setLabel]=\"setLabelCR\"\r\n                          [filtro]=\"filtroCR\"\r\n                          [InitialValue]=\"''\"\r\n                          [placeholder]=\"'DD'\"\r\n                        ></app-search-list>\r\n                        <app-search-list\r\n                            style=\"min-width: 33%; margin-left: 5px;\"\r\n                            class=\"formGroup__input--select\"\r\n                            [formulario]=\"formulario\"\r\n                            [ControlName]='\"mesNacimiento\"'\r\n                            [contenido]=\"meses\"\r\n                            [setValue]=\"setValueCR\"\r\n                            [setLabel]=\"setLabelCR\"\r\n                            [filtro]=\"filtroCR\"\r\n                            (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                            [InitialValue]=\"''\"\r\n                            [placeholder]=\"'MM'\"\r\n                        ></app-search-list>\r\n                        <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                          placeholder=\"AAAA\" formControlName='anioNacimiento'\r\n                          [form]='formulario'\r\n                          (change)=\"formulario.get('diaNacimiento').setValue('')\"\r\n                          [ccRestrict]='\"1234567890\"'\r\n                          [ccMaxLength]='4'/>\r\n                      </div>\r\n                      <app-labels-error\r\n                        [fControlName]='\"diaNacimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                        [validator]='diaNacimientoErroresCR'\r\n                      ></app-labels-error>\r\n                      <app-labels-error\r\n                        [fControlName]='\"mesNacimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                        [validator]='mesNacimientoErroresCR'\r\n                      ></app-labels-error>\r\n                      <app-labels-error\r\n                        [fControlName]='\"anioNacimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                        [validator]='anioNacimientoErroresCR'\r\n                      ></app-labels-error>\r\n                    </div>\r\n\r\n                    <div class=\"formGroup\">\r\n                      <label for=\"\" class=\"formGroup__label\">\r\n                        ¿Cuál es su país de nacimiento?\r\n                      </label>\r\n                      <app-search-list\r\n                        [formulario]=\"formulario\"\r\n                        [ControlName]='\"paisNacimiento\"'\r\n                        [contenido]='paisesCR'\r\n                        [setValue]=\"setValueCR\"\r\n                        [setLabel]=\"setLabelCR\"\r\n                        [filtro]=\"filtroCR\"\r\n                        [InitialValue]=\"'41'\"\r\n                        [placeholder]=\"'Seleccione'\"\r\n                      ></app-search-list>\r\n                      <app-labels-error\r\n                        [fControlName]='\"paisNacimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='paisNacimientoErroresCR'\r\n                      ></app-labels-error>\r\n                    </div>\r\n\r\n                    <div class=\"formGroup\">\r\n                      <label for=\"\" class=\"formGroup__label\">\r\n                        ¿Cuál es su nacionalidad?\r\n                      </label>\r\n                      <app-search-list\r\n                        [formulario]=\"formulario\"\r\n                        [ControlName]='\"nacionalidad\"'\r\n                        [contenido]='paisesCR'\r\n                        [setValue]=\"setValueCR\"\r\n                        [setLabel]=\"setLabelCR\"\r\n                        [filtro]=\"filtroCR\"\r\n                        [InitialValue]=\"'41'\"\r\n                        [placeholder]=\"'Seleccione'\"\r\n                      ></app-search-list>\r\n                      <app-labels-error\r\n                        [fControlName]='\"nacionalidad\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='nacionalidadErroresCR'\r\n                      ></app-labels-error>\r\n                    </div>\r\n\r\n                    <div class=\"formGroup\">\r\n                      <label for=\"\" class=\"formGroup__label\">\r\n                        ¿Tiene otra nacionalidad?\r\n                      </label>\r\n                      <div class=\"contCheckboxSiNo\">\r\n                        <label><input type=\"checkbox\" class=\"cambiar tamano\" formControlName='otraNacionalidad'/>\r\n                          <div class=\"switch\">\r\n                            <span></span>\r\n                          </div>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"formGroup\" *ngIf=\"formulario.get('otraNacionalidad').value === true\">\r\n                      <label for=\"\" class=\"formGroup__label\">\r\n                        Por favor especifique\r\n                      </label>\r\n                      <app-search-list\r\n                        [formulario]=\"formulario\"\r\n                        [ControlName]='\"especifiqueNacionalidad\"'\r\n                        [contenido]='paisesCR'\r\n                        [setLabel]=\"setLabelCR\"\r\n                        [setValue]=\"setValueCR\"\r\n                        [filtro]=\"filtroCR\"\r\n                        [InitialValue]=\"''\"\r\n                        [placeholder]=\"'Seleccione'\"\r\n                      ></app-search-list>\r\n                      <app-labels-error\r\n                        [fControlName]='\"especifiqueNacionalidad\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='especifiqueNacionalidadErroresCR'\r\n                      ></app-labels-error>\r\n                    </div>\r\n\r\n                    <div class=\"formGroup\">\r\n                      <label for=\"\" class=\"formGroup__label\">\r\n                        ¿Cuál es la fecha de vencimiento de su documento?\r\n                      </label>\r\n                      <div class=\"formGroup__flexRow\">\r\n                        <app-search-list\r\n                          style=\"min-width: 33%\"\r\n                          class=\"formGroup__input--select\"\r\n                          [formulario]=\"formulario\"\r\n                          [ControlName]='\"diaVencimiento\"'\r\n                          [contenido]=\"(dias[formulario.get('mesVencimiento').value] || [])[esBisiesto(formulario.get('anioVencimiento').value)] || []\"\r\n                          [setValue]=\"setValueCR\"\r\n                          [setLabel]=\"setLabelCR\"\r\n                          [filtro]=\"filtroCR\"\r\n                          [InitialValue]=\"''\"\r\n                          [placeholder]=\"'DD'\"\r\n                        ></app-search-list>\r\n                        <app-search-list\r\n                            style=\"min-width: 33%; margin-left: 5px;\"\r\n                            class=\"formGroup__input--select\"\r\n                            [formulario]=\"formulario\"\r\n                            [ControlName]='\"mesVencimiento\"'\r\n                            [contenido]=\"meses\"\r\n                            [setValue]=\"setValueCR\"\r\n                            [setLabel]=\"setLabelCR\"\r\n                            [filtro]=\"filtroCR\"\r\n                            (change)=\"formulario.get('diaVencimiento').setValue('')\"\r\n                            [InitialValue]=\"''\"\r\n                            [placeholder]=\"'MM'\"\r\n                        ></app-search-list>\r\n                        <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                          placeholder=\"AAAA\" formControlName='anioVencimiento'\r\n                          [form]='formulario'\r\n                          (change)=\"formulario.get('diaVencimiento').setValue('')\"\r\n                          [ccRestrict]='\"1234567890\"'\r\n                          [ccMaxLength]='4'/>\r\n                      </div>\r\n                      <app-labels-error\r\n                        [fControlName]='\"diaVencimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                        [validator]='diaVencimientoErroresCR'\r\n                      ></app-labels-error>\r\n                      <app-labels-error\r\n                        [fControlName]='\"mesVencimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                        [validator]='mesVencimientoErroresCR'\r\n                      ></app-labels-error>\r\n                      <app-labels-error\r\n                        [fControlName]='\"anioVencimiento\"'\r\n                        [form]='formulario'\r\n                        [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                        [validator]='anioVencimientoErroresCR'\r\n                      ></app-labels-error>\r\n                    </div>\r\n\r\n\r\n\r\n                <!-- CostaRica fields -->\r\n              <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su estado civil?\r\n                  </label>\r\n                  <app-search-list\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario\"\r\n                    [ControlName]='\"estadoCivil\"'\r\n                    [contenido]=\"estadoCivilCR\"\r\n                    [setValue]=\"setValueCR\"\r\n                    [setLabel]=\"setLabelCR\"\r\n                    [filtro]=\"filtroCR\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Seleccione'\">\r\n                  </app-search-list>\r\n                  <app-labels-error\r\n                    [fControlName]='\"estadoCivil\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='estadoCivilErroresCR'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su correo electrónico?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" formControlName=\"correo\">\r\n                  <app-labels-error\r\n                    [fControlName]='\"correo\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='correoErroresCR'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su número de celular?\r\n                  </label>\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"+507\"\r\n                    formControlName=\"noCelular\"\r\n                    [form]=\"formulario\"\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='8'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"noCelular\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='noCelularErroresCR'\r\n                  ></app-labels-error>\r\n                </div>\r\n                <!-- grupo es dependiente, falta servicio (VALIDAR) -->\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es su dirección de domicilio?\r\n                  </label>\r\n                  <div class=\"formGroup__flexRow\">\r\n                    <!-- <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                      formControlName=\"provincia\">\r\n                      <option disabled selected hidden value=\"\"> Provincia </option>\r\n                      <option value=\"1\">Opción 1</option>\r\n                      <option value=\"2\">Opción 2</option>\r\n                      <option value=\"3\">Opción 3</option>\r\n                    </select> -->\r\n                    <app-search-list\r\n                      style=\"min-width: 33%;\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"provincia\"'\r\n                      [contenido]='provinciasCR'\r\n                      (change)=\"formulario.get('distrito').setValue('')\"\r\n                      (change)=\"formulario.get('corregimiento').setValue('')\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'Provincia'\"\r\n                    ></app-search-list>\r\n                    <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px; margin-right: 5px;\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"corregimiento\"'\r\n                      [contenido]='cantonesCR.filter(filterCorregimiento(formulario.get(\"provincia\").value))'\r\n                      (change)=\"formulario.get('distrito').setValue('')\"\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'Canton'\"\r\n                    ></app-search-list>\r\n                    <app-search-list\r\n                      style=\"min-width: 33%;\"\r\n                      [formulario]=\"formulario\"\r\n                      [ControlName]='\"distrito\"'\r\n                      [contenido]='cantonProCore.filter(filterDistrito(formulario.get(\"provincia\").value, formulario.get(\"corregimiento\").value))'\r\n                      [setLabel]=\"setLabelCR\"\r\n                      [setValue]=\"setValueCR\"\r\n                      [filtro]=\"filtroCR\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'Distrito'\"\r\n                    ></app-search-list>\r\n                  </div>\r\n                  <app-labels-error\r\n                    [fControlName]='\"provincia\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo provincia:\"'\r\n                    [validator]='provinciaErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"corregimiento\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo canton:\"'\r\n                    [validator]='corregimientoErroresCR'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"distrito\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo distrito:\"'\r\n                    [validator]='distritoErroresCR'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su dirección\"\r\n                    formControlName=\"direccionExacta\" [form]=\"formulario\" [ccMaxLength]='120'>\r\n                  <app-labels-error\r\n                    [fControlName]='\"direccionExacta\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta:\"'\r\n                    [validator]='direccionExactaErroresCR'\r\n                  ></app-labels-error>\r\n                  <div class=\"checkboxContainer\">\r\n                    <input type=\"checkbox\" formControlName=\"esPrincipal\">\r\n                    <div class=\"checkmark\"></div>\r\n                    <span>\r\n                      Seleccionar como dirección principal.\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <!-- End -->\r\n\r\n        </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Button Container -->\r\n    <!-- Comentamos el boton que llama a WF y colocamos uno solo para redirigir-->\r\n    <!-- <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onCall(getDataToPayload())'></app-button-continue> -->\r\n    <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onRedirect(\"VIN003\")' ></app-button-continue>\r\n    <!-- End -->\r\n  </div>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin002/vin002.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin002/vin002.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid.ng-touched {\n  border-color: #ed1c27 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vdmluY3VsYWNpb24vdmluMDAyL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFwcFxcbW9kdWxlc1xcY2FtXFx2aW5jdWxhY2lvblxcdmluMDAyXFx2aW4wMDIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL3ZpbmN1bGFjaW9uL3ZpbjAwMi92aW4wMDIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZC5uZy10b3VjaGVkICB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin002/vin002.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin002/vin002.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin002Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin002Component", function() { return Vin002Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/common/components/encaptulation */ "./src/app/modules/common/components/encaptulation.ts");
/* harmony import */ var src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/common/CONST */ "./src/app/modules/common/CONST.ts");
/* harmony import */ var src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");





let Vin002Component = class Vin002Component extends src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    ngOnInit() {
        this.pais = 'HN';
        this.setFecha();
        this.country = [];
        this.countrieRules = {
            CR: () => this.setRulesCR(),
            PA: () => this.setRulesPA(),
            SV: () => this.setRulesSV(),
            HN: () => this.setRulesHN()
        };
        if (this.countrieRules[this.pais]) {
            this.countrieRules[this.pais]();
        }
    }
    ngOnDestroy() {
        // throw new Error('Method not implemented.');
    }
    getDataToPayload(data) {
        this.disableButton = true;
        return () => this.formulario.getRawValue();
    }
    getDataToBackButton(data) {
        // throw new Error('Method not implemented.');
        return () => ({});
    }
    setRulesCR() {
        this.getPaises();
        this.getEstadoCivilCR();
        this.getCantonProvinciaCorreguimiento();
        this.getProvinciasCR();
        this.getCantonCR();
        this.setRules({
            diaNacimiento: ['', [
                    this.rules.validationForSelect(() => (this.dias[this.formulario.get('mesNacimiento').value] || [])[this.esBisiesto(this.formulario.get('anioNacimiento').value)] || [], (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return false;
                    })
                ]],
            mesNacimiento: ['', [
                    this.rules.validationForSelect(() => this.meses, (control) => false)
                ]],
            anioNacimiento: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            paisNacimiento: ['', [
                    this.rules.validationForSelect(() => this.paisesCR, (control) => false)
                ]],
            nacionalidad: ['', [
                    this.rules.validationForSelect(() => this.paisesCR, (control) => false)
                ]],
            otraNacionalidad: [false, [
                    this.rules.resetMyCallbackValidation([
                        'especifiqueNacionalidad'
                    ])
                ]],
            especifiqueNacionalidad: ['', [
                    this.rules.validationForSelect(() => this.paisesCR, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return control.parent.get('otraNacionalidad').value !== true;
                    })
                ]],
            diaVencimiento: ['', [
                    this.rules.validationForSelect(() => (this.dias[this.formulario.get('mesNacimiento').value] || [])[this.esBisiesto(this.formulario.get('anioNacimiento').value)] || [], (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return false;
                    })
                ]],
            mesVencimiento: ['', [
                    this.rules.validationForSelect(() => this.meses, (control) => false)
                ]],
            anioVencimiento: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            estadoCivil: ['', [
                    this.rules.validationForSelect(() => this.estadoCivilCR, (control) => false)
                ]],
            correo: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForEmail()
                ]],
            noCelular: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(8)
                ]],
            provincia: ['', [
                    this.rules.validationForSelect(() => this.provinciasCR, (control) => false)
                ]],
            distrito: ['', [
                    this.rules.validationForSelect(() => this.cantonProCore, (control) => false)
                ]],
            corregimiento: ['', [
                    this.rules.validationForSelect(() => this.cantonesCR, (control) => false)
                ]],
            direccionExacta: ['', [
                    this.rules.validationForRequired()
                ]],
            esPrincipal: ['', []]
        });
        this.diaNacimientoErroresCR = this.getDiaNacimientoErroresCR();
        this.mesNacimientoErroresCR = this.getMesNacimientoErroresCR();
        this.anioNacimientoErroresCR = this.getAnioNacimientoErroresCR();
        this.paisNacimientoErroresCR = this.getPaisNacimientoErroresCR();
        this.nacionalidadErroresCR = this.getNacionalidadErroresCR();
        this.especifiqueNacionalidadErroresCR = this.getEspecifiqueNacionalidadErroresCR();
        this.diaVencimientoErroresCR = this.getDiaVencimientoErroresCR();
        this.mesVencimientoErroresCR = this.getMesVencimientoErroresCR();
        this.anioVencimientoErroresCR = this.getAnioVencimientoErroresCR();
        this.estadoCivilErroresCR = this.getEstadoCivilErroresCR();
        this.correoErroresCR = this.getCorreoErroresCR();
        this.noCelularErroresCR = this.getNoCelularErroresCR();
        this.provinciaErroresCR = this.getProvinciaErroresCR();
        this.distritoErroresCR = this.getDistritoErroresCR();
        this.corregimientoErroresCR = this.getCorregimientoErroresCR();
        this.direccionExactaErroresCR = this.getDireccionExactaErroresCR();
    }
    setRulesPA() {
        this.getPaisesPA();
        this.getEstadoCivilPA();
        this.getProvinciaPA();
        this.getDistritoPA();
        this.getCorreguimientoPA();
        this.setRules({
            diaNacimiento: ['', [
                    this.rules.validationForSelect(() => (this.dias[this.formulario.get('mesNacimiento').value] || [])[this.esBisiesto(this.formulario.get('anioNacimiento').value)] || [], (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return false;
                    })
                ]],
            mesNacimiento: ['', [
                    this.rules.validationForSelect(() => this.meses, (control) => false)
                ]],
            anioNacimiento: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            paisNacimiento: ['', [
                    this.rules.validationForSelect(() => this.paisesPA, (control) => false)
                ]],
            otraNacionalidad: ['', [
                    this.rules.resetMyCallbackValidation([
                        'otroPaisNacimiento'
                    ])
                ]],
            otroPaisNacimiento: ['', [
                    this.rules.validationForSelect(() => this.paisesPA, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('otraNacionalidad').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            diaExpedicion: ['', [
                    this.rules.validationForSelect(() => (this.dias[this.formulario.get('mesExpedicion').value] || [])[this.esBisiesto(this.formulario.get('anioExpedicion').value)] || [], (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return false;
                    })
                ]],
            mesExpedicion: ['', [
                    this.rules.validationForSelect(() => this.meses, (control) => false)
                ]],
            anioExpedicion: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            diaVencimiento: ['', [
                    this.rules.validationForRequired()
                ]],
            mesVencimiento: ['', [
                    this.rules.validationForRequired()
                ]],
            anioVencimiento: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            lugarExpedicion: ['', [
                    this.rules.validationForSelect(() => this.paisesPA, (control) => false)
                ]],
            estadoCivil: ['', [
                    this.rules.validationForSelect(() => this.estadoCivilPA, (control) => false)
                ]],
            noCelular: ['', [
                    this.rules.validationForMinLength(8)
                ]],
            correo: ['', [
                    this.rules.validationForEmail()
                ]],
            paisResidencia: ['', [
                    this.rules.validationForSelect(() => this.paisesPA, (control) => false)
                ]],
            provincia: ['', [
                    this.rules.validationForSelect(() => this.provinciaPA, (control) => false)
                ]],
            distrito: ['', [
                    this.rules.validationForSelect(() => this.distritoPA, (control) => false)
                ]],
            corregimiento: ['', [
                    this.rules.validationForSelect(() => this.corregimientoPA, (control) => false)
                ]],
            tipoVivienda: [null, [
                    this.rules.validationForRequired()
                ]],
            detalleDireccion: ['', []],
            esPrincipal: [false, []]
        });
        this.diaNacimientoErroresCR = this.getDiaNacimientoErroresCR();
        this.mesNacimientoErroresCR = this.getMesNacimientoErroresCR();
        this.anioNacimientoErroresCR = this.getAnioNacimientoErroresCR();
        this.paisNacimientoErroresPA = this.getPaisNacimientoErroresPA();
        this.otroPaisNacimientoErroresPA = this.getOtroPaisNacimientoErroresPA();
        this.lugarExpedicionErroresPA = this.getLugarExpedicionErroresPA();
        this.estadoCivilErroresPA = this.getEstadoCivilErroresPA();
        this.noCelularErroresPA = this.getNoCelularErroresPA();
        this.correoErroresPA = this.getCorreoErroresPA();
        this.paisResidenciaErroresPA = this.getPaisResidenciaErroresPA();
        this.provinciaErroresPA = this.getProvinciaErroresPA();
        this.distritoErroresPA = this.getDistritoErroresPA();
        this.corregimientoErroresPA = this.getCorregimientoErroresPA();
        this.tipoViviendaErroresPA = this.getTipoViviendaErroresPA();
    }
    show() {
        console.log(this.formulario.getRawValue());
    }
    setRulesSV() {
        this.getEstadoCivilSV();
        this.getPaisesSV();
        this.setRules({
            diaNacimiento: ['', [
                    this.rules.validationForSelect(() => (this.dias[this.formulario.get('mesNacimiento').value] || [])[this.esBisiesto(this.formulario.get('anioNacimiento').value)] || [], (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return false;
                    })
                ]],
            mesNacimiento: ['', [
                    this.rules.validationForSelect(() => this.meses, (control) => false)
                ]],
            anioNacimiento: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            paisNacimiento: ['EL SALVADOR', [
                    this.rules.validationForSelect(() => this.paisesSV, (control) => false)
                ]],
            nacionalidad: ['EL SALVADOR', [
                    this.rules.validationForSelect(() => this.paisesSV, (control) => false)
                ]],
            diaExpedicionDUI: ['', [
                    this.rules.validationForSelect(() => (this.dias[this.formulario.get('mesExpedicionDUI').value] || [])[this.esBisiesto(this.formulario.get('anioExpedicionDUI')
                        .value)] || [], (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return false;
                    })
                ]],
            mesExpedicionDUI: ['', [
                    this.rules.validationForSelect(() => this.meses, (control) => false)
                ]],
            anioExpedicionDUI: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            lugarExpedicion: ['', [
                    this.rules.validationForSelect(() => this.paisesSV, (control) => false)
                ]],
            estadoCivil: ['', [
                    this.rules.validationForSelect(() => this.estadoCivilSV, (control) => false)
                ]],
            correo: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForEmail()
                ]],
            noCelular: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(8)
                ]],
            paisResidencia: ['', [
                    this.rules.validationForSelect(() => this.paisesSV, (control) => false)
                ]],
            paisDepartamento: ['', [
                    this.rules.validationForSelect(() => this.paisesSV, (control) => false)
                ]],
            paisMunicipio: ['', [
                    this.rules.validationForSelect(() => this.paisesSV, (control) => false)
                ]],
            direccionExacta: ['', [
                    this.rules.validationForRequired()
                ]],
            esPrincipal: ['', []]
        });
        this.formulario.get('paisNacimiento').disable();
        this.formulario.get('nacionalidad').disable();
        this.diaNacimientoErroresCR = this.getDiaNacimientoErroresCR();
        this.mesNacimientoErroresCR = this.getMesNacimientoErroresCR();
        this.anioNacimientoErroresCR = this.getAnioNacimientoErroresCR();
        this.paisNacimientoSVErrores = this.getPaisNacimientoErrores();
        this.nacionalidadSVErrores = this.getNacionalidadErrores();
        this.lugarExpedicionSVErrores = this.getLugarExpedicionErrores();
        this.estadoCivilSVErrores = this.getEstadoCivilErrores();
        this.correoSVErrores = this.getCorreoErrores();
        this.noCelularSVErrores = this.getNoCelularErrores();
        this.paisResidenciaSVErrores = this.getPaisResidenciaErrores();
        this.paisDepartamentoSVErrores = this.getPaisDepartamentoErrores();
        this.paisMunicipioSVErrores = this.getPaisMunicipioErrores();
        this.direccionExactaSVErrores = this.getDireccionExactaErrores();
    }
    setRulesHN() {
        this.getPaisesHN();
        this.setRules({
            diaNacimiento: ['', [
                    this.rules.validationForRequired()
                ]],
            mesNacimiento: ['', [
                    this.rules.validationForRequired()
                ]],
            anioNacimiento: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(4)
                ]],
            paisNacimiento: ['', [
                    this.rules.validationForSelect(() => this.paisesHN, (control) => false)
                ]],
            estadoCivil: ['', [
                    this.rules.validationForSelect(() => [{ value: 'S' }, { value: 'C' }], (control) => false),
                    this.rules.resetMyCallbackValidation([
                        'conyuge'
                    ])
                ]],
            conyuge: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('estadoCivil').value === 'C') {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    this.rules.validationForMinLength(6)
                ]],
            nacionalidad: ['', [
                    this.rules.validationForSelect(() => this.paisesHN, (control) => false)
                ]],
            correo: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForEmail(),
                    this.rules.validationForMinLength(6)
                ]],
            noCelular: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(8)
                ]],
            autorizoSMS: [false, []],
            noTelefono: ['', [
                    this.rules.validationForMinLength(8)
                ]],
            colonia: ['', [
                // this.rules.validationForSelect(() => this.provinciasCR, (control: FormGroup) => false)
                ]],
            barrio: ['', [
                // this.rules.validationForSelect(() => this.cantonProCore, (control: FormGroup) => false)
                ]],
            municipio: ['', [
                // this.rules.validationForSelect(() => this.cantonesCR, (control: FormGroup) => false)
                ]],
            departamento: ['', [
                // this.rules.validationForRequired()
                ]],
            detalle: ['', [
                    this.rules.validationForRequired()
                ]],
            referenica: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForMinLength(3)
                ]],
            esDireccionPrincipal: [false, []]
        });
        this.anioNacimientoErroresCR = this.getAnioNacimientoErroresCR();
        this.mesNacimientoErroresCR = this.getMesNacimientoErroresCR();
        this.diaNacimientoErroresCR = this.getDiaNacimientoErroresCR();
        this.paisNacimientoErroresHN = this.getPaisNacimientoErroresHN();
        this.estadoCivilErroresHN = this.getEstadoCivilErroresHN();
        this.conyugeErroresHN = this.getConyugeErroresHN();
        this.nacionalidadErroresHN = this.getNacionalidadErroresHN();
        this.correoErroresHN = this.getCorreoErroresHN();
        this.noCelularErroresHN = this.getNoCelularErroresHN();
        this.noTelefonoErroresHN = this.getNoTelefonoErroresHN();
        this.coloniaErroresHN = this.getColoniaErroresHN();
        this.barrioErroresHN = this.getBarrioErroresHN();
        this.municipioErroresHN = this.getMunicipioErroresHN();
        this.departamentoErroresHN = this.getDepartamentoErroresHN();
        this.detalleErroresHN = this.getDetalleErroresHN();
        this.referenicaErroresHN = this.getTReferenicaErroresHN();
    }
    setFecha() {
        this.meses = [
            { label: 'Enero', value: '01' },
            { label: 'Febrero', value: '02' },
            { label: 'Marzo', value: '03' },
            { label: 'Abril', value: '04' },
            { label: 'Mayo', value: '05' },
            { label: 'Junio', value: '06' },
            { label: 'Julio', value: '07' },
            { label: 'Agosto', value: '08' },
            { label: 'Septiembre', value: '09' },
            { label: 'Octubre', value: '10' },
            { label: 'Noviembre', value: '11' },
            { label: 'Diciembre', value: '12' }
        ];
        const dias31 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' },
            { value: '29', label: '29' },
            { value: '30', label: '30' },
            { value: '31', label: '31' },
        ];
        const dias30 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' },
            { value: '29', label: '29' },
            { value: '30', label: '30' }
        ];
        const dias29 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' },
            { value: '29', label: '29' }
        ];
        const dias28 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' }
        ];
        this.dias = {
            '01': { true: dias31, false: dias31 },
            '02': { true: dias29, false: dias28 },
            '03': { true: dias31, false: dias31 },
            '04': { true: dias30, false: dias30 },
            '05': { true: dias31, false: dias31 },
            '06': { true: dias30, false: dias30 },
            '07': { true: dias31, false: dias31 },
            '08': { true: dias30, false: dias30 },
            '09': { true: dias30, false: dias30 },
            // tslint:disable-next-line: object-literal-key-quotes
            '10': { true: dias31, false: dias31 }, '11': { true: dias30, false: dias30 }, '12': { true: dias31, false: dias31 }
        };
    }
    esBisiesto(year) {
        if (((parseInt(year, 10) % 4 === 0) && (parseInt(year, 10) % 100 !== 0)) || (parseInt(year, 10) % 400 === 0)) {
            return 'true';
        }
        return 'false';
    }
    // COSTARICA
    setValueCR(item) {
        return item.value;
    }
    setLabelCR(item) {
        return item.label;
    }
    filtroCR(item) {
        return item.label;
    }
    getPaises() {
        this.paisesCR = [];
        this.catalogo.data('PAIS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.paisesCR = response ? response : [];
        });
    }
    getEstadoCivilCR() {
        this.estadoCivilCR = [];
        this.catalogo.data('ESTADO_CIVIL', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.estadoCivilCR = response ? response : [];
        });
    }
    getProvinciasCR() {
        this.provinciasCR = [];
        this.catalogo.data('PROVINCIAS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.provinciasCR = response ? response : [];
        });
    }
    getCantonCR() {
        this.cantonesCR = [];
        this.catalogo.data('CANTON', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.cantonesCR = response ? response : [];
        });
    }
    getCantonProvinciaCorreguimiento() {
        this.cantonProCore = [];
        this.catalogo.data('CANTON_PROV_PAIS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.cantonProCore = response ? response : [];
        });
    }
    filterCorregimiento(valor) {
        return (item) => {
            if (valor === item.code_provincia) {
                return true;
            }
            return false;
        };
    }
    filterDistrito(valor, valor2) {
        return (item) => {
            if (valor === item.code_provincia && valor2 === item.code_canton) {
                return true;
            }
            return false;
        };
    }
    getDiaNacimientoErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeSelect, label: 'Selecciona un dia de la lista preaprobada.' }
        ];
    }
    getMesNacimientoErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeSelect, label: 'Selecciona un mes de la lista preaprobada.' }
        ];
    }
    getAnioNacimientoErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 4 digitos.' }
        ];
    }
    getPaisNacimientoErroresCR() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getNacionalidadErroresCR() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getEspecifiqueNacionalidadErroresCR() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDiaVencimientoErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getMesVencimientoErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getAnioVencimientoErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 4 digitos.' }
        ];
    }
    getEstadoCivilErroresCR() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCorreoErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeEmail, label: 'Dirección de correo electronico invalida.' }
        ];
    }
    getNoCelularErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 8 digitos.' }
        ];
    }
    getProvinciaErroresCR() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDistritoErroresCR() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCorregimientoErroresCR() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDireccionExactaErroresCR() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    // HONDURAS
    getPaisesHN() {
        this.paisesHN = [];
        this.catalogo.data('PAISES', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.paisesHN = response ? response : [];
        });
    }
    getPaisNacimientoErroresHN() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobda.' }
        ];
    }
    getEstadoCivilErroresHN() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobda.' }
        ];
    }
    getConyugeErroresHN() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 6 caracteres.' }
        ];
    }
    getNacionalidadErroresHN() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobda.' }
        ];
    }
    getCorreoErroresHN() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 6 caracteres.' },
            { type: this.rules.errorTypeEmail, label: 'Formato de correo electronico incorrecto.' }
        ];
    }
    getNoCelularErroresHN() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 8 caracteres.' }
        ];
    }
    getNoTelefonoErroresHN() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 8 caracteres.' }
        ];
    }
    getColoniaErroresHN() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobda.' }
        ];
    }
    getBarrioErroresHN() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobda.' }
        ];
    }
    getMunicipioErroresHN() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobda.' }
        ];
    }
    getDepartamentoErroresHN() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobda.' }
        ];
    }
    getDetalleErroresHN() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTReferenicaErroresHN() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 3 caracteres.' }
        ];
    }
    // EL SALVADOR
    getEstadoCivilSV() {
        this.estadoCivilSV = [];
        this.catalogo.data('ESTADO_CIVIL', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.estadoCivilSV = response ? response : [];
        });
    }
    getPaisesSV() {
        this.paisesSV = [];
        this.catalogo.data('PAIS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.paisesSV = response ? response : [];
        });
    }
    getPaisNacimientoErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getNacionalidadErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getLugarExpedicionErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getEstadoCivilErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCorreoErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeEmail, label: 'Dirección de correo elecronico invalida.' }
        ];
    }
    getNoCelularErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 8 caracteres.' }
        ];
    }
    getPaisResidenciaErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getPaisDepartamentoErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getPaisMunicipioErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDireccionExactaErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
        ];
    }
    // PANAMA
    setValuePA(item) {
        return item.value;
    }
    setLabelPA(item) {
        return item.label;
    }
    filtroPA(item) {
        return item.label;
    }
    getPaisesPA() {
        this.paisesPA = [];
        this.catalogo.data('PAISES', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.paisesPA = response ? response : [];
        });
    }
    getEstadoCivilPA() {
        this.estadoCivilPA = [];
        this.catalogo.data('ESTADO_CIVIL', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.estadoCivilPA = response ? response : [];
        });
    }
    getProvinciaPA() {
        this.provinciaPA = [];
        this.catalogo.data('PROVINCIAS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.provinciaPA = response ? response : [];
        });
    }
    getCorreguimientoPA() {
        this.corregimientoPA = [];
        this.catalogo.data('CORREGUIMIENTO', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.corregimientoPA = response ? response : [];
        });
    }
    getDistritoPA() {
        this.distritoPA = [];
        this.catalogo.data('DISTRITOS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.distritoPA = response ? response : [];
        });
    }
    getPaisNacimientoErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getOtroPaisNacimientoErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getLugarExpedicionErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getEstadoCivilErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getNoCelularErroresPA() {
        return [
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 8 caracteres.' },
        ];
    }
    getCorreoErroresPA() {
        return [
            { type: this.rules.errorTypePattern, label: 'Correo electronico invalido.' },
        ];
    }
    getPaisResidenciaErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getProvinciaErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDistritoErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCorregimientoErroresPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getTipoViviendaErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
        ];
    }
};
Vin002Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin002',
        template: __webpack_require__(/*! ./vin002.component.html */ "./src/app/modules/cam/vinculacion/vin002/vin002.component.html"),
        encapsulation: src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].ShadowDom,
        styles: [__webpack_require__(/*! ./vin002.component.scss */ "./src/app/modules/cam/vinculacion/vin002/vin002.component.scss"), __webpack_require__(/*! ../../../../../assets/cam/scss/components/vinculacion/_vin002.scss */ "./src/assets/cam/scss/components/vinculacion/_vin002.scss")]
    })
], Vin002Component);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin003/vin003.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin003/vin003.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n\r\n<section class=\"container\">\r\n\r\n  <!-- Back button -->\r\n  <app-button-back class=\"backButton\"></app-button-back>\r\n  <!-- End -->\r\n\r\n  <!-- Form container -->\r\n  <div class=\"formContainer\" [formGroup]=\"formulario\">\r\n    <!-- Initial title -->\r\n    <div class=\"initialTitle\">\r\n      <h3>Información laboral</h3>\r\n      <app-form-wizard class=\"initialTitle__stepsCounter\" [steps]=\"4\" [currentStep]=\"2\"></app-form-wizard>\r\n      <h5><b>{{ payload?.nombre || 'XXXXXXXXXXX' }}</b></h5>\r\n    </div>\r\n    <!-- End -->\r\n    <select (change)=\"change($event.target.value)\" style=\"display: none;\">\r\n      <option disabled selected hidden value=\"\"> PAIS </option>\r\n      <option value=\"CR\">- COSTA RICA</option>\r\n      <option value=\"HN\">HONDURAS</option>\r\n      <option value=\"PA\">- PANAMA</option>\r\n      <option value=\"SV\">- EL SALVADOR</option>\r\n    </select>\r\n\r\n    <!-- Form column container Panamá -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"PA\"'>\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su actividad comercial?\r\n          </label>\r\n          <select class=\"formGroup__input formGroup__input--select\"\r\n            formControlName=\"actividadComercial\" (change)='formulario.get(\"actividadEconomica\").setValue(\"\")'>\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of catalogoPA.ACTIVIDADES_COMERCIALES\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadComercial\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.actividadComercial'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <!-- Opción (Empleado/Religioso/Servidor Público) -->\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su actividad económica con Código CIIU?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"actividadEconomica\"'\r\n            [contenido]='catalogoPA.ACTIVIDADES_CIIU'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadEconomica\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.actividadEconomica'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su profesión u ocupación?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"actividadPrincipal\"'\r\n            [contenido]='catalogoPA.ACTIVIDADES_PRINCIPALES.filter(filterByActividadComercial())'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadPrincipal\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.actividadPrincipal'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre de la empresa?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            formControlName=\"nombreEmpresa\"\r\n            [ccRestrict]='\"1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNMñÑ áéíóúÁÉÍÓÚ\"'\r\n            [form]='formulario'\r\n            [ccMaxLength]='30'\r\n          />\r\n          <app-labels-error\r\n            [fControlName]='\"nombreEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.nombreEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su cargo?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"cargoEmpresa\"'\r\n            [contenido]='catalogoPA.CARGOS'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"cargoEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.cargoEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <!-- Opción (Independiente/Socio Rentista/PNCN) -->\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === INDEPENDIENTE ||\r\n                                      formulario.get('actividadComercial').value === SOCIO ||\r\n                                      formulario.get('actividadComercial').value === RENTISTA_DE_CAPITAL ||\r\n                                      formulario.get('actividadComercial').value === PERSONA_NATURAL_CON_NEGOCIO\">\r\n          <label class=\"formGroup__label\">\r\n            ¿Cuál es su actividad económica con Código CIIU?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"actividadEconomica\"'\r\n            [contenido]='catalogoPA.ACTIVIDADES_CIIU'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadEconomica\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.actividadEconomica'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === INDEPENDIENTE ||\r\n                                      formulario.get('actividadComercial').value === SOCIO ||\r\n                                      formulario.get('actividadComercial').value === RENTISTA_DE_CAPITAL ||\r\n                                      formulario.get('actividadComercial').value === PERSONA_NATURAL_CON_NEGOCIO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su ocupación principal?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"actividadPrincipal\"'\r\n            [contenido]='catalogoPA.ACTIVIDADES_PRINCIPALES.filter(filterByActividadComercial())'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadPrincipal\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.actividadPrincipal'\r\n          ></app-labels-error>\r\n\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === INDEPENDIENTE ||\r\n                                      formulario.get('actividadComercial').value === SOCIO ||\r\n                                      formulario.get('actividadComercial').value === RENTISTA_DE_CAPITAL ||\r\n                                      formulario.get('actividadComercial').value === PERSONA_NATURAL_CON_NEGOCIO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre de la empresa?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            formControlName=\"nombreEmpresa\"\r\n            [ccRestrict]='\"1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNMñÑ áéíóúÁÉÍÓÚ\"'\r\n            [form]='formulario'\r\n            [ccMaxLength]='30'\r\n          />\r\n          <app-labels-error\r\n            [fControlName]='\"nombreEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.nombreEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <!-- Pensionado/Jubilado -->\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === PENCIONADO ||\r\n                                      formulario.get('actividadComercial').value === JUBILADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre de la entidad que lo pensiono?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            formControlName='entidadPensiono'\r\n            [ccRestrict]='\"1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNMñÑ áéíóúÁÉÍÓÚ\"'\r\n            [form]='formulario'\r\n            [ccMaxLength]='50'/>\r\n            <app-labels-error\r\n              [fControlName]='\"entidadPensiono\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresPA.entidadPensiono'\r\n            ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === PENCIONADO ||\r\n                                      formulario.get('actividadComercial').value === JUBILADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Desde que fecha se encuentra pensionado?\r\n          </label>\r\n          <div class=\"formGroup__flexRow\">\r\n              <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                formControlName='diaPensionado'>\r\n                <option disabled selected hidden value=\"\"> DD </option>\r\n                <option *ngFor=\"let item of (dias[formulario.get('mesPensionado').value] || [])[esBisiesto(formulario.get('anioPensionado').value)] || []\" [value]=\"item.value\" [label]=\"item.value\"></option>\r\n              </select>\r\n              <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                formControlName='mesPensionado'>\r\n                <option disabled selected hidden value=\"\"> MM</option>\r\n                <option *ngFor=\"let item of meses\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n              </select>\r\n              <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                placeholder=\"AAAA\" formControlName='anioPensionado'\r\n                [form]='formulario'\r\n                [ccRestrict]='\"1234567890\"'\r\n                [ccMaxLength]='4'/>\r\n          </div>\r\n          <app-labels-error\r\n            [fControlName]='\"diaPensionado\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n            [validator]='erroresPA.diaPensionado'\r\n          ></app-labels-error>\r\n          <app-labels-error\r\n            [fControlName]='\"mesPensionado\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n            [validator]='erroresPA.mesPensionado'\r\n          ></app-labels-error>\r\n          <app-labels-error\r\n            [fControlName]='\"anioPensionado\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n            [validator]='erroresPA.anioPensionado'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === PENCIONADO ||\r\n                                      formulario.get('actividadComercial').value === JUBILADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su actividad económica con Código CIIU?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"actividadEconomica\"'\r\n            [contenido]='catalogoPA.ACTIVIDADES_CIIU'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadEconomica\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.actividadEconomica'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <!-- Ama de Casa/Estudiante -->\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === AMA_DE_CASA ||\r\n                                      formulario.get('actividadComercial').value === ESTUDIANTE\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Nombre de la persona de la que depende\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            formControlName='personaSostiene'\r\n            [ccRestrict]='\"1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNMñÑ áéíóúÁÉÍÓÚ\"'\r\n            [form]='formulario'\r\n            [ccMaxLength]='50'/>\r\n          <app-labels-error\r\n            [fControlName]='\"personaSostiene\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.personaSostiene'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === AMA_DE_CASA ||\r\n                                      formulario.get('actividadComercial').value === ESTUDIANTE\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su actividad económica?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"actividadEconomica\"'\r\n            [contenido]='catalogoPA.ACTIVIDADES_CIIU'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadEconomica\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.actividadEconomica'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Rigth column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <!-- Opción (Empleado/Religioso/Servidor Público) -->\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿En que país trabaja con su empresa?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"paisEmpresa\"'\r\n            [contenido]='catalogoPA.PAISES'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"paisEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.paisEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n        <!-- falta validar dependencia en servicio , (VALIDAR) -->\r\n        <div class=\"formGroup\" *ngIf=\"(formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO) &&\r\n                                      (formulario.get('paisEmpresa').value === 'CO' || formulario.get('paisEmpresa').value === 'PA')\">\r\n          <label for=\"\" class=\"formGroup__label\">¿Cuál es su dirección de su oficina?</label>\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-search-list\r\n              class=\"formGroup__flexRow__child\"\r\n              style=\" min-width: 33%;\"\r\n              [formulario]=\"formulario\"\r\n              [ControlName]='\"provinciaEmpresa\"'\r\n              [contenido]='catalogoPA.PROVINCIAS.filter(filtroPorPais())'\r\n              [setValue]=\"setValueG\"\r\n              [setLabel]=\"setLabelG\"\r\n              [filtro]=\"filtroG\"\r\n              (change)=\"formulario.get('distritoEmpresa').setValue('')\"\r\n              (change)=\"formulario.get('corregimientoEmpresa').setValue('')\"\r\n              [InitialValue]=\"''\"\r\n              [placeholder]=\"'Seleccione'\"\r\n            ></app-search-list>\r\n            <app-search-list\r\n              class=\"formGroup__flexRow__child\"\r\n              style=\" min-width: 33%;\"\r\n              [formulario]=\"formulario\"\r\n              [ControlName]='\"distritoEmpresa\"'\r\n              [contenido]='catalogoPA.DISTRITOS.filter(filtroPorProvincia())'\r\n              [setValue]=\"setValueG\"\r\n              [setLabel]=\"setLabelG\"\r\n              [filtro]=\"filtroG\"\r\n              (change)=\"formulario.get('corregimientoEmpresa').setValue('')\"\r\n              [InitialValue]=\"''\"\r\n              [placeholder]=\"'Seleccione'\"\r\n            ></app-search-list>\r\n            <app-search-list\r\n              class=\"formGroup__flexRow__child\"\r\n              style=\" min-width: 33%;\"\r\n              [formulario]=\"formulario\"\r\n              [ControlName]='\"corregimientoEmpresa\"'\r\n              [contenido]='catalogoPA.CORREGUIMIENTO'\r\n              [setValue]=\"setValueG\"\r\n              [setLabel]=\"setLabelG\"\r\n              [filtro]=\"filtroG\"\r\n              [InitialValue]=\"''\"\r\n              [placeholder]=\"'Seleccione'\"\r\n            ></app-search-list>\r\n          </div>\r\n          <app-labels-error\r\n            [fControlName]='\"provinciaEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.provinciaEmpresa'\r\n          ></app-labels-error>\r\n          <app-labels-error\r\n            [fControlName]='\"distritoEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.distritoEmpresa'\r\n          ></app-labels-error>\r\n          <app-labels-error\r\n            [fControlName]='\"corregimientoEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.corregimientoEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"(formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO) &&\r\n                                      (formulario.get('paisEmpresa').value === 'CO' || formulario.get('paisEmpresa').value === 'PA')\">\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su dirección\"\r\n            formControlName=\"direccionEmpresa\"\r\n            [form]='formulario'\r\n            [ccRestrict]='\"qwertyuiopasdfghjklñzxcvbnm,.QWERTYUIOPASDFGHJKLÑZXCVBNM-1234567890#áéíóúÁÉÍÓÚ\"'\r\n            [ccMaxLength]='100'>\r\n          <app-labels-error\r\n            [fControlName]='\"direccionEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.direccionEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el teléfono de su oficina?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n              formControlName=\"telefonoOficina\"\r\n              [form]='formulario'\r\n              [ccRestrict]='\"0123456789\"'\r\n              [ccMaxLength]='11'/>\r\n          <app-labels-error\r\n            [fControlName]='\"telefonoOficina\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.telefonoOficina'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === SERTOR_PUBLICO ||\r\n                                      formulario.get('actividadComercial').value === RELIGIOSO ||\r\n                                      formulario.get('actividadComercial').value === ASALARIADO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Soporte de ingreso: adjuntar última ficha de seguro social o carta de trabajo actualizada en PDF, JPG, PNG\r\n          </label>\r\n          <div class=\"formGroup__flexRow\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              {{ formulario.get('documento').value ? 'Documento seleccionado':'Seleccionar documento'}}\r\n            </label>\r\n            <button class=\"button button--left\" (click)=\"getFile()\">\r\n              <span class=\"button__label button__label--light\">\r\n                Adjuntar...\r\n                  <div style='height: 0px;width:0px; overflow:hidden;'>\r\n                    <input #file type=\"file\" formControlName=\"documento\" accept=\".pdf,.jpg,.png\">\r\n                  </div>\r\n                </span>\r\n            </button>\r\n          </div>\r\n          <app-labels-error\r\n            [fControlName]='\"documento\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.documento'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <!-- Opción (Independiente/Socio Rentista/PNCN) -->\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === INDEPENDIENTE ||\r\n                                      formulario.get('actividadComercial').value === SOCIO ||\r\n                                      formulario.get('actividadComercial').value === RENTISTA_DE_CAPITAL ||\r\n                                      formulario.get('actividadComercial').value === PERSONA_NATURAL_CON_NEGOCIO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿En que país trabaja con su empresa?\r\n          </label>\r\n          <app-search-list\r\n            [formulario]=\"formulario\"\r\n            [ControlName]='\"paisEmpresa\"'\r\n            [contenido]='catalogoPA.PAISES'\r\n            [setValue]=\"setValueG\"\r\n            [setLabel]=\"setLabelG\"\r\n            [filtro]=\"filtroG\"\r\n            [InitialValue]=\"''\"\r\n            [placeholder]=\"'Seleccione'\"\r\n          ></app-search-list>\r\n          <app-labels-error\r\n            [fControlName]='\"paisEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.paisEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n        <!-- falta validar servicio , campos dependientes (Validar) -->\r\n        <div class=\"formGroup\" *ngIf=\"(formulario.get('actividadComercial').value === INDEPENDIENTE ||\r\n                                      formulario.get('actividadComercial').value === SOCIO ||\r\n                                      formulario.get('actividadComercial').value === RENTISTA_DE_CAPITAL ||\r\n                                      formulario.get('actividadComercial').value === PERSONA_NATURAL_CON_NEGOCIO) &&\r\n                                      (formulario.get('paisEmpresa').value === 'CO' || formulario.get('paisEmpresa').value === 'PA')\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su dirección de su oficina?\r\n          </label>\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-search-list\r\n              class=\"formGroup__flexRow__child\"\r\n              style=\" min-width: 33%;\"\r\n              [formulario]=\"formulario\"\r\n              [ControlName]='\"provinciaEmpresa\"'\r\n              [contenido]='catalogoPA.PROVINCIAS.filter(filtroPorPais())'\r\n              [setValue]=\"setValueG\"\r\n              [setLabel]=\"setLabelG\"\r\n              [filtro]=\"filtroG\"\r\n              (change)=\"formulario.get('distritoEmpresa').setValue('')\"\r\n              (change)=\"formulario.get('corregimientoEmpresa').setValue('')\"\r\n              [InitialValue]=\"''\"\r\n              [placeholder]=\"'Seleccione'\"\r\n            ></app-search-list>\r\n            <app-search-list\r\n              class=\"formGroup__flexRow__child\"\r\n              style=\" min-width: 33%;\"\r\n              [formulario]=\"formulario\"\r\n              [ControlName]='\"distritoEmpresa\"'\r\n              [contenido]='catalogoPA.DISTRITOS.filter(filtroPorProvincia())'\r\n              [setValue]=\"setValueG\"\r\n              [setLabel]=\"setLabelG\"\r\n              [filtro]=\"filtroG\"\r\n              (change)=\"formulario.get('corregimientoEmpresa').setValue('')\"\r\n              [InitialValue]=\"''\"\r\n              [placeholder]=\"'Seleccione'\"\r\n            ></app-search-list>\r\n            <app-search-list\r\n              class=\"formGroup__flexRow__child\"\r\n              style=\" min-width: 33%;\"\r\n              [formulario]=\"formulario\"\r\n              [ControlName]='\"corregimientoEmpresa\"'\r\n              [contenido]='catalogoPA.CORREGUIMIENTO'\r\n              [setValue]=\"setValueG\"\r\n              [setLabel]=\"setLabelG\"\r\n              [filtro]=\"filtroG\"\r\n              [InitialValue]=\"''\"\r\n              [placeholder]=\"'Seleccione'\"\r\n            ></app-search-list>\r\n\r\n            <!-- .filter(filtroPorDistrito()) -->\r\n          </div>\r\n          <app-labels-error\r\n              [fControlName]='\"provinciaEmpresa\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta en el campo provincia:\"'\r\n              [validator]='erroresPA.provinciaEmpresa'\r\n            ></app-labels-error>\r\n            <app-labels-error\r\n              [fControlName]='\"distritoEmpresa\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta en el campo distrito:\"'\r\n              [validator]='erroresPA.distritoEmpresa'\r\n            ></app-labels-error>\r\n            <app-labels-error\r\n              [fControlName]='\"corregimientoEmpresa\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta en el campo corregimiento:\"'\r\n              [validator]='erroresPA.corregimientoEmpresa'\r\n            ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"(formulario.get('actividadComercial').value === INDEPENDIENTE ||\r\n                                      formulario.get('actividadComercial').value === SOCIO ||\r\n                                      formulario.get('actividadComercial').value === RENTISTA_DE_CAPITAL ||\r\n                                      formulario.get('actividadComercial').value === PERSONA_NATURAL_CON_NEGOCIO) &&\r\n                                      (formulario.get('paisEmpresa').value === 'CO' || formulario.get('paisEmpresa').value === 'PA')\">\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su dirección\"\r\n            formControlName=\"direccionEmpresa\"\r\n            [form]='formulario'\r\n            [ccRestrict]='\"qwertyuiopasdfghjklñzxcvbnm,.QWERTYUIOPASDFGHJKLÑZXCVBNM-1234567890#áéíóúÁÉÍÓÚ\"'\r\n            [ccMaxLength]='100'>\r\n          <app-labels-error\r\n            [fControlName]='\"direccionEmpresa\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.direccionEmpresa'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('actividadComercial').value === INDEPENDIENTE ||\r\n                                      formulario.get('actividadComercial').value === SOCIO ||\r\n                                      formulario.get('actividadComercial').value === RENTISTA_DE_CAPITAL ||\r\n                                      formulario.get('actividadComercial').value === PERSONA_NATURAL_CON_NEGOCIO\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el teléfono de su oficina?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n              formControlName=\"telefonoOficina\"\r\n              [form]='formulario'\r\n              [ccRestrict]='\"0123456789\"'\r\n              [ccMaxLength]='11'/>\r\n          <app-labels-error\r\n            [fControlName]='\"telefonoOficina\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresPA.telefonoOficina'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container El Salvador -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"SV\"'>\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su actividad laboral?\r\n          </label>\r\n\r\n          <select class=\"formGroup__input formGroup__input--select\" formControlName=\"actividadLaboral\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of catalogoSV.ACTIVIDAD_LABORAL\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadLaboral\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresSV.actividadLaboral'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"formulario.get('actividadLaboral').value === '1' || formulario.get('actividadLaboral').value === '2' ||\r\n        formulario.get('actividadLaboral').value === '3'\">\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es su profesión u ocupación?\r\n            </label>\r\n            <select class=\"formGroup__input formGroup__input--select\" formControlName=\"profesion\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of catalogoSV.PROFESION_OCUPACION\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n            </select>\r\n            <app-labels-error\r\n              [fControlName]='\"profesion\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.profesion'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es el nombre de la empresa?\r\n            </label>\r\n            <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" formControlName=\"nombreEmpresa\"/>\r\n            <app-labels-error\r\n              [fControlName]='\"nombreEmpresa\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.nombreEmpresa'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es su cargo?\r\n            </label>\r\n            <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" formControlName=\"cargoEmpresa\"/>\r\n            <app-labels-error\r\n              [fControlName]='\"cargoEmpresa\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.cargoEmpresa'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Qué tipo de contrato laboral tiene con su empresa?\r\n            </label>\r\n            <select class=\"formGroup__input formGroup__input--select\" formControlName=\"tipoContrato\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of catalogoSV.CONTRATO\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n            </select>\r\n            <app-labels-error\r\n              [fControlName]='\"tipoContrato\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.tipoContrato'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es la fecha de ingreso a su empleo?\r\n            </label>\r\n            <div class=\"formGroup__flexRow\">\r\n              <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                formControlName='dia'>\r\n                <option disabled selected hidden value=\"\"> DD </option>\r\n                <option *ngFor=\"let item of (dias[formulario.get('mes').value] || [])[esBisiesto(formulario.get('anio').value)] || []\" [value]=\"item.value\" [label]=\"item.value\"></option>\r\n              </select>\r\n              <select class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\"\r\n                formControlName='mes'>\r\n                <option disabled selected hidden value=\"\"> MM</option>\r\n                <option *ngFor=\"let item of meses\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n              </select>\r\n              <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                placeholder=\"AAAA\" formControlName='anio'\r\n                [form]='formulario'\r\n                [ccRestrict]='\"1234567890\"'\r\n                [ccMaxLength]='4'/>\r\n            </div>\r\n                  <app-labels-error\r\n                    [fControlName]='\"dia\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                    [validator]='erroresSV.dia'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"mes\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                    [validator]='erroresSV.mes'\r\n                  ></app-labels-error>\r\n                  <app-labels-error\r\n                    [fControlName]='\"anio\"'\r\n                    [form]='formulario'\r\n                    [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                    [validator]='erroresSV.anio'\r\n                  ></app-labels-error>\r\n          </div>\r\n        </ng-container>\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Rigth column -->\r\n      <article class=\"formColumn\">\r\n        <ng-container *ngIf=\"formulario.get('actividadLaboral').value === '1' || formulario.get('actividadLaboral').value === '2' ||\r\n        formulario.get('actividadLaboral').value === '3'\">\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es el país donde trabaja?\r\n            </label>\r\n            <select (change)=\"onChange('pais')\" class=\"formGroup__input formGroup__input--select\" formControlName=\"pais\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of catalogoSV.PAIS\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n            </select>\r\n            <app-labels-error\r\n              [fControlName]='\"pais\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.pais'\r\n            ></app-labels-error>\r\n          </div>\r\n          <!-- vlaidar con el servicio -->\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es su departamento de donde trabaja?\r\n            </label>\r\n            <select (change)=\"onChange('departamento')\" class=\"formGroup__input formGroup__input--select\" formControlName=\"departamento\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of catalogoSV.DEPARTAMENTO.filter(filterDepartamento(formulario.get('pais').value))\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n            </select>\r\n            <app-labels-error\r\n              [fControlName]='\"departamento\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.departamento'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es su municipio de donde trabaja?\r\n            </label>\r\n            <select class=\"formGroup__input formGroup__input--select\" formControlName=\"municipio\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of catalogoSV.MUNICIPIO.filter(filterDepartamentoMunicipio(formulario.get('pais').value, formulario.get('departamento').value))\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n            </select>\r\n            <app-labels-error\r\n              [fControlName]='\"municipio\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.municipio'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es su dirección de donde trabaja?\r\n            </label>\r\n            <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" formControlName=\"direccion\"/>\r\n            <app-labels-error\r\n              [fControlName]='\"direccion\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.direccion'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              Teléfono de la oficina\r\n            </label>\r\n            <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" formControlName=\"telefono\"\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='13'/>\r\n            <app-labels-error\r\n              [fControlName]='\"telefono\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='erroresSV.telefono'\r\n            ></app-labels-error>\r\n          </div>\r\n        </ng-container>\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Honduras -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"HN\"'>\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\">\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su actividad económica?\r\n          </label>\r\n          <select class=\"formGroup__input formGroup__input--select\" formControlName=\"actividadComercial\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of catalogoCR.ACTIVIDAD_COMERCIAL\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <!-- <app-labels-error\r\n            [fControlName]='\"actividadLaboral\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresSV.actividadLaboral'\r\n          ></app-labels-error> -->\r\n        </div>\r\n\r\n        <!-- ============= Opción 1 ================= -->\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su profesión u ocupación?\r\n          </label>\r\n          <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"profession\" [fCname]=\"professionHN\"></app-select-input>\r\n          <!-- <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option value=\"1\">Opción 1</option>\r\n            <option value=\"2\">Opción 2</option>\r\n            <option value=\"3\">Opción 3</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre de la empresa?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Desde cuando trabaja en la empresa?\r\n          </label>\r\n          <div class=\"formGroup__flexRow\">\r\n            <input type=\"number\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"DD\" maxlength=\"2\">\r\n            <input type=\"number\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"MM\" maxlength=\"2\">\r\n            <input type=\"number\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"AAAA\" maxlength=\"4\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su cargo?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Tipo de empresa\r\n          </label>\r\n          <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"typeCompany\" [fCname]=\"typeCompanyHN\"></app-select-input>\r\n          <!-- <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option value=\"1\">Opción 1</option>\r\n            <option value=\"2\">Opción 2</option>\r\n            <option value=\"3\">Opción 3</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Tipo de empleo\r\n          </label>\r\n          <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"typeJob\" [fCname]=\"typeJobHN\"></app-select-input>\r\n\r\n          <!-- <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option value=\"1\">Opción 1</option>\r\n            <option value=\"2\">Opción 2</option>\r\n            <option value=\"3\">Opción 3</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su número de teléfono de la empresa?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n\r\n        <!-- Opción 2 (actividad económica es ama de casa o estudiante )  -->\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre completo de la persona de quien depende económicamente?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el tipo de identificación de la persona de la cuál depende?\r\n          </label>\r\n          <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"typeIdentification\" [fCname]=\"typeIdentificationHN\">\r\n          </app-select-input>\r\n\r\n          <!-- <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option value=\"1\">Opción 1</option>\r\n            <option value=\"2\">Opción 2</option>\r\n            <option value=\"3\">Opción 3</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el número de identificación de la persona de la cuál depende?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el parentesco con la persona de la cuál depende?\r\n          </label>\r\n          <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"typeRelationship\" [fCname]=\"typeRelationshipHN\">\r\n          </app-select-input>\r\n\r\n          <!-- <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option value=\"1\">Opción 1</option>\r\n            <option value=\"2\">Opción 2</option>\r\n            <option value=\"3\">Opción 3</option>\r\n          </select> -->\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Especifique los ingresos mensuales que recibe esta persona\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Rigth column -->\r\n      <article class=\"formColumn\">\r\n        <!--faltan validar servicion  -->\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su dirección de la empresa?\r\n          </label>\r\n          <div class=\"formGroup__flexRow\">\r\n            <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\" name=\"\">\r\n              <option disabled selected hidden value=\"0\"> Colonia </option>\r\n              <option value=\"1\">Opción 1</option>\r\n              <option value=\"2\">Opción 2</option>\r\n              <option value=\"3\">Opción 3</option>\r\n            </select>\r\n            <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\" name=\"\">\r\n              <option disabled selected hidden value=\"0\"> Barrio </option>\r\n              <option value=\"1\">Opción 1</option>\r\n              <option value=\"2\">Opción 2</option>\r\n              <option value=\"3\">Opción 3</option>\r\n            </select>\r\n            <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\" name=\"\">\r\n              <option disabled selected hidden value=\"0\"> Municipio </option>\r\n              <option value=\"1\">Opción 1</option>\r\n              <option value=\"2\">Opción 2</option>\r\n              <option value=\"3\">Opción 3</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!-- falta validar el servicio -->\r\n        <div class=\"formGroup\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select formGroup__flexRow__child\" name=\"\">\r\n              <option disabled selected hidden value=\"0\"> Departamento </option>\r\n              <option value=\"1\">Opción 1</option>\r\n              <option value=\"2\">Opción 2</option>\r\n              <option value=\"3\">Opción 3</option>\r\n            </select>\r\n            <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\" placeholder=\"BI/Casa/Avenida/Calle\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"Punto de referencia\" name=\"\" />\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>\r\n              ¿Ha desempeñado un cargo público en el gobierno en\r\n              los últimos 4 años?\r\n            </b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label>\r\n              <input type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            En que institución\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Especifique el Cargo\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n        </div>\r\n\r\n        <div class=\"container__content--noFlex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>\r\n              Es el actual?\r\n            </b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label>\r\n              <input type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Desde cuando?\r\n          </label>\r\n          <div class=\"formGroup__flexRow\">\r\n            <input type=\"text\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"DD\" maxlength=\"2\">\r\n            <input type=\"text\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"MM\" maxlength=\"2\">\r\n            <input type=\"number\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"AAAA\" maxlength=\"4\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Hasta cuando?\r\n          </label>\r\n          <div class=\"formGroup__flexRow\">\r\n            <input type=\"text\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"DD\" maxlength=\"2\">\r\n            <input type=\"text\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"MM\" maxlength=\"2\">\r\n            <input type=\"number\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n              placeholder=\"AAAA\" maxlength=\"4\">\r\n          </div>\r\n        </div>\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Costa Rica -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"CR\"'>\r\n\r\n      <!-- column -->\r\n      <article class=\"formColumn\">\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su actividad laboral?\r\n          </label>\r\n          <select class=\"formGroup__input formGroup__input--select\" formControlName=\"actividadComercial\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of catalogoCR.ACTIVIDAD_COMERCIAL\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"actividadComercial\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='erroresCR.actividadComercial'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <!-- Opcion(Persona Física con Negocio Propio) -->\r\n        <ng-container *ngIf=\"formulario.get('actividadComercial').value === PERSONA_FISICA_CON_NEGOCIO_PROPIO\">\r\n            <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su actividad económica?\r\n                </label>\r\n                <app-search-list\r\n                  [formulario]=\"formulario\"\r\n                  [ControlName]='\"actividadEconomica\"'\r\n                  [contenido]='catalogoCR.ACTIVIDAD_ECONOMICA.filter(filtroCR(formulario.get(\"actividadComercial\").value))'\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"actividadEconomica\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.actividadEconomica'\r\n                ></app-labels-error>\r\n            </div>\r\n            <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su profesión u ocupación?\r\n                </label>\r\n                <app-search-list\r\n                  [formulario]=\"formulario\"\r\n                  [ControlName]='\"profesion\"'\r\n                  [contenido]='catalogoCR.PROFESION'\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"profesion\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.profesion'\r\n                ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es el nombre de la empresa?\r\n              </label>\r\n              <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                formControlName=\"nombreEmpresa\"\r\n                [form]=\"formulario\"\r\n                [ccMaxLength]='60'/>\r\n              <app-labels-error\r\n                  [fControlName]='\"nombreEmpresa\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.nombreEmpresa'\r\n                ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Desde cuando opera su empresa?\r\n\r\n              </label>\r\n              <div class=\"formGroup__flexRow\" formGroupName=\"desdeCuandoOperaEmpresa\">\r\n                  <app-search-list\r\n                    style=\"min-width: 33%\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario.get('desdeCuandoOperaEmpresa')\"\r\n                    [ControlName]='\"dia\"'\r\n                    [contenido]=\"(dias[formulario.get('desdeCuandoOperaEmpresa').get('mes').value] || [])[esBisiesto(formulario.get('desdeCuandoOperaEmpresa').get('anio').value)] || []\"\r\n                    [setValue]=\"setValueG\"\r\n                    [setLabel]=\"setLabelG\"\r\n                    [filtro]=\"filtroG\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'DD'\"\r\n                  ></app-search-list>\r\n                  <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario.get('desdeCuandoOperaEmpresa')\"\r\n                      [ControlName]='\"mes\"'\r\n                      [contenido]=\"meses\"\r\n                      [setValue]=\"setValueG\"\r\n                      [setLabel]=\"setLabelG\"\r\n                      [filtro]=\"filtroG\"\r\n                      (change)=\"formulario.get('desdeCuandoOperaEmpresa').get('dia').setValue('')\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'MM'\"\r\n                  ></app-search-list>\r\n                  <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                    placeholder=\"AAAA\" formControlName='anio'\r\n                    [form]=\"formulario.get('desdeCuandoOperaEmpresa')\"\r\n                    (change)=\"formulario.get('desdeCuandoOperaEmpresa').get('dia').setValue('')\"\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='4'/>\r\n              </div>\r\n              <app-labels-error\r\n                [fControlName]='\"dia\"'\r\n                [form]=\"formulario.get('desdeCuandoOperaEmpresa')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                [validator]='erroresCR.dia'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"mes\"'\r\n                [form]=\"formulario.get('desdeCuandoOperaEmpresa')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                [validator]='erroresCR.mes'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"anio\"'\r\n                [form]=\"formulario.get('desdeCuandoOperaEmpresa')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                [validator]='erroresCR.anio'\r\n              ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuántos empleados tiene su empresa?\r\n              </label>\r\n              <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                formControlName=\"cantidadEmpleados\"\r\n                [form]=\"formulario\"\r\n                [ccRestrict]='\"1234567890\"'\r\n                [ccMaxLength]='5'/>\r\n              <app-labels-error\r\n                [fControlName]='\"cantidadEmpleados\"'\r\n                [form]=\"formulario\"\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='erroresCR.cantidadEmpleados'\r\n              ></app-labels-error>\r\n            </div>\r\n            <!-- SE DEBE VALIDAR EL SERVICIO -->\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es su dirección de su empresa?\r\n              </label>\r\n              <div class=\"formGroup__flexRow\">\r\n                <app-search-list\r\n                  style=\"min-width: 33%\"\r\n                  class=\"formGroup__input--select\"\r\n                  [formulario]=\"formulario.get('direccion')\"\r\n                  [ControlName]='\"provincia\"'\r\n                  [contenido]=\"catalogoCR.PROVINCIAS\"\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  (change)=\"formulario.get('direccion').get('distrito').setValue('')\"\r\n                  (change)=\"formulario.get('direccion').get('canton').setValue('')\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Provincia'\"\r\n                ></app-search-list>\r\n                <app-search-list\r\n                  style=\"min-width: 33%; margin-left: 5px; margin-right: 5px;\"\r\n                  class=\"formGroup__input--select\"\r\n                  [formulario]=\"formulario.get('direccion')\"\r\n                  [ControlName]='\"canton\"'\r\n                  [contenido]=\"catalogoCR.CANTON.filter(filterCanton(formulario.get('direccion').get('provincia').value))\"\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  (change)=\"formulario.get('direccion').get('distrito').setValue('')\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Cantón'\"\r\n                ></app-search-list>\r\n                <app-search-list\r\n                  style=\"min-width: 33%\"\r\n                  class=\"formGroup__input--select\"\r\n                  [formulario]=\"formulario.get('direccion')\"\r\n                  [ControlName]='\"distrito\"'\r\n                  [contenido]=\"catalogoCR.CANTON_PROV_PAIS.filter( filterCantonProvincia(\r\n                    formulario.get('direccion').get('provincia').value,\r\n                    formulario.get('direccion').get('canton').value\r\n                  ))\"\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Distrito'\"\r\n                ></app-search-list>\r\n              </div>\r\n              <app-labels-error\r\n                [fControlName]='\"provincia\"'\r\n                [form]=\"formulario.get('direccion')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo provincia:\"'\r\n                [validator]='erroresCR.provincia'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"canton\"'\r\n                [form]=\"formulario.get('direccion')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo canton:\"'\r\n                [validator]='erroresCR.canton'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"distrito\"'\r\n                [form]=\"formulario.get('direccion')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo distrito:\"'\r\n                [validator]='erroresCR.distrito'\r\n              ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\" formGroupName=\"direccion\">\r\n              <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su dirección\"\r\n                formControlName=\"direccionExacta\"\r\n                [form]=\"formulario.get('direccion')\"\r\n                [ccMaxLength]='120'>\r\n              <app-labels-error\r\n                [fControlName]='\"direccionExacta\"'\r\n                [form]=\"formulario.get('direccion')\"\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='erroresCR.direccionExacta'\r\n              ></app-labels-error>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- Opción (Asalariados/Religiosos/Sector Público) -->\r\n        <ng-container *ngIf=\"formulario.get('actividadComercial').value === ASALARIADO_CR ||\r\n                             formulario.get('actividadComercial').value === RELIGIOSO_CR ||\r\n                             formulario.get('actividadComercial').value === SECTOR_PUBLICO\">\r\n            <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es el nombre de la empresa?\r\n                </label>\r\n                <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                  formControlName=\"nombreEmpresa\"\r\n                  [form]=\"formulario\"\r\n                  [ccMaxLength]='60'/>\r\n                <app-labels-error\r\n                  [fControlName]='\"nombreEmpresa\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.nombreEmpresa'\r\n                ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Desde cuando trabaja en la empresa?\r\n                </label>\r\n                <div class=\"formGroup__flexRow\" formGroupName=\"desdeCuandoTrabajaEnLaEmpresa\">\r\n                  <app-search-list\r\n                    style=\"min-width: 33%\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa')\"\r\n                    [ControlName]='\"dia\"'\r\n                    [contenido]=\"(dias[formulario.get('desdeCuandoTrabajaEnLaEmpresa').get('mes').value] || [])[esBisiesto(formulario.get('desdeCuandoTrabajaEnLaEmpresa').get('anio').value)] || []\"\r\n                    [setValue]=\"setValueG\"\r\n                    [setLabel]=\"setLabelG\"\r\n                    [filtro]=\"filtroG\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'DD'\"\r\n                  ></app-search-list>\r\n                  <app-search-list\r\n                    style=\"min-width: 33%; margin-left: 5px;\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa')\"\r\n                    [ControlName]='\"mes\"'\r\n                    [contenido]=\"meses\"\r\n                    [setValue]=\"setValueG\"\r\n                    [setLabel]=\"setLabelG\"\r\n                    [filtro]=\"filtroG\"\r\n                    (change)=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa').get('dia').setValue('')\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'MM'\"\r\n                  ></app-search-list>\r\n                  <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                    placeholder=\"AAAA\" formControlName='anio'\r\n                    [form]=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa')\"\r\n                    (change)=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa').get('dia').setValue('')\"\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='4'/>\r\n              </div>\r\n              <app-labels-error\r\n                [fControlName]='\"dia\"'\r\n                [form]=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                [validator]='erroresCR.dia'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"mes\"'\r\n                [form]=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                [validator]='erroresCR.mes'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"anio\"'\r\n                [form]=\"formulario.get('desdeCuandoTrabajaEnLaEmpresa')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                [validator]='erroresCR.anio'\r\n              ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su cargo?\r\n                </label>\r\n                <app-search-list\r\n                  [formulario]=\"formulario\"\r\n                  [ControlName]='\"cargoEmpresa\"'\r\n                  [contenido]='catalogoCR.OCUPACION'\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"cargoEmpresa\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.cargoEmpresa'\r\n                ></app-labels-error>\r\n              </div>\r\n              <!-- se debe validar  -->\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su dirección de su empresa?\r\n                </label>\r\n                <div class=\"formGroup__flexRow\">\r\n                  <app-search-list\r\n                    style=\"min-width: 33%\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario.get('direccion')\"\r\n                    [ControlName]='\"provincia\"'\r\n                    [contenido]=\"catalogoCR.PROVINCIAS\"\r\n                    [setValue]=\"setValueG\"\r\n                    [setLabel]=\"setLabelG\"\r\n                    [filtro]=\"filtroG\"\r\n                    (change)=\"formulario.get('direccion').get('distrito').setValue('')\"\r\n                    (change)=\"formulario.get('direccion').get('canton').setValue('')\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Provincia'\"\r\n                  ></app-search-list>\r\n                  <app-search-list\r\n                    style=\"min-width: 33%; margin-left: 5px; margin-right: 5px;\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario.get('direccion')\"\r\n                    [ControlName]='\"canton\"'\r\n                    [contenido]=\"catalogoCR.CANTON.filter(filterCanton(formulario.get('direccion').get('provincia').value))\"\r\n                    [setValue]=\"setValueG\"\r\n                    [setLabel]=\"setLabelG\"\r\n                    [filtro]=\"filtroG\"\r\n                    (change)=\"formulario.get('direccion').get('distrito').setValue('')\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Cantón'\"\r\n                  ></app-search-list>\r\n                  <app-search-list\r\n                    style=\"min-width: 33%\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario.get('direccion')\"\r\n                    [ControlName]='\"distrito\"'\r\n                    [contenido]=\"catalogoCR.CANTON_PROV_PAIS.filter( filterCantonProvincia(\r\n                      formulario.get('direccion').get('provincia').value,\r\n                      formulario.get('direccion').get('canton').value\r\n                    ))\"\r\n                    [setValue]=\"setValueG\"\r\n                    [setLabel]=\"setLabelG\"\r\n                    [filtro]=\"filtroG\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'Distrito'\"\r\n                  ></app-search-list>\r\n                </div>\r\n                <app-labels-error\r\n                  [fControlName]='\"provincia\"'\r\n                  [form]=\"formulario.get('direccion')\"\r\n                  [messageGeneralError]='\"Información Incorrecta en el campo provincia:\"'\r\n                  [validator]='erroresCR.provincia'\r\n                ></app-labels-error>\r\n                <app-labels-error\r\n                  [fControlName]='\"canton\"'\r\n                  [form]=\"formulario.get('direccion')\"\r\n                  [messageGeneralError]='\"Información Incorrecta en el campo canton:\"'\r\n                  [validator]='erroresCR.canton'\r\n                ></app-labels-error>\r\n                <app-labels-error\r\n                  [fControlName]='\"distrito\"'\r\n                  [form]=\"formulario.get('direccion')\"\r\n                  [messageGeneralError]='\"Información Incorrecta en el campo distrito:\"'\r\n                  [validator]='erroresCR.distrito'\r\n                ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\" formGroupName=\"direccion\">\r\n                <input type=\"text\" class=\"formGroup__input\" placeholder=\"Escriba su dirección\"\r\n                  formControlName=\"direccionExacta\"\r\n                  [form]=\"formulario.get('direccion')\"\r\n                  [ccMaxLength]='120'>\r\n                <app-labels-error\r\n                  [fControlName]='\"direccionExacta\"'\r\n                  [form]=\"formulario.get('direccion')\"\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.direccionExacta'\r\n                ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su número de teléfono de su empresa?\r\n                </label>\r\n                <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                  formControlName=\"telefonoOficina\"\r\n                  [form]=\"formulario\"\r\n                  [ccRestrict]='\"1234567890\"'\r\n                  [ccMaxLength]='14'>\r\n                <app-labels-error\r\n                  [fControlName]='\"telefonoOficina\"'\r\n                  [form]=\"formulario\"\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.telefonoOficina'\r\n                ></app-labels-error>\r\n              </div>\r\n        </ng-container>\r\n\r\n        <!-- Opción (Profesionales/Independientes) -->\r\n        <ng-container *ngIf=\"formulario.get('actividadComercial').value === INDEPENDIENTES ||\r\n                             formulario.get('actividadComercial').value === PROFESIONALES\">\r\n            <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su profesión u ocupación?\r\n                </label>\r\n                <app-search-list\r\n                  [formulario]=\"formulario\"\r\n                  [ControlName]='\"profesion\"'\r\n                  [contenido]='catalogoCR.PROFESION'\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"profesion\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.profesion'\r\n                ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es el nombre de la empresa?\r\n              </label>\r\n              <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                formControlName=\"nombreEmpresa\"\r\n                [form]=\"formulario\"\r\n                [ccMaxLength]='60'/>\r\n              <app-labels-error\r\n                  [fControlName]='\"nombreEmpresa\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.nombreEmpresa'\r\n                ></app-labels-error>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- Opción (Banca Patrimonial/Rentista Capital) -->\r\n        <ng-container *ngIf=\"formulario.get('actividadComercial').value === BANCA_PATRIMONIAL ||\r\n                             formulario.get('actividadComercial').value === RENTISTA_CAPITAL\">\r\n            <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  Describa el origen de los fondos\r\n                </label>\r\n                <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                  formControlName=\"origenFondos\"\r\n                  [form]=\"formulario\"\r\n                  [ccMaxLength]='60'/>\r\n                <app-labels-error\r\n                  [fControlName]='\"origenFondos\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.origenFondos'\r\n                ></app-labels-error>\r\n              </div>\r\n        </ng-container>\r\n\r\n        <!-- Opción (Pensionado/Jubilidado) -->\r\n        <ng-container *ngIf=\"formulario.get('actividadComercial').value === PENSIONADO ||\r\n                             formulario.get('actividadComercial').value === JUBILADO_CR\">\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Desde que fecha se encuentra pensionado?\r\n              </label>\r\n              <div class=\"formGroup__flexRow\" formGroupName=\"fechaPensionado\">\r\n                  <app-search-list\r\n                    style=\"min-width: 33%\"\r\n                    class=\"formGroup__input--select\"\r\n                    [formulario]=\"formulario.get('fechaPensionado')\"\r\n                    [ControlName]='\"dia\"'\r\n                    [contenido]=\"(dias[formulario.get('fechaPensionado').get('mes').value] || [])[esBisiesto(formulario.get('fechaPensionado').get('anio').value)] || []\"\r\n                    [setValue]=\"setValueG\"\r\n                    [setLabel]=\"setLabelG\"\r\n                    [filtro]=\"filtroG\"\r\n                    [InitialValue]=\"''\"\r\n                    [placeholder]=\"'DD'\"\r\n                  ></app-search-list>\r\n                  <app-search-list\r\n                      style=\"min-width: 33%; margin-left: 5px;\"\r\n                      class=\"formGroup__input--select\"\r\n                      [formulario]=\"formulario.get('fechaPensionado')\"\r\n                      [ControlName]='\"mes\"'\r\n                      [contenido]=\"meses\"\r\n                      [setValue]=\"setValueG\"\r\n                      [setLabel]=\"setLabelG\"\r\n                      [filtro]=\"filtroG\"\r\n                      (change)=\"formulario.get('fechaPensionado').get('dia').setValue('')\"\r\n                      [InitialValue]=\"''\"\r\n                      [placeholder]=\"'MM'\"\r\n                  ></app-search-list>\r\n                  <input type=\"text\" class=\"formGroup__input formGroup__flexRow__child\"\r\n                    placeholder=\"AAAA\" formControlName='anio'\r\n                    [form]=\"formulario.get('fechaPensionado')\"\r\n                    (change)=\"formulario.get('fechaPensionado').get('dia').setValue('')\"\r\n                    [ccRestrict]='\"1234567890\"'\r\n                    [ccMaxLength]='4'/>\r\n              </div>\r\n              <app-labels-error\r\n                [fControlName]='\"dia\"'\r\n                [form]=\"formulario.get('fechaPensionado')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo día:\"'\r\n                [validator]='erroresCR.dia'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"mes\"'\r\n                [form]=\"formulario.get('fechaPensionado')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo mes:\"'\r\n                [validator]='erroresCR.mes'\r\n              ></app-labels-error>\r\n              <app-labels-error\r\n                [fControlName]='\"anio\"'\r\n                [form]=\"formulario.get('fechaPensionado')\"\r\n                [messageGeneralError]='\"Información Incorrecta en el campo año:\"'\r\n                [validator]='erroresCR.anio'\r\n              ></app-labels-error>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- Opción (Ama de Casa/Estudiantes) -->\r\n        <ng-container *ngIf=\"formulario.get('actividadComercial').value === AMA_DE_CASA_CR ||\r\n                             formulario.get('actividadComercial').value === ESTUDIANTE_CR\">\r\n            <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  Nombre de la persona de la que depende\r\n                </label>\r\n                <input type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n                  formControlName=\"personaDeQuienDepende\"\r\n                  [form]=\"formulario\"\r\n                  [ccMaxLength]='50'/>\r\n                <app-labels-error\r\n                  [fControlName]='\"personaDeQuienDepende\"'\r\n                  [form]=\"formulario\"\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.personaDeQuienDepende'\r\n                ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                Número de identificación de la persona de la cual depende?\r\n              </label>\r\n              <input type=\"text\" class=\"formGroup__input\"\r\n                formControlName=\"identificacionPersonaDeQuienDepende\"\r\n                [form]=\"formulario\"\r\n                [ccRestrict]='\"-1234567890\"'\r\n                [ccMaxLength]='24'/>\r\n              <app-labels-error\r\n                [fControlName]='\"identificacionPersonaDeQuienDepende\"'\r\n                [form]=\"formulario\"\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='erroresCR.identificacionPersonaDeQuienDepende'\r\n              ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es su actividad económica?\r\n              </label>\r\n              <app-search-list\r\n                  [formulario]=\"formulario\"\r\n                  [ControlName]='\"actividadEconomicaDeQuienDepende\"'\r\n                  [contenido]='catalogoCR.ACTIVIDAD_ECONOMICA'\r\n                  [setValue]=\"setValueG\"\r\n                  [setLabel]=\"setLabelG\"\r\n                  [filtro]=\"filtroG\"\r\n                  [InitialValue]=\"''\"\r\n                  [placeholder]=\"'Seleccione'\"\r\n                ></app-search-list>\r\n                <app-labels-error\r\n                  [fControlName]='\"actividadEconomicaDeQuienDepende\"'\r\n                  [form]='formulario'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='erroresCR.actividadEconomica'\r\n                ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                Especifique los ingresos mensuales en dólares que recibe esta persona\r\n              </label>\r\n              <input type=\"text\" class=\"formGroup__input\" placeholder=\"$\"\r\n                formControlName=\"ingresoEnDolares\"\r\n                [form]=\"formulario\"\r\n                [ccRestrict]='\"1234567890.\"'\r\n                [ccMaxLength]='21'/>\r\n              <app-labels-error\r\n                [fControlName]='\"ingresoEnDolares\"'\r\n                [form]=\"formulario\"\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='erroresCR.ingresoEnDolares'\r\n              ></app-labels-error>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <!-- Opción (Pensionado/Jubilado) -->\r\n        <!-- <ng-container *ngIf=\"formulario.get('actividadComercial').value === PENSIONADO ||\r\n                             formulario.get('actividadComercial').value === JUBILADO_CR\">\r\n          <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es el nombre de la entidad que lo pensiono?\r\n              </label>\r\n              <input type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Desde que fecha se encuentra pensionado?\r\n            </label>\r\n            <div class=\"formGroup__flexRow\">\r\n              <input type=\"text\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n                placeholder=\"DD\" maxlength=\"2\">\r\n              <input type=\"text\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n                placeholder=\"MM\" maxlength=\"2\">\r\n              <input type=\"number\" class=\"formGroup__input formGroup__input--alignCenter formGroup__flexRow__child\"\r\n                placeholder=\"AAAA\" maxlength=\"4\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es su actividad económica con Código CIIU?\r\n            </label>\r\n            <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"economicActivityCIIU\" [fCname]=\"economicActivityCIIUCR\">\r\n            </app-select-input>\r\n          </div>\r\n        </ng-container> -->\r\n\r\n        <!-- Opción (Ama de Casa/Estudiantes) -->\r\n        <!-- <ng-container *ngIf=\"formulario.get('actividadComercial').value === AMA_DE_CASA_CR ||\r\n                             formulario.get('actividadComercial').value === ESTUDIANTE_CR\">\r\n            <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es su actividad económica de la cual depende?\r\n                </label>\r\n                <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"economicActivity\" [fCname]=\"economicActivityCRDep\">\r\n                </app-select-input>\r\n                <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n                  <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n                  <option value=\"1\">Opción 1</option>\r\n                  <option value=\"2\">Opción 2</option>\r\n                  <option value=\"3\">Opción 3</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es su actividad económica con Código CIIU?\r\n              </label>\r\n              <app-select-input [showOpt]=\"'valor'\" [arrayItems]=\"economicActivityCIIU\"\r\n                [fCname]=\"economicActivityCIIUCRTwo\"></app-select-input>\r\n              <select name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n                <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n                <option value=\"1\">Opción 1</option>\r\n                <option value=\"2\">Opción 2</option>\r\n                <option value=\"3\">Opción 3</option>\r\n              </select>\r\n            </div>\r\n        </ng-container> -->\r\n\r\n      </article>\r\n      <!-- End -->\r\n    </section>\r\n    <!-- Button Container -->\r\n    <div class=\"formContainer__buttonContainer\">\r\n      <!-- <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onCall(getDataToPayload())'></app-button-continue> -->\r\n      <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onRedirect(\"VIN004\")'></app-button-continue>\r\n    </div>\r\n    <!-- End -->\r\n  </div>\r\n  <!-- End -->\r\n  <!-- </div> -->\r\n  <!-- End -->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin003/vin003.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin003/vin003.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid.ng-touched {\n  border-color: #ed1c27 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vdmluY3VsYWNpb24vdmluMDAzL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFwcFxcbW9kdWxlc1xcY2FtXFx2aW5jdWxhY2lvblxcdmluMDAzXFx2aW4wMDMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL3ZpbmN1bGFjaW9uL3ZpbjAwMy92aW4wMDMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZC5uZy10b3VjaGVkICB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin003/vin003.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin003/vin003.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin003Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin003Component", function() { return Vin003Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");
/* harmony import */ var src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/common/CONST */ "./src/app/modules/common/CONST.ts");




let Vin003Component = class Vin003Component extends src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    change(value) {
        this.pais = value;
        this.obser.sendData(value, src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"]);
        this.ngOnInit();
    }
    ngOnInit() {
        this.setFecha();
        this.countrieRules = {
            CR: () => this.setRulesCR(),
            PA: () => this.setRulesPA(),
            SV: () => this.setRulesSV(),
            HN: () => this.setRulesHN()
        };
        if (this.countrieRules[this.pais]) {
            this.countrieRules[this.pais]();
        }
    }
    ngOnDestroy() {
        // throw new Error('Method not implemented.');
    }
    getDataToPayload(data) {
        this.disableButton = true;
        return () => this.formulario.getRawValue();
    }
    getDataToBackButton(data) {
        // throw new Error('Method not implemented.');
        return () => ({});
    }
    // EL SALVADOR
    setRulesSV() {
        this.catalogoSV = {
            ACTIVIDAD_LABORAL: [],
            PROFESION_OCUPACION: [],
            CARGO: [],
            CONTRATO: [],
            PAIS: [],
            DEPARTAMENTO: [],
            MUNICIPIO: []
        };
        this.erroresSV = {
            actividadLaboral: [],
            profesion: [],
            nombreEmpresa: [],
            cargoEmpresa: [],
            tipoContrato: [],
            dia: [],
            mes: [],
            anio: [],
            pais: [],
            departamento: [],
            municipio: [],
            direccion: [],
            telefono: []
        };
        this.getCatalogo('ACTIVIDAD_LABORAL');
        this.getCatalogo('PROFESION_OCUPACION');
        this.getCatalogo('CARGO');
        this.getCatalogo('CONTRATO');
        this.getCatalogo('PAIS');
        this.getCatalogo('DEPARTAMENTO');
        this.getCatalogo('MUNICIPIO');
        this.setRules({
            actividadLaboral: ['', [
                    this.rules.validationForSelect(() => this.catalogoSV.ACTIVIDAD_LABORAL, (control) => false),
                    this.rules.resetMyCallbackValidation([
                        'profesion',
                        'nombreEmpresa',
                        'cargoEmpresa',
                        'tipoContrato',
                        'dia',
                        'mes',
                        'anio',
                        'pais',
                        'departamento',
                        'municipio',
                        'direccion',
                        'telefono'
                    ])
                ]],
            profesion: ['', [
                    this.rules.validationForSelect(() => this.catalogoSV.PROFESION_OCUPACION, this.requiredSelectSV())
                ]],
            nombreEmpresa: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredSV())
                ]],
            cargoEmpresa: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredSV())
                ]],
            tipoContrato: ['', [
                    this.rules.validationForSelect(() => this.catalogoSV.CONTRATO, this.requiredSelectSV())
                ]],
            dia: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredSV())
                ]],
            mes: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredSV())
                ]],
            anio: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredSV()),
                    this.rules.validationForMinLength(4)
                ]],
            pais: ['', [
                    this.rules.validationForSelect(() => this.catalogoSV.PAIS, this.requiredSelectSV())
                ]],
            departamento: ['', [
                    this.rules.validationForSelect(() => this.catalogoSV.DEPARTAMENTO, this.requiredSelectSV())
                ]],
            municipio: ['', [
                    this.rules.validationForSelect(() => this.catalogoSV.MUNICIPIO, this.requiredSelectSV())
                ]],
            direccion: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredSV())
                ]],
            telefono: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredSV()),
                    this.rules.validationForMinLength(8)
                ]]
        });
        this.erroresSV = {
            actividadLaboral: this.getActividadLaboral(),
            profesion: this.getProfesion(),
            nombreEmpresa: this.getNombreEmpresa(),
            cargoEmpresa: this.getCargoEmpresa(),
            tipoContrato: this.getTipoContrato(),
            dia: this.getDia(),
            mes: this.getMes(),
            anio: this.getAnio(),
            pais: this.getPais(),
            departamento: this.getDepartamento(),
            municipio: this.getMunicipio(),
            direccion: this.getDireccion(),
            telefono: this.getTelefono()
        };
    }
    // EL SALVADOR
    requiredSelectSV() {
        return (control) => {
            if (!control.parent) {
                return true;
            }
            return control.parent.get('actividadLaboral').value !== '1' &&
                control.parent.get('actividadLaboral').value !== '2' &&
                control.parent.get('actividadLaboral').value !== '3';
        };
    }
    requiredSV() {
        return (control) => {
            if (!control.parent) {
                return true;
            }
            if (control.parent.get('actividadLaboral').value === '1' ||
                control.parent.get('actividadLaboral').value === '2' ||
                control.parent.get('actividadLaboral').value === '3') {
                return control.value !== '';
            }
            return true;
        };
    }
    onChange(valor) {
        if (valor === 'pais') {
            this.formulario.get('departamento').setValue('');
            this.formulario.get('municipio').setValue('');
        }
        if (valor === 'departamento') {
            this.formulario.get('municipio').setValue('');
        }
    }
    filterDepartamento(valor) {
        return (item) => item.pais === valor;
    }
    filterDepartamentoMunicipio(valor1, valor2) {
        return (item) => item.pais === valor1 && item.departamento === valor2;
    }
    getActividadLaboral() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getProfesion() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getNombreEmpresa() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getCargoEmpresa() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTipoContrato() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDia() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getMes() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getAnio() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 4 caracteres.' }
        ];
    }
    getPais() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDepartamento() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getMunicipio() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDireccion() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTelefono() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 8 caracteres.' }
        ];
    }
    // COSTA RICA
    setRulesCR() {
        this.PERSONA_FISICA_CON_NEGOCIO_PROPIO = '504';
        this.ASALARIADO_CR = '501';
        this.RELIGIOSO_CR = '501';
        this.SECTOR_PUBLICO = '501';
        this.PROFESIONALES = '505';
        this.INDEPENDIENTES = '505';
        this.BANCA_PATRIMONIAL = '506';
        this.RENTISTA_CAPITAL = '506';
        this.PENSIONADO = '503';
        this.JUBILADO_CR = '503';
        this.AMA_DE_CASA_CR = '502';
        this.ESTUDIANTE_CR = '502';
        this.catalogoCR = {
            ACTIVIDAD_COMERCIAL: [],
            ACTIVIDAD_ECONOMICA: [],
            PROFESION: [],
            PROVINCIAS: [],
            CANTON: [],
            CANTON_PROV_PAIS: [],
            OCUPACION: []
        };
        this.erroresCR = {
            actividadComercial: [
                { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
            ],
            actividadEconomica: [
                { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
            ],
            profesion: [
                { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
            ],
            nombreEmpresa: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
            ],
            dia: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
                { type: this.rules.errorTypeSelect, label: 'Selecciona un dia de la lista preaprobada.' }
            ],
            mes: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
                { type: this.rules.errorTypeSelect, label: 'Selecciona un mes de la lista preaprobada.' }
            ],
            anio: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
                { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 4 digitos.' }
            ],
            cantidadEmpleados: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
            ],
            direccionExacta: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
            ],
            provincia: [
                { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
            ],
            canton: [
                { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
            ],
            distrito: [
                { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
            ],
            origenFondos: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
            ],
            personaDeQuienDepende: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
            ],
            identificacionPersonaDeQuienDepende: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
                { type: this.rules.errorTypePattern, label: 'La información no cumple con el formato "00-0000-0000".' }
            ],
            ingresoEnDolares: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
                { type: this.rules.errorTypePattern, label: 'no debe contener mas de 18 digitos enteros y no más de 2 decimales.' }
            ],
            cargoEmpresa: [
                { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
            ],
            telefonoOficina: [
                { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
            ]
        };
        this.getCatalogoCR('ACTIVIDAD_COMERCIAL');
        this.getCatalogoCR('ACTIVIDAD_ECONOMICA');
        this.getCatalogoCR('PROFESION');
        this.getCatalogoCR('PROVINCIAS');
        this.getCatalogoCR('CANTON');
        this.getCatalogoCR('CANTON_PROV_PAIS');
        this.getCatalogoCR('OCUPACION');
        this.setRules({
            actividadComercial: ['', [
                    this.rules.validationForSelect(() => this.catalogoCR.ACTIVIDAD_COMERCIAL, (control) => false),
                    this.rules.resetMyCallbackValidation([
                        'actividadEconomica',
                        'profesion',
                        'nombreEmpresa',
                        'desdeCuandoOperaEmpresa',
                        'cantidadEmpleados',
                        'direccion',
                        'origenFondos',
                        'fechaPensionado',
                        'personaDeQuienDepende',
                        'identificacionPersonaDeQuienDepende',
                        'ingresoEnDolares',
                        'actividadEconomicaDeQuienDepende',
                        'cargoEmpresa',
                        'desdeCuandoTrabajaEnLaEmpresa',
                        'telefonoOficina'
                    ])
                ]],
            actividadEconomica: ['', [
                    this.rules.validationForSelect(() => this.catalogoCR.ACTIVIDAD_ECONOMICA.filter(this.filtroCR((this.formulario.get('actividadComercial') || { value: '' }).value)), (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        return control.parent.get('actividadComercial').value !== this.PERSONA_FISICA_CON_NEGOCIO_PROPIO;
                    })
                ]],
            profesion: ['', [
                    this.rules.validationForSelect(() => this.catalogoCR.PROFESION, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        return control.parent.get('actividadComercial').value !== this.PERSONA_FISICA_CON_NEGOCIO_PROPIO &&
                            control.parent.get('actividadComercial').value !== this.INDEPENDIENTES &&
                            control.parent.get('actividadComercial').value !== this.PROFESIONALES;
                    })
                ]],
            nombreEmpresa: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('actividadComercial').value === this.PERSONA_FISICA_CON_NEGOCIO_PROPIO ||
                            control.parent.get('actividadComercial').value === this.INDEPENDIENTES ||
                            control.parent.get('actividadComercial').value === this.PROFESIONALES ||
                            control.parent.get('actividadComercial').value === this.ASALARIADO_CR ||
                            control.parent.get('actividadComercial').value === this.RELIGIOSO_CR ||
                            control.parent.get('actividadComercial').value === this.SECTOR_PUBLICO) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            cargoEmpresa: ['', [
                    this.rules.validationForSelect(() => this.catalogoCR.OCUPACION, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        return control.parent.get('actividadComercial').value !== this.ASALARIADO_CR &&
                            control.parent.get('actividadComercial').value !== this.RELIGIOSO_CR &&
                            control.parent.get('actividadComercial').value !== this.SECTOR_PUBLICO;
                    })
                ]],
            telefonoOficina: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('actividadComercial').value === this.ASALARIADO_CR ||
                            control.parent.get('actividadComercial').value === this.RELIGIOSO_CR ||
                            control.parent.get('actividadComercial').value === this.SECTOR_PUBLICO) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            desdeCuandoTrabajaEnLaEmpresa: this.formBuilder.group({
                dia: ['', [
                        this.rules.validationForSelect(() => 
                        // tslint:disable-next-line: max-line-length
                        (this.dias[this.formulario.get('desdeCuandoTrabajaEnLaEmpresa').get('mes').value] || [])[this.esBisiesto(this.formulario.get('desdeCuandoTrabajaEnLaEmpresa').get('anio').value)] || [], (control) => {
                            if (!control.parent) {
                                return true;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.ASALARIADO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.RELIGIOSO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.SECTOR_PUBLICO;
                        })
                    ]],
                mes: ['', [
                        this.rules.validationForSelect(() => this.meses, (control) => {
                            if (!control.parent) {
                                return true;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.ASALARIADO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.RELIGIOSO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.SECTOR_PUBLICO;
                        })
                    ]],
                anio: ['', [
                        this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                            if (!control.parent) {
                                return false;
                            }
                            if (control.parent.parent.get('actividadComercial').value === this.ASALARIADO_CR ||
                                control.parent.parent.get('actividadComercial').value === this.RELIGIOSO_CR ||
                                control.parent.parent.get('actividadComercial').value === this.SECTOR_PUBLICO) {
                                return control.value !== '';
                            }
                            return true;
                        }),
                        this.rules.validationForMinLength(4)
                    ]]
            }),
            desdeCuandoOperaEmpresa: this.formBuilder.group({
                dia: ['', [
                        this.rules.validationForSelect(() => 
                        // tslint:disable-next-line: max-line-length
                        (this.dias[this.formulario.get('desdeCuandoOperaEmpresa').get('mes').value] || [])[this.esBisiesto(this.formulario.get('desdeCuandoOperaEmpresa').get('anio').value)] || [], (control) => {
                            if (!control.parent) {
                                return true;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.PERSONA_FISICA_CON_NEGOCIO_PROPIO;
                        })
                    ]],
                mes: ['', [
                        this.rules.validationForSelect(() => this.meses, (control) => {
                            if (!control.parent) {
                                return true;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.PERSONA_FISICA_CON_NEGOCIO_PROPIO;
                        })
                    ]],
                anio: ['', [
                        this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                            if (!control.parent) {
                                return false;
                            }
                            if (control.parent.parent.get('actividadComercial').value === this.PERSONA_FISICA_CON_NEGOCIO_PROPIO) {
                                return control.value !== '';
                            }
                            return true;
                        }),
                        this.rules.validationForMinLength(4)
                    ]]
            }),
            fechaPensionado: this.formBuilder.group({
                dia: ['', [
                        this.rules.validationForSelect(() => 
                        // tslint:disable-next-line: max-line-length
                        (this.dias[this.formulario.get('fechaPensionado').get('mes').value] || [])[this.esBisiesto(this.formulario.get('fechaPensionado').get('anio').value)] || [], (control) => {
                            if (!control.parent) {
                                return true;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.JUBILADO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.PENSIONADO;
                        })
                    ]],
                mes: ['', [
                        this.rules.validationForSelect(() => this.meses, (control) => {
                            if (!control.parent) {
                                return true;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.JUBILADO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.PENSIONADO;
                        })
                    ]],
                anio: ['', [
                        this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                            if (!control.parent) {
                                return false;
                            }
                            if (control.parent.parent.get('actividadComercial').value === this.JUBILADO_CR ||
                                control.parent.parent.get('actividadComercial').value === this.PENSIONADO) {
                                return control.value !== '';
                            }
                            return true;
                        }),
                        this.rules.validationForMinLength(4)
                    ]]
            }),
            cantidadEmpleados: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('actividadComercial').value === this.PERSONA_FISICA_CON_NEGOCIO_PROPIO) {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    this.rules.validationForMaxLength(5),
                    this.rules.validationForMinLength(1)
                ]],
            direccion: this.formBuilder.group({
                provincia: ['', [
                        this.rules.validationForSelect(() => this.catalogoCR.PROVINCIAS, (control) => {
                            if (!control.parent) {
                                return false;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.PERSONA_FISICA_CON_NEGOCIO_PROPIO &&
                                control.parent.parent.get('actividadComercial').value !== this.ASALARIADO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.RELIGIOSO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.SECTOR_PUBLICO;
                        })
                    ]],
                canton: ['', [
                        this.rules.validationForSelect(() => this.catalogoCR.CANTON, (control) => {
                            if (!control.parent) {
                                return false;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.PERSONA_FISICA_CON_NEGOCIO_PROPIO &&
                                control.parent.parent.get('actividadComercial').value !== this.ASALARIADO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.RELIGIOSO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.SECTOR_PUBLICO;
                        })
                    ]],
                distrito: ['', [
                        this.rules.validationForSelect(() => this.catalogoCR.CANTON_PROV_PAIS, (control) => {
                            if (!control.parent) {
                                return false;
                            }
                            return control.parent.parent.get('actividadComercial').value !== this.PERSONA_FISICA_CON_NEGOCIO_PROPIO &&
                                control.parent.parent.get('actividadComercial').value !== this.ASALARIADO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.RELIGIOSO_CR &&
                                control.parent.parent.get('actividadComercial').value !== this.SECTOR_PUBLICO;
                        })
                    ]],
                direccionExacta: ['', [
                        this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                            if (!control.parent) {
                                return false;
                            }
                            if (control.parent.parent.get('actividadComercial').value === this.PERSONA_FISICA_CON_NEGOCIO_PROPIO ||
                                control.parent.parent.get('actividadComercial').value === this.ASALARIADO_CR ||
                                control.parent.parent.get('actividadComercial').value === this.RELIGIOSO_CR ||
                                control.parent.parent.get('actividadComercial').value === this.SECTOR_PUBLICO) {
                                return control.value !== '';
                            }
                            return true;
                        }),
                        this.rules.validationForMaxLength(120),
                        this.rules.validationForMinLength(1)
                    ]]
            }),
            origenFondos: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('actividadComercial').value === this.BANCA_PATRIMONIAL ||
                            control.parent.get('actividadComercial').value === this.RENTISTA_CAPITAL) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            personaDeQuienDepende: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('actividadComercial').value === this.ESTUDIANTE_CR ||
                            control.parent.get('actividadComercial').value === this.AMA_DE_CASA_CR ||
                            control.parent.get('actividadComercial').value === '502') {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            identificacionPersonaDeQuienDepende: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('actividadComercial').value === this.ESTUDIANTE_CR ||
                            control.parent.get('actividadComercial').value === this.AMA_DE_CASA_CR ||
                            control.parent.get('actividadComercial').value === '502') {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    this.rules.validationForPattern(/^[0-9][0-9]\-[0-9][0-9][0-9][0-9]\-[0-9][0-9][0-9][0-9]$/)
                ]],
            ingresoEnDolares: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        if (control.parent.get('actividadComercial').value === this.ESTUDIANTE_CR ||
                            control.parent.get('actividadComercial').value === this.AMA_DE_CASA_CR ||
                            control.parent.get('actividadComercial').value === '502') {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    this.rules.validationForPattern(/^[1-9][0-9]{0,17}(\.[0-9]{1,2})?$/)
                ]],
            actividadEconomicaDeQuienDepende: ['', [
                    this.rules.validationForSelect(() => this.catalogoCR.ACTIVIDAD_ECONOMICA, (control) => {
                        if (!control.parent) {
                            return false;
                        }
                        return control.parent.get('actividadComercial').value !== this.ESTUDIANTE_CR &&
                            control.parent.get('actividadComercial').value !== this.AMA_DE_CASA_CR &&
                            control.parent.get('actividadComercial').value !== '502';
                    }),
                ]],
        });
    }
    filterCanton(provincia) {
        return (item) => {
            return item.code_provincia === provincia;
        };
    }
    filterCantonProvincia(provincia, canton) {
        return (item) => {
            return item.code_provincia === provincia && item.code_canton === canton;
        };
    }
    getCatalogoCR(KEY) {
        this.catalogoCR[KEY] = [];
        this.catalogo.data(KEY, this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.catalogoCR[KEY] = response ? response : [];
        });
    }
    filtroCR(value) {
        return (item) => item.value.startsWith(value);
    }
    // PANAMA
    setRulesPA() {
        this.SERTOR_PUBLICO = '01';
        this.RELIGIOSO = '01';
        this.ASALARIADO = '01';
        this.INDEPENDIENTE = '05';
        this.SOCIO = '05';
        this.RENTISTA_DE_CAPITAL = '05';
        this.PERSONA_NATURAL_CON_NEGOCIO = '04';
        this.PENCIONADO = '03';
        this.JUBILADO = '03';
        this.AMA_DE_CASA = '02';
        this.ESTUDIANTE = '02';
        this.catalogoPA = {
            ACTIVIDADES_COMERCIALES: [],
            ACTIVIDADES_PRINCIPALES: [],
            ACTIVIDADES_CIIU: [],
            PROFESIONES: [],
            PAISES: [],
            PROVINCIAS: [],
            DISTRITOS: [],
            CORREGUIMIENTO: [],
            CARGOS: []
        };
        this.getCatalogoPA('ACTIVIDADES_COMERCIALES');
        this.getCatalogoPA('ACTIVIDADES_PRINCIPALES');
        this.getCatalogoPA('ACTIVIDADES_CIIU');
        this.getCatalogoPA('PROFESIONES');
        this.getCatalogoPA('PAISES');
        this.getCatalogoPA('PROVINCIAS');
        this.getCatalogoPA('DISTRITOS');
        this.getCatalogoPA('CORREGUIMIENTO');
        this.getCatalogoPA('CARGOS');
        this.setRules({
            actividadComercial: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.ACTIVIDADES_COMERCIALES, (control) => false),
                    this.rules.resetMyCallbackValidation([
                        'actividadEconomica',
                        'personaSostiene',
                        'entidadPensiono',
                        'diaPensionado',
                        'mesPensionado',
                        'anioPensionado',
                        'actividadPrincipal',
                        'nombreEmpresa',
                        'paisEmpresa',
                        'provinciaEmpresa',
                        'distritoEmpresa',
                        'corregimientoEmpresa',
                        'direccionEmpresa',
                        'telefonoOficina',
                        'documento'
                    ])
                ]],
            actividadEconomica: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.ACTIVIDADES_CIIU, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO ||
                            ciiu === this.PENCIONADO ||
                            ciiu === this.JUBILADO ||
                            ciiu === this.AMA_DE_CASA ||
                            ciiu === this.ESTUDIANTE) {
                            return false;
                        }
                        return true;
                    })
                ]],
            personaSostiene: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.AMA_DE_CASA || ciiu === this.ESTUDIANTE) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            entidadPensiono: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.PENCIONADO || ciiu === this.JUBILADO) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            diaPensionado: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requirePensionadPA())
                ]],
            mesPensionado: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requirePensionadPA())
                ]],
            anioPensionado: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requirePensionadPA()),
                    this.rules.validationForMinLength(4)
                ]],
            actividadPrincipal: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.ACTIVIDADES_PRINCIPALES, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) {
                            return false;
                        }
                        return true;
                    })
                ]],
            nombreEmpresa: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            cargoEmpresa: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.CARGOS, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO) {
                            return false;
                        }
                        return true;
                    })
                ]],
            paisEmpresa: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.PAISES, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) {
                            return false;
                        }
                        return true;
                    })
                ]],
            provinciaEmpresa: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.PROVINCIAS, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if ((ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) &&
                            (control.parent.get('paisEmpresa').value === 'PA' ||
                                control.parent.get('paisEmpresa').value === 'CO')) {
                            return false;
                        }
                        return true;
                    })
                ]],
            distritoEmpresa: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.DISTRITOS, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if ((ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) &&
                            (control.parent.get('paisEmpresa').value === 'PA' ||
                                control.parent.get('paisEmpresa').value === 'CO')) {
                            return false;
                        }
                        return true;
                    })
                ]],
            corregimientoEmpresa: ['', [
                    this.rules.validationForSelect(() => this.catalogoPA.CORREGUIMIENTO, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if ((ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) &&
                            (control.parent.get('paisEmpresa').value === 'PA' ||
                                control.parent.get('paisEmpresa').value === 'CO')) {
                            return false;
                        }
                        return true;
                    })
                ]],
            direccionEmpresa: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if ((ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) &&
                            (control.parent.get('paisEmpresa').value === 'PA' ||
                                control.parent.get('paisEmpresa').value === 'CO')) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            telefonoOficina: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO ||
                            ciiu === this.INDEPENDIENTE ||
                            ciiu === this.SOCIO ||
                            ciiu === this.RENTISTA_DE_CAPITAL ||
                            ciiu === this.PERSONA_NATURAL_CON_NEGOCIO) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            documento: [null, [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        const ciiu = control.parent.get('actividadComercial').value;
                        if (ciiu === this.RELIGIOSO ||
                            ciiu === this.SERTOR_PUBLICO ||
                            ciiu === this.ASALARIADO) {
                            return control.value !== null && control.value !== undefined;
                        }
                        return true;
                    })
                ]]
        });
        this.erroresPA = {
            actividadComercial: this.getActividadComercial(),
            actividadEconomica: this.getActividaEconomica(),
            personaSostiene: this.getPersonaSostiene(),
            entidadPensiono: this.getEntidadPenciono(),
            diaPensionado: this.getDia(),
            mesPensionado: this.getMes(),
            anioPensionado: this.getAnio(),
            actividadPrincipal: this.getActividadPrincipal(),
            nombreEmpresa: this.getNombreEmpresa(),
            cargoEmpresa: this.getCargoEmpresaPA(),
            paisEmpresa: this.getPaisPA(),
            provinciaEmpresa: this.getProvinciaPA(),
            distritoEmpresa: this.getDistritoPA(),
            corregimientoEmpresa: this.getCorregimientoPA(),
            direccionEmpresa: this.getDireccionEmpresa(),
            telefonoOficina: this.getTelefonoOficinaPA(),
            documento: this.getDocumentoPA()
        };
    }
    getCatalogoPA(KEY) {
        this.catalogoPA[KEY] = [];
        this.catalogo.data(KEY, this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.catalogoPA[KEY] = response ? response : [];
        });
    }
    setValueG(item) {
        return item.value;
    }
    setLabelG(item) {
        return item.label;
    }
    filtroG(item) {
        return item.label;
    }
    requirePensionadPA() {
        return (control) => {
            if (!control.parent) {
                return true;
            }
            if (control.parent.get('actividadComercial').value === this.PENCIONADO ||
                control.parent.get('actividadComercial').value === this.JUBILADO) {
                return control.value !== '';
            }
            return true;
        };
    }
    filterByActividadComercial() {
        return (item) => item.actividad_comercial === this.formulario.get('actividadComercial').value;
    }
    filtroPorPais() {
        return (item) => item.pais === this.formulario.get('paisEmpresa').value;
    }
    filtroPorProvincia() {
        return (item) => item.provincia === parseInt(this.formulario.get('provinciaEmpresa').value, 10) + '';
    }
    filtroPorDistrito() {
        return (item) => {
            console.log(item.distrito, this.formulario.get('distritoEmpresa').value);
            return item.distrito === parseInt(this.formulario.get('distritoEmpresa').value, 10) + '';
        };
    }
    getActividadComercial() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getActividaEconomica() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getPersonaSostiene() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getEntidadPenciono() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getActividadPrincipal() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCargoEmpresaPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getPaisPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getProvinciaPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDistritoPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCorregimientoPA() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDireccionEmpresa() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTelefonoOficinaPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getDocumentoPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    // HONDURAS
    setRulesHN() {
    }
    // GENERAL
    getCatalogo(KEY) {
        this.catalogoSV[KEY] = [];
        this.catalogo.data(KEY, this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_3__["LENGUAJE"]])).subscribe(response => {
            this.catalogoSV[KEY] = response ? response : [];
        });
    }
    esBisiesto(year) {
        if (((parseInt(year, 10) % 4 === 0) && (parseInt(year, 10) % 100 !== 0)) || (parseInt(year, 10) % 400 === 0)) {
            return 'true';
        }
        return 'false';
    }
    setFecha() {
        this.meses = [
            { label: 'Enero', value: '01' },
            { label: 'Febrero', value: '02' },
            { label: 'Marzo', value: '03' },
            { label: 'Abril', value: '04' },
            { label: 'Mayo', value: '05' },
            { label: 'Junio', value: '06' },
            { label: 'Julio', value: '07' },
            { label: 'Agosto', value: '08' },
            { label: 'Septiembre', value: '09' },
            { label: 'Octubre', value: '10' },
            { label: 'Noviembre', value: '11' },
            { label: 'Diciembre', value: '12' }
        ];
        const dias31 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' },
            { value: '29', label: '29' },
            { value: '30', label: '30' },
            { value: '31', label: '31' },
        ];
        const dias30 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' },
            { value: '29', label: '29' },
            { value: '30', label: '30' }
        ];
        const dias29 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' },
            { value: '29', label: '29' }
        ];
        const dias28 = [
            { value: '01', label: '01' },
            { value: '02', label: '02' },
            { value: '03', label: '03' },
            { value: '04', label: '04' },
            { value: '05', label: '05' },
            { value: '06', label: '06' },
            { value: '07', label: '07' },
            { value: '08', label: '08' },
            { value: '09', label: '09' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' }
        ];
        this.dias = {
            '01': { true: dias31, false: dias31 },
            '02': { true: dias29, false: dias28 },
            '03': { true: dias31, false: dias31 },
            '04': { true: dias30, false: dias30 },
            '05': { true: dias31, false: dias31 },
            '06': { true: dias30, false: dias30 },
            '07': { true: dias31, false: dias31 },
            '08': { true: dias30, false: dias30 },
            '09': { true: dias30, false: dias30 },
            // tslint:disable-next-line: object-literal-key-quotes
            '10': { true: dias31, false: dias31 }, '11': { true: dias30, false: dias30 }, '12': { true: dias31, false: dias31 }
        };
    }
    getFile() {
        this.parentRef.nativeElement.click();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], Vin003Component.prototype, "parentRef", void 0);
Vin003Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin003',
        template: __webpack_require__(/*! ./vin003.component.html */ "./src/app/modules/cam/vinculacion/vin003/vin003.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].ShadowDom,
        styles: [__webpack_require__(/*! ./vin003.component.scss */ "./src/app/modules/cam/vinculacion/vin003/vin003.component.scss"), __webpack_require__(/*! ../../../../../assets/cam/scss/components/vinculacion/_vin003.scss */ "./src/assets/cam/scss/components/vinculacion/_vin003.scss")]
    })
], Vin003Component);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin004/vin004.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin004/vin004.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n\r\n\r\n\r\n<section class=\"container\">\r\n\r\n  <!-- Back button -->\r\n  <app-button-back class=\"backButton\"></app-button-back>\r\n  <!-- End -->\r\n\r\n  <!-- Form container -->\r\n  <div class=\"formContainer\">\r\n    <!-- Initial title -->\r\n    <div class=\"initialTitle\">\r\n      <h3>Información Financiera</h3>\r\n      <app-form-wizard class=\"initialTitle__stepsCounter\" [steps]=\"4\" [currentStep]=\"3\"></app-form-wizard>\r\n      <h5><b>{{ payload?.nombre || 'XXXXXXXXXXX' }}</b></h5>\r\n    </div>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Panamá -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]='formulario' *ngIf='pais === \"PA\"'>\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su ingreso mensual?\r\n          </label>\r\n          <input class=\"formGroup__input\"\r\n            formControlName='ingresoMensual'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"ingresoMensual\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='ingresoMensualErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Tiene otra fuente de ingresos?\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input type=\"checkbox\" class=\"cambiar tamano\" formControlName='otraFuenteIngresos'/>\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('otraFuenteIngresos').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuánto suman estos ingresos?\r\n          </label>\r\n          <input class=\"formGroup__input\"\r\n            formControlName='otrosIngresos'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"otrosIngresos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='otrosIngresosErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el total de su ingreso mensual?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='totalIngresoMensual'\r\n            [value]=\"suma('otrosIngresos',suma('ingresoMensual', 0))\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"totalIngresoMensual\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='totalIngresoMensualErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('otraFuenteIngresos').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Por favor cuéntenos el origen de sus ingresos\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='origenIngresos'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890qwertyuioplkjhgfdsazxcvbnmQWERT YUIOPLKJHGFDSAZXCVBNM\"'\r\n            [ccMaxLength]='40'/>\r\n          <app-labels-error\r\n            [fControlName]='\"origenIngresos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='origenIngresosErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Rigth column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el total de sus gastos mensuales?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='gastosMensuales'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"gastosMensuales\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='gastosMensualesErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el valor total de sus bienes?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='valorBienes'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"valorBienes\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='valorBienesErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el valor total de sus deudas?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='valorDeudas'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"valorDeudas\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='valorDeudasErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el país de origen de sus ingresos?\r\n          </label>\r\n          <select class=\"formGroup__input formGroup__input--select\"\r\n            formControlName='pais'>\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of paises\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"pais\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='paisesErroresPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container El Salvador -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]='formulario' *ngIf='pais === \"SV\"'>\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su ingreso mensual?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            controlName='totalIngresoMensual'\r\n            [value]=\"formulario.get('totalIngresoMensual').value || 0\"\r\n            disabled/>\r\n          <app-labels-error\r\n            [fControlName]='\"totalIngresoMensual\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='totalIngresoMensualErroresSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            De sus ingresos mensuales, <br>\r\n            ¿Cuánto suman los ingresos fijos?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='ingresoMensualFijos'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            (change)=\"onChange()\"\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"ingresoMensualFijos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='ingresoMensualFijosErroresSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuánto suman los ingresos variables?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='ingresoMensualVariables'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            (change)=\"onChange()\"\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"ingresoMensualVariables\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='ingresoMensualVariablesErroresSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Tiene otra fuente de ingresos?\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input type=\"checkbox\" class=\"cambiar tamano\" formControlName='otraFuenteIngresos'/>\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('otraFuenteIngresos').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuánto suman estos ingresos?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='otrosIngresos'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"otrosIngresos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='otrosIngresosErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Rigth column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('otraFuenteIngresos').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Por favor cuéntenos el origen de sus otros ingresos\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='origenIngresos'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"origenIngresos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='origenIngresosErroresSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el total de sus gastos mensuales?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='gastosMensuales'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"gastosMensuales\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='gastosMensualesErroresSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el valor total de sus bienes?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='valorBienes'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"valorBienes\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='valorBienesErroresSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el valor total de sus deudas?\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='valorDeudas'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='15'/>\r\n          <app-labels-error\r\n            [fControlName]='\"valorDeudas\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='valorDeudasErrosErroresSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Honduras -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]='formulario' *ngIf='pais === \"HN\"'>\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuanto son sus ingresos mensuales en lempiras?\r\n          </label>\r\n          <input class=\"formGroup__input\"\r\n            formControlName='ingresos'\r\n            [ccRestrict]='\"1234567890\"'/>\r\n            <app-labels-error\r\n                [fControlName]='\"ingresos\"'\r\n                [form]='formulario'\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='ingresosErrores'\r\n            ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Seleccione el rango en el que se encuentran el total de sus activos\r\n          </label>\r\n          <select class=\"formGroup__input formGroup__input--select\"\r\n            formControlName='activos'>\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of rangos.activos\" [value]=\"item.value\" [label]=\"item.label\"> </option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"activos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='activosErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Seleccione el rango en el que se encuentran el total de sus pasivos\r\n          </label>\r\n          <select class=\"formGroup__input formGroup__input--select\"\r\n            formControlName='pasivos'>\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of rangos.pasivos\" [value]=\"item.value\" [label]=\"item.label\"> </option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"pasivos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='pasivosErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Seleccione el rango en el que se encuentran el total de sus egresos\r\n          </label>\r\n          <select class=\"formGroup__input formGroup__input--select\"\r\n            formControlName='egresos'>\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of rangos.egresos\" [value]=\"item.value\" [label]=\"item.label\"> </option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"egresos\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='egresosErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Costa Rica -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]='formulario'  *ngIf='pais === \"CR\"'>\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es su ingreso mensual en dólares?\r\n            </label>\r\n            <input\r\n              class=\"formGroup__input\"\r\n              formControlName='ingresoMensual'\r\n              [form]='formulario'\r\n              [ccRestrict]='\"1234567890\"'\r\n              [ccMaxLength]='18'/>\r\n              <app-labels-error\r\n                [fControlName]='\"ingresoMensual\"'\r\n                [form]='formulario'\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='ingresoMensualErrores'\r\n              ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n                ¿Tiene otra fuente de ingresos?\r\n            </label>\r\n            <div class=\"contCheckboxSiNo\">\r\n                <label><input type=\"checkbox\" class=\"cambiar tamano\" formControlName='otraFuenteIngresos'/>\r\n                    <div class=\"switch\">\r\n                        <span></span>\r\n                    </div>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('otraFuenteIngresos').value === true\">\r\n            <label for=\"\" class=\"formGroup__label\" >\r\n                ¿Cuánto suman sus otros ingresos en dólares?\r\n            </label>\r\n            <input class=\"formGroup__input\"\r\n              formControlName='otrosIngresos'\r\n              [form]='formulario'\r\n              [ccRestrict]='\"1234567890\"'\r\n              [ccMaxLength]='18'/>\r\n            <app-labels-error\r\n              [fControlName]='\"otrosIngresos\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='otrosIngresosErrores'\r\n            ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('otraFuenteIngresos').value === true\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n                Detalle de donde vienen los otros ingresos\r\n            </label>\r\n            <input type=\"text\" class=\"formGroup__input\"\r\n              formControlName='origenIngresos'\r\n              [form]='formulario'\r\n              [ccRestrict]='\"1234567890qwertyuioplkjhgfdsazxcvbnmQWERT YUIOPLKJHGFDSAZXCVBNM\"'\r\n              [ccMaxLength]='50'/>\r\n            <app-labels-error\r\n              [fControlName]='\"origenIngresos\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='origenIngresosErrores'\r\n            ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n                ¿Cuál es el total de su ingreso mensual?\r\n            </label>\r\n            <input type=\"text\" class=\"formGroup__input\"\r\n              formControlName='totalIngresoMensual'\r\n              [value]=\"suma('otrosIngresos',suma('ingresoMensual', 0))\"/>\r\n            <app-labels-error\r\n              [fControlName]='\"totalIngresoMensual\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='totalIngresoMensualErrores'\r\n            ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Rigth column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Por favor cuéntenos el origen de sus ingresos\r\n          </label>\r\n          <input type=\"text\" class=\"formGroup__input\"\r\n            formControlName='trasladar'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890qwertyuioplkjhgfdsazxcvbnmQWERTY UIOPLKJHGFDSAZXCVBNM\"'\r\n            [ccMaxLength]='50'/>\r\n          <app-labels-error\r\n            [fControlName]='\"trasladar\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='trasladarErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el total de sus gastos mensuales en dólares?\r\n          </label>\r\n          <input class=\"formGroup__input\"\r\n            formControlName='gastosMensuales'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='18'/>\r\n          <app-labels-error\r\n            [fControlName]='\"gastosMensuales\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='gastosMensualesErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el valor total de sus bienes en dólares?\r\n          </label>\r\n          <input class=\"formGroup__input\"\r\n            formControlName='valorBienes'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='18'/>\r\n          <app-labels-error\r\n            [fControlName]='\"valorBienes\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='valorBienesErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el valor total de sus deudas en dólares?\r\n          </label>\r\n          <input class=\"formGroup__input\"\r\n            formControlName='valorDeudas'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890\"'\r\n            [ccMaxLength]='18'/>\r\n          <app-labels-error\r\n            [fControlName]='\"valorDeudas\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='valorDeudasErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Describa el propósito y las razones por las cuales ha decidido establecer la(s) cuenta(s) o servicio(s) en Grupo Financiero Davivienda:\r\n          </label>\r\n          <input class=\"formGroup__input\"\r\n            formControlName='proposito'\r\n            [form]='formulario'\r\n            [ccRestrict]='\"1234567890qwertyuioplkjhgfdsazxcvbnmQWERTY UIOPLKJHGFDSAZXCVBNM\"'\r\n            [ccMaxLength]='50'/>\r\n          <app-labels-error\r\n            [fControlName]='\"proposito\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='propositoErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Button Container -->\r\n    <!-- <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onCall(getDataToPayload())'></app-button-continue> -->\r\n    <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onRedirect(\"VIN005\")'></app-button-continue>\r\n    <!-- End -->\r\n  </div>\r\n  <!-- End -->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin004/vin004.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin004/vin004.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid.ng-touched {\n  border-color: #ed1c27 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vdmluY3VsYWNpb24vdmluMDA0L0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFwcFxcbW9kdWxlc1xcY2FtXFx2aW5jdWxhY2lvblxcdmluMDA0XFx2aW4wMDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL3ZpbmN1bGFjaW9uL3ZpbjAwNC92aW4wMDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZC5uZy10b3VjaGVkICB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin004/vin004.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin004/vin004.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin004Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin004Component", function() { return Vin004Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");
/* harmony import */ var src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/common/components/encaptulation */ "./src/app/modules/common/components/encaptulation.ts");
/* harmony import */ var src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/common/CONST */ "./src/app/modules/common/CONST.ts");





let Vin004Component = class Vin004Component extends src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    ngOnInit() {
        this.countrieRules = {
            CR: () => this.setRulesCR(),
            PA: () => this.setRulesPA(),
            SV: () => this.setRulesSV(),
            HN: () => this.setRulesHN()
        };
        if (this.countrieRules[this.pais]) {
            this.countrieRules[this.pais]();
        }
    }
    onSelectStep(step) {
        console.log(step);
    }
    ngOnDestroy() {
        // throw new Error('Method not implemented.');
    }
    getDataToPayload(data) {
        this.disableButton = true;
        return () => ({});
    }
    getDataToBackButton(data) {
        // throw new Error('Method not implemented.');
        return () => ({});
    }
    setRulesCR() {
        this.setRules({
            ingresoMensual: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForOnlyNumbers(),
                ]],
            otraFuenteIngresos: ['', [
                    this.rules.resetMyCallbackValidation([
                        'otrosIngresos',
                        'origenIngresos'
                    ])
                ]],
            otrosIngresos: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (this.formulario.get('otraFuenteIngresos').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            origenIngresos: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!this.formulario) {
                            return false;
                        }
                        if (this.formulario.get('otraFuenteIngresos').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            totalIngresoMensual: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired()
                ]],
            trasladar: ['', [
                    this.rules.validationForRequired(),
                ]],
            gastosMensuales: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            valorBienes: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            valorDeudas: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            proposito: ['', [
                    this.rules.validationForRequired()
                ]],
        });
        this.formulario.get('totalIngresoMensual').disable();
        this.ingresoMensualErrores = this.getIngresoMensualErrores();
        this.otrosIngresosErrores = this.getOtrosIngresosErrores();
        this.origenIngresosErrores = this.getOrigenIngresosErrores();
        this.totalIngresoMensualErrores = this.getTotalIngresoMensualErrores();
        this.trasladarErrores = this.getTrasladarErrores();
        this.gastosMensualesErrores = this.getGastosMensualesErrores();
        this.valorBienesErrores = this.getValorBienesErrores();
        this.valorDeudasErrores = this.getValorDeudasErrores();
        this.propositoErrores = this.getPropositoErrores();
    }
    setRulesPA() {
        this.getPaises();
        this.setRules({
            ingresoMensual: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForOnlyNumbers(),
                ]],
            otraFuenteIngresos: ['', [
                    this.rules.resetMyCallbackValidation([
                        'otrosIngresos',
                        'origenIngresos'
                    ])
                ]],
            otrosIngresos: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (this.formulario.get('otraFuenteIngresos').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            totalIngresoMensual: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired()
                ]],
            origenIngresos: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!this.formulario) {
                            return false;
                        }
                        if (this.formulario.get('otraFuenteIngresos').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            gastosMensuales: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            valorBienes: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            valorDeudas: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            pais: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForSelect(() => this.paises)
                ]]
        });
        this.formulario.get('totalIngresoMensual').disable();
        this.ingresoMensualErroresPA = this.getIngresoMensualErroresPA();
        this.otrosIngresosErroresPA = this.getOtrosIngresosErroresPA();
        this.origenIngresosErroresPA = this.getOrigenIngresosErroresPA();
        this.totalIngresoMensualErroresPA = this.getTotalIngresoMensualErroresPA();
        this.gastosMensualesErroresPA = this.getGastosMensualesErroresPA();
        this.valorBienesErroresPA = this.getValorBienesErroresPA();
        this.valorDeudasErroresPA = this.getValorDeudasErroresPA();
        this.paisesErroresPA = this.getPaisesErroresPA();
    }
    setRulesSV() {
        this.setRules({
            totalIngresoMensual: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                    this.rules.validationForMinNumber(10)
                ]],
            ingresoMensualFijos: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForOnlyNumbers(),
                ]],
            ingresoMensualVariables: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForOnlyNumbers(),
                ]],
            otraFuenteIngresos: ['', [
                    this.rules.resetMyCallbackValidation([
                        'otrosIngresos',
                        'origenIngresos'
                    ])
                ]],
            otrosIngresos: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (this.formulario.get('otraFuenteIngresos').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            origenIngresos: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!this.formulario) {
                            return false;
                        }
                        if (this.formulario.get('otraFuenteIngresos').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            gastosMensuales: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                    this.rules.validationForMinNumber(10)
                ]],
            valorBienes: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            valorDeudas: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]]
        });
        this.totalIngresoMensualErroresSV = this.getTotalIngresoMensualErroresSV();
        this.ingresoMensualFijosErroresSV = this.getIngresoMensualFijosErroresSV();
        this.ingresoMensualVariablesErroresSV = this.getIngresoMensualVariablesErroresSV();
        this.otrosIngresosErroresSV = this.getOtrosIngresosErroresSV();
        this.origenIngresosErroresSV = this.getOrigenIngresosErroresSV();
        this.gastosMensualesErroresSV = this.getGastosMensualesErroresSV();
        this.valorBienesErroresSV = this.getValorBienesErroresSV();
        this.valorDeudasErrosErroresSV = this.getValorDeudasErrosErroresSV();
    }
    setRulesHN() {
        this.getRangos();
        this.setRules({
            ingresos: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationForRequired(),
                ]],
            activos: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForSelect(() => this.rangos.activos)
                ]],
            pasivos: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForSelect(() => this.rangos.pasivos)
                ]],
            egresos: ['', [
                    this.rules.validationForRequired(),
                    this.rules.validationForSelect(() => this.rangos.egresos)
                ]]
        });
        this.ingresosErrores = this.getIngresosErrores();
        this.activosErrores = this.getActivosErrores();
        this.pasivosErrores = this.getPasivosErrores();
        this.egresosErrores = this.getEgresosErrores();
    }
    // COSTA RICA
    suma(campo1, value) {
        if (!this.formulario) {
            return 0;
        }
        return (parseInt(this.formulario.get(campo1).value, 10) || 0) + value;
    }
    getIngresoMensualErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getOtrosIngresosErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getOrigenIngresosErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTotalIngresoMensualErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getTrasladarErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getGastosMensualesErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getValorBienesErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getValorDeudasErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getPropositoErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    // HONDURAS
    getRangos() {
        this.rangos = { activos: [], pasivos: [], egresos: [] };
        this.catalogo.data('RANGOS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.rangos = response ? response : { activos: [], pasivos: [], egresos: [] };
        });
    }
    getIngresosErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getActivosErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobada.' }
        ];
    }
    getPasivosErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobada.' }
        ];
    }
    getEgresosErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeSelect, label: 'Seleciona un elemento de la lista preaprobada.' }
        ];
    }
    // PANAMA
    getPaises() {
        this.paises = [];
        this.catalogo.data('PAISES', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.paises = response ? response : [];
        });
    }
    getIngresoMensualErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getOtrosIngresosErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getOrigenIngresosErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTotalIngresoMensualErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getPaisesErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprovada.' }
        ];
    }
    getGastosMensualesErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getValorBienesErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getValorDeudasErroresPA() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    // EL SALVADOR
    onChange() {
        this.formulario.get('totalIngresoMensual').markAsDirty();
        this.formulario.get('totalIngresoMensual').markAsTouched();
        this.formulario.get('totalIngresoMensual').setValue(this.suma('ingresoMensualFijos', this.suma('ingresoMensualVariables', 0)));
    }
    getTotalIngresoMensualErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' },
            { type: this.rules.errorTypeMinNumber, label: 'Debe ser un valor superior o igual a 10.00' }
        ];
    }
    getIngresoMensualFijosErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getIngresoMensualVariablesErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getOtrosIngresosErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getOrigenIngresosErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getGastosMensualesErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' },
            { type: this.rules.errorTypeMinNumber, label: 'Debe ser un valor superior o igual a 10.00' }
        ];
    }
    getValorBienesErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getValorDeudasErrosErroresSV() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
};
Vin004Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin004',
        template: __webpack_require__(/*! ./vin004.component.html */ "./src/app/modules/cam/vinculacion/vin004/vin004.component.html"),
        encapsulation: src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].ShadowDom,
        styles: [__webpack_require__(/*! ./vin004.component.scss */ "./src/app/modules/cam/vinculacion/vin004/vin004.component.scss"), __webpack_require__(/*! ../../../../../assets/cam/scss/components/vinculacion/_vin004.scss */ "./src/assets/cam/scss/components/vinculacion/_vin004.scss")]
    })
], Vin004Component);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin005/vin005.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin005/vin005.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n\r\n<section class=\"container\">\r\n\r\n  <!-- Back button -->\r\n  <app-button-back class=\"backButton\"></app-button-back>\r\n  <!-- End -->\r\n\r\n  <!-- Form container -->\r\n  <div class=\"formContainer\">\r\n    <!-- Initial title -->\r\n    <div class=\"initialTitle\">\r\n      <h3>Declaraciones</h3>\r\n      <app-form-wizard class=\"initialTitle__stepsCounter\" [steps]=\"4\" [currentStep]=\"3\"></app-form-wizard>\r\n      <h5><b>{{ payload?.nombre || 'XXXXXXXXXXX' }}</b></h5>\r\n    </div>\r\n    <!-- End -->\r\n    <!-- Form column container Panamá -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]=\"formulario\" *ngIf='pais === \"PA\"'>\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>¿Realiza operaciones internacionales?</b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"operacionesInternacionalesPA\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n      <ng-container *ngIf=\"formulario.get('operacionesInternacionalesPA').value === true\">\r\n        <!-- Center column -->\r\n      <article class=\"formColumn\">\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es el monto estimado en USD que realiza?\r\n            </label>\r\n            <input formControlName=\"montoUsdPA\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n            <app-labels-error\r\n              [fControlName]='\"montoUsdPA\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='montoUsdPAErrores'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              Especifique el tipo de operación que realiza\r\n            </label>\r\n            <select formControlName=\"tipoOperacionPA\" class=\"formGroup__input formGroup__input--select\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of tipoOperacionesPA\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n            </select>\r\n            <app-labels-error\r\n              [fControlName]='\"tipoOperacionPA\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='tipoOperacionPAErrores'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n          <div class=\"formGroup\">\r\n            <label for=\"\" class=\"formGroup__label\">\r\n              ¿Cuál es su país destino de los recursos?\r\n            </label>\r\n            <select formControlName=\"paisDestinoPA\" class=\"formGroup__input formGroup__input--select\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of paisescatPA\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n            </select>\r\n            <app-labels-error\r\n              [fControlName]='\"paisDestinoPA\"'\r\n              [form]='formulario'\r\n              [messageGeneralError]='\"Información Incorrecta:\"'\r\n              [validator]='paisDestinoPAErrores'\r\n            ></app-labels-error>\r\n          </div>\r\n\r\n        </article>\r\n        <!-- End -->\r\n      </ng-container>\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>¿Tiene productos financieros en moneda extranjera? </b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"productosMonedaExtranjeraPA\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <ng-container *ngIf=\"formulario.get('productosMonedaExtranjeraPA').value === true\">\r\n        <ng-container formArrayName=\"productos\" *ngFor=\"let produc of formulario.get('productos').controls; let i = index;\">\r\n          <!-- Left column -->\r\n            <article class=\"formColumn\" [formGroupName]=\"i\">\r\n              <!-- {{ produc.get('tipoProductoPA').errors | json}}\r\n              {{ produc.get('nombreBancoPA').errors | json}}\r\n              {{ produc.get('paisProductoPA').errors | json}}\r\n              {{ produc.get('ciudadProductoPA').errors | json}}\r\n              {{ produc.get('tipoMonedaOperacionPA').errors | json}} -->\r\n                <div class=\"formGroup\">\r\n                    <label for=\"\" class=\"formGroup__label\">\r\n                      ¿Qué tipo de producto maneja?\r\n                    </label>\r\n                    <input formControlName=\"tipoProductoPA\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n                    <app-labels-error\r\n                      [fControlName]='\"tipoProductoPA\"'\r\n                      [form]='produc'\r\n                      [messageGeneralError]='\"Información Incorrecta:\"'\r\n                      [validator]='tipoProductoPAErrores'\r\n                    ></app-labels-error>\r\n                  </div>\r\n\r\n                  <div class=\"formGroup\">\r\n                    <label for=\"\" class=\"formGroup__label\">\r\n                      ¿Cuál es el nombre del banco donde tiene este producto?\r\n                    </label>\r\n                    <input formControlName=\"nombreBancoPA\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n                    <app-labels-error\r\n                      [fControlName]='\"nombreBancoPA\"'\r\n                      [form]='produc'\r\n                      [messageGeneralError]='\"Información Incorrecta:\"'\r\n                      [validator]='nombreBancoPAErrores'\r\n                    ></app-labels-error>\r\n                  </div>\r\n            </article>\r\n          <!-- End -->\r\n\r\n          <!-- Right column -->\r\n          <article class=\"formColumn\" [formGroupName]=\"i\">\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿En que país tiene su producto?\r\n                </label>\r\n                <select formControlName=\"paisProductoPA\" class=\"formGroup__input formGroup__input--select\">\r\n                  <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                  <option *ngFor=\"let item of paisescatPA\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n                </select>\r\n                <app-labels-error\r\n                  [fControlName]='\"paisProductoPA\"'\r\n                  [form]='produc'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='paisProductoPAErrores'\r\n                ></app-labels-error>\r\n              </div>\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿En que ciudad tiene su producto?\r\n                </label>\r\n                <select formControlName=\"ciudadProductoPA\" class=\"formGroup__input formGroup__input--select\" name=\"\">\r\n                  <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                  <option *ngFor=\"let item of provinciasPA.filter(filtroPA(i))\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n                </select>\r\n                <app-labels-error\r\n                  [fControlName]='\"ciudadProductoPA\"'\r\n                  [form]='produc'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='ciudadProductoPAErrores'\r\n                ></app-labels-error>\r\n              </div>\r\n\r\n              <div class=\"formGroup\">\r\n                <label for=\"\" class=\"formGroup__label\">\r\n                  ¿Cuál es el tipo de moneda en la que realiza la operación?\r\n                </label>\r\n                <input formControlName=\"tipoMonedaOperacionPA\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n                <app-labels-error\r\n                  [fControlName]='\"tipoMonedaOperacionPA\"'\r\n                  [form]='produc'\r\n                  [messageGeneralError]='\"Información Incorrecta:\"'\r\n                  [validator]='tipoMonedaOperacionPAErrores'\r\n                ></app-labels-error>\r\n              </div>\r\n          </article>\r\n          <!-- End -->\r\n        </ng-container>\r\n        <!-- Left column -->\r\n        <article class=\"formColumn\"></article>\r\n        <!-- End -->\r\n        <!-- Right column -->\r\n        <article class=\"formColumn\">\r\n          <div class=\"formGroup\">\r\n            <div class=\"formGroup__flexRow\">\r\n              <button type=\"button\" class=\"button button--icon\" (click)=\"addItemPA()\">\r\n                <img src=\"./assets/cam/img/icon/suma.svg\" alt=\"\">\r\n              </button>\r\n              <label for=\"\" class=\"button__label--icon\">Agregar otro producto</label>\r\n            </div>\r\n          </div>\r\n\r\n        </article>\r\n        <!-- End -->\r\n      </ng-container>\r\n\r\n\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container El Salvador -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]=\"formulario\" *ngIf='pais === \"SV\"'>\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>¿Realiza operaciones internacionales?</b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"operacionesInternacionalesSV\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\" *ngIf=\"formulario.get('operacionesInternacionalesSV').value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el monto estimado en USD que realiza?\r\n          </label>\r\n          <input formControlName=\"montoUsdSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"montoUsdSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='montoUsdSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Especifique el tipo de operación que realiza\r\n          </label>\r\n          <select formControlName=\"tipoOperacionSV\" class=\"formGroup__input formGroup__input--select\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of tipoOperacionSV\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"tipoOperacionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='tipoOperacionSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\"  *ngIf=\"formulario.get('operacionesInternacionalesSV').value === true\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>¿Realiza otro tipo de operaciones? </b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"otroTipoOperacion\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\"  *ngIf=\"formulario.get('operacionesInternacionalesSV').value === true && formulario.get('otroTipoOperacion').value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál?\r\n          </label>\r\n          <input formControlName=\"cual\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"cual\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='cualErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el país destino de los recursos?\r\n          </label>\r\n          <select formControlName=\"paisDestinoSV\" class=\"formGroup__input formGroup__input--select\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of paisCatSV\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"paisDestinoSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='paisDestinoSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el país origen de los recursos?\r\n          </label>\r\n          <select formControlName=\"paisOrigenSV\" class=\"formGroup__input formGroup__input--select\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of paisCatSV\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"paisOrigenSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='paisOrigenSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre del remitente o destinatario principal?\r\n          </label>\r\n          <input formControlName=\"nombreRemitenteSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"nombreRemitenteSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='nombreRemitenteSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Right column -->\r\n      <article class=\"formColumn\" *ngIf=\"formulario.get('operacionesInternacionalesSV').value === true && formulario.get('otroTipoOperacion').value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre del banco o entidad destino?\r\n          </label>\r\n          <input formControlName=\"nombreBancoDestinoSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"nombreBancoDestinoSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='nombreBancoDestinoSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el número de la cuenta principal?\r\n          </label>\r\n          <input formControlName=\"numeroCuentaPrincipalSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"numeroCuentaPrincipalSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='numeroCuentaPrincipalSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el tipo de moneda en la que realiza la operación?\r\n          </label>\r\n          <input formControlName=\"tipoMonedaOperacionSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"tipoMonedaOperacionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='tipoMonedaOperacionSVErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>¿Tiene productos financieros en moneda extranjera? </b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"productosMonedaExtranjeraSV2\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Left column -->\r\n      <ng-container *ngIf=\"formulario.get('productosMonedaExtranjeraSV2').value === true\">\r\n          <ng-container formArrayName=\"productos\" *ngFor=\"let produc of formulario.get('productos').controls; let i = index;\">\r\n              <article class=\"formColumn\" [formGroupName]=\"i\">\r\n\r\n                  <div class=\"formGroup\">\r\n                      <label for=\"\" class=\"formGroup__label\">\r\n                        ¿Qué tipo de producto maneja?\r\n                      </label>\r\n                      <input formControlName=\"tipoProductoSV2\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n                      <app-labels-error\r\n                        [fControlName]='\"tipoProductoSV2\"'\r\n                        [form]='produc'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='tipoProductoSV2Errores'\r\n                      ></app-labels-error>\r\n                    </div>\r\n\r\n                  <div class=\"formGroup\">\r\n                    <label for=\"\" class=\"formGroup__label\">\r\n                      Escriba el número del producto\r\n                    </label>\r\n                    <input formControlName=\"numeroProductoSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n                    <app-labels-error\r\n                        [fControlName]='\"numeroProductoSV\"'\r\n                        [form]='produc'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='numeroProductoSVErrores'\r\n                    ></app-labels-error>\r\n                  </div>\r\n\r\n                  <div class=\"formGroup\">\r\n                    <label for=\"\" class=\"formGroup__label\">\r\n                      ¿Cuál es el nombre del banco donde tiene este producto?\r\n                    </label>\r\n                    <input formControlName=\"nombreBancoProductoSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n                    <app-labels-error\r\n                        [fControlName]='\"nombreBancoProductoSV\"'\r\n                        [form]='produc'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='nombreBancoProductoSVErrores'\r\n                    ></app-labels-error>\r\n                  </div>\r\n\r\n                  <div class=\"formGroup\">\r\n                    <label for=\"\" class=\"formGroup__label\">\r\n                      ¿Cuál es monto mensual estimado en USD que realiza?\r\n                    </label>\r\n                    <input formControlName=\"montoMensualUsdSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n                    <app-labels-error\r\n                        [fControlName]='\"montoMensualUsdSV\"'\r\n                        [form]='produc'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='montoMensualUsdSVErrores'\r\n                    ></app-labels-error>\r\n                  </div>\r\n\r\n              </article>\r\n              <!-- End -->\r\n              <!-- Right column -->\r\n              <article class=\"formColumn\" [formGroupName]=\"i\">\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿En que país tiene su producto?\r\n                  </label>\r\n                  <select formControlName=\"paisProductoSV\" class=\"formGroup__input formGroup__input--select\">\r\n                    <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                    <option *ngFor=\"let item of paisCatSV\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n                  </select>\r\n                  <app-labels-error\r\n                        [fControlName]='\"paisProductoSV\"'\r\n                        [form]='produc'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='paisProductoSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n                <!-- validar -->\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿En que ciudad tiene su producto?\r\n                  </label>\r\n                  <select formControlName=\"ciudadProductoSV\" class=\"formGroup__input formGroup__input--select\">\r\n                    <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                    <option *ngFor=\"let item of ciudadCatSV.filter( filtro(i) )\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n                  </select>\r\n                  <app-labels-error\r\n                        [fControlName]='\"ciudadProductoSV\"'\r\n                        [form]='produc'\r\n                        [messageGeneralError]='\"Información Incorrecta:\"'\r\n                        [validator]='ciudadProductoSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n\r\n                <div class=\"formGroup\">\r\n                  <label for=\"\" class=\"formGroup__label\">\r\n                    ¿Cuál es el tipo de moneda en la que realiza la operación?\r\n                  </label>\r\n                  <input formControlName=\"tipoMoendaOperacionSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n                  <app-labels-error\r\n                      [fControlName]='\"tipoMoendaOperacionSV\"'\r\n                      [form]='produc'\r\n                      [messageGeneralError]='\"Información Incorrecta:\"'\r\n                      [validator]='tipoMoendaOperacionSVErrores'\r\n                  ></app-labels-error>\r\n                </div>\r\n              </article>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <article class=\"formColumn\"></article>\r\n      <article class=\"formColumn\" *ngIf=\"formulario.get('productosMonedaExtranjeraSV2').value === true\">\r\n        <div class=\"formGroup\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <button type=\"button\" class=\"button button--icon\" (click)='addItem()'>\r\n              <img src=\"./assets/cam/img/icon/suma.svg\" alt=\"\">\r\n            </button>\r\n            <label for=\"\" class=\"button__label--icon\">Agregar otro producto</label>\r\n          </div>\r\n        </div>\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Honduras -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]=\"formulario\" *ngIf='pais === \"HN\"'>\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>¿Realiza operaciones en moneda extranjera?</b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"operacionesInternacionalesHN\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\" *ngIf=\"formulario.get('operacionesInternacionalesHN').value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el monto mensual típico estimado en Lempiras?\r\n          </label>\r\n          <input formControlName=\"montoMensualTipicoHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"montoMensualTipicoHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='montoMensualTipicoHNErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el monto mensual eventual esperado en Lempiras?\r\n          </label>\r\n          <input formControlName=\"montoMensualEventualHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"montoMensualEventualHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='montoMensualEventualHNErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\" *ngIf=\"formulario.get('operacionesInternacionalesHN').value === true\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Realiza transferencias internacionales?\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"tranferenciasInternacionalesHN\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Realiza compra y venta de divisas?\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"compraVentaDivisasHN\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Realiza emisión de giros en dólares?\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"emisionDolaresHN\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Recibirá remesas familiares?\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"remesasFamiliaresHN\" type=\"checkbox\" class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup__errorText--show\" *ngIf=\"formulario?.errors?.required1\">\r\n        Marca <strong>SI</strong> en al menos una opción.\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- center column -->\r\n      <article class=\"formColumn\">\r\n\r\n      <ng-container *ngIf=\"formulario.get('operacionesInternacionalesHN').value === true && formulario.get('tranferenciasInternacionalesHN').value === true\">\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"\">\r\n            <b>Transferencias Recibidas</b>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            País de origen\r\n          </label>\r\n          <select formControlName=\"paisOrigenHN\" name=\"\" id=\"\" class=\"formGroup__input formGroup__input--select\"\r\n              (focus)=\"formTransaccionesRecibidas(1)\"\r\n              (focusout)=\"formTransaccionesValid()\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of paisCatHN\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"paisOrigenHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='paisOrigenHNErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Motivo de la transferencia\r\n          </label>\r\n          <input formControlName=\"motivoTransferenciaHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            (focus)=\"formTransaccionesRecibidas(1)\"\r\n            (change)=\"formTransaccionesValid()\"\r\n            (focusout)=\"formTransaccionesValid()\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"motivoTransferenciaHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='motivoTransferenciaHNErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Nombre de quien envía el dinero\r\n          </label>\r\n          <input formControlName=\"nombreEnvioDineroHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            (focus)=\"formTransaccionesRecibidas(1)\"\r\n            (change)=\"formTransaccionesValid()\"\r\n            (focusout)=\"formTransaccionesValid()\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"nombreEnvioDineroHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='nombreEnvioDineroHNErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"\">\r\n            <b>Transferencias Enviadas</b>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            País de origen\r\n          </label>\r\n\r\n          <select formControlName=\"paisOrigenHN2\" class=\"formGroup__input formGroup__input--select\"\r\n            (focus)=\"formTransaccionesRecibidas(2)\"\r\n            (focusout)=\"formTransaccionesValid()\">\r\n              <option disabled selected hidden value=\"\"> Seleccione </option>\r\n              <option *ngFor=\"let item of paisCatHN\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"paisOrigenHN2\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='paisOrigenHN2Errores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Motivo de la transferencia\r\n          </label>\r\n          <input formControlName=\"motivoTransferenciaHN2\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            (focus)=\"formTransaccionesRecibidas(2)\"\r\n            (change)=\"formTransaccionesValid()\"\r\n            (focusout)=\"formTransaccionesValid()\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"motivoTransferenciaHN2\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='motivoTransferenciaHN2Errores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Nombre de quien envía el dinero\r\n          </label>\r\n          <input formControlName=\"nombreEnvioDineroHN2\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"\r\n            (focus)=\"formTransaccionesRecibidas(2)\"\r\n            (change)=\"formTransaccionesValid()\"\r\n            (focusout)=\"formTransaccionesValid()\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"nombreEnvioDineroHN2\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='nombreEnvioDineroHN2Errores'\r\n          ></app-labels-error>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"formulario.get('operacionesInternacionalesHN').value === true && formulario.get('remesasFamiliaresHN').value === true\">\r\n          <div class=\"formGroup\">\r\n              <label for=\"\" class=\"\">\r\n                <b>Remesas Recibidas</b>\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                País de origen\r\n              </label>\r\n              <select formControlName=\"paisOrigenHN3\" class=\"formGroup__input formGroup__input--select\">\r\n                <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                <option *ngFor=\"let item of paisCatHN\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n              </select>\r\n              <app-labels-error\r\n                [fControlName]='\"paisOrigenHN3\"'\r\n                [form]='formulario'\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='paisOrigenHN3Errores'\r\n              ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                Motivo de la remesa\r\n              </label>\r\n              <input formControlName=\"motivoRemesaHN3\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n              <app-labels-error\r\n                [fControlName]='\"motivoRemesaHN3\"'\r\n                [form]='formulario'\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='motivoRemesaHN3Errores'\r\n              ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                Nombre del remitente\r\n              </label>\r\n              <input formControlName=\"nombreRemitenteHN3\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n              <app-labels-error\r\n                [fControlName]='\"nombreRemitenteHN3\"'\r\n                [form]='formulario'\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='nombreRemitenteHN3Errores'\r\n              ></app-labels-error>\r\n            </div>\r\n\r\n            <div class=\"formGroup\">\r\n              <label for=\"\" class=\"formGroup__label\">\r\n                Relación con el remitente\r\n              </label>\r\n              <select formControlName=\"relacionRemitenteHN3\" class=\"formGroup__input formGroup__input--select\">\r\n                  <option disabled selected hidden value=\"\"> Seleccione </option>\r\n                  <option *ngFor=\"let item of parntesco\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n              </select>\r\n              <app-labels-error\r\n                [fControlName]='\"relacionRemitenteHN3\"'\r\n                [form]='formulario'\r\n                [messageGeneralError]='\"Información Incorrecta:\"'\r\n                [validator]='relacionRemitenteHN3Errores'\r\n              ></app-labels-error>\r\n            </div>\r\n\r\n      </ng-container>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Costa Rica -->\r\n    <section class=\"formContainer__columnContainer\" [formGroup]=\"formulario\" *ngIf='pais === \"CR\"'>\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            <b>¿Realiza operaciones internacionales?</b>\r\n          </label>\r\n          <div class=\"contCheckboxSiNo\">\r\n            <label><input formControlName=\"operacionesInternacionalesCR\" type=\"checkbox\" [value]='true' class=\"cambiar tamano\" />\r\n              <div class=\"switch\">\r\n                <span></span>\r\n              </div>\r\n            </label>\r\n          </div>\r\n          <app-labels-error\r\n            [fControlName]='\"operacionesInternacionalesCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='operacionesInternacionalesCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\"  *ngIf=\"formulario.get('operacionesInternacionalesCR').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el monto estimado en USD que realiza?\r\n          </label>\r\n          <input formControlName=\"montoUsdCR\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"montoUsdCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='montoUsdCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('operacionesInternacionalesCR').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Especifique el tipo de operación que realiza\r\n          </label>\r\n          <select formControlName=\"tipoOperacionCR\" multiple class=\"formGroup__input\" style=\"height: 100% !important\">\r\n            <option *ngFor=\"let item of operIntKyc\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"tipoOperacionCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='tipoOperacionCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\"  *ngIf=\"formulario.get('operacionesInternacionalesCR').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su país destino/origen de los recursos?\r\n          </label>\r\n          <select formControlName=\"paisDestinoOrigenCR\" class=\"formGroup__input formGroup__input--select\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of paisCat\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"paisDestinoOrigenCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='paisDestinoOrigenCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Right column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('operacionesInternacionalesCR').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre del remitente o destinatario principal?\r\n          </label>\r\n          <input formControlName=\"nombreRemitentePrincipalCR\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"nombreRemitentePrincipalCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='nombreRemitentePrincipalCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('operacionesInternacionalesCR').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el nombre del banco o entidad destino?\r\n          </label>\r\n          <input formControlName=\"nombreBancoCR\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"nombreBancoCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='nombreBancoCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('operacionesInternacionalesCR').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el número de la cuenta principal?\r\n          </label>\r\n          <input formControlName=\"numeroCuentaPrincipalCR\" type=\"text\" class=\"formGroup__input\" placeholder=\"\"/>\r\n          <app-labels-error\r\n            [fControlName]='\"numeroCuentaPrincipalCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='numeroCuentaPrincipalCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"formulario.get('operacionesInternacionalesCR').value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿En que tipo de moneda realiza la operación?\r\n          </label>\r\n          <select formControlName=\"monedaCR\" class=\"formGroup__input formGroup__input--select\">\r\n            <option disabled selected hidden value=\"\"> Seleccione </option>\r\n            <option *ngFor=\"let item of moneda\" [value]=\"item.value\" [label]=\"item.label\"></option>\r\n          </select>\r\n          <app-labels-error\r\n            [fControlName]='\"monedaCR\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='monedaCRErrores'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Button Container -->\r\n    <!-- <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onCall(getDataToPayload())'></app-button-continue> -->\r\n    <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onRedirect(\"VIN006\")'></app-button-continue>\r\n    <!-- End -->\r\n  </div>\r\n  <!-- End -->\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin005/vin005.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin005/vin005.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-invalid.ng-touched {\n  border-color: #ed1c27 !important; }\n\n.formGroup__errorText--show {\n  width: 100%;\n  margin-top: 0.25rem;\n  font: 12.8px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  color: #ed1c27 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vdmluY3VsYWNpb24vdmluMDA1L0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFwcFxcbW9kdWxlc1xcY2FtXFx2aW5jdWxhY2lvblxcdmluMDA1XFx2aW4wMDUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtNQUFrTTtFQUNsTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL3ZpbmN1bGFjaW9uL3ZpbjAwNS92aW4wMDUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZC5uZy10b3VjaGVkICB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWQxYzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtR3JvdXBfX2Vycm9yVGV4dC0tc2hvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBmb250OiAxMi44cHggLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIGNvbG9yOiAjZWQxYzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin005/vin005.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin005/vin005.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin005Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin005Component", function() { return Vin005Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");
/* harmony import */ var src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/common/components/encaptulation */ "./src/app/modules/common/components/encaptulation.ts");
/* harmony import */ var src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/common/CONST */ "./src/app/modules/common/CONST.ts");





let Vin005Component = class Vin005Component extends src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    ngOnInit() {
        this.countrieRules = {
            CR: () => this.setRulesCR(),
            PA: () => this.setRulesPA(),
            SV: () => this.setRulesSV(),
            HN: () => this.setRulesHN()
        };
        if (this.countrieRules[this.pais]) {
            this.countrieRules[this.pais]();
        }
    }
    ngOnDestroy() {
        // throw new Error('Method not implemented.');
    }
    getDataToPayload(data) {
        // throw new Error('Method not implemented.');
        this.disableButton = true;
        console.log(this.formulario.getRawValue());
        return () => ({});
    }
    getDataToBackButton(data) {
        // this.obser.sendData(true, LOADING);
        // throw new Error('Method not implemented.');
        return () => ({});
    }
    /*crea formulario formGroup si el país es Panamá */
    setRulesPA() {
        this.getTipoOperacionesPA();
        this.getPAisesPA();
        this.getProvinciasPA();
        this.items = this.formBuilder.array([]);
        this.setRules({
            operacionesInternacionalesPA: ['', [
                    this.rules.resetMyCallbackValidation([
                        'montoUsdPA',
                        'tipoOperacionPA',
                        'paisDestinoPA'
                    ])
                ]],
            montoUsdPA: ['', [
                    this.rules.validationForMaxLength(15),
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            tipoOperacionPA: ['', [
                    this.rules.validationForSelect(() => this.tipoOperacionesPA, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            paisDestinoPA: ['', [
                    this.rules.validationForSelect(() => this.paisescatPA, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            productosMonedaExtranjeraPA: ['', [
                    this.rules.resetMyCallbackValidationArray('productos', [
                        'tipoProductoPA',
                        'nombreBancoPA',
                        'paisProductoPA',
                        'ciudadProductoPA',
                        'tipoMonedaOperacionPA'
                    ])
                ]],
            productos: this.formBuilder.array([this.createItemPA()])
        });
        this.montoUsdPAErrores = this.getMontoUsdPAErrores();
        this.tipoOperacionPAErrores = this.getTipoOperacionPAErrores();
        this.paisDestinoPAErrores = this.getPaisDestinoPAErrores();
        this.tipoProductoPAErrores = this.getTipoProductoPAErrores();
        this.nombreBancoPAErrores = this.getNombreBancoPAErrores();
        this.paisProductoPAErrores = this.getPaisProductoPAErrores();
        this.ciudadProductoPAErrores = this.getCiudadProductoPAErrores();
        this.tipoMonedaOperacionPAErrores = this.getTipoMonedaOperacionPAErrores();
    }
    /*crea formulario formGroup si el país es Salvador */
    setRulesSV() {
        this.getTipoOperaciones();
        this.getPaisesSV();
        this.getCiudadesSV();
        this.items = this.formBuilder.array([]);
        this.setRules({
            operacionesInternacionalesSV: ['', [
                    this.rules.resetMyCallbackValidation([
                        'montoUsdSV',
                        'tipoOperacionSV',
                        'otroTipoOperacion',
                        'cual',
                        'paisDestinoSV',
                        'paisOrigenSV',
                        'nombreRemitenteSV',
                        'nombreBancoDestinoSV',
                        'numeroCuentaPrincipalSV',
                        'tipoMonedaOperacionSV',
                        'productosMonedaExtranjeraSV2'
                    ])
                ]],
            montoUsdSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            tipoOperacionSV: ['', [
                    this.rules.validationForSelect(() => this.tipoOperacionSV, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            otroTipoOperacion: ['', [
                    this.rules.resetMyCallbackValidation([
                        'cual',
                        'paisDestinoSV',
                        'paisOrigenSV',
                        'nombreRemitenteSV',
                        'nombreBancoDestinoSV',
                        'numeroCuentaPrincipalSV',
                        'tipoMonedaOperacionSV'
                    ])
                ]],
            cual: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true &&
                            control.parent.get('otroTipoOperacion').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            paisDestinoSV: ['', [
                    this.rules.validationForSelect(() => this.tipoOperacionSV, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true &&
                            control.parent.get('otroTipoOperacion').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            paisOrigenSV: ['', [
                    this.rules.validationForSelect(() => this.tipoOperacionSV, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true &&
                            control.parent.get('otroTipoOperacion').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            nombreRemitenteSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true &&
                            control.parent.get('otroTipoOperacion').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            nombreBancoDestinoSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true &&
                            control.parent.get('otroTipoOperacion').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            numeroCuentaPrincipalSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true &&
                            control.parent.get('otroTipoOperacion').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            tipoMonedaOperacionSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesSV').value === true &&
                            control.parent.get('otroTipoOperacion').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            productosMonedaExtranjeraSV2: ['', [
                    this.rules.resetMyCallbackValidationArray('productos', [
                        'tipoProductoSV2',
                        'numeroProductoSV',
                        'nombreBancoProductoSV',
                        'montoMensualUsdSV',
                        'paisProductoSV',
                        'ciudadProductoSV',
                        'tipoMoendaOperacionSV'
                    ])
                ]],
            productos: this.formBuilder.array([this.createItem()])
        });
        this.montoUsdSVErrores = this.getMontoUsdSVErrores();
        this.tipoOperacionSVErrores = this.getTipoOperacionSVErrores();
        this.cualErrores = this.getCualErrores();
        this.paisDestinoSVErrores = this.getPaisDestinoSVErrores();
        this.paisOrigenSVErrores = this.getPaisOrigenSVErrores();
        this.nombreRemitenteSVErrores = this.getNombreRemitenteSVErrores();
        this.nombreBancoDestinoSVErrores = this.getNombreBancoDestinoSVErrores();
        this.numeroCuentaPrincipalSVErrores = this.getNumeroCuentaPrincipalSVErrores();
        this.tipoMonedaOperacionSVErrores = this.getTipoMonedaOperacionSVErrores();
        this.tipoProductoSV2Errores = this.getTipoProductoSV2Errores();
        this.numeroProductoSVErrores = this.getNumeroProductoSVErrores();
        this.nombreBancoProductoSVErrores = this.getNombreBancoProductoSVErrores();
        this.montoMensualUsdSVErrores = this.getMontoMensualUsdSVErrores();
        this.paisProductoSVErrores = this.getPaisProductoSVErrores();
        this.ciudadProductoSVErrores = this.getCiudadProductoSVErrores();
        this.tipoMoendaOperacionSVErrores = this.getTipoMoendaOperacionSVErrores();
    }
    /*crea formulario formGroup si el país es Honduras */
    setRulesHN() {
        this.formTransacciones = 0;
        this.getParentescoHN();
        this.getPaisesHN();
        this.setRules({
            operacionesInternacionalesHN: [false, [
                    this.rules.resetMyCallbackValidation([
                        'paisOrigenHN',
                        'motivoTransferenciaHN',
                        'nombreEnvioDineroHN',
                        'paisOrigenHN2',
                        'motivoTransferenciaHN2',
                        'nombreEnvioDineroHN2',
                        'relacionRemitenteHN3',
                        'nombreRemitenteHN3',
                        'motivoRemesaHN3',
                        'paisOrigenHN3',
                        'montoMensualTipicoHN',
                        'montoMensualEventualHN'
                    ])
                ]],
            montoMensualTipicoHN: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            montoMensualEventualHN: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            tranferenciasInternacionalesHN: [false, [
                    this.rules.resetMyCallbackValidation([
                        'paisOrigenHN',
                        'motivoTransferenciaHN',
                        'nombreEnvioDineroHN',
                        'paisOrigenHN2',
                        'motivoTransferenciaHN2',
                        'nombreEnvioDineroHN2'
                    ])
                ]],
            compraVentaDivisasHN: [false, []],
            emisionDolaresHN: [false, []],
            remesasFamiliaresHN: [false, [
                    this.rules.resetMyCallbackValidation([
                        'relacionRemitenteHN3',
                        'nombreRemitenteHN3',
                        'motivoRemesaHN3',
                        'paisOrigenHN3'
                    ])
                ]],
            paisOrigenHN: ['', [
                    this.rules.validationForSelect(() => this.paisCatHN, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            (this.formTransacciones === 1 || this.formTransacciones === 0 || this.formTransacciones === 3)) {
                            return control.parent.get('tranferenciasInternacionalesHN').value === false;
                        }
                        return true;
                    })
                ]],
            motivoTransferenciaHN: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            control.parent.get('tranferenciasInternacionalesHN').value === true &&
                            (this.formTransacciones === 1 || this.formTransacciones === 0 || this.formTransacciones === 3)) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            nombreEnvioDineroHN: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            control.parent.get('tranferenciasInternacionalesHN').value === true &&
                            (this.formTransacciones === 1 || this.formTransacciones === 0 || this.formTransacciones === 3)) {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    this.rules.validationForMinLength(10),
                    this.rules.validationForMaxLength(40)
                ]],
            paisOrigenHN2: ['', [
                    this.rules.validationForSelect(() => this.paisCatHN, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            (this.formTransacciones === 2 || this.formTransacciones === 0 || this.formTransacciones === 3)) {
                            return control.parent.get('tranferenciasInternacionalesHN').value === false;
                        }
                        return true;
                    })
                ]],
            motivoTransferenciaHN2: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            control.parent.get('tranferenciasInternacionalesHN').value === true &&
                            (this.formTransacciones === 2 || this.formTransacciones === 0 || this.formTransacciones === 3)) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            nombreEnvioDineroHN2: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            control.parent.get('tranferenciasInternacionalesHN').value === true &&
                            (this.formTransacciones === 2 || this.formTransacciones === 0 || this.formTransacciones === 3)) {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    this.rules.validationForMinLength(10),
                    this.rules.validationForMaxLength(40)
                ]],
            paisOrigenHN3: ['', [
                    this.rules.validationForSelect(() => this.paisCatHN, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true) {
                            return control.parent.get('remesasFamiliaresHN').value === false;
                        }
                        return true;
                    })
                ]],
            motivoRemesaHN3: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            control.parent.get('remesasFamiliaresHN').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            nombreRemitenteHN3: ['', [
                    this.rules.validationForMinLength(10),
                    this.rules.validationForMaxLength(40),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true &&
                            control.parent.get('remesasFamiliaresHN').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            relacionRemitenteHN3: ['', [
                    this.rules.validationForSelect(() => this.parntesco, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesHN').value === true) {
                            return control.parent.get('remesasFamiliaresHN').value === false;
                        }
                        return true;
                    })
                ]]
        }, {
            validators: [
                this.validationSelectMonadeExtrangera([
                    'tranferenciasInternacionalesHN',
                    'compraVentaDivisasHN',
                    'emisionDolaresHN',
                    'remesasFamiliaresHN'
                ], 'required1', 'operacionesInternacionalesHN'),
            ]
        });
        this.montoMensualTipicoHNErrores = this.getMontoMensualTipicoHNErrores();
        this.montoMensualEventualHNErrores = this.getMontoMensualEventualHNErrores();
        this.paisOrigenHNErrores = this.getPaisOrigenHNErrores();
        this.motivoTransferenciaHNErrores = this.getMotivoTransferenciaHNErrores();
        this.nombreEnvioDineroHNErrores = this.getNombreEnvioDineroHNErrores();
        this.paisOrigenHN2Errores = this.getPaisOrigenHN2Errores();
        this.motivoTransferenciaHN2Errores = this.getMotivoTransferenciaHN2Errores();
        this.nombreEnvioDineroHN2Errores = this.getNombreEnvioDineroHN2Errores();
        this.relacionRemitenteHN3Errores = this.getRelacionRemitenteHN3Errores();
        this.nombreRemitenteHN3Errores = this.getNombreRemitenteHN3Errores();
        this.motivoRemesaHN3Errores = this.getMotivoRemesaHN3Errores();
        this.paisOrigenHN3Errores = this.getPaisOrigenHN3Errores();
    }
    /*crea formulario formGroup si el país es Costa Rica */
    setRulesCR() {
        this.getMonedaCR();
        this.getPaisCR();
        this.getOperIintKycCR();
        this.setRules({
            operacionesInternacionalesCR: [false, [
                    this.rules.resetMyCallbackValidation([
                        'tipoOperacionCR',
                        'montoUsdCR',
                        'paisDestinoOrigenCR',
                        'nombreRemitentePrincipalCR',
                        'nombreBancoCR',
                        'numeroCuentaPrincipalCR',
                        'monedaCR'
                    ])
                ]],
            tipoOperacionCR: [[], [
                    this.rules.validationForMinLength(1),
                    this.rules.validationForMaxLength(Infinity),
                    this.rules.validationForSelectMultiple(() => this.operIntKyc, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return control.parent.get('operacionesInternacionalesCR').value === false;
                    })
                ]],
            montoUsdCR: ['', [
                    this.rules.validationForMaxLength(18),
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('operacionesInternacionalesCR').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            paisDestinoOrigenCR: ['', [
                    this.rules.validationForSelect(() => this.paisCat, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return control.parent.get('operacionesInternacionalesCR').value === false;
                    })
                ]],
            nombreRemitentePrincipalCR: ['', [
                    this.rules.validationForMaxLength(50),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredCR())
                ]],
            nombreBancoCR: ['', [
                    this.rules.validationForMaxLength(60),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredCR())
                ]],
            numeroCuentaPrincipalCR: ['', [
                    this.rules.validationForMaxLength(50),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, this.requiredCR())
                ]],
            monedaCR: ['', [
                    this.rules.validationForSelect(() => this.paisCat, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        return control.parent.get('operacionesInternacionalesCR').value === false;
                    })
                ]]
        });
        this.operacionesInternacionalesCRErrores = this.getOperacionesInternacionalesCRErrores();
        this.tipoOperacionCRErrores = this.getTipoOperacionCRErrores();
        this.montoUsdCRErrores = this.getMontoUsdCRErrores();
        this.paisDestinoOrigenCRErrores = this.getPaisDestinoOrigenCRErrores();
        this.nombreRemitentePrincipalCRErrores = this.getNombreRemitentePrincipalCRErrores();
        this.nombreBancoCRErrores = this.getNombreBancoCRErrores();
        this.numeroCuentaPrincipalCRErrores = this.getNumeroCuentaPrincipalCRErrores();
        this.monedaCRErrores = this.getMonedaCRErrores();
    }
    getMonedaCR() {
        this.moneda = [];
        this.catalogo.data('MONEDA', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.moneda = response ? response : [];
        });
    }
    getPaisCR() {
        this.paisCat = [];
        this.catalogo.data('PAIS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.paisCat = response ? response : [];
        });
    }
    getOperIintKycCR() {
        this.operIntKyc = [];
        this.catalogo.data('OPER_INT_KYC', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.operIntKyc = response ? response : [];
        });
    }
    requiredCR() {
        return (control) => {
            if (!control.parent) {
                return true;
            }
            if (control.parent.get('operacionesInternacionalesCR').value === true) {
                return control.value !== '';
            }
            return true;
        };
    }
    getOperacionesInternacionalesCRErrores() {
        return [];
    }
    getTipoOperacionCRErrores() {
        return [
            { type: this.rules.errorTypeMinLength, label: 'Se debe seleccionar al menos 1.' },
            { type: this.rules.errorTypeSelect, label: 'Los elementos seleccionados no son validos.' }
        ];
    }
    getMontoUsdCRErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypePattern, label: 'Solo se permiten numeros.' },
            { type: this.rules.errorTypeMaxLength, label: 'La lonitud maxima es de 18.' }
        ];
    }
    getPaisDestinoOrigenCRErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getNombreRemitentePrincipalCRErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'La lonitud maxima es de 50.' }
        ];
    }
    getNombreBancoCRErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'La lonitud maxima es de 60.' }
        ];
    }
    getNumeroCuentaPrincipalCRErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'La lonitud maxima es de 50.' }
        ];
    }
    getMonedaCRErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    // HONDURAS
    validationSelectMonadeExtrangera(campos, error, campoValor) {
        const obj = {};
        obj[error] = true;
        return (control) => {
            const valueRequerido = control.get(campoValor).value;
            if (valueRequerido === false) {
                return null;
            }
            let required = true;
            campos = campos.map(item => {
                if (required === true && control.get(item).value === true) {
                    required = false;
                }
                return item;
            });
            return required ? obj : null;
        };
    }
    getParentescoHN() {
        this.parntesco = [];
        this.catalogo.data('PARENTESCO_ID', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.parntesco = response ? response : [];
        });
    }
    getPaisesHN() {
        this.paisCatHN = [];
        this.catalogo.data('PAISES', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.paisCatHN = response ? response : [];
        });
    }
    // valida cual formulario esta correcto, Transferencias Recibidas o Transferencias Enviadas o ambas
    formTransaccionesRecibidas(n) {
        this.formTransacciones = n;
        if (n === 1) {
            const control = this.formulario.get('paisOrigenHN');
            const control1 = this.formulario.get('motivoTransferenciaHN');
            const control2 = this.formulario.get('nombreEnvioDineroHN');
            const a = control.value;
            const b = control1.value;
            const c = control2.value;
            control.setValue('');
            control1.setValue('');
            control2.setValue('');
            control.setValue(a);
            control1.setValue(b);
            control2.setValue(c);
        }
        if (n === 2) {
            const control3 = this.formulario.get('paisOrigenHN2');
            const control4 = this.formulario.get('motivoTransferenciaHN2');
            const control5 = this.formulario.get('nombreEnvioDineroHN2');
            const a = control3.value;
            const b = control4.value;
            const c = control5.value;
            control3.setValue('');
            control4.setValue('');
            control5.setValue('');
            control3.setValue(a);
            control4.setValue(b);
            control5.setValue(c);
        }
        if (this.formTransacciones === 0 || this.formTransacciones === 3) {
            const control = this.formulario.get('paisOrigenHN');
            const control1 = this.formulario.get('motivoTransferenciaHN');
            const control2 = this.formulario.get('nombreEnvioDineroHN');
            const control3 = this.formulario.get('paisOrigenHN2');
            const control4 = this.formulario.get('motivoTransferenciaHN2');
            const control5 = this.formulario.get('nombreEnvioDineroHN2');
            const a = control.value;
            const b = control1.value;
            const c = control2.value;
            const d = control3.value;
            const e = control4.value;
            const f = control5.value;
            control.setValue('');
            control1.setValue('');
            control2.setValue('');
            control3.setValue('');
            control4.setValue('');
            control5.setValue('');
            control.setValue(a);
            control1.setValue(b);
            control2.setValue(c);
            control3.setValue(d);
            control4.setValue(e);
            control5.setValue(f);
        }
    }
    // valida cual formulario esta correcto, Transferencias Recibidas o Transferencias Enviadas o ambas
    formTransaccionesValid() {
        console.log(this.formTransacciones);
        if (!this.formulario.get('paisOrigenHN').errors &&
            !this.formulario.get('motivoTransferenciaHN').errors &&
            !this.formulario.get('nombreEnvioDineroHN').errors &&
            !this.formulario.get('paisOrigenHN2').errors &&
            !this.formulario.get('motivoTransferenciaHN2').errors &&
            !this.formulario.get('nombreEnvioDineroHN2').errors) {
            this.formTransacciones = 4;
            console.log('this.formTransacciones = 3;');
        }
        else if (!this.formulario.get('paisOrigenHN').errors &&
            !this.formulario.get('motivoTransferenciaHN').errors &&
            !this.formulario.get('nombreEnvioDineroHN').errors) {
            this.formTransacciones = 1;
            console.log('this.formTransacciones = 1;');
        }
        else if (!this.formulario.get('paisOrigenHN2').errors &&
            !this.formulario.get('motivoTransferenciaHN2').errors &&
            !this.formulario.get('nombreEnvioDineroHN2').errors) {
            this.formTransacciones = 2;
            console.log('this.formTransacciones = 2;');
        }
        console.log(this.formTransacciones);
        const control3 = this.formulario.get('paisOrigenHN2');
        const control4 = this.formulario.get('motivoTransferenciaHN2');
        const control5 = this.formulario.get('nombreEnvioDineroHN2');
        const a = control3.value;
        const b = control4.value;
        const c = control5.value;
        control3.setValue('');
        control4.setValue('');
        control5.setValue('');
        control3.setValue(a);
        control4.setValue(b);
        control5.setValue(c);
        const control = this.formulario.get('paisOrigenHN');
        const control1 = this.formulario.get('motivoTransferenciaHN');
        const control2 = this.formulario.get('nombreEnvioDineroHN');
        const d = control.value;
        const e = control1.value;
        const f = control2.value;
        control.setValue('');
        control1.setValue('');
        control2.setValue('');
        control.setValue(d);
        control1.setValue(e);
        control2.setValue(f);
    }
    getMontoMensualTipicoHNErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getMontoMensualEventualHNErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getPaisOrigenHNErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getMotivoTransferenciaHNErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getNombreEnvioDineroHNErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'No se permiten más de 40 caracteres.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 10 caracteres.' }
        ];
    }
    getPaisOrigenHN2Errores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getMotivoTransferenciaHN2Errores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getNombreEnvioDineroHN2Errores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'No se permiten más de 40 caracteres.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 10 caracteres.' }
        ];
    }
    getRelacionRemitenteHN3Errores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getNombreRemitenteHN3Errores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'No se permiten más de 40 caracteres.' },
            { type: this.rules.errorTypeMinLength, label: 'No se permiten menos de 10 caracteres.' }
        ];
    }
    getMotivoRemesaHN3Errores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getPaisOrigenHN3Errores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    // EL salvador
    createItem() {
        return this.formBuilder.group({
            tipoProductoSV2: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraSV2').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            numeroProductoSV: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraSV2').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            nombreBancoProductoSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraSV2').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            montoMensualUsdSV: ['', [
                    this.rules.validationForOnlyNumbers(),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraSV2').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            paisProductoSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeSelect, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraSV2').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            ciudadProductoSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeSelect, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraSV2').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            tipoMoendaOperacionSV: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraSV2').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]]
        });
    }
    addItem() {
        this.items = this.formulario.get('productos');
        this.items.push(this.createItem());
    }
    getTipoOperaciones() {
        this.tipoOperacionSV = [];
        this.catalogo.data('TIPO_OPERACION', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.tipoOperacionSV = response ? response : [];
        });
    }
    getPaisesSV() {
        this.paisCatSV = [];
        this.catalogo.data('PAIS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.paisCatSV = response ? response : [];
        });
    }
    getCiudadesSV() {
        this.ciudadCatSV = [];
        this.catalogo.data('CIUDADES', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.ciudadCatSV = response ? response : [];
        });
    }
    filtro(i) {
        return (item) => this.formulario.get('productos').controls[i].get('paisProductoSV').value === item.pais;
    }
    // Mensajes de EEROR para EL SALVADOR
    getMontoUsdSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTipoOperacionSVErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCualErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getPaisDestinoSVErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getPaisOrigenSVErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getNombreRemitenteSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getNombreBancoDestinoSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getNumeroCuentaPrincipalSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTipoMonedaOperacionSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getTipoProductoSV2Errores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getNumeroProductoSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getNombreBancoProductoSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    getMontoMensualUsdSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' }
        ];
    }
    getPaisProductoSVErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCiudadProductoSVErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getTipoMoendaOperacionSVErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' }
        ];
    }
    // PANAMA
    createItemPA() {
        return this.formBuilder.group({
            tipoProductoPA: ['', [
                    this.rules.validationForMaxLength(45),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            nombreBancoPA: ['', [
                    this.rules.validationForMaxLength(45),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            paisProductoPA: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeSelect, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            ciudadProductoPA: ['', [
                    this.rules.validationWithCallBack(this.rules.errorTypeSelect, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]],
            tipoMonedaOperacionPA: ['', [
                    this.rules.validationForMaxLength(30),
                    this.rules.validationWithCallBack(this.rules.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (!control.parent.parent) {
                            return true;
                        }
                        if (!control.parent.parent.parent) {
                            return true;
                        }
                        if (control.parent.parent.parent.get('productosMonedaExtranjeraPA').value === true) {
                            return control.value !== '';
                        }
                        return true;
                    })
                ]]
        });
    }
    addItemPA() {
        this.items = this.formulario.get('productos');
        this.items.push(this.createItemPA());
    }
    getMontoUsdPAErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeOnlyNumbers, label: 'Solo se permiten números.' },
            { type: this.rules.errorTypeMaxLength, label: 'No se permiten mas de 15 caracteres.' }
        ];
    }
    getTipoOperacionPAErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de l lista preaprobada.' }
        ];
    }
    getPaisDestinoPAErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de l lista preaprobada.' }
        ];
    }
    getTipoProductoPAErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'No se permiten más de 45 caracteres.' }
        ];
    }
    getNombreBancoPAErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'No se permiten más de 45 caracteres.' }
        ];
    }
    getPaisProductoPAErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getCiudadProductoPAErrores() {
        return [
            { type: this.rules.errorTypeSelect, label: 'Selecciona un elemento de la lista preaprobada.' }
        ];
    }
    getTipoMonedaOperacionPAErrores() {
        return [
            { type: this.rules.errorTypeRequired, label: 'Información requerida.' },
            { type: this.rules.errorTypeMaxLength, label: 'No se permiten más de 30 caracteres.' }
        ];
    }
    getTipoOperacionesPA() {
        this.tipoOperacionesPA = [];
        this.catalogo.data('TIPO_OPERACION', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.tipoOperacionesPA = response ? response : [];
        });
    }
    getPAisesPA() {
        this.paisescatPA = [];
        this.catalogo.data('PAISES', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.paisescatPA = response ? response : [];
        });
    }
    getProvinciasPA() {
        this.provinciasPA = [];
        this.catalogo.data('PROVINCIAS', this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.provinciasPA = response ? response : [];
        });
    }
    filtroPA(i) {
        return (item) => this.formulario.get('productos').controls[i].get('paisProductoPA').value === item.pais;
    }
    changePais(event) {
        this.pais = event.target.value;
        this.ngOnInit();
    }
};
Vin005Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin005',
        template: __webpack_require__(/*! ./vin005.component.html */ "./src/app/modules/cam/vinculacion/vin005/vin005.component.html"),
        encapsulation: src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].ShadowDom,
        styles: [__webpack_require__(/*! ./vin005.component.scss */ "./src/app/modules/cam/vinculacion/vin005/vin005.component.scss"), __webpack_require__(/*! ../../../../../assets/cam/scss/components/vinculacion/_vin005.scss */ "./src/assets/cam/scss/components/vinculacion/_vin005.scss")]
    })
], Vin005Component);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin006/vin006.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin006/vin006.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n\r\n<section class=\"container\">\r\n\r\n  <!-- Back button -->\r\n  <app-button-back class=\"backButton\"></app-button-back>\r\n  <!-- End -->\r\n\r\n  <!-- Form container -->\r\n  <div class=\"formContainer\">\r\n    <!-- Initial title -->\r\n    <div class=\"initialTitle\">\r\n      <h3>Declaraciones</h3>\r\n      <app-form-wizard class=\"initialTitle__stepsCounter\" [steps]=\"4\" [currentStep]=\"3\"></app-form-wizard>\r\n      <h5><b>{{ payload?.nombre || 'XXXXXXXXXXX' }}</b></h5>\r\n    </div>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Panamá -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"PA\"' [formGroup]=\"formulario\">\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch (switch)=\"switchChange($event)\" formControlName=\"personaPublicaPA\" class=\"text__weight--bold\" label=\"¿Es usted una persona que goza de: Reconocimiento público, políticamente expuesto, representante legal de una organización internacional o es familiar de una persona con las anteriores características?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--center\" *ngIf=\"FC.personaPublicaPA.value === true\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-input-checkbox formControlName=\"reconocimientoPublicoPA\" class=\"checkboxContainer\" label=\"Reconocimiento Público\"></app-input-checkbox>\r\n            <app-input-checkbox formControlName=\"politicamenteExpuestoPA\" class=\"checkboxContainer\" label=\"Políticamente Expuesto\"></app-input-checkbox>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--center\" *ngIf=\"FC.personaPublicaPA.value === true\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-input-checkbox formControlName=\"representanteLegalPA\" class=\"checkboxContainer\" label=\"Representante legal de una organización Internacional\"></app-input-checkbox>\r\n            <app-input-checkbox formControlName=\"familiarPersonaPublicaPA\" class=\"checkboxContainer\" label=\"Familiar de alguna persona con estas Características\"></app-input-checkbox>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\" *ngIf=\"FC.personaPublicaPA.value === true\">\r\n          <app-input-switch formControlName=\"vinculoPersonaPublicaPA\" label=\"¿Es usted cónyuge, compañero permanente o tiene vínculo hasta segundo grado de consanguinidad, segundo grado de afinidad y/o primero civil con la persona públicamente expuesta?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"objetivoVinculacionPA\" class=\"text__weight--bold\" label=\"¿El objetivo de esta vinculación esta encaminada a manejar recursos de campañas o partidos políticos?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"residenciaOtroPaisPA\" class=\"text__weight--bold\" label=\"¿Tiene residencia fiscal en otro país?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\" *ngIf=\"FC.residenciaOtroPaisPA.value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿En que país?\r\n          </label>\r\n          <select formControlName=\"paisPA\" class=\"formGroup__input formGroup__input--select\" >\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option *ngFor=\"let item of country\" [value]=\"item.value\">{{item['label']}}</option>\r\n          </select>\r\n          <!-- <app-select-input formControlName=\"paisPA\" [arrayItems]=\"country\"></app-select-input> -->\r\n          <app-labels-error\r\n            [fControlName]='\"paisPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.paisPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Escriba su número de identificación tributaria\r\n          </label>\r\n          <input formControlName=\"numeroIdentificacionPA\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"numeroIdentificacionPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.numeroIdentificacionPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"leyFatcaPA\" class=\"text__weight--bold\" label=\"¿Está usted sujeto a tributación fiscal en los Estados Unidos, es decir impactado por la Ley FATCA?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"FC.leyFatcaPA.value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            A continuación realizaremos unas preguntas relacionadas con la Ley FATCA que serán consignadas en el formato W.9\r\n          </label>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\" *ngIf=\"FC.leyFatcaPA.value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Verifique si su nombre aparece igual que en la declaración de impuestos\r\n          </label>\r\n          <input type=\"text\" formControlName=\"nombreDeclaracionPA\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"nombreDeclaracionPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.nombreDeclaracionPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es la clasificación tributaria federal en USA?\r\n          </label>\r\n          <input type=\"text\" formControlName=\"clasificacionTributariaPA\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"clasificacionTributariaPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.clasificacionTributariaPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Describa su clasificación tributaria\r\n          </label>\r\n          <input type=\"text\" formControlName=\"descripcionClasificacionPA\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"descripcionClasificacionPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.descripcionClasificacionPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su dirección?\r\n          </label>\r\n          <input type=\"text\" formControlName=\"direccionPA\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"direccionPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.direccionPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Right column -->\r\n      <article class=\"formColumn\" *ngIf=\"FC.leyFatcaPA.value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es la ciudad y estado?\r\n          </label>\r\n          <input type=\"text\" formControlName=\"ciudadEstadoPA\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"ciudadEstadoPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.ciudadEstadoPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el código postal?\r\n          </label>\r\n          <input type=\"text\" formControlName=\"codigoPostalPA\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"codigoPostalPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.codigoPostalPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su número de seguro social en USA (TIN)?\r\n          </label>\r\n          <input type=\"text\" formControlName=\"numeroTinPA\" class=\"formGroup__input\" placeholder=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"numeroTinPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.numeroTinPA'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n        <app-input-checkbox formControlName=\"autorizarDeclaracionPA\" class=\"checkboxContainer\" label=\"Declaro que he sido informado de la suscripción del acuerdo de intercambio de información bajo la Ley FATCA (Foreign Account Tax Compliance Act) por parte del Banco. Entiendo que para el cumplimiento de dicho acuerdo, se reportará a la autoridad competente, mi información básica, financiera y transaccional causo se determine mi calidad de U.S Person.\"></app-input-checkbox>\r\n        <app-labels-error\r\n            [fControlName]='\"autorizarDeclaracionPA\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]=''\r\n            [validator]='errors.autorizarDeclaracionPA'\r\n          ></app-labels-error>\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container El Salvador -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"SV\"' [formGroup]=\"formulario\">\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"personaPublicaSV\" class=\"text__weight--bold\" label=\"¿Es usted una persona que goza de: Reconocimiento público, políticamente expuesto, representante legal de una organización internacional o es familiar de una persona con las anteriores características?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--center\" *ngIf=\"FC.personaPublicaSV.value === true\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-input-checkbox formControlName=\"reconocimientoPublicoSV\" class=\"checkboxContainer\" label=\"Reconocimiento Público\"></app-input-checkbox>\r\n            <app-input-checkbox formControlName=\"politicamenteExpuestoSV\" class=\"checkboxContainer\" label=\"Políticamente Expuesto\"></app-input-checkbox>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--center\" *ngIf=\"FC.personaPublicaSV.value === true\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-input-checkbox formControlName=\"representanteLegalSV\" class=\"checkboxContainer\" label=\"Representante legal de una organización internacional\"></app-input-checkbox>\r\n            <app-input-checkbox formControlName=\"familiarPersonaPublicaSV\" class=\"checkboxContainer\" label=\"Familiar de alguna persona con estas características\"></app-input-checkbox>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\" *ngIf=\"FC.personaPublicaSV.value === true\">\r\n          <app-input-switch formControlName=\"vinculoPersonaPublicaSV\" label=\"¿Es usted cónyuge, compañero permanente o tiene vinculo hasta segundo grado de consanguinidad, segundo grado de afinidad y/o primero civil con una persona públicamente expuesta?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\" *ngIf=\"FC.personaPublicaSV.value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el tipo de identificación de la persona públicamente expuesta?\r\n          </label>\r\n          <select formControlName=\"tipoIdentificacionSV\" class=\"formGroup__input formGroup__input--select\" >\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option *ngFor=\"let item of typeIdentification\" [value]=\"item.value\">{{item['label']}}</option>\r\n          </select>\r\n          <!-- <app-select-input formControlName=\"tipoIdentificacionSV\" [arrayItems]=\"typeIdentification\"></app-select-input> -->\r\n          <app-labels-error\r\n            [fControlName]='\"tipoIdentificacionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.tipoIdentificacionSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el número de identificación de la persona públicamente expuesta?\r\n          </label>\r\n          <input formControlName=\"numeroIdentificacionSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"numeroIdentificacionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.numeroIdentificacionSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Right column -->\r\n      <article class=\"formColumn\" *ngIf=\"FC.personaPublicaSV.value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su parentesco con la persona públicamente expuesta?\r\n          </label>\r\n          <select formControlName=\"parentescoSV\" class=\"formGroup__input formGroup__input--select\" >\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option *ngFor=\"let item of typeRelationship\" [value]=\"item.value\">{{item['label']}}</option>\r\n          </select>\r\n          <!-- <app-select-input formControlName=\"parentescoSV\" [arrayItems]=\"typeRelationship\"></app-select-input> -->\r\n          <app-labels-error\r\n            [fControlName]='\"parentescoSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.parentescoSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿cuál es el nombre completo de la persona públicamente expuesta?\r\n          </label>\r\n          <input formControlName=\"nombrePersonaPublicaSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"nombrePersonaPublicaSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.nombrePersonaPublicaSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"objetivoVinculacionSV\" class=\"text__weight--bold\" label=\"¿El objetivo de esta vinculación esta encaminada a manejar recursos de campañas o partidos políticos?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"leyFatcaSV\" class=\"text__weight--bold\" label=\"¿Está usted sujeto a tributación fiscal en los Estados Unidos, es decir impactado por la Ley FATCA?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup\" *ngIf=\"FC.leyFatcaSV.value === true\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            A continuación realizaremos unas preguntas relacionadas con la Ley FATCA que serán consignadas en el formato W.9\r\n          </label>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Left column -->\r\n      <article class=\"formColumn\" *ngIf=\"FC.leyFatcaSV.value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Verifique si su nombre aparece igual que en la declaración de impuestos\r\n          </label>\r\n          <input formControlName=\"nombreDeclaracionSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"nombreDeclaracionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.nombreDeclaracionSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es la clasificación tributaria federal en USA?\r\n          </label>\r\n          <input formControlName=\"clasificacionTributariaSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"clasificacionTributariaSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.clasificacionTributariaSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Describa su clasificación tributaria\r\n          </label>\r\n          <input formControlName=\"descripcionClasificacionSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"descripcionClasificacionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.descripcionClasificacionSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su dirección?\r\n          </label>\r\n          <input formControlName=\"direccionSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"direccionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.direccionSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Right column -->\r\n      <article class=\"formColumn\" *ngIf=\"FC.leyFatcaSV.value === true\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es la ciudad y estado?\r\n          </label>\r\n          <input formControlName=\"ciudadEstadoSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"ciudadEstadoSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.ciudadEstadoSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es el código postal?\r\n          </label>\r\n          <input formControlName=\"codigoPostalSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"codigoPostalSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.codigoPostalSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuál es su número de seguro social en USA (TIN)?\r\n          </label>\r\n          <input formControlName=\"numeroTinSV\" type=\"text\" class=\"formGroup__input\" placeholder=\"\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"numeroTinSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.numeroTinSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--center\">\r\n          <app-input-checkbox formControlName=\"autorizarDeclaracionSV\" class=\"checkboxContainer\" label=\"Declaro bajo perjurio que: Soy ciudadano o persona de los EE UU, que la información proporcionada es correcta y en caso de un cambio de circunstancias me obligó a actualizarlo en un plazo de 30 días, por lo que firmo electrónicamente el formulario W-9.\"></app-input-checkbox>\r\n          <app-labels-error\r\n            [fControlName]='\"autorizarDeclaracionSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]=''\r\n            [validator]='errors.autorizarDeclaracionSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--center\">\r\n          <app-input-checkbox formControlName=\"autorizarBancoSV\" class=\"checkboxContainer\" label=\"Autorizo al Banco Davivienda Salvadoreño, S.A. a reportar al Gobierno y autoridades de los Estados Unidos de América la información de mis cuentas de depósito, operaciones pasivas y la requerida por la Ley FATCA.\"></app-input-checkbox>\r\n          <app-labels-error\r\n            [fControlName]='\"autorizarBancoSV\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]=''\r\n            [validator]='errors.autorizarBancoSV'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Honduras -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"HN\"' [formGroup]=\"formulario\">\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"ciudadaniaUsaHN\" class=\"text__weight--bold\" label=\"¿Tiene ciudadania, residencia o pasaporte estadounidense?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Qué otras nacionales tiene?\r\n          </label>\r\n          <select formControlName=\"nacionalidadHN\" class=\"formGroup__input formGroup__input--select\" >\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option *ngFor=\"let item of nationality\" [value]=\"item.value\">{{item['label']}}</option>\r\n          </select>\r\n          <!-- <app-select-input formControlName=\"nacionalidadHN\" [arrayItems]=\"nationality\"></app-select-input> -->\r\n          <app-labels-error\r\n            [fControlName]='\"nacionalidadHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.nacionalidadHN'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\" *ngIf=\"FC.nacionalidadHN.value != '00008'\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"nacionalidadUsaHN\" label=\"¿Tiene ciudadania o nacionalidad americana/ EEUU?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\" *ngIf=\"FC.nacionalidadUsaHN.value !== true\">\r\n          <app-input-switch formControlName=\"pasaporteUsaHN\" label=\"¿Tiene pasaporte Americano / EEUU?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\" *ngIf=\"(FC.nacionalidadHN.value != '00008') && (FC.nacionalidadUsaHN.value !== true) && (FC.pasaporteUsaHN.value === true)\">\r\n\r\n        <div class=\"formGroup\">\r\n          <input type=\"text\" formControlName=\"numeroPasaporteHN\" class=\"formGroup__input\" placeholder=\"Digite su número de pasaporte\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"numeroPasaporteHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.numeroPasaporteHN'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <!-- <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch label=\"¿Tiene residencia legal en Estados Unidos o Green Card?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article> -->\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <!-- <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <input type=\"text\" class=\"formGroup__input\" placeholder=\"Digite su número de pasaporte\" name=\"\" />\r\n        </div>\r\n\r\n      </article> -->\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\" *ngIf=\"(FC.nacionalidadHN.value != '00008') && (FC.nacionalidadUsaHN.value !== true)\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"residenciaHN\" label=\"¿Tiene residencia legal en Estados Unidos o Green Card?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\" \r\n        *ngIf=\"(FC.nacionalidadHN.value == '00008') || (FC.nacionalidadUsaHN.value === true) || (FC.residenciaHN.value === true)\">\r\n\r\n        <div class=\"formGroup\">\r\n          <input formControlName=\"numeroTinHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"Digite su TIN TAX ID NUMBER\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"numeroTinHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.numeroTinHN'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Cuánto ha sido el tiempo de su estadía en EEUU en los últimos 3 años y el motivo?\r\n          </label>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Tiempo de estadía en este año en curso\r\n          </label>\r\n          <input formControlName=\"diasAnioCursoHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"Días\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"diasAnioCursoHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.diasAnioCursoHN'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Tiempo de estadía el año pasado\r\n          </label>\r\n          <input formControlName=\"diasAnioPasadoHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"Días\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"diasAnioPasadoHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.diasAnioPasadoHN'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Tiempo de estadía el año antepasado\r\n          </label>\r\n          <input formControlName=\"diasAnioAntepasadoHN\" type=\"text\" class=\"formGroup__input\" placeholder=\"Días\" name=\"\" />\r\n          <app-labels-error\r\n            [fControlName]='\"diasAnioAntepasadoHN\"'\r\n            [form]='formulario'\r\n            [messageGeneralError]='\"Información Incorrecta:\"'\r\n            [validator]='errors.diasAnioAntepasadoHN'\r\n          ></app-labels-error>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            Motivos de la estadía (Seleccione una opción)\r\n          </label>\r\n        </div>\r\n  \r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--center\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-input-checkbox formControlName=\"estudioHN\" class=\"checkboxContainer\" label=\"Estudio\" (check)=\"checkChangeHN($event, FC.estudioHN)\"></app-input-checkbox>\r\n            <app-input-checkbox formControlName=\"tratamientoMedicoHN\" class=\"checkboxContainer\" label=\"Tratamiento Médico\" (check)=\"checkChangeHN($event, FC.tratamientoMedicoHN)\"></app-input-checkbox>\r\n          </div> \r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--center\">\r\n          <div class=\"formGroup__flexRow\">\r\n            <app-input-checkbox formControlName=\"activdadDiplomaticaHN\" class=\"checkboxContainer\" label=\"Actividades Diplomáticas\" (check)=\"checkChangeHN($event, FC.activdadDiplomaticaHN)\"></app-input-checkbox>\r\n            <app-input-checkbox formControlName=\"otroMotivoHN\" class=\"checkboxContainer\" label=\"Otro Motivo de estadía en EEUU\" (check)=\"checkChangeHN($event, FC.otroMotivoHN)\"></app-input-checkbox>\r\n          </div>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label\">\r\n            ¿Qué otras nacionales tiene?\r\n          </label>\r\n          <select formControlName=\"nacionalidad2HN\" class=\"formGroup__input formGroup__input--select\" >\r\n            <option disabled selected hidden value=\"0\"> Seleccione </option>\r\n            <option *ngFor=\"let item of nationality\" [value]=\"item.value\">{{item['label']}}</option>\r\n          </select>\r\n          <!-- <app-select-input formControlName=\"nacionalidad2HN\" [arrayItems]=\"nationality\"></app-select-input> -->\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Form column container Costa Rica -->\r\n    <section class=\"formContainer__columnContainer\" *ngIf='pais === \"CR\"' [formGroup]=\"formulario\">\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"personaPublicaCR\" class=\"text__weight--bold\" label=\"¿Es usted una persona que goza de: Reconocimiento público, políticamente expuesto, representante legal de una organización internacional o es familiar de una persona con las anteriores características?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"vinculoPersonaPublicaCR\" label=\"¿Es usted cónyuge, compañero permanente o tiene vínculo hasta segundo grado de consanguinidad, segundo grado de afinidad y/o primero civil con la persona públicamente expuesta?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"objetivoVinculacionCR\" class=\"text__weight--bold\" label=\"¿El objetivo de esta vinculación esta encaminada a manejar recursos de campañas o partidos políticos?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"residenciaFiscalCR\" class=\"text__weight--bold\" label=\"¿Tiene residencia fiscal en un país diferentes a Costa Rica o EE.UU?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Center column -->\r\n      <article class=\"formColumn\">\r\n\r\n        <div class=\"formGroup\">\r\n          <label for=\"\" class=\"formGroup__label formGroup__label--large\">\r\n            <b>Realiza alguna de estas actividades:</b>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"manejoFondosCR\" label=\"1. Manejo de fondos con terceros (Administración del dinero, cuentas bancarias, los ahorros, los valores u otros activos)?\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"compraVentaPropiedadesCR\" label=\"2. Compra y venta de propiedades\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"comercioMetalesCR\" label=\"3. Comercio de metales y piedras preciosas\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"sinFinesDeLucroCR\" label=\"4. Organización sin fines de lucro (ONG) que envío o reciba transferencias internaciones\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"administradorRecursosCR\" label=\"5. Administrador recursos y/o bienes\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"proveedorServiciosCR\" label=\"6. Proveedor de servicios fiduciarios\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"prestamistaCR\" label=\"7. Prestamistas (excepto entidad financiera)\"></app-input-switch>\r\n        </div>\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"regulacionSugefCR\" label=\"8. Cualquier otro sujeto a regulación por parte de la SUGEF, de acuerdo a la normativa\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n      <!-- Full column -->\r\n      <article class=\"formColumn formColumn--full\">\r\n\r\n        <div class=\"formGroup formGroup--flex\">\r\n          <app-input-switch formControlName=\"leyFatcaCR\" class=\"text__weight--bold\" label=\"¿Está usted sujeto a tributación fiscal en los Estados Unidos, es decir impactado por la Ley FATCA?\"></app-input-switch>\r\n        </div>\r\n\r\n      </article>\r\n      <!-- End -->\r\n\r\n    </section>\r\n    <!-- End -->\r\n\r\n    <!-- Button Container -->\r\n    <app-button-continue [disableIf]=\"disableButton || formulario.invalid\" (call)='onCall(getDataToPayload())'></app-button-continue>\r\n    <!-- <app-button-continue [disableIf]=\"disableButton || formulario.invalid\"  (call)='test()'></app-button-continue> -->\r\n    <!-- End -->\r\n  </div>\r\n  <!-- End -->\r\n\r\n</section>\r\n  "

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin006/vin006.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin006/vin006.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formGroup__errorBorder--show {\n  border-color: #ed1c27 !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #ed1c27 !important; }\n\n.formGroup__errorText--show {\n  width: 100%;\n  margin-top: 0.25rem;\n  font: 12.8px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  color: #ed1c27 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYW0vdmluY3VsYWNpb24vdmluMDA2L0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFwcFxcbW9kdWxlc1xcY2FtXFx2aW5jdWxhY2lvblxcdmluMDA2XFx2aW4wMDYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtNQUFrTTtFQUNsTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL3ZpbmN1bGFjaW9uL3ZpbjAwNi92aW4wMDYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybUdyb3VwX19lcnJvckJvcmRlci0tc2hvdyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZDFjMjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZCAge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWQxYzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtR3JvdXBfX2Vycm9yVGV4dC0tc2hvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBmb250OiAxMi44cHggLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gICAgY29sb3I6ICNlZDFjMjcgIWltcG9ydGFudDtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vin006/vin006.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vin006/vin006.component.ts ***!
  \********************************************************************/
/*! exports provided: Vin006Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vin006Component", function() { return Vin006Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");
/* harmony import */ var src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/common/components/encaptulation */ "./src/app/modules/common/components/encaptulation.ts");
/* harmony import */ var src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/common/CONST */ "./src/app/modules/common/CONST.ts");





let Vin006Component = class Vin006Component extends src_app_modules_common_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    ngOnInit() {
        this.step = 4; /* Define cantidad de pasos del formulario */
        this.currentStep = 3; /* Define el paso actual en donde se encuentra el formulario  */
        this.loadResources();
    }
    ngOnDestroy() {
        // throw new Error('Method not implemented.');
    }
    getDataToPayload(data) {
        /* Se manda validar el formulario correspondiente al país. */
        this.disableButton = true;
        switch (this.pais) {
            case 'PA':
                this.validFormGroupPA();
                break;
            case 'SV':
                this.validFormGroupSV();
                break;
            case 'HN':
                this.validFormGroupHN();
                break;
            case 'CR':
                this.validFormGroupCR();
                break;
        }
        return () => ({
            declaraciones: this.formulario.getRawValue(),
            codigoPais: this.pais,
            flujo: {
                atras: false,
                continuar: true,
                callback: () => { }
            }
        });
    }
    getDataToBackButton(data) {
        // throw new Error('Method not implemented.');
        return () => ({
            flujo: {
                atras: true,
                continuar: false,
                callback: () => { }
            }
        });
    }
    switchChange(value) {
        console.log(value);
    }
    /*
      Simula el comportamiento de radio buttons en los
      checkbox del formulario de Honduras.
    */
    checkChangeHN(value, control) {
        this.FC.estudioHN.setValue(false);
        this.FC.activdadDiplomaticaHN.setValue(false);
        this.FC.tratamientoMedicoHN.setValue(false);
        this.FC.otroMotivoHN.setValue(false);
        control.setValue(value);
    }
    /*
      Valida el país en donde se encuentra para
      cargar servicios necesarios, formGroup y
      errores a utilizar.
    */
    loadResources() {
        switch (this.pais) {
            case 'PA':
                this.getCountry();
                this.getTypeIdentification();
                this.makeFormGroupPA();
                this.errors = this.getErrorsPA();
                break;
            case 'SV':
                this.getTypeIdentification();
                this.getTypeRelationship();
                this.makeFormGroupSV();
                this.errors = this.getErrorsSV();
                break;
            case 'HN':
                this.getNationality();
                this.makeFormGroupHN();
                this.errors = this.getErrorsHN();
                break;
            case 'CR':
                this.makeFormGroupCR();
                this.errors = this.getErrorsCR();
                break;
        }
    }
    /*
      Consumo de servicios
    */
    /* País */
    getCountry() {
        this.catalogo.data(src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAISES"], this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.country = response ? response : [];
        });
    }
    /* Nacionalidad */
    getNationality() {
        this.catalogo.data(src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["NACIONALIDAD"], this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.nationality = response ? response : [];
        });
    }
    /* Tipo de indentificación */
    getTypeIdentification() {
        this.catalogo.data(src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["TIPO_IDENTIFICACION"], this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.typeIdentification = response ? response : [];
        });
    }
    /* Parentesco */
    getTypeRelationship() {
        this.catalogo.data(src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PARENTESCO"], this.params([src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["PAIS"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["MODULO"], src_app_modules_common_CONST__WEBPACK_IMPORTED_MODULE_4__["LENGUAJE"]])).subscribe(response => {
            this.typeRelationship = response ? response : [];
        });
    }
    /*
      Crea formulario formGroup con sus respectivas
      validaciones por cada país.
    */
    /* Panamá */
    makeFormGroupPA() {
        const R = this.rules;
        this.formulario = this.formBuilder.group({
            personaPublicaPA: [false, []],
            reconocimientoPublicoPA: [false, []],
            representanteLegalPA: [false, []],
            politicamenteExpuestoPA: [false, []],
            familiarPersonaPublicaPA: [false, []],
            vinculoPersonaPublicaPA: [false, []],
            objetivoVinculacionPA: [false, []],
            residenciaOtroPaisPA: [false, [
                    R.resetMyCallbackValidation([
                        'paisPA',
                        'numeroIdentificacionPA'
                    ])
                ]],
            paisPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('residenciaOtroPaisPA'))
                ]],
            numeroIdentificacionPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('residenciaOtroPaisPA'))
                ]],
            leyFatcaPA: [false, [
                    R.resetMyCallbackValidation([
                        'nombreDeclaracionPA',
                        'clasificacionTributariaPA',
                        'descripcionClasificacionPA',
                        'direccionPA',
                        'ciudadEstadoPA',
                        'codigoPostalPA',
                        'numeroTinPA'
                    ])
                ]],
            nombreDeclaracionPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaPA'))
                ]],
            clasificacionTributariaPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaPA'))
                ]],
            descripcionClasificacionPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaPA'))
                ]],
            direccionPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaPA'))
                ]],
            ciudadEstadoPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaPA'))
                ]],
            codigoPostalPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaPA'))
                ]],
            numeroTinPA: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaPA')),
                    R.validationForOnlyNumbers(),
                    R.validationForMaxLength(30)
                ]],
            autorizarDeclaracionPA: [false, [
                    R.validationForRequiredTrue()
                ]]
        });
        this.FC = this.formulario.controls;
    }
    /* El Salvador */
    makeFormGroupSV() {
        const R = this.rules;
        this.formulario = this.formBuilder.group({
            personaPublicaSV: [false, [
                    R.resetMyCallbackValidation([
                        'tipoIdentificacionSV',
                        'numeroIdentificacionSV',
                        'parentescoSV',
                        'nombrePersonaPublicaSV'
                    ])
                ]],
            reconocimientoPublicoSV: [false, []],
            representanteLegalSV: [false, []],
            politicamenteExpuestoSV: [false, []],
            familiarPersonaPublicaSV: [false, []],
            vinculoPersonaPublicaSV: [false, []],
            tipoIdentificacionSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('personaPublicaSV')),
                ]],
            numeroIdentificacionSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('personaPublicaSV')),
                ]],
            parentescoSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('personaPublicaSV')),
                ]],
            nombrePersonaPublicaSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('personaPublicaSV')),
                ]],
            objetivoVinculacionSV: [false, []],
            leyFatcaSV: [false, [
                    R.resetMyCallbackValidation([
                        'nombreDeclaracionSV',
                        'clasificacionTributariaSV',
                        'descripcionClasificacionSV',
                        'direccionSV',
                        'ciudadEstadoSV',
                        'codigoPostalSV',
                        'numeroTinSV'
                    ])
                ]],
            nombreDeclaracionSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaSV')),
                ]],
            clasificacionTributariaSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaSV')),
                ]],
            descripcionClasificacionSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaSV')),
                ]],
            direccionSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaSV')),
                ]],
            ciudadEstadoSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaSV')),
                ]],
            codigoPostalSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaSV')),
                ]],
            numeroTinSV: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, this.validationControl('leyFatcaSV')),
                    R.validationForOnlyNumbers(),
                    R.validationForMaxLength(30)
                ]],
            autorizarDeclaracionSV: [false, [
                    R.validationForRequiredTrue()
                ]],
            autorizarBancoSV: [false, [
                    R.validationForRequiredTrue()
                ]]
        });
        this.FC = this.formulario.controls;
    }
    /* PENDIENTE REVISAR EL SELECT REPETIDO DE OTRAS NACIONALIDADES */
    /* Honduras */
    makeFormGroupHN() {
        const R = this.rules;
        this.formulario = this.formBuilder.group({
            ciudadaniaUsaHN: [false, []],
            nacionalidadHN: ['', [
                    R.resetMyCallbackValidation([
                        'numeroPasaporteHN',
                        'pasaporteUsaHN',
                        'numeroPasaporteHN',
                        'residenciaHN',
                        'numeroTinHN'
                    ])
                ]],
            nacionalidadUsaHN: [false, [
                    R.resetMyCallbackValidation([
                        'pasaporteUsaHN',
                        'numeroPasaporteHN',
                        'residenciaHN',
                        'numeroTinHN'
                    ])
                ]],
            pasaporteUsaHN: [false, [
                    R.resetMyCallbackValidation([
                        'numeroPasaporteHN'
                    ])
                ]],
            numeroPasaporteHN: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('pasaporteUsaHN').value === true &&
                            control.parent.get('nacionalidadUsaHN').value === false) {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    R.validationForMinLength(6),
                    R.validationForMaxLength(20)
                ]],
            residenciaHN: [false, [
                    R.resetMyCallbackValidation([
                        'numeroTinHN'
                    ])
                ]],
            numeroTinHN: ['', [
                    R.validationWithCallBack(R.errorTypeRequired, (control) => {
                        if (!control.parent) {
                            return true;
                        }
                        if (control.parent.get('nacionalidadUsaHN').value === true ||
                            control.parent.get('residenciaHN').value === true ||
                            control.parent.get('nacionalidadHN').value === '00008') {
                            return control.value !== '';
                        }
                        return true;
                    }),
                    R.validationForOnlyNumbers(),
                    R.validationForMinLength(9),
                    R.validationForMaxLength(20)
                ]],
            diasAnioCursoHN: ['', [
                    R.validationForOnlyNumbers()
                ]],
            diasAnioPasadoHN: ['', [
                    R.validationForOnlyNumbers()
                ]],
            diasAnioAntepasadoHN: ['', [
                    R.validationForOnlyNumbers()
                ]],
            estudioHN: [false, []],
            activdadDiplomaticaHN: [false, []],
            tratamientoMedicoHN: [false, []],
            otroMotivoHN: [false, []],
            nacionalidad2HN: [false, []] // Esta no va, validar, agregar campo de descripcion de motivo STRING, MIN 1, MAX 50
        });
        this.FC = this.formulario.controls;
    }
    /* Costa Rica */
    makeFormGroupCR() {
        this.formulario = this.formBuilder.group({
            personaPublicaCR: [false, []],
            vinculoPersonaPublicaCR: [false, []],
            objetivoVinculacionCR: [false, []],
            residenciaFiscalCR: [false, []],
            manejoFondosCR: [false, []],
            compraVentaPropiedadesCR: [false, []],
            comercioMetalesCR: [false, []],
            sinFinesDeLucroCR: [false, []],
            administradorRecursosCR: [false, []],
            proveedorServiciosCR: [false, []],
            prestamistaCR: [false, []],
            regulacionSugefCR: [false, []],
            leyFatcaCR: [false, []]
        });
        this.FC = this.formulario.controls;
    }
    /*
      Obtiene los tipos de errores de cada campo
      del formulario con sus respectivos mensajes
      por cada país.
    */
    /* Panamá */
    getErrorsPA() {
        const R = this.rules;
        return {
            paisPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            numeroIdentificacionPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            nombreDeclaracionPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            clasificacionTributariaPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            descripcionClasificacionPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            direccionPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            ciudadEstadoPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            codigoPostalPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            numeroTinPA: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
                { type: R.errorTypeOnlyNumbers, label: 'Sólo acepta números.' },
                { type: R.errorTypeMaxLength, label: 'Máximo 30 dígitos.' },
            ],
            autorizarDeclaracionPA: [
                { type: R.errorTypeRequiredTrue, label: 'Debes aceptar la declaración.' },
            ],
        };
    }
    /* El Salvador */
    getErrorsSV() {
        const R = this.rules;
        return {
            tipoIdentificacionSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            numeroIdentificacionSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            parentescoSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            nombrePersonaPublicaSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            nombreDeclaracionSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            clasificacionTributariaSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            descripcionClasificacionSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            direccionSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            ciudadEstadoSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            codigoPostalSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
            ],
            numeroTinSV: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
                { type: R.errorTypeOnlyNumbers, label: 'Sólo acepta números.' },
                { type: R.errorTypeMaxLength, label: 'Máximo 30 dígitos.' },
            ],
            autorizarDeclaracionSV: [
                { type: R.errorTypeRequiredTrue, label: 'Debes aceptar la declaración.' },
            ],
            autorizarBancoSV: [
                { type: R.errorTypeRequiredTrue, label: 'Debes aceptar la autorización al banco.' },
            ],
        };
    }
    /* Honduras */
    getErrorsHN() {
        const R = this.rules;
        return {
            numeroPasaporteHN: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
                { type: R.errorTypeMinLength, label: 'Mínimo 6 caracteres.' },
                { type: R.errorTypeMaxLength, label: 'Máximo 20 caracteres.' },
            ],
            numeroTinHN: [
                { type: R.errorTypeRequired, label: 'El campo es obligatorio.' },
                { type: R.errorTypeOnlyNumbers, label: 'Sólo acepta números.' },
                { type: R.errorTypeMinLength, label: 'Mínimo 9 caracteres.' },
                { type: R.errorTypeMaxLength, label: 'Máximo 20 caracteres.' },
            ],
            diasAnioCursoHN: [
                { type: R.errorTypeOnlyNumbers, label: 'Sólo acepta números.' },
            ],
            diasAnioPasadoHN: [
                { type: R.errorTypeOnlyNumbers, label: 'Sólo acepta números.' },
            ],
            diasAnioAntepasadoHN: [
                { type: R.errorTypeOnlyNumbers, label: 'Sólo acepta números.' },
            ]
        };
    }
    /* Costa Rica */
    getErrorsCR() {
        const R = this.rules;
        return {};
    }
    /*
      Se validan los campos del formulario para
      que se envien de forma correcta por cada país.
    */
    /* Panamá */
    validFormGroupPA() {
        const C = this.formulario.controls;
        if (C.personaPublicaPA.value === false) {
            C.reconocimientoPublicoPA.setValue(false);
            C.representanteLegalPA.setValue(false);
            C.politicamenteExpuestoPA.setValue(false);
            C.familiarPersonaPublicaPA.setValue(false);
            C.vinculoPersonaPublicaPA.setValue(false);
        }
        if (C.residenciaOtroPaisPA.value === false) {
            C.paisPA.setValue(null);
            C.numeroIdentificacionPA.setValue(null);
        }
        if (C.leyFatcaPA.value === false) {
            C.nombreDeclaracionPA.setValue(null);
            C.clasificacionTributariaPA.setValue(null);
            C.descripcionClasificacionPA.setValue(null);
            C.direccionPA.setValue(null);
            C.ciudadEstadoPA.setValue(null);
            C.codigoPostalPA.setValue(null);
            C.numeroTinPA.setValue(null);
        }
    }
    /* El Salvador */
    validFormGroupSV() {
        const C = this.formulario.controls;
        if (C.personaPublicaSV.value === false) {
            C.reconocimientoPublicoSV.setValue(false);
            C.representanteLegalSV.setValue(false);
            C.politicamenteExpuestoSV.setValue(false);
            C.familiarPersonaPublicaSV.setValue(false);
            C.vinculoPersonaPublicaSV.setValue(false);
            C.tipoIdentificacionSV.setValue(null);
            C.numeroIdentificacionSV.setValue(null);
            C.parentescoSV.setValue(null);
            C.nombrePersonaPublicaSV.setValue(null);
        }
        if (C.leyFatcaSV.value === false) {
            C.nombreDeclaracionSV.setValue(null);
            C.clasificacionTributariaSV.setValue(null);
            C.descripcionClasificacionSV.setValue(null);
            C.direccionSV.setValue(null);
            C.ciudadEstadoSV.setValue(null);
            C.codigoPostalSV.setValue(null);
            C.numeroTinSV.setValue(null);
        }
    }
    /* Honduras */
    validFormGroupHN() {
        const C = this.formulario.controls;
        if (C.nacionalidadHN.value === '00008') {
            C.nacionalidadUsaHN.setValue(false);
            C.pasaporteUsaHN.setValue(false);
            C.numeroPasaporteHN.setValue(null);
            C.residenciaHN.setValue(false);
        }
        if (C.nacionalidadUsaHN.value === true) {
            C.pasaporteUsaHN.setValue(false);
            C.numeroPasaporteHN.setValue(null);
            C.residenciaHN.setValue(false);
        }
        if (C.pasaporteUsaHN.value === false && C.nacionalidadUsaHN.value === false && C.nacionalidadHN.value !== '00008') {
            C.numeroPasaporteHN.setValue(null);
        }
        if (C.residenciaHN.value === false && C.nacionalidadUsaHN.value === false && C.nacionalidadHN.value !== '00008') {
            C.numeroTinHN.setValue(null);
        }
        if (C.diasAnioCursoHN.value === null || C.diasAnioCursoHN.value.trim() === '') {
            C.diasAnioCursoHN.setValue(0);
        }
        if (C.diasAnioPasadoHN.value === null || C.diasAnioPasadoHN.value.trim() === '') {
            C.diasAnioPasadoHN.setValue(0);
        }
        if (C.diasAnioAntepasadoHN.value === null || C.diasAnioAntepasadoHN.value.trim() === '') {
            C.diasAnioAntepasadoHN.setValue(0);
        }
    }
    /* Costa Rica */
    validFormGroupCR() {
        const C = this.formulario.controls;
    }
    /*
      Funcion general para validar
      un control del formulario.
    */
    validationControl(controlName) {
        return (control) => {
            if (!control.parent) {
                return true;
            }
            if (control.parent.get(controlName).value === true) {
                return control.value !== '';
            }
            return true;
        };
    }
};
Vin006Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vin006',
        template: __webpack_require__(/*! ./vin006.component.html */ "./src/app/modules/cam/vinculacion/vin006/vin006.component.html"),
        encapsulation: src_app_modules_common_components_encaptulation__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].ShadowDom,
        styles: [__webpack_require__(/*! ./vin006.component.scss */ "./src/app/modules/cam/vinculacion/vin006/vin006.component.scss"), __webpack_require__(/*! ../../../../../assets/cam/scss/components/vinculacion/_vin006.scss */ "./src/assets/cam/scss/components/vinculacion/_vin006.scss")]
    })
], Vin006Component);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vinculacion-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vinculacion-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VinculacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculacionRoutingModule", function() { return VinculacionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vin001/vin001.component */ "./src/app/modules/cam/vinculacion/vin001/vin001.component.ts");
/* harmony import */ var _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vin002/vin002.component */ "./src/app/modules/cam/vinculacion/vin002/vin002.component.ts");
/* harmony import */ var _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vin003/vin003.component */ "./src/app/modules/cam/vinculacion/vin003/vin003.component.ts");
/* harmony import */ var _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vin004/vin004.component */ "./src/app/modules/cam/vinculacion/vin004/vin004.component.ts");
/* harmony import */ var _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vin005/vin005.component */ "./src/app/modules/cam/vinculacion/vin005/vin005.component.ts");
/* harmony import */ var _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vin006/vin006.component */ "./src/app/modules/cam/vinculacion/vin006/vin006.component.ts");









const routes = [
    {
        path: 'vin001',
        component: _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_3__["Vin001Component"],
        // canActivate: [SecurityAccessGuard],
        // canDeactivate: [SecurityAccessGuard],
        data: {
            stepId: 'VIN001'
        }
    },
    {
        path: 'vin002',
        component: _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_4__["Vin002Component"],
        // canActivate: [SecurityAccessGuard],
        // canDeactivate: [SecurityAccessGuard],
        data: {
            stepId: 'VIN002'
        }
    },
    {
        path: 'vin003',
        component: _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_5__["Vin003Component"],
        // canActivate: [SecurityAccessGuard],
        // canDeactivate: [SecurityAccessGuard],
        data: {
            stepId: 'VIN003'
        }
    },
    {
        path: 'vin004',
        component: _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_6__["Vin004Component"],
        // canActivate: [SecurityAccessGuard],
        // canDeactivate: [SecurityAccessGuard],
        data: {
            stepId: 'VIN004'
        }
    },
    {
        path: 'vin005',
        component: _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_7__["Vin005Component"],
        // canActivate: [SecurityAccessGuard],
        // canDeactivate: [SecurityAccessGuard],
        data: {
            stepId: 'VIN005'
        }
    },
    {
        path: 'vin006',
        component: _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_8__["Vin006Component"],
        // canActivate: [SecurityAccessGuard],
        // canDeactivate: [SecurityAccessGuard],
        data: {
            stepId: 'VIN006'
        }
    }
];
let VinculacionRoutingModule = class VinculacionRoutingModule {
};
VinculacionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VinculacionRoutingModule);



/***/ }),

/***/ "./src/app/modules/cam/vinculacion/vinculacion.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/cam/vinculacion/vinculacion.module.ts ***!
  \***************************************************************/
/*! exports provided: VinculacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculacionModule", function() { return VinculacionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vin001/vin001.component */ "./src/app/modules/cam/vinculacion/vin001/vin001.component.ts");
/* harmony import */ var _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vin002/vin002.component */ "./src/app/modules/cam/vinculacion/vin002/vin002.component.ts");
/* harmony import */ var _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vin003/vin003.component */ "./src/app/modules/cam/vinculacion/vin003/vin003.component.ts");
/* harmony import */ var _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vin004/vin004.component */ "./src/app/modules/cam/vinculacion/vin004/vin004.component.ts");
/* harmony import */ var _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vin005/vin005.component */ "./src/app/modules/cam/vinculacion/vin005/vin005.component.ts");
/* harmony import */ var _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vin006/vin006.component */ "./src/app/modules/cam/vinculacion/vin006/vin006.component.ts");
/* harmony import */ var _vinculacion_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vinculacion-routing.module */ "./src/app/modules/cam/vinculacion/vinculacion-routing.module.ts");
/* harmony import */ var src_app_modules_cam_common_components_button_back_button_back_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/cam/common/components/button-back/button-back.module */ "./src/app/modules/cam/common/components/button-back/button-back.module.ts");
/* harmony import */ var src_app_modules_cam_common_components_button_continue_button_continue_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/cam/common/components/button-continue/button-continue.module */ "./src/app/modules/cam/common/components/button-continue/button-continue.module.ts");
/* harmony import */ var src_app_modules_cam_common_components_split_input_split_input_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/cam/common/components/split-input/split-input.module */ "./src/app/modules/cam/common/components/split-input/split-input.module.ts");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/components/common-components.module */ "./src/app/modules/cam/common/components/common-components.module.ts");
/* harmony import */ var _common_components_tool_tip_tool_tip_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/components/tool-tip/tool-tip.module */ "./src/app/modules/common/components/tool-tip/tool-tip.module.ts");
/* harmony import */ var _common_components_labelsError_labels_error_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/components/labelsError/labels.error.module */ "./src/app/modules/common/components/labelsError/labels.error.module.ts");
/* harmony import */ var _common_directives_directive_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/directives/directive.module */ "./src/app/modules/common/directives/directive.module.ts");
/* harmony import */ var _common_components_input_date_input_date_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/components/input-date/input-date.module */ "./src/app/modules/cam/common/components/input-date/input-date.module.ts");
/* harmony import */ var _common_components_select_input_select_input_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/components/select-input/select-input.module */ "./src/app/modules/cam/common/components/select-input/select-input.module.ts");
/* harmony import */ var _common_components_check_sino_check_sino_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/components/check-sino/check-sino.module */ "./src/app/modules/cam/common/components/check-sino/check-sino.module.ts");
/* harmony import */ var _common_components_input_switch_input_switch_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/components/input-switch/input-switch.module */ "./src/app/modules/cam/common/components/input-switch/input-switch.module.ts");
/* harmony import */ var _common_components_input_checkbox_input_checkbox_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/components/input-checkbox/input-checkbox.module */ "./src/app/modules/cam/common/components/input-checkbox/input-checkbox.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_components_search_list_search_list_module___WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../common/components/search-list/search-list.module. */ "./src/app/modules/cam/common/components/search-list/search-list.module..ts");
























let VinculacionModule = class VinculacionModule {
};
VinculacionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _vin001_vin001_component__WEBPACK_IMPORTED_MODULE_3__["Vin001Component"],
            _vin002_vin002_component__WEBPACK_IMPORTED_MODULE_4__["Vin002Component"],
            _vin003_vin003_component__WEBPACK_IMPORTED_MODULE_5__["Vin003Component"],
            _vin004_vin004_component__WEBPACK_IMPORTED_MODULE_6__["Vin004Component"],
            _vin005_vin005_component__WEBPACK_IMPORTED_MODULE_7__["Vin005Component"],
            _vin006_vin006_component__WEBPACK_IMPORTED_MODULE_8__["Vin006Component"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vinculacion_routing_module__WEBPACK_IMPORTED_MODULE_9__["VinculacionRoutingModule"],
            src_app_modules_cam_common_components_button_back_button_back_module__WEBPACK_IMPORTED_MODULE_10__["ButtonBackModule"],
            _common_components_search_list_search_list_module___WEBPACK_IMPORTED_MODULE_23__["SearchListModule"],
            src_app_modules_cam_common_components_button_continue_button_continue_module__WEBPACK_IMPORTED_MODULE_11__["ButtonContinueModule"],
            src_app_modules_cam_common_components_split_input_split_input_module__WEBPACK_IMPORTED_MODULE_12__["SplitInputModule"],
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_13__["CommonComponentsModule"],
            _common_components_select_input_select_input_module__WEBPACK_IMPORTED_MODULE_18__["SelectInputModule"],
            _common_components_tool_tip_tool_tip_module__WEBPACK_IMPORTED_MODULE_14__["ToolTipModule"],
            _common_components_labelsError_labels_error_module__WEBPACK_IMPORTED_MODULE_15__["LabelsErrorModule"],
            _common_directives_directive_module__WEBPACK_IMPORTED_MODULE_16__["DirectiveModule"],
            _common_components_input_date_input_date_module__WEBPACK_IMPORTED_MODULE_17__["InputDateModule"],
            _common_components_check_sino_check_sino_module__WEBPACK_IMPORTED_MODULE_19__["CheckSinoModule"],
            _common_components_input_switch_input_switch_module__WEBPACK_IMPORTED_MODULE_20__["InputSwitchModule"],
            _common_components_input_checkbox_input_checkbox_module__WEBPACK_IMPORTED_MODULE_21__["InputCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"]
        ]
    })
], VinculacionModule);



/***/ }),

/***/ "./src/app/modules/common/pipe/pipe.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/common/pipe/pipe.module.ts ***!
  \****************************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _search_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.pipe */ "./src/app/modules/common/pipe/search/search.pipe.ts");




let PipeModule = class PipeModule {
};
PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _search_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"]
        ],
        exports: [
            _search_search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PipeModule);



/***/ }),

/***/ "./src/app/modules/common/pipe/search/search.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/common/pipe/search/search.pipe.ts ***!
  \***********************************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    // tslint:disable-next-line: max-line-length
    transform(items = [], regx = '', done = (item) => '', limit = 10, filtro = (item) => true) {
        if (!items) {
            return [];
        }
        let num = 0;
        const temp = items.filter(item => filtro(item)).filter(item => {
            if (num < limit && done(item).toLowerCase().indexOf(regx.toLowerCase()) !== -1) {
                num++;
                return true;
            }
            return false;
        });
        return (num === 1 && done(temp[0]).toLowerCase() === regx.toLowerCase()) ? [] : temp;
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchInArray',
        pure: true
    })
], SearchPipe);



/***/ }),

/***/ "./src/assets/cam/scss/components/vinculacion/_vin001.scss":
/*!*****************************************************************!*\
  !*** ./src/assets/cam/scss/components/vinculacion/_vin001.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n    Comentarios del autor\r\n*/\n/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n  border: 0;\n  margin: 1em 0;\n  border-bottom: 2px solid #ffffff; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/**\r\n * body -styles\r\n */\n* {\n  font-family: \"MyriadPro\" !important; }\nbody {\n  font-size: 1em;\n  line-height: 1.3125em;\n  font-weight: 100;\n  font-style: normal;\n  margin: auto;\n  padding: 0;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n/**\r\n * Font familys - include.\r\n */\n@font-face {\n  font-family: \"MyriadPro\";\n  font-style: italic;\n  font-weight: 100;\n  src: url(\"/assets/cam/fonts/MyriadPro-It.eot?\") format(\"eot\"), url(\"/assets/cam/fonts/MyriadPro-It.woff\") format(\"woff\"), url(\"/assets/cam/fonts/MyriadPro-It.ttf\") format(\"truetype\"), url(\"/assets/cam/fonts/MyriadPro-It.svg#MyriadPro\") format(\"svg\"); }\n@font-face {\n  font-family: \"MyriadPro\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"/assets/cam/fonts/MyriadPro-Regular.eot?\") format(\"eot\"), url(\"/assets/cam/fonts/MyriadPro-Regular.woff\") format(\"woff\"), url(\"/assets/cam/fonts/MyriadPro-Regular.ttf\") format(\"truetype\"), url(\"/assets/cam/fonts/MyriadPro-Regular.svg#MyriadPro\") format(\"svg\"); }\n@font-face {\n  font-family: \"MyriadPro\";\n  font-style: normal;\n  font-weight: bold;\n  src: url(\"/assets/cam/fonts/MyriadPro-Bold.eot?\") format(\"eot\"), url(\"/assets/cam/fonts/MyriadPro-Bold.woff\") format(\"woff\"), url(\"/assets/cam/fonts/MyriadPro-Bold.ttf\") format(\"truetype\"), url(\"/assets/cam/fonts/MyriadPro-Bold.svg#MyriadPro\") format(\"svg\"); }\n/**\r\n * Text elements - styles.\r\n */\nh1, .h1 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 3.5625em;\n  font-weight: 900;\n  line-height: 1.33333333em;\n  margin-top: 0.36842105em;\n  margin-bottom: 0.73684211em;\n  font-style: normal; }\nh2, .h2 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 2.25em;\n  font-weight: 900;\n  line-height: 1.16666667em;\n  margin-top: 0.19444444em;\n  margin-bottom: 0.5em;\n  font-style: normal; }\nh3, .h3 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 1.625em;\n  font-weight: 300;\n  line-height: 0.80769231em;\n  margin-top: 0em;\n  margin-bottom: 0.80769231em;\n  font-style: normal; }\nh4, .h4 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 1.125em;\n  font-weight: 600;\n  line-height: 1.16666667em;\n  margin-top: 0em;\n  margin-bottom: 1em;\n  font-style: normal; }\nh5, .h5 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.3125em;\n  margin-top: 0em;\n  margin-bottom: 1.3125em;\n  font-style: normal; }\nh6, .h6 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 0.75em;\n  font-weight: 300;\n  line-height: 1.33333333em;\n  margin-top: 0em;\n  margin-bottom: 0.83333333em;\n  font-style: normal; }\np {\n  color: #2F3337;\n  font-family: \"MyriadPro\";\n  font-size: 1em;\n  font-weight: 100;\n  line-height: 1.3125em;\n  margin-top: 0em;\n  margin-bottom: 1.3125em;\n  font-style: normal; }\nul li {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 0.9375em;\n  font-weight: 200;\n  line-height: 1.06666667em;\n  margin-top: 0.46666667em;\n  margin-bottom: 0em;\n  font-style: normal; }\nem {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 0.6875em;\n  font-weight: 300;\n  line-height: 1.36363636em;\n  margin-top: 0.90909091em;\n  margin-bottom: 0em;\n  font-style: normal; }\n/**\r\n * Text colors - styles.\r\n */\n.text__color--light {\n  color: white !important; }\n.text__color--dark {\n  color: #22262a !important; }\n.text__color {\n  color: #323c47; }\n.text__color--primary {\n  color: #EE3124; }\n/**\r\n * Text align - styles.\r\n */\n.text__align--left {\n  display: block;\n  text-align: left; }\n.text__align--right {\n  display: block;\n  text-align: right; }\n.text__align--center {\n  display: block;\n  text-align: center; }\n/**\r\n * Text align - weight.\r\n */\n.text__weight--regular {\n  font-weight: normal !important; }\n/**\r\n * Text margin variations\r\n */\n.text__margin--bottom0 {\n  margin-bottom: 0; }\n/**\r\n* Modules - forms - Layout\r\n*/\n.formContainer {\n  width: 100%;\n  display: block;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n@media (min-width: 992px) {\n    .formContainer {\n      padding: 2em 0;\n      border: solid 1px #bdbdbd;\n      padding: 2.1875em 2.5em;\n      background-image: url(/assets/cam/img/layout/curve_bg.png);\n      background-position: right bottom;\n      background-repeat: no-repeat;\n      background-color: rgba(189, 189, 189, 0.04);\n      border-radius: 2.625em;\n      -o-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      -ms-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17); } }\n.formContainer__columnContainer {\n    margin: 2.5em 0;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: space-around;\n    -o-justify-content: space-around;\n    -ms-justify-content: space-around;\n    justify-content: space-around;\n    -moz-align-items: flex-start;\n    -o-align-items: flex-start;\n    -ms-align-items: flex-start;\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .formContainer__columnContainer {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n@media (min-width: 992px) {\n      .formContainer__columnContainer {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n.formContainer__columnContainer .centerText {\n      text-align: center; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .centerText {\n          width: 80%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .centerText {\n          width: 80%; } }\n.formContainer__columnContainer .centerText--small {\n        width: 70%;\n        margin: 0.5rem auto; }\n@media (min-width: 576px) and (max-width: 768px) {\n          .formContainer__columnContainer .centerText--small {\n            width: 60%; } }\n@media (min-width: 768px) and (max-width: 992px) {\n          .formContainer__columnContainer .centerText--small {\n            width: 100%; } }\n@media (min-width: 992px) {\n          .formContainer__columnContainer .centerText--small {\n            width: 80%; } }\n.formContainer__columnContainer .centerText--colorPrimary {\n        color: #EE3124; }\n.formContainer__columnContainer .formColumn {\n      width: 100%;\n      margin: 0;\n      padding: 0; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .formColumn {\n          width: 45%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .formColumn {\n          width: 35%; } }\n.formContainer__columnContainer .formColumn--center {\n        margin: auto; }\n.formContainer__columnContainer .formColumn__contentCenter {\n        text-align: center; }\n.formContainer__columnContainer .formColumn__contentCenter a {\n          cursor: pointer;\n          color: #EE3124 !important;\n          display: inline-block;\n          margin: 0 0.3125em;\n          font-weight: bold;\n          pointer-events: auto !important; }\n.formContainer__columnContainer .formColumnPrincipal {\n      width: 100%;\n      margin: 0;\n      padding-top: 1em; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .formColumnPrincipal {\n          width: 95%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .formColumnPrincipal {\n          width: 85%; } }\n.formContainer__columnContainer .formColumnMiddle {\n      width: 100%;\n      margin: 0;\n      padding-top: 1em;\n      text-align: center; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .formColumnMiddle {\n          width: 70%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .formColumnMiddle {\n          width: 60%; } }\n.formContainer__columnContainer .indications {\n      display: -webkit-box;\n      display: flex;\n      width: 100%; }\n.formContainer__columnContainer .indications ul {\n        width: 100%;\n        margin: auto; }\n@media (min-width: 768px) and (max-width: 992px) {\n          .formContainer__columnContainer .indications ul {\n            width: 60%; } }\n@media (min-width: 992px) {\n          .formContainer__columnContainer .indications ul {\n            width: 40%; } }\n.formContainer__buttonContainer {\n    width: 100%;\n    margin: 2.5em 0;\n    display: block; }\n.formContainer__buttonContainer--dualButton {\n      -o-box-sizing: border-box;\n      -ms-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-display: flex;\n      -moz-display: flex;\n      -o-display: flex;\n      -ms-display: flex;\n      display: -webkit-box;\n      display: flex;\n      -moz-justify-content: space-between;\n      -o-justify-content: space-between;\n      -ms-justify-content: space-between;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -moz-align-items: center;\n      -o-align-items: center;\n      -ms-align-items: center;\n      -webkit-box-align: center;\n              align-items: center; }\n.formContainer__buttonContainer--dualButton app-button-continue {\n        width: 100%;\n        margin: 0 0.3125em;\n        padding: 0; }\n.formContainer__buttonContainer--dualButton app-button-continue button {\n          width: 100%; }\n.formContainer__buttonContainer--dualButton button {\n        margin: 0 0.3125em;\n        width: 100%; }\n/**\r\n* Modules - forms - Layout\r\n*/\n.cardsContainer {\n  width: 100%;\n  display: block;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n@media (min-width: 992px) {\n    .cardsContainer {\n      padding: 2em 0;\n      border: solid 1px #bdbdbd;\n      padding: 2.1875em 2.5em;\n      background-image: url(/assets/cam/img/layout/curve_bg.png);\n      background-position: right bottom;\n      background-repeat: no-repeat;\n      background-color: rgba(189, 189, 189, 0.04);\n      border-radius: 2.625em;\n      -o-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      -ms-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17); } }\n.cardsContainer__row {\n    margin: 2.5em 0;\n    width: 100%;\n    min-height: 100px;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: center;\n    -o-justify-content: center;\n    -ms-justify-content: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -moz-align-items: flex-start;\n    -o-align-items: flex-start;\n    -ms-align-items: flex-start;\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .cardsContainer__row {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n@media (min-width: 992px) {\n      .cardsContainer__row {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n.cardsContainer__row .card {\n      padding: 1.5625em 1.875em;\n      border-radius: 1.25em;\n      background: #E4E4E4;\n      margin: 1rem 0;\n      width: 100%;\n      -o-box-sizing: border-box;\n      -ms-box-sizing: border-box;\n      box-sizing: border-box; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .cardsContainer__row .card {\n          font-size: 1.15em;\n          width: 45%;\n          margin: 1rem; } }\n@media (min-width: 992px) {\n        .cardsContainer__row .card {\n          font-size: 1.15em;\n          width: 30%;\n          margin: 1rem; } }\n.cardsContainer__row .card__header {\n        border-bottom: solid 3px #EE3124;\n        width: 100%; }\n.cardsContainer__row .card__header h4 {\n          font-weight: bold; }\n.cardsContainer__row .card__header h4 strong {\n            color: #EE3124; }\n.cardsContainer__row .card__body {\n        margin: 0.75em 0; }\n@media (min-width: 768px) and (max-width: 992px) {\n          .cardsContainer__row .card__body {\n            min-height: 13rem; } }\n@media (min-width: 992px) {\n          .cardsContainer__row .card__body {\n            min-height: 14rem; } }\n.cardsContainer__row .card__body ul {\n          padding: 0 0.9375em;\n          list-style: none; }\n.cardsContainer__row .card__body ul li:before {\n            content: \"\\2022\";\n            color: #EE3124;\n            font-weight: bold;\n            display: inline-block;\n            width: 1em;\n            margin-left: -1em; }\n.cardsContainer__row .card__footer {\n        margin-top: 1.25em;\n        -o-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        -webkit-display: flex;\n        -moz-display: flex;\n        -o-display: flex;\n        -ms-display: flex;\n        display: -webkit-box;\n        display: flex;\n        -moz-justify-content: flex-end;\n        -o-justify-content: flex-end;\n        -ms-justify-content: flex-end;\n        -webkit-box-pack: end;\n                justify-content: flex-end;\n        -moz-align-items: center;\n        -o-align-items: center;\n        -ms-align-items: center;\n        -webkit-box-align: center;\n                align-items: center; }\n.cardsContainer__row .card__footer span {\n          color: #EE3124;\n          margin-right: 0.625em; }\n.cardsContainer__row .card__footer img {\n          width: 20px; }\n.cardsContainer__buttonContainer {\n    width: 100%;\n    margin: 2.5em 0;\n    display: block; }\n/**\r\n * Layout - Main container\r\n */\n.container {\n  width: 100%;\n  background-color: #ffffff;\n  position: relative;\n  padding: 2em 1.25em;\n  min-height: 100vh;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: flex-start;\n  -o-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -moz-flex-direction: column;\n  -o-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n@media (min-width: 992px) {\n    .container--menu {\n      width: 50%;\n      margin: 0 auto; } }\n@media (min-width: 1200px) {\n    .container--menu {\n      width: 50%;\n      margin: 0 auto; } }\n/**\r\n * Modules - Back button\r\n */\n.backButton {\n  width: 100%;\n  height: 2.5em;\n  text-align: center;\n  margin-bottom: 0.9375em;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: flex-start;\n  -o-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -moz-flex-direction: row;\n  -o-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n@media (min-width: 992px) {\n    .backButton {\n      margin-bottom: 2em; } }\n.backButton img {\n    height: 20px;\n    width: 20px; }\n.backButton span {\n    font-weight: bold;\n    font-family: \"MyriadPro\" !important;\n    font-size: 1.125em;\n    color: #22262a;\n    margin: 0 0.4375em;\n    padding: 0; }\n/**\r\n * Modules - main title\r\n */\n.initialTitle {\n  padding: 0 10%;\n  text-align: center; }\n.initialTitle--center {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\n.initialTitle--center h3 {\n      margin: 0; }\n.initialTitle--isHidden {\n    display: none; }\n@media (min-width: 992px) {\n      .initialTitle--isHidden {\n        display: block; } }\n.initialTitle--isHiddenSmall {\n    display: block; }\n@media (min-width: 992px) {\n      .initialTitle--isHiddenSmall {\n        display: none; } }\n@media (min-width: 1200px) {\n      .initialTitle--isHiddenSmall {\n        display: none; } }\n.initialTitle h2 {\n    font-weight: bold;\n    margin-bottom: 0.125em; }\n.initialTitle h3 {\n    font-weight: bold; }\n.initialTitle p {\n    padding: 0; }\n@media (min-width: 768px) and (max-width: 992px) {\n    .initialTitle img {\n      width: 2.8125em; } }\n.initialTitle__stepsCounter {\n    width: 100%;\n    margin: 0 0 0.9375em 0;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: center;\n    -o-justify-content: center;\n    -ms-justify-content: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center; }\n.initialTitle__stepsCounter .step {\n      background-color: #bdbdbd;\n      width: 1.75em;\n      height: 1.75em;\n      color: white;\n      margin-right: 2.5em;\n      position: relative;\n      border-radius: 50%;\n      -o-box-sizing: border-box;\n      -ms-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-display: flex;\n      -moz-display: flex;\n      -o-display: flex;\n      -ms-display: flex;\n      display: -webkit-box;\n      display: flex;\n      -moz-justify-content: center;\n      -o-justify-content: center;\n      -ms-justify-content: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -moz-align-items: center;\n      -o-align-items: center;\n      -ms-align-items: center;\n      -webkit-box-align: center;\n              align-items: center; }\n.initialTitle__stepsCounter .step:before {\n        content: '';\n        top: 0;\n        bottom: 0;\n        right: 1.75em;\n        width: 2.5em;\n        height: 2px;\n        background-color: #bdbdbd;\n        margin: auto 0;\n        position: absolute;\n        z-index: 0; }\n.initialTitle__stepsCounter .step:first-child:before {\n        display: none; }\n.initialTitle__stepsCounter .step:last-child {\n        margin-right: 0; }\n.initialTitle__stepsCounter .step--active {\n        background-color: #EE3124; }\n.initialTitle__stepsCounter .step--active:before {\n          background-color: #EE3124; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .initialTitle__stepsCounter .step {\n          font-size: 30px; } }\n.initialTitle__stepsCounter .bar {\n      border: 3px solid #bdbdbd;\n      width: 25%;\n      margin: 0.5rem; }\n@media (min-width: 992px) {\n        .initialTitle__stepsCounter .bar {\n          width: 10%; } }\n.initialTitle__stepsCounter .bar--active {\n        border: 3px solid #EE3124; }\n/**\r\n * Modules - user info\r\n */\n.userInfo {\n  width: 100%;\n  padding: 0.9375em 2.5em;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: flex-start;\n  -o-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -moz-flex-direction: column;\n  -o-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n@media (min-width: 992px) {\n    .userInfo {\n      -moz-justify-content: space-between;\n      -o-justify-content: space-between;\n      -ms-justify-content: space-between;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -moz-align-items: center;\n      -o-align-items: center;\n      -ms-align-items: center;\n      -webkit-box-align: center;\n              align-items: center;\n      -moz-flex-direction: row;\n      -o-flex-direction: row;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row; } }\n.userInfo__userAvatar {\n    width: 120px;\n    height: 120px;\n    border: solid 7px #2F3337;\n    overflow: hidden;\n    margin-bottom: 1.25em;\n    border-radius: 50%;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: center;\n    -o-justify-content: center;\n    -ms-justify-content: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center; }\n@media (min-width: 992px) {\n      .userInfo__userAvatar {\n        width: 170px;\n        height: 170px; } }\n.userInfo__userAvatar img {\n      height: 100%; }\n.userInfo__userData {\n    text-align: center; }\n.userInfo__userData h4 {\n      font-weight: bold;\n      margin-bottom: 0.9375em; }\n.userInfo__userData h5 {\n      margin-bottom: 0.3125em; }\n/**\r\n* Modules - forms - form group\r\n*/\n.formGroup {\n  width: 100%;\n  margin-bottom: 1.25em; }\n.formGroup hr {\n    width: 100%;\n    margin: 0;\n    border-bottom: 1px solid #8E8E8E; }\n@media (min-width: 768px) and (max-width: 992px) {\n    .formGroup--flex {\n      display: -webkit-box;\n      display: flex; } }\n@media (min-width: 992px) {\n    .formGroup--flex {\n      display: -webkit-box;\n      display: flex; } }\n@media (min-width: 1200px) {\n    .formGroup--flex {\n      display: -webkit-box;\n      display: flex; } }\n@media (min-width: 992px) {\n    .formGroup--center {\n      width: 80%;\n      margin: 1.25em auto; } }\n@media (min-width: 1200px) {\n    .formGroup--center {\n      width: 80%;\n      margin: 1.25em auto; } }\n.formGroup__label {\n    font-weight: normal;\n    font-size: 1em;\n    padding: 0;\n    margin: 0 0 0.625em 0;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: space-between;\n    -o-justify-content: space-between;\n    -ms-justify-content: space-between;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center; }\n.formGroup__label--middle {\n      text-align: center;\n      display: block; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .formGroup__label--large {\n        width: 80%; } }\n@media (min-width: 992px) {\n      .formGroup__label--large {\n        width: 80%; } }\n@media (min-width: 1200px) {\n      .formGroup__label--large {\n        width: 80%; } }\n.formGroup__label--center {\n      font-size: 0.875em;\n      margin: 2em 0 0 0;\n      display: block; }\n.formGroup__label--primary {\n      color: #EE3124; }\n.formGroup__label--gray {\n      color: #8E8E8E; }\n.formGroup__label--apertura {\n      margin: 0;\n      font-size: 1.125em; }\n.formGroup__inputDate {\n    width: 35%;\n    background-color: #E4E4E4;\n    border: solid 1px #E4E4E4;\n    box-shadow: none;\n    outline: none;\n    height: 2.75em !important;\n    padding: 0 0.9375em !important;\n    font-size: 1em !important;\n    border-radius: 0;\n    color: #2F3337;\n    text-align: center;\n    font-style: italic; }\n.formGroup__input {\n    width: 100%;\n    background-color: #E4E4E4;\n    border: solid 1px #E4E4E4;\n    box-shadow: none;\n    outline: none;\n    height: 2.75em !important;\n    padding: 0 0.9375em !important;\n    font-size: 1em !important;\n    border-radius: 0;\n    color: #2F3337;\n    font-style: italic;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: flex-start;\n    -o-justify-content: flex-start;\n    -ms-justify-content: flex-start;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-transition: ease all 0.3s;\n    transition: ease all 0.3s; }\n.formGroup__input:hover {\n      border-color: rgba(34, 38, 42, 0.3); }\n.formGroup__input:focus {\n      border-color: rgba(34, 38, 42, 0.3); }\n.formGroup__input:disabled {\n      background-color: rgba(189, 189, 189, 0.2);\n      border-color: rgba(34, 38, 42, 0.2);\n      cursor: no-drop;\n      color: rgba(34, 38, 42, 0.5); }\n.formGroup__input:disabled ::-webkit-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: red;\n        opacity: 1;\n        /* Firefox */ }\n.formGroup__input:disabled ::-moz-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: red;\n        opacity: 1;\n        /* Firefox */ }\n.formGroup__input:disabled ::-ms-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: red;\n        opacity: 1;\n        /* Firefox */ }\n.formGroup__input:disabled ::placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: red;\n        opacity: 1;\n        /* Firefox */ }\n.formGroup__input:disabled :-ms-input-placeholder {\n        /* Internet Explorer 10-11 */\n        color: red; }\n.formGroup__input:disabled ::-ms-input-placeholder {\n        /* Microsoft Edge */\n        color: red; }\n.formGroup__input--select {\n      background-image: url(/assets/cam/img/icon/felcha_hacia_abajo.svg);\n      background-size: 1.25em 1.25em;\n      background-position: center right;\n      background-repeat: no-repeat;\n      cursor: pointer;\n      background-origin: content-box;\n      margin-right: 0.125em;\n      font-style: italic; }\n.formGroup__input--alignCenter {\n      text-align: center; }\n.formGroup__input--token {\n      background-color: #ffffff;\n      border: solid 1px #EE3124;\n      text-align: center;\n      color: #EE3124;\n      font-size: 2.25em !important;\n      height: 1.75em !important;\n      font-style: normal; }\n.formGroup__input--token:hover {\n        border-color: rgba(238, 49, 36, 0.3); }\n.formGroup__input--token:focus {\n        border-color: rgba(238, 49, 36, 0.3); }\n.formGroup__flexRow {\n    width: 100%;\n    margin-top: 0.5em;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: space-arround;\n    -o-justify-content: space-arround;\n    -ms-justify-content: space-arround;\n    -webkit-box-pack: space-arround;\n            justify-content: space-arround;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -moz-flex-direction: row;\n    -o-flex-direction: row;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row; }\n.formGroup__flexRow__child {\n      margin: 0 0.3125em; }\n.formGroup__flexRow__child:first-child {\n        margin-left: 0; }\n.formGroup__flexRow__child:last-child {\n        margin-right: 0; }\n.formGroup__flexRow__child--idLast {\n        width: 9.375em; }\n@media (min-width: 576px) and (max-width: 768px) {\n          .formGroup__flexRow__child--idLast {\n            width: 80em; } }\n@media (min-width: 768px) and (max-width: 992px) {\n          .formGroup__flexRow__child--idLast {\n            width: 50em; } }\n@media (min-width: 992px) {\n          .formGroup__flexRow__child--idLast {\n            width: 80em; } }\n.formGroup__flexRow__separator {\n      height: 100%;\n      font-size: 1.5em;\n      -o-box-sizing: border-box;\n      -ms-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-display: flex;\n      -moz-display: flex;\n      -o-display: flex;\n      -ms-display: flex;\n      display: -webkit-box;\n      display: flex;\n      -moz-justify-content: center;\n      -o-justify-content: center;\n      -ms-justify-content: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -moz-align-items: center;\n      -o-align-items: center;\n      -ms-align-items: center;\n      -webkit-box-align: center;\n              align-items: center; }\n::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #2F3337;\n  opacity: 1;\n  /* Firefox */ }\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #2F3337;\n  opacity: 1;\n  /* Firefox */ }\n::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #2F3337;\n  opacity: 1;\n  /* Firefox */ }\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #2F3337;\n  opacity: 1;\n  /* Firefox */ }\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #2F3337; }\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #2F3337; }\n.tooltip {\n  position: relative;\n  font-size: 12px; }\n.tooltip__trigger {\n    background-color: #004eff;\n    color: white !important;\n    width: 1.5625em;\n    height: 1.5625em;\n    text-decoration: none !important;\n    border-radius: 50%;\n    right: 1.25em;\n    top: 3.5625em;\n    position: relative;\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n    cursor: pointer;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: center;\n    -o-justify-content: center;\n    -ms-justify-content: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center; }\n.tooltip__trigger:hover ~ .tooltip__message {\n      -webkit-opacity: 1;\n      -moz-opacity: 1;\n      -o-opacity: 1;\n      -ms-opacity: 1;\n      opacity: 1;\n      -webkit-pointer-events: aoto;\n      -moz-pointer-events: aoto;\n      -o-pointer-events: aoto;\n      -ms-pointer-events: aoto;\n      pointer-events: aoto;\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n.tooltip__trigger--info {\n      background-color: #D4D4D4;\n      color: #EE3124 !important;\n      width: 1.875em;\n      height: 1.875em;\n      top: 0; }\n.tooltip__message {\n    width: 21.875em;\n    padding: 1.75em;\n    background-color: #bdbdbd;\n    position: absolute;\n    top: 5.9375em;\n    right: 0;\n    border-radius: 0.9375em;\n    font-size: 0.9375em;\n    line-height: 1.3125em;\n    font-weight: 500;\n    z-index: auto;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-opacity: 0;\n    -moz-opacity: 0;\n    -o-opacity: 0;\n    -ms-opacity: 0;\n    opacity: 0;\n    -webkit-transition: ease all 0.3s;\n    transition: ease all 0.3s;\n    -webkit-pointer-events: none;\n    -moz-pointer-events: none;\n    -o-pointer-events: none;\n    -ms-pointer-events: none;\n    pointer-events: none;\n    -webkit-transform: translateY(2em);\n    transform: translateY(2em); }\n.tooltip__message--info {\n      top: 2.5em; }\n/**\r\n* Modules - forms - Primary button\r\n*/\n.button {\n  height: 2.9375em;\n  margin: 1.75em auto;\n  border-radius: 0.3125em;\n  font-size: 1em;\n  border: none;\n  text-align: center;\n  width: 80%;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: center;\n  -o-justify-content: center;\n  -ms-justify-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -o-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  -webkit-outline: none;\n  -moz-outline: none;\n  -o-outline: none;\n  -ms-outline: none;\n  outline: none;\n  -webkit-transition: ease all 0.3s;\n  transition: ease all 0.3s; }\n.button:disabled {\n    cursor: no-drop;\n    -webkit-opacity: 0.3;\n    -moz-opacity: 0.3;\n    -o-opacity: 0.3;\n    -ms-opacity: 0.3;\n    opacity: 0.3; }\n.button--small {\n    width: 12.5em !important;\n    margin: auto; }\n.button__label {\n    line-height: 0;\n    padding: 0;\n    margin: 0;\n    font-size: 1.25em; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .button__label {\n        font-size: 1em; } }\n.button__label--light {\n      color: white; }\n.button__label--gray {\n      color: #bdbdbd;\n      font-weight: 500; }\n.button__label--red {\n      color: #EE3124;\n      font-weight: 800; }\n.button__label--icon {\n      margin-top: 0.3125em;\n      margin-right: 0.75em; }\n.button--left {\n    width: 50%;\n    float: right;\n    background-color: #bdbdbd;\n    margin-right: 0;\n    margin-top: 0;\n    margin-bottom: 0; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .button--left {\n        width: 40% !important; } }\n@media (min-width: 992px) {\n      .button--left {\n        width: 50% !important; } }\n.button--icon {\n    background-color: #ffffff;\n    margin: 0 0.5625em 0 0;\n    width: 45px !important; }\n.button--primary {\n    background-color: #EE3124; }\n.button--gray {\n    background-color: #bdbdbd; }\n@media (min-width: 576px) and (max-width: 768px) {\n    .button {\n      font-size: 1em;\n      width: 15.625em; } }\n@media (min-width: 768px) and (max-width: 992px) {\n    .button {\n      font-size: 1em;\n      width: 18.75em; } }\n@media (min-width: 992px) {\n    .button {\n      font-size: 1em;\n      width: 18.75em; } }\n@media (min-width: 1200px) {\n    .button {\n      font-size: 1em;\n      width: 21.875em; } }\n/**\r\n* Modules - forms - checkbox\r\n*/\n/* Hide the browser's default checkbox */\ninput[type=\"checkbox\"] {\n  position: absolute;\n  opacity: 0;\n  z-index: 10;\n  cursor: pointer;\n  height: 100%;\n  width: 30px;\n  top: 0;\n  left: 0; }\n@media (min-width: 1200px) {\n    input[type=\"checkbox\"] {\n      /* On mouse-over, add a primary background color */ }\n      input[type=\"checkbox\"]:hover ~ .checkmark {\n        background-color: #EE3124; } }\n.contCheckboxSiNo {\n  width: 55%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: auto;\n  /* Big Track */\n  /* Normal Knob */\n  /* Checked Knob (Blue Style) */\n  /* Big Knob */\n  /* Checked Big Knob (Blue Style) */ }\n@media (min-width: 768px) and (max-width: 992px) {\n    .contCheckboxSiNo--small {\n      width: 25% !important; } }\n@media (min-width: 992px) {\n    .contCheckboxSiNo--small {\n      width: 25% !important; } }\n@media (min-width: 1200px) {\n    .contCheckboxSiNo--small {\n      width: 20% !important; } }\n.contCheckboxSiNo::before {\n    content: 'No';\n    margin: 0.5rem 1rem;\n    font-size: 18px; }\n.contCheckboxSiNo::after {\n    content: 'Si';\n    color: #EE3124;\n    margin: 0.5rem 1rem;\n    font-size: 18px;\n    font-weight: bold; }\n@media (min-width: 768px) and (max-width: 992px) {\n    .contCheckboxSiNo {\n      width: 50%; } }\n@media (min-width: 992px) {\n    .contCheckboxSiNo {\n      width: 60%; } }\n@media (min-width: 1200px) {\n    .contCheckboxSiNo {\n      width: 50%; } }\n.contCheckboxSiNo input[type=checkbox].cambiar + .switch {\n    vertical-align: middle;\n    width: 40px;\n    height: 20px;\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    border-radius: 999px;\n    background-color: #9d9d9d;\n    -webkit-transition-duration: 0.4s;\n    -webkit-transition-property: background-color, box-shadow;\n    box-shadow: inset 0 0 0 0px rgba(0, 0, 0, 0.4); }\n.contCheckboxSiNo input[type=checkbox].cambiar:checked + .switch {\n    width: 40px;\n    background-position: 0 0;\n    background-color: #EE3124;\n    border: 1px solid #EE3124;\n    box-shadow: inset 0 0 0 10px #EE3124; }\n.contCheckboxSiNo input[type=checkbox].tamano.cambiar + .switch {\n    width: 80px;\n    height: 30px; }\n.contCheckboxSiNo input[type=checkbox].cambiar + .switch > span {\n    float: left;\n    width: 18px;\n    height: 18px;\n    border-radius: inherit;\n    background: white;\n    -webkit-transition-timing-function: cubic-bezier(0.54, 1, 0.5, 1);\n    -webkit-transition-duration: 0.4s;\n    -webkit-transition-property: transform, background-color, box-shadow;\n    -moz-transition-timing-function: cubic-bezier(0.54, 1.85, 0.5, 1);\n    -moz-transition-duration: 0.4s;\n    -moz-transition-property: transform, background-color;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(0, 0, 0, 0.4);\n    pointer-events: none;\n    margin-top: 1px;\n    margin-left: 14px; }\n.contCheckboxSiNo input[type=checkbox].cambiar:checked + .switch > span {\n    -webkit-transform: translate3d(20px, 0, 0);\n    -moz-transform: translate3d(20px, 0, 0);\n    background-color: white;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px #EE3124; }\n.contCheckboxSiNo input[type=checkbox].tamano.cambiar + .switch > span {\n    width: 20px;\n    height: 20px;\n    margin-top: 5px; }\n.contCheckboxSiNo input[type=checkbox].tamano.cambiar:checked + .switch > span {\n    -webkit-transform: translate3d(35px, 0, 0);\n    -moz-transform: translate3d(15px, 0, 0);\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 0px 0 1px #EE3124; }\n/* Customize the label (the checkboxContainer) */\n.checkboxContainer {\n  display: inline-block;\n  position: relative;\n  padding-left: 35px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-size: 13px;\n  font-weight: 200;\n  line-height: normal;\n  background-color: transparent !important;\n  width: 100%;\n  margin: 0.625em 0.625em 0.625em 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: flex-start;\n  -o-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center; }\n.checkboxContainer--blocks {\n    width: 50%; }\n@media (min-width: 576px) and (max-width: 768px) {\n      .checkboxContainer--blocks {\n        width: 33.3%; } }\n@media (min-width: 768px) and (max-width: 992px) {\n      .checkboxContainer--blocks {\n        width: 33.3%; } }\n@media (min-width: 992px) {\n      .checkboxContainer--blocks {\n        width: 50%; } }\n@media (min-width: 1200px) {\n      .checkboxContainer--blocks {\n        width: 25%;\n        margin: 0 0 1.25em 0; } }\n.checkboxContainer span {\n    font-size: 14px;\n    text-align: justify; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .checkboxContainer span {\n        font-size: 15px; } }\n.checkboxContainer span a {\n      cursor: pointer;\n      color: #EE3124 !important;\n      display: inline-block;\n      margin: 0 0.3125em;\n      font-weight: bold;\n      pointer-events: auto !important; }\n/* Create a custom checkbox */\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 20px;\n  width: 20px;\n  background-color: white;\n  border-radius: 3px;\n  border: solid 1px #979797;\n  overflow: hidden;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: center;\n  -o-justify-content: center;\n  -ms-justify-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -o-box-shadow: none;\n  -ms-box-shadow: none;\n  box-shadow: none;\n  -webkit-outline: none;\n  -moz-outline: none;\n  -o-outline: none;\n  -ms-outline: none;\n  outline: none;\n  -webkit-transition: ease all 0.3s;\n  transition: ease all 0.3s; }\n@media (min-width: 768px) and (max-width: 992px) {\n    .checkmark {\n      height: 30px;\n      width: 30px; } }\n.checkmark:after {\n    font-family: 'icomoon';\n    content: \"\\002714\";\n    color: #EE3124;\n    font-size: 16px;\n    -webkit-transition: ease all 0.3s;\n    transition: ease all 0.3s;\n    -webkit-transform: translateY(2em);\n    transform: translateY(2em); }\n@media (min-width: 1200px) {\n    .checkmark {\n      /* On mouse-over, add a primary background color */ }\n      .checkmark:hover {\n        background-color: #EE3124; } }\n/* When the checkbox is checked, add a primary background */\ninput[type=\"checkbox\"]:checked ~ .checkmark {\n  background-color: white; }\n/* Show the checkmark when checked */\ninput[type=\"checkbox\"]:checked ~ .checkmark:after {\n  -webkit-transform: translateY(0);\n  transform: translateY(0); }\n/**\r\n* Modules - forms - radiobutton\r\n*/\n/* Customize the label (the radiobuttonContainer) */\n.radiobuttonContainer {\n  position: relative;\n  user-select: none;\n  margin: 0 auto 2em auto;\n  font-size: 13px;\n  font-weight: 200;\n  line-height: normal;\n  background-color: transparent;\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: space-between;\n  -o-justify-content: space-between;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.radiobuttonContainer--naked {\n    margin: 0 0 0 1.25em;\n    width: auto !important;\n    -moz-justify-content: flex-start !important;\n    -o-justify-content: flex-start !important;\n    -ms-justify-content: flex-start !important;\n    -webkit-box-pack: start !important;\n            justify-content: flex-start !important; }\n.radiobuttonContainer__label {\n    background-color: #ffffff;\n    height: 3.3125em;\n    width: 100%;\n    padding: 1.125em;\n    font-weight: 600;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-flex: 1;\n    -o-flex: 1;\n    -webkit-box-flex: 1;\n            flex: 1;\n    -moz-justify-content: flex-start;\n    -o-justify-content: flex-start;\n    -ms-justify-content: flex-start;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center; }\n.radiobuttonContainer__label--naked {\n      background-color: transparent;\n      height: 2.1875em;\n      padding: 0.625em; }\n/* Hide the browser's default checkbox */\ninput[type=\"radio\"] {\n  position: absolute;\n  opacity: 0;\n  z-index: 10;\n  cursor: pointer;\n  height: 100%;\n  width: 20px;\n  top: 0;\n  right: 0; }\n/* Create a custom checkbox */\n/* Create a custom radio button */\n.radiobtn {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: transparent !important;\n  border-radius: 50%;\n  border: solid 2px rgba(238, 49, 36, 0.5);\n  margin-left: 0.9375em; }\n/* Create the indicator (the dot/circle - hidden when not checked) */\n.radiobtn:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n/* Show the indicator (dot/circle) when checked */\n.container input:checked ~ .radiobtn:after {\n  display: block; }\n/* Style the indicator (dot/circle) */\n.container .radiobtn:after {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto auto;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #EE3124; }\n/**\r\n* Modules - forms - Range slider\r\n*/\n.rangeSlider {\n  width: 100%;\n  margin: 1.3125em 0;\n  padding: 0;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: flex-start;\n  -o-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -moz-flex-direction: column;\n  -o-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.rangeSlider__indicator {\n    width: 100%;\n    margin-bottom: 1em;\n    background-color: #ffffff;\n    font-size: 1.625em;\n    font-weight: bold;\n    padding: 0.4375em;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: center;\n    -o-justify-content: center;\n    -ms-justify-content: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center; }\n.rangeSlider__indicator:before {\n      content: '';\n      margin-right: 0.1875em; }\n.rangeSlider__input {\n    width: 100%;\n    height: 0.25em;\n    border-radius: 0.125em;\n    background: #ffffff;\n    outline: none;\n    cursor: pointer;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#EE3124), to(#EE3124));\n    background-image: linear-gradient(#EE3124, #EE3124);\n    background-repeat: no-repeat;\n    cursor: pointer;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none; }\n.rangeSlider ::-webkit-slider-runnable-track {\n    box-shadow: none;\n    border: none;\n    background: transparent;\n    -webkit-appearance: none;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none; }\n.rangeSlider ::-moz-range-track {\n    box-shadow: none;\n    border: none;\n    background: transparent; }\n.rangeSlider ::-moz-focus-outer {\n    border: 0; }\n.rangeSlider ::-webkit-slider-thumb {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    background: #EE3124;\n    cursor: pointer;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.rangeSlider ::-moz-range-thumb {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    background: #EE3124;\n    cursor: pointer;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance: none;\n    -ms-appearance: none;\n    appearance: none;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n.rangeSlider ::-ms-ticks-after {\n    display: none; }\n.rangeSlider ::-ms-ticks-before {\n    display: none; }\n.rangeSlider ::-ms-track {\n    background: #ffffff;\n    color: transparent;\n    border: none; }\n.rangeSlider ::-ms-tooltip {\n    display: none; }\n.rangeSlider__limits {\n    width: 100%;\n    padding: 0;\n    margin-top: 0.8125em;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: space-between;\n    -o-justify-content: space-between;\n    -ms-justify-content: space-between;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -moz-align-items: center;\n    -o-align-items: center;\n    -ms-align-items: center;\n    -webkit-box-align: center;\n            align-items: center; }\n.rangeSlider__limits__limit {\n      font-weight: 500;\n      font-size: 0.6875em; }\n.rangeSlider__limits__limit:before {\n        content: '$ ';\n        margin-right: 0.1875em; }\n.rangeSlider__limits__limit--end {\n        color: #EE3124; }\n/**\r\n* Modules - forms - Collapsible\r\n*/\n.collapsible {\n  overflow: hidden;\n  height: 0;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transition: ease all 0.3s;\n  transition: ease all 0.3s;\n  -webkit-opacity: 0;\n  -moz-opacity: 0;\n  -o-opacity: 0;\n  -ms-opacity: 0;\n  opacity: 0; }\n.collapsible--isShow {\n    height: auto;\n    -webkit-opacity: 1;\n    -moz-opacity: 1;\n    -o-opacity: 1;\n    -ms-opacity: 1;\n    opacity: 1; }\n.collapsible__title {\n    color: #22262a;\n    padding: 0 0 0.8125em 0;\n    margin: 0 0 0.8125em 0;\n    border-bottom: 2px solid #ffffff;\n    font-weight: 600; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcY29tcG9uZW50c1xcdmluY3VsYWNpb25cXF92aW4wMDEuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9fdmluMDAxLnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvdmluY3VsYWNpb24vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGJhc2VcXHJlc2V0XFxfbm9ybWFsaXplLnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvdmluY3VsYWNpb24vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGJhc2VcXHZhcmlhYmxlc1xcX2Jhc2UtdmFyaWFibGVzLnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvdmluY3VsYWNpb24vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGJhc2VcXGJvZHlcXF9ib2R5LnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvdmluY3VsYWNpb24vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGJhc2VcXGZvbnRcXF9mb250LWZhY2Uuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcYmFzZVxcZm9udFxcX2ZvbnQtZWxlbWVudHMuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbGF5b3V0XFxmb3JtXFxfZm9ybS1sYXlvdXQuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcYmFzZVxccHJlZml4ZXNcXF9wcmVmaXhlcy5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL3ZpbmN1bGFjaW9uL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFzc2V0c1xcY2FtXFxzY3NzXFxiYXNlXFxtZWRpYXF1ZXJ5c1xcX21lZGlhcXVlcnlzLnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvdmluY3VsYWNpb24vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGxheW91dFxcY2FyZHNcXF9jYXJkcy1sYXlvdXQuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbGF5b3V0XFxtYWluXFxfbWFpbi1jb250YWluZXIuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbW9kdWxlc1xcYmFjay1idXR0b25cXF9iYWNrLWJ1dHRvbi5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL3ZpbmN1bGFjaW9uL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFzc2V0c1xcY2FtXFxzY3NzXFxtb2R1bGVzXFxtYWluLXRpdGxlXFxfbWFpbi10aXRsZS5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL3ZpbmN1bGFjaW9uL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFzc2V0c1xcY2FtXFxzY3NzXFxtb2R1bGVzXFx1c2VyLWluZm9cXF91c2VyLWluZm8uc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbW9kdWxlc1xcZm9ybXNcXGdyb3VwXFxfZm9ybS1ncm91cC5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL3ZpbmN1bGFjaW9uL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFzc2V0c1xcY2FtXFxzY3NzXFxtb2R1bGVzXFxmb3Jtc1xcdG9vbHRpcFxcX3Rvb2x0aXAuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbW9kdWxlc1xcZm9ybXNcXGJ1dHRvblxcX2J1dHRvbi5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL3ZpbmN1bGFjaW9uL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFzc2V0c1xcY2FtXFxzY3NzXFxtb2R1bGVzXFxmb3Jtc1xcY2hlY2tib3hcXF9jdXN0b20tY2hlY2tib3guc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbW9kdWxlc1xcZm9ybXNcXHJhZGlvYnV0dG9uXFxfY3VzdG9tLXJhZGlvdXR0b24uc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbW9kdWxlc1xcZm9ybXNcXHJhbmdlXFxfY3VzdG9tLXJhbmdlc2xpZGVyLnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvdmluY3VsYWNpb24vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXG1vZHVsZXNcXGZvcm1zXFxjb2xsYXBzaWJsZVxcX2NvbGxhcHNpYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NDRUM7QUNLRCxxRUFBQTtBQUVBOzs7O0VEREU7QUNPRjtFQUNFLHVCQUF1QjtFQUFFLE1BQUE7RUFDekIsMEJBQTBCO0VBQUUsTUFBQTtFQUM1Qiw4QkFBOEI7RUFBRSxNQUFBLEVBQU87QUFHekM7O0VERkU7QUNNRjtFQUNFLFNBQVMsRUFBQTtBQUdYOytFREwrRTtBQ1EvRTs7Ozs7RURGRTtBQ1NGOzs7Ozs7Ozs7Ozs7O0VBYUUsY0FBYyxFQUFBO0FBR2hCOzs7RURORTtBQ1dGOzs7O0VBSUUscUJBQXFCO0VBQUUsTUFBQTtFQUN2Qix3QkFBd0I7RUFBRSxNQUFBLEVBQU87QUFHbkM7OztFRE5FO0FDV0Y7RUFDRSxhQUFhO0VBQ2IsU0FBUyxFQUFBO0FBR1g7OztFRFJFO0FBQ0Y7O0VDY0UsYUFBYSxFQUFBO0FBR2Y7K0VEWitFO0FDZS9FOztFRFpFO0FDZ0JGO0VBQ0UsNkJBQTZCLEVBQUE7QUFHL0I7O0VEZEU7QUNrQkY7O0VBRUUsVUFBVSxFQUFBO0FBR1o7K0VEakIrRTtBQ29CL0U7O0VEakJFO0FDcUJGO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7O0VEbkJFO0FDdUJGOztFQUVFLGlCQUFpQixFQUFBO0FBR25COztFRHJCRTtBQ3lCRjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCOzs7RUR0QkU7QUMyQkY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFHbEI7O0VEekJFO0FDNkJGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdiOztFRDNCRTtBQytCRjtFQUNFLGNBQWMsRUFBQTtBQUdoQjs7RUQ3QkU7QUNpQ0Y7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCLEVBQUE7QUFHMUI7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGVBQWUsRUFBQTtBQUdqQjsrRURsQytFO0FDcUMvRTs7RURsQ0U7QUNzQ0Y7RUFDRSxTQUFTLEVBQUE7QUFHWDs7RURwQ0U7QUN3Q0Y7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjsrRUR2QytFO0FDMEMvRTs7RUR2Q0U7QUMyQ0Y7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjs7RUR6Q0U7QUM2Q0Y7RUFFRSx1QkFBdUI7RUFDdkIsU0FBUztFQUNULFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0NDdk0rQixFQUFBO0FEME1qQzs7RUQzQ0U7QUMrQ0Y7RUFDRSxjQUFjLEVBQUE7QUFHaEI7O0VEN0NFO0FDaURGOzs7O0VBSUUsaUNBQWlDO0VBQ2pDLGNBQWMsRUFBQTtBQUdoQjsrRURoRCtFO0FDbUQvRTs7O0VEL0NFO0FDb0RGOzs7OztFRDlDRTtBQ3FERjs7Ozs7RUFLRSxjQUFjO0VBQUUsTUFBQTtFQUNoQixhQUFhO0VBQUUsTUFBQTtFQUNmLFNBQVM7RUFBRSxNQUFBLEVBQU87QUFHcEI7O0VEaERFO0FDb0RGO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7Ozs7O0VEL0NFO0FDc0RGOztFQUVFLG9CQUFvQixFQUFBO0FBR3RCOzs7Ozs7RURoREU7QUN3REY7Ozs7RUFJRSwwQkFBMEI7RUFBRSxNQUFBO0VBQzVCLGVBQWU7RUFBRSxNQUFBLEVBQU87QUFHMUI7O0VEcERFO0FDd0RGOztFQUVFLGVBQWUsRUFBQTtBQUdqQjs7RUR0REU7QUMwREY7O0VBRUUsU0FBUztFQUNULFVBQVUsRUFBQTtBQUdaOzs7RUR2REU7QUM0REY7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjs7Ozs7O0VEdERFO0FDOERGOztFQUVFLHNCQUFzQjtFQUFFLE1BQUE7RUFDeEIsVUFBVTtFQUFFLE1BQUEsRUFBTztBQUdyQjs7OztFRHhERTtBQzhERjs7RUFFRSxZQUFZLEVBQUE7QUFHZDs7OztFRDFERTtBQ2dFRjtFQUNFLDZCQUE2QjtFQUFFLE1BQUE7RUFFRSxNQUFBO0VBQ2pDLHVCQUF1QixFQUFBO0FBR3pCOzs7O0VEMURFO0FDZ0VGOztFQUVFLHdCQUF3QixFQUFBO0FBRzFCOztFRDlERTtBQ2tFRjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7QUFHaEM7OztFRC9ERTtBQ29FRjtFQUNFLFNBQVM7RUFBRSxNQUFBO0VBQ1gsVUFBVTtFQUFFLE1BQUEsRUFBTztBQUdyQjs7RURoRUU7QUNvRUY7RUFDRSxjQUFjLEVBQUE7QUFHaEI7OztFRGpFRTtBQ3NFRjtFQUNFLGlCQUFpQixFQUFBO0FBR25COytFRHJFK0U7QUN3RS9FOztFRHJFRTtBQ3lFRjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtBQUduQjs7RUFFRSxVQUFVLEVBQUE7QUU1YVo7O0VIdVdFO0FHbldGO0VBRUUsbUNBQXFDLEVBQUE7QUFHdkM7RUFFRSxjRG1CNEI7RUNsQjVCLHFCRGtCNEI7RUNqQjVCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFFbEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTtBQ2tCcEM7O0VKbVZFO0FJM1ZEO0VBQ0Msd0JBVzRCO0VBVjVCLGtCQVU2RDtFQVQ3RCxnQkFTcUQ7RUFSckQseVBBUDRGLEVBQUE7QUFHN0Y7RUFDQyx3QkFZNEI7RUFYNUIsa0JBV2tFO0VBVmxFLGdCQVUwRDtFQVQxRCw2UUFQNEYsRUFBQTtBQUc3RjtFQUNDLHdCQWE0QjtFQVo1QixrQkFZZ0U7RUFYaEUsaUJBV3dEO0VBVnhELGlRQVA0RixFQUFBO0FDYjlGOztFTGdZRTtBSzVYRjtFQWRJLGNITWlCO0VHTGpCLHdCSERzQjtFR0V0QixtQkh1QjBCO0VHdEIxQixnQkFhZ0U7RUFaaEUseUJIcUIwQjtFR3BCMUIsd0JIb0IwQjtFR25CMUIsMkJIbUIwQjtFR2xCMUIsa0JBUjhKLEVBQUE7QUFvQmxLO0VBbkJJLGNITWlCO0VHTGpCLHdCSERzQjtFR0V0QixpQkh1QjBCO0VHdEIxQixnQkFrQitEO0VBakIvRCx5QkhxQjBCO0VHcEIxQix3QkhvQjBCO0VHbkIxQixvQkhtQjBCO0VHbEIxQixrQkFSOEosRUFBQTtBQXlCbEs7RUF4QkksY0hNaUI7RUdMakIsd0JIRHNCO0VHRXRCLGtCSHVCMEI7RUd0QjFCLGdCQXVCK0Q7RUF0Qi9ELHlCSHFCMEI7RUdwQjFCLGVIb0IwQjtFR25CMUIsMkJIbUIwQjtFR2xCMUIsa0JBUjhKLEVBQUE7QUE4QmxLO0VBN0JJLGNITWlCO0VHTGpCLHdCSERzQjtFR0V0QixrQkh1QjBCO0VHdEIxQixnQkE0QnlDO0VBM0J6Qyx5QkhxQjBCO0VHcEIxQixlSG9CMEI7RUduQjFCLGtCSG1CMEI7RUdsQjFCLGtCQVI4SixFQUFBO0FBbUNsSztFQWxDSSxjSE1pQjtFR0xqQix3QkhEc0I7RUdFdEIsY0h1QjBCO0VHdEIxQixnQkFpQ3lDO0VBaEN6QyxxQkhxQjBCO0VHcEIxQixlSG9CMEI7RUduQjFCLHVCSG1CMEI7RUdsQjFCLGtCQVI4SixFQUFBO0FBd0NsSztFQXZDSSxjSE1pQjtFR0xqQix3QkhEc0I7RUdFdEIsaUJIdUIwQjtFR3RCMUIsZ0JBc0N5QztFQXJDekMseUJIcUIwQjtFR3BCMUIsZUhvQjBCO0VHbkIxQiwyQkhtQjBCO0VHbEIxQixrQkFSOEosRUFBQTtBQTZDbEs7RUE1Q0ksY0hPd0I7RUdOeEIsd0JIRHNCO0VHRXRCLGNIdUIwQjtFR3RCMUIsZ0JBMkNzRjtFQTFDdEYscUJIcUIwQjtFR3BCMUIsZUhvQjBCO0VHbkIxQix1QkhtQjBCO0VHbEIxQixrQkFSOEosRUFBQTtBQWtEbEs7RUFqREksY0hNaUI7RUdMakIsd0JIRHNCO0VHRXRCLG1CSHVCMEI7RUd0QjFCLGdCQWdEd0M7RUEvQ3hDLHlCSHFCMEI7RUdwQjFCLHdCSG9CMEI7RUduQjFCLGtCSG1CMEI7RUdsQjFCLGtCQVI4SixFQUFBO0FBdURsSztFQXRESSxjSE1pQjtFR0xqQix3QkhEc0I7RUdFdEIsbUJIdUIwQjtFR3RCMUIsZ0JBcUR5QztFQXBEekMseUJIcUIwQjtFR3BCMUIsd0JIb0IwQjtFR25CMUIsa0JIbUIwQjtFR2xCMUIsa0JBUjhKLEVBQUE7QUE0RGxLOztFTDRhRTtBS3hhRjtFQUVJLHVCQUF1QixFQUFBO0FBRzNCO0VBRUkseUJBQW9DLEVBQUE7QUFHeEM7RUFFSSxjSHJFaUIsRUFBQTtBR3dFckI7RUFFSSxjSHRFb0IsRUFBQTtBR3lFeEI7O0VMbWFFO0FLL1pEO0VBRUcsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBR25CO0VBRUcsY0FBYztFQUNkLGlCQUFpQixFQUFBO0FBR3BCO0VBRUcsY0FBYztFQUNkLGtCQUFrQixFQUFBO0FBR3RCOztFTDRaRTtBS3haRDtFQUVHLDhCQUE4QixFQUFBO0FBR2xDOztFTHlaRTtBS3JaRDtFQUVHLGdCQUFnQixFQUFBO0FDbklwQjs7Q040aEJDO0FNeGhCRDtFQUVDLFdBQVc7RUFDWCxjQUFjO0VDS0gseUJESFk7RUNHWiwwQkRIWTtFQ09oQixzQkRQZ0IsRUFBQTtBRVFwQjtJRmJKO01BU0UsY0FBaUI7TUFDakIseUJKVXdCO01JVHhCLHVCSnFCNEI7TUlwQjVCLDBEQUEwRDtNQUMxRCxpQ0FBaUM7TUFDakMsNEJBQTRCO01BQzVCLDJDSkt3QjtNSUp4QixzQkpnQjRCO01LeEJsQiwrQ0xNZ0I7TUtOaEIsZ0RMTWdCO01LRnBCLDRDTEVvQixFQUFBLEVJbUozQjtBQTVJQTtJQUVDLGVBQWdCO0lDZk4seUJEaUJhO0lDakJiLDBCRGlCYTtJQ2JqQixzQkRhaUI7SUNqQmIscUJEa0JJO0lDbEJKLGtCRGtCSTtJQ2xCSixnQkRrQkk7SUNsQkosaUJEa0JJO0lDZFIsb0JEY1E7SUNkUixhRGNRO0lDbEJKLGtDRG1Cb0I7SUNuQnBCLGdDRG1Cb0I7SUNuQnBCLGlDRG1Cb0I7SUNmeEIsNkJEZXdCO0lDbkJwQiw0QkRvQmM7SUNwQmQsMEJEb0JjO0lDcEJkLDJCRG9CYztJQ2hCbEIsd0JEZ0JrQjtZQ2hCbEIsdUJEZ0JrQjtJQ3BCZCwyQkRxQmE7SUNyQmIseUJEcUJhO0lDakJqQiw0QkRpQmlCO0lDakJqQiw2QkRpQmlCO1lDakJqQixzQkRpQmlCLEVBQUE7QUVuQnJCO01GV0g7UUNiVyx3QkR5Qlc7UUN6Qlgsc0JEeUJXO1FDckJmLDhCRHFCZTtRQ3JCZiw2QkRxQmU7Z0JDckJmLG1CRHFCZTtRQ3pCWCxrQkQwQk87UUN0QlgsZURzQlcsRUFBQSxFQWtHakI7QUV2SEU7TUZRSDtRQ2JXLHdCRCtCVztRQy9CWCxzQkQrQlc7UUMzQmYsOEJEMkJlO1FDM0JmLDZCRDJCZTtnQkMzQmYsbUJEMkJlO1FDL0JYLGtCRGdDTztRQzVCWCxlRDRCVyxFQUFBLEVBNEZqQjtBQS9HQTtNQXVCQyxrQkFBa0IsRUFBQTtBRWxDakI7UUZXRjtVQXlCRSxVQUFVLEVBQUEsRUFxQlg7QUV0REM7UUZRRjtVQTRCRSxVQUFVLEVBQUEsRUFrQlg7QUE5Q0Q7UUErQkUsVUFBVTtRQUNWLG1CQUFtQixFQUFBO0FFOUNuQjtVRmNGO1lBa0NHLFVBQVUsRUFBQSxFQVFYO0FFckRBO1VGV0Y7WUFxQ0csV0FBVyxFQUFBLEVBS1o7QUVsREE7VUZRRjtZQXdDRyxVQUFVLEVBQUEsRUFFWDtBQTFDRjtRQTRDRSxjSmhEb0IsRUFBQTtBSUl0QjtNQWlEQyxXQUFXO01BQ1gsU0FBUztNQUNULFVBQVUsRUFBQTtBRTlEVDtRRldGO1VBcURFLFVBQVUsRUFBQSxFQW1CWDtBRWhGQztRRlFGO1VBd0RFLFVBQVUsRUFBQSxFQWdCWDtBQXhFRDtRQTJERSxZQUFZLEVBQUE7QUEzRGQ7UUE4REUsa0JBQWtCLEVBQUE7QUE5RHBCO1VBZ0VHLGVBQWU7VUFDZix5QkFBaUM7VUFDakMscUJBQXFCO1VBQ3JCLGtCQUFrQjtVQUNsQixpQkFBaUI7VUFDakIsK0JBQStCLEVBQUE7QUFyRWxDO01BMkVDLFdBQVc7TUFDWCxTQUFTO01BQ1QsZ0JKbEUyQixFQUFBO0FNdEIxQjtRRldGO1VBK0VFLFVBQVUsRUFBQSxFQUtYO0FFNUZDO1FGUUY7VUFrRkUsVUFBVSxFQUFBLEVBRVg7QUFwRkQ7TUFzRkMsV0FBVztNQUNYLFNBQVM7TUFDVCxnQko3RTJCO01JOEUzQixrQkFBa0IsRUFBQTtBRXBHakI7UUZXRjtVQTJGRSxVQUFVLEVBQUEsRUFLWDtBRXhHQztRRlFGO1VBOEZFLFVBQVUsRUFBQSxFQUVYO0FBaEdEO01Ba0dDLG9CQUFhO01BQWIsYUFBYTtNQUNiLFdBQVcsRUFBQTtBQW5HWjtRQXFHRSxXQUFXO1FBQ1gsWUFBWSxFQUFBO0FFakhaO1VGV0Y7WUF3R0csVUFBVSxFQUFBLEVBS1g7QUVySEE7VUZRRjtZQTJHRyxVQUFVLEVBQUEsRUFFWDtBQUdIO0lBRUMsV0FBVztJQUNYLGVBQWdCO0lBQ2hCLGNBQWMsRUFBQTtBQUNkO01DbElVLHlCRG9JYztNQ3BJZCwwQkRvSWM7TUNoSWxCLHNCRGdJa0I7TUNwSWQscUJEcUlLO01DcklMLGtCRHFJSztNQ3JJTCxnQkRxSUs7TUNySUwsaUJEcUlLO01DaklULG9CRGlJUztNQ2pJVCxhRGlJUztNQ3JJTCxtQ0RzSXNCO01DdEl0QixpQ0RzSXNCO01DdEl0QixrQ0RzSXNCO01DbEkxQix5QkRrSTBCO2NDbEkxQiw4QkRrSTBCO01DdEl0Qix3QkR1SVc7TUN2SVgsc0JEdUlXO01DdklYLHVCRHVJVztNQ25JZix5QkRtSWU7Y0NuSWYsbUJEbUllLEVBQUE7QUFMcEI7UUFTQyxXQUFXO1FBQ1gsa0JKcEgwQjtRSXFIMUIsVUFBVSxFQUFBO0FBWFg7VUFjRSxXQUFXLEVBQUE7QUFkYjtRQWtCQyxrQko1SDBCO1FJNkgxQixXQUFXLEVBQUE7QUdqS2Y7O0NUd3RCQztBU3B0QkQ7RUFFQyxXQUFXO0VBQ1gsY0FBYztFRktILHlCRUhZO0VGR1osMEJFSFk7RUZPaEIsc0JFUGdCLEVBQUE7QURRcEI7SUNiSjtNQVFFLGNBQWlCO01BQ2pCLHlCUFd3QjtNT1Z4Qix1QlBzQjRCO01PckI1QiwwREFBMEQ7TUFDMUQsaUNBQWlDO01BQ2pDLDRCQUE0QjtNQUM1QiwyQ1BNd0I7TU9MeEIsc0JQaUI0QjtNS3hCbEIsK0NMTWdCO01LTmhCLGdETE1nQjtNS0ZwQiw0Q0xFb0IsRUFBQSxFT3dIM0I7QUFsSEE7SUFFQyxlQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lGaEJQLHlCRWtCYTtJRmxCYiwwQkVrQmE7SUZkakIsc0JFY2lCO0lGbEJiLHFCRW1CSTtJRm5CSixrQkVtQkk7SUZuQkosZ0JFbUJJO0lGbkJKLGlCRW1CSTtJRmZSLG9CRWVRO0lGZlIsYUVlUTtJRm5CSiw0QkVvQmM7SUZwQmQsMEJFb0JjO0lGcEJkLDJCRW9CYztJRmhCbEIsd0JFZ0JrQjtZRmhCbEIsdUJFZ0JrQjtJRnBCZCw0QkVxQmM7SUZyQmQsMEJFcUJjO0lGckJkLDJCRXFCYztJRmpCbEIsd0JFaUJrQjtZRmpCbEIsdUJFaUJrQjtJRnJCZCwyQkVzQmE7SUZ0QmIseUJFc0JhO0lGbEJqQiw0QkVrQmlCO0lGbEJqQiw2QkVrQmlCO1lGbEJqQixzQkVrQmlCLEVBQUE7QURwQnJCO01DVUg7UUZaVyx3QkUwQlc7UUYxQlgsc0JFMEJXO1FGdEJmLDhCRXNCZTtRRnRCZiw2QkVzQmU7Z0JGdEJmLG1CRXNCZTtRRjFCWCxrQkUyQk87UUZ2QlgsZUV1QlcsRUFBQSxFQTRGakI7QURsSEU7TUNPSDtRRlpXLHdCRWdDVztRRmhDWCxzQkVnQ1c7UUY1QmYsOEJFNEJlO1FGNUJmLDZCRTRCZTtnQkY1QmYsbUJFNEJlO1FGaENYLGtCRWlDTztRRjdCWCxlRTZCVyxFQUFBLEVBc0ZqQjtBQTNHQTtNQTBCQyx5QlBkMkI7TU9lM0IscUJQZjJCO01PZ0IzQixtQlAzQm9CO01PNEJwQixjQUFjO01BQ2QsV0FBVztNRjFDRix5QkU0Q2M7TUY1Q2QsMEJFNENjO01GeENsQixzQkV3Q2tCLEVBQUE7QUQxQ3RCO1FDVUY7VUFtQ0UsaUJBQWlCO1VBQ2pCLFVBQVU7VUFDVixZQUFZLEVBQUEsRUFxRWI7QURqSEM7UUNPRjtVQXlDRSxpQkFBaUI7VUFDakIsVUFBVTtVQUNWLFlBQVksRUFBQSxFQStEYjtBQTFHRDtRQStDRSxnQ1BsRG9CO1FPbURwQixXQUFXLEVBQUE7QUFoRGI7VUFtREcsaUJBQWlCLEVBQUE7QUFuRHBCO1lBc0RJLGNQekRrQixFQUFBO0FPR3RCO1FBNERFLGdCQUFnQixFQUFBO0FEdEVoQjtVQ1VGO1lBK0RHLGlCQUFpQixFQUFBLEVBdUJsQjtBRDdGQTtVQ09GO1lBbUVHLGlCQUFpQixFQUFBLEVBbUJsQjtBQXRGRjtVQXVFRyxtQlAzRHlCO1VPNER6QixnQkFBZ0IsRUFBQTtBQXhFbkI7WUE2RUssZ0JBQWdCO1lBQ2hCLGNQakZpQjtZT2tGakIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixVQUFVO1lBQ1YsaUJBQWlCLEVBQUE7QUFsRnRCO1FBeUZFLGtCUDdFMEI7UUt4QmxCLHlCRXVHZTtRRnZHZiwwQkV1R2U7UUZuR25CLHNCRW1HbUI7UUZ2R2YscUJFd0dNO1FGeEdOLGtCRXdHTTtRRnhHTixnQkV3R007UUZ4R04saUJFd0dNO1FGcEdWLG9CRW9HVTtRRnBHVixhRW9HVTtRRnhHTiw4QkV5R2tCO1FGekdsQiw0QkV5R2tCO1FGekdsQiw2QkV5R2tCO1FGckd0QixxQkVxR3NCO2dCRnJHdEIseUJFcUdzQjtRRnpHbEIsd0JFMEdZO1FGMUdaLHNCRTBHWTtRRjFHWix1QkUwR1k7UUZ0R2hCLHlCRXNHZ0I7Z0JGdEdoQixtQkVzR2dCLEVBQUE7QUE5RnRCO1VBa0dHLGNQckdtQjtVT3NHbkIscUJQdkZ5QixFQUFBO0FPWjVCO1VBdUdHLFdBQVcsRUFBQTtBQUtmO0lBRUMsV0FBVztJQUNYLGVBQWdCO0lBQ2hCLGNBQWMsRUFBQTtBQ3hJaEI7O0VWcTNCRTtBVWozQkY7RUFFSSxXQUFXO0VBQ1gseUJSZ0I2QjtFUWY3QixrQkFBa0I7RUFDbEIsbUJSMkIwQjtFUTFCMUIsaUJBQWlCO0VIRVQseUJHQWtCO0VIQWxCLDBCR0FrQjtFSEl0QixzQkdKc0I7RUhBbEIscUJHQ1M7RUhEVCxrQkdDUztFSERULGdCR0NTO0VIRFQsaUJHQ1M7RUhHYixvQkdIYTtFSEdiLGFHSGE7RUhEVCxnQ0dFdUI7RUhGdkIsOEJHRXVCO0VIRnZCLCtCR0V1QjtFSEUzQix1QkdGMkI7VUhFM0IsMkJHRjJCO0VIRnZCLHdCR0dlO0VISGYsc0JHR2U7RUhIZix1QkdHZTtFSENuQix5QkdEbUI7VUhDbkIsbUJHRG1CO0VISGYsMkJHSWtCO0VISmxCLHlCR0lrQjtFSEF0Qiw0QkdBc0I7RUhBdEIsNkJHQXNCO1VIQXRCLHNCR0FzQixFQUFBO0FGQzFCO0lFQ0E7TUFHUSxVQUFVO01BQ1YsY0FBYyxFQUFBLEVBTXJCO0FGUkQ7SUVGQTtNQU9RLFVBQVU7TUFDVixjQUFjLEVBQUEsRUFFckI7QUM1Qkw7O0VYZzZCRTtBVzU1QkQ7RUFFRyxXQUFXO0VBQ1gsYVQ2QjBCO0VTNUIxQixrQkFBa0I7RUFDbEIsdUJUMkIwQjtFS3hCbEIseUJJRWtCO0VKRmxCLDBCSUVrQjtFSkV0QixzQklGc0I7RUpGbEIscUJJR1M7RUpIVCxrQklHUztFSkhULGdCSUdTO0VKSFQsaUJJR1M7RUpDYixvQklEYTtFSkNiLGFJRGE7RUpIVCxnQ0lJdUI7RUpKdkIsOEJJSXVCO0VKSnZCLCtCSUl1QjtFSkEzQix1QklBMkI7VUpBM0IsMkJJQTJCO0VKSnZCLHdCSUtlO0VKTGYsc0JJS2U7RUpMZix1QklLZTtFSkRuQix5QklDbUI7VUpEbkIsbUJJQ21CO0VKTGYsd0JJTWU7RUpOZixzQklNZTtFSkZuQiw4QklFbUI7RUpGbkIsNkJJRW1CO1VKRm5CLG1CSUVtQixFQUFBO0FIRHZCO0lHYkg7TUFPQyxrQlR5QjRCLEVBQUEsRVNKNUI7QUE1QkQ7SUFpQk8sWUFBWTtJQUNaLFdBQVcsRUFBQTtBQWxCbEI7SUFxQk8saUJBQWlCO0lBQ2pCLG1DQUFxQztJQUNyQyxrQlRTc0I7SVNSdEIsY1RabUI7SVNhbkIsa0JUT3NCO0lTTnRCLFVBQVUsRUFBQTtBQzlCbEI7O0VaKzhCRTtBWTM4QkQ7RUFFRyxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7QUFDbEI7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtBQUh0QjtNQU1PLFNBQVMsRUFBQTtBQUdqQjtJQUVJLGFBQWEsRUFBQTtBSkZqQjtNSUFBO1FBSVEsY0FBYyxFQUFBLEVBRXJCO0FBQ0Q7SUFDSSxjQUFjLEVBQUE7QUpSbEI7TUlPQTtRQUdRLGFBQWEsRUFBQSxFQUtwQjtBSlpEO01JSUE7UUFNUSxhQUFhLEVBQUEsRUFFcEI7QUE1Qko7SUErQk8saUJBQWlCO0lBQ2pCLHNCVkFzQixFQUFBO0FVaEM3QjtJQW9DTyxpQkFBaUIsRUFBQTtBQXBDeEI7SUF1Q08sVUFBVSxFQUFBO0FKN0JkO0lJVkg7TUE0Q1csZVZaa0IsRUFBQSxFVWN6QjtBQUNEO0lBRUksV0FBVztJQUNYLHNCQUFvQjtJTDFDaEIseUJLNENzQjtJTDVDdEIsMEJLNENzQjtJTHhDMUIsc0JLd0MwQjtJTDVDdEIscUJLNkNhO0lMN0NiLGtCSzZDYTtJTDdDYixnQks2Q2E7SUw3Q2IsaUJLNkNhO0lMekNqQixvQkt5Q2lCO0lMekNqQixhS3lDaUI7SUw3Q2IsNEJLOEN1QjtJTDlDdkIsMEJLOEN1QjtJTDlDdkIsMkJLOEN1QjtJTDFDM0Isd0JLMEMyQjtZTDFDM0IsdUJLMEMyQjtJTDlDdkIsd0JLK0NtQjtJTC9DbkIsc0JLK0NtQjtJTC9DbkIsdUJLK0NtQjtJTDNDdkIseUJLMkN1QjtZTDNDdkIsbUJLMkN1QixFQUFBO0FBUjFCO01BV08seUJWdENjO01VdUNkLGFWM0JrQjtNVTRCbEIsY1Y1QmtCO01VNkJsQixZQUFZO01BQ1osbUJWOUJrQjtNVStCbEIsa0JBQWtCO01MbkR0QixrQktxRjBCO01MekZ0Qix5QkswRjBCO01MMUYxQiwwQkswRjBCO01MdEY5QixzQktzRjhCO01MMUYxQixxQksyRmlCO01MM0ZqQixrQksyRmlCO01MM0ZqQixnQksyRmlCO01MM0ZqQixpQksyRmlCO01MdkZyQixvQkt1RnFCO01MdkZyQixhS3VGcUI7TUwzRmpCLDRCSzRGMkI7TUw1RjNCLDBCSzRGMkI7TUw1RjNCLDJCSzRGMkI7TUx4Ri9CLHdCS3dGK0I7Y0x4Ri9CLHVCS3dGK0I7TUw1RjNCLHdCSzZGdUI7TUw3RnZCLHNCSzZGdUI7TUw3RnZCLHVCSzZGdUI7TUx6RjNCLHlCS3lGMkI7Y0x6RjNCLG1CS3lGMkIsRUFBQTtBQXREOUI7UUFtQlcsV0FBVztRQUNYLE1BQU07UUFDTixTQUFTO1FBQ1QsYVZyQ2M7UVVzQ2QsWVZ0Q2M7UVV1Q2QsV0FBVztRQUNYLHlCVnBEVTtRVXFEVixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFVBQVUsRUFBQTtBQTVCckI7UUFrQ2UsYUFBYSxFQUFBO0FBbEM1QjtRQXVDVyxlQUFlLEVBQUE7QUF2QzFCO1FBMkNXLHlCVnpFUSxFQUFBO0FVOEJuQjtVQThDZSx5QlY1RUksRUFBQTtBTVBwQjtRSXFDQztVQXlEVyxlQUFlLEVBQUEsRUFFdEI7QUEzREo7TUE2RE8seUJWeEZjO01VeUZkLFVBQVU7TUFDVixjQUFjLEVBQUE7QUpqR3RCO1FJa0NDO1VBa0VXLFVBQVUsRUFBQSxFQUtqQjtBQXZFSjtRQXFFVyx5QlZuR1EsRUFBQTtBV3JCeEI7O0VieWtDRTtBYXJrQ0Q7RUFFRyxXQUFXO0VBQ1gsdUJYNkIwQjtFS3hCbEIseUJNSGtCO0VOR2xCLDBCTUhrQjtFTk90QixzQk1Qc0I7RU5HbEIscUJNRlM7RU5FVCxrQk1GUztFTkVULGdCTUZTO0VORVQsaUJNRlM7RU5NYixvQk1OYTtFTk1iLGFNTmE7RU5FVCxnQ01EdUI7RU5DdkIsOEJNRHVCO0VOQ3ZCLCtCTUR1QjtFTkszQix1Qk1MMkI7VU5LM0IsMkJNTDJCO0VOQ3ZCLHdCTUFlO0VOQWYsc0JNQWU7RU5BZix1Qk1BZTtFTkluQix5Qk1KbUI7VU5JbkIsbUJNSm1CO0VOQWYsMkJNQ2tCO0VORGxCLHlCTUNrQjtFTkd0Qiw0Qk1Ic0I7RU5HdEIsNkJNSHNCO1VOR3RCLHNCTUhzQixFQUFBO0FMSTFCO0lLYkg7TU5RVyxtQ01LOEI7TU5MOUIsaUNNSzhCO01OTDlCLGtDTUs4QjtNTkRsQyx5Qk1Da0M7Y05EbEMsOEJNQ2tDO01OTDlCLHdCTU1tQjtNTk5uQixzQk1NbUI7TU5ObkIsdUJNTW1CO01ORnZCLHlCTUV1QjtjTkZ2QixtQk1FdUI7TU5ObkIsd0JNT21CO01OUG5CLHNCTU9tQjtNTkh2Qiw4Qk1HdUI7TU5IdkIsNkJNR3VCO2NOSHZCLG1CTUd1QixFQUFBLEVBdUM3QjtBQXBDRTtJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJYUm9CO0lXU3BCLGdCQUFnQjtJQUNoQixxQlhRc0I7SUtwQnRCLGtCTWtCc0I7SU50QmxCLHlCTXVCc0I7SU52QnRCLDBCTXVCc0I7SU5uQjFCLHNCTW1CMEI7SU52QnRCLHFCTXdCYTtJTnhCYixrQk13QmE7SU54QmIsZ0JNd0JhO0lOeEJiLGlCTXdCYTtJTnBCakIsb0JNb0JpQjtJTnBCakIsYU1vQmlCO0lOeEJiLDRCTXlCdUI7SU56QnZCLDBCTXlCdUI7SU56QnZCLDJCTXlCdUI7SU5yQjNCLHdCTXFCMkI7WU5yQjNCLHVCTXFCMkI7SU56QnZCLHdCTTBCbUI7SU4xQm5CLHNCTTBCbUI7SU4xQm5CLHVCTTBCbUI7SU50QnZCLHlCTXNCdUI7WU50QnZCLG1CTXNCdUIsRUFBQTtBTHJCM0I7TUtLQTtRQVFRLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFhcEI7QUF0QkE7TUFvQk8sWUFBWSxFQUFBO0FBR3BCO0lBRUksa0JBQWtCLEVBQUE7QUFGckI7TUFLTyxpQkFBaUI7TUFDakIsdUJYZmtCLEVBQUE7QVdTekI7TUFVTyx1QlhuQmtCLEVBQUE7QVlwQzlCOztDZHNxQ0M7QWNscUNEO0VBRUMsV0FBVztFQUNYLHFCWjZCNkIsRUFBQTtBWWhDOUI7SUFNRSxXQUFXO0lBQ1gsU0FBUztJQUNULGdDWk9tQixFQUFBO0FNTGpCO0lNQUg7TUFFRSxvQkFBYTtNQUFiLGFBQWEsRUFBQSxFQVFkO0FOUEU7SU1ISDtNQUtFLG9CQUFhO01BQWIsYUFBYSxFQUFBLEVBS2Q7QU5KRTtJTU5IO01BUUUsb0JBQWE7TUFBYixhQUFhLEVBQUEsRUFFZDtBTlBFO0lNUUg7TUFFRSxVQUFVO01BQ1YsbUJBQW1CLEVBQUEsRUFNcEI7QU5kRTtJTUtIO01BTUUsVUFBVTtNQUNWLG1CQUFtQixFQUFBLEVBRXBCO0FBQ0Q7SUFFQyxtQkFBbUI7SUFDbkIsY1pGNEI7SVlHNUIsVUFBVTtJQUNWLHFCQUFvQjtJUDVCVix5Qk84QmE7SVA5QmIsMEJPOEJhO0lQMUJqQixzQk8wQmlCO0lQOUJiLHdCTytCUTtJUC9CUixxQk8rQlE7SVAvQlIsbUJPK0JRO0lQL0JSLG9CTytCUTtJUDNCWixnQk8yQlk7SVAvQlIscUJPZ0NLO0lQaENMLGtCT2dDSztJUGhDTCxnQk9nQ0s7SVBoQ0wsaUJPZ0NLO0lQNUJULG9CTzRCUztJUDVCVCxhTzRCUztJUGhDTCxtQ09pQ3NCO0lQakN0QixpQ09pQ3NCO0lQakN0QixrQ09pQ3NCO0lQN0IxQix5Qk82QjBCO1lQN0IxQiw4Qk82QjBCO0lQakN0Qix3Qk9rQ1c7SVBsQ1gsc0JPa0NXO0lQbENYLHVCT2tDVztJUDlCZix5Qk84QmU7WVA5QmYsbUJPOEJlLEVBQUE7QUFFckI7TUFDQyxrQkFBa0I7TUFDbEIsY0FBYyxFQUFBO0FOcENiO01Nc0NGO1FBRUUsVUFBVSxFQUFBLEVBUVg7QU43Q0M7TU1tQ0Y7UUFLRSxVQUFVLEVBQUEsRUFLWDtBTjFDQztNTWdDRjtRQVFFLFVBQVUsRUFBQSxFQUVYO0FBQ0Q7TUFDQyxrQlo1QjJCO01ZNkIzQixpQkFBb0I7TUFDcEIsY0FBYyxFQUFBO0FBRWY7TUFDQyxjWmhEcUIsRUFBQTtBWWtEdEI7TUFDQyxjWnJEa0IsRUFBQTtBWXVEbkI7TUFDQyxTQUFTO01BQ1Qsa0JaeEMyQixFQUFBO0FZMkM3QjtJQUVDLFVBQVU7SUFDVix5Qlp6RHFCO0lZMERyQix5QloxRHFCO0lZMkRyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw4QkFBNEI7SUFDNUIseUJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixjWnhFMEI7SVl5RTFCLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtBQUVuQjtJQUVDLFdBQVc7SUFDWCx5Qlp4RXFCO0lZeUVyQix5Qlp6RXFCO0lZMEVyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw4QkFBNEI7SUFDNUIseUJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixjWnZGMEI7SVl3RjFCLGtCQUFrQjtJUDlGUix5Qk80SGE7SVA1SGIsMEJPNEhhO0lQeEhqQixzQk93SGlCO0lQNUhiLHdCTzZIUTtJUDdIUixxQk82SFE7SVA3SFIsbUJPNkhRO0lQN0hSLG9CTzZIUTtJUHpIWixnQk95SFk7SVA3SFIscUJPOEhLO0lQOUhMLGtCTzhISztJUDlITCxnQk84SEs7SVA5SEwsaUJPOEhLO0lQMUhULG9CTzBIUztJUDFIVCxhTzBIUztJUDlITCxnQ08rSG1CO0lQL0huQiw4Qk8rSG1CO0lQL0huQiwrQk8rSG1CO0lQM0h2Qix1Qk8ySHVCO1lQM0h2QiwyQk8ySHVCO0lQL0huQix3Qk9nSVc7SVBoSVgsc0JPZ0lXO0lQaElYLHVCT2dJVztJUDVIZix5Qk80SGU7WVA1SGYsbUJPNEhlO0lQaElYLGlDT2lJaUI7SVA3SHJCLHlCTzZIcUIsRUFBQTtBQS9DM0I7TUFlQyxtQ1o3RndCLEVBQUE7QVk4RXpCO01BbUJDLG1DWmpHd0IsRUFBQTtBWThFekI7TUF1QkMsMENaN0Z1QjtNWThGdkIsbUNadEd3QjtNWXVHeEIsZUFBZTtNQUNmLDRCWnhHd0IsRUFBQTtBWThFekI7UUE0QkcseUNBQUE7UUFDRCxVQUFVO1FBQ1YsVUFBVTtRQUFFLFlBQUEsRUFBYTtBQTlCM0I7UUE0QkcseUNBQUE7UUFDRCxVQUFVO1FBQ1YsVUFBVTtRQUFFLFlBQUEsRUFBYTtBQTlCM0I7UUE0QkcseUNBQUE7UUFDRCxVQUFVO1FBQ1YsVUFBVTtRQUFFLFlBQUEsRUFBYTtBQTlCM0I7UUE0QkcseUNBQUE7UUFDRCxVQUFVO1FBQ1YsVUFBVTtRQUFFLFlBQUEsRUFBYTtBQTlCM0I7UUFpQ0csNEJBQUE7UUFDRCxVQUFVLEVBQUE7QUFsQ1o7UUFxQ0csbUJBQUE7UUFDRCxVQUFVLEVBQUE7QUFXVDtNQUVDLGtFQUFrRTtNQUNsRSw4Qlo5R3dCO01ZK0d4QixpQ0FBaUM7TUFDakMsNEJBQTRCO01BQy9CLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIscUJabkgyQjtNWW9IM0Isa0JBQWtCLEVBQUE7QUFFbkI7TUFFQyxrQkFBa0IsRUFBQTtBQUVuQjtNQUVDLHlCQUF5QjtNQUN6Qix5Qlo1SXFCO01ZNklyQixrQkFBa0I7TUFDbEIsY1o5SXFCO01ZK0lyQiw0QkFBNEI7TUFDNUIseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFBO0FBUmxCO1FBV0Msb0NacEpvQixFQUFBO0FZeUlyQjtRQWVDLG9DWnhKb0IsRUFBQTtBWTRKdkI7SUFFQyxXQUFXO0lBQ1gsaUJaaEo0QjtJS3hCbEIseUJPMEthO0lQMUtiLDBCTzBLYTtJUHRLakIsc0JPc0tpQjtJUDFLYix3Qk8yS1E7SVAzS1IscUJPMktRO0lQM0tSLG1CTzJLUTtJUDNLUixvQk8yS1E7SVB2S1osZ0JPdUtZO0lQM0tSLHFCTzRLSztJUDVLTCxrQk80S0s7SVA1S0wsZ0JPNEtLO0lQNUtMLGlCTzRLSztJUHhLVCxvQk93S1M7SVB4S1QsYU93S1M7SVA1S0wsbUNPNktzQjtJUDdLdEIsaUNPNktzQjtJUDdLdEIsa0NPNktzQjtJUHpLMUIsK0JPeUswQjtZUHpLMUIsOEJPeUswQjtJUDdLdEIsd0JPOEtVO0lQOUtWLHNCTzhLVTtJUDlLVix1Qk84S1U7SVAxS2QseUJPMEtjO1lQMUtkLG1CTzBLYztJUDlLVix3Qk8rS1U7SVAvS1Ysc0JPK0tVO0lQM0tkLDhCTzJLYztJUDNLZCw2Qk8yS2M7WVAzS2QsbUJPMktjLEVBQUE7QUFFcEI7TUFFQyxrQlozSjJCLEVBQUE7QVl5SjNCO1FBS0ksY0FBYyxFQUFBO0FBTGxCO1FBU0ksZUFBZSxFQUFBO0FBRW5CO1FBRUMsY1p0SzBCLEVBQUE7QU16QjFCO1VNNkxEO1lBS0UsV0FBVyxFQUFBLEVBVVo7QU56TUE7VU0wTEQ7WUFTRSxXQUFXLEVBQUEsRUFNWjtBTnRNQTtVTXVMRDtZQWFFLFdBQVcsRUFBQSxFQUVaO0FBRUM7TUFFQyxZQUFZO01BQ2YsZ0JBQWdCO01QaE5QLHlCT2tOYztNUGxOZCwwQk9rTmM7TVA5TWxCLHNCTzhNa0I7TVBsTmQscUJPbU5NO01Qbk5OLGtCT21OTTtNUG5OTixnQk9tTk07TVBuTk4saUJPbU5NO01QL01WLG9CTytNVTtNUC9NVixhTytNVTtNUG5OTiw0Qk9vTmdCO01QcE5oQiwwQk9vTmdCO01QcE5oQiwyQk9vTmdCO01QaE5wQix3Qk9nTm9CO2NQaE5wQix1Qk9nTm9CO01QcE5oQix3Qk9xTlk7TVByTlosc0JPcU5ZO01Qck5aLHVCT3FOWTtNUGpOaEIseUJPaU5nQjtjUGpOaEIsbUJPaU5nQixFQUFBO0FBTXhCO0VBQ0UseUNBQUE7RUFDRCxjWnZOMkI7RVl3TjNCLFVBQVU7RUFBRSxZQUFBLEVBQWE7QUFIMUI7RUFDRSx5Q0FBQTtFQUNELGNadk4yQjtFWXdOM0IsVUFBVTtFQUFFLFlBQUEsRUFBYTtBQUgxQjtFQUNFLHlDQUFBO0VBQ0QsY1p2TjJCO0VZd04zQixVQUFVO0VBQUUsWUFBQSxFQUFhO0FBSDFCO0VBQ0UseUNBQUE7RUFDRCxjWnZOMkI7RVl3TjNCLFVBQVU7RUFBRSxZQUFBLEVBQWE7QUFFMUI7RUFDRSw0QkFBQTtFQUNELGNaNU4yQixFQUFBO0FZOE41QjtFQUNFLG1CQUFBO0VBQ0QsY1poTzJCLEVBQUE7QWFuQjVCO0VBRUMsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUNmO0lBRUMseUJicUJzQjtJYXBCdEIsdUJBQXVCO0lBQ3ZCLGViNkI0QjtJYTVCNUIsZ0JiNEI0QjtJYTNCNUIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixhYnlCNEI7SWF4QjVCLGFid0I0QjtJYXZCNUIsa0JBQWtCO0lBQ2xCLGtEQUFrRDtJQUNsRCxlQUFlO0lSSEwseUJRS2E7SVJMYiwwQlFLYTtJUkRqQixzQlFDaUI7SVJMYix3QlFNTztJUk5QLHFCUU1PO0lSTlAsbUJRTU87SVJOUCxvQlFNTztJUkZYLGdCUUVXO0lSTlAscUJRT0k7SVJQSixrQlFPSTtJUlBKLGdCUU9JO0lSUEosaUJRT0k7SVJIUixvQlFHUTtJUkhSLGFRR1E7SVJQSiw0QlFRYztJUlJkLDBCUVFjO0lSUmQsMkJRUWM7SVJKbEIsd0JRSWtCO1lSSmxCLHVCUUlrQjtJUlJkLHdCUVNVO0lSVFYsc0JRU1U7SVJUVix1QlFTVTtJUkxkLHlCUUtjO1lSTGQsbUJRS2MsRUFBQTtBQWxCcEI7TVJTVSxrQlFjRTtNUmRGLGVRY0U7TVJkRixhUWNFO01SZEYsY1FjRTtNUlZOLFVRVU07TVJkRiw0QlFlWTtNUmZaLHlCUWVZO01SZlosdUJRZVk7TVJmWix3QlFlWTtNUlhoQixvQlFXZ0I7TVJmWixnQ1FnQmdCO01SWnBCLHdCUVlvQixFQUFBO0FBRzFCO01BRUMseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6QixjYkMyQjtNYUEzQixlYkEyQjtNYUMzQixNQUFNLEVBQUE7QUFHUjtJQUVDLGViTjRCO0lhTzVCLGViUDRCO0lhUTVCLHlCYnBCd0I7SWFxQnhCLGtCQUFrQjtJQUNsQixhYlY0QjtJYVc1QixRQUFRO0lBQ1IsdUJiWjRCO0lhYTVCLG1CYmI0QjtJYWM1QixxQmJkNEI7SWFlNUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SVJ4Q0gseUJRMENhO0lSMUNiLDBCUTBDYTtJUnRDakIsc0JRc0NpQjtJUjFDYixrQlEyQ0M7SVIzQ0QsZVEyQ0M7SVIzQ0QsYVEyQ0M7SVIzQ0QsY1EyQ0M7SVJ2Q0wsVVF1Q0s7SVIzQ0QsaUNRNENnQjtJUnhDcEIseUJRd0NvQjtJUjVDaEIsNEJRNkNXO0lSN0NYLHlCUTZDVztJUjdDWCx1QlE2Q1c7SVI3Q1gsd0JRNkNXO0lSekNmLG9CUXlDZTtJUjdDWCxrQ1E4Q2lCO0lSMUNyQiwwQlEwQ3FCLEVBQUE7QUFFM0I7TUFDQyxVYnpCMkIsRUFBQTtBY3BDOUI7O0NoQnNoREM7QWdCbGhERDtFQUVDLGdCZDhCNkI7RWM3QjdCLG1CQUFtQjtFQUNuQix1QmQ0QjZCO0VjM0I3QixjQUFjO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VUQUYseUJTRWtCO0VURmxCLDBCU0VrQjtFVEV0QixzQlNGc0I7RVRGbEIscUJTR1M7RVRIVCxrQlNHUztFVEhULGdCU0dTO0VUSFQsaUJTR1M7RVRDYixvQlNEYTtFVENiLGFTRGE7RVRIVCw0QlNJbUI7RVRKbkIsMEJTSW1CO0VUSm5CLDJCU0ltQjtFVEF2Qix3QlNBdUI7VVRBdkIsdUJTQXVCO0VUSm5CLHdCU0tlO0VUTGYsc0JTS2U7RVRMZix1QlNLZTtFVERuQix5QlNDbUI7VVREbkIsbUJTQ21CO0VUTGYsbUJTTVk7RVROWixvQlNNWTtFVEZoQixnQlNFZ0I7RVROWixxQlNPUztFVFBULGtCU09TO0VUUFQsZ0JTT1M7RVRQVCxpQlNPUztFVEhiLGFTR2E7RVRQVCxpQ1NRcUI7RVRKekIseUJTSXlCLEVBQUE7QUFoQmpDO0lBb0JLLGVBQWU7SVRaUixvQlNjUztJVGRULGlCU2NTO0lUZFQsZVNjUztJVGRULGdCU2NTO0lUVmIsWVNVYSxFQUFBO0FBR2pCO0lBRUksd0JBQXlCO0lBQ3pCLFlBQVksRUFBQTtBQUVoQjtJQUVDLGNBQWM7SUFDZCxVQUFVO0lBQ1AsU0FBUztJQUNULGlCZEhzQixFQUFBO0FNdEIxQjtNUW9CQTtRQU9RLGNkTGtCLEVBQUEsRWN5QnpCO0FBbEJBO01BRUMsWUFBWSxFQUFBO0FBRVY7TUFFSSxjZHpCYztNYzBCZCxnQkFBZ0IsRUFBQTtBQUVwQjtNQUVJLGNkakNZO01ja0NaLGdCQUFnQixFQUFBO0FBRXBCO01BQ0ksb0JkdEJrQjtNY3VCbEIsb0JkdkJrQixFQUFBO0FjMEIxQjtJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJkMUNrQjtJYzJDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTtBUnZEcEI7TVFnREE7UUFVUSxxQkFBcUIsRUFBQSxFQU01QjtBUjdERDtNUTZDQTtRQWNRLHFCQUFxQixFQUFBLEVBRTVCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsc0JBQW1CO0lBQ25CLHNCQUFzQixFQUFBO0FBRTFCO0lBRUMseUJkakVtQixFQUFBO0FjbUVwQjtJQUNJLHlCZGpFa0IsRUFBQTtBTWJ0QjtJUVBKO01BeUZRLGNBQWM7TUFDZCxlZDFEc0IsRUFBQSxFYzJFN0I7QVJqR0c7SVFWSjtNQThGUSxjQUFjO01BQ2QsY2QvRHNCLEVBQUEsRWMyRTdCO0FSOUZHO0lRYko7TUFtR1EsY0FBYztNQUNkLGNkcEVzQixFQUFBLEVjMkU3QjtBUjNGRztJUWhCSjtNQXdHUSxjQUFjO01BQ2QsZWR6RXNCLEVBQUEsRWMyRTdCO0FDL0dEOztDakJ1b0RDO0FpQm5vREQsd0NBQUE7QUFDQTtFQUVDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPLEVBQUE7QVRNSjtJU2ZKO01BWUUsa0RBQUEsRUFBbUQ7TUFackQ7UUFlRyx5QmZDcUIsRUFBQSxFZUFyQjtBQUlIO0VBRUMsVUFBVTtFQUNWLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQTJEWixjQUFBO0VBTUEsZ0JBQUE7RUFtQkEsOEJBQUE7RUFRQSxhQUFBO0VBT0Esa0NBQUEsRUFBbUM7QVRuSGhDO0lTaUJIO01BR0UscUJBQXFCLEVBQUEsRUFVdEI7QVQzQkU7SVNjSDtNQU9FLHFCQUFxQixFQUFBLEVBTXRCO0FUeEJFO0lTV0g7TUFXRSxxQkFBcUIsRUFBQSxFQUV0QjtBQW5CRjtJQXNCRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQXhCakI7SUE0QkUsYUFBYTtJQUNiLGNmakNzQjtJZWtDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtBVDNDZjtJU1dKO01BbUNFLFVBQVUsRUFBQSxFQTJFWDtBVHRIRztJU1FKO01Bc0NFLFVBQVUsRUFBQSxFQXdFWDtBVG5IRztJU0tKO01BeUNFLFVBQVUsRUFBQSxFQXFFWDtBQTlHRDtJQTZDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMseURBQXlEO0lBQ3pELDhDQUE4QyxFQUFBO0FBckRoRDtJQXlERSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHlCZi9Ec0I7SWVnRXRCLHlCZmhFc0I7SWVpRXRCLG9DZmpFc0IsRUFBQTtBZUl4QjtJQWtFRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0FBbkVkO0lBd0VFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUVBQWlFO0lBQ2pFLGlDQUFpQztJQUNqQyxvRUFBb0U7SUFDcEUsaUVBQWlFO0lBQ2pFLDhCQUE4QjtJQUM5QixxREFBcUQ7SUFDckQsNEVBQTRFO0lBQzVFLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7QUF0Rm5CO0lBMkZFLDBDQUEwQztJQUMxQyx1Q0FBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLGlFZmxHc0IsRUFBQTtBZUl4QjtJQW1HRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWUsRUFBQTtBQXJHakI7SUEwR0UsMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2QyxpRWZoSHNCLEVBQUE7QWVvSHhCLGdEQUFBO0FBQ0E7RUFFQyxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxpQ0FBOEI7RVY1SW5CLHdCVXFMTTtFVnJMTixxQlVxTE07RVZyTE4sbUJVcUxNO0VWckxOLG9CVXFMTTtFVmpMVixnQlVpTFU7RVZyTE4seUJVc0xZO0VWdExaLDBCVXNMWTtFVmxMaEIsc0JVa0xnQjtFVnRMWixxQlV1TEc7RVZ2TEgsa0JVdUxHO0VWdkxILGdCVXVMRztFVnZMSCxpQlV1TEc7RVZuTFAsb0JVbUxPO0VWbkxQLGFVbUxPO0VWdkxILGdDVXdMaUI7RVZ4TGpCLDhCVXdMaUI7RVZ4TGpCLCtCVXdMaUI7RVZwTHJCLHVCVW9McUI7VVZwTHJCLDJCVW9McUI7RVZ4TGpCLHdCVXlMUztFVnpMVCxzQlV5TFM7RVZ6TFQsdUJVeUxTO0VWckxiLHlCVXFMYTtVVnJMYixtQlVxTGEsRUFBQTtBQTVDcEI7SUFFQyxVQUFVLEVBQUE7QVRoSlI7TVM4SUg7UUFLRSxZQUFZLEVBQUEsRUFlYjtBVC9KRTtNUzJJSDtRQVNFLFlBQVksRUFBQSxFQVdiO0FUNUpFO01Td0lIO1FBYUUsVUFBVSxFQUFBLEVBT1g7QVR6SkU7TVNxSUg7UUFpQkUsVUFBVTtRQUNWLG9CQUFvQixFQUFBLEVBRXJCO0FBbkNGO0lBc0NFLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtBVG5LakI7TVM0SEo7UUEwQ0csZUFBZSxFQUFBLEVBV2hCO0FBckRGO01BOENHLGVBQWU7TUFDZix5QkFBaUM7TUFDakMscUJBQXFCO01BQ3JCLGtCZnZKMkI7TWV3SjNCLGlCQUFpQjtNQUNqQiwrQkFBK0IsRUFBQTtBQVlsQyw2QkFBQTtBQUNBO0VBRUMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VWek1MLHlCVWdOWTtFVmhOWiwwQlVnTlk7RVY1TWhCLHNCVTRNZ0I7RVZoTloscUJVaU5HO0VWak5ILGtCVWlORztFVmpOSCxnQlVpTkc7RVZqTkgsaUJVaU5HO0VWN01QLG9CVTZNTztFVjdNUCxhVTZNTztFVmpOSCw0QlVrTmE7RVZsTmIsMEJVa05hO0VWbE5iLDJCVWtOYTtFVjlNakIsd0JVOE1pQjtVVjlNakIsdUJVOE1pQjtFVmxOYix3QlVtTlM7RVZuTlQsc0JVbU5TO0VWbk5ULHVCVW1OUztFVi9NYix5QlUrTWE7VVYvTWIsbUJVK01hO0VWbk5ULG1CVW9OTTtFVnBOTixvQlVvTk07RVZoTlYsZ0JVZ05VO0VWcE5OLHFCVXFORztFVnJOSCxrQlVxTkc7RVZyTkgsZ0JVcU5HO0VWck5ILGlCVXFORztFVmpOUCxhVWlOTztFVnJOSCxpQ1VzTmU7RVZsTm5CLHlCVWtObUIsRUFBQTtBVHBOdkI7SVM0TEo7TUFjRSxZQUFZO01BQ1osV0FBVyxFQUFBLEVBOEJaO0FBN0NEO0lBNEJFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY2ZuTnNCO0llb050QixlQUFlO0lWN05MLGlDVStOZ0I7SVYzTnBCLHlCVTJOb0I7SVYvTmhCLGtDVWdPaUI7SVY1TnJCLDBCVTROcUIsRUFBQTtBVHhOekI7SVNzTEo7TUF1Q0Usa0RBQUEsRUFBbUQ7TUF2Q3JEO1FBMENHLHlCZi9OcUIsRUFBQSxFZWdPckI7QUFJSCwyREFBQTtBQUVBO0VBRUMsdUJBQXVCLEVBQUE7QUFHeEIsb0NBQUE7QUFFQTtFVnRQWSxnQ1V5UGM7RVZyUGxCLHdCVXFQa0IsRUFBQTtBQ3JRMUI7O0NsQjA0REM7QWtCdDRERCxtREFBQTtBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFdBQVc7RVhEQSx3QldHTTtFWEhOLHFCV0dNO0VYSE4sbUJXR007RVhITixvQldHTTtFWENWLGdCV0RVO0VYSE4seUJXSVk7RVhKWiwwQldJWTtFWEFoQixzQldBZ0I7RVhKWixxQldLRztFWExILGtCV0tHO0VYTEgsZ0JXS0c7RVhMSCxpQldLRztFWERQLG9CV0NPO0VYRFAsYVdDTztFWExILG1DV01vQjtFWE5wQixpQ1dNb0I7RVhOcEIsa0NXTW9CO0VYRnhCLHlCV0V3QjtVWEZ4Qiw4QldFd0I7RVhOcEIsd0JXT1M7RVhQVCxzQldPUztFWFBULHVCV09TO0VYSGIseUJXR2E7VVhIYixtQldHYTtFWFBULHlCV1FPO0VYUlAsc0JXUU87RVhSUCxvQldRTztFWFJQLHFCV1FPO0VYSlgsaUJXSVcsRUFBQTtBQUVsQjtJQUVDLG9CaEJZNEI7SWdCWDVCLHNCQUFzQjtJWGJaLDJDV2U2QjtJWGY3Qix5Q1dlNkI7SVhmN0IsMENXZTZCO0lYWGpDLGtDV1dpQztZWFhqQyxzQ1dXaUMsRUFBQTtBQUd4QztJQUVDLHlCaEJUK0I7SWdCVS9CLGdCaEJHNEI7SWdCRjVCLFdBQVc7SUFDWCxnQmhCQzRCO0lnQkE1QixnQkFBZ0I7SVh4Qk4seUJXMEJhO0lYMUJiLDBCVzBCYTtJWHRCakIsc0JXc0JpQjtJWDFCYixxQlcyQkk7SVgzQkosa0JXMkJJO0lYM0JKLGdCVzJCSTtJWDNCSixpQlcyQkk7SVh2QlIsb0JXdUJRO0lYdkJSLGFXdUJRO0lYM0JKLFlXNEJGO0lYNUJFLFVXNEJGO0lYeEJGLG1CV3dCRTtZWHhCRixPV3dCRTtJWDVCRSxnQ1c2QmtCO0lYN0JsQiw4Qlc2QmtCO0lYN0JsQiwrQlc2QmtCO0lYekJ0Qix1Qld5QnNCO1lYekJ0QiwyQld5QnNCO0lYN0JsQix3Qlc4QlU7SVg5QlYsc0JXOEJVO0lYOUJWLHVCVzhCVTtJWDFCZCx5QlcwQmM7WVgxQmQsbUJXMEJjLEVBQUE7QUFFcEI7TUFFQyw2QkFBNkI7TUFDN0IsZ0JoQlgyQjtNZ0JZM0IsZ0JoQloyQixFQUFBO0FnQmlCOUIsd0NBQUE7QUFDQTtFQUNDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixRQUFRLEVBQUE7QUFHVCw2QkFBQTtBQUE4QixpQ0FBQTtBQUM5QjtFQUNDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQix3Q2hCckR1QjtFZ0JzRHZCLHFCaEJ2QzZCLEVBQUE7QWdCMEM1QixvRUFBQTtBQUNBO0VBQ0QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7QUFHWixpREFBQTtBQUNBO0VBQ0QsY0FBYyxFQUFBO0FBR2IscUNBQUE7QUFDQTtFQUNELE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJoQi9FdUIsRUFBQTtBaUJwQnhCOztDbkI4Z0VDO0FtQjFnRUQ7RUFDQyxXQUFXO0VBQ1gsa0JBQWdCO0VBQ2hCLFVBQVU7RVpJQyx5QllGWTtFWkVaLDBCWUZZO0VaTWhCLHNCWU5nQjtFWkVaLHFCWURHO0VaQ0gsa0JZREc7RVpDSCxnQllERztFWkNILGlCWURHO0VaS1Asb0JZTE87RVpLUCxhWUxPO0VaQ0gsZ0NZQWlCO0VaQWpCLDhCWUFpQjtFWkFqQiwrQllBaUI7RVpJckIsdUJZSnFCO1VaSXJCLDJCWUpxQjtFWkFqQix3QllDUztFWkRULHNCWUNTO0VaRFQsdUJZQ1M7RVpHYix5QllIYTtVWkdiLG1CWUhhO0VaRFQsMkJZRVk7RVpGWix5QllFWTtFWkVoQiw0QllGZ0I7RVpFaEIsNkJZRmdCO1VaRWhCLHNCWUZnQixFQUFBO0FBRXZCO0lBRUMsV0FBVztJQUNYLGtCakJpQjRCO0lpQmhCNUIseUJqQkcrQjtJaUJGL0Isa0JqQmU0QjtJaUJkNUIsaUJBQWlCO0lBQ2pCLGlCakJhNEI7SUt4QmxCLHlCWWFhO0laYmIsMEJZYWE7SVpUakIsc0JZU2lCO0laYmIscUJZY0k7SVpkSixrQlljSTtJWmRKLGdCWWNJO0laZEosaUJZY0k7SVpWUixvQllVUTtJWlZSLGFZVVE7SVpkSiw0QlllYztJWmZkLDBCWWVjO0laZmQsMkJZZWM7SVpYbEIsd0JZV2tCO1laWGxCLHVCWVdrQjtJWmZkLHdCWWdCVTtJWmhCVixzQllnQlU7SVpoQlYsdUJZZ0JVO0laWmQseUJZWWM7WVpaZCxtQllZYyxFQUFBO0FBWnBCO01BZ0JDLFdBQVc7TUFDWCxzQmpCRzJCLEVBQUE7QWlCQTdCO0lBRUMsV0FBVztJQUNYLGNqQkg0QjtJaUJJNUIsc0JqQko0QjtJaUJLNUIsbUJqQmxCK0I7SWlCbUIvQixhQUFhO0lBQ2IsZUFBZTtJQUtaLDZGQUFtRTtJQUFuRSxtREFBbUU7SUFDbkUsNEJBQTRCO0lBQzVCLGVBQWU7SVp0Q1IseUJZd0NhO0laeENiLDBCWXdDYTtJWnBDakIsc0JZb0NpQjtJWnhDYix3Qll5Q007SVpyQ1YsZ0JZcUNVO0laekNOLHdCWTBDTztJWjFDUCxxQlkwQ087SVoxQ1AsbUJZMENPO0laMUNQLG9CWTBDTztJWnRDWCxnQllzQ1csRUFBQTtBQWpEbkI7SUFxREssZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsd0JBQXdCO0laakRqQix5QlltRGE7SVpuRGIsMEJZbURhO0laL0NqQixzQlkrQ2lCO0labkRiLHdCWW9ETTtJWmhEVixnQllnRFU7SVpwRE4sd0JZcURPO0lackRQLHFCWXFETztJWnJEUCxtQllxRE87SVpyRFAsb0JZcURPO0laakRYLGdCWWlEVyxFQUFBO0FBNURuQjtJQWlFSyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QixFQUFBO0FBbkU1QjtJQXVFSyxTQUFTLEVBQUE7QUF2RWQ7SUEyRUssVWpCNUN5QjtJaUI2QzVCLFdqQjdDNEI7SWlCOEM1QixrQkFBa0I7SUFDbEIsbUJqQjlEc0I7SWlCK0R0QixlQUFlO0laeEVMLHlCWTBFYTtJWjFFYiwwQlkwRWE7SVp0RWpCLHNCWXNFaUI7SVoxRWIsd0JZMkVPO0laM0VQLHFCWTJFTztJWjNFUCxtQlkyRU87SVozRVAsb0JZMkVPO0ladkVYLGdCWXVFVztJWjNFUCx3Qlk0RU07SVp4RVYsZ0JZd0VVLEVBQUE7QUFuRmxCO0lBd0ZLLFVqQnpEeUI7SWlCMEQ1QixXakIxRDRCO0lpQjJENUIsa0JBQWtCO0lBQ2xCLG1CakIzRXNCO0lpQjRFdEIsZUFBZTtJWnJGTCx5Qll1RmE7SVp2RmIsMEJZdUZhO0labkZqQixzQlltRmlCO0ladkZiLHdCWXdGTztJWnhGUCxxQll3Rk87SVp4RlAsbUJZd0ZPO0laeEZQLG9CWXdGTztJWnBGWCxnQllvRlc7SVp4RlAsd0JZeUZNO0lackZWLGdCWXFGVSxFQUFBO0FBaEdsQjtJQXFHSyxhQUFhLEVBQUE7QUFyR2xCO0lBeUdLLGFBQWEsRUFBQTtBQXpHbEI7SUE2R0ssbUJqQjNGNEI7SWlCNEY1QixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBO0FBL0dqQjtJQW1ISyxhQUFhLEVBQUE7QUFFakI7SUFFQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CakIxRjRCO0lLeEJsQix5QllvSGE7SVpwSGIsMEJZb0hhO0laaEhqQixzQllnSGlCO0lacEhiLHFCWXFISTtJWnJISixrQllxSEk7SVpySEosZ0JZcUhJO0lackhKLGlCWXFISTtJWmpIUixvQllpSFE7SVpqSFIsYVlpSFE7SVpySEosbUNZc0hxQjtJWnRIckIsaUNZc0hxQjtJWnRIckIsa0NZc0hxQjtJWmxIekIseUJZa0h5QjtZWmxIekIsOEJZa0h5QjtJWnRIckIsd0JZdUhVO0ladkhWLHNCWXVIVTtJWnZIVix1Qll1SFU7SVpuSGQseUJZbUhjO1labkhkLG1CWW1IYyxFQUFBO0FBRXBCO01BRUMsZ0JBQWdCO01BQ2hCLG1CakJwRzJCLEVBQUE7QWlCaUczQjtRQU1DLGFBQWE7UUFDYixzQmpCeEcwQixFQUFBO0FpQjBHM0I7UUFFQyxjakIzSG9CLEVBQUE7QWtCckJ4Qjs7Q3BCeXRFQztBb0JydEVEO0VBRUMsZ0JBQWdCO0VBQ2hCLFNBQVM7RWJLRSx5QmFIWTtFYkdaLDBCYUhZO0ViT2hCLHNCYVBnQjtFYkdaLGlDYUZnQjtFYk1wQix5QmFOb0I7RWJFaEIsa0JhREM7RWJDRCxlYURDO0ViQ0QsYWFEQztFYkNELGNhREM7RWJLTCxVYUxLLEVBQUE7QUFFVDtJQUVDLFlBQVk7SWJITCxrQmFLRTtJYkxGLGVhS0U7SWJMRixhYUtFO0liTEYsY2FLRTtJYkROLFVhQ00sRUFBQTtBQUdiO0lBRUMsY2xCTnlCO0lrQk96Qix1QkFBcUI7SUFDckIsc0JBQW9CO0lBQ3BCLGdDbEJGK0I7SWtCRy9CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy92aW5jdWxhY2lvbi9fdmluMDAxLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICAgIENvbWVudGFyaW9zIGRlbCBhdXRvclxyXG4qL1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW1wb3J0IFNNQUNTUyBCYXNlIENhdGVnb3J5XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AaW1wb3J0ICcuLi8uLi9iYXNlL19iYXNlJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEltcG9ydCBTTUFDU1MgTGF5b3V0IENhdGVnb3J5XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AaW1wb3J0ICcuLi8uLi9sYXlvdXQvX2xheW91dCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbXBvcnQgU01BQ1NTIE1vZHVsZXMgZm9yIGJlbjAwMVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGltcG9ydCAnLi4vLi4vbW9kdWxlcy9iYWNrLWJ1dHRvbi9fYmFjay1idXR0b24nO1xyXG5AaW1wb3J0ICcuLi8uLi9tb2R1bGVzL21haW4tdGl0bGUvX21haW4tdGl0bGUnO1xyXG5AaW1wb3J0ICcuLi8uLi9tb2R1bGVzL3VzZXItaW5mby9fdXNlci1pbmZvJztcclxuQGltcG9ydCAnLi4vLi4vbW9kdWxlcy9mb3Jtcy9mb3JtLWVsZW1lbnRzJztcclxuIiwiLyogXHJcbiAgICBDb21lbnRhcmlvcyBkZWwgYXV0b3JcclxuKi9cbi8qISBub3JtYWxpemUuc2NzcyB2MC4xLjAgfCBNSVQgTGljZW5zZSB8IGJhc2VkIG9uIGdpdC5pby9ub3JtYWxpemUgKi9cbi8qKlxyXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxyXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcclxuICogICAgdXNlciB6b29tLlxyXG4gKi9cbmh0bWwge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgLyogMSAqL1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi8gfVxuXG4vKipcclxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxyXG4gKi9cbmJvZHkge1xuICBtYXJnaW46IDA7IH1cblxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXHJcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXHJcbiAqIGFuZCBGaXJlZm94LlxyXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxyXG4gKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWFpbixcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxyXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXHJcbiAqL1xuYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgLyogMiAqLyB9XG5cbi8qKlxyXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxyXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxyXG4gKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDsgfVxuXG4vKipcclxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxyXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUgOC85LzExLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXHJcbiAqL1xuW2hpZGRlbl0sXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLyogTGlua3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLyoqXHJcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cbmE6YWN0aXZlLFxuYTpob3ZlciB7XG4gIG91dGxpbmU6IDA7IH1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXHJcbiAqL1xuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXHJcbiAqL1xuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXHJcbiAqL1xuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXHJcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cclxuICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxyXG4gKi9cbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xuICBjb2xvcjogIzAwMDsgfVxuXG4vKipcclxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xuc21hbGwge1xuICBmb250LXNpemU6IDgwJTsgfVxuXG4vKipcclxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07IH1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtOyB9XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxyXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cclxuICovXG5pbWcge1xuICBib3JkZXI6IDA7IH1cblxuLyoqXHJcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxyXG4gKi9cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4vKiBHcm91cGluZyBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcclxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXHJcbiAqL1xuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDsgfVxuXG4vKipcclxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxyXG4gKi9cbmhyIHtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDFlbSAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjsgfVxuXG4vKipcclxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLyoqXHJcbiAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cclxuICovXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07IH1cblxuLyogRm9ybXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxyXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxyXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXHJcbiAqL1xuLyoqXHJcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cclxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXHJcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXHJcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxyXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7XG4gIC8qIDIgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiAzICovIH1cblxuLyoqXHJcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxyXG4gKi9cbmJ1dHRvbiB7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXHJcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXHJcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXHJcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cclxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxuXG4vKipcclxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcclxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXHJcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cclxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcclxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxyXG4gKi9cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMiAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIDMgKi8gfVxuXG4vKipcclxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cclxuICovXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cclxuICovXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG4vKipcclxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxyXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cclxuICovXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH1cblxuLyoqXHJcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cclxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cclxuICpcclxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cclxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cclxuICovXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIDIgKi8gfVxuXG4vKipcclxuICogRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cclxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcclxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxyXG4gKi9cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cclxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxyXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cclxuICovXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC8qIDEgKi9cbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogMiAqL1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXHJcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcclxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxyXG4gKi9cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XG5cbi8qKlxyXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXHJcbiAqL1xuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xuICBtYXJnaW46IDAgMnB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07IH1cblxuLyoqXHJcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cclxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxyXG4gKi9cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAyICovIH1cblxuLyoqXHJcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXHJcbiAqL1xudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4vKipcclxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxyXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cclxuICovXG5vcHRncm91cCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi8qIFRhYmxlc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cclxuICovXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwOyB9XG5cbi8qKlxyXG4gKiBib2R5IC1zdHlsZXNcclxuICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCIgIWltcG9ydGFudDsgfVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjMxMjVlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxuXG4vKipcclxuICogRm9udCBmYW1pbHlzIC0gaW5jbHVkZS5cclxuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2NhbS9mb250cy9NeXJpYWRQcm8tSXQuZW90P1wiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1JdC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1JdC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1JdC5zdmcjTXlyaWFkUHJvXCIpIGZvcm1hdChcInN2Z1wiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2NhbS9mb250cy9NeXJpYWRQcm8tUmVndWxhci5lb3Q/XCIpIGZvcm1hdChcImVvdFwiKSwgdXJsKFwiL2Fzc2V0cy9jYW0vZm9udHMvTXlyaWFkUHJvLVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2NhbS9mb250cy9NeXJpYWRQcm8tUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1SZWd1bGFyLnN2ZyNNeXJpYWRQcm9cIikgZm9ybWF0KFwic3ZnXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2NhbS9mb250cy9NeXJpYWRQcm8tQm9sZC5lb3Q/XCIpIGZvcm1hdChcImVvdFwiKSwgdXJsKFwiL2Fzc2V0cy9jYW0vZm9udHMvTXlyaWFkUHJvLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2NhbS9mb250cy9NeXJpYWRQcm8tQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1Cb2xkLnN2ZyNNeXJpYWRQcm9cIikgZm9ybWF0KFwic3ZnXCIpOyB9XG5cbi8qKlxyXG4gKiBUZXh0IGVsZW1lbnRzIC0gc3R5bGVzLlxyXG4gKi9cbmgxLCAuaDEge1xuICBjb2xvcjogIzMyM2M0NztcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc2l6ZTogMy41NjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzMzZW07XG4gIG1hcmdpbi10b3A6IDAuMzY4NDIxMDVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43MzY4NDIxMWVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7IH1cblxuaDIsIC5oMiB7XG4gIGNvbG9yOiAjMzIzYzQ3O1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zaXplOiAyLjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE2NjY2NjY3ZW07XG4gIG1hcmdpbi10b3A6IDAuMTk0NDQ0NDRlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG5oMywgLmgzIHtcbiAgY29sb3I6ICMzMjNjNDc7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByb1wiO1xuICBmb250LXNpemU6IDEuNjI1ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjgwNzY5MjMxZW07XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC44MDc2OTIzMWVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7IH1cblxuaDQsIC5oNCB7XG4gIGNvbG9yOiAjMzIzYzQ3O1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zaXplOiAxLjEyNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4xNjY2NjY2N2VtO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XG5cbmg1LCAuaDUge1xuICBjb2xvcjogIzMyM2M0NztcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4zMTI1ZW07XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4zMTI1ZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG5oNiwgLmg2IHtcbiAgY29sb3I6ICMzMjNjNDc7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByb1wiO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMzNlbTtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjgzMzMzMzMzZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG5wIHtcbiAgY29sb3I6ICMyRjMzMzc7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByb1wiO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzEyNWVtO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMzEyNWVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7IH1cblxudWwgbGkge1xuICBjb2xvcjogIzMyM2M0NztcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc2l6ZTogMC45Mzc1ZW07XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjA2NjY2NjY3ZW07XG4gIG1hcmdpbi10b3A6IDAuNDY2NjY2NjdlbTtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7IH1cblxuZW0ge1xuICBjb2xvcjogIzMyM2M0NztcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc2l6ZTogMC42ODc1ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM2MzYzNjM2ZW07XG4gIG1hcmdpbi10b3A6IDAuOTA5MDkwOTFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7IH1cblxuLyoqXHJcbiAqIFRleHQgY29sb3JzIC0gc3R5bGVzLlxyXG4gKi9cbi50ZXh0X19jb2xvci0tbGlnaHQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuXG4udGV4dF9fY29sb3ItLWRhcmsge1xuICBjb2xvcjogIzIyMjYyYSAhaW1wb3J0YW50OyB9XG5cbi50ZXh0X19jb2xvciB7XG4gIGNvbG9yOiAjMzIzYzQ3OyB9XG5cbi50ZXh0X19jb2xvci0tcHJpbWFyeSB7XG4gIGNvbG9yOiAjRUUzMTI0OyB9XG5cbi8qKlxyXG4gKiBUZXh0IGFsaWduIC0gc3R5bGVzLlxyXG4gKi9cbi50ZXh0X19hbGlnbi0tbGVmdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi50ZXh0X19hbGlnbi0tcmlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLnRleHRfX2FsaWduLS1jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi8qKlxyXG4gKiBUZXh0IGFsaWduIC0gd2VpZ2h0LlxyXG4gKi9cbi50ZXh0X193ZWlnaHQtLXJlZ3VsYXIge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7IH1cblxuLyoqXHJcbiAqIFRleHQgbWFyZ2luIHZhcmlhdGlvbnNcclxuICovXG4udGV4dF9fbWFyZ2luLS1ib3R0b20wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBMYXlvdXRcclxuKi9cbi5mb3JtQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmZvcm1Db250YWluZXIge1xuICAgICAgcGFkZGluZzogMmVtIDA7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xuICAgICAgcGFkZGluZzogMi4xODc1ZW0gMi41ZW07XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jYW0vaW1nL2xheW91dC9jdXJ2ZV9iZy5wbmcpO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxODksIDE4OSwgMC4wNCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyLjYyNWVtO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg0NywgNTEsIDU1LCAwLjE3KTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNDcsIDUxLCA1NSwgMC4xNyk7XG4gICAgICAtby1ib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg0NywgNTEsIDU1LCAwLjE3KTtcbiAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg0NywgNTEsIDU1LCAwLjE3KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpOyB9IH1cbiAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyLjVlbSAwO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gICAgLW8tZGlzcGxheTogZmxleDtcbiAgICAtbXMtZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC1vLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIHtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1vLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyB9IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIge1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1tb3otZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW8tZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW8tZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7IH0gfVxuICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmNlbnRlclRleHQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5jZW50ZXJUZXh0IHtcbiAgICAgICAgICB3aWR0aDogODAlOyB9IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5jZW50ZXJUZXh0IHtcbiAgICAgICAgICB3aWR0aDogODAlOyB9IH1cbiAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmNlbnRlclRleHQtLXNtYWxsIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gYXV0bzsgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmNlbnRlclRleHQtLXNtYWxsIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7IH0gfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmNlbnRlclRleHQtLXNtYWxsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyB9IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuY2VudGVyVGV4dC0tc21hbGwge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTsgfSB9XG4gICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5jZW50ZXJUZXh0LS1jb2xvclByaW1hcnkge1xuICAgICAgICBjb2xvcjogI0VFMzEyNDsgfVxuICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uIHtcbiAgICAgICAgICB3aWR0aDogNDUlOyB9IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uIHtcbiAgICAgICAgICB3aWR0aDogMzUlOyB9IH1cbiAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW4tLWNlbnRlciB7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgfVxuICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuZm9ybUNvbHVtbl9fY29udGVudENlbnRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uX19jb250ZW50Q2VudGVyIGEge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBjb2xvcjogI0VFMzEyNCAhaW1wb3J0YW50O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW46IDAgMC4zMTI1ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDsgfVxuICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW5QcmluY2lwYWwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nLXRvcDogMWVtOyB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uUHJpbmNpcGFsIHtcbiAgICAgICAgICB3aWR0aDogOTUlOyB9IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uUHJpbmNpcGFsIHtcbiAgICAgICAgICB3aWR0aDogODUlOyB9IH1cbiAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uTWlkZGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuZm9ybUNvbHVtbk1pZGRsZSB7XG4gICAgICAgICAgd2lkdGg6IDcwJTsgfSB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuZm9ybUNvbHVtbk1pZGRsZSB7XG4gICAgICAgICAgd2lkdGg6IDYwJTsgfSB9XG4gICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuaW5kaWNhdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5pbmRpY2F0aW9ucyB1bCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5pbmRpY2F0aW9ucyB1bCB7XG4gICAgICAgICAgICB3aWR0aDogNjAlOyB9IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuaW5kaWNhdGlvbnMgdWwge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTsgfSB9XG4gIC5mb3JtQ29udGFpbmVyX19idXR0b25Db250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMi41ZW0gMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5mb3JtQ29udGFpbmVyX19idXR0b25Db250YWluZXItLWR1YWxCdXR0b24ge1xuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAgIC1vLWRpc3BsYXk6IGZsZXg7XG4gICAgICAtbXMtZGlzcGxheTogZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC1tb3otanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgIC5mb3JtQ29udGFpbmVyX19idXR0b25Db250YWluZXItLWR1YWxCdXR0b24gYXBwLWJ1dHRvbi1jb250aW51ZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMC4zMTI1ZW07XG4gICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgLmZvcm1Db250YWluZXJfX2J1dHRvbkNvbnRhaW5lci0tZHVhbEJ1dHRvbiBhcHAtYnV0dG9uLWNvbnRpbnVlIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIC5mb3JtQ29udGFpbmVyX19idXR0b25Db250YWluZXItLWR1YWxCdXR0b24gYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiAwIDAuMzEyNWVtO1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBMYXlvdXRcclxuKi9cbi5jYXJkc0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5jYXJkc0NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyZW0gMDtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gICAgICBwYWRkaW5nOiAyLjE4NzVlbSAyLjVlbTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2NhbS9pbWcvbGF5b3V0L2N1cnZlX2JnLnBuZyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE4OSwgMTg5LCAwLjA0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIuNjI1ZW07XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg0NywgNTEsIDU1LCAwLjE3KTtcbiAgICAgIC1vLWJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpO1xuICAgICAgLW1zLWJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNDcsIDUxLCA1NSwgMC4xNyk7IH0gfVxuICAuY2FyZHNDb250YWluZXJfX3JvdyB7XG4gICAgbWFyZ2luOiAyLjVlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gICAgLW8tZGlzcGxheTogZmxleDtcbiAgICAtbXMtZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC1vLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAuY2FyZHNDb250YWluZXJfX3JvdyB7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtby1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtby1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDsgfSB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAuY2FyZHNDb250YWluZXJfX3JvdyB7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtby1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtby1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDsgfSB9XG4gICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmQge1xuICAgICAgcGFkZGluZzogMS41NjI1ZW0gMS44NzVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNFNEU0RTQ7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtOyB9IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBtYXJnaW46IDFyZW07IH0gfVxuICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2hlYWRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjRUUzMTI0O1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZF9faGVhZGVyIGg0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19oZWFkZXIgaDQgc3Ryb25nIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRUUzMTI0OyB9XG4gICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZF9fYm9keSB7XG4gICAgICAgIG1hcmdpbjogMC43NWVtIDA7IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZF9fYm9keSB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxM3JlbTsgfSB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19ib2R5IHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE0cmVtOyB9IH1cbiAgICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2JvZHkgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC45Mzc1ZW07XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19ib2R5IHVsIGxpOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICAgICAgICAgICAgY29sb3I6ICNFRTMxMjQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFlbTsgfVxuICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2Zvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVlbTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAtd2Via2l0LWRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAgICAgLW8tZGlzcGxheTogZmxleDtcbiAgICAgICAgLW1zLWRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAtbXMtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19mb290ZXIgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICNFRTMxMjQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjYyNWVtOyB9XG4gICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19mb290ZXIgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjBweDsgfVxuICAuY2FyZHNDb250YWluZXJfX2J1dHRvbkNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyLjVlbSAwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi8qKlxyXG4gKiBMYXlvdXQgLSBNYWluIGNvbnRhaW5lclxyXG4gKi9cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyZW0gMS4yNWVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWRpc3BsYXk6IGZsZXg7XG4gIC1tb3otZGlzcGxheTogZmxleDtcbiAgLW8tZGlzcGxheTogZmxleDtcbiAgLW1zLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbW96LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW8tanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5jb250YWluZXItLW1lbnUge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250YWluZXItLW1lbnUge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvOyB9IH1cblxuLyoqXHJcbiAqIE1vZHVsZXMgLSBCYWNrIGJ1dHRvblxyXG4gKi9cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMi41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC45Mzc1ZW07XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gIC1vLWRpc3BsYXk6IGZsZXg7XG4gIC1tcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1vLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1vei1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtby1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuYmFja0J1dHRvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyZW07IH0gfVxuICAuYmFja0J1dHRvbiBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDsgfVxuICAuYmFja0J1dHRvbiBzcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgICBjb2xvcjogIzIyMjYyYTtcbiAgICBtYXJnaW46IDAgMC40Mzc1ZW07XG4gICAgcGFkZGluZzogMDsgfVxuXG4vKipcclxuICogTW9kdWxlcyAtIG1haW4gdGl0bGVcclxuICovXG4uaW5pdGlhbFRpdGxlIHtcbiAgcGFkZGluZzogMCAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuaW5pdGlhbFRpdGxlLS1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5pbml0aWFsVGl0bGUtLWNlbnRlciBoMyB7XG4gICAgICBtYXJnaW46IDA7IH1cbiAgLmluaXRpYWxUaXRsZS0taXNIaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5pbml0aWFsVGl0bGUtLWlzSGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxuICAuaW5pdGlhbFRpdGxlLS1pc0hpZGRlblNtYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLmluaXRpYWxUaXRsZS0taXNIaWRkZW5TbWFsbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIC5pbml0aWFsVGl0bGUtLWlzSGlkZGVuU21hbGwge1xuICAgICAgICBkaXNwbGF5OiBub25lOyB9IH1cbiAgLmluaXRpYWxUaXRsZSBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xMjVlbTsgfVxuICAuaW5pdGlhbFRpdGxlIGgzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAuaW5pdGlhbFRpdGxlIHAge1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuaW5pdGlhbFRpdGxlIGltZyB7XG4gICAgICB3aWR0aDogMi44MTI1ZW07IH0gfVxuICAuaW5pdGlhbFRpdGxlX19zdGVwc0NvdW50ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAuOTM3NWVtIDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5pbml0aWFsVGl0bGVfX3N0ZXBzQ291bnRlciAuc3RlcCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgIGhlaWdodDogMS43NWVtO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAgIC1vLWRpc3BsYXk6IGZsZXg7XG4gICAgICAtbXMtZGlzcGxheTogZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAuaW5pdGlhbFRpdGxlX19zdGVwc0NvdW50ZXIgLnN0ZXA6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMS43NWVtO1xuICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAwOyB9XG4gICAgICAuaW5pdGlhbFRpdGxlX19zdGVwc0NvdW50ZXIgLnN0ZXA6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgLmluaXRpYWxUaXRsZV9fc3RlcHNDb3VudGVyIC5zdGVwOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cbiAgICAgIC5pbml0aWFsVGl0bGVfX3N0ZXBzQ291bnRlciAuc3RlcC0tYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFMzEyNDsgfVxuICAgICAgICAuaW5pdGlhbFRpdGxlX19zdGVwc0NvdW50ZXIgLnN0ZXAtLWFjdGl2ZTpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRTMxMjQ7IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5pbml0aWFsVGl0bGVfX3N0ZXBzQ291bnRlciAuc3RlcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4OyB9IH1cbiAgICAuaW5pdGlhbFRpdGxlX19zdGVwc0NvdW50ZXIgLmJhciB7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIG1hcmdpbjogMC41cmVtOyB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgLmluaXRpYWxUaXRsZV9fc3RlcHNDb3VudGVyIC5iYXIge1xuICAgICAgICAgIHdpZHRoOiAxMCU7IH0gfVxuICAgICAgLmluaXRpYWxUaXRsZV9fc3RlcHNDb3VudGVyIC5iYXItLWFjdGl2ZSB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNFRTMxMjQ7IH1cblxuLyoqXHJcbiAqIE1vZHVsZXMgLSB1c2VyIGluZm9cclxuICovXG4udXNlckluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC45Mzc1ZW0gMi41ZW07XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gIC1vLWRpc3BsYXk6IGZsZXg7XG4gIC1tcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1vLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAudXNlckluZm8ge1xuICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAtbW96LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgLW8tZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfSB9XG4gIC51c2VySW5mb19fdXNlckF2YXRhciB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCA3cHggIzJGMzMzNztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLnVzZXJJbmZvX191c2VyQXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICBoZWlnaHQ6IDE3MHB4OyB9IH1cbiAgICAudXNlckluZm9fX3VzZXJBdmF0YXIgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAudXNlckluZm9fX3VzZXJEYXRhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAudXNlckluZm9fX3VzZXJEYXRhIGg0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1ZW07IH1cbiAgICAudXNlckluZm9fX3VzZXJEYXRhIGg1IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMzEyNWVtOyB9XG5cbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIGZvcm0gZ3JvdXBcclxuKi9cbi5mb3JtR3JvdXAge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNWVtOyB9XG4gIC5mb3JtR3JvdXAgaHIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzhFOEU4RTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5mb3JtR3JvdXAtLWZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5mb3JtR3JvdXAtLWZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuZm9ybUdyb3VwLS1mbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuZm9ybUdyb3VwLS1jZW50ZXIge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbjogMS4yNWVtIGF1dG87IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmZvcm1Hcm91cC0tY2VudGVyIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW46IDEuMjVlbSBhdXRvOyB9IH1cbiAgLmZvcm1Hcm91cF9fbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAwLjYyNWVtIDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLmZvcm1Hcm91cF9fbGFiZWwtLW1pZGRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAuZm9ybUdyb3VwX19sYWJlbC0tbGFyZ2Uge1xuICAgICAgICB3aWR0aDogODAlOyB9IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5mb3JtR3JvdXBfX2xhYmVsLS1sYXJnZSB7XG4gICAgICAgIHdpZHRoOiA4MCU7IH0gfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIC5mb3JtR3JvdXBfX2xhYmVsLS1sYXJnZSB7XG4gICAgICAgIHdpZHRoOiA4MCU7IH0gfVxuICAgIC5mb3JtR3JvdXBfX2xhYmVsLS1jZW50ZXIge1xuICAgICAgZm9udC1zaXplOiAwLjg3NWVtO1xuICAgICAgbWFyZ2luOiAyZW0gMCAwIDA7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5mb3JtR3JvdXBfX2xhYmVsLS1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAjRUUzMTI0OyB9XG4gICAgLmZvcm1Hcm91cF9fbGFiZWwtLWdyYXkge1xuICAgICAgY29sb3I6ICM4RThFOEU7IH1cbiAgICAuZm9ybUdyb3VwX19sYWJlbC0tYXBlcnR1cmEge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjEyNWVtOyB9XG4gIC5mb3JtR3JvdXBfX2lucHV0RGF0ZSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNEU0O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNFNEU0RTQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGhlaWdodDogMi43NWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAwLjkzNzVlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogIzJGMzMzNztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljOyB9XG4gIC5mb3JtR3JvdXBfX2lucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNEU0O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNFNEU0RTQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGhlaWdodDogMi43NWVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAwLjkzNzVlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogIzJGMzMzNztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgLW8tanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gICAgLW8tdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgICAtbXMtdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzOyB9XG4gICAgLmZvcm1Hcm91cF9faW5wdXQ6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDM0LCAzOCwgNDIsIDAuMyk7IH1cbiAgICAuZm9ybUdyb3VwX19pbnB1dDpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMzQsIDM4LCA0MiwgMC4zKTsgfVxuICAgIC5mb3JtR3JvdXBfX2lucHV0OmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxODksIDE4OSwgMC4yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgzNCwgMzgsIDQyLCAwLjIpO1xuICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgY29sb3I6IHJnYmEoMzQsIDM4LCA0MiwgMC41KTsgfVxuICAgICAgLmZvcm1Hcm91cF9faW5wdXQ6ZGlzYWJsZWQgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAvKiBGaXJlZm94ICovIH1cbiAgICAgIC5mb3JtR3JvdXBfX2lucHV0OmRpc2FibGVkIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgICAgICBjb2xvcjogcmVkOyB9XG4gICAgICAuZm9ybUdyb3VwX19pbnB1dDpkaXNhYmxlZCA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgICAgIGNvbG9yOiByZWQ7IH1cbiAgICAuZm9ybUdyb3VwX19pbnB1dC0tc2VsZWN0IHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2NhbS9pbWcvaWNvbi9mZWxjaGFfaGFjaWFfYWJham8uc3ZnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMS4yNWVtIDEuMjVlbTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMTI1ZW07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cbiAgICAuZm9ybUdyb3VwX19pbnB1dC0tYWxpZ25DZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLmZvcm1Hcm91cF9faW5wdXQtLXRva2VuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjRUUzMTI0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNFRTMxMjQ7XG4gICAgICBmb250LXNpemU6IDIuMjVlbSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAxLjc1ZW0gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuICAgICAgLmZvcm1Hcm91cF9faW5wdXQtLXRva2VuOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOCwgNDksIDM2LCAwLjMpOyB9XG4gICAgICAuZm9ybUdyb3VwX19pbnB1dC0tdG9rZW46Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjM4LCA0OSwgMzYsIDAuMyk7IH1cbiAgLmZvcm1Hcm91cF9fZmxleFJvdyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFycm91bmQ7XG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFycm91bmQ7XG4gICAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcnJvdW5kO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFycm91bmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcnJvdW5kO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLW8tZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgLmZvcm1Hcm91cF9fZmxleFJvd19fY2hpbGQge1xuICAgICAgbWFyZ2luOiAwIDAuMzEyNWVtOyB9XG4gICAgICAuZm9ybUdyb3VwX19mbGV4Um93X19jaGlsZDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gICAgICAuZm9ybUdyb3VwX19mbGV4Um93X19jaGlsZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gICAgICAuZm9ybUdyb3VwX19mbGV4Um93X19jaGlsZC0taWRMYXN0IHtcbiAgICAgICAgd2lkdGg6IDkuMzc1ZW07IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuZm9ybUdyb3VwX19mbGV4Um93X19jaGlsZC0taWRMYXN0IHtcbiAgICAgICAgICAgIHdpZHRoOiA4MGVtOyB9IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuZm9ybUdyb3VwX19mbGV4Um93X19jaGlsZC0taWRMYXN0IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MGVtOyB9IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmZvcm1Hcm91cF9fZmxleFJvd19fY2hpbGQtLWlkTGFzdCB7XG4gICAgICAgICAgICB3aWR0aDogODBlbTsgfSB9XG4gICAgLmZvcm1Hcm91cF9fZmxleFJvd19fc2VwYXJhdG9yIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgICAgLW1vei1kaXNwbGF5OiBmbGV4O1xuICAgICAgLW8tZGlzcGxheTogZmxleDtcbiAgICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW8tanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogIzJGMzMzNztcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqLyB9XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogIzJGMzMzNzsgfVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAjMkYzMzM3OyB9XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEycHg7IH1cbiAgLnRvb2x0aXBfX3RyaWdnZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRlZmY7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICAgIGhlaWdodDogMS41NjI1ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHJpZ2h0OiAxLjI1ZW07XG4gICAgdG9wOiAzLjU2MjVlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC50b29sdGlwX190cmlnZ2VyOmhvdmVyIH4gLnRvb2x0aXBfX21lc3NhZ2Uge1xuICAgICAgLXdlYmtpdC1vcGFjaXR5OiAxO1xuICAgICAgLW1vei1vcGFjaXR5OiAxO1xuICAgICAgLW8tb3BhY2l0eTogMTtcbiAgICAgIC1tcy1vcGFjaXR5OiAxO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC13ZWJraXQtcG9pbnRlci1ldmVudHM6IGFvdG87XG4gICAgICAtbW96LXBvaW50ZXItZXZlbnRzOiBhb3RvO1xuICAgICAgLW8tcG9pbnRlci1ldmVudHM6IGFvdG87XG4gICAgICAtbXMtcG9pbnRlci1ldmVudHM6IGFvdG87XG4gICAgICBwb2ludGVyLWV2ZW50czogYW90bztcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgLnRvb2x0aXBfX3RyaWdnZXItLWluZm8ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RDRENDtcbiAgICAgIGNvbG9yOiAjRUUzMTI0ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMS44NzVlbTtcbiAgICAgIGhlaWdodDogMS44NzVlbTtcbiAgICAgIHRvcDogMDsgfVxuICAudG9vbHRpcF9fbWVzc2FnZSB7XG4gICAgd2lkdGg6IDIxLjg3NWVtO1xuICAgIHBhZGRpbmc6IDEuNzVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUuOTM3NWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOTM3NWVtO1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMzEyNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgei1pbmRleDogYXV0bztcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LW9wYWNpdHk6IDA7XG4gICAgLW1vei1vcGFjaXR5OiAwO1xuICAgIC1vLW9wYWNpdHk6IDA7XG4gICAgLW1zLW9wYWNpdHk6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gICAgLW1zLXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgICAtd2Via2l0LXBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC1tb3otcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLW8tcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLW1zLXBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cbiAgICAudG9vbHRpcF9fbWVzc2FnZS0taW5mbyB7XG4gICAgICB0b3A6IDIuNWVtOyB9XG5cbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIFByaW1hcnkgYnV0dG9uXHJcbiovXG4uYnV0dG9uIHtcbiAgaGVpZ2h0OiAyLjkzNzVlbTtcbiAgbWFyZ2luOiAxLjc1ZW0gYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWRpc3BsYXk6IGZsZXg7XG4gIC1tb3otZGlzcGxheTogZmxleDtcbiAgLW8tZGlzcGxheTogZmxleDtcbiAgLW1zLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtby1ib3gtc2hhZG93OiBub25lO1xuICAtbXMtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1vdXRsaW5lOiBub25lO1xuICAtbW96LW91dGxpbmU6IG5vbmU7XG4gIC1vLW91dGxpbmU6IG5vbmU7XG4gIC1tcy1vdXRsaW5lOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgLW8tdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7IH1cbiAgLmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBuby1kcm9wO1xuICAgIC13ZWJraXQtb3BhY2l0eTogMC4zO1xuICAgIC1tb3otb3BhY2l0eTogMC4zO1xuICAgIC1vLW9wYWNpdHk6IDAuMztcbiAgICAtbXMtb3BhY2l0eTogMC4zO1xuICAgIG9wYWNpdHk6IDAuMzsgfVxuICAuYnV0dG9uLS1zbWFsbCB7XG4gICAgd2lkdGg6IDEyLjVlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bzsgfVxuICAuYnV0dG9uX19sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgLmJ1dHRvbl9fbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDFlbTsgfSB9XG4gICAgLmJ1dHRvbl9fbGFiZWwtLWxpZ2h0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAgIC5idXR0b25fX2xhYmVsLS1ncmF5IHtcbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAgIC5idXR0b25fX2xhYmVsLS1yZWQge1xuICAgICAgY29sb3I6ICNFRTMxMjQ7XG4gICAgICBmb250LXdlaWdodDogODAwOyB9XG4gICAgLmJ1dHRvbl9fbGFiZWwtLWljb24ge1xuICAgICAgbWFyZ2luLXRvcDogMC4zMTI1ZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVlbTsgfVxuICAuYnV0dG9uLS1sZWZ0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgLmJ1dHRvbi0tbGVmdCB7XG4gICAgICAgIHdpZHRoOiA0MCUgIWltcG9ydGFudDsgfSB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAuYnV0dG9uLS1sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50OyB9IH1cbiAgLmJ1dHRvbi0taWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgMC41NjI1ZW0gMCAwO1xuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7IH1cbiAgLmJ1dHRvbi0tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFMzEyNDsgfVxuICAuYnV0dG9uLS1ncmF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHdpZHRoOiAxNS42MjVlbTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHdpZHRoOiAxOC43NWVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHdpZHRoOiAxOC43NWVtOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB3aWR0aDogMjEuODc1ZW07IH0gfVxuXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBjaGVja2JveFxyXG4qL1xuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzBweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgcHJpbWFyeSBiYWNrZ3JvdW5kIGNvbG9yICovIH1cbiAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpob3ZlciB+IC5jaGVja21hcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUUzMTI0OyB9IH1cblxuLmNvbnRDaGVja2JveFNpTm8ge1xuICB3aWR0aDogNTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIC8qIEJpZyBUcmFjayAqL1xuICAvKiBOb3JtYWwgS25vYiAqL1xuICAvKiBDaGVja2VkIEtub2IgKEJsdWUgU3R5bGUpICovXG4gIC8qIEJpZyBLbm9iICovXG4gIC8qIENoZWNrZWQgQmlnIEtub2IgKEJsdWUgU3R5bGUpICovIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29udENoZWNrYm94U2lOby0tc21hbGwge1xuICAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50OyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRDaGVja2JveFNpTm8tLXNtYWxsIHtcbiAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY29udENoZWNrYm94U2lOby0tc21hbGwge1xuICAgICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50OyB9IH1cbiAgLmNvbnRDaGVja2JveFNpTm86OmJlZm9yZSB7XG4gICAgY29udGVudDogJ05vJztcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMThweDsgfVxuICAuY29udENoZWNrYm94U2lObzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdTaSc7XG4gICAgY29sb3I6ICNFRTMxMjQ7XG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29udENoZWNrYm94U2lObyB7XG4gICAgICB3aWR0aDogNTAlOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRDaGVja2JveFNpTm8ge1xuICAgICAgd2lkdGg6IDYwJTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY29udENoZWNrYm94U2lObyB7XG4gICAgICB3aWR0aDogNTAlOyB9IH1cbiAgLmNvbnRDaGVja2JveFNpTm8gaW5wdXRbdHlwZT1jaGVja2JveF0uY2FtYmlhciArIC5zd2l0Y2gge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWQ5ZDlkO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3c7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxuICAuY29udENoZWNrYm94U2lObyBpbnB1dFt0eXBlPWNoZWNrYm94XS5jYW1iaWFyOmNoZWNrZWQgKyAuc3dpdGNoIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFMzEyNDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUUzMTI0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDEwcHggI0VFMzEyNDsgfVxuICAuY29udENoZWNrYm94U2lObyBpbnB1dFt0eXBlPWNoZWNrYm94XS50YW1hbm8uY2FtYmlhciArIC5zd2l0Y2gge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzBweDsgfVxuICAuY29udENoZWNrYm94U2lObyBpbnB1dFt0eXBlPWNoZWNrYm94XS5jYW1iaWFyICsgLnN3aXRjaCA+IHNwYW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU0LCAxLCAwLjUsIDEpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvciwgYm94LXNoYWRvdztcbiAgICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NCwgMS44NSwgMC41LCAxKTtcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJhY2tncm91bmQtY29sb3I7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMHB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7IH1cbiAgLmNvbnRDaGVja2JveFNpTm8gaW5wdXRbdHlwZT1jaGVja2JveF0uY2FtYmlhcjpjaGVja2VkICsgLnN3aXRjaCA+IHNwYW4ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMHB4IDAgMXB4ICNFRTMxMjQ7IH1cbiAgLmNvbnRDaGVja2JveFNpTm8gaW5wdXRbdHlwZT1jaGVja2JveF0udGFtYW5vLmNhbWJpYXIgKyAuc3dpdGNoID4gc3BhbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDsgfVxuICAuY29udENoZWNrYm94U2lObyBpbnB1dFt0eXBlPWNoZWNrYm94XS50YW1hbm8uY2FtYmlhcjpjaGVja2VkICsgLnN3aXRjaCA+IHNwYW4ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzNXB4LCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTVweCwgMCwgMCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMHB4IDAgMXB4ICNFRTMxMjQ7IH1cblxuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNoZWNrYm94Q29udGFpbmVyKSAqL1xuLmNoZWNrYm94Q29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjYyNWVtIDAuNjI1ZW0gMC42MjVlbSAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLW8tYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gIC1vLWRpc3BsYXk6IGZsZXg7XG4gIC1tcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1vLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmNoZWNrYm94Q29udGFpbmVyLS1ibG9ja3Mge1xuICAgIHdpZHRoOiA1MCU7IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmNoZWNrYm94Q29udGFpbmVyLS1ibG9ja3Mge1xuICAgICAgICB3aWR0aDogMzMuMyU7IH0gfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAuY2hlY2tib3hDb250YWluZXItLWJsb2NrcyB7XG4gICAgICAgIHdpZHRoOiAzMy4zJTsgfSB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAuY2hlY2tib3hDb250YWluZXItLWJsb2NrcyB7XG4gICAgICAgIHdpZHRoOiA1MCU7IH0gfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgIC5jaGVja2JveENvbnRhaW5lci0tYmxvY2tzIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMS4yNWVtIDA7IH0gfVxuICAuY2hlY2tib3hDb250YWluZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgLmNoZWNrYm94Q29udGFpbmVyIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7IH0gfVxuICAgIC5jaGVja2JveENvbnRhaW5lciBzcGFuIGEge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICNFRTMxMjQgIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMCAwLjMxMjVlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICM5Nzk3OTc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gIC1vLWRpc3BsYXk6IGZsZXg7XG4gIC1tcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLW8tYm94LXNoYWRvdzogbm9uZTtcbiAgLW1zLWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtb3V0bGluZTogbm9uZTtcbiAgLW1vei1vdXRsaW5lOiBub25lO1xuICAtby1vdXRsaW5lOiBub25lO1xuICAtbXMtb3V0bGluZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmNoZWNrbWFyayB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMzBweDsgfSB9XG4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XG4gICAgY29udGVudDogXCJcXDAwMjcxNFwiO1xuICAgIGNvbG9yOiAjRUUzMTI0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gICAgLW1zLXRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuY2hlY2ttYXJrIHtcbiAgICAgIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIHByaW1hcnkgYmFja2dyb3VuZCBjb2xvciAqLyB9XG4gICAgICAuY2hlY2ttYXJrOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFMzEyNDsgfSB9XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIHByaW1hcnkgYmFja2dyb3VuZCAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSByYWRpb2J1dHRvblxyXG4qL1xuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIHJhZGlvYnV0dG9uQ29udGFpbmVyKSAqL1xuLnJhZGlvYnV0dG9uQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLW8tYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gIC1vLWRpc3BsYXk6IGZsZXg7XG4gIC1tcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lOyB9XG4gIC5yYWRpb2J1dHRvbkNvbnRhaW5lci0tbmFrZWQge1xuICAgIG1hcmdpbjogMCAwIDAgMS4yNWVtO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIC1vLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAucmFkaW9idXR0b25Db250YWluZXJfX2xhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogMy4zMTI1ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMS4xMjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgICAtbW96LWRpc3BsYXk6IGZsZXg7XG4gICAgLW8tZGlzcGxheTogZmxleDtcbiAgICAtbXMtZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAtbW96LWZsZXg6IDE7XG4gICAgLW8tZmxleDogMTtcbiAgICAtbXMtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC1tb3otanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC1vLWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5yYWRpb2J1dHRvbkNvbnRhaW5lcl9fbGFiZWwtLW5ha2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgaGVpZ2h0OiAyLjE4NzVlbTtcbiAgICAgIHBhZGRpbmc6IDAuNjI1ZW07IH1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjBweDtcbiAgdG9wOiAwO1xuICByaWdodDogMDsgfVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cbi5yYWRpb2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMjM4LCA0OSwgMzYsIDAuNSk7XG4gIG1hcmdpbi1sZWZ0OiAwLjkzNzVlbTsgfVxuXG4vKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5yYWRpb2J0bjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvYnRuOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLyogU3R5bGUgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgKi9cbi5jb250YWluZXIgLnJhZGlvYnRuOmFmdGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjRUUzMTI0OyB9XG5cbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIFJhbmdlIHNsaWRlclxyXG4qL1xuLnJhbmdlU2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS4zMTI1ZW0gMDtcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWRpc3BsYXk6IGZsZXg7XG4gIC1tb3otZGlzcGxheTogZmxleDtcbiAgLW8tZGlzcGxheTogZmxleDtcbiAgLW1zLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbW96LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW8tanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5yYW5nZVNsaWRlcl9faW5kaWNhdG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEuNjI1ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMC40Mzc1ZW07XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5yYW5nZVNsaWRlcl9faW5kaWNhdG9yOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIG1hcmdpbi1yaWdodDogMC4xODc1ZW07IH1cbiAgLnJhbmdlU2xpZGVyX19pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjI1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCA1MCUgMCUsIDUwJSAxMDAlLCBjb2xvci1zdG9wKDAlLCAjRUUzMTI0KSwgY29sb3Itc3RvcCgxMDAlLCAjRUUzMTI0KSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI0VFMzEyNCwgI0VFMzEyNCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoI0VFMzEyNCwgI0VFMzEyNCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCNFRTMxMjQsICNFRTMxMjQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjRUUzMTI0LCAjRUUzMTI0KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gICAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1vLWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAucmFuZ2VTbGlkZXIgOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gICAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lOyB9XG4gIC5yYW5nZVNsaWRlciA6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gIC5yYW5nZVNsaWRlciA6Oi1tb3otZm9jdXMtb3V0ZXIge1xuICAgIGJvcmRlcjogMDsgfVxuICAucmFuZ2VTbGlkZXIgOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI0VFMzEyNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAgIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb246IDAuM3M7IH1cbiAgLnJhbmdlU2xpZGVyIDo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI0VFMzEyNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tcy1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAgIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAgIHRyYW5zaXRpb246IDAuM3M7IH1cbiAgLnJhbmdlU2xpZGVyIDo6LW1zLXRpY2tzLWFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5yYW5nZVNsaWRlciA6Oi1tcy10aWNrcy1iZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnJhbmdlU2xpZGVyIDo6LW1zLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7IH1cbiAgLnJhbmdlU2xpZGVyIDo6LW1zLXRvb2x0aXAge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnJhbmdlU2xpZGVyX19saW1pdHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMC44MTI1ZW07XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLnJhbmdlU2xpZGVyX19saW1pdHNfX2xpbWl0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDAuNjg3NWVtOyB9XG4gICAgICAucmFuZ2VTbGlkZXJfX2xpbWl0c19fbGltaXQ6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyQgJztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjE4NzVlbTsgfVxuICAgICAgLnJhbmdlU2xpZGVyX19saW1pdHNfX2xpbWl0LS1lbmQge1xuICAgICAgICBjb2xvcjogI0VFMzEyNDsgfVxuXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBDb2xsYXBzaWJsZVxyXG4qL1xuLmNvbGxhcHNpYmxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xuICAtby10cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcztcbiAgLXdlYmtpdC1vcGFjaXR5OiAwO1xuICAtbW96LW9wYWNpdHk6IDA7XG4gIC1vLW9wYWNpdHk6IDA7XG4gIC1tcy1vcGFjaXR5OiAwO1xuICBvcGFjaXR5OiAwOyB9XG4gIC5jb2xsYXBzaWJsZS0taXNTaG93IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLXdlYmtpdC1vcGFjaXR5OiAxO1xuICAgIC1tb3otb3BhY2l0eTogMTtcbiAgICAtby1vcGFjaXR5OiAxO1xuICAgIC1tcy1vcGFjaXR5OiAxO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgLmNvbGxhcHNpYmxlX190aXRsZSB7XG4gICAgY29sb3I6ICMyMjI2MmE7XG4gICAgcGFkZGluZzogMCAwIDAuODEyNWVtIDA7XG4gICAgbWFyZ2luOiAwIDAgMC44MTI1ZW0gMDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG4iLCJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW1wb3J0IEJhc2UgdmFyaWFibGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AaW1wb3J0IFwiLi4vdmFyaWFibGVzL19iYXNlLXZhcmlhYmxlc1wiO1xyXG5cclxuLyohIG5vcm1hbGl6ZS5zY3NzIHYwLjEuMCB8IE1JVCBMaWNlbnNlIHwgYmFzZWQgb24gZ2l0LmlvL25vcm1hbGl6ZSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXHJcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xyXG4gKiAgICB1c2VyIHpvb20uXHJcbiAqL1xyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cclxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxyXG4gKi9cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXHJcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXHJcbiAqIGFuZCBGaXJlZm94LlxyXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxyXG4gKi9cclxuXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5kZXRhaWxzLFxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1haW4sXHJcbm1lbnUsXHJcbm5hdixcclxuc2VjdGlvbixcclxuc3VtbWFyeSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxyXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXHJcbiAqL1xyXG5cclxuYXVkaW8sXHJcbmNhbnZhcyxcclxucHJvZ3Jlc3MsXHJcbnZpZGVvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIDEgKi9cclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXHJcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXHJcbiAqL1xyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cclxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxyXG4gKi9cclxuXHJcbltoaWRkZW5dLFxyXG50ZW1wbGF0ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogTGlua3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG5hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmE6YWN0aXZlLFxyXG5hOmhvdmVyIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cclxuICovXHJcblxyXG5hYmJyW3RpdGxlXSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cclxuICovXHJcblxyXG5iLFxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxyXG4gKi9cclxuXHJcbmRmbiB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxyXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXHJcbiAqL1xyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbjogMC42N2VtIDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxyXG4gKi9cclxuXHJcbm1hcmsge1xyXG4gIGJhY2tncm91bmQ6ICNmZjA7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuc3ViLFxyXG5zdXAge1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbnN1cCB7XHJcbiAgdG9wOiAtMC41ZW07XHJcbn1cclxuXHJcbnN1YiB7XHJcbiAgYm90dG9tOiAtMC4yNWVtO1xyXG59XHJcblxyXG4vKiBFbWJlZGRlZCBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXHJcbiAqL1xyXG5cclxuaW1nIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cclxuICovXHJcblxyXG5zdmc6bm90KDpyb290KSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmZpZ3VyZSB7XHJcbiAgbWFyZ2luOiAxZW0gNDBweDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cclxuICovXHJcblxyXG5ociB7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcl9fYmFja2dyb3VuZC0tbWFpbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW4gb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnByZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuY29kZSxcclxua2JkLFxyXG5wcmUsXHJcbnNhbXAge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLyogRm9ybXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxyXG4gKiBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cclxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXHJcbiAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXHJcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbm9wdGdyb3VwLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xyXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cclxuICBtYXJnaW46IDA7IC8qIDMgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxyXG4gKi9cclxuXHJcbmJ1dHRvbiB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXHJcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXHJcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXHJcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cclxuICovXHJcblxyXG5idXR0b24sXHJcbnNlbGVjdCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxyXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cclxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxyXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxyXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8qIDEgKi9cclxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xyXG59XHJcblxyXG4vKipcclxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cclxuICovXHJcblxyXG5idXR0b25bZGlzYWJsZWRdLFxyXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxyXG4gKi9cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxyXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cclxuICovXHJcblxyXG5pbnB1dCB7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cclxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cclxuICpcclxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cclxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXHJcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXHJcbiAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cclxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxyXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXHJcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcclxuICogcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxyXG4gKi9cclxuXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cclxuICovXHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cclxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxyXG4gKi9cclxuXHJcbmxlZ2VuZCB7XHJcbiAgYm9yZGVyOiAwOyAvKiAxICovXHJcbiAgcGFkZGluZzogMDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cclxuICovXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXHJcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxyXG4gKi9cclxuXHJcbm9wdGdyb3VwIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogVGFibGVzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxyXG4gKi9cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIiwiXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNpemUgLSB2YXJpYWJsZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRmb250X19zaXplOiAxNiAhZGVmYXVsdDtcclxuJGZvbnRfX2Jhc2U6IDIxICFkZWZhdWx0O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRm9udCBmYW1pbHkgLSB2YXJpYWJsZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRmb250X19mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb2xvciB2YXJpYWJsZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuJGNvbG9yX190ZXh0LS1kYXJrOiAjMjIyNjJhOyBcclxuJGNvbG9yX190ZXh0OiAjMzIzYzQ3OyBcclxuJGNvbG9yX190ZXh0LS1saWdodDogIzJGMzMzNztcclxuJGNvbG9yX19ncmF5OiAjOEU4RThFO1xyXG5cclxuJGNvbG9yX19wcmltYXJ5OiAjRUUzMTI0OyBcclxuXHJcbiRjb2xvcl9fYmFja2dyb3VuZC0tbWFpbjogI2ZmZmZmZjtcclxuJGNvbG9yX19saWdodGdyYXk6ICNiZGJkYmQ7XHJcbiRjb2xvcl9faW5wdXRzOiAjRTRFNEU0O1xyXG4kY29sb3JfX3Rvb2x0aXA6ICMwMDRlZmY7XHJcbiRjb2xvcl9fYmFja2dyb3VuZC0tZm9vdGVyOiAjMDAwMDAwO1xyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb252ZXJ0IHBpeGVscyB0byBlbXMgLSBGdW5jdGlvblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGZ1bmN0aW9uIGVtKCRweCwgJGJhc2U6ICRmb250X19zaXplKXtcclxuICAgIEByZXR1cm4oJHB4IC8gJGJhc2UpICogMWVtO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbXBvcnQgcHJlZml4ZXMgLSBtaXhpblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGltcG9ydCAnLi4vcHJlZml4ZXMvX3ByZWZpeGVzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEltcG9ydCBtZWRpYSBxdWVyeXMgLSBtaXhpblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGltcG9ydCAnLi4vbWVkaWFxdWVyeXMvX21lZGlhcXVlcnlzJzsiLCJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW1wb3J0IEJhc2UgdmFyaWFibGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AaW1wb3J0IFwiLi4vdmFyaWFibGVzL19iYXNlLXZhcmlhYmxlc1wiO1xyXG5cclxuLyoqXHJcbiAqIGJvZHkgLXN0eWxlc1xyXG4gKi9cclxuXHJcbipcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udF9fZmFtaWx5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHlcclxue1xyXG4gIGZvbnQtc2l6ZTogZW0oJGZvbnRfX3NpemUpO1xyXG4gIGxpbmUtaGVpZ2h0OiBlbSgkZm9udF9fYmFzZSk7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn0iLCJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3RyaW5nIFJlcGxhY2VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xyXG5cdCRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xyXG5cclxuXHRAaWYgJGluZGV4IHtcclxuXHRcdEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcclxuXHR9XHJcblxyXG5cdEByZXR1cm4gJHN0cmluZztcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRm9udCBGYWNlIC0gbWl4aW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkBtaXhpbiBmb250LWZhY2UoJG5hbWUsICRwYXRoLCAkd2VpZ2h0OiBudWxsLCAkc3R5bGU6IG51bGwsICRleHRzOiBlb3Qgd29mZiB0dGYgc3ZnKSB7XHJcblx0JHNyYzogbnVsbDtcclxuXHJcblx0JGV4dG1vZHM6IChcclxuXHRcdGVvdDogXCI/XCIsXHJcblx0XHRzdmc6IFwiI1wiICsgc3RyLXJlcGxhY2UoJG5hbWUsIFwiIFwiLCBcIl9cIilcclxuXHQpO1xyXG5cclxuXHQkZm9ybWF0czogKFxyXG5cdFx0b3RmOiBcIm9wZW50eXBlXCIsXHJcblx0XHR0dGY6IFwidHJ1ZXR5cGVcIlxyXG5cdCk7XHJcblxyXG5cdEBlYWNoICRleHQgaW4gJGV4dHMge1xyXG5cdFx0JGV4dG1vZDogaWYobWFwLWhhcy1rZXkoJGV4dG1vZHMsICRleHQpLCAkZXh0ICsgbWFwLWdldCgkZXh0bW9kcywgJGV4dCksICRleHQpO1xyXG5cdFx0JGZvcm1hdDogaWYobWFwLWhhcy1rZXkoJGZvcm1hdHMsICRleHQpLCBtYXAtZ2V0KCRmb3JtYXRzLCAkZXh0KSwgJGV4dCk7XHJcblx0XHQkc3JjOiBhcHBlbmQoJHNyYywgdXJsKHF1b3RlKFwiL2Fzc2V0cy9jYW0vXCIgKyAkcGF0aCArIFwiLlwiICsgJGV4dG1vZCkpIGZvcm1hdChxdW90ZSgkZm9ybWF0KSksIGNvbW1hKTtcclxuXHR9XHJcblxyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHF1b3RlKCRuYW1lKTtcclxuXHRcdGZvbnQtc3R5bGU6ICRzdHlsZTtcclxuXHRcdGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG5cdFx0c3JjOiAkc3JjO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZvbnQgZmFtaWx5cyAtIGluY2x1ZGUuXHJcbiAqL1xyXG5cclxuQGluY2x1ZGUgZm9udC1mYWNlKFwiTXlyaWFkUHJvXCIsIGZvbnRzL015cmlhZFByby1JdCwgMTAwLCBpdGFsaWMpO1xyXG5AaW5jbHVkZSBmb250LWZhY2UoXCJNeXJpYWRQcm9cIiwgZm9udHMvTXlyaWFkUHJvLVJlZ3VsYXIsIDEwMCwgbm9ybWFsKTtcclxuQGluY2x1ZGUgZm9udC1mYWNlKFwiTXlyaWFkUHJvXCIsIGZvbnRzL015cmlhZFByby1Cb2xkLCBib2xkLCBub3JtYWwpO1xyXG4iLCJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW1wb3J0IEJhc2UgdmFyaWFibGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AaW1wb3J0IFwiLi4vdmFyaWFibGVzL19iYXNlLXZhcmlhYmxlc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVGV4dCBlbGVtZW50cyBzdHlsZXMgLW1peGluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AbWl4aW4gdGV4dCggJHNpemU6ICRmb250X19zaXplLCAkbGluZTogJGZvbnRfX2Jhc2UsICRtYXJnaW4tdG9wOiAwLCAkbWFyZ2luLWJvdHRvbTogMCwgJGZhbWlseTogJGZvbnRfX2ZhbWlseSwgJGNvbG9yOiAkY29sb3JfX3RleHQsICR3ZWlnaHQ6IDEwMCwgJHN0eWxlOiBub3JtYWwpIHtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LWZhbWlseTogJGZhbWlseTtcclxuICAgIGZvbnQtc2l6ZTogZW0oJHNpemUpO1xyXG4gICAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogZW0oJGxpbmUsICRzaXplKTtcclxuICAgIG1hcmdpbi10b3A6IGVtKCRtYXJnaW4tdG9wLCAkc2l6ZSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBlbSgkbWFyZ2luLWJvdHRvbSwgJHNpemUpO1xyXG4gICAgZm9udC1zdHlsZTogJHN0eWxlO1xyXG59XHJcblxyXG4vKipcclxuICogVGV4dCBlbGVtZW50cyAtIHN0eWxlcy5cclxuICovXHJcblxyXG5oMSwgLmgxXHJcbntcclxuICAgIEBpbmNsdWRlIHRleHQoNTcsIDc2LCAyMSwgNDIsICRjb2xvcjogJGNvbG9yX190ZXh0LCAkd2VpZ2h0OiA5MDApXHJcbn1cclxuXHJcbmgyLCAuaDJcclxue1xyXG4gICAgQGluY2x1ZGUgdGV4dCgzNiwgNDIsIDcsIDE4LCAkY29sb3I6ICRjb2xvcl9fdGV4dCwgJHdlaWdodDogOTAwKVxyXG59XHJcblxyXG5oMywgLmgzXHJcbntcclxuICAgIEBpbmNsdWRlIHRleHQoMjYsIDIxLCAwLCAyMSwgJGNvbG9yOiAkY29sb3JfX3RleHQsICR3ZWlnaHQ6IDMwMClcclxufVxyXG5cclxuaDQsIC5oNFxyXG57XHJcbiAgICBAaW5jbHVkZSB0ZXh0KDE4LCAyMSwgMCwgMTgsICR3ZWlnaHQ6IDYwMClcclxufVxyXG5cclxuaDUsIC5oNVxyXG57XHJcbiAgICBAaW5jbHVkZSB0ZXh0KDE2LCAyMSwgMCwgMjEsICR3ZWlnaHQ6IDMwMClcclxufVxyXG5cclxuaDYsIC5oNlxyXG57XHJcbiAgICBAaW5jbHVkZSB0ZXh0KDEyLCAxNiwgMCwgMTAsICR3ZWlnaHQ6IDMwMClcclxufVxyXG5cclxucFxyXG57XHJcbiAgICBAaW5jbHVkZSB0ZXh0KCRzaXplOiAxNiwgJG1hcmdpbi1ib3R0b206IDIxLCAkY29sb3I6ICRjb2xvcl9fdGV4dC0tbGlnaHQsICR3ZWlnaHQ6IDEwMClcclxufVxyXG5cclxudWwgbGlcclxue1xyXG4gICAgQGluY2x1ZGUgdGV4dCgxNSwgMTYsIDcsIDAsICR3ZWlnaHQ6IDIwMClcclxufVxyXG5cclxuZW1cclxue1xyXG4gICAgQGluY2x1ZGUgdGV4dCgxMSwgMTUsIDEwLCAwLCAkd2VpZ2h0OiAzMDApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUZXh0IGNvbG9ycyAtIHN0eWxlcy5cclxuICovXHJcblxyXG4udGV4dF9fY29sb3ItLWxpZ2h0XHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dF9fY29sb3ItLWRhcmtcclxue1xyXG4gICAgY29sb3I6ICRjb2xvcl9fdGV4dC0tZGFyayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dF9fY29sb3Jcclxue1xyXG4gICAgY29sb3I6ICRjb2xvcl9fdGV4dDtcclxufVxyXG5cclxuLnRleHRfX2NvbG9yLS1wcmltYXJ5XHJcbntcclxuICAgIGNvbG9yOiAkY29sb3JfX3ByaW1hcnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUZXh0IGFsaWduIC0gc3R5bGVzLlxyXG4gKi9cclxuXHJcbiAudGV4dF9fYWxpZ24tLWxlZnRcclxuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuIH1cclxuXHJcbiAudGV4dF9fYWxpZ24tLXJpZ2h0XHJcbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gfVxyXG5cclxuIC50ZXh0X19hbGlnbi0tY2VudGVyXHJcbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbi8qKlxyXG4gKiBUZXh0IGFsaWduIC0gd2VpZ2h0LlxyXG4gKi9cclxuXHJcbiAudGV4dF9fd2VpZ2h0LS1yZWd1bGFyXHJcbiB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4vKipcclxuICogVGV4dCBtYXJnaW4gdmFyaWF0aW9uc1xyXG4gKi9cclxuXHJcbiAudGV4dF9fbWFyZ2luLS1ib3R0b20wXHJcbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gfSIsIlxyXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBMYXlvdXRcclxuKi9cclxuXHJcbi5mb3JtQ29udGFpbmVyXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcdFx0IFxyXG4gICAgKSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHQvLyBFbiBlc3RvcyBkb3MgbWVkaWFxdWVyeXMgaW5jbHV5ZXMgbGEgc29tYnJhIGRlIGxhIGVzcXVpbmEsIGxlIGlubHV5ZXMgc29tYnJhcywgZGVzdGVsbG9zIHkgbG8gcXVlIGxsZXZlIGVsIGRpc2XDsW9cclxuXHRAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRwYWRkaW5nOiBlbSgzMikgMDtcclxuXHRcdGJvcmRlcjogc29saWQgMXB4ICRjb2xvcl9fbGlnaHRncmF5O1xyXG5cdFx0cGFkZGluZzogZW0oMzUpIGVtKDQwKTtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2NhbS9pbWcvbGF5b3V0L2N1cnZlX2JnLnBuZyk7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XHJcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JfX2xpZ2h0Z3JheSwgMC4wNCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiBlbSg0Mik7XHJcblx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRib3gtc2hhZG93OiAwIDAgZW0oOCkgcmdiYSgkY29sb3JfX3RleHQtLWxpZ2h0LCAwLjE3KVx0IFxyXG5cdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHR9XHJcblx0Jl9fY29sdW1uQ29udGFpbmVyXHJcblx0e1xyXG5cdFx0bWFyZ2luOiBlbSg0MCkgMDtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdGRpc3BsYXk6IGZsZXgsXHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kLFxyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG5cdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdEBpbmNsdWRlIG1lZGlhKG1kKXtcclxuXHRcdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93LFxyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcFxyXG5cdFx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0fVxyXG5cdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3csXHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwXHJcblx0XHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHR9XHJcblx0XHQuY2VudGVyVGV4dHtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShtZCl7XHJcblx0XHRcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLS1zbWFsbHtcclxuXHRcdFx0XHR3aWR0aDogNzAlO1xyXG5cdFx0XHRcdG1hcmdpbjogMC41cmVtIGF1dG87XHJcblx0XHRcdFx0QGluY2x1ZGUgbWVkaWEoc20pe1xyXG5cdFx0XHRcdFx0d2lkdGg6IDYwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEBpbmNsdWRlIG1lZGlhKGxnKXtcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCYtLWNvbG9yUHJpbWFyeXtcclxuXHRcdFx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZm9ybUNvbHVtblxyXG5cdFx0e1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShtZCl7XHJcblx0XHRcdFx0d2lkdGg6IDQ1JTtcclxuXHRcdFx0fVxyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRcdFx0d2lkdGg6IDM1JTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLS1jZW50ZXJ7XHJcblx0XHRcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHR9XHJcblx0XHRcdCZfX2NvbnRlbnRDZW50ZXJ7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGF7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgMC4zMTI1ZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZm9ybUNvbHVtblByaW5jaXBhbFxyXG5cdFx0e1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogZW0oMTYpO1xyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShtZCl7XHJcblx0XHRcdFx0d2lkdGg6IDk1JTtcclxuXHRcdFx0fVxyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRcdFx0d2lkdGg6IDg1JTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmZvcm1Db2x1bW5NaWRkbGV7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdHBhZGRpbmctdG9wOiBlbSgxNik7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRcdHdpZHRoOiA3MCU7XHJcblx0XHRcdH1cclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRcdHdpZHRoOiA2MCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5pbmRpY2F0aW9uc3tcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdHVse1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0XHRAaW5jbHVkZSBtZWRpYShtZCl7XHJcblx0XHRcdFx0XHR3aWR0aDogNjAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRcdFx0XHR3aWR0aDogNDAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQmX19idXR0b25Db250YWluZXJcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbjogZW0oNDApIDA7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdCYtLWR1YWxCdXR0b257XHJcblx0XHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbixcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyLFxyXG5cdFx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0XHRhcHAtYnV0dG9uLWNvbnRpbnVlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRtYXJnaW46IDAgZW0oNSk7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnV0dG9ue1xyXG5cdFx0XHRcdG1hcmdpbjogMCBlbSg1KTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUHJlZml4IHNldmVyYWwgcHJvcGVydGllcyBhdCBvbmNlIC0gTWl4aW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vLyBAcGFyYW0ge01hcH0gJGRlY2xhcmF0aW9ucyAtIERlY2xhcmF0aW9ucyB0byBwcmVmaXhcclxuLy8vIEBwYXJhbSB7TGlzdH0gJHByZWZpeGVzICgoKSkgLSBMaXN0IG9mIHByZWZpeGVzIHRvIHByaW50XHJcbkBtaXhpbiBwcmVmaXgoJGRlY2xhcmF0aW9ucywgJHByZWZpeGVzOiAoKSkgXHJcbntcclxuICAgIEBlYWNoICRwcm9wZXJ0eSwgJHZhbHVlIGluICRkZWNsYXJhdGlvbnMgXHJcbiAgICB7XHJcbiAgICAgICAgQGVhY2ggJHByZWZpeCBpbiAkcHJlZml4ZXNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICN7Jy0nICsgJHByZWZpeCArICctJyArICRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gT3V0cHV0IHN0YW5kYXJkIG5vbi1wcmVmaXhlZCBkZWNsYXJhdGlvblxyXG4gICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBVc2FnZVxyXG5cclxuLy8gLmNsYXNzXHJcbi8vIHtcclxuLy8gICAgICAgQGluY2x1ZGUgcHJlZml4KChcclxuLy8gICAgICAgICAgIHByb3BlcnR5OiB2YWx1ZSxcclxuLy8gICAgICAgKSwgd2Via2l0IG1veiBvIG1zKTtcclxuLy8gfSIsIlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBNZWRpYVF1ZXJ5IEJyZWFrcG9pbnRzIC0gbWl4aW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRicmVha3BvaW50LXNtOiA1NzZweDtcclxuJGJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xyXG4kYnJlYWtwb2ludC1sZzogOTkycHg7XHJcbiRicmVha3BvaW50LXhsZzogMTIwMHB4O1xyXG5cclxuQG1peGluIG1lZGlhKCRtZWRpYSkge1xyXG4gIEBpZiAkbWVkaWEgPT0gc20ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXNtKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbWQpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJG1lZGlhID09IG1kIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tZCkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LWxnKSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRtZWRpYSA9PSBsZyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbGcpIHsgQGNvbnRlbnQ7IH1cclxuICB9XHJcbiAgQGVsc2UgaWYgJG1lZGlhID09IHhsZyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQteGxnKSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG59IiwiXHJcbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIExheW91dFxyXG4qL1xyXG5cclxuLmNhcmRzQ29udGFpbmVyXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcdFx0IFxyXG5cdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0cGFkZGluZzogZW0oMzIpIDA7XHJcblx0XHRib3JkZXI6IHNvbGlkIDFweCAkY29sb3JfX2xpZ2h0Z3JheTtcclxuXHRcdHBhZGRpbmc6IGVtKDM1KSBlbSg0MCk7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jYW0vaW1nL2xheW91dC9jdXJ2ZV9iZy5wbmcpO1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yX19saWdodGdyYXksIDAuMDQpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogZW0oNDIpO1xyXG5cdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIGVtKDgpIHJnYmEoJGNvbG9yX190ZXh0LS1saWdodCwgMC4xNylcdCBcclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0fVxyXG5cdCZfX3Jvd1xyXG5cdHtcclxuXHRcdG1hcmdpbjogZW0oNDApIDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG5cdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuXHRcdFx0ZGlzcGxheTogZmxleCxcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIsXHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcblx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3csXHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwXHJcblx0XHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHR9XHJcblx0XHRAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdyxcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXBcclxuXHRcdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdH1cclxuXHRcdC5jYXJkXHJcblx0XHR7XHJcblx0XHRcdHBhZGRpbmc6IGVtKDI1KSBlbSgzMCk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IGVtKDIwKTtcclxuXHRcdFx0YmFja2dyb3VuZDogJGNvbG9yX19pbnB1dHM7XHJcblx0XHRcdG1hcmdpbjogMXJlbSAwO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94XHJcblx0XHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHRcdEBpbmNsdWRlIG1lZGlhKG1kKXtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuMTVlbTtcclxuXHRcdFx0XHR3aWR0aDogNDUlO1xyXG5cdFx0XHRcdG1hcmdpbjogMXJlbTtcclxuXHRcdFx0fVxyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShsZylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4xNWVtO1xyXG5cdFx0XHRcdHdpZHRoOiAzMCU7XHJcblx0XHRcdFx0bWFyZ2luOiAxcmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdCZfX2hlYWRlclxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgM3B4ICRjb2xvcl9fcHJpbWFyeTtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoNFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0c3Ryb25nXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkY29sb3JfX3ByaW1hcnk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCZfX2JvZHlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbjogZW0oMTIpIDA7XHJcblx0XHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMTNyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEBpbmNsdWRlIG1lZGlhKGxnKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDE0cmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAgZW0oMTUpO1xyXG5cdFx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0XHRcdGxpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCY6YmVmb3JlXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBcIlxcMjAyMlwiOyAgXHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICRjb2xvcl9fcHJpbWFyeTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDsgXHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMWVtO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAtMWVtOyBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmX19mb290ZXJcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IGVtKDIwKTtcclxuXHRcdFx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXgsXHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kLFxyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlclxyXG5cdFx0XHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHRcdFx0c3BhblxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbG9yOiAkY29sb3JfX3ByaW1hcnk7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGVtKDEwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW1nXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdCZfX2J1dHRvbkNvbnRhaW5lclxyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luOiBlbSg0MCkgMDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG4iLCJcclxuLyoqXHJcbiAqIExheW91dCAtIE1haW4gY29udGFpbmVyXHJcbiAqL1xyXG5cclxuLmNvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9fYmFja2dyb3VuZC0tbWFpbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IGVtKDMyKSBlbSgyMCk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIEBpbmNsdWRlIHByZWZpeCgoXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveCxcclxuICAgICAgICBkaXNwbGF5OiBmbGV4LFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyLFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4sIFxyXG4gICAgKSwgd2Via2l0IG1veiBvIG1zKTtcclxuICAgICYtLW1lbnVcclxuICAgIHtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShsZyl7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYSh4bGcpe1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59IiwiXHJcbi8qKlxyXG4gKiBNb2R1bGVzIC0gQmFjayBidXR0b25cclxuICovXHJcblxyXG4gLmJhY2tCdXR0b25cclxuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBlbSg0MCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBlbSgxNSk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRtYXJnaW4tYm90dG9tOiBlbSgzMik7XHJcblx0fVxyXG4gICAgQGluY2x1ZGUgcHJlZml4KChcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXgsXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIsXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdywgXHJcbiAgICApLCB3ZWJraXQgbW96IG8gbXMpO1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udF9fZmFtaWx5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBlbSgxOCk7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcl9fdGV4dC0tZGFyaztcclxuICAgICAgICBtYXJnaW46IDAgZW0oNyk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuIH0iLCJcclxuLyoqXHJcbiAqIE1vZHVsZXMgLSBtYWluIHRpdGxlXHJcbiAqL1xyXG5cclxuIC5pbml0aWFsVGl0bGVcclxuIHtcclxuICAgIHBhZGRpbmc6IDAgMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJi0tY2VudGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtLWlzSGlkZGVuXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShsZyl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtLWlzSGlkZGVuU21hbGx7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEobGcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYSh4bGcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGgyXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogZW0oMik7XHJcbiAgICB9XHJcbiAgICBoM1xyXG4gICAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKG1kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IGVtKDQ1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19zdGVwc0NvdW50ZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgMCBlbSgxNSkgMDtcclxuICAgICAgICBAaW5jbHVkZSBwcmVmaXgoKFxyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4LFxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcixcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcixcclxuICAgICAgICApLCB3ZWJraXQgbW96IG8gbXMpO1xyXG4gICAgICAgIC5zdGVwIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19saWdodGdyYXk7XHJcbiAgICAgICAgICAgIHdpZHRoOiBlbSgyOCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogZW0oMjgpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogZW0oNDApO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICY6YmVmb3JlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGVtKDI4KTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBlbSg0MCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9fbGlnaHRncmF5O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmVcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi0tYWN0aXZlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9fcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHByZWZpeCgoXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUsXHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcixcclxuICAgICAgICAgICAgKSwgd2Via2l0IG1veiBvIG1zKTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEobWQpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXJ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRjb2xvcl9fbGlnaHRncmF5O1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEobGcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi0tYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJGNvbG9yX19wcmltYXJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gfSIsIlxyXG4vKipcclxuICogTW9kdWxlcyAtIHVzZXIgaW5mb1xyXG4gKi9cclxuXHJcbiAudXNlckluZm9cclxuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogZW0oMTUpIGVtKDQwKTtcclxuICAgIEBpbmNsdWRlIHByZWZpeCgoXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveCxcclxuICAgICAgICBkaXNwbGF5OiBmbGV4LFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyLFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShsZyl7XHJcbiAgICAgICAgQGluY2x1ZGUgcHJlZml4KChcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuLFxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyLFxyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgICAgICAgKSwgd2Via2l0IG1veiBvIG1zKTtcclxuICAgIH1cclxuICAgICZfX3VzZXJBdmF0YXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDdweCAkY29sb3JfX3RleHQtLWxpZ2h0O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogZW0oMjApO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKGxnKXtcclxuICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3MHB4OyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBwcmVmaXgoKFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUsXHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXgsXHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyLFxyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyLFxyXG4gICAgICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcbiAgICAgICAgaW1nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdXNlckRhdGFcclxuICAgIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaDRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBlbSgxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBlbSg1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiB9IiwiXHJcbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIGZvcm0gZ3JvdXBcclxuKi9cclxuXHJcbi5mb3JtR3JvdXBcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IGVtKDIwKTtcclxuXHRoclxyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvcl9fZ3JheTtcclxuXHR9XHJcblx0Ji0tZmxleHtcclxuXHRcdEBpbmNsdWRlIG1lZGlhKG1kKXtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIG1lZGlhKGxnKXtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIG1lZGlhKHhsZyl7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR9XHJcblx0fVxyXG5cdCYtLWNlbnRlcntcclxuXHRcdEBpbmNsdWRlIG1lZGlhKGxnKXtcclxuXHRcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0bWFyZ2luOiBlbSgyMCkgYXV0bztcclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIG1lZGlhKHhsZyl7XHJcblx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdG1hcmdpbjogZW0oMjApIGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cdCZfX2xhYmVsXHJcblx0e1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdGZvbnQtc2l6ZTogZW0oMTYpO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG1hcmdpbjogMCAwIGVtKDEwKSAwO1xyXG5cdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuXHQgXHRcdGFwcGVhcmFuY2U6IG5vbmUsXHJcblx0IFx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdCBcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuLFxyXG5cdCBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcixcclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHQmLS1taWRkbGV7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblx0XHQmLS1sYXJnZXtcclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdH1cclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdH1cclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEoeGxnKXtcclxuXHRcdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmLS1jZW50ZXJ7XHJcblx0XHRcdGZvbnQtc2l6ZTogZW0oMTQpO1xyXG5cdFx0XHRtYXJnaW46IGVtKDMyKSAwIDAgMDtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblx0XHQmLS1wcmltYXJ5e1xyXG5cdFx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0fVxyXG5cdFx0Ji0tZ3JheXtcclxuXHRcdFx0Y29sb3I6ICRjb2xvcl9fZ3JheTtcclxuXHRcdH1cclxuXHRcdCYtLWFwZXJ0dXJhe1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogZW0oMTgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQmX19pbnB1dERhdGVcclxuXHR7XHJcblx0XHR3aWR0aDogMzUlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19pbnB1dHM7XHJcblx0XHRib3JkZXI6IHNvbGlkIDFweCAkY29sb3JfX2lucHV0cztcclxuXHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0aGVpZ2h0OiBlbSg0NCkgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmc6IDAgZW0oMTUpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IGVtKDE2KSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdGNvbG9yOiAkY29sb3JfX3RleHQtLWxpZ2h0O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdH1cclxuXHQmX19pbnB1dFxyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19pbnB1dHM7XHJcblx0XHRib3JkZXI6IHNvbGlkIDFweCAkY29sb3JfX2lucHV0cztcclxuXHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0aGVpZ2h0OiBlbSg0NCkgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmc6IDAgZW0oMTUpICFpbXBvcnRhbnQ7XHJcblx0XHRmb250LXNpemU6IGVtKDE2KSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRcdGNvbG9yOiAkY29sb3JfX3RleHQtLWxpZ2h0O1xyXG5cdFx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdFx0Jjpob3ZlclxyXG5cdFx0e1xyXG5cdFx0XHRib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yX190ZXh0LS1kYXJrLCAwLjMpO1xyXG5cdFx0fVxyXG5cdFx0Jjpmb2N1c1xyXG5cdFx0e1xyXG5cdFx0XHRib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yX190ZXh0LS1kYXJrLCAwLjMpO1xyXG5cdFx0fVxyXG5cdFx0JjpkaXNhYmxlZFxyXG5cdFx0e1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcl9fbGlnaHRncmF5LCAwLjIpO1xyXG5cdFx0XHRib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yX190ZXh0LS1kYXJrLCAwLjIpO1xyXG5cdFx0XHRjdXJzb3I6IG5vLWRyb3A7XHJcblx0XHRcdGNvbG9yOiByZ2JhKCRjb2xvcl9fdGV4dC0tZGFyaywgMC41KTtcclxuXHRcdFx0OjpwbGFjZWhvbGRlciBcclxuXHRcdFx0eyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuXHRcdFx0XHRjb2xvcjogcmVkO1xyXG5cdFx0XHRcdG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuXHRcdFx0fVxyXG5cdFx0XHQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIFxyXG5cdFx0XHR7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcblx0XHRcdFx0Y29sb3I6IHJlZDtcclxuXHRcdFx0fVxyXG5cdFx0XHQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciBcclxuXHRcdFx0eyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG5cdFx0XHRcdGNvbG9yOiByZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0IFx0XHRhcHBlYXJhbmNlOiBub25lLFxyXG5cdCBcdFx0ZGlzcGxheTogZmxleCxcclxuXHQgXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcclxuXHQgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIsXHJcblx0IFx0XHR0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzXHJcblx0ICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0ICAgICYtLXNlbGVjdFxyXG5cdCAgICB7XHJcblx0ICAgIFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY2FtL2ltZy9pY29uL2ZlbGNoYV9oYWNpYV9hYmFqby5zdmcpO1xyXG5cdCAgICBcdGJhY2tncm91bmQtc2l6ZTogZW0oMjApIGVtKDIwKTtcclxuXHQgICAgXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XHJcblx0ICAgIFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogZW0oMik7XHJcblx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRcdH1cclxuXHRcdCYtLWFsaWduQ2VudGVyXHJcblx0XHR7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdCYtLXRva2VuXHJcblx0XHR7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRcdGJvcmRlcjogc29saWQgMXB4ICRjb2xvcl9fcHJpbWFyeTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0XHRmb250LXNpemU6IGVtKDM2KSAhaW1wb3J0YW50O1xyXG5cdFx0XHRoZWlnaHQ6IGVtKDI4KSAhaW1wb3J0YW50O1xyXG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRcdCY6aG92ZXJcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogcmdiYSgkY29sb3JfX3ByaW1hcnksIDAuMyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Jjpmb2N1c1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvcl9fcHJpbWFyeSwgMC4zKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQmX19mbGV4Um93XHJcblx0e1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiBlbSg4KTtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0IFx0XHRhcHBlYXJhbmNlOiBub25lLFxyXG5cdCBcdFx0ZGlzcGxheTogZmxleCxcclxuXHQgXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJyb3VuZCxcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcixcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvd1xyXG5cdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdCZfX2NoaWxkXHJcblx0ICAgIHtcclxuXHRcdFx0bWFyZ2luOiAwIGVtKDUpO1xyXG5cdCAgICBcdCY6Zmlyc3QtY2hpbGRcclxuXHQgICAgXHR7XHJcblx0ICAgIFx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHRcdFx0fVxyXG5cdCAgICBcdCY6bGFzdC1jaGlsZFxyXG5cdCAgICBcdHtcclxuXHQgICAgXHRcdG1hcmdpbi1yaWdodDogMDtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLS1pZExhc3RcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHdpZHRoOiBlbSgxNTApO1xyXG5cdFx0XHRcdEBpbmNsdWRlIG1lZGlhKHNtKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4MGVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRAaW5jbHVkZSBtZWRpYShtZClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR3aWR0aDogNTBlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0d2lkdGg6IDgwZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0ICAgIH1cclxuXHQgICAgJl9fc2VwYXJhdG9yXHJcblx0ICAgIHtcclxuXHQgICAgXHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS41ZW07XHJcblx0ICAgIFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG5cdFx0IFx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0IFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcixcclxuXHRcdCBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcixcclxuXHRcdCAgICApLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdCAgICB9XHJcblx0fVxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIFxyXG57IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG5cdGNvbG9yOiAkY29sb3JfX3RleHQtLWxpZ2h0O1xyXG5cdG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIFxyXG57IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcblx0Y29sb3I6ICRjb2xvcl9fdGV4dC0tbGlnaHQ7XHJcbn1cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgXHJcbnsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuXHRjb2xvcjogJGNvbG9yX190ZXh0LS1saWdodDtcclxufSIsIi50b29sdGlwXHJcbntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdCZfX3RyaWdnZXJcclxuXHR7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfX3Rvb2x0aXA7XHJcblx0XHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHRcdHdpZHRoOiBlbSgyNSk7XHJcblx0XHRoZWlnaHQ6IGVtKDI1KTtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0cmlnaHQ6IGVtKDIwKTtcclxuXHRcdHRvcDogZW0oNTcpO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdGFwcGVhcmFuY2U6IG5vbmUsXHJcblx0XHRcdGRpc3BsYXk6IGZsZXgsXHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyLFxyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyLFxyXG5cdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdCY6aG92ZXIgfiAudG9vbHRpcF9fbWVzc2FnZVxyXG5cdFx0e1xyXG5cdFx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdFx0cG9pbnRlci1ldmVudHM6IGFvdG8sXHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApLFxyXG5cdFx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0fVxyXG5cdFx0Ji0taW5mb1xyXG5cdFx0e1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDRENEQ0O1xyXG5cdFx0XHRjb2xvcjogI0VFMzEyNCAhaW1wb3J0YW50O1xyXG5cdFx0XHR3aWR0aDogZW0oMzApO1xyXG5cdFx0XHRoZWlnaHQ6IGVtKDMwKTtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQmX19tZXNzYWdlXHJcblx0e1xyXG5cdFx0d2lkdGg6IGVtKDM1MCk7XHJcblx0XHRwYWRkaW5nOiBlbSgyOCk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfX2xpZ2h0Z3JheTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogZW0oOTUpO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiBlbSgxNSk7XHJcblx0XHRmb250LXNpemU6IGVtKDE1KTtcclxuXHRcdGxpbmUtaGVpZ2h0OiBlbSgyMSk7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0ei1pbmRleDogYXV0bztcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdG9wYWNpdHk6IDAsXHJcblx0XHRcdHRyYW5zaXRpb246IGVhc2UgYWxsIDAuM3MsXHJcblx0XHRcdHBvaW50ZXItZXZlbnRzOiBub25lLFxyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKSxcclxuXHRcdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdCYtLWluZm97XHJcblx0XHRcdHRvcDogZW0oNDApO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIlxyXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBQcmltYXJ5IGJ1dHRvblxyXG4qL1xyXG5cclxuLmJ1dHRvblxyXG57XHJcblx0aGVpZ2h0OiBlbSg0Nyk7XHJcblx0bWFyZ2luOiBlbSgyOCkgYXV0bztcclxuXHRib3JkZXItcmFkaXVzOiBlbSg1KTtcclxuXHRmb250LXNpemU6IDFlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcblx0QGluY2x1ZGUgcHJlZml4KChcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXgsXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIsXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcixcclxuICAgICAgICBib3gtc2hhZG93OiBub25lLFxyXG4gICAgICAgIG91dGxpbmU6IG5vbmUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcyxcclxuICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcbiAgICAmOmRpc2FibGVkXHJcbiAgICB7XHJcbiAgICBcdGN1cnNvcjogbm8tZHJvcDtcclxuICAgIFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHQgICAgICAgIG9wYWNpdHk6IDAuMyxcclxuXHQgICAgKSwgd2Via2l0IG1veiBvIG1zKTtcdFxyXG4gICAgfVxyXG4gICAgJi0tc21hbGxcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogZW0oMjAwKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgICZfX2xhYmVsXHJcbiAgICB7XHJcbiAgICBcdGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgXHRwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IGVtKDIwKTtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShtZCl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogZW0oMTYpO1xyXG4gICAgICAgIH1cclxuICAgIFx0Ji0tbGlnaHRcclxuICAgIFx0e1xyXG4gICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuICAgIFx0fVxyXG4gICAgICAgICYtLWdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfX2xpZ2h0Z3JheTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tcmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLS1pY29ue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBlbSg1KTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBlbSgxMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0tbGVmdFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9fbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IFxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKG1kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShsZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLS1pY29ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwIGVtKDkpIDAgMDtcclxuICAgICAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJi0tcHJpbWFyeVxyXG4gICAge1xyXG4gICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfX3ByaW1hcnk7XHJcbiAgICB9XHJcbiAgICAmLS1ncmF5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9fbGlnaHRncmF5O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbWVkaWEoc20pXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgd2lkdGg6IGVtKDI1MCk7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBtZWRpYShtZClcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICB3aWR0aDogZW0oMzAwKTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhKGxnKVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHdpZHRoOiBlbSgzMDApO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbWVkaWEoeGxnKVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIHdpZHRoOiBlbSgzNTApO1xyXG4gICAgfVxyXG59IiwiXHJcbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIGNoZWNrYm94XHJcbiovXHJcblxyXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1cclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0QGluY2x1ZGUgbWVkaWEoeGxnKVxyXG5cdHtcclxuXHRcdC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIHByaW1hcnkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG5cdFx0Jjpob3ZlciB+IC5jaGVja21hcmtcclxuXHRcdHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmNvbnRDaGVja2JveFNpTm8gXHJcbntcclxuXHR3aWR0aDogNTUlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0Ji0tc21hbGx7XHJcblx0XHRAaW5jbHVkZSBtZWRpYShtZClcclxuXHRcdHtcclxuXHRcdFx0d2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdFx0QGluY2x1ZGUgbWVkaWEobGcpXHJcblx0XHR7XHJcblx0XHRcdHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIG1lZGlhKHhsZylcclxuXHRcdHtcclxuXHRcdFx0d2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQmOjpiZWZvcmVcclxuXHR7XHJcblx0XHRjb250ZW50OiAnTm8nO1xyXG5cdFx0bWFyZ2luOiAwLjVyZW0gMXJlbTtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblx0Jjo6YWZ0ZXJcclxuXHR7XHJcblx0XHRjb250ZW50OiAnU2knO1xyXG5cdFx0Y29sb3I6ICRjb2xvcl9fcHJpbWFyeTtcclxuXHRcdG1hcmdpbjogMC41cmVtIDFyZW07XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcblx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHR9XHJcblx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0d2lkdGg6IDYwJTtcclxuXHR9XHJcblx0QGluY2x1ZGUgbWVkaWEoeGxnKXtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0fVxyXG5cdCAgXHJcblx0aW5wdXRbdHlwZT1jaGVja2JveF0uY2FtYmlhciArIC5zd2l0Y2gge1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWQ5ZDlkO1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xyXG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuXHR9XHJcblxyXG5cdGlucHV0W3R5cGU9Y2hlY2tib3hdLmNhbWJpYXI6Y2hlY2tlZCArIC5zd2l0Y2gge1xyXG5cdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfX3ByaW1hcnk7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfX3ByaW1hcnk7XHJcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMHB4ICRjb2xvcl9fcHJpbWFyeTtcclxuXHR9XHJcblxyXG5cdC8qIEJpZyBUcmFjayAqL1xyXG5cdGlucHV0W3R5cGU9Y2hlY2tib3hdLnRhbWFuby5jYW1iaWFyICsgLnN3aXRjaCB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHR9XHJcblxyXG5cdC8qIE5vcm1hbCBLbm9iICovXHJcblx0aW5wdXRbdHlwZT1jaGVja2JveF0uY2FtYmlhciArIC5zd2l0Y2ggPiBzcGFuIHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDE4cHg7XHJcblx0XHRoZWlnaHQ6IDE4cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NCwgMSwgMC41LCAxKTtcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHRcdC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93O1xyXG5cdFx0LW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTQsIDEuODUsIDAuNSwgMSk7XHJcblx0XHQtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcblx0XHQtbW96LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDBweCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRcdG1hcmdpbi10b3A6IDFweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG5cdH1cclxuXHJcblx0LyogQ2hlY2tlZCBLbm9iIChCbHVlIFN0eWxlKSAqL1xyXG5cdGlucHV0W3R5cGU9Y2hlY2tib3hdLmNhbWJpYXI6Y2hlY2tlZCArIC5zd2l0Y2ggPiBzcGFuIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwcHggMHB4IDAgMXB4ICRjb2xvcl9fcHJpbWFyeTtcclxuXHR9XHJcblxyXG5cdC8qIEJpZyBLbm9iICovXHJcblx0aW5wdXRbdHlwZT1jaGVja2JveF0udGFtYW5vLmNhbWJpYXIgKyAuc3dpdGNoID4gc3BhbiB7XHJcblx0XHR3aWR0aDogMjBweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHR9XHJcblxyXG5cdC8qIENoZWNrZWQgQmlnIEtub2IgKEJsdWUgU3R5bGUpICovXHJcblx0aW5wdXRbdHlwZT1jaGVja2JveF0udGFtYW5vLmNhbWJpYXI6Y2hlY2tlZCArIC5zd2l0Y2ggPiBzcGFuIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzNXB4LCAwLCAwKTtcclxuXHRcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNXB4LCAwLCAwKTtcclxuXHRcdGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMHB4IDBweCAwIDFweCAkY29sb3JfX3ByaW1hcnk7XHJcblx0fVxyXG59XHJcblxyXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY2hlY2tib3hDb250YWluZXIpICovXHJcbi5jaGVja2JveENvbnRhaW5lciBcclxue1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZy1sZWZ0OiAzNXB4O1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogZW0oMTApIGVtKDEwKSBlbSgxMCkgMDtcclxuXHQmLS1ibG9ja3NcclxuXHR7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0QGluY2x1ZGUgbWVkaWEoc20pXHJcblx0XHR7XHJcblx0XHRcdHdpZHRoOiAzMy4zJTtcclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIG1lZGlhKG1kKVxyXG5cdFx0e1xyXG5cdFx0XHR3aWR0aDogMzMuMyU7XHJcblx0XHR9XHJcblx0XHRAaW5jbHVkZSBtZWRpYShsZylcclxuXHRcdHtcclxuXHRcdFx0d2lkdGg6IDUwJTtcclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIG1lZGlhKHhsZylcclxuXHRcdHtcclxuXHRcdFx0d2lkdGg6IDI1JTtcclxuXHRcdFx0bWFyZ2luOiAwIDAgZW0oMjApIDA7XHJcblx0XHR9XHJcblx0fVxyXG5cdHNwYW5cclxuXHR7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cdFx0QGluY2x1ZGUgbWVkaWEobWQpXHJcblx0XHR7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdH1cclxuXHRcdGFcclxuXHRcdHtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5ICFpbXBvcnRhbnQ7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0bWFyZ2luOiAwIGVtKDUpO1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0cG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHR9XHJcblx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdGFwcGVhcmFuY2U6IG5vbmUsXHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG5cdFx0ZGlzcGxheTogZmxleCxcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuXHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuLmNoZWNrbWFyayBcclxue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGJvcmRlcjogc29saWQgMXB4ICM5Nzk3OTc7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRAaW5jbHVkZSBtZWRpYShtZClcclxuXHR7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHR9XHJcblx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIsXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyLFxyXG5cdFx0Ym94LXNoYWRvdzogbm9uZSxcclxuXHRcdG91dGxpbmU6IG5vbmUsXHJcblx0XHR0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzXHJcblx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHQmOmFmdGVyIFxyXG5cdHtcclxuXHRcdGZvbnQtZmFtaWx5OiAnaWNvbW9vbic7XHJcblx0XHRjb250ZW50OiBcIlxcMDAyNzE0XCI7XHJcblx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0dHJhbnNpdGlvbjogZWFzZSBhbGwgMC4zcyxcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSlcclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0fVxyXG5cdEBpbmNsdWRlIG1lZGlhKHhsZylcclxuXHR7XHJcblx0XHQvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBwcmltYXJ5IGJhY2tncm91bmQgY29sb3IgKi9cclxuXHRcdCY6aG92ZXJcclxuXHRcdHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgcHJpbWFyeSBiYWNrZ3JvdW5kICovXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IC5jaGVja21hcmsgXHJcbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIFxyXG57XHJcblx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKVxyXG5cdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcbn0iLCJcclxuLyoqXHJcbiogTW9kdWxlcyAtIGZvcm1zIC0gcmFkaW9idXR0b25cclxuKi9cclxuXHJcbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSByYWRpb2J1dHRvbkNvbnRhaW5lcikgKi9cclxuLnJhZGlvYnV0dG9uQ29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0bWFyZ2luOiAwIGF1dG8gZW0oMzIpIGF1dG87XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0YXBwZWFyYW5jZTogbm9uZSxcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuLFx0XHRcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIsXHJcblx0XHR1c2VyLXNlbGVjdDogbm9uZVxyXG5cdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0Ji0tbmFrZWRcclxuXHR7XHJcblx0XHRtYXJnaW46IDAgMCAwIGVtKDIwKTtcclxuXHRcdHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudCxcclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0fVxyXG5cdCZfX2xhYmVsXHJcblx0e1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19iYWNrZ3JvdW5kLS1tYWluO1xyXG5cdFx0aGVpZ2h0OiBlbSg1Myk7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IGVtKDE4KTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG5cdFx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0XHRmbGV4OiAxLFxyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsXHRcdFxyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyXHJcblx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0Ji0tbmFrZWRcclxuXHRcdHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGhlaWdodDogZW0oMzUpO1xyXG5cdFx0XHRwYWRkaW5nOiBlbSgxMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi8vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXHJcbi5yYWRpb2J0biB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGhlaWdodDogMjBweDtcclxuXHR3aWR0aDogMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRib3JkZXI6IHNvbGlkIDJweCByZ2JhKCRjb2xvcl9fcHJpbWFyeSwgMC41KTtcclxuXHRtYXJnaW4tbGVmdDogZW0oMTUpO1xyXG4gIH1cclxuICBcclxuICAvKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuICAucmFkaW9idG46YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXHJcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLnJhZGlvYnRuOmFmdGVyIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgKi9cclxuICAuY29udGFpbmVyIC5yYWRpb2J0bjphZnRlciB7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdG1hcmdpbjogYXV0byBhdXRvO1xyXG5cdHdpZHRoOiAxNHB4O1xyXG5cdGhlaWdodDogMTRweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogJGNvbG9yX19wcmltYXJ5O1xyXG4gIH0iLCJcclxuXHJcbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIFJhbmdlIHNsaWRlclxyXG4qL1xyXG5cclxuLnJhbmdlU2xpZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IGVtKDIxKSAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcixcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdCZfX2luZGljYXRvclxyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogZW0oMTYpO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX19iYWNrZ3JvdW5kLS1tYWluO1xyXG5cdFx0Zm9udC1zaXplOiBlbSgyNik7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHBhZGRpbmc6IGVtKDcpO1xyXG5cdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuXHRcdFx0ZGlzcGxheTogZmxleCxcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIsXHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHQmOmJlZm9yZVxyXG5cdFx0e1xyXG5cdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiBlbSgzKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Jl9faW5wdXRcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogZW0oNCk7XHJcblx0XHRib3JkZXItcmFkaXVzOiBlbSgyKTsgICBcclxuXHRcdGJhY2tncm91bmQ6ICRjb2xvcl9fYmFja2dyb3VuZC0tbWFpbjtcclxuXHRcdG91dGxpbmU6IG5vbmU7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgNTAlIDAlLCA1MCUgMTAwJSwgY29sb3Itc3RvcCgwJSwgJGNvbG9yX19wcmltYXJ5KSwgY29sb3Itc3RvcCgxMDAlLCAkY29sb3JfX3ByaW1hcnkpKTtcclxuXHQgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yX19wcmltYXJ5LCAkY29sb3JfX3ByaW1hcnkpO1xyXG5cdCAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCgkY29sb3JfX3ByaW1hcnksICRjb2xvcl9fcHJpbWFyeSk7XHJcblx0ICAgIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3JfX3ByaW1hcnksICRjb2xvcl9fcHJpbWFyeSk7XHJcblx0ICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkY29sb3JfX3ByaW1hcnksICRjb2xvcl9fcHJpbWFyeSk7XHJcblx0ICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0ICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdHRyYW5zaXRpb246IC4zcyxcclxuXHRcdFx0YXBwZWFyYW5jZTogbm9uZVxyXG5cdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHR9XHJcblx0Ojotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XHJcblx0ICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblx0ICAgIGJvcmRlcjogbm9uZTtcclxuXHQgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0ICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHQgICAgQGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuXHRcdFx0dHJhbnNpdGlvbjogLjNzLFxyXG5cdFx0XHRhcHBlYXJhbmNlOiBub25lXHJcblx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdH1cclxuXHJcblx0OjotbW96LXJhbmdlLXRyYWNrIHtcclxuXHQgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHQgICAgYm9yZGVyOiBub25lO1xyXG5cdCAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblxyXG5cdDo6LW1vei1mb2N1cy1vdXRlciB7XHJcblx0ICAgIGJvcmRlcjogMDtcclxuXHR9XHJcblxyXG5cdDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG5cdCAgICB3aWR0aDogZW0oMTYpO1xyXG5cdFx0aGVpZ2h0OiBlbSgxNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7IFxyXG5cdFx0YmFja2dyb3VuZDogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuXHRcdFx0YXBwZWFyYW5jZTogbm9uZSxcclxuXHRcdFx0dHJhbnNpdGlvbjogLjNzXHJcblx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdH1cclxuXHJcblx0OjotbW96LXJhbmdlLXRodW1iIHtcclxuXHQgICAgd2lkdGg6IGVtKDE2KTtcclxuXHRcdGhlaWdodDogZW0oMTYpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlOyBcclxuXHRcdGJhY2tncm91bmQ6ICRjb2xvcl9fcHJpbWFyeTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdGFwcGVhcmFuY2U6IG5vbmUsXHJcblx0XHRcdHRyYW5zaXRpb246IC4zcyxcclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0fVxyXG5cclxuXHQ6Oi1tcy10aWNrcy1hZnRlciB7IFxyXG5cdCAgICBkaXNwbGF5OiBub25lOyBcclxuXHR9XHJcblxyXG5cdDo6LW1zLXRpY2tzLWJlZm9yZSB7IFxyXG5cdCAgICBkaXNwbGF5OiBub25lOyBcclxuXHR9XHJcblxyXG5cdDo6LW1zLXRyYWNrIHsgXHJcblx0ICAgIGJhY2tncm91bmQ6ICRjb2xvcl9fYmFja2dyb3VuZC0tbWFpbjtcclxuXHQgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdCAgICBib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQ6Oi1tcy10b29sdGlwIHsgXHJcblx0ICAgIGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdCZfX2xpbWl0c1xyXG5cdHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdG1hcmdpbi10b3A6IGVtKDEzKTtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdGRpc3BsYXk6IGZsZXgsXHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbixcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlclxyXG5cdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdCZfX2xpbWl0XHJcblx0XHR7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogZW0oMTEpO1xyXG5cdFx0XHQmOmJlZm9yZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29udGVudDogJyQgJztcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGVtKDMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCYtLWVuZFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29sb3I6ICRjb2xvcl9fcHJpbWFyeTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsIlxyXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBDb2xsYXBzaWJsZVxyXG4qL1xyXG5cclxuLmNvbGxhcHNpYmxlXHJcbntcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGhlaWdodDogMDtcclxuXHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveCxcclxuIFx0XHR0cmFuc2l0aW9uOiBlYXNlIGFsbCAwLjNzLFxyXG4gXHRcdG9wYWNpdHk6IDBcclxuICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcbiAgICAmLS1pc1Nob3dcclxuICAgIHtcclxuICAgIFx0aGVpZ2h0OiBhdXRvO1xyXG4gICAgXHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdCBcdFx0b3BhY2l0eTogMVxyXG5cdCAgICApLCB3ZWJraXQgbW96IG8gbXMpO1xyXG4gICAgfVxyXG5cdCZfX3RpdGxlXHJcblx0e1xyXG5cdFx0Y29sb3I6ICRjb2xvcl9fdGV4dC0tZGFyaztcclxuXHRcdHBhZGRpbmc6IDAgMCBlbSgxMykgMDtcclxuXHRcdG1hcmdpbjogMCAwIGVtKDEzKSAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcl9fYmFja2dyb3VuZC0tbWFpbjtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG59Il19 */"

/***/ }),

/***/ "./src/assets/cam/scss/components/vinculacion/_vin002.scss":
/*!*****************************************************************!*\
  !*** ./src/assets/cam/scss/components/vinculacion/_vin002.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/assets/cam/scss/components/vinculacion/_vin003.scss":
/*!*****************************************************************!*\
  !*** ./src/assets/cam/scss/components/vinculacion/_vin003.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/assets/cam/scss/components/vinculacion/_vin004.scss":
/*!*****************************************************************!*\
  !*** ./src/assets/cam/scss/components/vinculacion/_vin004.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/assets/cam/scss/components/vinculacion/_vin005.scss":
/*!*****************************************************************!*\
  !*** ./src/assets/cam/scss/components/vinculacion/_vin005.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/assets/cam/scss/components/vinculacion/_vin006.scss":
/*!*****************************************************************!*\
  !*** ./src/assets/cam/scss/components/vinculacion/_vin006.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ })

}]);
//# sourceMappingURL=3.js.map