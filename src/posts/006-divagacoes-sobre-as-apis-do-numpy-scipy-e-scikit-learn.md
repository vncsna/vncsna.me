---
title: 'Divagações sobre as APIs do Numpy, Scipy e Scikit-Learn'
description: 'E a fascinação do unsplash com abelhas, ao invés de APIs'
author: 'Vinicius Aguiar'
date: '2021-08-24'
coverImage: '/images/massimiliano-latella-unsplash.jpg'
tags: ['python', 'numpy', 'scipy', 'scikit-learn', 'api']
---

## E a fascinação do unsplash com abelhas, ao invés de APIs

## Prólogo

De vez em quando me encontro no mesmo lugar, basicamente perdido e sem saber o que escrever. A frequência é tamanha que eu me pergunto se realmente sei escrever (não é nem escrever bem, que isso eu nem espero). No entanto eu creio que duvidar de si mesmo é uma tamanha falha (eu acho, acordei particularmente feliz hoje). Recomendo sempre a leitura de Dune, e lembro de uma frase clássica:

> What has mood to do with it? You fight when the necessity arises - no matter the mood! Mood's a thing for cattle or making love or playing the baliset. It's not for fighting. - Gurney Halleck

Em suma, é necessário escrever independentemente do humor (**não generalize para problemas pessoais, físicos ou psicológicos**).

## Abelhas

Você pode se perguntar: "Por que imagens de abelhas?". E a resposta direta é que são as imagens sugeridas pelo unsplash ao pesquisar sobre API. No entanto posso também **exagerar** que a estrutura em que abelhas se organizam são uma ótima analogia para interfaces, afinal estes insetos possuem responsabilidades individuais e conseguem se comunicar de forma clara, aos olhos de um leigo. (Nem sei se isso se enquadra em uma boa definição de interface, mas continuando…)

Na prática, as razões para o design de alguma ferramenta não são claras e, as vezes, apenas produtos do momento. É sobre isso que gostaria de comentar neste post. Principalmente as razões da popularidade de alguns pacotes científicos, sobre a visão dos criadores e minha posterior interpretação.

Note que sempre existe espaço para analogias forçadas, ou até mesmo zero conteúdo, vide How to sound smart in your TEDx Talk.

## NumPy

NumPy surgiu em 2005 como uma unificação dos pacotes numéricos da época, Numeric e Numarray, que dividiam a comunidade de computação científica em Python. Após 16 anos, a biblioteca serve como uma base para o ecossistema de computação científica em Python. O sucesso desta e das demais abordadas, está parcialmente relacionado às escolhas de design realizadas, sejam propositais ou não.

A motivação principal para escrita deste post é a inversão de papéis entre linguagem popular por ser adequada ao próposito geral na década de 2000, e agora popular por ser adequada a computação científica. Como delimitado no artigo Array programming with NumPy:

> Adding fast array operations and linear algebra enables scientists to do all their work within a single programming language - one that has the advantage of being famously easy to learn and teach, as witnessed by its adoption as a primary learning language in many universities.

De certa forma, faz mais sentido trazer a computação científica para uma linguagem de uso geral do que o oposto (como Julia foi desenvolvida), afinal grande parte de computação científica é tratamento de dados geral em formatos simples, como CSV e JSON. Outro ponto elencado sobre popularidade no artigo é a simplicidade e trabalho já exercidos no ecossistema científico em Python. Noto aqui que o desenvolvimento de padrões complexos ou extensos, como padrões web, podem ser utilizados como barreira de entrada para demais competidores.

A combinação de uma linguagem simples, popular e de próposito geral com uma interface simples para um problema específico pode se tornar uma solução para popularizar uma ferramenta. Em seguida é possível visualizar a expansão do ecossistema de computação científica em Python.

As escolhas de design empregadas na API do NumPy se tornaram populares a ponto de influenciar bibliotecas com objetivos semelhantes. O paradigma de programação com arrays é similar em bibliotecas mais novas que tratam tensores em GPUs ou TPUs, como PyTorch, Tensorflow e JAX. Uma vez que o uso de uma interface "padrão" facilita a adoção de uma ferramenta pela comunidade ao diminuir o custo de aprendizado.

## SciPy

O surgimento da biblioteca foi inesperado, conforme os autores:

> SciPy's arrival at this point is surprising and somewhat anomalous. When started in 2001, the library had little funding and was written mainly by graduate students — many of them without a computer science education and often without the blessing of their advisors. To even imagine that a small group of 'rogue' student programmers could upend the already well established ecosystem of research software — backed by millions in funding and many hundreds of highly qualified engineers — was preposterous.

No entanto, outros aspectos da linguagem Python foram elencados como positivos. As virtudes da linguagem foram descobertas, como sua habilidade de utilizar códigos em C e Fortran, sendo logo possível aproveitar bibliotecas científicas com uma sintaxe acessível e popular. Nas palavras de Jim Hugunin:

> I've used almost all of the available numerical languages at one time or another over the past 8 years. One thing I've noticed is that over time, the designers of these languages are steadily adding more of the features that one would expect to find in a general-purpose programming language

Um ponto a comentar é a governança da comunidade, com um comitê de 18 membros com capacidade de realizar commits e merges. Além de um ditador benevolente (Lembre-se que isso nem sempre funciona, vide Vim/Neovim).

Outro problema clássico de contribuições open source é abordado como:

> A problem faced by many open-source projects is attracting and retaining developers. Although it is normal for some individuals to contribute to a project for a while and then move on, too much turnover can result in the loss of institutional memory, leading to mistakes of the past being repeated, APIs of new code becoming inconsistent with the old code and a drifting project scope.

## scikit-learn

O último ponto a ser abordado é um conjunto de princípios e interfaces (APIs) padrões que permitem a extensibilidade do projeto. Vou explicitar o caso da biblioteca scikit-learn, conforme descrito em API design for machine learning software: experiences from the scikit-learn project.

A biblioteca possui poucas dependências, apenas Python, NumPy e SciPy. Foca em legibilidade e eficiência, para facilitar a manutenção e contribuição. Adota os seguintes princípios:

- Consistência (de interface)
- Inspeção (parâmetros são expostos como atributos públicos)
- Não proliferação de classes (apenas algoritmos utilizam classes)
- Composição (quando possível algoritmos são implementados como composição dos demais algoritmos)
- Valores padrões sensatos (isso é meio autoexplicativo).

Também possui duas interfaces principais, de estimador e preditor. A primeira funciona como modelos e fornece o método _fit_, enquanto a segunda herda a primeira e também fornece o método _predict_. Apesar de simples, o fato dos algoritmos implementarem a mesma interface com parâmetros iniciais sensatos faz com que seja simples testar diversos algoritmos sem conhecimento particular dos mesmos. Além da capacidade de composição de algoritmos em uma pipeline.

Pela terceira e última vez (neste post), lembro que o fato de Python ser uma linguagem de propósito geral é essencial para adoção de scikit-learn, pela possibilidade de "acessar dados, pré-processar dados e visualizar dados" no mesmo ambiente, e até mandar o modelo para produção.

## Open Source

Note que apesar dos projetos acima conseguirem sucesso e popularidade através de códigos e comunidade open source, existem diversos desafios de governança para manter um projeto de código livre. Como "evidências anedóticas" (eu até rio com essa expressão), lembro de Should You Open Source Your Startup?, Why I'm leaving Elm e The Hard Parts of Open Source.

**TL;DR:** Open Source sem remuneração é um trabalho ingrato, com alta rotatividade, mas com potencial de marketing. A escolha "certa" é tornar seu código livre caso seu modelo de negócio não se baseie no código. Como exemplo tome a apresentação do Sentry.

Apesar do código ser livre, o custo de instanciar localmente o sentry inclui gastos com servidores e principalmente com a manutenção de outro serviço. Na imagem acima o time de marketing da Sentry explicita que é possível usar o código, mas não sem um alto custo. Da mesma forma, o mantra de código aberto resultar em um maior nível de segurança, não parece se validar. Na prática, existem poucos incentivos para descobrir falhas de segurança alheias de graça.

## Epílogo

Por fim obrigado pela leitura, e dadas tantas simplificações e afirmações sem provas, caso alguma declaração seja descabida, por favor me avise. Alias, outra história que gosto muito é O Guia do Mochileiro das Galáxias, então:

> So Long, and Thanks for All the Fish - Dolphins

## Referências

[1] Array programming with NumPy

[2] SciPy 1.0: fundamental algorithms for scientific computing in Python

[3] API design for machine learning software: experiences from the scikit-learn project
