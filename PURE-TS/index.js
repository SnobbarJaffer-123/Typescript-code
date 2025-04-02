/*class User{
   //access spacifiersmmv';
    public email:string;  //by deafult ,its public
    name:string;
    readonly city:string="kashmir";
    private readonly location="sopore" //neither i can access it nor can change it
    private password="3456"  //in js,its like #password

    constructor(email:string,name:string){
    this.name=name
    this.email=email

   }
}*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//the same thing can b done using below,directly set it public in parametes
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.courseCount = 1;
        this.city = "kashmir";
        this.location = "sopore"; //neither i can access it nor can change it
        this.password = "3456"; //in js,its like #password
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return 'apple ${this.email}';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be nore then 1");
            }
            this.courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return subUser;
}(User));
var detail = new User("s@gmail.com", "snobbar");
//detail.city="sopore"   //cant change this but can access it
console.log(detail.city);
