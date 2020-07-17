const input = document.querySelector('input');
const btn = document.querySelector('button');
const resultDiv = document.querySelector('.result')



const countFactorial = function(number) {
    let result = 0;
    number = Math.abs(number);
    // console.log(number);
    if (number == 0) {
        result = 1;
    } else {
        result = number;
        for (let i = number - 1; i > 0; i--) {
            result *= i;

        }
    }
    return resultDiv.textContent = `Silnia liczby ${number} wynosi: ${result}`;
}
const checkInputValue = function() {
    if (input.value) {
        countFactorial(parseInt(input.value));
    }

}
btn.addEventListener('click', checkInputValue)