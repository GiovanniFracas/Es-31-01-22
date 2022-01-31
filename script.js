var valore1;
var valore2;
var result;
var result2;
var risultato;
var numeroRand;
var confronto;
var confronto2;
$(function () {
    numeroRand = Math.random() * 100;
    $('#Restart').hide();
    $('#verifica').on('click', function () {
        $('#Restart').show();
        $('#inizio').html('il numero da indovinare era: ' + numeroRand.toFixed(0));
        valore1 = Number($('#p1').val());
        valore2 = Number($('#p2').val());
        if (valore1 != 0 && valore2 != 0) {
            result = valore1;
            result2 = valore2;
            if (valore1 < 0) {
                result = valore1 * -1;
            }
            if (valore2 < 0) {
                result2 = valore2 * -1;
            }
        }
        confronto = result - numeroRand;
        confronto2 = result2 - numeroRand;
        console.log('primo confronto ' + confronto);
        console.log('primo confronto ' + confronto2);
        if (confronto < 0) {
            confronto *= -1;
        }
        if (confronto2 < 0) {
            confronto2 *= -1;
        }
        if (confronto == numeroRand) {
            $('#finale').html('ha vinto il giocatore 1');
        }
        if (confronto2 == numeroRand) {
            $('#finale').html('ha vinto il giocatore 2');
        }
        if (confronto < confronto2 && confronto2 != numeroRand && confronto != numeroRand) {
            console.log('nessuno ha indovinato ma ha vinto il giocatore 1');
            $('#finale').html('nessuno ha indovinato ma il giocatore 1 si è avvicinato di più');
        }
        if (confronto > confronto2 && confronto2 != numeroRand && confronto != numeroRand) {
            console.log('nessuno ha indovinato ma ha vinto il giocatore 2');
            $('#finale').html('nessuno ha indovinato ma il giocatore 2 si è avvicinato di più');
        }
        console.log(numeroRand);
    });
});
