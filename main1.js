const ex = require("express");
const app = ex();
app.get("/",(req,res)=>{
    res.send("Your site is  running...!");
})

app.listen(4000,()=>{
    console.log("working");
});