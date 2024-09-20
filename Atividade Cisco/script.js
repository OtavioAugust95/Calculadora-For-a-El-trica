function calcularq1(){
    var n1 = parseFloat(document.getElementById('n1').value);

    var resultado1 = n1 * 1.6 * (10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * (-1));

    document.getElementById('result1').innerText = resultado1.toExponential(2);

}

function calcularq2(){
    var n2 = parseFloat(document.getElementById('n2').value);

    var resultado2 = n2 * 1.6 * (10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * (-1));

    document.getElementById('result2').innerText = resultado2.toExponential(2);

}

function calcularF(){
    var q1 = parseFloat(document.getElementById('q1').value);
    var Q2 = parseFloat(document.getElementById('Q2').value);
    var r = parseFloat(document.getElementById('r').value);

    var resultado3 = (9 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10) * (q1 * Q2) / (r * r);

    document.getElementById('result3').innerText = resultado3.toExponential(2);

}