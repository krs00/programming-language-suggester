// Get DOM nodes
// Selects ID for each form section
const colorForm = document.getElementById("question-color")
const sandwichForm = document.getElementById("question-sandwich")
const movieForm = document.getElementById("question-movie")
const dessertForm = document.getElementById("question-dessert")
const bookForm = document.getElementById("question-book")

// Function will determine value for each answer 
function handleSelect(event) {

    // STOPS PAGE FROM REFRESHING
    event.preventDefault();

    // GETS VALUE OF COLOR QUESTION 
    const questionColor = colorForm.querySelector('input[name=color]:checked').value;
    // GETS VALUE OF SANDWICH QUESTION 
    const questionSandwich = sandwichForm.querySelector('input[name=sandwich]:checked').value;
    // GETS VALUE OF MOVIE QUESTION 
    const questionMovie = movieForm.querySelector('input[name=movie]:checked').value;
    // GETS VALUE OF DESSERT QUESTION 
    const questionDessert = dessertForm.querySelector('input[name=dessert]:checked').value;
    // GETS VALUE OF BOOK QUESTION 
    const questionBook = bookForm.querySelector('input[name=book]:checked').value;

    // INITIALIZE SCORE FOR RESULTS
    let javaScore = 0;
    let pythonScore = 0;
    let cSharpScore = 0;

    // INCREMENT SCORES FOR EACH QUESTION
    // QUESTION #1 COLOR
    if (questionColor === "JAVA") {
        javaScore++;
    } else if (questionColor === "PYTHON") {
        pythonScore++;
    } else if (questionColor === "C#") {
        cSharpScore++;
    };

    // QUESTION #1 COLOR
    if (questionColor === "JAVA") {
        javaScore++;
    } else if (questionColor === "PYTHON") {
        pythonScore++;
    } else if (questionColor === "C#") {
        cSharpScore++;
    };

    // QUESTION #2 SANDWICH
    if (questionSandwich === "JAVA") {
        javaScore++;
    } else if (questionSandwich === "PYTHON") {
        pythonScore++;
    } else if (questionSandwich === "C#") {
        cSharpScore++;
    };

       // QUESTION #3 MOVIE
       if (questionMovie === "JAVA") {
        javaScore++;
    } else if (questionMovie === "PYTHON") {
        pythonScore++;
    } else if (questionMovie === "C#") {
        cSharpScore++;
    };

       // QUESTION #4 DESSERT
       if (questionDessert === "JAVA") {
        javaScore++;
    } else if (questionDessert === "PYTHON") {
        pythonScore++;
    } else if (questionDessert === "C#") {
        cSharpScore++;
    };

       // QUESTION #5 BOOK
       if (questionBook === "JAVA") {
        javaScore++;
    } else if (questionBook === "PYTHON") {
        pythonScore++;
    } else if (questionBook === "C#") {
        cSharpScore++;
    };

    // Selects Display Node
    const displayTxt = document.getElementById("display")
    // GET FIRST NAME AND CAPITALIZE FIRST LETTER
    const firstName = document.getElementById("fname").value.toLowerCase()
    const Name = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    // OUTPUT RESULTS TO SCREEN 
    if (javaScore > pythonScore && javaScore > cSharpScore) {
        displayTxt.innerText = `${Name}, you should learn Java!`
    } else if (pythonScore > javaScore && pythonScore > cSharpScore) {
        displayTxt.innerText = `${Name}, you should learn Python!`
    } else if (cSharpScore > pythonScore && cSharpScore > javaScore) {
        displayTxt.innerText = `${Name}, you should learn C#!`
    }

    // IF THERE ARE ANY EQUAL RESULTS
    if (javaScore === pythonScore) {
        displayTxt.innerText = `${Name}, you should learn Java!`
    } else if (javaScore === cSharpScore) {
        displayTxt.innerText = `${Name}, you should learn C#!`
    } else if (pythonScore === cSharpScore) {
        displayTxt.innerText = `${Name}, you should learn Python!`
    }
};

// FUNCTION TO CLEAR DISPLAY

function Clear(){
    document.getElementById("display").innerText = "" 
}






// adds event listener on submit of form, triggers handleSelect function
document.getElementById("lang-form").addEventListener("submit", handleSelect)

// RESET BUTTON CLEARS DISPLAY OUTPUT
document.getElementById("reset-btn").addEventListener("click", Clear)

