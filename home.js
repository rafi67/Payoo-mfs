
// add money to the account

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();
        
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        //  get the pin number provided
        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);
    });
});