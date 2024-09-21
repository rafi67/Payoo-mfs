
// add money to the account

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();
        
        const addMoneyInput = parseFloat(document.getElementById('input-add-money').innerText);
        console.log(addMoneyInput);

        //  get the pin number provided
        const pinNumberInput = parseInt(document.getElementById('input-pin-number').value);
        console.log(pinNumberInput);

        const availableMoney = document.getElementById('available-money').innerText;
        var balanceNumber = parseFloat(availableMoney);

        if(pinNumberInput=='1234') {
           const newBalance = availableMoney + balanceNumber;
           document.getElementById('available-money').innerText = newBalance;
           console.log("new balance = ", newBalance);
        }
    });
});