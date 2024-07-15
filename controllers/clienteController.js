const Cliente = require ('../models/Cliente'); //se exporta el modelo de Cliente

//Funcion agregar clientes
exports.agregarClientes = async(req, res) => { //funcion asyncrona
    
    try {
        let clientes; 
        clientes = new Cliente(req.body);
        await clientes.save();
        res.send(clientes);  //se muestra el codigo en postman o insomnia

        } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }

}

//Funcion que nos va a mostrar todos los clientes
exports.mostrarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.find();  //await = asyncrona // .find = buscva todos los clientes
        res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los clientes');
    }
}

//Funcion para mostrar un cliente
exports.buscarCliente = async (req, res) => {

    try {
        let cliente = await Cliente.findById(req.params.id); //metodo .findById = busca por Id
        
        if(!cliente){
            res.status(404).json({ msg: 'No se encuentra el cliente'});
        
        }else{
        res.json(cliente);

        }
    }    catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error al consultar el cliente');
    }    

}

//Funcion para actualizar un cliente con Put
exports.actualizarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate(
        { _id: req.params.id },req.body);

        if (!cliente) res.status(404).send("Cliente no encontrado");
        else
            res.json(cliente);
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error al actualizar el cliente');
        }
    };     

//Funcion para mofidicar un cliente con Patch, es similar a la anterior

exports.modificarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente){
            return res.status(404).send('Cliente no encontrado');
        } 
        res.json(cliente)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el cliente');
    }
}

//Funcion para eliminar un cliente
exports.eliminarClientes = async (req, res) => {
    try{
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send('Cliente no encontrado');
        } else {
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "El cliente ha sido eliminado"})
        }

    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el cliente');
    }

}