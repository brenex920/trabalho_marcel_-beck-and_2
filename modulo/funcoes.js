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

    dados.contatos['whats-users'].forEach((item) => {
        
        let dadosUser = {}

        dadosUser.id = item.id
        dadosUser.account = item.account
        dadosUser.nickname = item.nickname
        dadosUser.ativo_em = item['created-since']
        dadosUser.foto = item['profile-image']
        dadosUser.numero = item.number
        dadosUser.cor_fundo = item.background
        dadosUser.contatos = item.contacts
        
        message.users.push(dadosUser)
    }) 
    
    return message;


}

const getDadosPerfill = function(number){

    const message = {status: true, statuscode: 200, development: 'Breno Dias Machado',}


    let numero = number


    let profile = dados.contatos['whats-users'].find((number) => {

        return number.number === numero

    })
        if(profile){
            let perfill_json = {}

            perfill_json.nickname = profile.nickname
            perfill_json.foto = profile.foto
            perfill_json.numero = profile.number
            perfill_json.cor_fundo = profile.background
            perfill_json.criado = profile['created-since'].start
            perfill_json.fim = profile['created-since'].end

            message.perfil = perfill_json
            return message
        }else{
            return MESSAGE_ERROR;
        }

}

const getDadosContato = function(numero){

    let telefone = numero

     const message = {status: true, statuscode: 200, development: 'Breno Dias Machado'}

  let profile = dados.contatos['whats-users'].find((item)  =>  {

    return item.number === telefone;

  })
  if(profile){
    let array = []

    profile.contacts.forEach((item) => {
        let json2= {}

        json2.nome = item.name
        json2.numero = item.number
        json2.descricao = item.description

       array.push(json2);
    })
     message.contacts = array;
      return message;
  }else{
    return MESSAGE_ERROR;
  }
}

const getContatosInformaçoes = function(numero){

    let message = []

      let profile = dados.contatos['whats-users'].find((item)  =>  {

    return item.number === numero;

  })
  if(profile){

    dados.contatos['whats-users'].forEach((item) => {
        item.contacts.forEach((contato) => {
            message.push({
                nome: contato.name,
                number: contato.number,
                foto: contato.image,
                patepapo: contato.messages
            })
        })
    })
    return message
  }else{
    return MESSAGE_ERROR
  }
}

    

const getMensagens = function(numero) {

    let persona = numero

     const message = {status: true, statuscode: 200, development: 'Breno Dias Machado'}


     let men = dados.contatos['whats-users'].find((perfil) => {
        return perfil.contacts.some(item => item.number === persona)
     })
     let array = []
     if(men){
        let getNumero = men.contacts.find((item) => {
            return item.number === persona
        })
        json3 = {}
        json3.nome = getNumero.name
        json3.message = getNumero.messages

        array.push(json3)

        message.contacts = json3
        return message
     }
}

const getFiltroMessage = function(palavra){
    
    let messages = []

    dados.contatos['whats-users'].forEach((item) =>{
        item.contacts.forEach((contato) => {
            contato.messages.forEach((message) => {
                let content = message.content.toLowerCase()
                if(content.includes(palavra.toLowerCase())){
                    messages.push({
                        name: contato.name,
                        number: contato.number,
                        message: message.content
                    })
                }else{
                    return MESSAGE_ERROR
                }
            })
        })
    })
    
    return messages;
}






module.exports = {
    getContadosAllDados,
    getFiltroMessage,
    getMensagens,
    getContatosInformaçoes,
    getDadosContato,
    getDadosPerfill
}

