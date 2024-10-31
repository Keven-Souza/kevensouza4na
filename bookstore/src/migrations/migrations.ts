import { Pool } from 'pg';

const pool = new Pool({
  host: '127.0.0.1',
  user: 'seu_usuario', // substitua pelo seu usuário
  password: 'sua_senha', // substitua pela sua senha
  database: 'livraria', // substitua pelo nome do seu banco de dados
});

const createTables = async () => {
  const client = await pool.connect();
  try {
    // Criar tabela de usuários
    const createUsersTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        passwordHash VARCHAR(255) NOT NULL
      );
    `;
    await client.query(createUsersTableQuery);
    console.log('Tabela "users" criada com sucesso!');

    // Criar tabela de livros
    const createBooksTableQuery = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      );
    `;
    await client.query(createBooksTableQuery);
    console.log('Tabela "books" criada com sucesso!');

  } catch (err) {
    console.error('Erro ao criar tabelas:', err);
  } finally {
    client.release();
  }
};

createTables().then(() => process.exit(0));

