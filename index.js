// Write your code here!// Remove the 'main' node from the DOM
const main = document.getElementById('main');
main.remove();


const newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.textContent = "Levi Mutai is the champion";


document.body.append(newHeader);