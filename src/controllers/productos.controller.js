const dateTime = require('node-datetime');
const uuid = require('uuid')

var dt = dateTime.create();
var formatted = dt.format('Y-m-d H:M:S');
const controller = {}
let dataProductos = []

controller.post = (req, res) => {
    const { name, description, quantity, warrantly, price, status } = req.body

        if(quantity.length>=11){
            res.status(400).json({
                message: 'quantity invalido'
            });
        }else{
             let data = {
                id: uuid.v4(),
                name,
                description,
                quantity,
                warrantly,
                price,
                status,
                createAt: formatted
            }
            dataProductos.push(data)
            res.send("recibido")
        }
}

controller.get = (req, res) => {

    res.json(dataProductos)
}

controller.delete = (req, res) => {
    let vid = dataProductos.filter(producto => producto.id == req.params.id)
    let st = ''
    for (let i = 0; i < vid.length; i++) {
        st = vid[i].status
    }
    if (st == 'published') {
        res.status(400).json({
            message: 'No se pudo eliminar'
        });
    } else {
        dataProductos = dataProductos.filter(producto => producto.id != req.params.id)
        res.json(dataProductos)
    }

}

controller.id = (req, res) => {
    dataProductos = dataProductos.filter(producto => producto.id == req.params.id)
    console.log(dataProductos.status)
    res.json(dataProductos)
}

module.exports = controller

