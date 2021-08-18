// handle deposite button event
document.getElementById('deposite-btn').addEventListener('click', function(){
    //get the amount deposited
    const depositeField=document.getElementById('deposite-input');
    const dAmount=parseFloat(depositeField.value);
    // console.log(dAmount);
    const totalDeposite=document.getElementById('total-deposite');
    const previousDepositeBalance=parseFloat(totalDeposite.innerText);
    //adding given amount with the previous amount in the deposite balance
     totalDeposite.innerText=previousDepositeBalance + dAmount;
    //update the main account balance
    const mainAccount=document.getElementById('main-account');
    const previousBalanceAmount=parseFloat(mainAccount.innerText);
    const newAccountBl=previousBalanceAmount + dAmount;
    mainAccount.innerText=newAccountBl;
   
    //clear deposit input field value
    depositeField.value='';
})

// handle withdraw button event
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //get the amount Withdraw
    const withdrawField=document.getElementById('withdraw-input');
    const wAmount=parseFloat(withdrawField.value);
    // console.log(wAmount);
    const totalwithdraw=document.getElementById('total-withdraw');
    const previouswithdrawBalance=parseFloat(totalwithdraw.innerText);
    //adding given amount with the previous amount in the withdraw balance
    totalwithdraw.innerText=previouswithdrawBalance + wAmount;
    //update the main account balance
    const mainAccount=document.getElementById('main-account');
    const previousBalanceAmount=parseFloat(mainAccount.innerText);
    const newAccountBl=previousBalanceAmount - wAmount;
    mainAccount.innerText=newAccountBl;
   
    //clear withdraw input field value
    withdrawField.value='';
})