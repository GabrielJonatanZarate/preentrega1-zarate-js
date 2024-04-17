let numeroAleatorio = parseInt((Math.random() * 9) + 1);

alert("Bienvenido al juego de la suerte.")

for (let i = 1; i <= 3; i++) {
    const numeroElegido = parseInt(prompt("Ingrese un numero elegido entre 1 y 10"))
    if (numeroElegido === numeroAleatorio) {
        alert("Felicidades! Acertaste el numero ganador")
        break;
    } else if (i !== 3) {
        alert("Ese numero no es el champion. Te quedan " + (3 - i) + " Intentos.")
        if (numeroElegido > numeroAleatorio) {
            alert("PISTA: Te pasaste de rosca")
        } else {
            alert("PISTA: Te falto polenta")
        }
    } else {
        alert("Ese numero no es el champion. No te quedas intentos. Perdiste")
        alert("El numero que tenias que adivinar ,era el:" + numeroAleatorio)

    }
}

