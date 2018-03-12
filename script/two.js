"use strict";
var username;
console.log(typeof username); // any
username = "Batman";
console.log(typeof username); // string
var userdata;
userdata = "i work in mycomp";
var modifieddata;
//if(userdata instanceof String){
modifieddata = userdata.replace('mycomp', 'IBM');
//}
console.log(modifieddata);
