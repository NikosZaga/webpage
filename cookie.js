//this is my 1st attempt at a JS
let popUp = document.getElementById("cookie");
let popUp2 = document.getElementById("cookieRejection");

document.getElementById("acceptCookie").addEventListener("click",  () =>{   
popUp.classList.add("hide");
popUp.classList.remove("show");
})
document.getElementById("acceptntCookie").addEventListener("click",  () =>{   
    //remove 1st popup

    popUp.classList.add("hide");
    popUp.classList.remove("show");
    //display 2nd popup
    popUp2.classList.add("show");
    popUp2.classList.remove("hide");
    })
//when (finally) the button is pressed remove the 2nd popup as well
document.getElementById("acceptCookie2").addEventListener("click",  () =>{   
    popUp2.classList.add("hide");
    popUp2.classList.remove("show");
    })

