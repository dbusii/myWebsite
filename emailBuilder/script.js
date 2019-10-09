
let values = []


//Table class
let tables = [];
	class tableData {
	constructor(tableId, image = false, text = false, columnData) {
		this.tableId = tableId,
		this.image = image,
		this.text = text,
		this.columnData = columnData
	}
}


function addNewTable() {
	tableCount = document.getElementsByTagName("table").length

	//Create a new table class and push to an array for each table generated
	let table = new tableData(`myTable${tableCount + 1}`, false , false , [[`tr1-1`, 'blank', ``] ])
	tables.push(table);

	//generate a generic
	window.desc = tables[tableCount].tableId
	let tableTemplate = `\n\n<span id="desc-${tableCount + 1}">${desc}</span>\n<table id="myTable${tableCount + 1}" border="0" cellpadding="0" cellspacing="0" align="center" width="650" >\n\t<tbody><tr id="tr${tableCount + 1}-1">\n\t\t<td class="y-${tableCount + 1}" id="td${tableCount + 1}-1">\n\t\t\t&amp;nbsp;\n\t\t</td>\n\t</tr></tbody>\n</table>`
	$('#template').append(tableTemplate)


	if (tableCount >= 1) {
		$('#noOfTables').append(`<option value="${tableCount + 1}">${tableCount + 1}</option>`);
	}
		//reset values
		$("#colAmount").val("");
	values.push(1)
	}


function activeTable() {
	window.currentTable = $('#noOfTables').val()


		$("#imageName").val('');
		$("#colAmount").val('');
		$("#textAlign").val('0');
		$("#fontSelecter").val('0');
		$("#fontSize").val('');
		$("#fontColour").val('');
		$("#fontColour").css("background-color", "#ffffff");
		$("#colSelectText").val('');
		$('#lineHeight').val('')
		$("#colSelectText").val('');
		$("#columnFontColour").val('');
		$("#columnFontColour").css("background-color", "#ffffff");
		$("#imageSelecter").val('');
		$("#colText").val('');
		$("#colSelect").val('');
		$("#colWidth").val('');
		$("#tableBackgroundColour").val('');
		$("#tableBackgroundColour").css("background-color", "#ffffff");
		$("#colSelectForColour").val('');
		$("#columnBackgroundColour").val('');
		$("#columnBackgroundColour").css("background-color", "#ffffff");
}



//Sets the amount of columns
function colAmount() {

	//template
	let columnTemplate = `${(`\t<td class="y-${currentTable}">\n\t\t\t&amp;nbsp;\n\t\t</td>`)}\n\t`
	//get the current value
	let colInput = $("#colAmount").val();
	console.log(colInput)
	//get the last value
	let lastValue = values.length === 0 ? 1 : values.slice(-1)[0]
	values.push(parseInt(colInput))
	console.log(`The previous value was: ${lastValue}`)

	//if value is positive add a new column
	if (colInput > lastValue) {
		console.log(`Add a column`)
		//create a loop which adds columns untill it reaches the correct amount
		for (let i = lastValue; i < colInput; i++) {
			$(`#tr${currentTable}-1`).append(columnTemplate)
		}
			//give each td a new class
			for (let i = lastValue; i < colInput; i++) {
				let y = $(`.y-${currentTable}`)[i]
				y.setAttribute("id", `td${currentTable}-${i + 1}`);
				//ammend table object
				tables[`${currentTable-1}`].columnData[`${i}`] = [`td${currentTable}-${i + 1}`, `blank`, ``]
			}

	} else if (colInput < lastValue) {
		//create a loop which removes columns untill it reaches the correct amount
		for (let i = lastValue; i > colInput; i--) {
			$(`#td${currentTable}-${i}`).remove()
		}
	}
}


//Text Align
function textAlign() {
	console.log(true)
	//get text alignment
	let textAlign = $('#textAlign').val();

	//assign a font to the table style attribute
	if (textAlign === "0") {
		$(`#myTable${currentTable}`).css("text-align", '');
	} else if (textAlign === "1") {
		$(`#myTable${currentTable}`).css("text-align", 'left');
	} else if (textAlign === "2") {
		$(`#myTable${currentTable}`).css("text-align", 'center');
	} else if (textAlign === "3") {
		$(`#myTable${currentTable}`).css("text-align", 'right');
	}
}


//Set the font family
function fontSelect() {
	//get the select field value
	let fontFamily = $('#fontSelecter').val();

	//assign a font to the table style attribute	
	if (fontFamily === "0") {
		$(`#myTable${currentTable}`).css("font-family", '');
	} else if (fontFamily === "1") {
		$(`#myTable${currentTable}`).css("font-family", 'Arial, Helvetica, sans-serif');
	} else if (fontFamily === "2") {
		$(`#myTable${currentTable}`).css("font-family", 'Times-New-Roman, Times, serif');
	}
}


//Set table font size
function fontSize() {
	let fontSize = $('#fontSize').val();
	$(`#myTable${currentTable}`).css("font-size", fontSize + 'px');
}


//Sets the font colour
function fontColour() {
	let colour = $('#fontColour').val()

	if (colour.length === 0) {
		$(`#myTable${currentTable}`).css("color", `#FFFFFF`);
	} else {
		$(`#myTable${currentTable}`).css("color", `#${colour}`);
	}
}


function textBox(){
	if (tables[currentTable-1].columnData[$('#colSelectText').val()-1][1] === "text" || tables[currentTable-1].columnData[$('#colSelectText').val()-1][1] === "blank") {
		$("#colText").val(tables[currentTable-1].columnData[$('#colSelectText').val()-1][2]);
	} else {
		$("#colText").val("");	
	}
}


//Add text to td
function colText() {
	//get the input field imageSelecter value
	let currentCol = `${document.getElementById("colSelectText").value}`;
	let col = currentCol.length === 0 ? 1 : currentCol
	//get the value of columnSelected 
	let columnSelected = `td${currentTable}-${col}`
	$(`#${columnSelected}`).html(`\n\t\t\t\t${document.getElementById("colText").value}\n\t\t\t`)
	//ammend table object
	tables[`${currentTable-1}`].columnData[col-1][2] = `${document.getElementById("colText").value}`
	tables[`${currentTable-1}`].columnData[col-1][1] = `text`
	// $(`#${columnSelected}`).html(`\n\t\t\t\t${document.getElementById("colText").value}\n\t\t\t`)

}


//remove text from td
function removeText() {
	let currentCol = `${document.getElementById("colSelectText").value}`;
	let col = currentCol.length === 0 ? 1 : currentCol
	$(`#td${currentTable}-${col}`).html(`&amp;nbsp;\n\t\t\t`);
	//clear the text field
	$("#colText").val('');
	//ammend table object
	tables[`${currentTable-1}`].columnData[col-1][2] = ``
	tables[`${currentTable-1}`].columnData[col-1][1] = `blank`
}


function lineHeight() {
	let lineHeight = $('#lineHeight').val()
	$(`#myTable${currentTable}`).css("line-height", `${lineHeight}px`);
}


//Set column font colour
function columnFontColour() {

	//get the input field colSelected
	let currentCol = `${document.getElementById("colSelectFontColour").value}`;
	let col = currentCol.length === 0 ? 1 : currentCol
	let colour = $('#columnFontColour').val()

	if (colour.length === 0) {
		colour = "ffffff"
		$(`#myTable${currentTable} #td${currentTable}-${col}`).css("color", `#${colour}`)
	} else {
		$(`#myTable${currentTable} #td${currentTable}-${col}`).css("color", `#${colour}`)
	}
}


function removeColFontColour() {
	let currentCol = `${document.getElementById("colSelectFontColour").value}`
	let col = currentCol.length === 0 ? 1 : currentCol
	$(`#myTable${currentTable} #td${currentTable}-${col}`).css("color", '')
}


// //Assign image to td
// function imageAssigner() {
// 	//get the input field imageSelecter value
// 	let currentCol = `${document.getElementById("imageSelecter").value}`;
// 	let col = currentCol.length === 0 ? 1 : currentCol
// 	//get the value of columnSelected 
// 	let columnSelected = `td${currentTable}-${col}`
// 	$(`#${columnSelected}`).html(`\n\t\t\t\t<img id="img-${currentTable}-${currentCol}" src="images/image.jpg" alt=" " style="display: block"/>\n\t\t\t`)
// 	//ammend table object
// 	tables[`${currentTable-1}`].columnData[col-1][2] = `images/image.jpg`
// 	tables[`${currentTable-1}`].columnData[col-1][1] = `image`
// }


function imageAssigner(){
	//get the input field imageSelecter value
	let currentCol = `${document.getElementById("imageSelecter").value}`;
	let col = currentCol.length === 0 ? 1 : currentCol
	let columnSelected = `td${currentTable}-${col}`
	$(`#${columnSelected}`).html(`\n\t\t\t\t<img id="img-${currentTable}-${currentCol}" src="images/image.jpg" alt=" " style="display: block"/>\n\t\t\t`)
	
	//get the name of the image
	let imageName = $('#imageName').val() === "" ? "image" : $('#imageName').val()
	$(`#img-${currentTable}-${currentCol}`).attr('src', `images/${imageName}.jpg`)
	//ammend table object
	tables[`${currentTable-1}`].columnData[col-1][2] = imageName
	tables[`${currentTable-1}`].columnData[col-1][1] = `image`
}


function imageBox(){
	if (tables[currentTable-1].columnData[$('#imageSelecter').val()-1][1] === "image" || tables[currentTable-1].columnData[$('#imageSelecter').val()-1][1] === "blank") {
		$("#imageName").val(tables[currentTable-1].columnData[$('#imageSelecter').val()-1][2]);	
	} else {
		$("#imageName").val("");	
	}
}

function removeImage() {
	let currentCol = `${document.getElementById("imageSelecter").value}`;
	let el = document.getElementById(`img-${currentTable}-${currentCol}`);
	el.parentNode.removeChild(el);
	
	$("#imageName").val('');
	$("#imageSelecter").val('');	

	//ammend table object
	tables[`${currentTable-1}`].columnData[col-1][2] = ``
	tables[`${currentTable-1}`].columnData[col-1][1] = `blank`
}


//Set the width of the column
function colWidth() {
	//get the input field colSelected
	let colSelect = document.getElementById("colSelect").value;
	//get the input field colWidth
	let colWidth = document.getElementById("colWidth").value;
	//assign the column selected in the colSelected field to a variable
	let currentColSelected = document.getElementById(`td${currentTable}-${colSelect}`)
	//set the width of the selected column
	currentColSelected.setAttribute('width', colWidth)
}


//Set table background colour
function backgroundColour() {
	let colour = $('#tableBackgroundColour').val()
	if (colour.length === 0) {
		$(`#myTable${currentTable}`).css("background-color", `#ffffff`);
	} else {
		$(`#myTable${currentTable}`).css("background-color", `#${tableBackgroundColour.value}`);
	}
}


//Set column colour
function columnColour() {
	//get the input field colSelected
	let currentCol = `${document.getElementById("colSelectForColour").value}`;
	let colour = $('#columnBackgroundColour').val()
	if (colour.length === 0) {
		$(`#myTable${currentTable} #td${currentTable}-${currentCol}`).css("background-color", `#FFFFFF`)
	} else {
		$(`#myTable${currentTable} #td${currentTable}-${currentCol}`).css("background-color", `#${$('#columnBackgroundColour').val()}`)
	}
}


function removeColColour() {
	let currentCol = `${document.getElementById("colSelectForColour").value}`;
	$(`#myTable${currentTable} #td${currentTable}-${currentCol}`).css("background-color", '')
}


//output to textbox
function outputToTextBox() {

	//change description of table
	for (let i = 0; i <= tableCount; i++){
		$(`#desc-${i+1}`).text(`<!-- ${tables[i].columnData[0][1]} -->`) 
		console.log(i)
		
	}


	//assign outerhtml to variable
	let template = String($(`#template`).get(0).outerHTML);
	// remove table id from variable
	template = template.replace(/ id="myTable(.*?)"/g, "")
	//remove all id's from td elements in the template 
	template = template.replace(/ id="tr(.*?)"/g, "");
	//remove all classes from td elements in the template variable
	template = template.replace(/ class="y-(.*?)"/g, "")
	//remove all id's from td elements in the template 
	template = template.replace(/ id="td(.*?)"/g, "");
	//remove id's from images
	template = template.replace(/ id="img-(.*?)-(.*?)"/g, "");
	//replace "" with '' on Times New Roman
	template = template.replace(/Times-New-Roman/g, `'Times New Roman'`);
	//remove div tag
	template = template.replace(/<div id="template">/g, "");
	template = template.replace(/<\/div>/g, "");
	//remove tbody open tag 
	template = template.replace(/<tbody>/g, "");
	//remove tbody open tag 
	template = template.replace(/<[/]tbody>/g, "");
	//remove span open tag 
	template = template.replace(/<span id="desc-(.*?)">/g, "");
	template = template.replace(/<\/span>/g, "");
	//Update description
	// template = template.replace(desc, "hello")
	let templateStart = 0
	let templateEnd = template.length
	// console.log(`starts at: ${templateStart} ends at: ${templateEnd}`)
	


	let templateSubStr = template.substring(templateStart, templateEnd)

	for (let i = 0; i < templateEnd; i++) {
		let rgbStartIndex = template.slice("").search(/rgb\((.*?),(.*?),(.*?)\)/)
		let rgbEndIndex = template.slice("").search(/\)/)
		let rgbVal = template.substring(rgbStartIndex, rgbEndIndex + 1)
		let hexVal = ""
		let rgbPos = [rgbStartIndex, rgbEndIndex]

		if (rgbStartIndex === -1) {
			break
		} else {
			i = rgbEndIndex + 1
			// console.log(`Found a rgb code at ${rgbPos} with the value ${rgbVal}`)
			// console.log(`The hex value is ${rgbReadable(rgbVal)}`)
			hexVal = rgbReadable(rgbVal)
			// console.log(`hex value equals ${hexVal}`)
			template = template.replace(rgbVal, hexDecimalVal)
			templateStart = rgbEndIndex + 1
			templateSubStr = template.substring(templateStart, templateEnd)
			// console.log(`The new template start is at ${templateStart} ends as ${templateEnd}`)
			rgbStartIndex = -1
			rgbEndIndex = -1
			// console.log(i)
		}
	}


	//Write to the template
	$("textarea#textTemplate").html(template);
	//Sets the textarea to the height of the text
	jQuery.fn.extend({
		autoHeight: function () {
			function autoHeight_(element) {
				return jQuery(element).css({
					'height': 'auto',
					'overflow-y': 'hidden'
				}).height(element.scrollHeight);
			}
			return this.each(function () {
				autoHeight_(this).on('input', function () {
					autoHeight_(this);
				});
			});
		}
	});
	$('#textTemplate').autoHeight();
}


function rgbReadable(readRGB) {
	let rgbCode = readRGB.replace("rgb(", "").replace(")", "")
	let rgbCodeArr = rgbCode.split(", ")
	let rgbVal = rgbCodeArr.map(a => parseInt(a))
	let r = rgbVal[0]
	let g = rgbVal[1]
	let b = rgbVal[2]
	// console.log(`${r},${g},${b}`)
	// console.log (rgbToHex(r,g,b))
	console.log('rgb readable firing')
	rgbToHex(r, g, b)
}


function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	console.log(`output the value #${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`)
	window.hexDecimalVal = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	// return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

