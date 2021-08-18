// handle login button event.........
document.getElementById('login-btn').addEventListener('click',function(){
    // get the value of emil.........
    const emailFeild=document.getElementById('email');
    const valueOfEmail=emailFeild.value;
    // get the value of password...........
    // console.log(valueOfEmail);
    const passwordFeild=document.getElementById('password');
    const valueOfpassword=passwordFeild.value;
    // console.log(valueOfpassword);
    // checking and rediract to another website.......
    if(valueOfEmail == 'baperbank@gmail.com' && valueOfpassword == 'admin'){
        window.location.href = "banking.html";
    }
})