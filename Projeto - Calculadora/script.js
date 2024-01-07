function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    if(numero == 'Digite algo' || numero == 'ERROR!'){
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
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(typeof(resultado) === 'string' && resultado != ''){
        document.getElementById('resultado').innerHTML = 'Erro de formatação!!';
    }
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado).toFixed(2);
    }
    else{
        document.getElementById('resultado').innerHTML = 'Digite algo';
        
    }

}