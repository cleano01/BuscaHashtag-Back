import { expect } from "chai"
import {tratemento_hashtag} from '../src/modules/hashtag/service/service'

describe("Hashtag Tratamento", () => {

    describe("Sera testado hashtag, sem o seu simbolo '#' ", () => {
        it("Deve retonar hashtag com o simbolo '#' ", () => {
            let lista= ['bbb']
            let  resultado= tratemento_hashtag(lista)
            expect(resultado).to.equal('#bbb')
        })
    })

    describe("Sera testado varias hashtag, sem o seu simbolo '#' ", () => {
        it("Deve retonar hashtags com o simbolo '#' ", () => {
            let lista= ['bbb', 'flamengo', 'java', 'python']
            let  resultado= tratemento_hashtag(lista)
            expect(resultado).to.equal('#bbb,#flamengo,#java,#python')
        })
    })


    describe("Sera testado hashtag, com o seu simbolo '#' ", () => {
        it("Deve retonar hashtag com o simbolo '#', sem adicao do '#' ", () => {
            let lista= ['#bbb']
            let  resultado= tratemento_hashtag(lista)
            expect(resultado).to.equal('#bbb')
        })
    })

    describe("Sera testado varias hashtags, com o seu simbolo '#' ", () => {
        it("Deve retonar hashtags com o simbolo '#', sem adicao do '#' ", () => {
            let lista= ['#bbb', '#flamengo', '#java', '#python']
            let  resultado= tratemento_hashtag(lista)
            expect(resultado).to.equal('#bbb,#flamengo,#java,#python')
        })
    })

    describe("Sera testado varias hashtags, com e sem o simbolo '#' ", () => {
        it("Deve retonar hashtags com o simbolo '#', sem adicao do '#' ", () => {
            let lista= ['#bbb', 'flamengo', '#java', 'python']
            let  resultado= tratemento_hashtag(lista)
            expect(resultado).to.equal('#bbb,#flamengo,#java,#python')
        })
    })

    describe("Nao sera enviado nenhuma hashtags", () => {
        it("Deve retonar nenhuma hashtag '#' ", () => {
            let lista= []
            let  resultado= tratemento_hashtag(lista)
            expect(resultado).to.equal('')
        })
    })


})