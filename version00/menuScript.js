function subMenu(){

    responsiveImage = "images/cross.png"
    originalImage = "images/menu.png"
    let response = document.getElementById("mySubMenu");

    if (response.className === "subMenu") {
      response.className += "Responsive";
      document.menuImg.src = responsiveImage
      console.log(response.className)
    } else {
      response.className = "subMenu";
      document.menuImg.src = originalImage
    }
} 

