const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


const catagories = require('./data/catagories.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('News API Running')

})
app.get('/news-catagories', (req, res)=>{
        res.send(catagories)
})

app.listen(port, ()=> {
    console.log('My Server', port)
})