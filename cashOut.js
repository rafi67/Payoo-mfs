document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cash-out').addEventListener('click', function(event){
      event.preventDefault();
      
      const addMoney = document.getElementById('input-cash-out-money').value;
      const addMoneyNumber = parseFloat(addMoney);
      const pinNumberInput = document.getElementById('pin-number').value;
      console.log(pinNumberInput)
      if(pinNumberInput==='1234') {
        const balance = document.getElementById('available-money').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - addMoneyNumber;
        console.log('new balance =', newBalance);
        document.getElementById('available-money').innerText = newBalance;
      }
      else {
        alert('Failed to add money. Please try again later');
      }
    });

    document.getElementById('cash-out-money').addEventListener('click', function(){
        document.getElementById('cash-out-section').classList.remove('hidden'); 
        document.getElementById('cash-in-section').classList.add('hidden'); 
        
    });
});