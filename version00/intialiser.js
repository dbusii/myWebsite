
window.onload = function() {

//get first coordinates for carousels
let carouselTimer = setTimeout(initialiseTimer, 1000);
function initialiseTimer(){
	ImageMap('img[usemap]', 500)
	}

//imageMapResize;	
ImageMap('img[usemap]', 500)


//load images
changeImgRight1()
changeImgRight2()
changeImgRight3()
changeImgRight4()
changeImgRight5()
changeImgRight6()

//get email	
    document.getElementById('myContact').addEventListener("click", function () { 
        navigator.clipboard.writeText("dtbirkett@gmail.com")
        console.log("worked"); 
    });

	
}
