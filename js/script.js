const navBtn = document.querySelectorAll(".nav-btn");
navBtn.forEach((item)=>{
   item.addEventListener("click", ()=>{
    navBtn.forEach((item)=>item.classList.remove("active"))
    // item.classList.remove("active")
    item.classList.add("active");

   }) 
})
