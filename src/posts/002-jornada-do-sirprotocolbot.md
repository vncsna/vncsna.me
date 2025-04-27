---
title: Jornada do SirProtocolBot
description: Aprendendo sobre a API do Twitter e criando um bot que segue contas relacionadas a protocolos
date: '2021-01-25'
categories:
  - twitter
  - nodejs
  - bot
published: true
---

Aproveitei o recesso de final de ano para aprender a utilizar a API do Twitter via pacote twit e ambiente Node.js, visando analisar dados de marketing no futuro, como aceitação de uma publicação ou marca pelos usuários. Por enquanto aprendi e vou tentar repassar os passos para criação de um bot no twitter e aplicação da sintaxe básica, como (re)twittar e seguir.

# Passos Iniciais: Configuração

Para seguir os próximos passos é necessário ter uma conta no Twitter, GitHub e Heroku, e instalar sistema de controle de versão git e o ambiente Node.js. Suponho que possua também familiaridade com terminal e editor de texto.

Primeiro, crie uma conta no twitter para seu bot, inclua um número de celular e email no cadastro, e então aplique para conta de desenvolvedor. Durante esse processo será necessário informar o tipo de projeto, a finalidade do projeto e descrever os detalhes de seu uso.

Após a confirmação do email, acesse _Overview_ no _Developer Portal_ e aperte em _Create App_ para criar seu aplicativo. Em seguida crie um arquivo de texto denominado _.env_ para armazenar as chaves de acesso como variáveis do ambiente. Essas chaves são responsáveis por autenticar o acesso do seu bot a sua conta e API do Twitter - são únicas e não devem ser compartilhadas.

# Passos Iniciais: Implementação

Os primeiros passos para implementação do bot consistem em executar `npm init -y` em um terminal que esteja aberto na pasta de seu projeto, e então editar como preferir o arquivo `package.json` gerado. Este arquivo contém informações sobre o projeto, como nome, descrição e dependências. Em especial, são adicionados dotenv e twit como dependências.

A lógica principal do programa ficará contida no arquivo `bot.js`, que poderá ser executado pelo comando `node bot.js`.

# SirProtocolBot

Em um segundo experimento com a API do Twitter resolvi seguir uma ideia aleatória que surgiu no feed - um chamado do acaso. O bot procuraria e seguiria contas relacionadas a protocolos, seja pelo nome ou descrição.

Precisei apenas de uma função principal `follow_protocol` para a escolha das contas a serem seguidas e uma função auxiliar `follow_user` que de fato segue um usuário. A função auxiliar envia uma requisição do tipo POST para seguir um usuário com id de valor `user_id`, e então tweeta "Seguindo Usuário?!" ou "Following User!!".

A função principal procura contas relacionadas a protocolos seja pelo nome ou descrição. Então verifica qual é a relação (estado da amizade) atual, e caso possa, segue o usuário.

# Considerações Finais

Espero que esses pequenos bots possam lhe inspirar a criar algo novo e ajudem com os passos iniciais nessa aventura. Boa sorte!

O código dos dois bots pode ser encontrado nos repositórios TweetGourmet e SirProtocolBot. Em caso de curiosidade o usuário SirProtocolBot existe, e está sempre em experimentação.
