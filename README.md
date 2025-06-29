# 🧙‍♂️ API Personagens Disney

API RESTful desenvolvida como projeto de portfólio da disciplina **Web Programming for Back-End**. O objetivo é simular um sistema de cadastro de personagens da Disney, permitindo a criação, leitura, atualização e exclusão dos dados de forma organizada e integrada com banco de dados MySQL.

---

## 🎯 Objetivo

Desenvolver uma aplicação back-end completa que gerencie os personagens icônicos da Walt Disney, aplicando os conceitos de arquitetura MVC, rotas REST, integração com banco de dados e boas práticas de organização de projeto.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MySQL2**
- **Dotenv**
- **Nodemon**
- **Postman** (testes de requisição)

---

## 📦 Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/dev-alexandreoliveira/personagens-disney-api.git
    cd personagens-disney-api
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Crie o Banco e as Tabelas:**

Para que a API funcione corretamente, é necessário criar o banco de dados e a tabela de personagens no MySQL. Utilize o script SQL abaixo:

<details>
<summary><strong>🗄️ Script SQL do Banco de Dados</strong></summary>

```sql
-- Criação do banco de dados
CREATE DATABASE db_personagens_disney;
USE db_personagens_disney;

-- Criação da tabela de personagens
CREATE TABLE personagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    apelido VARCHAR(100),
    biografia TEXT,
    data_criacao DATE,
    local_nascimento VARCHAR(100),
    descricao_vestimenta TEXT,
    foto_url VARCHAR(255),
    especie VARCHAR(50),
    criador VARCHAR(100)
);

-- Adicione um personagem para testar a API
INSERT INTO personagens (
    nome,
    apelido,
    biografia,
    data_criacao,
    local_nascimento,
    descricao_vestimenta,
    foto_url,
    especie,
    criador
) VALUES (
    'Mickey Mouse',
    'Mickey',
    'Mickey Mouse é um personagem de desenho animado criado por Walt Disney e Ub Iwerks em 1928. Tornou-se o símbolo da The Walt Disney Company.',
    '1928-11-18',
    'Estados Unidos',
    'Shorts vermelhos, grandes sapatos amarelos e luvas brancas',
    'https://upload.wikimedia.org/wikipedia/pt/d/d4/Mickey_Mouse.png',
    'Rato',
    'Walt Disney'
);
```

</details>


4. **Configure o arquivo `.env` na raiz do projeto:**

    ```env
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=senha_do_banco
        DB_NAME=db_controle_filmes
        DB_PORT=3306
    ```

5. **Inicie o servidor:**

    ```bash
    npm run dev
    ```

---

## 🧱 Estrutura do Projeto (MVC)

```
src/
├── config/         # Configuração de conexão com o banco
├── controllers/    # Lógica dos endpoints
├── models/         # Acesso ao banco de dados
├── routes/         # Definição das rotas da API
└── server.js       # Arquivo principal do servidor
```

---

## 🌐 Endpoints da API

| Método  | Rota                        | Função                        |
| ------- | --------------------------- | ----------------------------- |
| GET     | `/api/personagens`          | Listar todos os personagens   |
| GET     | `/api/personagens/:id`      | Buscar personagem por ID      |
| POST    | `/api/personagens`          | Criar novo personagem         |
| PUT     | `/api/personagens/:id`      | Atualizar dados do personagem |
| DELETE  | `/api/personagens/:id`      | Remover personagem do sistema |

---

## 🧪 Exemplos de Requisições no Postman

### ✅ Criar personagem (POST)

```json
{
  "nome": "Sininho",
  "apelido": "Tinker Bell",
  "biografia": "Fada amiga de Peter Pan, conhecida por seu ciúme e brilho mágico.",
  "data_criacao": "1953-02-05",
  "local_nascimento": "Terra do Nunca",
  "descricao_vestimenta": "Vestido verde e asas brilhantes",
  "foto_url": "https://upload.wikimedia.org/wikipedia/pt/1/13/Tinker_Bell.png",
  "especie": "Fada",
  "criador": "Walt Disney"
}
```

### ✅ Atualizar personagem (PUT)

```json
{
  "nome": "Minnie Mouse Atualizada",
  "apelido": "Minnie",
  "biografia": "Minnie é mais que um ícone fashion — é uma das fundadoras do legado Disney.",
  "data_criacao": "1928-11-18",
  "local_nascimento": "Estados Unidos",
  "descricao_vestimenta": "Agora usa vestido rosa e sapatos vermelhos",
  "foto_url": "https://upload.wikimedia.org/wikipedia/pt/d/d1/Minnie_Mouse.png",
  "especie": "Rato",
  "criador": "Walt Disney"
}
```

### ✅ Buscar todos (GET)

```
GET /api/personagens
```

### ✅ Buscar por ID (GET)

```
GET /api/personagens/2
```

### ✅ Deletar personagem (DELETE)

```
DELETE /api/personagens/2
```

---

## 🧑‍🎓 Autor

**Alexandre Oliveira**  
Projeto desenvolvido para a disciplina de Programação Back-End — UniFECAF.