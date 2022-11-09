const express = require('express');
const db = require('./db');
const dotenv = require('dotenv');
const actionPlanRouter = require('./routes/ActionPlanRoutes');
const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
    res.send("Hello I am FlameCloud Assignment");
});

app.use("/", actionPlanRouter)

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});