"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function MyParameterDecorator(target) {
    target.prototype.shape = 'triangle';
    console.log(target);
}
var parameter = (function () {
    function parameter() {
    }
    return parameter;
}());
parameter = __decorate([
    MyParameterDecorator
], parameter);
var t = new parameter();
console.log("method is " + t.shape);
var math;
(function (math) {
    var add = (function () {
        function add() {
        }
        return add;
    }());
    math.add = add;
    var multiply = (function () {
        function multiply() {
        }
        return multiply;
    }());
    math.multiply = multiply;
})(math = exports.math || (exports.math = {}));
var t1 = new math.add();
var t2 = new math.multiply();
