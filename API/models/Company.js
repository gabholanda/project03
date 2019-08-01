const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  name: { type: String, required: true, unique: true },
  CNPJ: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, enum: ['ACTIVE', 'PENDING'] },
  responsibleName: { type: String, required: true },
  password: String,
  telephone: String,
  address: { type: String },
  field: { type: String, enum: ['Food', 'Sport', 'Technology', 'Fashion', 'Bank', 'Industry', 'commercial', 'others'] },
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company;