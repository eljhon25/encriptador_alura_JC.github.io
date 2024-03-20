/*
let acento = tiene_acento('á');
alert(`texto acento = ${acento}`);
*/

function tiene_mayusculas(texto)
{
    var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";   
      
    for(let i=0; i<texto.length; i++)
    {
       if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1)
       {
          return 1;
       }
    }
    return 0;
 }

 function tiene_acento(texto)
{
    var letras_acento = "ÁÀÄÂáàäâÉÈËÊéèëêÍÌÏÎíìïîÓÒÖÔóòöôÚÙÜÛúùüûÑñÝŸýÿÕÃÅÐõãåð";  
      
    for(let i=0; i<texto.length; i++)
    {
       if (letras_acento.indexOf(texto.charAt(i),0)!=-1)
       {
          return 1;
       }
    }
    return 0;
 }


function encriptar() 
{
    let valorTextAreaEncriptar = document.getElementById('textarea_encriptar').value;

    //alert(`texto encriptar = ${valorTextAreaEncriptar}`);  
    
    if(valorTextAreaEncriptar === "")
    {
        alert('No existe un texto para encriptar');    
    }
    else
    {        
        let texto_mayuscula = tiene_mayusculas(valorTextAreaEncriptar);

        //alert(`texto encriptar mayuscula = ${texto_mayuscula}`);
        
        let texto_acento = tiene_acento(valorTextAreaEncriptar);
        
        if (texto_mayuscula===1) 
        {
            alert('El texto a encriptar no debe contener mayúsculas');

        } else if (texto_acento===1) 
        {
            alert('El texto a encriptar no debe contener acentos');
        } 
        else 
        {
            //desencriptar texto
            let textoEncriptar = valorTextAreaEncriptar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        
            //alert(`texto encriptar = ${textoEncriptar}`);

            document.querySelector('#textarea_desencriptar').value = textoEncriptar;
            
        }

        limpiarEncriptar();        
        
    }    
    
    return;
}

function desencriptar() 
{
    let valorTextAreaDesencriptar = document.getElementById('textarea_desencriptar').value;

    //alert(`text area desencriptar = ${valorTextAreaDesencriptar}`);  
    
    if(valorTextAreaDesencriptar === "")
    {
        alert('No existe un texto para desencriptar');   
    }
    else
    {
        let textoDesencriptar = valorTextAreaDesencriptar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        
        document.querySelector('#textarea_desencriptar').value = textoDesencriptar;

        limpiarEncriptar();

    }    
    
    return;
}

function copiar() 
{
    let valorTextAreaDesencriptar = document.getElementById('textarea_desencriptar').value;

    document.querySelector('#textarea_encriptar').value = valorTextAreaDesencriptar;   
    
    return;
}

function limpiarEncriptar() {
    document.querySelector('#textarea_encriptar').value = '';
}

function condicionesIniciales() 
{
    document.querySelector('#textarea_encriptar').value = '';
    document.querySelector('#textarea_desencriptar').value = '';
}

condicionesIniciales();
