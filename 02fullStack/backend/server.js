import express from 'express';


const app = express();

app.get("/" , (req , res) =>{
    res.send("Hello World")
});


app.get("/about" , (req , res) =>{
    res.send("Hello tell me about")
});

const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log(`Serve at http://localhost:${port}`);
});