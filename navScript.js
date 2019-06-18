class CharGen {
	constructor(docElement, assignedChar) {
		this.docElement = docElement
		this.assignedChar = assignedChar
		this.timer = setInterval(this.start.bind(this), 10);
	}

	start() {
		document.getElementById(`${this.docElement}`).innerHTML = Math.random().toString(36).substring(2, 3)
		if (document.getElementById(`${this.docElement}`).innerHTML === `${this.assignedChar}`) {
			clearInterval(this.timer);
		}
	}
}

let AboutAGen = new CharGen('aboutFirstLetter', 'a')
let AboutBGen = new CharGen('aboutSecondLetter', 'b')
let AboutOGen = new CharGen('aboutThirdLetter', 'o')
let AboutUGen = new CharGen('aboutFourthLetter', 'u')
let AboutTGen = new CharGen('aboutFifthLetter', 't')

let GithubGGen = new CharGen('githubFirstLetter', 'g')
let GithubIGen = new CharGen('githubSecondLetter', 'i')
let GithubTGen = new CharGen('githubThirdLetter', 't')
let GithubHGen = new CharGen('githubFourthLetter', 'h')
let GithubUGen = new CharGen('githubFifthLetter', 'u')
let GithubBGen = new CharGen('githubSixthLetter', 'b')

let DesignDGen = new CharGen('designFirstLetter', 'd')
let DesignEGen = new CharGen('designSecondLetter', 'e')
let DesignSGen = new CharGen('designThirdLetter', 's')
let DesignIGen = new CharGen('designFourthLetter', 'i')
let DesignGGen = new CharGen('designFifthLetter', 'g')
let DesignNGen = new CharGen('designSixthLetter', 'n')

let ContactCGen = new CharGen('contactFirstLetter', 'c')
let ContactOGen = new CharGen('contactSecondLetter', 'o')
let ContactNGen = new CharGen('contactThirdLetter', 'n')
let ContactTGen = new CharGen('contactFourthLetter', 't')
let ContactSecondAGen = new CharGen('contactFifthLetter', 'a')
let ContactSecondCGen = new CharGen('contactSixthLetter', 'c')
let ContactSecondTGen = new CharGen('contactSeventhLetter', 't')