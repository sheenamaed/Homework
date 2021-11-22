let count = 1;

while (count <=100){
    if (count % 3 === 0 && count % 5 === 0) {
        console.log('Fizzbuzz');
    } else if (count % 3 === 0) {
    console.log('Fizz');
    } else if (count % 5 === 0) {
    console.log('Buzz');
    } else {
         console.log(count);
    }
    count = count + 1;
} 

//from -50 to 50
let count = -50;

while (count <=50){
    if (count % 3 === 0 && count % 5 === 0) {
        console.log('Fizzbuzz');
    } else if (count % 3 === 0) {
    console.log('Fizz');
    } else if (count % 5 === 0) {
    console.log('Buzz');
    } else {
         console.log(count);
    }
    count = count + 1;
} 
