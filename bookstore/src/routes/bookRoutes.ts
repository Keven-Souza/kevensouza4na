// src/routes/bookRoutes.ts

import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController'; // Importe os métodos corretos

const router = Router();

router.get('/', getAllBooks); // Para listar todos os livros
router.post('/', addBook); // Para adicionar um novo livro

export default router;
