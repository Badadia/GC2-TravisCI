# Travis CI Demo - Exemplo Prático de CI

[![Build Status](https://app.travis-ci.com/usuario-exemplo/travis-ci-demo.svg?branch=main)](https://app.travis-ci.com/usuario-exemplo/travis-ci-demo)

Projeto de exemplo desenvolvido para a apresentação acadêmica sobre **Integração Contínua (CI) com Travis CI**.

## 📌 Objetivos da Demonstração
1. Apresentar a integração nativa entre **GitHub** e **Travis CI**.
2. Demonstrar o arquivo `.travis.yml` com **Build Matrix** (Node.js 18 e 20).
3. Exibir o ciclo de vida da build (install -> script -> status).
4. Demonstrar a proteção de branch impedindo merges com código quebrado.

## 🚀 Como Executar os Testes Localmente
```bash
npm test
```

## 🛠️ Como Conectar ao Travis CI
1. Suba este repositório para o seu GitHub pessoal.
2. Acesse [travis-ci.com](https://www.travis-ci.com) e faça login com sua conta do GitHub.
3. Clique em **"+" (Add Repository)** e ative o botão do repositório `travis-ci-demo`.
4. Faça qualquer `git push` ou abra um **Pull Request**.
5. O Travis CI iniciará a build automaticamente em poucos segundos!
