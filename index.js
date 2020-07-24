const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.set('port', process.env.PORT || 3001);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(require('./src/routes/productos.route'))

//Se levanta el servidor 
app.listen(app.get('port'), () => {
    console.log("port listen ", app.get('port'))
})