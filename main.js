
const navSubmenu = document.querySelectorAll(".nav-submenu");
const iconList = document.querySelector(".icon-list");
const leftNav = document.querySelector(".icon-list+div");
navSubmenu.forEach((arr)=>{
    arr.addEventListener("mouseover", function () {
        this.previousElementSibling.classList.add("aa");
    });
})
navSubmenu.forEach((arr)=>{
    arr.addEventListener("mouseout", function () {
        this.previousElementSibling.classList.remove("aa");
    });
})
console.log(iconList);
iconList.addEventListener("click", function () {
    leftNav.classList.toggle("d-block");
});
