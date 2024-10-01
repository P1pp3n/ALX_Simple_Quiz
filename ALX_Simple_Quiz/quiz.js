function checkAnswer() {
    // Function body

    //sets the correct answer
    let correctAnswer="4";
    //gets the value of the selected answer
    userAnswer=document.querySelector('input[name="quiz"]:checked').value;
    //compare user's answer with the correct answer
    if(userAnswer===correctAnswer){
        document.getElementById("feedback").textContent="Correct! Well done.";
    }else{
        document.getElementById("feedback").textContent="That's incorrect. Try again!";
    }
}
//add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);