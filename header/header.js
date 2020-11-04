let header = `<nav class="navbar navbar-expand-sm navbar-light">
<div class="logo navbar-brand">
    <a href="./index.html">
        <img class="header-logo" height="40" alt=" ">
    </a>
</div> 
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-ellipsis-v"></i>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <div class="myNav" id="myAbout"> 
        <a href="index.html" class="nav-item nav-link">
            <p class="about" id="aboutFirstLetter">h</p><!--
            --><p class="about" id="aboutSecondLetter">e</p><!-- 
            --><p class="about" id="aboutThirdLetter">l</p><!--
            --><p class="about" id="aboutFourthLetter">l</p><!--
            --><p class="about" id="aboutFifthLetter">o</p>
        </a>			 
    </div>
    <div class="myNav" id="myProject">  
    <a href="projects.html" class="nav-item nav-link">
    <p class="projects" id="projectsFirstLetter">h</p><!-- 
        --><p class="projects" id="projectsSecondLetter">e</p><!-- 
        --><p class="projects" id="projectsThirdLetter">l</p><!-- 
        --><p class="projects" id="projectsFourthLetter">l</p><!-- 
        --><p class="projects" id="projectsFifthLetter">o</p><!-- 
        --><p class="projects" id="projectsSixthLetter">!</p><!-- 
        --><p class="projects" id="projectsSeventhLetter">!</p><!-- 
        --><p class="projects" id="projectsEightLetter">!</p> 
    </a>
    </div>
    <div class="myNav" id="myDesign">  
        <a href="design.html" class="nav-item nav-link">
            <p class="design" id="designFirstLetter">h</p><!-- 
            --><p class="design" id="designSecondLetter">e</p><!-- 
            --><p class="design" id="designThirdLetter">l</p><!-- 
            --><p class="design" id="designFourthLetter">l</p><!-- 
            --><p class="design" id="designFifthLetter">o</p><!-- 
            --><p class="design" id="designSixthLetter">!</p> 
        </a>
    </div>
    <div class="myNav" id="myGit"> 
    <a href="https://github.com/dbusii/" class="nav-item nav-link" rel="noreferrer" target="_blank">
        <p class="github" id="githubFirstLetter">h</p><!-- 
        --><p class="github" id="githubSecondLetter">e</p><!-- 
        --><p class="github" id="githubThirdLetter">l</p><!-- 
        --><p class="github" id="githubFourthLetter">l</p><!--
        --><p class="github" id="githubFifthLetter">o</p><!-- 
        --><p class="github" id="githubSixthLetter">!</p> 	
    </a>			 
    </div>
    <div class="myNav" id="myContact" onclick="emailScript()">  
        <span copyEmail="click to copy email" class="nav-item nav-link">
            <p class="contact" id="contactFirstLetter">h</p><!-- 
            --><p class="contact" id="contactSecondLetter">e</p><!-- 
            --><p class="contact" id="contactThirdLetter">l</p><!-- 
            --><p class="contact" id="contactFourthLetter">l</p><!-- 
            --><p class="contact" id="contactFifthLetter">o</p><!-- 
            --><p class="contact" id="contactSixthLetter">!</p><!-- 
            --><p class="contact" id="contactSeventhLetter"></p> 
        </span>
    </div> 
  </div>
</div>
</nav>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
`
$( document ).ready(function() {
    let randomise = Math.floor(Math.random() * (30 - 1)) + 1; 
    $('.header-logo').attr('src',`./images/emojis/${randomise}.png`)
})

$('.header').html(header)