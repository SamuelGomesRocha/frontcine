🎬 Sistema de Bilheteria da Sétima Arte: CineCult

 (Se houver um logo, insira aqui)

📌 Sobre o Projeto

O CineCult é um sistema de bilheteria para cinemas que permite:

Cadastro de filmes.

Gestão de programações.

Venda de ingressos de forma eficiente e simplificada.

O projeto segue um modelo orientado a objetos e foi desenvolvido para aprimorar a experiência de gerenciamento de cinemas e compra de ingressos.

🎯 Objetivo

Criar um sistema de bilheteria funcional e de fácil uso, proporcionando uma experiência otimizada para administradores de cinemas e amantes do cinema.

👥 Público-Alvo

Administradores e funcionários de cinemas para gerenciar filmes e programações.

Espectadores que desejam comprar ingressos de forma prática.

🗃️ Estrutura do Banco de Dados

O banco de dados possui três entidades principais:

Entidade

Descrição

🎥 Filme

Contém informações como título, gênero, direção e duração.

🗓️ Programação

Define horários e salas de exibição associadas a um filme.

🎟️ Ingresso

Gerencia a compra e disponibilidade de assentos.

🔗 Relacionamentos

Um Filme pode ter várias Programações.

Um Ingresso está vinculado a uma Programação, e sua compra reduz a quantidade de assentos disponíveis.

🚀 Tecnologias Utilizadas

Backend: Python (Django/FastAPI/Flask, etc.)

Frontend: React.js / Vue.js / Angular (ou outra tecnologia utilizada)

Banco de Dados: PostgreSQL / MySQL / MongoDB

🔗 Repositórios

📂 Backend: GitHub - CineCult Backend🎨 Frontend: GitHub - CineCult Frontend
