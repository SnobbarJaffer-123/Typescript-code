"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
var val = add(5);
console.log(val);
function getUpper(name) {
    return name.toUpperCase();
}
var mdName = getUpper("snobbar");
console.log(mdName);
function signup(name, email, ispaid) {
    if (ispaid === void 0) { ispaid = true; }
}
signup("snobbar", "snobbar@gmail.com");
var login = function (name, email, ispaid) {
    return name;
};
login("snobbar", "snobbar@gmail.com", true);
var nums = [1, 2, 3, 4, 5];
nums.map(function (num) { return "number ".concat(num); });
console.log(nums);
console.log(nums.filter(function (n) { return n % 2 == 0; }));
console.log(nums.reduce(function (res, curr) { return curr + res; }, 0));
