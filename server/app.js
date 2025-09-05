import express from "express";
import dotenv from "dotenv";
import dbconnect from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use(express.json());

dotenv.config();
dbconnect();


app.use('/auth',userRoutes)
app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
