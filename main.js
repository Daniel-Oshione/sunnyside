const menuContents = document.getElementById("menuContents");
const togglebtn = document.getElementById("toggle");
const closebtn = document.getElementById("close_menu");

togglebtn.addEventListener("click", ()=>{
    menuContents.style.display = "block";
    togglebtn.style.display = "none";
    closebtn.style.display = "block";
    // if (menuContents.style.display = "none"){
    //     menuContents.style.display = "block";
    // }
    // else{
    //     menuContents.style.display = "none";
    // }
})

closebtn.addEventListener("click", ()=>{
    menuContents.style.display = "none";
    togglebtn.style.display = "block";
    closebtn.style.display = "none";
})

