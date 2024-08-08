function greet(name) {
    alert('Hello, ' + name + '!');
}

greet('Harshal');

document.getElementById('heading').innerText = 'Hello, JavaScript!';

let fruits = ['Apple', 'Banana', 'Cherry'];

for (let i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}

let age = 18;
if (age >= 18) {
    alert('You are an adult.');
} else {
    alert('You are a minor.');
}

let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    default:
        dayName = 'Unknown';
}
alert('Today is ' + dayName);