// declare variables
let student_name = document.getElementById('student_name');
let student_email = document.getElementById('student_email');
let student_phone = document.getElementById('student_phone');
let student_state = document.getElementById('student_state');
let student_school = document.getElementById('student_school');
let student_password = document.getElementById('student_password');
let student_address = document.getElementById('student_address');
let stdRegisterBtn = document.getElementById('stdRegisterBtn');



// create a class method for school registration

class Student {
    constructor(Stdname, email, phone, state, school, password, address) {
        this.Stdname = Stdname;
        this.email = email;
        this.phone = phone;
        this.state = state;
        this.school = school;
        this.password = password;
        this.address = address;
    }
}

// get the school data that is now in the localstorage via the school registration done.
// form validation
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
}
// validation();

let registeredSchData = JSON.parse(localStorage.getItem('schoolRegister'));
// console.log(registeredSchData)

// create an option element under the select element so that you can append the names of the registered schools on the students registration form.

registeredSchData.forEach(
    function selectSchool(data) {
        let option = document.createElement('option');
        option.value = data.Sname;
        option.innerHTML = data.Sname;
        student_school.appendChild(option);
    }
);

// get the registered students data from the local storage in an array format.

let studentRegisterArr = JSON.parse(localStorage.getItem('registeredStudents')) || [];


stdRegisterBtn.onclick = (e) => {
    // alert('work')
    e.preventDefault();
    validation();

    
    if(student_name.value != "" && student_email.value != "" && student_phone.value != "" && student_state.value != "" && student_school.value != "" && student_password.value != "" && student_address.value != "") {
        let studentDetails = new Student(student_name.value, student_email.value, student_phone.value, student_state.value, student_school.value, student_password.value, student_address.value);
        console.log(studentDetails);
        studentRegisterArr.push(studentDetails);
        console.log(studentRegisterArr);
        
        // set/push student details to local storage so that the student can login on the login page.

        localStorage.setItem('studentRegister', JSON.stringify(studentRegisterArr));
        // window.location.reload();   
    }
    else{
        alert('Please, Kindly fill in your details');
    }
}





// let loginDetails = registeredSchData ? JSON.parse : [];
