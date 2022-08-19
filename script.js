
var input = document.getElementById("input");

	

 


function encript(){
  
    var txt=input.value
var txte=txt.split('');

    for(k=0;k < txt.length;k++){
        console.log(k.value)

       if(txte[k]=="a"){
        txte[k]="ai"
}
        if(txte[k]=="e"){
        txte[k]="enter"
 }
        if(txte[k]=="i"){
        txte[k]="imes"
}
        if(txte[k]=="o"){
        txte[k]="ober"
}
        
        if(txte[k]=="u"){
        txte[k]="ufat"
 
        
       
    }



    }
  

    
    document.getElementById("resultado").innerHTML= txte.join("");
  

}


function desencrypt(){
    var texto = document.getElementById("input").value;


    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.getElementById("resultado").innerHTML = textoCifrado; 
  
  }


  function copiar() {
    var content = document.getElementById('resultado').innerHTML;

    navigator.clipboard.writeText(content)
        
    document.getElementById('input').value=""
    document.getElementById('resultado').innerHTML=""
    
    
  

}

  