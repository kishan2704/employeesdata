const  express = require("express");
const app = express();
const routing = require("./routers/route")

app.use(express.json());
app.use('/',routing)

app.listen(1027,()=>console.log('running'))







