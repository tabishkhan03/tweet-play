import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    try {
        app.listen(process.env.PORT || 8000, ()=>{
            console.log("Server is running at port",process.env.PORT);
        })
    } catch (error) {
        console.error("Error in starting the server!!!",error);
    }
})
.catch((err)=>{
    console.error("MONGODB connection failed!!! ",err);
});