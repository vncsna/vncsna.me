---
title: 'Sobre aranhas e teias'
description: 'Ou web scraping, a cada qual segundo as suas vontades'
author: 'Vinicius Aguiar'
date: '2022-02-02'
coverImage: '/images/michael-podger-unsplash.jpg'
tags: ['web-scraping', 'python', 'typescript', 'automação']
---

## Prólogo

Bom dia, espero que esteja bem caro leitor. Nesta semana vou apresentar um pouco sobre como criar crawlers e como passar pelos obstáculos mais comuns, com um pequeno exemplo. Por fim espero que as referências indiquem um caminho a ser percorrido em cenários mais desafiadores.

Aliás, escrever sobre crawlers me lembra de dois textos. Um, o primeiro capítulo do livro Network Science, comenta sobre redes e também sobre como o avanço tecnológico permitiu mapear estas redes. O que neste caso se traduz no surgimento da world wide web e o uso de crawlers para mapear a mesma (estou falando de você Googlebot). E o segundo, a história de dois desenvolvedores principais da Google, que juntos foram responsáveis por refatorar o Googlebot. Recomendo como leitura do cafézinho.

## Conhecendo um pouco o Browser

É bem provável que esteja usando um navegador neste momento, logo convido você a entender um pouquinho mais suas ferramentas. Para isto basta abrir outra janela e acessar as ferramentas de desenvolvedor através do atalho `Ctrl+Shift+I`. Nela podemos observar algumas abas:

Na aba `Elements` é possível visualizar a página em formato HTML, já a aba `Console` permite interagir com a página, como um terminal (aliás, já ouviu falar na palavra do zsh). Nesta última vale visualizar os dados disponíveis no `window.navigator`, ou `navigator` e também no `window.chrome`. Eles serão importantes (ou não) mais pra frente.

Outras abas importantes são `Sources` e `Application`. A primeira nos permite ler o código dos arquivos js e css carregados, e a segunda permite o acesso aos cookies, local storage e session storage (que também podem ser acessados pelo console, mas esta aba é bem conveniente). Por fim, mas não menos importante, na aba `Network` é possível visualizar o fluxo das requisições.

Esta última aba é a protagonista da história e por meio dela é possível montar raspadores de dados (vulgos crawlers). Para isso tenha em mente que qualquer automatização deste tipo é um fluxo de requisições, às vezes simples, como o download de uma imagem ou zip; às vezes complexo, com fluxo de autenticação, verificação de fluxo e de humanidade.

## Scraping em Baixo Nível

A primeira forma de criar crawlers é usar requisições de baixo nível, que não são nada mais do requisições HTTP. Abaixo observamos um simples tipo de requisição para obter seu próprio IP (na aba Timeline do Insomnia).

Um workflow para criar crawlers em baixo nível se resume entender o fluxo de requisições através da aba `Network` no browser, refazer este fluxo em um aplicativo como Insomnia ou Postman, e por fim reescrever em código.

Algumas dificuldades nesta fase estão em duplicar corretamente o fluxo de forma que seja aceita pelo site. É bom sempre lembrar de:

- Atualizar o seu user agent, usando pacotes como user-agents;
- Manter a mesma cookie jar, que armazene os cookies atuais para requisições futuras. Feature incluida no scrapy, que pode ser adicionada ao superagent através da integração com o pacote tough-cookie;
- Verificar o uso de headers de autenticação/autorização, como `Authorization`, `Referer`, `Origin` e `Tokens`. Algumas vezes algum endpoint é chamado anteriormente para gerar um bearer token.

Ferramentas que já usei e recomendo são os pacotes `requests` e `beautifulsoup` para casos simples, e `scrapy` em casos mais complexos no caso de Python. E em TypeScript `superagent` com as interfaces em json ou um parser de html, como `node-html-parser`. Neste último caso o uso de interfaces facilita na hora de parsear os dados, e em ambos regex.

```python
def fetch(url, save_path, chunk_size=128):
    r = requests.get(url, stream=True)
    with open(save_path, "wb") as fd:
        for chunk in r.iter_content(chunk_size=chunk_size):
            fd.write(chunk)

    return save_path
```

## Scraping em Alto Nível (Headless Browser)

Alguns casos estão longe de serem tão diretos como baixar um arquivo no formato json com o cabeçalho da requisição correto. Existem empresas com foco em defesa contra bots, como Imperva e Akamai. Para estes casos também existem alternativas criadas pela comunidade, como puppeter, puppeter-extra e playwright (Não necessariamente criados para este problema, e sim para automação de testes em alguns casos. E algumas vezes provavelmente motivados por motivos excusos, sem palavras a mais).

Note que nem tudo são flores. Essas bibliotecas tem um custo em termos de uso de processamento e memória, além do fato que não são uma solução pronta, é necessário trabalhar em cima das mesmas. Outro ponto importante neste caso é a limitação de requisições por IP, o bloqueio geográfico de IPs ou o bloqueio de IPs não residenciais (que sugere a necessidade de usar um provedor de IPs). Não tenho vergonha de só mostrar um exemplo bobo:

Sim, estou fortemente considerando lançar o Wordle as a Service, e talvez até expandir esse serviço. Afinal pertencer a uma comunidade sustentada por esbanjar riqueza (NFTs?) ou inteligência (QI) é tão popular hoje.

Se quiser é possível testar seus crawlers e respectivos comportamentos com Webhook Site e Browser Leaks. Note que existem diferenças entre um headless browser e um browser normal, incluindo a falta de plugins.

## Então, isso é tudo? Não

Analogamente a uma grande quantidade de problemas, este tipo de coleta de dados pode ser tão difícil quanto o contexto demande, ou quanto se queira. Outros desafios que podem ser enfrentados são:

- Monitoramento de múltiplos crawlers;
- Gerenciamentos de provedores de proxy;
- Engenharia reversa em códigos obfuscados;
- Agendamento de extrações (parte da engenharia de dados);
- Tratamento de erros, tanto no tratamento de dados, quanto na indisponibilidade do serviço que esta sendo raspado.

É bom lembrar que várias empresas diferentes lidam com este problema, oferecem seu serviço, e também divulgam suas estratégias, como: HTTP Toolkit, FingerprintJS, ScrapingAnt e Scrapingdog (O mundo conspira para criação do Scrapingcat). Já no Brasil temos também uma empresa especializada no assunto, chamada Crawly.

## Praticando o respeito

Lembre-se de respeitar o robots.txt, se possível e desejável.

## Epílogo

E mais uma vez, muito obrigado pela leitura. A recomendação da vez é assistir Cowboy Bebop (anime, live action nem existe) e Samurai Champloo. Hoje eu me perguntei que eu curto recomendar em geral, nem sei o porquê…

> See You Space Cowboy - Cowboy Bebop (1997)

## Referências

[1] Advanced Web Scraping Tactics
