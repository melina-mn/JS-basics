// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
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
const melinaObject = {
    name: "Melina",
    expenses: [],
    income: [],
}
console.log(melinaObject);


const info = prompt(
    "Please select from the menu: \n1) Add Income\n2) Add Expences\n3) List All Expences\n4) Get Summery"
);


console.log(info);
// 2. ADD SWITCH: DONE
switch (info) {
    case "1":
      prompt(" Add Your Income");
      
      break;
    case "2":
      prompt("Add Your Expenses");
      
      break;
    case "3":
        prompt("What was your expense? (rent/gas/food etc)");
      
      break;
    case "4":
        prompt("Get Summary");
      // Don't know how to store the answers!!!
      break;
    default:
        prompt("Invalid selection");
      break;
  }


//this was working but then I changed it to switch:
// if(choice = 1){
//        const choice = prompt(
//         "Add your income"
//        ) 
//     }; 


//3. WE NEED A FUNCTION FOR THE EXPENSES:
//DON'T KNOW HOW TO WRITE IT:

// function menu() {
//     const choice = parseFloat(
//         //NOTE TO MYSELF: parseFloat() The parseFloat() 
//         //function parses a string argument and returns a floating point number.
//         prompt(
           
//         )
//     );
//     console.log("choice: " + choice);
// }

// //we shopuld call it out: 
// menu()
