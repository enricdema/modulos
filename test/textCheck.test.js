import {mayus,allMayus,minus} from '../textCheck'
    
describe('Comprovacion de textos', () => {
    
    test('Primera lletra mayus', () => {
        expect(mayus("hola que tal com anem")).toBe("Hola que tal com anem");
        expect(mayus("3ola que tal com anem")).toBe("No es poden escriure numeros");
        expect(mayus("   hola    que tal com anem")).toBe("Hola que tal com anem");
    });
    test('Totes primeres lletres mayus', () => {
        expect(allMayus("hola que tal com anem")).toBe("Hola Que Tal Com Anem");
        expect(allMayus("3ola que tal com anem")).toBe("No es poden escriure numeros");
        expect(allMayus("   hola  que tal com anem")).toBe("Hola Que Tal Com Anem");
    });
    test('Totes minuscules', () => {
        expect(minus("hOla que tAl coM anEm")).toBe("hola que tal com anem");
        expect(minus("3Ola que tal com anem")).toBe("No es poden escriure numeros");
        expect(minus("   holA  que tal cOm anem")).toBe("hola que tal com anem");
    }); 
});
    
    /*function allMayus(frase){
    return frase.replace(/\s+/g,' ').trim().toLowerCase().split(' ').map(function(word) {
        while(!word.charAt(nm).match(/[a-z]/i)){nm++}
        word.charAt(nm).toUpperCase() + word.substring(1).join(' ');
        nm=0;
    })        
} */