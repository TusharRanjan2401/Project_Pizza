var express = require("express");
var router = express.Router();
const {getAllPizzas, getAllIngredients,CartItem} = require("../../Database/database");
 
/* GET users listing. */
// http://localhost:3000/books-mongodb/list
router.get("/plist", async (req, res, next) =>{
    try{
        const data= await  getAllPizzas();
        res.send(data);
    }catch{
        res.send("not")
    }
});
router.get("/ingredients", async (req, res, next) =>{
    try{
        const data= await  getAllIngredients();
        res.send(data);
    }catch{
        res.send("not")
    }
});
router.post('/atc', async (req, res) => {
    try {
      const { name, price, quantity,image, type } = req.body;
      let existingItem = await CartItem.findOne({ name });

      if(existingItem){
        existingItem.price = price;
        existingItem.quantity +=quantity;
        await existingItem.save();
      }else{
      const newItem = new CartItem({ name, price, quantity, image, type });
      await newItem.save();
      }
      res.status(200).json({ message: 'Item added to cart' });
    } catch (err) {
      res.send('Server Error');
    }
  });
  router.get('/cart', async (req, res) => {
    try {
      const items = await CartItem.find();
      res.json(items);
    } catch (err) {
      res.send('Server Error');
    }
  });
  router.delete("/cd/:name",async(req,res)=>{
    try {
        const name = req.params.name;
        const deleteItem = await CartItem.findOneAndDelete(name);
        if (!deleteItem) {
          return res.status(404).json({ error: 'Item not found in cart' });
          }
          res.status(200).json({ message: 'Item deleted from cart' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Server Error' });
        }
  });
  router.put('/inc-qt/:id', async (req, res) => {
    try {
      const itemId = req.params.id;
      const updatedItem = await CartItem.findByIdAndUpdate(itemId, { $inc: { quantity: 1 } }, { new: true });
      if (!updatedItem) {
        return res.send('Item not found in cart');
      }
      res.json(updatedItem);
    } catch (err) {
      res.send('Server Error');
    }
  });
 
  // Decrement quantity of a cart item
  router.put('/dec-qt/:id', async (req, res) => {
    try {
      const itemId = req.params.id;
      const updatedItem = await CartItem.findByIdAndUpdate(itemId, { $inc: { quantity: -1 } }, { new: true });
      if (!updatedItem) {
        return res.send('Item not found in cart');
      }
      res.json(updatedItem);
    } catch (err) {
      res.send('Server Error');
    }
  });
 
  module.exports = router;