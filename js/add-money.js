document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;


    if (inputPinNumber === '1234') {
        const currentBalance = document.getElementById('current-balance').innerText;
        const addMoneyNumber = parseFloat(addMoney)
        const balanceNumber = parseFloat(currentBalance)
        const newBalance = (addMoneyNumber + balanceNumber);
        console.log(newBalance);
        document.getElementById('current-balance').innerText = newBalance

    }
    else {
        alert('Invalid Pin Number. Please Try Again Later')
    }
})
