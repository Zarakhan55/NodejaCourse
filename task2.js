// You must create an Express server that manages products.

import express from 'express';

const app = express();
app.use(express.json());
let products = [];

app.get('/products',(req,res)=>{
    
    res.json([
        {id:201, name:'Monitor', price:199.99},
        {id:202, name:'Keyboard', price:49.99},
        {id:203, name:'Mouse', price:29.99}
    ]);
});

app.post('/products',(req,res)=>{
const product=req.body;
    products.push(product);
    res.json({
        message: 'Product created successfully',
        product: req.body
    });
});


app.put('/products/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const updatedProduct=req.body;
    let product=products.find(p=>p.id===id);
    if(product){
        product.name=updatedProduct.name || product.name;
        product.price=updatedProduct.price || product.price;
        res.json({
            message: 'Product updated successfully',
            product
        });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});






app.delete('/products/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=products.findIndex(p=>p.id===id);
    if(index!==-1){
        const deletedProduct=products.splice(index,1);
        res.json({
            message: 'Product deleted successfully',
            deletedProduct
        });
    }
else {
    res.status(404).json({ message: 'Product not found' });
}

});
app.listen(6000,()=>{
    console.log('Server is running on http://localhost:6000');
});