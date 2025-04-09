# Disney API com Axios

Este projeto é uma aplicação React que consome a [Disney API](https://disneyapi.dev) para buscar e exibir informações sobre personagens da Disney. Ele utiliza Axios para realizar as requisições HTTP e Tailwind CSS para estilização.

---

## Funcionalidades

- **Busca de Personagens**: Permite buscar personagens da Disney pelo nome.
- **Exibição de Detalhes**: Mostra informações como imagem, nome, filmes e links relacionados ao personagem.
- **Interface Responsiva**: Layout adaptável para diferentes tamanhos de tela.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina.
- Gerenciador de pacotes (npm ou yarn).

### Passos

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd disney-api-with-axios
   ```
2. **Instale as dependências:**
    ```bash
    npm install
    ```
3. **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4. **Acesse a aplicação:** Abra o navegador e vá para http://localhost:5173.

---

## Estrutura do Projeto

```
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── character.jsx
│   │   └── SearchCharacter.jsx
│   ├── service/
│   │   └── api.js
│   └── style.css
```

### Principais Arquivos
- src/App.jsx: Componente principal que  gerencia o estado da aplicação e renderiza os componentes de busca e exibição de personagens.
- src/components/character.jsx: Componente que exibe as informações detalhadas de cada personagem.
- src/components/SearchCharacter.jsx: Componente de entrada de texto para realizar a busca de personagens.
- src/service/api.js: Configuração do Axios para realizar requisições à Disney API.
- tailwind.config.js: Configuração do Tailwind CSS.

### **Tecnologias Utilizadas**
- **React**: Biblioteca para construção de interfaces de usuário.
- **Axios**: Cliente HTTP para realizar requisições à API.
- **Tailwind CSS**: Framework CSS para estilização.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
