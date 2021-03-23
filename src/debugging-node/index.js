/*Algoritmo de ordenamiento al burbuja(n2)*/

const ordernaBuruja = (lista) => {


    let longitudLista, indexOrder, indexChange, auxChange;
    longitudLista = lista.length;
    
    console,info(longitudLista); // Mostramos po consol la cantidad de elementos en la lista

    for (indexOrder = 1; indexOrder < longitudLista; indexOrder++){

        for (indexChange = 1; indexChange < (longitudLista - indexOrder); indexChange++ ){

            if (lista[indexChange] > lista[indexChange + 1]){
                auxChange = lista[indexChange];
                lista[indexChange] > lista[indexChange + 1 ];
                lista[indexChange + 1 ] = auxChange;
            }
        }
    }

    return lista;
}

let listaDesordenada = [6, 5, 3, 1, 8, 7, 2, 4];
console.warn(listaDesordenada);

const listaOrdenada = ordernaBuruja(listaDesordenada);
console.log(listaOrdenada);
