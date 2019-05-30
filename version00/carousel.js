
//variables

//slide 1
let i1 = 0
let images1 = []

//slide 2
let i2 = 0
let images2 = []

//slide 3
let i3 = 0
let images3 = []

//slide 4
let i4 = 0
let images4 = []

//slide 5
let i5 = 0
let images5 = []

//slide 6
let i6 = 0
let images6 = []

//slide 7
let i7 = 0
let images7 = []

//slide 8
let i8 = 0
let images8 = []

//image list

//slide 1
images1[0] = "images/taxiPlusRollUp.jpg"
images1[1] = "images/taxiPlus.jpg"
images1[2] = "images/tPlus.jpg"
images1[3] = "images/taxiPlusLetterHead.jpg"
images1[4] = "images/taxiPlusEmail.jpg"

//slide 2
images2[0] = "images/ifixitEmail.jpg"
images2[1] = "images/ifixit.jpg"
images2[2] = "images/ifixitBanner.jpg"
images2[3] = "images/ifixitBusinessCard.jpg"

//slide 3
images3[0] = "images/pcSafeguarding.gif"
images3[1] = "images/pc.jpg"
images3[2] = "images/pcEmail.jpg"


//slide 4
images4[0] = "images/ukbTshirt.jpg"
images4[1] = "images/UKB.jpg"
images4[2] = "images/UKBPhone.jpg"

//slide 5
images5[0] = "images/armadaWebsite.jpg"
images5[1] = "images/armada.jpg"
images5[2] = "images/armadaIcon.jpg"
images5[3] = "images/armadaBanner.jpg"

//slide 6
images6[0] = "images/sfeBag.jpg"
images6[1] = "images/SFE.jpg"
images6[2] = "images/sfeType.jpg"
images6[3] = "images/sfeLoyalty.jpg"
images6[4] = "images/sfeMenu.jpg"
images6[5] = "images/soulFoodPoster.jpg"

//slide 7
images7[0] = "images/eotf.jpg"
images7[1] = "images/marketIndex.jpg"
images7[2] = "images/mcDonaldsFlyer.jpg"
images7[3] = "images/rmhcFlyer.jpg"

//slide 8
images8[0] = "images/hgmHoodie.jpg"
images8[1] = "images/HandGMotorcyles.jpg"
images8[2] = "images/HGM.jpg"
images8[3] = "images/hgmBC.jpg"




//change image

//slide 1
function changeImgRight1(){

    if (i1<images1.length - 1){
     i1++        
    }else {
     i1 = 0
    }
        document.slide1.src = images1[i1]
    console.log(i1)
}
function changeImgLeft1(){
 
    if (i1<=images1.length - 1 && i1 > 0){
     i1--        
    }else {
     i1 = images1.length - 1
    }
       document.slide1.src = images1[i1]
    console.log(i1)
}

//slide 2
function changeImgRight2(){
 
    if (i2<images2.length - 1){
     i2++        
    }else {
     i2 = 0
    }
       document.slide2.src = images2[i2]
    console.log(i2)
}
function changeImgLeft2(){
 
    if (i2<=images2.length - 1 && i2 > 0){
     i2--        
    }else {
     i2 = images2.length - 1
    }
       document.slide2.src = images2[i2]
    console.log(i2)
}

//slide 3
function changeImgRight3(){
 
    if (i3<images3.length - 1){
     i3++        
    }else {
     i3 = 0
    }
   document.slide3.src = images3[i3]
    console.log(i3)
}
function changeImgLeft3(){

    if (i3<=images3.length - 1 && i3 > 0){
     i3--        
    }else {
     i3 = images3.length - 1
    }
    document.slide3.src = images3[i3]
    console.log(i3)
}

//slide 4
function changeImgRight4(){

    if (i4<images4.length - 1){
     i4++        
    }else {
     i4 = 0
    }
    document.slide4.src = images4[i4]    
    console.log(i4)
}
function changeImgLeft4(){

    if (i4<=images4.length - 1 && i4 > 0){
     i4--        
    }else {
     i4 = images4.length - 1
    }
    document.slide4.src = images4[i4]
    console.log(i4)
}

//slide 5
function changeImgRight5(){

    if (i5<images5.length - 1){
     i5++        
    }else {
     i5 = 0
    }
    document.slide5.src = images5[i5]    
    console.log(i5)
}
function changeImgLeft5(){

    if (i5<=images5.length - 1 && i5 > 0){
     i5--        
    }else {
     i5 = images5.length - 1
    }
    document.slide5.src = images5[i5]
    console.log(i5)
}

//slide 6
function changeImgRight6(){

    if (i6<images6.length - 1){
     i6++        
    }else {
     i6 = 0
    }
    document.slide6.src = images6[i6]    
    console.log(i6)
}
function changeImgLeft6(){

    if (i6<=images6.length - 1 && i6 > 0){
     i6--        
    }else {
     i6 = images6.length - 1
    }
    document.slide6.src = images6[i6]
    console.log(i6)
}

//slide 7
function changeImgRight7(){

    if (i7<images7.length - 1){
     i7++        
    }else {
     i7 = 0
    }
    document.slide7.src = images7[i7]    
    console.log(i7)
}
function changeImgLeft7(){

    if (i7<=images7.length - 1 && i7 > 0){
     i7--        
    }else {
     i7 = images7.length - 1
    }
    document.slide7.src = images7[i7]
    console.log(i7)
}

//slide 8
function changeImgRight8(){

    if (i8<images8.length - 1){
     i8++        
    }else {
     i8 = 0
    }
    document.slide8.src = images8[i8]    
    console.log(i8)
}
function changeImgLeft8(){

    if (i8<=images8.length - 1 && i8 > 0){
     i8--        
    }else {
     i8 = images8.length - 1
    }
    document.slide8.src = images8[i8]
    console.log(i8)
}
