// declare variables
let school_name = document.getElementById('school_name');
let school_email = document.getElementById('school_email');
let school_phone = document.getElementById('school_phone');
let school_state = document.getElementById('school_state');
let school_address = document.getElementById('school_address');
// let password = document.getElementById('password');
let schRegisterBtn = document.getElementById('schRegisterBtn');


// form validation
function validation() {
    let input = document.querySelectorAll(".input");
    for (i = 0; i < input.length; i++) {
        if (input[i].value == "" || input[i].value == null) {
            input[i].nextElementSibling.innerHTML = input[i].previousElementSibling + " is required";
        }
        else {
            input[i].nextElementSibling = "";
        }
    }
}

// create a class method for school registration

class School {
    constructor(Sname, email, phone, state, address) {
        this.Sname = Sname;
        this.email = email;
        this.phone = phone;
        this.state = state;
        this.address = address;
    }

    // login(Sname, email) {
    //     if(Sname == this.Sname && email == this.email) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // , school_phone.value, school_state.value, school_address.value
    // && school_phone.value != "" && school_state.value != "" && school_address.value != ""
}

let schoolRegisterArr = JSON.parse(localStorage.getItem('schoolRegister')) || [];

schRegisterBtn.onclick = (e) => {
    e.preventDefault();
    alert('work')
    validation();

    if(school_name.value != "" && school_email.value != "") {
        let schoolDetails = new School(school_name.value, school_email.value);

        // console.log(schoolDetails);
        schoolRegisterArr.push(schoolDetails);
        // console.log(schoolRegisterArr);
        // set/push details to local storage
        localStorage.setItem('schoolRegister', JSON.stringify(schoolRegisterArr));
        window.location.reload();   
    }
    else{
        alert('Please, Kindly fill in your details');
    }
}