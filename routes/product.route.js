import express from "express";
import {getProducts, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js'

const router = express.Router();


//GET: Get all
router.get("/", getProducts);
//POST: Create
router.post("/", createProduct);
//PATCH: Update
router.put("/:id", updateProduct);
//DELETE: Delete
router.delete("/:id", deleteProduct)

export default router;