// el
const navBtn = document.querySelectorAll(".nav-btn");
const HomeBtn = document.querySelector(".Home-btn");
const projectBtn = document.querySelector(".project-btn");
const contcatBtn = document.querySelector(".contact-btn");








navBtn.forEach((item)=>{
   item.addEventListener("click", ()=>{
    navBtn.forEach((item)=>item.classList.remove("active"))
    item.classList.add("active");

   }) 
})

HomeBtn.addEventListener("click", ()=>{
    document.body.classList.add("fade-out");

    setTimeout(()=>{
        window.location.href = "index.html";
    }, 400)
});
projectBtn.addEventListener("click", ()=>{
    document.body.classList.add("fade-out");
    
        setTimeout(()=>{
        window.location.href = "project.html";
    }, 400)
});
contcatBtn.addEventListener("click", ()=>{
    document.body.classList.add("fade-out");

    setTimeout(()=>{
        window.location.href = "contact.html";
    }, 400)
})