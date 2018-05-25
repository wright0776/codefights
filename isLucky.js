// isLucky
// =======

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

// my answer:

function isLucky(n) {
    const first = n.toString().slice(0,n.toString().length/2).split("")
    let firstNum = 0;
    for(i = 0; i < first.length; i++){
        firstNum += Number(first[i]);
    }
    const second = n.toString().slice(n.toString().length/2, n.toString().length).split("")
    let secondNum = 0;
    for(i = 0; i < second.length; i++){
        secondNum += Number(second[i]);
    }
    return firstNum === secondNum;
}

// highest voted JavaScript answer: 

function isLucky(n) {
    var a=(n+"").split(""),half=a.length/2,l=0,r=0
    while(a.length>half) r+= +a.pop()
    while(a.length) l+= +a.pop()
    return l===r
  }
