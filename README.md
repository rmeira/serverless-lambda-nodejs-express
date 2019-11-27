# Serverless Lambda Node.JS Express

Workshop realizado no evento Rocketseat RSXP

## Instalação

Para usar esse projeto você deve ter o node, npm e yarn instalado em sua maquina confira mais informações em: 

- https://nodejs.org/en/
- https://yarnpkg.com/

Para instalar o necessario para rodar o projeto:

````
npm i -g serverless && yarn install

````

## Comandos

Comandos para a configuração do serverless: https://serverless.com/

````
serverless create --template aws-nodejs --name seu-nome-lambda
serverless config credentials --provider aws --key XXX --secret XXX

serverless deploy
serverless remove
````


