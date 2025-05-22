class Expense {
    constructor(description, amount, date, category) {
      this.description = description;
      this.amount = parseFloat(amount);
      this.date = date;
      this.category = category;
    }
  }
  
  class ExpenseTracker {
    constructor() {
      this.expenses = [];
      this.expensesList = document.getElementById("expensesList");
    }
    
    addExpense(expense) {
      this.expenses.push(expense);
      this.render();
    }
  
    updateExpense(index, newExpense) {
      this.expenses[index] = newExpense;
      this.render();
    }
  
    deleteExpense(index) {
      this.expenses.splice(index, 1);
      this.render();
    }
  
    editExpense(index) {
      const expense = this.expenses[index];
      document.getElementById("description").value = expense.description;
      document.getElementById("amount").value = expense.amount;
      document.getElementById("date").value = expense.date;
      document.getElementById("category").value = expense.category;
      document.getElementById("editIndex").value = index;
    }
  
    sortExpenses(key, order = "asc") {
      this.expenses.sort((a, b) => {
        return order === "asc"
          ? a[key] - b[key]
          : b[key] - a[key];
      });
      this.render();
    }
  
    render() {
      this.expensesList.innerHTML = "";
      this.expenses.forEach((expense, index) => {
        const row = document.createElement("tr");
  
        row.innerHTML = `
          <td>${expense.description}</td>
          <td>$${expense.amount}</td>
          <td>${expense.date}</td>
          <td>${expense.category}</td>
          <td>
            <button class="btn btn-info btn-sm mr-2" onclick="tracker.editExpense(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="tracker.deleteExpense(${index})">Delete</button>
          </td>
        `;
  
        this.expensesList.appendChild(row);
      });
  
      document.getElementById("description").value = "";
      document.getElementById("amount").value = "";
      document.getElementById("date").value = "";
      document.getElementById("category").value = "Food";
      document.getElementById("editIndex").value = "";
    }
  }
  
  const tracker = new ExpenseTracker();
  
  function addOrUpdateExpense() {
    const description = document.getElementById("description").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const editIndex = document.getElementById("editIndex").value;
  
    if (!description || !amount || !date || !category) {
      alert("Please fill in all fields.");
      return;
    }
  
    const expense = new Expense(description, amount, date, category);
  
    if (editIndex === "") {
      tracker.addExpense(expense);
    } else {
      tracker.updateExpense(editIndex, expense);
    }
  }
  
  function sortExpenses(key, order) {
    tracker.sortExpenses(key, order);
  }
  