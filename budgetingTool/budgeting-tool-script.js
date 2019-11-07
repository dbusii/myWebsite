
class Wallet{
	constructor(balance, income, outgoing, date){
		this.balance = balance
		this.income = income
		this.outgoing = outgoing
		this.date = date
		this.currentDate = 0
	}

	withdraw(amount){
		this.amount = amount
		this.outgoing.push(this.amount)
		this.getBalance()	
	}

	deposit(amount){
		this.amount = amount
		this.income.push(this.amount)
		this.getBalance()
	}


	getBalance(){
		for( let i = 0 ; i < Math.max( this.income.length, this.outgoing.length ) ; i++ ){
			this.balance[i] = this.income.slice(0,i+1).reduce((a,b) => a + b, 0) - this.outgoing.slice(0,i+1).reduce((a,b) => a + b, 0)		
		}
	}

	reset(){
		this.balance = []
		this.income = []
		this.outgoing = []
		this.date = []
		this.currentDate = 0
		drawTable()
	}

}


class Transaction{

	constructor(type, amount, frequency, category){
		this.type = type  //income || expense
		this.amount = amount 
		this.frequency = frequency  //daily|weekly|monthly|yearly
		this.category = category

		switch(this.frequency){
			case "daily":
					this.perDay = parseFloat(this.amount) 
				break
			case "weekly":
					this.perDay = parseFloat(this.amount) / 7
				break
			case "monthly":
					this.perDay = parseFloat(this.amount) / ( 356 / 12 )
				break
			case "yearly":
					this.perDay = parseFloat(this.amount) / 356
				break

		}
	}

}

class Information{
	constructor(totalIncome){
		this.expenses = []
		this.income = []
		this.totalIncome = totalIncome 
		this.salary
		this.totalExpenses	
		this.housing
		this.utilities
		this.food
		this.transport
		this.clothing
		this.debt
		this.personal

	}


	calculateExpenseTotal(){

		this.totalExpenses = 0
		for (let i = 0; i < Info.expenses.length; i++){
			this.totalExpenses += parseFloat(Info.expenses[i].perDay)
			
			switch(this.expenses[i].category){
				case "housing":
						this.housing = parseFloat(Info.expenses[i].perDay) 
					break
				case "utilities":
						this.utilities = parseFloat(Info.expenses[i].perDay) 
					break
				case "food":
						this.food = parseFloat(Info.expenses[i].perDay) 
					break
				case "transport":
						this.transport = parseFloat(Info.expenses[i].perDay) 
					break
				case "clothing":
						this.clothing = parseFloat(Info.expenses[i].perDay) 
					break
				case "debt":
						this.debt = parseFloat(Info.expenses[i].perDay) 
					break
				case "personal":
						this.personal = parseFloat(Info.expenses[i].perDay) 
					break

				}

		}	

	}

	salaryOverview(){
		$('#salaryTotalPerDay').html(`£${(this.salary.perDay).toFixed(2)}` )
		$('#salaryTotalPerWeek').html(`£${(this.salary.perDay * 7).toFixed(2)}` )
		$('#salaryTotalPerMonth').html(`£${(this.salary.perDay * (356 / 12) ).toFixed(2)}` )
		$('#salaryTotalPerYear').html(`£${(this.salary.perDay * 356).toFixed(2)}` )

		if(this.expenses.length > 0){
			this.savingsOverview()
		}
	}

	savingsOverview(){
		$('#savingsTotalPerDay').html(`£${(this.salary.perDay - this.totalExpenses).toFixed(2)}` )
		$('#savingsTotalPerWeek').html(`£${( (this.salary.perDay - this.totalExpenses) * 7).toFixed(2)}` )
		$('#savingsTotalPerMonth').html(`£${( (this.salary.perDay - this.totalExpenses) * (356 / 12) ).toFixed(2)}` )
		$('#savingsTotalPerYear').html(`£${( (this.salary.perDay - this.totalExpenses) * 356).toFixed(2)}` )
	}

	expenseOverview(){

			if (this.salary !== undefined){
				this.savingsOverview()
			}

			$('#expenseTotalPerDay').html(`£${(this.totalExpenses).toFixed(2)}` )
			$('#expenseTotalPerWeek').html(`£${(this.totalExpenses * 7).toFixed(2)}` )
			$('#expenseTotalPerMonth').html(`£${(this.totalExpenses * (356 / 12) ).toFixed(2)}` )
			$('#expenseTotalPerYear').html(`£${(this.totalExpenses * 356).toFixed(2)}` )


			switch($('#expenseCategory').val()){
				case "housing":
					$('#housingTotalPerDay').html(`£${(this.housing).toFixed(2)}` )
					$('#housingTotalPerWeek').html(`£${(this.housing * 7).toFixed(2)}` )
					$('#housingTotalPerMonth').html(`£${(this.housing * (356 / 12) ).toFixed(2)}` )
					$('#housingTotalPerYear').html(`£${(this.housing * 356).toFixed(2)}` )
				break
				case "utilities":
					$('#utilitiesTotalPerDay').html(`£${(this.utilities).toFixed(2)}` )
					$('#utilitiesTotalPerWeek').html(`£${(this.utilities * 7).toFixed(2)}` )
					$('#utilitiesTotalPerMonth').html(`£${(this.utilities * (356 / 12) ).toFixed(2)}` )
					$('#utilitiesTotalPerYear').html(`£${(this.utilities * 356).toFixed(2)}` )
				break
				case "food":
					$('#foodTotalPerDay').html(`£${(this.food).toFixed(2)}` )
					$('#foodTotalPerWeek').html(`£${(this.food * 7).toFixed(2)}` )
					$('#foodTotalPerMonth').html(`£${(this.food * (356 / 12) ).toFixed(2)}` )
					$('#foodTotalPerYear').html(`£${(this.food * 356).toFixed(2)}` )
				break
				case "transport":
					$('#transportTotalPerDay').html(`£${(this.transport).toFixed(2)}` )
					$('#transportTotalPerWeek').html(`£${(this.transport * 7).toFixed(2)}` )
					$('#transportTotalPerMonth').html(`£${(this.transport * (356 / 12) ).toFixed(2)}` )
					$('#transportTotalPerYear').html(`£${(this.transport * 356).toFixed(2)}` )
				break
				case "clothing":
					$('#clothingTotalPerDay').html(`£${(this.clothing).toFixed(2)}` )
					$('#clothingTotalPerWeek').html(`£${(this.clothing * 7).toFixed(2)}` )
					$('#clothingTotalPerMonth').html(`£${(this.clothing * (356 / 12) ).toFixed(2)}` )
					$('#clothingTotalPerYear').html(`£${(this.clothing * 356).toFixed(2)}` )
				break
				case "debt":
					$('#debtTotalPerDay').html(`£${(this.debt).toFixed(2)}` )
					$('#debtTotalPerWeek').html(`£${(this.debt * 7).toFixed(2)}` )
					$('#debtTotalPerMonth').html(`£${(this.debt * (356 / 12) ).toFixed(2)}` )
					$('#debtTotalPerYear').html(`£${(this.debt * 356).toFixed(2)}` )
				break
				case "personal":
					$('#personalTotalPerDay').html(`£${(this.personal).toFixed(2)}` )
					$('#personalTotalPerWeek').html(`£${(this.personal * 7).toFixed(2)}` )
					$('#personalTotalPerMonth').html(`£${(this.personal * (356 / 12) ).toFixed(2)}` )
					$('#personalTotalPerYear').html(`£${(this.personal * 356).toFixed(2)}` )
				break
			} 
	}


}

let Account = new Wallet ([],[],[],[])
let Info = new  Information()

	
	

$( ".simulate" ).click(function() {

	Account.reset()

	let timeToSim = parseFloat ($('.simLength').val() )
	
	switch($('#simLengthMetric').val()){
		case "days":
			for (let i = 0 ; i < timeToSim; i++){
				Account.date.push(i+1)
				Account.deposit( parseFloat( (Info.salary.perDay ).toFixed(2) )  )	
				Account.withdraw( parseFloat( (Info.totalExpenses ).toFixed(2) )  )	
			}
		break
		case "weeks":
			for (let i = 0 ; i < timeToSim; i++){
				Account.date.push(i+1)
				Account.deposit( parseFloat( (Info.salary.perDay * 7 ).toFixed(2) )  )	
				Account.withdraw( parseFloat( (Info.totalExpenses * 7 ).toFixed(2) )  )	
			}
		break
		case "months":
			for (let i = 0 ; i < timeToSim; i++){
				Account.date.push(i+1)
				Account.deposit( parseFloat( (Info.salary.perDay * (356 / 12)).toFixed(2) )  )	
				Account.withdraw( parseFloat( (Info.totalExpenses * (356 / 12)).toFixed(2) )  )	
			}
		break
		case "years":
			for (let i = 0 ; i < timeToSim; i++){
				Account.date.push(i+1)
				Account.deposit( parseFloat( (Info.salary.perDay * 356 ).toFixed(2) )  )	
				Account.withdraw( parseFloat( (Info.totalExpenses * 356 ).toFixed(2) )  )	
			}
		break
	}
	drawTable()
});

$( ".reset" ).click(function() {
	Account.reset()
});

$( ".submitExpense" ).click(function() {

	//checks to see if all of the select fields have been selected if not, it doesn't submit and a reminder appears
	if ( $('#expenseInput').val() === "" ) {
			window.alert("Enter an amount for the expense");
	}	else if( $('#expenseFrequency').val() === "frequency" && $('#expenseCategory').val() === "category"){
			window.alert("Select a frequency and category for the expense");
	}	else if( $('#expenseFrequency').val() === "frequency" ){
			window.alert("Select a frequency for the expense");
	}	else if ( $('#expenseCategory').val() === "category" ) {
			window.alert("Select a category for the expense");
	}	else {

		let Expense= new Transaction( 'expense', $('#expenseInput').val(), $('#expenseFrequency').val(), $('#expenseCategory').val() )

		//removes transaction if a  new transaction of that category is being created
		for (let i = 0; i < Info.expenses.length; i++){
			if ( $('#expenseCategory').val() === Info.expenses[i].category) {
				console.log('same')
				Info.expenses.splice(i, 1)
			} 
		}

		//pushes transaction to array
		Info.expenses.push(Expense)

		//turns submit button text green for visual cue
		$("#expenseButton").css("color", "#5cb85c");
		setTimeout(function(){
		$("#expenseButton").css("color", "#428bca");
		}, 500);

		Info.calculateExpenseTotal()
		Info.expenseOverview()
	}	
});

$( ".submitSalary" ).click(function() {

		let salary = new Transaction( 'salary', $('#salaryInput').val(), $('#salaryFrequency').val())

		Info.salary = salary

		//turns submit button text green for visual cue
		$("#salaryButton").css("color", "#5cb85c");
		setTimeout(function(){
		$("#salaryButton").css("color", "#428bca");
		}, 500);

		Info.salaryOverview()
	
});


function drawTable(){
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'line',
	    data: {
		  labels: Account.date,
		  datasets: [
			  {
			label: 'Income',
			data: Account.income,
			fill: false,
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgba(54, 162, 235, 1)',
			borderWidth: 1
		  }
		  ,
		  {
			label: 'Outgoings',
			data: Account.outgoing,
			fill: false,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgba(255, 99, 132, 1)',
			borderWidth: 1
		  }
		  ,
		  {
			label: 'Balance',
			data: Account.balance,
			fill: false,
			backgroundColor: 'rgba(156, 214, 171, 0.2)',
			borderColor: 'rgba(156, 214, 171, 1)',
			borderWidth: 1
		  }
		]

	    },
	    options: {
				scales: {
				yAxes: [{
					gridLines: {
						display: false,
					}
					,
					ticks: {
						callback: function(value, index, values) {
							return '£' + value;
						}
					}
				}]
			}
	    }
	}); 
}

drawTable()

function toggleInfo(...ids){
	for (id in ids){
		$(`.${ids[id]}`).toggle('slow')
			if(id === 'allTotals'){
				console.log('all')
			}
	}	
}

function hideInfo(){
	ids = ['housingTotals','utilitiesTotals','foodTotals','transportTotals','clothingTotals','debtTotals','personalTotals']
	for (id in ids){
		$(`.${ids[id]}`).hide()
	}	
}

$(document).ready(function(){

toggleInfo('allTotals','housingTotals','utilitiesTotals','foodTotals','transportTotals','clothingTotals','debtTotals','personalTotals')

})
