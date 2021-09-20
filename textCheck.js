
//creacion de objeto para poder tener la funcion de letra mayuscula y no repetir codigo
class textModification{
    constructor() { }
    
    capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    lletres(text){
       
        for (var i = 0; i < text.length; i++) {
            if(text[i].match(/^[0-9]+$/)) return true; break;
        }
        return false;
    
    }
}
//inicializacion del objecto
const text= new textModification();

// el replace con el regex es de \s+ significa que donde haya mas de un espacio en toda la cadena me lo
//canvia por uno i el trim corta todos los espacios del princio y del final
function mayus(frase){
    if(text.lletres(frase)){
        return "No es poden escriure numeros";
    }
    return text.capitalize(frase.replace(/\s+/g,' ').trim());
}
// con la funcion de split se transforma un string en una array cogiendo las palabras donde hay el espacio o lo que se indique dentro los parentesis
// el metodo map se utilixa en es6 para poder mapear i cojer cada palabra de dentro de esta array y modificarla, aqui lo que hago es po
function allMayus(frase){
    if(text.lletres(frase)){
        return "No es poden escriure numeros";
    }
    else
    return frase.replace(/\s+/g,' ').trim().toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}
//todo minusculas
function minus(frase){
    if(text.lletres(frase)){
        return "No es poden escriure numeros";
    }
    else
    return frase.replace(/\s+/g,' ').trim().toLowerCase();
}


export {mayus,allMayus,minus}