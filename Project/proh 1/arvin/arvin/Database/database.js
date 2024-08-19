const mongoose=require('mongoose');
const bodyparser = require('body-parser');
const express = require('express');

const app= express();
 
app.use(bodyparser.json());
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/pizzadb');
    console.log("Connection successful")
}
 
main().catch(err=>console.log(err))
 
let ingredientSchema= new mongoose.Schema({
        "id": Number,
        "tname": String,
        "price": Number,
        "image": String
     
},{collection:'toppings'})
 
const toppings= new mongoose.model('toppings', ingredientSchema)
 
// Ingredients.find()
// .then(data=>console.log(data))
// .catch(eror=>console.log(eror))
 
let pizzaSchema= new mongoose.Schema({
   
        "id": String,
        "type": String,
        "price": Number,
        "name": String,
        "image": String,
        "description": String,
        "ingredients": Array,
        "topping": Array
     
}, {collection:'pizzas'})
 
 
const pizzas= new mongoose.model('pizzas', pizzaSchema)
 
// pizzaList.find()
// .then(data=>console.log(data))
// .catch(eror=>console.log(eror))
const cartItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: {type: String, required: true},
    type: {type: String, required: true}
  },{collection:'CartItem'});
  
  const CartItem = mongoose.model('CartItem', cartItemSchema);
 
 const loginSchema = new mongoose.Schema({
  email: String,
  password: String
 });

 const login = mongoose.model('login', loginSchema);

 app.post('/login', async(req,res)=>{
  const { email, password} = req.body;

  if(login){
    res.json({
      success: true, message: 'Login Successful'});
    }else{
      res.status(401).json({success: false, message: 'Invalid email'});
    }
    });
 

function getAllIngredients() {
  try {
  //   const collection = await main();
  const data= toppings.find()
  // console.log(data);
  return data;
  // .then(data=>console.log(data))
  // .catch(eror=>console.log(eror))
  } finally {
    // client.close();
  }
}
 function getAllPizzas() {
    try {
    const data= pizzas.find()
    return data;
    } finally {
      // client.close();
    }
  }
 console.log(getAllPizzas());
module.exports={ getAllPizzas, getAllIngredients,CartItem };