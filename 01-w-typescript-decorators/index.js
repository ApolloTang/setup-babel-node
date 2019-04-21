"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var decimal = 6;
console.log('decimal: ', decimal);
new Promise(function (r) { r('promise resolve'); }).then(function (d) { return console.log(d); });
// Decorator example one
function inject(options) {
    return function (target) {
        target.apiVersion = options.api_version;
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass = __decorate([
        inject({
            api_version: '0.0.0'
        })
    ], MyClass);
    return MyClass;
}());
var myclass = new MyClass();
console.log('MyClass.apiVersion: ', MyClass.apiVersion);
// Decorator example two
function readonly() {
    return function (target, name, descriptor) {
        descriptor.writable = false;
    };
}
var Example = /** @class */ (function () {
    function Example() {
        this.a = 3;
        this.b = 5;
    }
    __decorate([
        readonly(),
        __metadata("design:type", Number)
    ], Example.prototype, "b", void 0);
    return Example;
}());
var e = new Example();
try {
    e.a = 1;
    e.b = 2;
    console.log('e.a:, e.b: ', e.a, e.b);
}
catch (e) {
    console.log('Typeerror: attempted to reassign readonly');
}
