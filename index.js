document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    // Alawys remember to use .value to get text from an input field
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password)

    if (email === 'erazul89@gmail.com' && password ==='taosif510'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Valo hoye jao masud')
    }
})