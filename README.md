# Angellira Test

Projeto de demonstração que combina Material UI com TailwindCSS em uma aplicação React com TypeScript. O objetivo é exibir uma listagem de usuários, filtragem e ordenação dos dados.

---

## 🛠️ Tecnologias

### Framework e Linguagem
- **Framework:** Vite 7.2.4
- **Biblioteca:** React 19.2.0
- **Linguagem:** TypeScript 5.9.3

### Estilização e UI
- **CSS Framework:** Tailwind CSS 4.1.18
- **Biblioteca de Componentes:** Material UI (@mui/material) 7.3.7
- **Animações:** <!-- Adicionar se implementado -->
- **Ícones:** @mui/icons-material 7.3.7

### Gerenciamento de Estado e Formulários
- **State Management:** React useState (nativo)
- **Formulários:** <!-- Adicionar se implementado -->
- **Validação:** <!-- Adicionar se implementado -->

### Autenticação e Internacionalização
- **Autenticação:** <!-- Adicionar se implementado -->
- **i18n:** <!-- Adicionar se implementado -->

### Gráficos e Visualizações
- **Gráficos:** <!-- Adicionar se implementado -->
- **Mapas:** <!-- Adicionar se implementado -->

### HTTP e Utilitários
- **HTTP Client:** <!-- Adicionar se implementado -->
- **Outros:** <!-- Adicionar conforme necessário -->

### Ferramentas de Desenvolvimento
- **Lint:** ESLint 9.39.1
- **Testes:** <!-- Adicionar se implementado -->

---

## 📋 Status do Projeto

### ✅ Features Implementadas
- Integração Material UI + TailwindCSS
- Componente de contador funcional
- Interface responsiva com gradiente
- Botões estilizados com ícones do Material UI
- Uso combinado de classes TailwindCSS e componentes MUI

### 🚧 Em Desenvolvimento
<!-- Adicionar features em andamento -->

### ❌ Não Implementadas
<!-- Adicionar features não entregues -->

### Observações
- O projeto utiliza Emotion para estilização do Material UI
- TailwindCSS versão 4.x (versão mais recente)
- React 19.x (versão mais recente)
- Configuração PostCSS para processamento do Tailwind
<!-- Adicionar observações relevantes sobre UX, performance, deploy, etc -->

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão recomendada: 18+)
- Gerenciador de pacotes: pnpm (recomendado), npm ou yarn

### Instalação
```bash
# Instalar dependências
pnpm install

# Configurar variáveis de ambiente (se necessário)
# cp .env.example .env.local

# Executar em desenvolvimento
pnpm dev
```

### Outros Comandos
```bash
# Build para produção
pnpm build

# Preview do build
pnpm preview

# Executar lint
pnpm lint
```

---

## 📁 Estrutura do Projeto

```
angellira-test/
├── public/          # Arquivos públicos estáticos
├── src/
│   ├── assets/      # Imagens e recursos
│   ├── App.tsx      # Componente principal
│   ├── App.css      # Estilos do App
│   ├── index.css    # Estilos globais e importação do Tailwind
│   └── main.tsx     # Ponto de entrada da aplicação
├── index.html       # HTML base
├── package.json     # Dependências e scripts
├── vite.config.ts   # Configuração do Vite
├── tailwind.config.js   # Configuração do Tailwind
├── postcss.config.js    # Configuração do PostCSS
├── tsconfig.json    # Configuração do TypeScript
└── eslint.config.js # Configuração do ESLint
```

---

## 🚀 Desisões

### Desktop-first

No desenvolvimento do desafio, optei pela abordagem **desktop-first**, pois o principal componente da interface é uma **tabela**, que normalmente é melhor visualizada e utilizada em aplicações desktop.

A implementação foi pensada para funcionar adequadamente em resoluções entre **1000px e 1920px**, garantindo boa legibilidade e organização dos dados.  
Embora essa adaptação não fosse um requisito do desafio, foi considerada para melhorar a experiência do usuário.

### Data Grid

Para a implementação da tabela, optei por utilizar uma versão **open source** de Data Grid, pois a solução **DX Data Grid (DevExtreme React)** requer licença paga.

Considerando o contexto de um desafio técnico, a escolha por uma alternativa open source garante viabilidade do projeto sem comprometer funcionalidades essenciais, além de manter o código acessível para avaliação.
 


---
## 📝 Licença

<!-- Adicionar informações de licença se aplicável -->

---

## 👥 Autor

<!-- Adicionar informações do autor/equipe -->
