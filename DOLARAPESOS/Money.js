    var dinero1 = document.getElementById("Dinero1");
    var valor = document.getElementById("valorm");
    var calcularBtn = document.getElementById("calcular");
    var limpiarBtn = document.getElementById("limpiar");
    var res = document.getElementById("Money");
    
    calcularBtn.addEventListener("click", function(evento){
        evento.preventDefault();

        var D1= parseFloat(dinero1.value);
        var V= parseFloat(valor.value);

        var total = D1 * V;

        res.innerHTML = "El valor es= "+ + total.toFixed(2);

    });

    limpiarBtn.addEventListener("click", function(evento){
        evento.preventDefault();

        dinero1.value=" ";
        valor.value=" ";
        res.innerHTML=" ";
    })

    