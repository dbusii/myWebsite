
let timer1 = setInterval(gGen, 10);
let timer2 = setInterval(iiGen, 10);
let timer3 = setInterval(tGen, 10);
let timer4 = setInterval(hGen, 10);
let timer5 = setInterval(uGen, 10);
let timer6 = setInterval(bGen, 10);
let timer7 = setInterval(cGen, 10);
let timer8 = setInterval(oGen, 10);
let timer9 = setInterval(nnGen, 10);
let timer10 = setInterval(ttGen, 10);
let timer11 = setInterval(aaGen, 10);
let timer12 = setInterval(ccGen, 10);
let timer13 = setInterval(tttGen, 10);
let makeInputContact; 
let makeInputGit; 
let makeInput; 

	function gGen(){
				let makeInputGit = document.getElementById('githubFirstLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2,3);

				if (document.getElementById('githubFirstLetter').innerHTML === "g") {
				clearInterval(timer1);
				}

			}


	function iiGen(){
			let makeInputGit = document.getElementById('githubSecondLetter') 
				makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

				if (document.getElementById('githubSecondLetter').innerHTML === "i") {
				clearInterval(timer2);
		}
	}

	function tGen(){
				let makeInputGit = document.getElementById('githubThirdLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubThirdLetter').innerHTML === "t") {
					clearInterval(timer3);
			}
		}

	function hGen(){
				let makeInputGit = document.getElementById('githubFourthLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubFourthLetter').innerHTML === "h") {
					clearInterval(timer4);
			}
		}

	function uGen(){
				let makeInputGit = document.getElementById('githubFifthLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubFifthLetter').innerHTML === "u") {
					clearInterval(timer5);
			}
		}

	function bGen(){
				let makeInputGit = document.getElementById('githubSixthLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubSixthLetter').innerHTML === "b") {
					clearInterval(timer6);
			}
		}

	function cGen(){
				let makeInputContact = document.getElementById('contactFirstLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2,3);

				if (document.getElementById('contactFirstLetter').innerHTML === "c") {
				clearInterval(timer7);
				}

			}


	function oGen(){
			let makeInputContact = document.getElementById('contactSecondLetter') 
				makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

				if (document.getElementById('contactSecondLetter').innerHTML === "o") {
				clearInterval(timer8);
		}
	}

	function nnGen(){
				let makeInputContact = document.getElementById('contactThirdLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactThirdLetter').innerHTML === "n") {
					clearInterval(timer9);
			}
		}

	function ttGen(){
				let makeInputContact = document.getElementById('contactFourthLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactFourthLetter').innerHTML === "t") {
					clearInterval(timer10);
			}
		}

	function aaGen(){
				let makeInputContact = document.getElementById('contactFifthLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactFifthLetter').innerHTML === "a") {
					clearInterval(timer11);
			}
		}

	function ccGen(){
				let makeInputContact = document.getElementById('contactSixthLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactSixthLetter').innerHTML === "c") {
					clearInterval(timer12);
			}
		}

	function tttGen(){
				let makeInputContact = document.getElementById('contactSeventhLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactSeventhLetter').innerHTML === "t") {
					clearInterval(timer13);
			}
		}
		


