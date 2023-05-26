let login_email = document.getElementById('login_email');
let login_password = document.getElementById('login_password');
let stdLoginBtn = document.getElementById('stdLoginBtn');

function validation() {
    let input = document.querySelectorAll(".input");
    for (i = 0; i < input.length; i++) {
        if (input[i].value == "" || input[i].value == null) {
            input[i].nextElementSibling.innerHTML = input[i].previousElementSibling.innerHTML + " is required";
        }
        else {
            input[i].nextElementSibling = "";
        }
    }
};

stdLoginBtn.onclick = (e) => {
    // alert('work')
    e.preventDefault();
    validation();

    let storedData = JSON.parse(localStorage.getItem('studentRegister'));
    console.log(storedData)

    if (storedData == null) {
        alert('Kindly Register or Sign-up');
        window.location.href = 'student-register.html';
    }
    else {
        for (let i = 0; i < storedData.length; i++) {
            if(storedData[i].email == login_email.value && storedData[i].password == login_password.value) {
                alert('Welcome, ' + storedData[i].Stdname + ' you have successfully logged in.');
            }else{
                alert('Your Login is Unsuccessfull')
                window.location.reload();
            }
        }
    }
}