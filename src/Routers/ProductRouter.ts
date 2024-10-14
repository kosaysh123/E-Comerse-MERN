import express, { request } from "express";
import { ProductDataAll } from "../Services/ProductServices";


const Router = express.Router()

Router.get("/", async(request , respons)=>{
const data = await ProductDataAll()
respons.status(200).send(data)
})

export default Router

