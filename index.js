const express = require("express")
const { engine } = require("express-handlebars")
const path = require("path")

const routes = require('./routes')
const app = express()

// Configuração de parser para formulários e JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Configuração do Handlebars como Template Engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Definição da pasta de arquivos estáticos (CSS, Imagens, JS)
app.use(express.static(path.join(__dirname, 'public')))

// Importação das rotas
app.use('/', routes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})