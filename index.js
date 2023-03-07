const express=require('express');
const { findOne } = require('../config/schema');
const router = express.Router();
const addProduct= require('../router/index')
router.post('/', function(req, res){//taking post req
  const arr=req.body;//taking data in form of arr because more than one product possible
  arr.map(async function(obj){
   if(obj.operation ==add){//adding product into database
   try{
    await addProduct(obj);
   }
   catch(err){console.log(err);}
   }
   if(obj.operation ==sub){
    //sub product from database
    const id=obj._id;
    const product =await addProduct.findOne({_id});
    const noOfProdtRemove=product.quantity-obj.quantity;
    await addProduc.updateOne({_id}, {
     quantity: 'noOfProdtRemove'
   });
   
   }

  })
})
