var valor = []
function historico(){
    var n = 0
    var botao = window.document.getElementById("historico")  
    botao.removeAttribute('onclick')
    botao.setAttribute('onclick', "voltar()")
   var div = window.document.getElementsByTagName('div')[2]
    div.setAttribute("id", "div");
    var p = window.document.getElementsByTagName('p')[1]
    p.innerHTML = 'Histórico'
    p.setAttribute('id', "hist")
    var select = window.document.createElement('select')
    select.setAttribute('size', "10")
    select.setAttribute('id',"select")
    div.appendChild(select)
    var option = window.document.createElement('option')
    option.innerHTML = 'olá'
    select.appendChild(option)

}
function voltar(){
    var botao = window.document.getElementById("historico")  
    botao.removeAttribute('onclick')
    botao.setAttribute('onclick', "historico()")
    var div = window.document.getElementsByTagName('div')[2]
    div.removeAttribute('id')
    
    var p = window.document.getElementsByTagName('p')[1]
    p.innerHTML = ''
    p.removeAttribute('id')
    select.remove()
    select.removeAttribute('size')
    select.removeAttribute('id')
}
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
    if(typeof(resultado) === 'string' && resultado != '' && resultado != 'Digite algo' && resultado != 'Divisão impossível' ){
        document.getElementById('resultado').innerHTML = 'Erro de formatação!!';
    }
    if(resultado){
        var cal = document.getElementById('resultado').innerHTML = eval(resultado).toFixed(1);
        var conta = `${resultado} = ${cal}`
        valor.push(conta)

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