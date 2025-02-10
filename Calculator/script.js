let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/%/g, '/100'));
    } catch (error) {
        display.value = "Error";
        setTimeout(() => clearDisplay(), 1500);
    }
}
