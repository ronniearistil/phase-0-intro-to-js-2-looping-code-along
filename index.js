// Code your solutions in this file

// 1. Basic for loop example
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

// 2. Function using for loop - wrapping gifts
const gifts = ["teddy bear", "drone", "doll"];

function wrapGiftsForLoop(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGiftsForLoop(gifts);

// 3. writeCards function with a for loop
function writeCards(names, event) {
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    
    return messages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

// 4. Function using while loop - wrapping gifts
function wrapGiftsWhileLoop(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

// Uncomment the line below to test the while loop version
// wrapGiftsWhileLoop(gifts);

// 5. countDown function with a while loop
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

countDown(10);


