//github timers
let githubTimer1 = setInterval(githubGGen, 10);
let githubTimer2 = setInterval(githubIGen, 10);
let githubTimer3 = setInterval(githubTGen, 10);
let githubTimer4 = setInterval(githubHGen, 10);
let githubTimer5 = setInterval(githubUGen, 10);
let githubTimer6 = setInterval(githubBGen, 10);

//design timers
let designTimer1 = setInterval(designDGen, 10);
let designTimer2 = setInterval(designEGen, 10);
let designTimer3 = setInterval(designSGen, 10);
let designTimer4 = setInterval(designIGen, 10);
let designTimer5 = setInterval(designGGen, 10);
let designTimer6 = setInterval(designNGen, 10);

//about timers
let aboutTimer1 = setInterval(aboutAGen, 10);
let aboutTimer2 = setInterval(aboutBGen, 10);
let aboutTimer3 = setInterval(aboutOGen, 10);
let aboutTimer4 = setInterval(aboutUGen, 10);
let aboutTimer5 = setInterval(aboutTGen, 10);

//contact timers
let contactTimer1 = setInterval(contactCGen, 10);
let contactTimer2 = setInterval(contactOGen, 10);
let contactTimer3 = setInterval(contactNGen, 10);
let contactTimer4 = setInterval(contactTGen, 10);
let contactTimer5 = setInterval(contactAGen, 10);
let contactTimer6 = setInterval(contactSecondCGen, 10);
let contactTimer7 = setInterval(contactSecondTGen, 10);

let makeInputGit; 
let makeInputDesign; 
let makeInputAbout;
let makeInputContact;



//start of design generator
function designDGen(){
	let makeInputDesign = document.getElementById('designFirstLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2,3);

	if (document.getElementById('designFirstLetter').innerHTML === "d") {
	clearInterval(designTimer1);
	}

}

function designEGen(){
let makeInputDesign = document.getElementById('designSecondLetter') 
	makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

	if (document.getElementById('designSecondLetter').innerHTML === "e") {
	clearInterval(designTimer2);
}
}

function designSGen(){
	let makeInputDesign = document.getElementById('designThirdLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

		if (document.getElementById('designThirdLetter').innerHTML === "s") {
		clearInterval(designTimer3);
}
}

function designIGen(){
	let makeInputDesign = document.getElementById('designFourthLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

		if (document.getElementById('designFourthLetter').innerHTML === "i") {
		clearInterval(designTimer4);
}
}

function designGGen(){
	let makeInputDesign = document.getElementById('designFifthLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

		if (document.getElementById('designFifthLetter').innerHTML === "g") {
		clearInterval(designTimer5);
}
}

function designNGen(){
	let makeInputDesign = document.getElementById('designSixthLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

		if (document.getElementById('designSixthLetter').innerHTML === "n") {
		clearInterval(designTimer6);
}
}
//end of design generator

//github generator
	function githubGGen(){
				let makeInputGit = document.getElementById('githubFirstLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2,3);

				if (document.getElementById('githubFirstLetter').innerHTML === "g") {
				clearInterval(githubTimer1);
				}

			}


	function githubIGen(){
			let makeInputGit = document.getElementById('githubSecondLetter') 
				makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

				if (document.getElementById('githubSecondLetter').innerHTML === "i") {
				clearInterval(githubTimer2);
		}
	}

	function githubTGen(){
				let makeInputGit = document.getElementById('githubThirdLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubThirdLetter').innerHTML === "t") {
					clearInterval(githubTimer3);
			}
		}

	function githubHGen(){
				let makeInputGit = document.getElementById('githubFourthLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubFourthLetter').innerHTML === "h") {
					clearInterval(githubTimer4);
			}
		}

	function githubUGen(){
				let makeInputGit = document.getElementById('githubFifthLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubFifthLetter').innerHTML === "u") {
					clearInterval(githubTimer5);
			}
		}

	function githubBGen(){
				let makeInputGit = document.getElementById('githubSixthLetter') 
					makeInputGit.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('githubSixthLetter').innerHTML === "b") {
					clearInterval(githubTimer6);
			}
		}
//end of github generators

//start of about generator
function aboutAGen(){
	let makeInputDesign = document.getElementById('aboutFirstLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2,3);

	if (document.getElementById('aboutFirstLetter').innerHTML === "a") {
	clearInterval(aboutTimer1);
	}

}

function aboutBGen(){
let makeInputDesign = document.getElementById('aboutSecondLetter') 
	makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

	if (document.getElementById('aboutSecondLetter').innerHTML === "b") {
	clearInterval(aboutTimer2);
}
}

function aboutOGen(){
	let makeInputDesign = document.getElementById('aboutThirdLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

		if (document.getElementById('aboutThirdLetter').innerHTML === "o") {
		clearInterval(aboutTimer3);
}
}

function aboutUGen(){
	let makeInputDesign = document.getElementById('aboutFourthLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

		if (document.getElementById('aboutFourthLetter').innerHTML === "u") {
		clearInterval(aboutTimer4);
}
}

function aboutTGen(){
	let makeInputDesign = document.getElementById('aboutFifthLetter') 
		makeInputDesign.innerHTML = Math.random().toString(36).substring(2, 3);

		if (document.getElementById('aboutFifthLetter').innerHTML === "t") {
		clearInterval(aboutTimer5);
}
}
//end of about generator

//start of contact generators
	function contactCGen(){
				let makeInputContact = document.getElementById('contactFirstLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2,3);

				if (document.getElementById('contactFirstLetter').innerHTML === "c") {
				clearInterval(contactTimer1);
				}

			}


	function contactOGen(){
			let makeInputContact = document.getElementById('contactSecondLetter') 
				makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

				if (document.getElementById('contactSecondLetter').innerHTML === "o") {
				clearInterval(contactTimer2);
		}
	}

	function contactNGen(){
				let makeInputContact = document.getElementById('contactThirdLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactThirdLetter').innerHTML === "n") {
					clearInterval(contactTimer3);
			}
		}

	function contactTGen(){
				let makeInputContact = document.getElementById('contactFourthLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactFourthLetter').innerHTML === "t") {
					clearInterval(contactTimer4);
			}
		}

	function contactAGen(){
				let makeInputContact = document.getElementById('contactFifthLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactFifthLetter').innerHTML === "a") {
					clearInterval(contactTimer5);
			}
		}

	function contactSecondCGen(){
				let makeInputContact = document.getElementById('contactSixthLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactSixthLetter').innerHTML === "c") {
					clearInterval(contactTimer6);
			}
		}

	function contactSecondTGen(){
				let makeInputContact = document.getElementById('contactSeventhLetter') 
					makeInputContact.innerHTML = Math.random().toString(36).substring(2, 3);

					if (document.getElementById('contactSeventhLetter').innerHTML === "t") {
					clearInterval(contactTimer7);
			}
		}
// end of contact generators

