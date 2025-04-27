---
title: Recuperação da Informação para Leigos
description: Para aqueles que não sabem nada (ainda) sobre RI
date: '2021-03-15'
categories:
  - information-retrieval
  - search-engines
  - data-science
published: true
---

# Motivação

**Meu caro leitor você já precisou usar o Google?**

Dentre os diversos argumentos disponíveis para contextualizar importância da recuperação de informação, creio que este seja o mais relevante. Hoje em dia o mercado de motores de busca é dominado pelo Google, com cerca de 92% de fatia de mercado. É praticamente impossível não conhecer tamanha praticidade que um bom motor de busca proporciona. Essa praticidade é refletida na missão da empresa disponível em about.google.

> "Nossa missão é organizar as informações do mundo para que sejam universalmente acessíveis e úteis para todos." _— Google_

Elucidando melhor o problema solucionado por um motor de busca. Dada uma consulta, o motor de busca tem como objetivo encontrar documentos relevantes a consulta. Esse problema é inerentemente amplo. Vemos que de um lado é necessário tratar de buscas de diferentes tipos de dados não estruturados, como texto, imagem e lugares, e seus diversos formatos. De outro é necessário organizar as informações para que seja possível encontrar documentos relevantes para a consulta solicitada.

# Arcabouço

**O campo de estudo de recuperação de informação trata de recuperar documentos de natureza não estruturada de uma grande coleção que satisfaçam uma necessidade de informação³.**

Isso significa que dentro desta área é realizada pesquisa que trata de melhorar buscas (recuperação de informação) como as seguintes:

- Busca de bugs no stack overflow
- Busca de referências bibliográficas

Essas buscas não são necessariamente triviais, e neste ponto podemos delimitar a diferença entre dado e informação. Enquanto a natureza da busca do primeiro envolve tarefas precisas sem considerar a semântica; a natureza de busca do último envolve tarefas imprecisas com semântica. Essa distinção fica clara com a adição de exemplos de recuperação de dados:

- Textos com a palavra pare
- Imagens com a cor vermelha

# Um pouco mais de formalidade, mas bem pouco

**Seria uma dádiva matemática ser uma linguagem exata? Essa é a pergunta certa?**

Restringimos aqui que a consulta tenha mesmo tipo que os documentos, ou seja, consultamos texto através de texto e imagem através de imagem. Então é possível dividir o problema de criação de um sistema de recuperação de informação em duas funções matemáticas. Uma responsável por extrair características do documento, denotada `f`; e outra responsável por comparar as características extraídas, denotada `g`. Enquanto a primeira função é particular do tipo de dado tratado, a segunda é mais generalista. Isto se dá pelo fato da escolha de representação intermediária ser um vetor de números reais.

Em outras palavras, utilizo uma função para transformar meus documentos em vetores de números reais e outra função para comparar estes valores. Escolhas comuns para funções de extração de características incluem TF-IDF e BM25 para textos; histogramas de cor e LBP para imagens. E escolhas comuns para função de comparação incluem a distância euclidiana e similaridade de cossenos. Essas últimas são intuitivamente generalizações da distância que usamos no dia a dia e o conceito de ângulo.

# Learn by Doing

Acredito muito no _learning by doing_, então munidos da distância euclidiana, similaridade de cossenos e TF-IDF vamos colocar a mão na massa figurativamente. (Pessoalmente recomendo colocar a mão na massa literalmente, se tratando de massa alimentícia, não a de laje. Em particular pastel de abacaxi).

Para isso, ainda no tema de motores de busca, realizei a seguinte consulta "Food Trucks em Manaus", e então coletei títulos da primeira página de respostas como documentos relevantes e títulos da quarta página de respostas como documentos irrelevantes. Logo temos naturalmente um ranqueamento de referência. Note também que é um exemplo bem simples, tanto no fato de não termos documentos representativos (apenas títulos, sem texto), não ser um corpus extenso e não estarmos tratando o texto.

Em seguida aplicamos o algoritmo TF-IDF e visualizamos o corpus. Este último apresenta palavras como: alguns, bambina, chegar, cidade, como, conheça, de, dos, em, endereço, espalhados, food, lei, manaus, melhor, novo, parks, por, principais, projeto, regulamenta, toda, truck, trucks, ônibus. Então observamos o efeito de não realizar tratamento, como a existência de stop words, falta de stemming, e consequentemente palavras duplicadas.

# Observações

Tomem cuidado com a saúde e não saiam de casa caso possível.
