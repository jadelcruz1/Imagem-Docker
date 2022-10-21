const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá Jardel! Voce criou uma nova imagem.')
})

app.listen(port, ()=> {
    console.log(`Executando a porta: ${port}`)
});