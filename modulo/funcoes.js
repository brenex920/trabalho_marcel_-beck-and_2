/*******************************************
 * Autor: Breno Dias Machado
 * data: 24/09/2025
 * Versão: 1.0
 * 
 * Feramentas:
 * 
 * Express
 * cors
 * body-parser
 * 
 * professor: Marcel
*/////////////////////////////////////////////////

const dados = require('./contatos.js')

const MESSAGE_ERROR = {status: false, statuscode: 500, development: 'Breno Dias Machado'}


const getContadosAllDados = function() {


const message = {status: true, statuscode: 200, development: 'Breno Dias Machado', users : []}

    dados.contatos['whats-users'].forEach(function(item){
        
        let dadosUser = {}

        dadosUser.id = item.id
        dadosUser.account = item.account
        dadosUser.nickname = item.nickname
        dadosUser.ativo_em = item['created-since']
        dadosUser.foto = item['profile-image']
        dadosUser.numero = item.number
        dadosUser.cor_fundo = item.background
        
        message.users.push(dadosUser)
    }) 
    
    return message


}

console.log(getContadosAllDados())

