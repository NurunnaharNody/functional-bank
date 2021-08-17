function getInputAmount(inputId){
    const input = document.getElementById(inputId);
     const depositAmountText = input.value;
     const depositAmount = parseFloat(depositAmountText);

     input.value = '';
    return depositAmount;
}

document.getElementById('deposit-button').addEventListener('click', function(){

    //  const depositInput = document.getElementById('deposit-input');
    //  const depositAmountText = depositInput.value;
    //  const depositAmount = parseFloat(depositAmountText);
      const depositAmount = getInputAmount('deposit-input');

     const depositTotal = document.getElementById('deposit-total');
     const depositTotalAmountText = depositTotal.innerText;
     const newDeposit = parseFloat(depositTotalAmountText);
    depositTotal.innerText = depositAmount + newDeposit;

    const totalBalance = document.getElementById('balance-total');
    const balanceAmountText = totalBalance.innerText;
    const balance= parseFloat(balanceAmountText);

    totalBalance.innerText = balance + depositAmount;
     

    // depositInput.value = '';

});

document.getElementById('withdraw-button').addEventListener('click', function(){
        
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const  withdrawAmount = parseFloat(withdrawAmountText);

     const withdrawAmount= getInputAmount('withdraw-input');
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmounttext = withdrawTotal.innerText;
    const withdraw =  parseFloat(withdrawTotalAmounttext);

    withdrawTotal.innerText = withdrawAmount + withdraw;
   
    const totalBalance = document.getElementById('balance-total');
    const balanceAmountText = totalBalance.innerText;
    const balance= parseFloat(balanceAmountText);
     totalBalance.innerText = balance - withdrawAmount;
    // withdrawInput.value ='';
      
});