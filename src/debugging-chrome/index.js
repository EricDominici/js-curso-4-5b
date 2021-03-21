function repetir(nombre,veces){
    /**
     * @author Eric Dominici
     * @vercion 0.1.0
     * @param {string} nombre
     * @param {number} veces
     * @return {none}
     */ 
    for (let index = 1; index <= veces ; index++){
        let element = document.createElement('p');
        element.innerText = nombre;
        document.body.appendChild(element);
    }
}
const nom = prompt("Escribe tu nombre");
const vcs = parseInt(prompt("Escribe las vcs que lo mostraras"));
repetir(nom, vcs);
//Eric Dominici#4
