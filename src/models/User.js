const mongoose = require('mongoose'); 


const UserSchema = new mongoose.Schema({
    nomeCompleto: { 
        type: String, 
        require: true
    },
    cpf: { 
        type: String, 
        require: true,
        unique: true
    },
    cep: { 
        type: String, 
        require: true
    }, 
    numero: { 
        type: Number, 
        require: true
    },
    telefone: { 
        type: String, 
        require: true
    },
    tipoAcesso: { 
        type: String, 
        require: true
    },
    email: { 
        type: String, 
        unique: true,
        require: true,
        lowercase: true
    },
    senha: { 
        type: String, 
        require: true,
        select: false
    },
    setor: { 
        type: String, 
        require: true,
        select: false
    },
    criado: { 
        type: Date, 
        default: Date.now
    }

})

const User = mongoose.model('User', UserSchema);

module.exports = User;