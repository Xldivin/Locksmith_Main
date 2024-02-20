document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");
    const menuIconx = document.getElementById("menu-iconx")
  
    menuIcon.addEventListener("click", function () {
        menuList.style.display = "block";
    });
  
    menuIconx.addEventListener('click', function () {
        menuList.style.display = "none"
    });
});