


# Plataforma Marvel

  

## 📎Sobre o Projeto

  

Um site dedicado a apresentar personagens, filmes e quadrinhos do universo Marvel. Este projeto foi iniciado com Vite e desenvolvido utilizando React, TypeScript e Styled Components, com foco em responsividade e experiência do usuário.


## 🚀Como Rodar o Projeto
Para iniciar a Aplicação em sua máquina local, siga os passos abaixo:

### Clone o repositório

    git clone git@github.com:mguedesdev/Plataforma-Marvel.git

### Entre na pasta do projeto

    cd Plataforma-Marvel-Teste

### Instale as dependências

    npm install

### Inicie a aplicação

    npm run dev


## 🖥️ Tecnologias Utilizadas

 - [**React**](https://reactjs.org/): Para construção da interface de usuário.
   
  - [**TypeScript**](https://www.typescriptlang.org/): Linguagem de programação que adiciona tipagem ao JavaScript.
   
  - [**Styled Components**](https://styled-components.com/): Biblioteca para escrever CSS-in-JS, permitindo estilos mais dinâmicos e reutilizáveis.
   
   - [**Vite**](https://vitejs.dev/): Ferramenta de build moderna que garante uma experiência de desenvolvimento mais rápida e eficiente.
   
   -   **[LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)**: Armazenamento de dados no navegador.
   
   -    **[Media Queries](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_media_queries/Using_media_queries)**: Para que o site seja responsivo e adaptável a diferentes tamanhos de tela.

  

## 🗄️Estrutura do Projeto

  

### 📁Pastas Principais

  

- `assets/`: Contém todos os recursos visuais e gráficos, como imagens, fonts e SVGs, organizados em categorias para fácil acesso e manutenção.

  - `Characters/` 

  - `Comics/`

  - `Fonts/`

  - `Logos/`

  - `Posters/`

- `components/`: Reúne componentes reutilizáveis da aplicação.
Cada componente é organizado em seu próprio subdiretório, contendo o arquivo `.tsx` para a lógica do componente e um arquivo de estilo Styled Component correspondente.

- `data/`: Armazena dados estáticos usados na aplicação, incluindo personagens, quadrinhos e filmes, acompanhados de arquivos `.d.ts` para definições de tipos TypeScript.

- `pages/`: Inclui os componentes de página para diferentes seções do site, como páginas de personagens, filmes, quadrinhos e a página de login.

- `routes/`: Define as rotas da aplicação usando React Router, garantindo uma navegação fluida entre as diferentes seções do site.

- `styles/`: Contém arquivos de estilo globais e animações, centralizando a definição de estilos comuns e animações para reutilização em toda a aplicação.

- `types/`: Agrupa as definições de tipos TypeScript globais, melhorando a manutenção e escalabilidade do código.

  

### 💡 Principais Componentes

- `AlertLogin`: Exibe notificações de sucesso ou erro relacionadas ao login e cadastro.

- `ButtonsCard`: Permite a navegação entre os cards na interface principal.

- `Card` e `CardDetails`: Apresentam informações detalhadas sobre personagens, filmes e quadrinhos.

- `CustomSelectFilter`: Oferece opções de filtragem para a lista de filmes, como ordenação por data de lançamento ou ordem cronológica.

- `Header`: Componente de navegação que inclui menu e links para diferentes seções do site.

- `ImageBg`: Componente de fundo utilizado em todas as páginas para consistência visual.

- `LoginForm`: Gerencia os formulários de login e cadastro, incluindo validação e interação com o LocalStorage para autenticação do usuário.

- `Logo`: Exibe o logotipo animado da Marvel, presente no cabeçalho e na página de login.

- `MainPage`: Componente central que organiza e exibe os cards, permitindo aos usuários interagir com o conteúdo principal.

## 📑Sobre a Página: LoginPage

Esta página permite que os usuários façam login em suas contas existentes ou se registrem para criar uma nova conta.

### ✒️Componentes Utilizados

-   **Logo**: Exibe o logotipo da Marvel, com animação de entrada na página.
-   **ImageBg**: Responsável pelo background da páginal.
-   **LoginForm**: Este é o componente central da página, gerenciando as ações de login e cadastro, incluindo a validação de formulários.

### 🪄Gerenciamento de Estado

-   `useState` é usado para gerenciar o estado local da página, incluindo alternar entre modos de login e registro.
-   `useEffect` é empregado para controlar a animação inicial e verificar o LocalStorage para um login automático.

### 💾 Navegação Automática com LocalStorage

A página verifica o LocalStorage para identificar se o usuário optou por 'lembrar o login'. Se as credenciais estiverem armazenadas e validadas, o usuário é automaticamente redirecionado para a página principal de personagens.

### ✅ Considerações de Segurança 

***Importante destacar que o sistema de cadastro e login foi implementado com o objetivo principal de demonstração e uso do LocalStorage, e não representa um modelo seguro para autenticação. Não são realizadas validações complexas de credenciais, como a verificação de formato de email ou a segurança da senha. Portanto, a implementação atual é adequada apenas para fins de demonstração***

## 📑Sobre as Páginas de Personagens, Quadrinhos e Filmes

As páginas de Personagens, Quadrinhos e Filmes são componentes-chave, oferecendo aos usuários uma visão detalhada de cada aspecto. Apesar de terem propósitos distintos, as três páginas compartilham uma estrutura e estilo similares, garantindo consistência e uma experiência de usuário fluida.

### ✒️ Estrutura Comum das Páginas

#### Componentes Utilizados

-   **MainPage**: Componente central que gerencia a exibição dos cards de personagens, quadrinhos ou filmes.
-   **ImageBg**: Fornece um fundo consistente para todas as páginas, melhorando a estética visual.
-   **ButtonsCard**: Permite a navegação entre os cards, adicionando interatividade à experiência do usuário.

####  Layout e Estilos

-   **MainContainer**: Define o layout principal da página, ajustando o alinhamento e o espaçamento.
-   **MainContent**: Contém o componente MainPage e, no caso da página de filmes, o CustomSelect para filtragem.

### ⚙️Especificidades de Cada Página

#### Página de Personagens

-   Exibe informações sobre personagens da Marvel, utilizando os dados de `charactersData`.

#### Página de Quadrinhos

-   Mostra detalhes sobre quadrinhos da Marvel, usando os dados de `comicsData`.

#### Página de Filmes

-   Apresenta informações sobre filmes da Marvel.
-   **CustomSelectFilter**: Permite aos usuários filtrar filmes por data de lançamento ou ordem cronológica, utilizando um sistema de ordenação customizado.

### 🔎Ordenação na Página de Filmes

A página de filmes possui uma funcionalidade única de ordenação.
Os usuários podem escolher visualizar os filmes por data de lançamento ou ordem cronológica.
Isso é gerenciado pelo estado `filter` e a função `sortMovies`, que organiza os dados de `moviesData` com base no critério selecionado.


# ☑️Principais Components

## 🧩MainPage

O `MainPage` é usado nas páginas de Personagens, Quadrinhos e Filmes. Este componente gerencia a exibição dos cards e a navegação entre eles.

### 🪄Funcionalidades

-   **Exibição de Cards**: `MainPage` cria um layout de grade para exibir os cards de conteúdo (personagens, quadrinhos ou filmes).
-   **Navegação entre Cards**: Permite que os usuários naveguem pelos cards utilizando um sistema de índice.

### 🎨Estrutura e Estilos

#### CardsContainer

-   `display: grid`: Define o layout em grade para os cards.
-   `grid-template-columns`: Configura três colunas de igual tamanho para exibir os cards lado a lado.
-   `grid-template-rows`: Define a altura de cada card.
-   `gap`: Espaçamento entre os cards.
-   `margin-top`: Espaço superior para alinhamento.
-   Responsividade: Ajusta o layout para dispositivos de diferentes tamanhos, mudando para uma única coluna em telas menores.

#### CardContainer

-   `position`: Estabelece a posição relativa do container.
-   `width` e `height`: Define a largura e altura do container.
-   Responsividade: Oculta os cards adicionais em telas menores, exibindo apenas o primeiro.

### 🎲Manipulação de Dados e Interação

-   `data`: Recebe um array de `CardItem[]` contendo os dados a serem exibidos.
-   `start`: Índice para controle da navegação entre os cards.
-   `selectedCardId` e `setSelectedCardId`: Gerenciam o estado do card selecionado.
-   `handleSelectCard`: Função para manipular a seleção de um card.
-   `getDisplayedItems`: Lógica para determinar quais itens devem ser exibidos com base no índice `start`.

## 🧩Card

O `Card` é usado para exibir informações sobre personagens, filmes e quadrinhos. Este componente é interativo, permitindo aos usuários expandir os cards para ver detalhes adicionais.

### 🪄Funcionalidades

-   **Exibição de Informações**: Mostra a imagem e informações básicas do item (personagem, filme ou quadrinho).
-   **Interatividade**: Os usuários podem clicar para expandir o card e ver mais detalhes.
-   **Integração com Componentes Filhos**: Utiliza `CardDetails` e `CardContent` para mostrar informações adicionais e específicas.

### 🎨Estrutura e Estilos

#### CardContainer

-   `display`: Define a exibição do container do card.
-   `position`: Posicionamento relativo ou absoluto, dependendo se o card está expandido ou não.
-   `justify-content` e `align-items`: Alinhamento dos itens dentro do card.
-   `height` e `width`: Dimensões do card.
-   `border-radius` e `overflow`: Estilização para arredondamento e gerenciamento de conteúdo excedente.
-   `animate`: Animação de entrada para os cards.
-   Responsividade: Adaptação para diferentes tamanhos de tela.

#### CardContent

-   `padding` e `font-family`: Estilização do conteúdo interno.
-   `background`: Gradiente de cor para o fundo.
-   `::-webkit-scrollbar`: Estilização da barra de rolagem.
-   Responsividade: Ajuste das dimensões e fontes para telas menores.

#### BtnDetails

-   `font-family`: Fonte utilizada no botão.
-   `background-color` e `color`: Estilos do botão.
-   `transition`: Efeito de transição ao interagir com o botão.
-   Responsividade: Ajuste do tamanho da fonte para telas menores.

#### ModalContainer

-   `position`: Fixo para cobrir toda a tela quando os detalhes estão abertos.
-   `background`: Gradiente para efeito de sobreposição.
-   `animation`: Animação de fade in ou fade out.

### Interação e Funcionalidade

-   `useState` para gerenciar a abertura e fechamento dos detalhes do card.
-   `handleDetails`: Função para alternar a exibição dos detalhes.
-   `isCardSelected`: Verifica se o card atual é o selecionado para expandir.

### 🎈 Componentes Filhos

 - **CardDetails**

   -   Exibe detalhes adicionais, como aparições, críticas e avaliações.
   -   Alterna entre visualizações com base no tipo de item (filme ou personagem).

- **CardContent**

   -   Mostra informações extras específicas para filmes, como disponibilidade em streaming ou para compra.


## 🧩Header

O `Header` serve como o principal ponto de navegação para os usuários. Ele oferece links para as diferentes seções do site (Personagens, Filmes e HQs) e inclui um sistema de autenticação e menu responsivo.

### 🪄 Funcionalidades

-   **Navegação**: Links para as principais seções do site.
-   **Autenticação de Usuário**: Botão de saída que remove dados de autenticação e redireciona para a página inicial.
-   **Menu Responsivo**: Um menu que se adapta a diferentes tamanhos de tela, incluindo um botão de menu para telas menores.

### 🎨 Estrutura e Estilos

#### HeaderContainer

-   `padding` e `box-shadow`: Estilização básica do cabeçalho.
-   `position`: Fixo, para manter o cabeçalho visível durante a rolagem da página.
-   `background-color`: Fundo preto para destacar os elementos do cabeçalho.
-   `@media`: Estilos para telas de tablet e menores, incluindo a exibição condicional de um overlay escuro quando o menu está ativo.

#### Nav

-   `display`: Flex para alinhar os elementos do menu.
-   `gap`: Espaço entre os links de navegação.
-   `@media`: Estilos para uma navegação vertical em telas menores, incluindo transições suaves para a exibição do menu.

#### StyledNavLink

-   `color` e `font-size`: Estilização dos links de navegação.
-   `transition`: Efeito suave na interação do usuário.
-   `@media`: Ajustes de tamanho de fonte para responsividade.

#### ProfileContainer e ProfileImage

-   `display`: Flex para alinhamento e espaçamento dos elementos do perfil.
-   `@media`: Ajustes de posicionamento e tamanho para responsividade.

#### ButtonExit

-   `opacity` e `transition`: Efeito visual para o botão de saída.
-   `@media`: Ajuste do tamanho da fonte para telas menores.

#### MenuButton

-   `display`: Oculto em telas maiores e visível em telas menores.
-   `@media`: Exibição do botão de menu em telas de tablet e menores.

### 🤖 Interação e Lógica

-   `useState` para gerenciar a visibilidade do menu em telas menores.
-   `useNavigate` do React Router para redirecionamento após o logout.
-   `handleLogout`: Remove os dados de autenticação do localStorage e redireciona para a página inicial.
-   `handleShowMenu`: Alterna a visibilidade do menu em dispositivos móveis.

### ✍️ Uso

Este componente é utilizado em todas as páginas da aplicação, fornecendo uma experiência de navegação consistente e eficiente para o usuário. Seu design responsivo garante que a funcionalidade do menu seja mantida em diferentes tamanhos de tela, enquanto a opção de logout aumenta a segurança do usuário ao sair da plataforma.


## 🧩 LoginForm
☑️💢🎈🎨🪄⚙️💾📚✒️🧩🎲
O `LoginForm` é responsável pela autenticação do usuário. Ele oferece a funcionalidade de login e cadastro, incluindo a opção de lembrar o usuário para futuras sessões.

### 🪄 Funcionalidades

-   **Login e Cadastro**: Formulários para autenticação e registro de usuários.
-   **Lembrar Usuário**: Opção de "Lembrar login" que mantém o usuário logado entre sessões.
-   **Validações e Alertas**: Verificações de senha durante o cadastro e exibição de alertas para sucesso ou falha na autenticação.

### 🎨 Estrutura e Estilos

#### Form

-   Estilizado para flexibilidade e responsividade.
-   Animação `fadeIn` aplicada com base na propriedade `animate`.
-   Estilos `media query` para adaptabilidade a diferentes tamanhos de tela.

#### Inputs e Botões

-   Inputs para coleta de informações do usuário, como nome de usuário e senha.
-   Botões estilizados para ações de login e cadastro.

#### SaveLogin e CheckBox

-   Opção para o usuário escolher salvar o login.
-   CheckBox estilizado para uma aparência consistente com o design do site.

#### Register

-   Seção para alternar entre login e cadastro, facilitando a navegação do usuário entre essas opções.

### 🤖 Interação e Lógica

-   Uso de `useState` para gerenciamento de estado dos inputs e opções do formulário.
-   `useNavigate` do React Router para redirecionamento após autenticação bem-sucedida.
-   Funções `handleSignup` e `handleLogin` para gerenciar o processo de cadastro e login, respectivamente.
-   `activeAlert` para exibir alertas informativos ao usuário.

### ✍️ Uso

Este componente é utilizado na página de login, oferecendo uma experiência de autenticação segura e amigável. É importante notar que, por motivos de simplicidade, o sistema de autenticação atual baseia-se no localStorage e não oferece segurança robusta para dados sensíveis. Portanto, o uso desta implementação em um ambiente de produção real exigiria revisões e melhorias significativas em termos de segurança e validação de dados.


## ✉️Contato
Entre em contato comigo através do linkedin 😊
[Linkedin](https://www.linkedin.com/in/mathheusg/)
