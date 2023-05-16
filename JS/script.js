
const ulElement = document.querySelector("ul");

let result;

let li = document.createElement("li");

for ( let index = 0 ; index < 31 ; index = index + 1){

    if  (index % 3 === 0 && index % 5 === 0) {
        console.log("fizzbuzz");
        result = ("fizzbuzz");
        li.classList.add("green");
    } else if (index % 5 === 0){
        console.log("buzz");
        result = ("buzz");
        li.classList.add("blue");
    } else if (index % 3 === 0){
        console.log("fizz");
        result = ("fizz");
        li.classList.add("yellow");
    } else {
        console.log(index);
        result = index;
    }
    

    li.append("You got a " + result);

    ulElement.appendChild(li);
}