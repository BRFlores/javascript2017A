/**
 * Created by USRDEL on 5/10/17.
 */
// Find y Filter

let arreglo = [8,6,9,10,4,2,7,8];

let notasDeSupletorio = arreglo
        .map((valor,indice)=>{
        return valor/5;
})
.filter((valor)=>{
    return valor>=1;
}).some((valor)=>{
    return valor>0.5
})
//every and, some or


console.log(notasDeSupletorio);