const pw_first = document.querySelector("#password_first");
const pw_second = document.querySelector("#password_second");

pw_first.addEventListener("input", function (event) {
    if (pw_first.validity.patternMismatch) {
        const currentValue = pw_first.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;
        let result = "";

        if (regExpCap.test(currentValue)) {
            result += '';
        }
        else {
            result += `Missing at least 1 capital letter.`;
        }
    }
})