function checkAnswer() {
    // Function body

    //sets the correct answer
    let correctAnswer = "4";
    //gets the value of the selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    if(userAnswer.value === correctAnswer){
        document.getElementById("feedback").textContent="Correct! Well done.";
    }else{
        document.getElementById("feedback").textContent="That's incorrect. Try again!";
    }
}
//add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
