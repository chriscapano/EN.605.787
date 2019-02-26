(function () {
    var helloSpeaker = {};

    var speakWord = "Hello";

    helloSpeaker.speak = function (name) {
        console.log(helloSpeaker.speakSimple(name));
    };

    helloSpeaker.speakSimple = function (name) {
        return speakWord + " " + name;
    };

    window.helloSpeaker = helloSpeaker;
})();
