class CharGen {
	constructor(docElement, assignedChar,firstChar = false) {
		this.docElement = docElement
		this.assignedChar = assignedChar
		this.timer = setInterval(this.start.bind(this), 10);
		this.firstChar = firstChar
	}

	start() {
		if (this.firstChar === true){
			document.getElementById(`${this.docElement}`).innerHTML = Math.random().toString(36).substring(2, 3)
			if (document.getElementById(`${this.docElement}`).innerHTML === `${this.assignedChar}`) {
				document.getElementById(`${this.docElement}`).innerHTML = document.getElementById(`${this.docElement}`).innerHTML.toUpperCase()
				clearInterval(this.timer);
			}
		} else {
			document.getElementById(`${this.docElement}`).innerHTML = Math.random().toString(36).substring(2, 3)
			if (document.getElementById(`${this.docElement}`).innerHTML === `${this.assignedChar}`) {
				clearInterval(this.timer);
			} 
		}

		if (document.getElementById(`${this.docElement}`).innerHTML == null ){
			clearInterval(this.timer);
	 	}
	}
}

let AboutAGen = new CharGen('aboutFirstLetter', 'a' , true)
let AboutBGen = new CharGen('aboutSecondLetter', 'b')
let AboutOGen = new CharGen('aboutThirdLetter', 'o')
let AboutUGen = new CharGen('aboutFourthLetter', 'u')
let AboutTGen = new CharGen('aboutFifthLetter', 't')

let GithubGGen = new CharGen('githubFirstLetter', 'g' , true)
let GithubIGen = new CharGen('githubSecondLetter', 'i')
let GithubTGen = new CharGen('githubThirdLetter', 't')
let GithubHGen = new CharGen('githubFourthLetter', 'h')
let GithubUGen = new CharGen('githubFifthLetter', 'u')
let GithubBGen = new CharGen('githubSixthLetter', 'b')

let projectsPGen = new CharGen('projectsFirstLetter', 'p' , true)
let projectsRGen = new CharGen('projectsSecondLetter', 'r')
let projectsOGen = new CharGen('projectsThirdLetter', 'o')
let projectsJGen = new CharGen('projectsFourthLetter', 'j')
let projectsEGen = new CharGen('projectsFifthLetter', 'e')
let projectsCGen = new CharGen('projectsSixthLetter', 'c')
let projectsTGen = new CharGen('projectsSeventhLetter', 't')
let projectsSGen = new CharGen('projectsEightLetter', 's')

let DesignDGen = new CharGen('designFirstLetter', 'd' , true)
let DesignEGen = new CharGen('designSecondLetter', 'e')
let DesignSGen = new CharGen('designThirdLetter', 's')
let DesignIGen = new CharGen('designFourthLetter', 'i')
let DesignGGen = new CharGen('designFifthLetter', 'g')
let DesignNGen = new CharGen('designSixthLetter', 'n')
