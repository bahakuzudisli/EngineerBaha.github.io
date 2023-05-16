$(document).ready(function() {
    $("#birthday").datepicker();
});
var languages = ["Python","Kotlin","PHP","JavaScript","Asp","Java","Swift",".Net","C","C#","C++","Go","NodeJS"];

$(document).ready(function() {
    $("#birthday").datepicker();
    $("#programmingLanguage").autocomplete({
        source: languages
    });
});
