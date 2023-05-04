let mode = document.getElementById("themeCheck");
let darkmode = localStorage.getItem("darkmode");

const enableDarkmode = () => {
    //add dark
    document.body.classList.add("dark");
    //update local storage
    localStorage.setItem("darkmode","on");
}

const disableDarkmode = () => {
    //remove dark
    document.body.classList.remove("dark");
    //update local storage
    localStorage.setItem("darkmode","off");
}

//if page was left in dark mode make it dark
//BUG: visually the switch doesn't match the mode if reloaded, so I have to manually check it to make it match :: FIXED! 
if(darkmode == "on"){
    enableDarkmode();
    mode.checked = true;
}

mode.addEventListener('click', () => {
    darkmode = localStorage.getItem("darkmode");
    if(darkmode === "off"){
        enableDarkmode();
    }
    else{
        disableDarkmode();
    }
});


