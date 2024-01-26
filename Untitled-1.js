function clearDisplay() {
    document.getElementById('display').value = '';
}
function backspace() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function appendChar(char) {
    document.getElementById('display').value += char;
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);

        if (!isFinite(result) || isNaN(result)) {
            throw new Error("Invalid input or division by zero");
            
        }
        document.getElementById('display').value = result;

        
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'Delete':
            clearDisplay();
            break;
        case 'Backspace':
            backspace();
            break;
        case '.':
            appendChar('.');
            break;
        case '/':
            appendChar('/');
            break;
        case '7':
            appendChar('7');
            break;
        case '8':
            appendChar('8');
            break;
        case '9':
            appendChar('9');
            break;
        case '*':
            appendChar('*');
            break;
        case '4':
            appendChar('4');
            break;
        case '5':
            appendChar('5');
            break;
        case '6':
            appendChar('6');
            break;
        case '-':
            appendChar('-');
            break;
        case '1':
            appendChar('1');
            break;
        case '2':
            appendChar('2');
            break;
        case '3':
            appendChar('3');
            break;
        case '+':
            appendChar('+');
            break;
        case '0':
            appendChar('0');
            break;
        case 'Enter':
            event.preventDefault(); // prevent default behavior
            calculate();
            break;
        default:
            break;
    }
});