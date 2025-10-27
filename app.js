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

const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')
const {request, get} = require('http')

const dados = require('./modulo/funcoes.js')
    
const PORT =  process.PORT || 3030;



const app = express()



app.use((request, response, next)=>{

    response.header('Access-Control-Allow-origin', '*')//IP de ORIGEM
    response.header('Access-Control-Allow-Methods', 'GET')// metodos (verbos) do protocolo http

    app.use(cors())
    next() //Proximo
})


app.get('/v1/whatsapp/dados', function(req, res){

  let numero = req.query.numero

  let resut = dados.getContadosAllDados()

  console.log(numero)
  return res.status(200).json(resut)
  
  
})

app.get('/v1/whatsapp/dados/:number', function(req, res){
  let perfil = req.params.number
  let result = dados.getDadosPerfill(perfil);

  
  res.json(result)
})
app.get('/v1/whatsapp/dados/contato/:number', function(req, res){

   let perfil = req.params.number
  let result = dados.getDadosContato(perfil);

  
  res.json(result)
})
app.get('/v1/whatsapp/dados/informacao/:number', function(req, res){

   let perfil = req.params.number
  let result = dados.getContatosInformaçoes(perfil);

  
  res.json(result)
})
app.get('/v1/whatsapp/dados/message/:number', function(req, res){

   let perfil = req.params.number
  let result = dados.getMensagens(perfil);

  
  res.json(result)
})
app.get('/v1/whatsapp/dados/filtro/message/:message', function(req, res){
    
   let perfil = req.params.message
  let result = dados.getFiltroMessage(perfil);


  res.json(result)
})



app.listen(3030, function() {
  console.log('server')
})