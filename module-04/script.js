// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/
(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    console.log('--- Coursera Assignment ---');
    for (var i = 0; i < names.length; i++) {
        var firstLetter = startsWithJ(names[i]);
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

    console.log('--- Array.prototype.map ---');
    var mappedArray = names.map(mapCallBack);
    mappedArray.forEach(log);

    console.log('--- Array.prototype.reduce ---');
    var reducedArray = names.reduce(reduceCallBack, {hello: [], bye: []});
    reducedArray.hello.forEach(log);
    reducedArray.bye.forEach(log);

    function startsWithJ(name) {
        return name.charAt(0).toLocaleLowerCase().startsWith("j");
    }

    function log(value) {
        console.log(value);
    }

    function mapCallBack(name) {
        return startsWithJ(name) ? byeSpeaker.speakSimple(name) : helloSpeaker.speakSimple(name);
    }

    function reduceCallBack(accumulator, currentValue) {
        if (startsWithJ(currentValue)) {
            accumulator.bye.push(byeSpeaker.speakSimple(currentValue))
        } else {
            accumulator.hello.push(helloSpeaker.speakSimple(currentValue))
        }

        return accumulator;
    }
})();
