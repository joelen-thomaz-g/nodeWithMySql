import { Router } from "express";
import express from 'express';
import {ProductController} from '../controllers/ProductController.js'

const routes = Router();

routes.get("/produtos", async (req, res) => {
    const produtos = new ProductController();
    const all = await produtos.listAllProducts();
    console.log(all);
    res.send(all)
})

export {routes}