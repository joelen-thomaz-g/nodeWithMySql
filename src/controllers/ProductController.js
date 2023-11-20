import { pool } from "../database/index.js";

class ProductController {
    async createProduct({nome, descricao, preco, categoria}) {
        const [result] = await pool.query(`
        INSERT INTO produto (nome, descricao, preco, categoria)
        VALUES (?, ?, ?, ?)
        `, [nome, descricao, preco, categoria])
        const id = result.insertId;
        return this.listAllProducts()
    }

    async listAllProducts() {
        const [rows] = await pool.query(`
            SELECT * FROM produto
        `)
        return rows;
    }
}

export {ProductController}