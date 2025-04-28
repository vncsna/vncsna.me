---
title: 'Introdução a CI no GitHub Actions'
description: 'E a introspecção no sábado com sensação térmica de 32º às 7h40min'
author: 'Vinicius Aguiar'
date: '2021-10-21'
coverImage: '/images/007-001.webp'
tags: ['github', 'ci', 'devops', 'automação']
---

# Introdução a CI no GitHub Actions

<figure>
  <img src="/images/007-001.webp" alt="By Roman Synkevych on Unsplash" />
  <figcaption style="text-align: center">
    Photo by Roman Synkevych on Unsplash
  </figcaption>
</figure>
<br/>

## Divagações

- Espero que esteja bem caro leitor, caso eu puder ajudar em algo me avise. A vida é meio aleatória e o requerimento é manter uma constante entrega de valor (Mãe, eu juro que não sou coach, mais respeito por favor).
- Caso esteja buscando um distro de GNU/Linux, atualmente recomendo o elegante Manjaro Sway. É o Manjaro clássico com um toque de tilling compositor, e várias alterações que geram um ambiente confortável. Além disso é uma versão da comunidade reconhecida oficialmente.

## Estudos

**GitHub Actions** é um sistema semelhante ao GitLab CI/CD, Travis CI e Jenkins, capaz de testar o código e realizar deploy através de uma configuração em YAML. Esse sistema permite configurar scripts de integração contínua e deploy contínuo na plataforma do GitHub, com uma síntaxe particular, mas bem simples. Também é possível realizar outros processos através das Actions, como testar os hyperlinks do seu site.

As melhores referências para aprender melhor como as actions funcionam estão na documentação oficial, em Workflow syntax for GitHub Actions e Events that trigger workflows.

Criar um workflow novo é bem intuitivo, para isso basta acessar a aba de Actions, e são apresentados templates de workflows populares que simplificam o processo.

<figure>
  <img src="/images/007-002.webp" alt="Aba das Actions no GitHub" />
  <figcaption style="text-align: center">
    Aba das Actions no GitHub
  </figcaption>
</figure>
<br/>

Um workflow possuí três partes: o nome do workflow (_name_), os "gatilhos" que desencadeiam o processo (_on_) e as tarefas que serão executadas (_jobs_). No caso abaixo a CI do pacote da Base dos Dados é executado caso haja qualquer adição na branch master no repositório (_push_), ou caso exista um pull request que altere as pastas de workflows ou do pacote (_pull_request_), ou até manualmente (_workflow_dispatch_).

```yaml
name: python-ci
on:
  push:
    branches:
      - master
  pull_request:
    paths:
      - .github/**
      - python-package/**
  workflow_dispatch:
jobs:
  guard:
    runs-on: ubuntu-latest
    outputs:
      continue: ${{ steps.changes.outputs.python }}
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Check if there are changes
        uses: dorny/paths-filter@v2
        id: changes
        with:
          filters: |
            python:
              - '.github/**'
              - 'python-package/**'
```

A primeira tarefa executada caso o gatilho tenha disparado é uma verificação de quais arquivos foram alterados. É possível observar que em uma tarefa deve estar determinado qual tipo de máquina virtual é executada (_runs-on_), quais saídas são enviadas para as próximas tarefas (_outputs_), e quais são os passos a serem executados (_steps_).

Os passos por sua vez são divididos em listas. E neste caso check out é o primeiro passo da tarefa **guard**, responsável por garantir o acesso a uma cópia do repositório na máquina virtual. E o segundo verifica se arquivos na pastas `.github` e `python-package` foram alteradas.

Em seguida este workflow testa a formatação e qualidade do código, e também realiza o build tanto em GNU/Linux, quanto em Windows.

## Reflexões

O GitHub Actions como tópico de estudo me parece alcançar o sweet spot de ser simples de aprender e altamente útil na prática. Não é só possível criar workflows de integração contínua ou deploy contínuo, como também:

- Verificar quais links de sua página estão quebrados;
- Validar dados ou metadados com o sistema de PRs;
- E mais, dependendo da sua imaginação…

E a maior desvantagem que percebi até agora é que dependendo do workflow e actions a serem utilizadas, o desenvolvimento parece um processo de tentativa e erro. No entanto, dada a quantidade de actions existentes no GitHub Marketplace, muitos processos já foram automatizados previamente.

## Delírios

- Muito obrigado pela leitura (caros amigos do computando arte).
- Recomendo ouvir Clube da Esquina, é um caminho sem volta.
- Este sábado foi bem quente…

---

Fonte: [Introdução a CI no GitHub Actions - Medium](https://medium.com/computando-arte/introdu%C3%A7%C3%A3o-a-ci-no-github-actions-5b6e9ad1bb64)
