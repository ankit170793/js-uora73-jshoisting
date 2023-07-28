// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Hoisting Example</h1>`;

//for function
getName();
function getName(){
  console.log('hello ankit')
}

//for arrow function
getName2();
var getName2 = () => {
  console.log('hello arrow function')
}



//for variable
console.log(a);
var a = 17;

