# BuscaHashtag-Back

#### Estrutura do projeto
-----------------
::

    BuscaHashtag-Back
    ├── src                     - estrutura do codigo fonte de end-points e serviços, e sub-modulos.
    │   ├── modules             - sub-modulo do end-point procurar por app mais acessado com genero news.
    │   ├──├── hashtag          - sub-modulo hashtag onde fica os end-ponits, servico da api.
    │   ├──├──├── controllers   - sub-modulo controllers hashtag fica os end-points.
    │   ├──├──├── service       - sub-modulo service camda de servico api do twitter.
    ├── config                  - modulo de configuracao da api twitter, recebe as chaves de acesso.
    ├── test                    - modulo de teste de unidade do serviço.

#### Requerimentos
-----------------
* Versão do node.js:

      NODE.JS >= 12.15.0

* Versão do npm:

      NPM >= 6.13.7
      
 
* Na pasta raiz do projeto mude a extensão do .env.exemplo para .env e depois insira as credenciais:

        CONSUMER_KEY: config.TWITTER_CONSUMER_KEY,
        CONSUMER_SECRET: config.TWITTER_CONSUMER_SECRET,
        ACCESS_TOKEN_KEY: config.TWITTER_ACCESS_TOKEN_KEY,
        ACCESS_TOKEN_SECRET: config.TWITTER_ACCESS_TOKEN_SECRET
 

* Na pasta raiz do projeto execute o camando:

      npm install
      

#### Executando a API
-----------------
* No diretório raiz execute o seguinte comando:

      npm run start
  
#### Executando os testes da api
-----------------
* No diretório raiz execute o seguinte comando:

      npm test
