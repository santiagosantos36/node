const { response, request } = require ('express');


const usuariosGet = (req= request, res) =>{
    const {q,nombre} = req.query;
    
    res.json({
        msg: "get API- controlador",
        q,
        nombre

});
}

const usuariosPost = (req, res=response) =>{

    const {nombre, edad} = req.body;
    res.json({
        msg: "post API-controlador",
        nombre,
        edad
        });}

const usuariosPut = (req, res=response) =>{
    const {id} = req.params;
    res.json({
        msg: "Put API-controlador",
        id

        });}
const usuariosDelete = (req, res=response) =>{
    res.json({
        msg: "delete API-controlador"
    
            });
        }
const usuariosPatch = (req, res=response) =>{
    res.json({
        msg: "Patch API-controlador"
    
            });
        }


module.exports = {

     usuariosGet,
     usuariosPut,
     usuariosDelete,
     usuariosPatch,
     usuariosPost
}