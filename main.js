const menuContents = document.getElementById("menuContents");
const togglebtn = document.getElementById("toggle");

togglebtn.addEventListener("click", ()=>{
    if (menuContents.style.display = "none"){
        menuContents.style.display = "block";
    }
    else{
        menuContents.style.display = "none";
    }
})

