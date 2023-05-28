let countDownTimer = document.getElementById('countDownTimer');

// get the date and time using the Date method so you can manipulate to achieve your countdown
const cdTimer = () => {
    let closeDate = new Date("May 31, 2023 23:59:00");
    let getTime = closeDate.getTime();
    let today = new Date();
    let now = today.getTime();

    let diff_in_time = getTime - now;

    let day = Math.floor((diff_in_time / (1000 * 60 * 60 * 24)));
    let hour = Math.floor((diff_in_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diff_in_time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diff_in_time % (1000 * 60)) / (1000));

    countDownTimer.innerHTML = day + 'd:' + hour + 'h:' + mins + 'm:' + secs + 's';
    // console.log(countDownTimer.innerHTML)
}
// cdTimer();
// setInterval(cdTimer, 1000)

// let applyNow = document.getElementById('applyNow')

// applyNow.onclick = () => {
//     let lateEntryDate = new Date("May 29, 2023 23:59:00");
//     let lateEntryTime = lateEntryDate.getTime();

//     if (now >= lateEntryTime) {
//         alert('you don late, you gat pay 50K fine for late registration')
//     }
//     else {
//         window.location.href = 'school-register.html';
//     }
// }