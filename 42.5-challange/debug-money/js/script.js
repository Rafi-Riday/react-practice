const calculateExpense = () => {
  // debugger;
  const income = parseFloat(document.querySelector("#income").value);
  const food = parseFloat(document.querySelector("#food").value);
  const rent = parseFloat(document.querySelector("#rent").value);
  const clothes = parseFloat(document.querySelector("#clothes").value);

  if (
    income < 0 ||
    income === "" ||
    food < 0 ||
    food === "" ||
    rent < 0 ||
    rent === "" ||
    clothes < 0 ||
    clothes === ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    food + rent + clothes;

  // calculate balance
  const balance = income - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
    return;
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const income = parseFloat(document.querySelector("#income").value);
  const savePercentage = parseFloat(document.getElementById("save").value);
  //   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
    return;
  }
  const savingAmount = (savePercentage / 100) * income;

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText === '' ? income : document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
    return;
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
