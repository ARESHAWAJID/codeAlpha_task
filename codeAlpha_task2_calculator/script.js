var string = "";
var buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        manipulation(e);
    });
}

document.addEventListener("keydown", function (e) {
    if (["+", "-", "*", "/", "Enter", "Backspace"].includes(e.key)) {
        e.preventDefault(); // stop browser default behavior for these keys
    }
    manipulation(e);
});

function manipulation(e) {
    let value;

    if (e.type === "click") {
        value = e.target.innerHTML;
    }
    if (e.type === "keydown") {
        value = e.key;
    }

    if (value === "=" || value === "Enter") {
        // Don't evaluate if string is empty or ends with an operator
        if (string === "" || ["+", "-", "*", "/"].includes(string[string.length - 1])) return;
        try {
            string = eval(string).toString();
        } catch (err) {
            string = "Error";
        }
    }

    else if (value === "C")  {
        string = "";
    }

    else if (value === "Backspace" || value === "⌫") {
        // If current display is "Error", clear fully
        if (string === "Error") {
            string = "";
        } else {
            string = string.slice(0, string.length - 1);
        }
    }

    else if (value === ".") {
        // Allow dot only if string is non-empty and last char isn't an operator or dot
        if (string === "" || ["+", "-", "*", "/"].includes(string[string.length - 1])) return;
        if (!hasDotInCurrentNumber(string)) {
            string += ".";
        }
    }

    else if (["+", "-", "*", "/"].includes(value)) {
        if (string === "" || string === "Error") return;
        if (["+", "-", "*", "/"].includes(string[string.length - 1])) {
            string = string.slice(0, string.length - 1);
        }
        string += value;
    }

    else if (!isNaN(value) && value !== " " && value !== "") {
        if (string === "Error") {
            string = "";
        }
        string += value;
    }

    document.querySelector("input").value = string;
}

function hasDotInCurrentNumber(input) {
    let parts = input.split(/[\+\-\*\/]/);
    let currentNumber = parts[parts.length - 1];
    return currentNumber.includes(".");
}