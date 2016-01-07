
function checkInput() {
    var name = document.getElementsByName("name")[0];
    var vorname = document.getElementsByName("vorname")[0];
    var verein = document.getElementsByName("verein")[0];
    var hcoach = document.getElementsByName("hcoach")[0];
    var acoach = document.getElementsByName("acoach")[0];
    var rueckennummer = document.getElementsByName("number")[0];
    var jahr = document.getElementsByName("jahr")[0];
    var valid = true;

    name.style.border = "";
    vorname.style.border = "";
    verein.style.border = "";
    hcoach.style.border = "";
    acoach.style.border = "";
    jahr.style.border = "";
    rueckennummer.style.border = "";


    if(jahr.value < 0 || jahr.value > 2015 || jahr.value == "") {
        jahr.style.border = "solid #FF0000";
        jahr.focus();

        valid = false;
    }
    if(rueckennummer.value < 4 || rueckennummer.value > 15) {
        rueckennummer.style.border = "solid #FF0000";
        rueckennummer.focus();

        valid =  false;
    }

    if( !isMultiWordTextFieldValidre(acoach) | !isMultiWordTextFieldValidre(hcoach) |
        !isMultiWordTextFieldValidre(verein) | !isTextFieldValid(vorname) | !isTextFieldValid(name) ) {
        valid = false;
    }

    if(!valid) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }
    return valid;
}

function isTextFieldValid(field) {
    var regexp = /^[a-zA-Z-äöüÄÖÜéàèÉÈ]+$/;

    if(!field.value.match(regexp)) {
        field.style.border = "solid #FF0000";
        field.focus();

        return false;
    }
    return true;
}

function isMultiWordTextFieldValidre(field) {
    var regexp = /^[a-zA-Z-äöüÄÖÜéàèÉÈ ]+$/;

    if(!field.value.match(regexp)) {
        field.style.border = "solid #FF0000";
        field.focus();

        return false;
    }
    return true;
}