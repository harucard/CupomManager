<h1CupomManager</h1>

CupomManager é um app desenvolvido para validar cupons,possibilitando criar,editar,deletar e consultar.

###Requerimentos

Para a implementação  do CupomManager foi utilizado o Windows 10  as seguintes ferramentas:

NodeJS v14.7
Xampp v3.2.4
Visual Studio Code
composer v2.0.3
laravel

  #NodeJS
  
  Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript que execute código de JavaScript a nível backend e frontend (dependendo apenas das bibliotecas e dos frameworks usados para esse mesmo fim). O runtime de JavaScript é constituído pelos seguintes commandos - node package manage (npm), e npx (node package extractor). Ao passo que o primeiro comando tem como propósito correr código armazenado num package de nodejs, e instalar software globalmente ou localmente, já o npx (node package extractor), tem como propósito instalar a nível local código instalado globalmente. Um exemplo disso é o npx create-react-app que tem como propósito instalar a nível local um template vazio de um site de react, pronto a ser usado, através de uma fórmula instalada com npm. Tudo isto é escrito em C++ e boost com paralelização, resultando numa tecnologia opensource bem mais robusta do que JavaScript, tal como o conhecia-mos no final dos anos 90, inícios da década de 2000 (aliás a própria sintaxe foi completamente alterada desde então, se bem que mantém-se bem trabalhado para fins de backward compability). Node.js usa recorrentemente language bindings com sistemas de JavaScript mais universais, de modo a permitir, efetivamente backwards compability, e garantirmos-nos que há o mínimo de deprecações no código com o passar do tempo. Exceções disso, são alguns de JavaScript vanilla, que não são incluídos em node mas que fazem parte de JavaScript vanilla, e que podem ser importados para nodejs. Um exemplo disso é o comando readine(), que precisa de ser importado e sofre de algumas alterações. Ainda assim o código é bem mais buletproof do que o código de Python, que depreca com relativa facilidade. O código de nodejs é baseado em event-driven architecture sendo capaz de asynchronous I/O. O código de node.js é optimizado para ser corrido em tempo realm tratando-se também de um ditribuído. O Node.js (ambiente de execução Javascript no servidor) foi implementado baseado no interpretador V8 JavaScript Engine (interpretador de JavaScript em C++ com código aberto do Google, utilizado no Chrome), com desenvolvimento mantido pela fundação Node.js em parceria com a Linux Foundation.
  
   #Xampp
   
   XAMPP é um pacote com os principais servidores de código aberto do mercado, incluindo FTP, banco de dados MySQL e Apache com suporte as linguagens PHP e Perl. De plataforma, software livre, que consiste principalmente na base de dados MySQL, o qual foi substituído pelo MariaDB(embora ainda seja utilizado MySql em algumas versões), o servidor web Apache e os interpretadores para linguagens de script: PHP e Perl,além de um cliente FTP. O nome provem da abreviação de X (para qualquer dos diferentes sistemas operativos), Apache, MariaDB, PHP, Perl. É um método que torna extremamente fácil para os desenvolvedores a criar um servidor web local para fins de teste.
   
   #Visual Studio Code
   
   O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. Ele também é customizável, fazendo com que os usuários possam mudar o tema do editor, teclas de atalho e preferências. Ele é um software livre e de código aberto, apesar do download oficial estar sob uma licença proprietária.

O Visual Studio Code é baseado no Electron, uma framework que é usada para desenvolver aplicativos Node.js para o desktop rodando no motor de layout Blink. Apesar de usar o Electron como framework, o software não usa o Atom e em seu lugar emprega o mesmo componente editor (codenomeado "Monaco") usado no Visual Studio Team Services (anteriormente chamado de Visual Studio Online).

#Composer

O Composer é do que um gerenciador de dependências. Com ele você define a lista de bibliotecas (e versões) das quais o seu projeto depende, e ele cuida da instalação, organização e “inclusão” das mesmas.Como em nossa estrutura a instalação é feita de forma diferente de outros ambientes, nós disponibilizamos este passo a passo. Porém, qualquer problema pedimos que contacte seu desenvolvedor.

###Configuração e instalação das ferramentas
 
 O ambiente de desenvolvimento deve ser configurado utilizando os seguintes passos:
 
 1-Instale o NodeJS
   A instalação do NodeJS é bem tranquila.Basta baixar o arquivo executavel e instalar seguindo os passos padrões durante a instalação.
 2-Instale Xampp
   Durante a instalação do Xampp,haverá a opção de escolher servidores e algumas ferramentas.Por padrão o Xampp instala o PHP e o Apache.Durante a instalação,marcar o servidor      MySql para instalação e marcar a opção que coloca o php no path do sistema.
 3-Execute o Xampp e inicie o servido apache e o MySQL 
 4-Baixe o codigo fonte do projeto no repositório https://github.com/harucard/CupomManager
 4-Após baixar o projeto,abra o prompt de comando no caminho da pasta dos arquivos e execute para instalar as dependências  o seguinte comando: 
        NPM INSTALL
 5-Abra o terminal na pasta dos arquivos e execute
       PHP artisan serve
 6-Acesse o navegador no endereço localhost:8000 e se tudo estiver correto o app irá carregar
 7-acesse localhost no browser e entre no PhPMyAdmin e crie uma base de dados.
 8-Para conectar ao banco edite as variáveis DB_DATABASE(nome do banco),DB_USERNAME(usuario),DB_PASSWORD(senha)  do arquivo .env na raiz do projeto. 
 
 ### Funcionalidades Implementadas
 
 Tela de checkout
 Tela de gerenciamento de cupos
 Tela de adição e edição dos cupons
 Criação das tabelas de produto,venda e cupom
 Implementação das validações de inserção e update no BackEnd 
 Implementação utilizando a biblioteca ReactJS
 Utilização do Bootstrap 4 para estilizão da telas
 Criação das Funções CRUD(Create,Read,Update,Destroy) no FrontEnd
 Implementação das migrations,models,controllers,requerido no padrão MVC como especificação do laravel
 
 ###Funcionalidades não implementadas
  
  Regra de Validação dos Cupons
  Função do Input para entrada do nome do cupom na tela do carrinho
  Função do Botão Venda
  
  
 ###Considerações
 
 A respeito das funcionalidades não implementadas,é importante afirmar que as funcionalidades estão implementadas em códigos mas os dados não estão sendo carregados nas telas
 pois alguns componentes do React utiliza o conceito de componenetes controlados e não controlados,que tem como vantagem um  maior controle do componente mas dificulta a implementação demandando mais tempo
 
 
 
 
 
 
 
 
 
   
 


 
   
   
