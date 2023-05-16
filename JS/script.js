
const ulElement = document.querySelector("ul");

let result;

for ( let index = 0 ; index < 31 ; index = index + 1){
    
    let li = document.createElement("li");

    if  (index % 3 === 0 && index % 5 === 0) {
        console.log("fizzbuzz");
        result = ("fizzbuzz");
        colour = "green";
    } else if (index % 5 === 0){
        console.log("buzz");
        result = ("buzz");
        colour = "blue";
    } else if (index % 3 === 0){
        console.log("fizz");
        result = ("fizz");
        colour = "yellow";
    } else {
        console.log(index);
        result = index;
        colour = "black"
    }

    li.classList.add(colour)

    li.append("You got a " + result);

    ulElement.appendChild(li);
    
}