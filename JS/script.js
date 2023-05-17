
// add element in html
const ulElement = document.querySelector("ul");

// inizialise variables
let result;

let message;

let colour;

let li;

// start circle
for ( let index = 1 ; index < 101 ; index = index + 1){
    
    // create li in html
    li = document.createElement("li");

    // assign different values for different case
    if  (index % 3 === 0 && index % 5 === 0) {
        message = ("fizzbuzz");
        result = ("fizzbuzz");
        colour = "green";
    } else if (index % 5 === 0){
        message = ("buzz");
        result = ("buzz");
        colour = "blue";
    } else if (index % 3 === 0){
        message = ("fizz");
        result = ("fizz");
        colour = "yellow";
    } else {
        message = (index);
        result = index;
        colour = "black"
    }

    // check results on console
    console.log(message);

    // assign content to li
    li.append("You got a " + result);

    li.classList.add(colour);

    // integrate li
    ulElement.appendChild(li);
    
}