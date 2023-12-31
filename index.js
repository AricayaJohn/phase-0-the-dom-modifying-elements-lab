// Write your code here!
//create a dom and remove
document.querySelector("main#main").remove();

//create a new header that has <h1> node
const newHeader = document.createElement("h1");

//create in for newHeader
newHeader.id = "victory"

//creating <h1> node to have "Your-Name is the Champion"

newHeader.textContent = "John is the champion"
