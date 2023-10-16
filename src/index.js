const { Client } = require('pg');

// Configurações da conexão com o banco de dados
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'banco',
  password: '2020',
  port: 5432, // Porta padrão do PostgreSQL
});

// Tentativa de conexão
client.connect(function(err) {
  if (err) {
    console.error('Erro ao conectar: ' + err.stack);
  } else {
    console.log('Conexão bem sucedida ao banco de dados!!!');
    client.end(); // Encerra a conexão
  }
});