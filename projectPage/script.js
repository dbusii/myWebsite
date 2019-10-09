let header = `<div class="nav">

<div class="myNav" id="myAbout"> 
        <a href="index.html">
            <p class="about" id="aboutFirstLetter">h</p> 
            <p class="about" id="aboutSecondLetter">e</p> 
            <p class="about" id="aboutThirdLetter">l</p> 
            <p class="about" id="aboutFourthLetter">l</p>
            <p class="about" id="aboutFifthLetter">o</p> 
        </a>			 
</div>
<div class="myNav" id="myGit"> 
    <a href="https://github.com/dbusii/" rel="noreferrer" target="_blank">
        <p class="github" id="githubFirstLetter">h</p> 
        <p class="github" id="githubSecondLetter">e</p> 
        <p class="github" id="githubThirdLetter">l</p> 
        <p class="github" id="githubFourthLetter">l</p>
        <p class="github" id="githubFifthLetter">o</p> 
        <p class="github" id="githubSixthLetter">!</p> 	
    </a>			 
</div>

<div class="myNav" id="myDesign">  
    <a href="design.html">
        <p class="design" id="designFirstLetter">h</p> 
        <p class="design" id="designSecondLetter">e</p> 
        <p class="design" id="designThirdLetter">l</p> 
        <p class="design" id="designFourthLetter">l</p> 
        <p class="design" id="designFifthLetter">o</p> 
        <p class="design" id="designSixthLetter">!</p> 
    </a>
</div>

<div class="myNav" id="myContact" onclick="emailScript()">  
        <span copyEmail="click to copy email">
            <p class="contact" id="contactFirstLetter">h</p> 
            <p class="contact" id="contactSecondLetter">e</p> 
            <p class="contact" id="contactThirdLetter">l</p> 
            <p class="contact" id="contactFourthLetter">l</p> 
            <p class="contact" id="contactFifthLetter">o</p> 
            <p class="contact" id="contactSixthLetter">!</p> 
            <p class="contact" id="contactSeventhLetter"></p> 
        </span>
</div>
</div>`

$('.header').html(header)