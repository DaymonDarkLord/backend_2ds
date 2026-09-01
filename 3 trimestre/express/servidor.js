// importação interna com ESM (import)
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})
app.get('/', (req, res) => {
    res.send('Minha calça auruda!')
})

app.listen(3000, ()=> {console.log('Servidor está vivo!')})