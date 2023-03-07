var mongoose = require('mongoose');
  const ProductsSchema  = new mongoose.Schema({
    quantity: {//name oof the products
        type : String,
        required : true, 
    },
    operation: {//name oof the products
     type : String,
     required : true, 
 },
  });
  
  const Products= mongoose.model('Produts',ProductsSchema );
  module.exports =Products;