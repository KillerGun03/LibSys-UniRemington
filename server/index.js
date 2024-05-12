const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const db = pass; 

app.listen(3001,()=>{
  console.log("Corriendo en el puerto 3001")
})