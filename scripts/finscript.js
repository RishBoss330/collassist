function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    if (isNaN(income) || isNaN(expenses)) {
        document.getElementById('budget-result').textContent = 'Please enter valid numbers.';
        return;
    }
    const remaining = income - expenses;
    document.getElementById('budget-result').textContent = `Remaining Amount: $${remaining.toFixed(2)}`;
}

function calculateSavings() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    if (isNaN(amount) || isNaN(rate) || isNaN(years)) {
        document.getElementById('savings-result').textContent = 'Please enter valid numbers.';
        return;
    }
    const futureValue = amount * Math.pow(1 + rate, years);
    document.getElementById('savings-result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}

function calculateLoan() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('annual-rate').value) / 100 / 12;
    const years = parseInt(document.getElementById('years-loan').value) * 12;
    if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
        document.getElementById('loan-result').textContent = 'Please enter valid numbers.';
        return;
    }
    const monthlyPayment = (principal * annualRate) / (1 - Math.pow(1 + annualRate, -years));
    document.getElementById('loan-result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
