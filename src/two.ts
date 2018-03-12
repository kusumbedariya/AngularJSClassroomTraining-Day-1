let username;
console.log(typeof username)// any
username = "Batman";
console.log(typeof username)// string

let userdata : (String | Array<string> );
userdata = "i work in mycomp";
let modifieddata;
//if(userdata instanceof String){
    modifieddata = userdata.replace('mycomp', 'IBM');
//}
console.log(modifieddata);


