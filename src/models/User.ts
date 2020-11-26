import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  nomeCompleto: {
    type: String,
    require: true,
  },
  cpf: {
    type: String,
    require: true,
    unique: true,
  },
  cep: {
    type: String,
    require: true,
  },
  numero: {
    type: Number,
    require: true,
  },
  telefone: {
    type: String,
    require: true,
  },
  tipoAcesso: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  senha: {
    type: String,
    require: true,
    select: false,
  },
  setor: {
    type: String,
    require: true,
    select: false,
  },
  criado: {
    type: Date,
    default: Date.now,
  },
});

const User = model('User', UserSchema);

export default User;
