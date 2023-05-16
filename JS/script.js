
const ulElement = document.querySelector("ul");

let result;

for ( let index = 0 ; index < 31 ; index = index + 1){

    if  (index % 3 === 0 && index % 5 === 0) {
        console.log("fizzbuzz");
        result = ("fizzbuzz");
    } else if (index % 5 === 0){
        console.log("buzz");
        result = ("buzz");
    } else if (index % 3 === 0){
        console.log("fizz");
        result = ("fizz");
    } else {
        console.log(index);
        result = index;
    }

    const li = document.createElement("li");
    li.append("You got a " + result);

    ulElement.appendChild(li);
}