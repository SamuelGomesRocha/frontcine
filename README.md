Projeto Final de Introdução à Programação

Aluno:Samuel Gomes Rocha

Nome do Projeto:

Sistema de Bilheteria da Sétima Arte: CineCult

Objetivo:

O projeto tem como objetivo desenvolver um sistema de bilheteria para cinemas, permitindo o cadastro de filmes, a gestão de programações e a venda de ingressos. A aplicação segue um modelo orientado a objetos e busca oferecer uma solução eficiente para o gerenciamento de sessões de cinema.

Público-Alvo:

Administradores e funcionários de cinemas, que podem gerenciar filmes e sessões.

Amantes da Sétima Arte, que podem adquirir ingressos de forma simplificada.

Descrição do Banco de Dados:

O sistema conta com um banco de dados estruturado em três principais entidades:

Filme: Contém informações como título, gênero, direção e duração.

Programação: Relaciona-se com um filme e define horários e salas de exibição.

Ingresso: Associado a um filme e programação, gerenciando a venda e a disponibilidade de assentos.

Os relacionamentos seguem a seguinte lógica:

Um Filme pode ter várias Programações.

Um Ingresso está vinculado a uma Programação, e sua compra reduz a quantidade de assentos disponíveis.

Link para Código-Fonte:

A aplicação foi desenvolvida utilizando arquitetura separada entre frontend e backend, e está disponível nos seguintes repositórios:

Backend: GitHub - CineCult Backend

Frontend: GitHub - CineCult Frontend
