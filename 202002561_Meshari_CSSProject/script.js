//validation
document.addEventListener("DOMContentLoaded", function () {
    const contact = document.querySelector("#contactForm");
    const feedback = document.querySelector("#formFeedback");

    contact.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.querySelector("#name").value.trim();
        const userEmail = document.querySelector("#email").value.trim();

        //empty checking
        if (userName.length === 0 || userEmail.length === 0) {
            feedback.textContent = "all we need is your name and email.";
            feedback.style.color = "red";
            return;
        }

        //format checker
        if (userEmail.indexOf("@") < 0 || userEmail.indexOf(".") < 0) {
            feedback.textContent = "this email seems to be not valid.";
            feedback.style.color = "red";
            return;
        }

        //passing response
        feedback.textContent = "thank you for contacting us.";
        feedback.style.color = "green";
        contact.reset();
    });
});

//quiz
document.addEventListener("DOMContentLoaded", function () {
    const quiz = document.querySelector("#quizForm");
    const answerFeedback = document.querySelector("#quizFeedback");

    if (quiz !== null) {
        quiz.addEventListener("submit", function (event) {
            event.preventDefault();

            const picked = document.querySelector("#q1").value;

            if (picked === "correct") {
                answerFeedback.textContent = "Correct! Great job 🙌";
                answerFeedback.style.color = "green";
            } else if (picked === "") {
                answerFeedback.textContent = "pick an answer before submitting.";
                answerFeedback.style.color = "red";
            } else {
                answerFeedback.textContent = "try again.";
                answerFeedback.style.color = "red";
            }
        });
    }
});
