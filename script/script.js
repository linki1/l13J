let hours = +prompt('введите часы')
function callsek(hours) {
    while (!hours || isNaN(hours)) {
        alert('вы ввели не правельное число')
        hours = +prompt('введите часы');
    }

    let sum = Math.floor(hours * 3600);
    return sum;
}
alert(`в ${hours} ${(hours == 1) ? "часе" : "часах"}  ${callsek(hours)} секунд`);