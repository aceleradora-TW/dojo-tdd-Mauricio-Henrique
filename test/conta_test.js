const expect = require('chai').expect
const Conta = require('../src/conta')

describe('Conta', function () {
  it('#transfere deve retornar true se tiver saldo suficiente', function () {
    let contaA = new Conta(50)
    let contaB = new Conta(0)
    expect(contaA.transfere(50, contaB)).to.equal(true)
  })

  it('#transfere deve retornar false se nao tiver saldo suficiente', function () {
    let contaA = new Conta(50)
    let contaB = new Conta(0)
    expect(contaA.transfere(60, contaB)).to.equal(false)
  })

  it('#transfere debita o valor da conta origem', function () {
    let contaA = new Conta(50)
    let contaB = new Conta(0)
    contaA.transfere(40, contaB)
    expect(contaA.saldo).to.equal(10)
  })

  it('#transfere deposita o valor na conta destino', function () {
    let contaA = new Conta(50)
    let contaB = new Conta(0)
    contaA.transfere(40, contaB)
    expect(contaB.saldo).to.equal(40)
  })

  it('#transfere insere objetos no vetor de transferencias', function () {
    let contaA = new Conta(50)
    let contaB = new Conta(0)
    contaA.transfere(40, contaB)
    expect(contaA.transferencias).to.have.lengthOf(1)
    contaA.transfere(10, contaB)
    expect(contaA.transferencias).to.have.lengthOf(2)
  })

  it('#transfere registra o dado certo no vetor de transferencias', function () {
    let contaA = new Conta(50)
    let contaB = new Conta(0)
    contaA.transfere(40, contaB)
    expect(contaA.transferencias[0]).to.have.property('origem', contaA)
    expect(contaA.transferencias[0]).to.have.property('destino', contaB)
    expect(contaA.transferencias[0]).to.have.property('valor', 40)
  })
})
