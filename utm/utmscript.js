
const myInput = document.getElementById("inputUtm");

function genUtm(){

const mySource = document.getElementById("inputSource").value;
const myMedium = document.getElementById("inputMedium").value;
const myCampaign = document.getElementById("inputCampaign").value;

//Clears the current value inside the textfield
document.getElementById("inputUtm").innerhtml ="this.value=''";
document.getElementById("inputUtm").value = ("?utm_source=" + mySource + "&utm_medium=" + myMedium  +  "&utm_campaign="+ myCampaign);

//Creates List of previously generated UTMS
const node = document.createElement("P");
node.innerHTML = ("?utm_source=" + mySource + "&utm_medium=" + myMedium  +  "&utm_campaign="+ myCampaign);
document.getElementById('myList').appendChild(node);



}

function copyUtm(){

//Clears the current value inside the textfield
document.getElementById("inputUtm").innerhtml ="this.value=''";

//assigns the content of myTextfield to the variable copyText
const copyText = document.getElementById("inputUtm");
//selects the content within the Textfield

copyText.select();
//Write the content of myTextField to the Clipboard

document.execCommand("copy");

}