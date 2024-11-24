// Select the input fields
const budgetInput = document.getElementById("budgetAmount")
const budgetDescriptionInput = document.getElementById("budgetDescription")
const budgetIntervalInput = document.getElementById("budgetInterval")
 
const incomeInput = document.getElementById("incomeAmount")
const incomeDescriptionInput = document.getElementById("incomeDescription")
const incomeIntervalInput = document.getElementById("incomeInterval")
const incomeSourceInput = document.getElementById("incomeSource")
 
const expenseInput = document.getElementById("expenseAmount")
const expenseDescriptionInput = document.getElementById("expenseDescription")
const expenseIntervalInput = document.getElementById("expenseInterval")
const expenseCategoryInput = document.getElementById("expenseCategory")
 
const budgetForm = document.getElementById('budget-form')
const incomeForm = document.getElementById('income-form')
const expenseForm = document.getElementById('expense-form')
 
let budget
let income
let expense
let expenses = []
let  incomes = []
let  budgets = []
let completeBudget
let amountInputs = [budgetInput, incomeInput, expenseInput]

   
 
const logBudget = () => {
  
    // console.log(budgetAmount.value)
    // console.log(budgetDescriptionInput.value)
    // console.log(budgetIntervalInput.value)
 
   budget = new Budget(budgetInput.value, budgetDescriptionInput.value, budgetIntervalInput.value)
   budgets.push(budget)
   budgets.forEach((budget) => {
    // grab the details of said item using displayDetails()
    let budgetDetails = budget.displayDetails()
    // Grab the section that will be holding these items
    const budgetGrid = document.querySelector('.budgetGrid');
    // Create a new section for said item
                const budgetSection = document.createElement('section');
                // Give said item a class for styling purposes if need be
                budgetSection.classList.add('budgetItem'); 
                // Create the html for where and how the item should be displayed
                                    budgetSection.innerHTML = `
                                    <section class="eAmount">
                    <p class="eItemAmount">${budgetDetails.amount}</p>
                </section>
                            <section class="eTitle">
                    <p class="eItemTitle">${budgetDetails.description}</p>
                </section>
                
               
                <section class="eInterval">
                    <p class="eItemInterval">${budgetDetails.interval}</p>
                </section>
                `;
                // append the section to the empty section in the HTML
                budgetGrid.appendChild(budgetSection);
            
})
}
 
const logIncome = () => {
    
  
    // console.log(incomeInput.value)
    // console.log(incomeDescriptionInput.value)
 
    // console.log(incomeIntervalInput.value)
 
    // console.log(incomeSourceInput.value)
    income = new Income(incomeInput.value, incomeDescriptionInput.value, incomeIntervalInput.value, incomeSourceInput.value)
    incomes.push(income)
    incomes.forEach((income) => {
        // grab the details of said item using displayDetails()
        let incomeDetails = income.displayDetails()
        // Grab the section that will be holding these items
        const incomeGrid = document.querySelector('.incomeGrid');
        // Create a new section for said item
                    const incomeSection = document.createElement('section');
                    // Give said item a class for styling purposes if need be
                    incomeSection.classList.add('incomeItem'); 
                    // Create the html for where and how the item should be displayed
                                        incomeSection.innerHTML = `
                                <section class="eTitle">
                        <p class="eItemTitle">${incomeDetails.description}</p>
                    </section>
                    <section class="eAmount">
                        <p class="eItemAmount">${incomeDetails.amount}</p>
                    </section>
                    <section class="eCategory">
                        <p class="eItemCategory">${incomeDetails.source}</p>
                    </section>
                    <section class="eInterval">
                        <p class="eItemInterval">${incomeDetails.interval}</p>
                    </section>
                    `;
                    // append the section to the empty section in the HTML
                    incomeGrid.appendChild(incomeSection);
                
    })
}
 
const logExpense = () => {
  
    // console.log(expenseInput.value)
    // console.log(expenseDescriptionInput.value)
    // console.log(expenseIntervalInput.value)
    // console.log(expenseCategoryInput.value)
 
    expense = new Expense(expenseInput.value, expenseDescriptionInput.value, expenseIntervalInput.value, expenseCategoryInput.value)
    expenses.push(expense)
    expenses.forEach((expense) => {
        // grab the details of said item using displayDetails()
        let expenseDetails = expense.displayDetails()
        // Grab the section that will be holding these items
        const expenseGrid = document.querySelector('.expensesGrid');
        // Create a new section for said item
                    const expenseSection = document.createElement('section');
                    // Give said item a class for styling purposes if need be
                    expenseSection.classList.add('expenseItem'); 
                    // Create the html for where and how the item should be displayed
                                        expenseSection.innerHTML = `
                                <section class="eTitle">
                        <p class="eItemTitle">${expenseDetails.description}</p>
                    </section>
                    <section class="eAmount">
                        <p class="eItemAmount">${expenseDetails.amount}</p>
                    </section>
                    <section class="eCategory">
                        <p class="eItemCategory">${expenseDetails.category}</p>
                    </section>
                    <section class="eInterval">
                        <p class="eItemInterval">${expenseDetails.interval}</p>
                    </section>
                    `;
                    // append the section to the empty section in the HTML
                    expenseGrid.appendChild(expenseSection);
                
    })
}
 const createIncomeList = () => {
     // Run a for each for each item in the array
     
    // Run a for each for each item in the array
    
 
 }
 class Transaction {
    constructor(amount, description, interval) {
        this.amount = amount
        this.description = description
        this.interval = interval
    }
 
    displayDetails() {
        return {
            amount: this.amount,
            description: this.description,
            interval: this.interval
        }
    }
}
class Budget extends Transaction {
    constructor(amount, description, interval) {
        super(amount, description, interval)
       
    }
    displayDetails() {
        return {
            amount: this.amount,
            description: this.description,
            interval: this.interval
        }
    }
    getWeeklyBudget(){
    return
    }
 
    getMonthlyBudget(){
        return
        }
 
        getYearlyBudget(){
            return
            }
}
 

 
class Income extends Transaction {
    constructor(amount, description, interval, source) {
    super(amount, description, interval)
    this.source = source
    }
 
    displayDetails() {
        return {
            amount: this.amount,
            description: this.description,
            interval: this.interval,
            source: this.source
        }
    }
}
 
class Expense extends Transaction {
    constructor(amount, description, interval, category) {
    super(amount, description, interval)
    this.category = category
    }
    
 
    displayDetails() {
        return {
            amount: this.amount,
            description: this.description,
            interval: this.interval,
            category: this.category
        }
    }
}


    
budgetInput.addEventListener('keydown', (e) => {
   
    if(isNaN(Number(e.key)) && e.key !== 'Backspace') {
        e.preventDefault();
    
      }
})

incomeInput.addEventListener('keydown', (e) => {
   
    if(isNaN(Number(e.key)) && e.key !== 'Backspace') {
        e.preventDefault();
    
      }
})

expenseInput.addEventListener('keydown', (e) => {
   
    if(isNaN(Number(e.key)) && e.key !== 'Backspace') {
        e.preventDefault();
    
      }
})

budgetForm.addEventListener('submit', (e) => {
    e.preventDefault()
    logBudget()
})
incomeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    logIncome()
})
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault()
    logExpense()
})

class CompletedBudget {
    constructor(budget, incomes, expenses) {
        if (!(budget instanceof Budget)) {
            throw new Error("The budget must be an instance of the Budget class.");
        }
 
        this.budget = budget; // Budget instance
        this.incomes = incomes.filter(income => income.interval === budget.interval); // Matching interval incomes
        this.expenses = expenses.filter(expense => expense.interval === budget.interval); // Matching interval expenses
    }
 
    // Calculate total incomes for the budget's interval
    calculateTotalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    }
 
    // Calculate total expenses for the budget's interval
    calculateTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
 
    // Calculate the remaining budget
    calculateRemainingBudget() {
        const totalIncome = this.calculateTotalIncome();
        const totalExpenses = this.calculateTotalExpenses();
        return this.budget.amount + totalIncome - totalExpenses;
    }
 
    // Display budget summary
    displaySummary() {
        return {
            budgetAmount: this.budget.amount,
            interval: this.budget.interval,
            totalIncome: this.calculateTotalIncome(),
            totalExpenses: this.calculateTotalExpenses(),
            remainingBudget: this.calculateRemainingBudget()
        };
    }
}
 

 