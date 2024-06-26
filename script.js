const cancel_logo = document.querySelector(".cancel-logo");
const side_bar_logo = document.querySelector(".side-bar-logo");
const links_btn_cont = document.querySelector(".links-btn-cont");
const list_cont = document.querySelectorAll(".list-cont");
const dropdown_menu = document.querySelectorAll(".dropdown-menu");
const blur_image = document.querySelector(".blur-image");
const arrow_down = document.querySelectorAll(".arrow-down");
const arrow_up = document.querySelectorAll(".arrow-up");

side_bar_logo.addEventListener("click", () => {
    links_btn_cont.classList.add("show-bar");
    links_btn_cont.classList.remove("hide-bar");
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    blur_image.style.display= "block";
})
cancel_logo.addEventListener("click", () => {
    links_btn_cont.classList.remove("show-bar");
    links_btn_cont.classList.add("hide-bar");
    document.body.style.backgroundColor = "var(--almost-White)";
    blur_image.style.display = "none";    
    dropdown_menu.forEach(menu => {
        menu.style.display = "none";
    })
})
list_cont.forEach((list, index) => {
    list.addEventListener("click", () => {
        if(dropdown_menu[index].style.display == "block"){
            dropdown_menu[index].style.display = "none"
            arrow_down[index].classList.add("show");
            arrow_down[index].classList.remove("hide");
            arrow_up[index].classList.add("hide");
            arrow_up[index].classList.remove("show");
        }
        else{
            dropdown_menu[index].style.display = "block";
            arrow_up[index].classList.add("show");
            arrow_up[index].classList.remove("hide");
            arrow_down[index].classList.add("hide");
            arrow_down[index].classList.remove("show");
        }
    })
})