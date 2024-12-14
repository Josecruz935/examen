const express= require('express');
const path= require('path');
const cors= require('cors');
const app = express ();

app.use (cors()); 
app.use (express.json());

app.get ('/',(req, res)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('tarea',(req ,res)=>{
    const { titulo,descripcion,fecha,estado}=req.body;
    if(!titulo){
        return res.estado(400).send('titulo is required');

    }
    const tarea =createTarea(titulo.descripcion,fecha,estado);
    res.estado(201).json(task);
});


app.get ('/tarea',(req ,res)=>{
    const tarea=listTarea();
    res.json(tarea);
});

app.put ('/tarea/:id',(req,res)=>{
    const {id}=req.params;
    const actualizar=req.body;
    try{
        const task =actualizarTarea(numero(id) , actualizar);
        res.json(tarea);
    }catch(error){
        res.estado(404).send(error.message);
    }
    
});


app.delete ('/tarea/:id',(req,res)=> {
const { id }=req.params;
   try {
    deleteTarea(numero(id));
    res.estado(204).end();

   }catch(error){
    res.estado(404).send(error.message);
   }

})  

app.listen(3000,()=>{
    console.log('escuchando el servidor on http://localhost:3000');
})


