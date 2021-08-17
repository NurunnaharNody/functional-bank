function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const amountText = input.value;
    const newDeposit = parseFloat(amountText);

    input.value = '';
    return newDeposit;
}

function updateTotalField(totalFieldId, amount){
    const total = document.getElementById(totalFieldId);
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + amount;  
}

function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    return previousBalance;
}

function updateBalance(newDeposit,isAdd){
      const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    // const previousBalance = parseFloat(totalBalanceText);
    const previousBalance = getCurrentBalance();
    if(isAdd==true){
        totalBalance.innerText = previousBalance + newDeposit;
    }
    else{
        totalBalance.innerText = previousBalance - newDeposit;
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const newDeposit = parseFloat(depositAmountText);

      const newDeposit = getInputValue('deposit-input');

      if(newDeposit>0){
        updateTotalField('deposit-total',newDeposit);
        updateBalance(newDeposit , true);
    }
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDeposit = parseFloat(depositTotalText);
    
    // const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    // const previousBalance = parseFloat(totalBalanceText);
    // totalBalance.innerText = previousBalance + newDeposit;
  
    // depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click',function(){
     
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdraw = parseFloat(withdrawAmountText);

     const newWithdraw= getInputValue('withdraw-input');
     const currentBalance = getCurrentBalance();
     if(newWithdraw > 0 && newWithdraw < currentBalance){
        updateTotalField('withdraw-total', newWithdraw);
        updateBalance(newWithdraw , false);
     }
     if(newWithdraw > currentBalance){
         console.log('you cant withdrow money,please check your acc balance.');
     }
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdraw = parseFloat(previousWithdrawText);
    // withdrawTotal.innerText = previousWithdraw + newWithdraw;
  
    // const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    // const previousBalance = parseFloat(totalBalanceText);
    // totalBalance.innerText = previousBalance - newWithdraw;

    // withdrawInput.value ='';
});