let stdDetails = document.getElementById('stdDetails');
let storedData = JSON.parse(localStorage.getItem('studentRegister'));
    console.log(storedData)
  
        for (let i = 0; i < storedData.length; i++) {
            let storedDataDetails = `
                <div class="name">
                    <p>
                    <h6>Name:</h6> ${storedData[i].Stdname}</p>
                </div>
                <div class="quiz-time">
                    <p>
                    <h6>Time:</h6>00:00</p>
                </div>
                <div class="school">
                    <p>
                    <h6>School:</h6>${storedData[i].school}</p>
                </div>
            `;
            stdDetails.innerHTML = storedDataDetails;   
        };