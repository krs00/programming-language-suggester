// Get DOM nodes
// Selects entire form
const form = document.getElementById("lang-form")
//Selects <p> tag for display results
const display = document.getElementById("display")


// Function will determine value for each answer 
function handleSelect(event) {
    event.preventDefault();

    const questionColor = form.querySelector('input[name=color]:checked').value;
    console.log(questionColor) 
};





// adds event listener on submit of form, triggers handleSelect function
document.getElementById("lang-form").addEventListener("submit", handleSelect)

