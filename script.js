
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

//1. WE NEED A FUNCTION MENU:

function menu() {
  const questions = parseFloat(
      prompt(
        "Please select a choice :\n1.Add income\n2.Add expense\n3.List all expenses\n4. Get summary"
      )
    );

} 

    //we should call it out: 
    menu()


  // 2. CREATE AN OBJECT FOR YOUR WEBSITE THAT HOLDS (NAME, EXPENSES, INCOME, ADDEXPENSES,ADDINCOME, LISTALLEXPENSES, AND A SUMMERY)
  const melinaObject = {
    name: "Melina",
    expenses:["gas", "food", "rent", "clothes"],
    income: [],
    // summary: getSummary()
  }

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



function incomeChoice(){
const income = parseFloat(prompt(
  "How much is your income?"
  ));
  return(menu());
};
incomeChoice();
function expensesChoice(){
const expenses = parseFloat(prompt(
  "Add your expenses"
));
return(menu());
};
expensesChoice();
function expensesSaveChoice(){
let expensesSave = parseFloat(prompt(
  "What was your expense? (\nrent\ngas\nfood\nclothes)"
));
return(menu());
};
expensesSaveChoice();
// getSummary()


//  switch (choice) {
//   case 1:
//     incomeChoice();
//     break;
//   case 2:
//     expensesChoice();
//     break;
//     case 3: 
//     expensesSaveChoice();
//   default:
//     menu();
//     break;
// }


