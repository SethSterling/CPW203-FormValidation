window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    var msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form";
    msgHeading.setAttribute("class", "message");
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    setTimeout(function () {
        msgHeading.remove();
    }, 5000);
    resetErrorMessages();
    isTextPresent("first-name", "First Name is required");
    isTextPresent("last-name", "Last Name is required");
    checkValidDate();
}
function checkValidDate() {
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidateDate(dob)) {
        var errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "mm/dd/yyyy";
    }
}
function isValidateDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
