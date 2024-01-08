function insert(num){
    var numero = document.getElementById('resultado').innerHTML;

    if(numero == 'Digite algo' || numero == 'Erro de formatação!!'){
        numero = ""
    }
    if(num === '*' || num === "/"){
        if(!numero){
            num = ''
        }
    }
    document.getElementById('resultado').innerHTML = (numero + num);

    if(numero.length === 20){
        alert('Número máximo de caracteres')
        document.getElementById('resultado').innerHTML = numero;
    }

}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado == 'Erro de formatação!!' || resultado == 'Digite algo' || resultado == 'Divisão impossível'){
        document.getElementById('resultado').innerHTML = ''
    }
    else{
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(typeof(resultado) === 'string' && resultado != '' && resultado != 'Digite algo' && resultado != 'Divisão impossível'){
        document.getElementById('resultado').innerHTML = 'Erro de formatação!!';
    }
    if(resultado){
        var cal = document.getElementById('resultado').innerHTML = eval(resultado).toFixed(2);
        if(cal == 'NaN' || cal == 'Infinity'){
            document.getElementById('resultado').innerHTML = 'Divisão impossível'
        }
        else{
            document.getElementById('resultado').innerHTML = cal
        }
    }
    else{
        document.getElementById('resultado').innerHTML = 'Digite algo';
        
    }

}