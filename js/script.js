// Get DOM nodes
// Selects ID for each form section
const colorForm = document.getElementById("question-color")
const sandwichForm = document.getElementById("question-sandwich")
const movieForm = document.getElementById("question-movie")
const dessertForm = document.getElementById("question-dessert")
const bookForm = document.getElementById("question-book") 
//Selects <p> tag for display results
const display = document.getElementById("display")


// Function will determine value for each answer 
function handleSelect(event) { 
    // STOPS PAGE FROM REFRESHING
    event.preventDefault();

    // GETS VALUE OF COLOR QUESTION 
    const questionColor = colorForm.querySelector('input[name=color]:checked').value;
    console.log(questionColor)
    // GETS VALUE OF SANDWICH QUESTION 
    const questionSandwich = sandwichForm.querySelector('input[name=sandwich]:checked').value;
    console.log(questionSandwich) 
    // GETS VALUE OF MOVIE QUESTION 
    const questionMovie = movieForm.querySelector('input[name=movie]:checked').value;
    console.log(questionMovie) 
    // GETS VALUE OF DESSERT QUESTION 
    const questionDessert = dessertForm.querySelector('input[name=dessert]:checked').value;
    console.log(questionDessert)
    // GETS VALUE OF BOOK QUESTION 
    const questionBook = bookForm.querySelector('input[name=book]:checked').value;
    console.log(questionBook)

    // INITIALIZE SCORE FOR RESULTS
    let javaScore = 0;
    let pythonScore = 0;
    let cSharpScore = 0;

    // INCREMENT 

    if (questionColor === "JAVA") {
        javaScore++;
    }



};







// adds event listener on submit of form, triggers handleSelect function
document.getElementById("lang-form").addEventListener("submit", handleSelect)

