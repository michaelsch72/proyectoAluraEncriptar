/* Reglas de encriptación: 
//"e" es convertido para "enter" 
//"i" es convertido para "imes"
///"a" es convertido para "ai"
///"o" es convertido para "ober"
///"u" es convertido para "ufat"
//Solo letras minusculas
//No se permite acentuación de palabras 
***/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var texto = document.getElementById("input-texto");
var botonEncriptar=document.querySelector("#btn-encriptar");
var botondesencriptar=document.querySelector("#btn-desencriptar");
var botonCopiar=document.querySelector("#btn-copy");
function encriptar() {
  
  var frase_input1=texto.value;
  var input_encrip=frase_input1.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
  document.getElementById("msg").value = input_encrip;


  }
function desencriptar(){
  var frase_input1=texto.value;
  var input_des=frase_input1.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
  document.getElementById("msg").value = input_des;
}
function copiarTexto(){
  msn=document.getElementById('msg').value;
  msg.select();
  document.execCommand("copy");
}
botonEncriptar.addEventListener('click', function(){
  encriptar();
});
botondesencriptar.addEventListener('click', function(){
  desencriptar();
});
botonCopiar.addEventListener('click', function(){
  copiarTexto();
});

