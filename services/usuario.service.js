const Usuario = require('./../models/usuario.model')


class UsuarioServicio {

  async getById ( id ) {
    return await Usuario.findById(ObjectID(id))    
  }

  async getOne ( id ) {
    return await Usuario.findOne({ id })    
  }
  
  async getUserByName ( usuario ) {
    return await Usuario.find({ usuario })    
  }

  async add ( usuario ) {
    let nuevoUsuario = new Usuario( { usuario: usuario.usuario, password: usuario.password, email: usuario.email })
    return await nuevoUsuario.save() 
  }

}


module.exports = UsuarioServicio