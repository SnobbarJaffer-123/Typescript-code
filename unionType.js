"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union is a combination of differenttypes of data that can be included in array or var
var score = 33; //can be either number or string
var snobbar = { name: "snobbar", id: 334 };
snobbar = { username: "sj", id: 333 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("45");
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 4, true];
var pi = 3.14; //values very strict
//use case
var seatallotment;
seatallotment = "aisle";
