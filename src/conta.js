class Conta {
  constructor(saldo){
    this.saldo = saldo
    this.transferencias = []
  }

  transfere(valor, contaDestino){
    if(this.saldo >= valor){
      this.saldo -= valor
      contaDestino.saldo += valor
      this.transferencias.push({origem: this, destino: contaDestino, valor})
      return true
    }
    return false
  }
}

module.exports = Conta
