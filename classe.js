
class ContaCliente {
    constructor(numeroConta, saldo, debito, credito) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcularSaldoAtual() {
        return this.saldo - this.debito + this.credito;
    }

    VerificarSaldo() {
        const saldoAtual = this.calcularSaldoAtual();
        if (saldoAtual >= 0) {
            alert("Saldo positivo: " + saldoAtual + "R$");
        }
         else{
            alert("Saldo negativo seu perdedor: " +saldoAtual + "R$")
         }
    }
}
 let numeroConta = prompt("digite o numero da conta")
 let saldo = parseFloat(prompt("digite o saldo do cliente"))
 let debito = parseFloat(prompt("digite o débito do cliente"))
 let credito = parseFloat(prompt("digite o crédito"))

 let conta = new ContaCliente(numeroConta,saldo,debito,credito)
 conta.VerificarSaldo();