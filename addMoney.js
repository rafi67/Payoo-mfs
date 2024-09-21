document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn-add-money').addEventListener('click', function(event){
      event.preventDefault();
      
      const addMoney = document.getElementById('input-add-money').value;
      const addMoneyNumber = parseFloat(addMoney);
      const pinNumberInput = document.getElementById('input-pin-number').value;

      if(pinNumberInput==='1234') {
        const balance = document.getElementById('available-money').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('available-money').innerText = newBalance;
      }
      else {
        alert('Failed to add money. Please try again later');
      }
    });
});