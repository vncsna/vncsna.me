---
title: 'Razões para se tornar um Alquimista I'
description: 'Introdução a poções e receitas em Elixir'
author: 'Vinicius Aguiar'
date: '2021-05-04'
coverImage: '/images/elena-mozhvilo-unsplash.jpg'
tags: ['elixir', 'programação funcional']
---

## Introdução a poções e receitas em Elixir

### Digressões

No final da minha última entrevista de emprego (em que não obtive sucesso) o gestor perguntou como eu enxergava meu futuro no cargo e o que gostaria de aprender. Para surpresa de ninguém respondi que gostaria de não estar trabalhando na área e sim estudando algo mais interessante (quem iria imaginar que eu não iria passar no processo seletivo hein), como processing ou programação funcional. Sem entrar no mérito da área ser interessante ou não, afinal é uma questão de preferência, foi uma péssima resposta que me fez refletir melhor se gostaria de trabalhar na área.

Para entender melhor quais seriam meus próximos passos resolvi estudar uma linguagem funcional, e Elixir foi a escolhida. Esses são meus primeiros passos neste paradigma, e não é uma assunto simples. Citando **Joe Armstrong**:

> "When you start working with a new programming language, on the surface it seems that all you are doing is learning a new language. But at a deeper level, you are doing something much more profound — you are learning a new way of thinking."

Por enquanto eu vou me limitar a descrever as características que mais gostei em Elixir, e que se destacaram em relação a outras linguagens que já trabalhei. Espero que ajude a se sentir cativado pela linguagem.

Sinta-se livre para contribuir com comentários, principalmente ao destacar possíveis erros conceituais ou sintáticos.

### Pipe

O pipe é um operador que passa o resultado de uma expressão como primeiro parâmetro da próxima expressão, de acordo com a Elixir School. É bem conveniente quando precisamos passar um valor por uma série operações em cadeia, provendo uma forma de expressarmos melhor o processo.

Note que o pipe é um operador bastante conhecido na comunidade de programação, já foi previamente adotado por F#, Ocaml e Julia. E há pouco tempo atrás o operador foi adotado como síntaxe nativa na linguagem R, apesar de ser utilizado anteriormente. Como programador usual de Python, eu sinto que gostaria de uma feature semelhante.

### Pattern Matching

Segundo a Elixir School, em Elixir o operador de igualdade ou atribuição (=) é na verdade o operador de match. Ele compara os lados esquerdo e direito da expressão, tentando igualar os mesmos, e caso consiga retorna o valor da expressão. Desta forma ao compararmos uma variável não declarada previamente a um valor, atribuímos o valor a variável.

A capacidade de pattern matching se extende muito além dos exemplos apresentados, e em particular acho muito prático para extrair campos específicos de structs. Para conhecer melhor suas capacidades eu indico o próprio Getting Started da Elixir.

### Bônus: O tema drácula para Elixir do VSCode

Uma sólida escolha para visualizar o código de noite. Esse tema é uma extensão do VSCode que permite uma boa visualização do código, em particular gosto do highlight amarelo dos módulos.

### E por onde estou aprendendo?

Comecei a jornada pelo livro Learn Functional Programming with Elixir de Ulisses Almeida, e daí segui pra implementação de programas simples com suporte do Getting Started. Agora estou lendo Programming Phoenix 1.4 de Chris McCord, Bruce Tate e José Valim (O criador da linguagem é BR).

### E quem pode ajudar?

A comunidade é bem ativa e prestativa, apesar das perguntas meio bobas que me vem em mente. (Não se engane, existem perguntas ruins, mas nunca deixe de perguntar). Recomendo conversar em:

- Elug CE
- Elixir BR
- Elixir UTFPR

### Tá, mas o que é um Alquimista?

Um desenvolvedor de Elixir.

### Agradecimentos

Obrigado.
