(function () {
    var byeSpeaker = {};

    var speakWord = "Good Bye";

    byeSpeaker.speak = function (name) {
        console.log(byeSpeaker.speakSimple(name));
    };

    byeSpeaker.speakSimple = function (name) {
        return speakWord + " " + name;
    };

    window.byeSpeaker = byeSpeaker;

})();
