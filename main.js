var valorDoDolar = 0.2;
var valorDoEuro = 0.18;
var valorDoBitcoin = 0.0000085;

function enviar() {
    var valorReal = document.getElementById("valorPassado").value;
    var valorEmDolar = valorReal * valorDoDolar;
    var valorEmEuro = valorReal * valorDoEuro;
    var valorEmBitcoin = valorReal * valorDoBitcoin;
    alert(
        "Aqui está o resultado: " +
        valorEmDolar.toFixed(2) +
        " Dólares / " +
        valorEmEuro.toFixed(2) +
        " Euros / " +
        valorEmBitcoin +
        " BTC"
    );
    document.getElementById("valorPassado").value = "";
}
