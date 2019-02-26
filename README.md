# Prova Scytl

Este projeto foi desenvolvido com o intuito de realizar a prova do processo seletivo para estágio da Scytl. O desafio proposto foi a criação do _frontend_ de um aplicativo simples, que implementa as funcionalidades de CRUD para uma "agenda" e faz conexão com a API disponibilizada para tal.

A aplicação foi implementada utilizando a tríade HTML, CSS e JavaScript com o objetivo de se obter versões _web_ e _mobile_ da mesma. Para isso, foi utilizado o framework de desenvolvimento de apps híbridos _PhoneGap_. As instruções para o download do PhoneGap e execução do sistema estão na [seção seguinte](#App-PhoneGap).

> Nota: A [última seção](#Web) oferece uma alternativa para testar a aplicação sem a utilização do PhoneGap.


## App PhoneGap

### 1. Instale o PhoneGap

Disponível nas versões [Desktop](http://docs.phonegap.com/getting-started/1-install-phonegap/desktop/) e [CLI](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/).

> Nota: Para a versão CLI, é necessário que se tenha o [Node.js](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) instalado.

### 2. Faça o download do projeto

Clone o projeto localmente e alterne para a branch [_HybridApp_](https://github.com/nahmrodrigues/app-prova-scytl/tree/HybridApp) ou faça o download do arquivo ZIP do projeto (disponibilizado na branch _HybridApp_).

### 3. Rode o servidor

Se você instalou a versão Desktop do PhoneGap, basta rodar o programa, clicar no ícone '+' no canto esquerdo da janela e selecionar a opção para abrir um projeto existente, selecionando, em seguida, a pasta onde se encontra o projeto que você fez o download.

Se você está usando o PhoneGap pela linha de comando, navegue até a pasta do projeto e utilize o comando `$ phonegap serve`.

### 4. Teste a aplicação

Você pode testar a aplicação acessando, pelo browser, a URL _localhost_ na porta utilizada pelo PhoneGap ou diretamente pelo endereço do servidor disponibilizado.

> Ex 1: http://localhost:3000
> Ex 2: http://192.168.1.11:3000

Para testar pelo celular, basta baixar o aplicativo _PhoneGap Developer App_, que está disponível apenas para usuários do Android ([Google Play](https://play.google.com/store/apps/details?id=com.adobe.phonegap.app)) e do WindowsPhone ([Windows Phone Store](https://www.microsoft.com/en-us/p/phonegap-developer/9wzdncrdfsj0)), e conectar com o endereço do servidor disponibilizado.

Para maiores informações sobre como rodar e testar a aplicação, acesse [Preview You App (Desktop App)](http://docs.phonegap.com/getting-started/4-preview-your-app/desktop/), se você está utilizando a versão Desktop do PhoneGap, ou [Preview Your App (CLI)](http://docs.phonegap.com/getting-started/4-preview-your-app/cli/), se você está utilizando a versão CLI.

> Nota: Pode ser que você encontre problemas na execução da aplicação pelo celular, por conta de algumas falhas ainda não resolvidas na utilização da biblioteca mobile do JQuery. É preferível o teste pelo browser.

## Web

Se você prefere não baixar o PhoneGap e quiser testar a aplicação pelo browser, utilizando o pacote _live-server_ do Node.js, basta seguir os próximos passos:

> Nota: Para utilizar o live-server, é necessário que se tenha o [Node.js](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/) instalado.

1. Clone o projeto localmente (ou faça o download ZIP do mesmo), permancendo na branch _master_ ;
2. Utilize o comando `$ npm install -g live-server` para instalar o live-server;
3. Navegue até a pasta do projeto e utilize o comando `$ live-server`;
4. Assim que o servidor estiver disponível, acesse, pelo browser, o endereço do servidor disponibilizado.

    > Ex: http://127.0.0.1:8080
