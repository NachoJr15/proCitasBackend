const Producto = require ('../models/Producto'); //se exporta el modelo de Producto

//Funcion agregar productos
exports.agregarProductos = async(req, res) => { //funcion asyncrona
    
    try {
        let productos; 
        productos = new Producto(req.body);
        await productos.save();
        res.send(productos);  //se muestra el codigo en postman o insomnia

        } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un producto');
    }

}

//Funcion que nos va a mostrar todos los productos
exports.mostrarProductos = async(req, res) => {
    try {
        const productos = await Producto.find();  //await = asyncrona // .find = buscva todos los productos
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los productos');
    }
}

//Funcion para mostrar un producto
exports.buscarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id); //metodo .findById = busca por Id
        
        if(!producto){
            res.status(404).json({ msg: 'No se encuentra el producto'});
        
        }else{
        res.json(producto);

        }
    }    catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error al consultar el producto');
    }    

}

//Funcion para actualizar un producto con Put
exports.actualizarProductos = async (req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate(
        { _id: req.params.id },req.body);

        if (!producto) res.status(404).send("Producto no encontrado");
        else
            res.json(producto);
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error al actualizar el producto');
        }
    };     

//Funcion para mofidicar un producto con Patch, es similar a la anterior

exports.modificarProductos = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto){
            return res.status(404).send('Producto no encontrado');
        } 
        res.json(producto)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el producto');
    }
}

//Funcion para eliminar un producto
exports.eliminarProductos = async (req, res) => {
    try{
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send('Producto no encontrado');
        } else {
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg: "El producto ha sido eliminado"})
        }

    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
    }

}