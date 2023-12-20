var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = 'it-IT';

var Textbox = $("#textarea");
var instructions = $("#instructions");

var Content = "";

recognition.continuous = true;

recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;
    Content += transcript;
    Textbox.val(Content);
};
$("#start").on("click", function (e) {
    if($(this).text() == "Click here to Stop Recording") {
        $(this).html("Click here to Start Recording");
        $("#instructions").html("");
        recognition.stop();
    }
    else {
        $(this).html("Click here to Stop Recording");
        $("#instructions").html("Try Speaking, Voice Recognition is On, Contetns will be displayed below");
      if(Content.length) {
        Content += " ";
      }  
      recognition.start();

    }
});
Textbox.on("input", function () {
    Content = $(this).val();
});