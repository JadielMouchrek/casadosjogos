# WebSite - Casa dos Jogos

Projeto para criação de website de consulta de jogos, nos site o usuários encontrará informações e imagens de jogos, podendo inserir seus comentários sobre o assunto.

[Tela1](https://imgur.com/a/9NI9GUb)
[Tela2](https://imgur.com/ypCk3kh)
[Tela3](https://imgur.com/QwwQ6RO)

# Iniciando
Essas instruções fornecerão uma cópia do projeto em execução na um máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto.
## Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- Angular 10
- Node-js
- Bootstrap
## Desenvolvido com
 - HTML
 - CSS
 - JavaScript
 - TypeScript
## Execução pro projeto
 - O site foi desenvolvido em localhost, para fazer executa-lo será necessário instalar o node.js, utilizar qualquer editor de código, exemplo: Visual Studio Code. 
 No visual Studio pelo terminal deve utilizar o comando ```npm install -g @angular/cli``` e logo após o download terminar, escolher um diretório para colocar a pasta do projeto, após, utilizar o comando ``` cd localdoprojeto ``` e ```ng serve -o ``` para instalar o servidor e mostrar o projeto no navegador
## Api para fazer as requisições
 - [mockAPI](https://mockapi.io/)
## Arquitetura do projeto	
	
	src
		-app
			-pagina
			          -contato
					  -home
					  -lista
					  -menu
		-common
			-apis
			-assets
			-services
		
	
### Stacks
	- O site foi desenvolvido em HTML, CSS e JavaScript
	- Parte do projeto onde conterá os fluxos para transição entre as telas
	- Fiz uso do react-navigation para a transição, ele já possui um conceito de container, switch 

	
### Common
	Coisas comuns para o projeto, entre elas: apis, assets e services
	Nesse caso foi levado em conta que services, seria a parte do projeto responsável por parte 
	da lógica de requisição das informações, elas são montadas na parte de apis
	Para as requests, utilizei o postman

 ### Melhorias
 - O projeto do website ainda sofrerar melhorias como: estilização, renposividade e desing.
## Autores
- Jadiel Elias Mouchrek dos Santos
## Imagens e SVG (Autores)
    Algumas das imagens grátis que utilizei vieram do site (https://www.google.com/)
