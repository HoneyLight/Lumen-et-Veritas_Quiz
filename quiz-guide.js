let continueBtn = document.getElementById('continueBtn');

continueBtn.onclick = () => {
    let quizDate = new Date("June 01, 2023 10:00:00");
    let quizTime = quizDate.getTime();
    let userVisitDate = new Date();
    let userVisitTime = userVisitDate.getTime();
    // console.log(quizDate)
    // console.log(userVisitTime);
    // console.log(quizTime)
    // console.log(userVisitDate);
    if(userVisitTime < quizTime) {
        alert("you can't write this quiz now")
    }
    else{
        window.location.href = 'quiz.html';
    }
}



