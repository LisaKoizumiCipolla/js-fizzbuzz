
const ulElement = document.querySelector("ul");

let result;

let message;

let colour;

for ( let index = 0 ; index < 31 ; index = index + 1){
    
    let li = document.createElement("li");

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

    console.log(message);

    li.classList.add(colour)

    li.append("You got a " + result);

    ulElement.appendChild(li);
    
}