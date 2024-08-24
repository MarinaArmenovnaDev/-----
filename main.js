let isWinner = false;

let userChoise;
let computerChoise;

const words = ["камень", "ножницы", "бумага"]
let count = 0

while ( count < 3){
    isWinner = false
    count = count + 1
    console.log(count , isWinner);
    
    document.write(count)


while (isWinner === false){
    userChoise = prompt("выберете чем ходить: \"камень\", \"ножницы\" или \"бумага\"")

    if (userChoise === "камень" || userChoise === "ножницы" || userChoise === "бумага"){
        const randomIndex = Math.floor (Math.random() * 3)
        computerChoise = words [randomIndex]
        document.write(userChoise, computerChoise);

        if (userChoise === computerChoise) {
            alert ("Ничья! давай еще раз")
        } else if (
            (userChoise === "ножницы" && computerChoise === "бумага") ||
            (userChoise === "бумага" &&  computerChoise === "камень") ||
            (userChoise === "камень" &&  computerChoise === "ножницы")
        ){
            alert("Ты выиграл!!!")
            isWinner = true;
        } else {
            alert ("Ты проиграл:(((")
            isWinner = true;
        }

    } else {
        alert ("Вы ввели некорректное значение!")
    }
}
}