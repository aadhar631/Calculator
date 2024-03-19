let result = "0"; 
let isPreviousResult = false; 

let buttons = document.querySelectorAll('.num');
let screenEl = document.querySelector(".screen");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerHTML;

        if (result === "" && isOperator(buttonText)) {
            document.querySelector('.screen').innerHTML = "0";
            return; 
        }

        if (isOperator(result.slice(-1)) && isOperator(buttonText)) {
            return;
        }

        if (buttonText === '=') {
            if (isOperator(result.slice(-1))) {
                alert("Cannot evaluate. Last input is an operator.");
                return; 
            }
            isPreviousResult = true;
            result = eval(result); 
        } else {
            
            if (result === "0" || isPreviousResult) {
                result = "";
                isPreviousResult = false;
            }
            if (result === "" && (buttonText === "0" || buttonText === "00")) {
                return;
            }
            if (isPreviousResult) {
                result = "";
                isPreviousResult = false;
            }
            
            if (!isOperator(buttonText) || result !== "") {
                result += buttonText;
            }
        }

        document.querySelector('.screen').innerHTML = result;
    });
});

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

document.querySelector(".clear").addEventListener("click", () => {
    result = "0";
    isPreviousResult = false; 
    screenEl.innerHTML = result;
});

document.querySelector(".cross").addEventListener("click", () => {
    if(screenEl.innerHTML === "0" || result === "0") {
        return;
    }
    result = result.slice(0, -1);
    screenEl.innerHTML = result;
})
