import dotenv from "dotenv"
import express from 'express'
import cors from 'cors'

export const configs = (app) =>{
    dotenv.config();
    app.use(express.json())
    app.use(cors)
}