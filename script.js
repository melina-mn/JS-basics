// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that will add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

// create a function called menu()

// the function menu() should only be responsible to show the different choices
// for the user.

// The menu() function should display the menu with different choices for the user
// depending on what the user selects from the menu you should call on the correct
// method or poperty from the account object. You can use a switch or if/else statement for your
// different menu choices. Please motivate you choice in a comment.

// TO DO LIST:



// 1. CREATE AN OBJECT FOR YOUR WEBSITE THAT HOLDS (NAME, EXPENSES, INCOME, ADDEXPENSES,ADDINCOME, LISTALLEXPENSES, AND A SUMMERY)
const account = {
  name: "Melina",
  //expenses: ["gas", "food", "rent", "clothes"],
  expenses: [],
  // [{category: "gas", amount: 1000}, {category: "food", amount: 500}]
  incomes: [],
  // addExpenses: FUNCTION AND ... .push, SO THAT IT WILL ADD AN ARRAY TO EXPENSES
  addExpense: function () {
    const category = prompt(
      "What was your expense? (\nrent\ngas\nfood\nclothes)"
    );
    const amount = parseFloat(prompt("How much is your income?"));
    this.expenses.push({ expensesCategory: category, expenseAmount: amount });
    // const expensesAmount = parseFloat(prompt("How much is your expenses"));
    // console.log(this.expenses);
    menu();
  },
  addIncome: function () {
    const amount = parseFloat(prompt("How much is your income?"));
    this.incomes.push({
      income: amount,
    });
    menu();
  },
  listAllExpenses: function () {
    for(let i = 0; i < this.expenses.length; i++){
    let value = expenses[i].category +
    incomes[i].amount;
        console.log(value);
    };
     
    menu();
  },




  // when we have answered all the questions we store it by using the code alert and the ${} template string:
  /*
  summary: function () {
    alert(`Total balances: ${account.}
    Total Incomes: ${account.}
    Total expenses: ${account.}`)
  },
  */
};

//2. WE NEED A FUNCTION MENU:
function menu() {
  const choice = parseFloat(
    prompt(
      "Please select a choice :\n1.Add income\n2.Add expense\n3.List all expenses\n4. Get summary"
    )
  );
    


  // if/else STATEMENT:
  if (choice === 1) {
    account.addIncome();
  } else if (choice === 2) {
    account.addExpense();
  } else if (choice === 3) {
    account.listAllExpenses();
  } else if (choice === 4) {
    account.summary();
  } else if (choice < 0 && choice > 4 && choice != Number){
    alert('Unvalid answer, choose a number between 1 to 4 please!');
    menu();
  }
}

//we should call it out:
    menu();

// function getSummary() {
//     alert(`your income is ${melinaObject.income}your total expenses ${melinaObject.expenses}`);
//     };

// let answer = '';
// if (answer === '1') {
//   const income = parseFloat(prompt(
//     'How much is your income?'
//     ));
// } else if (answer === '2'){
//   const expenses = parseFloat(prompt(
//     'Add your expenses'
//   ));
// } else if (answer === '3'){
//   let expensesSave = parseFloat(prompt(
//     'What was your expense? (\nrent\ngas\nfood\nclothes)'
//   ));
// }

/* function incomeChoice() {
  const income = parseFloat(prompt("How much is your income?"));
  return menu();
}
incomeChoice();
function expensesChoice() {
  const expenses = parseFloat(prompt("Add your expenses"));
  return menu();
}
expensesChoice();
function expensesSaveChoice() {
  let expensesSave = parseFloat(
    prompt("What was your expense? (\nrent\ngas\nfood\nclothes)")
  );
  return menu();
}
expensesSaveChoice(); */
// getSummary()


/*

  for (let i = amount; i < account.incomes; i++ ) {
  
    const incomes = account.addIncome[i];
  }
  account.incomes.push({
    incomeCategory: category,
    incomeAmount: amount
    })
  console.log(account.incomes);
*/