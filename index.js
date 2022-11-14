
/*
//Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng. Anropa funktion och
// console.log svaret. Tips! Du kan skriva .length på en variabel som är en sträng för att få längden.
function langd(str) {
    return str.length;
}
console.log(langd('Hello'));
*/

/*
// Skriv en funktion som plockar ut året från en sträng i datumformat. Använd 
// substring(startIndex, endIndex) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring. 
// Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken 
// och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.

function year(datum) {
    if(datum.length == 8){
        return  19 + datum.substring(0, 2);
    }else{ return datum.substring(0, 4); }
}
console.log(year('1099-02-01'))
*/

/*
// Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en operator 
// d.v.s antingen '+', '-', '/', '*'. Utför beräkningen och returnera summan och skriv ut. Det ska 
// enbart gå att skicka med siffror (förutom operanden som är en sträng då) och varje operation ska 
// vara sin egen funktion. Tips! Här kan typeof vara bra att använda

function add(int1, int2) {
    return int1 + int2;
}
function divide(int1, int2) {
    if(int2 != 0){return int1 / int2;} 
    else{
        return undefined;
    }
}
function multiplay(int1, int2) {
    return int1* int2;
}
function subtration(int1, int2) {
    return int1 - int2;
}
function calculatur(int1, int2, opera) {
    switch(opera){
        case '+':
            return add(int1, int2);
        case '-':
            return subtration(int1, int2);
        case '*':
            return multiplay(int1, int2);
        case '/':
            return divide(int1, int2);
        default:
            return 'Sommthing wents wrong!'
    }
}
console.log(calculatur(2, 3, '*'));
*/

/*
// Gör ett sten-sax-påse spel. Där användaren matar in sten, sax eller påse som en sträng. 
// Sedan slumpas "datorns" drag och efter det jämför med if-satser vem som vann. Tips! Använd 
// Math.random() för att slumpa. Math.round(Math.random() * 2) //Slumpar ett tal mellan 0-2
// Level up
// Lägg till så poäng räknas för varje vinst, först till tre vinner!

function game(player) {
    let ssp=['sten', 'sax', 'påse'];
    let index = Math.round(Math.random() * 2)
    if(player == 'sten' && ssp[index] == 'påse'){return `dator ${ssp[index]} van mot ${player}`}
    else if(player == 'sten' && ssp[index] == 'sax'){return `du ${player} van mot ${ssp[index]}`}
    else if(player == 'påse' && ssp[index] == 'sax'){return `dator ${ssp[index]} van mot ${player}`}
    else if(player == 'påse' && ssp[index] == 'sten'){return `du ${player} van mot ${ssp[index]}`}
    else if(player == 'sax' && ssp[index] == 'påse'){return `du ${player} van mot ${ssp[index]}`}
    else if(player == 'sax' && ssp[index] == 'sten'){return `dator ${ssp[index]} van mot ${player}`}
    else{ return `oavgjort ${ssp[index]} = ${player}`}
}
console.log(game('sten'));
*/
