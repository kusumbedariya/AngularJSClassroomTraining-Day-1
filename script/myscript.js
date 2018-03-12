        var data = {
            title : "Batman",
            power : 8,
            photo : "images/batman.jpg",
            city : "Gotham",
            fname : "Bruce",
            lname : "Wayne"
        };
    document.addEventListener("DOMContentLoaded", function (){
           // document.getElementsByClassName("box")[0].innerHTML = "<h1>"+data.title+"</h1>"+"<img src='"+data.photo+"'/>"+"<input type='range' min='0' max='10' value='"+data.power+"'/>"
            var elm = document.getElementsByClassName("box")[0];
            elm.innerHTML = `
            <h1>${ data.title }</h1>
            <img src='${ data.photo }'/>
            <input type='range' min='0' max='10' value='${ data.power + 1 }'/>
            <span>${ data.power }</span>
            `;
            elm
            .getElementsByTagName("input")[0]
            .addEventListener("change", function(evt){
                    // console.log( elm.getElementsByTagName("input")[0].value);
                    // elm.getElementsByTagName("span")[0].innerHTML = elm.getElementsByTagName("input")[0].value;
                    evt.target.nextSibling.nextSibling.innerHTML = evt.target.value;
                });
            
   });