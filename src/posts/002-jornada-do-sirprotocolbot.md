---
title: Jornada do SirProtocolBot
description: Aprendendo sobre a API do Twitter e criando um bot que segue contas relacionadas a protocolos
author: 'Vinicius Aguiar'
date: '2021-01-25'
categories:
  - twitter
  - nodejs
  - bot
published: true
---

# Jornada do SirProtocolBot

<figure>
  <img src="/images/002-001.webp" alt="Uma mão segurando um celular com o Twitter" />
  <figcaption style="text-align: center">
    Photo by Claudio Schwarz | @purzlbaum on Unsplash
  </figcaption>
</figure>
<br/>

Aproveitei o recesso de final de ano para aprender a utilizar a [API do Twitter](https://developer.twitter.com/en/docs/api-reference-index) via pacote [twit](https://www.npmjs.com/package/twit) e ambiente [Node.js](https://nodejs.org/en/), visando analisar dados de marketing no futuro, como aceitação de uma publicação ou marca pelos usuários. Por enquanto aprendi e vou tentar repassar os passos para criação de um bot no twitter e aplicação da sintaxe básica, como (re)twittar e seguir.

Para seguir os próximos passos é necessário ter uma conta no Twitter, GitHub e Heroku, e instalar sistema de controle de versão git e o ambiente Node.js. Suponho que possua também familiaridade com terminal e editor de texto.

## Passos Iniciais: Configuração

Recomendo criar uma conta no twitter para seu bot, incluir um número de celular e email no cadastro, e então aplicar para conta de [desenvolvedor](https://developer.twitter.com/en). Durante esse processo será necessário informar o tipo de projeto, a finalidade do projeto e descrever os detalhes de seu uso.

<figure>
  <img src="/images/002-002.webp" alt="Tela do Twitter Developer Portal mostrando o processo de aplicação" />
  <figcaption style="text-align: center">
    Escolhendo a finalidade do projeto.
  </figcaption>
</figure>
<br/>

Após a confirmação do email, acesse [Overview](https://developer.twitter.com/en/portal/projects-and-apps) no [Developer Portal](https://developer.twitter.com/en/portal/dashboard) e aperte em [Create App](https://developer.twitter.com/en/portal/apps/new) para criar seu aplicativo. Em seguida crie um arquivo de texto denominado _.env_ para armazenar as chaves de acesso como variáveis do ambiente. Essas chaves são responsáveis por autenticar o acesso do seu bot a sua conta e API do Twitter, são únicas e não devem ser compartilhadas.

<figure>
  <img src="/images/002-003.webp" alt="Tela do Twitter Developer Portal mostrando as chaves de acesso" />
  <figcaption style="text-align: center">
    Modelo de arquivo .env sem as chaves.
  </figcaption>
</figure>
<br/>

Na página [Overview](https://developer.twitter.com/en/portal/projects-and-apps) acesse a opção _App settings_ do seu aplicativo para alterar as permissões do mesmo, em seguida gere outras chaves na aba _Keys and tokens_ e as armazene no arquivo _.env_ criado acima.

<figure>
  <img src="/images/002-004.webp" alt="Tela do Twitter Developer Portal mostrando as chaves de acesso na aba Keys and tokens" />
  <figcaption style="text-align: center">
    Exemplo da aba Keys and tokens.
  </figcaption>
</figure>
<br/>

Então crie um novo repositório do GitHub e um aplicativo no Heroku com mesmo nome, como _sir-protocol-bot_. Clone seu repositório do GitHub para uma pasta local e adicione um arquivo de texto _.gitignore_. Este arquivo indica ao controlador de versões que estes arquivos não devem ser sincronizados, desta forma não compartilhamos as chaves, nem arquivos temporários.

<figure>
  <img src="/images/002-005.webp" alt="Tela mostrando o conteúdo do arquivo .gitignore" />
  <figcaption style="text-align: center">
    Modelo do arquivo .gitignore
  </figcaption>
</figure>
<br/>

Na dashboard do heroku acesse [_Settings_](https://dashboard.heroku.com/apps/sir-protocol-bot/settings) e configure as variáveis do ambiente de seu bot em _Config Vars_, isto é, digite as variáveis do arquivo _.env_.

<figure>
  <img src="/images/002-006.webp" alt="Tela do Heroku mostrando a seção Config Vars na aba Settings" />
  <figcaption style="text-align: center">
    Seção Config Vars na aba Settings do aplicativo no Heroku.
  </figcaption>
</figure>
<br/>

Pronto, a configuração das chaves foi realizada com sucesso! Ainda em _Settings_, abra a aba _Deploy_ e autorize a sincronização com o respectivo repositório no GitHub em _Deployment method_, e em seguida ative _Automatic deploys_ na configuração imediatamente abaixo. Desta forma, todo **git push** realizado no seu repositório atualizará seu aplicativo. Note que também existe a opção de usar CLI do Heroku para adicionar as chaves e realizar o deploy.

<figure>
  <img src="/images/002-007.webp" alt="Tela do Heroku mostrando as seções de Deployment na aba Deploy" />
  <figcaption style="text-align: center">
    Seções de Deployment na aba Deploy do aplicativo no Heroku.
  </figcaption>
</figure>
<br/>

Desta forma resta configurar em quais momentos executar o bot. Nesta solução adicionei ao aplicativo o add-on heroku scheduler e configurei um job para executar node bot.js diariamente, dado que o bot não precisava ser executado em algum horário ou intervalo específico. No entanto é possível criar um arquivo Procfile na pasta raiz do seu aplicativo com worker: node bot.js, caso precise de maior controle e flexibilidade sobre o aplicativo.

## Passos Iniciais: Implementação

Os primeiros passos para implementação do bot consistem em executar `npm init -y` em um terminal que esteja aberto na pasta de seu projeto, e então editar como preferir o arquivo `package.json` gerado. Este arquivo contém informações sobre o projeto, como nome, descrição e dependências. Em especial, são adicionados dotenv e twit como dependências.

A lógica principal do programa ficará contida no arquivo `bot.js`, que poderá ser executado pelo comando `node bot.js`.

## SirProtocolBot

Em um segundo experimento com a API do Twitter resolvi seguir uma ideia aleatória que surgiu no feed - um chamado do acaso. O bot procuraria e seguiria contas relacionadas a protocolos, seja pelo nome ou descrição.

Precisei apenas de uma função principal `follow_protocol` para a escolha das contas a serem seguidas e uma função auxiliar `follow_user` que de fato segue um usuário. A função auxiliar envia uma requisição do tipo POST para seguir um usuário com id de valor `user_id`, e então tweeta "Seguindo Usuário?!" ou "Following User!!".

A função principal procura contas relacionadas a protocolos seja pelo nome ou descrição. Então verifica qual é a relação (estado da amizade) atual, e caso possa, segue o usuário.

## Considerações Finais

Espero que esses pequenos bots possam lhe inspirar a criar algo novo e ajudem com os passos iniciais nessa aventura. Boa sorte!

O código dos dois bots pode ser encontrado nos repositórios TweetGourmet e SirProtocolBot. Em caso de curiosidade o usuário SirProtocolBot existe, e está sempre em experimentação.

---

Fonte: [Jornada do SirProtocolBot - Medium](https://medium.com/computando-arte/jornada-do-sirprotocolbot-efc11abaa49b)
