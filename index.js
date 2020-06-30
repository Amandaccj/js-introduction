import {Cliente} from "./cliente.js"
import{ContaCorrente} from "./contaCorrente.js"

const cliente1 = new Cliente("Amanda", 12312312389);
const cliente2= new Cliente("Ricardo",14512312356);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102);


let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);



