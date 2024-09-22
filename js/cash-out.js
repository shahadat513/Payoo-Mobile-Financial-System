document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const inputCashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(inputCashOut);
    const pinNumber = document.getElementById('pin-number').value;
    

    if (pinNumber === '1234') {
        const currentBalance = document.getElementById('current-balance').innerText;
        const CashOutMoneyNumber = parseFloat(currentBalance)
        const balanceNumber=CashOutMoneyNumber-cashOutNumber;
        console.log(balanceNumber);
        document.getElementById('current-balance').innerText=balanceNumber;
        
    }
    else{
        alert('Invalid Pin Number. Please Try Again Later')
    }
})
