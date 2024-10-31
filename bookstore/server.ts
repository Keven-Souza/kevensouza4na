import express from 'express';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

// Rotas para livros
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); // Correto para usar crases
});

