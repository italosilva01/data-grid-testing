# Angellira Test

Aplicação React com TypeScript que exibe uma listagem completa de funcionários utilizando Material UI e TailwindCSS. O projeto implementa busca/filtro em tempo real, ordenação de dados, gerenciamento de estado com Context API e integração com API externa.

---

## 🛠️ Tecnologias

### Framework e Linguagem
- **Framework:** Vite 7.2.4
- **Biblioteca:** React 19.2.0
- **Linguagem:** TypeScript 5.9.3

### Estilização e UI
- **CSS Framework:** Tailwind CSS 4.1.18
- **Biblioteca de Componentes:** Material UI (@mui/material) 7.3.7
- **Ícones:** @mui/icons-material 7.3.7

### Gerenciamento de Estado
- **State Management:** Context API + React useState

### HTTP e Utilitários
- **HTTP Client:** Axios 1.13.3 (com interceptors)
- **Notificações:** Sonner 2.0.7 (toast notifications)
- **Data Grid:** DevExpress DX React Grid 4.0.11 (open source)
- **Outros:** UUID 13.0.0

### Ferramentas de Desenvolvimento
- **Lint:** ESLint 9.39.1
- **Testes:** <!-- Adicionar se implementado -->

---

## 📋 Status do Projeto

### ✅ Features Implementadas
- Listagem de funcionários com DevExpress DX React Grid
- Busca e filtro de funcionários em tempo real
- Ordenação de dados na tabela (ascendente/descendente)
- Loading state com skeleton loader animado
- Error state com componente dedicado e mensagem amigável
- Context API para gerenciamento de estado global
- Integração com API externa (JSONPlaceholder)
- Interceptors HTTP com tratamento de erros e notificações toast
- Interface responsiva desktop-first (1000px - 1920px)
- Combinação Material UI + TailwindCSS
- Componentes reutilizáveis e modulares (Header, Footer, Table, Search)
- Arquitetura feature-based com path aliases

### Observações Técnicas
- **Emotion**: Utilizado para estilização do Material UI
- **TailwindCSS 4.x**: Versão mais recente com configuração PostCSS
- **React 19.x**: Versão mais recente com novos recursos
- **Axios com Interceptors**: Tratamento centralizado de erros HTTP com notificações amigáveis
- **DevExpress DX React Grid**: Solução open source para tabelas complexas
- **Sonner**: Toast notifications com design moderno e acessível
- **Context API**: Gerenciamento de estado compartilhado entre componentes
- **TypeScript**: Tipagem forte em toda a aplicação para maior segurança
- **Path Aliases**: Imports organizados com @/, @shared/, @features/, @config/
- **Arquitetura Feature-Based**: Código modular e escalável

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
├── public/                    # Arquivos públicos estáticos
│   └── vite.svg
│
├── src/                       # Código fonte da aplicação
│   ├── assets/                # Imagens e recursos estáticos
│   │   └── react.svg
│   │
│   ├── config/                # Configurações globais
│   │   ├── constants.ts       # Constantes da aplicação
│   │   └── index.ts           # Exportações do módulo config
│   │
│   ├── features/              # Módulos de negócio isolados (feature-based)
│   │   └── (preparado para features futuras)
│   │
│   ├── shared/                # Código compartilhado entre features
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── ErrorState/    # Componente de estado de erro
│   │   │   │   ├── ErrorState.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/        # Rodapé da aplicação
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Header/        # Cabeçalho da aplicação
│   │   │   │   ├── Header.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Search/        # Componente de busca/filtro
│   │   │   │   ├── Search.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Table/         # Componente de tabela com skeleton
│   │   │   │   ├── Table.tsx
│   │   │   │   ├── Table.skeleton.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts       # Exportações de componentes
│   │   │
│   │   ├── context/           # Context API para gerenciamento de estado
│   │   │   └── EmployeeContext/
│   │   │       ├── employee.context.ts      # Definição do contexto
│   │   │       ├── EmployeeContext.tsx      # Provider do contexto
│   │   │       └── index.ts
│   │   │
│   │   ├── hooks/             # Custom hooks reutilizáveis
│   │   │   ├── useEmployeeFilters.ts        # Hook para filtros de funcionários
│   │   │   └── useEmployees.ts              # Hook para dados de funcionários
│   │   │
│   │   ├── services/          # Serviços e integrações externas
│   │   │   └── api/           # Configuração de API
│   │   │       ├── api.config.ts            # Configurações da API
│   │   │       ├── api.instance.ts          # Instância do cliente HTTP
│   │   │       └── index.ts
│   │   │
│   │   ├── types/             # Definições TypeScript
│   │   │   ├── address.ts     # Tipos relacionados a endereços
│   │   │   ├── apiEmployee.ts # Tipos da API de funcionários
│   │   │   ├── company.ts     # Tipos relacionados a empresas
│   │   │   └── employee.ts    # Tipos de funcionários
│   │   │
│   │   └── utils/             # Funções utilitárias
│   │
│   ├── App.tsx                # Componente principal da aplicação
│   ├── App.css                # Estilos do componente App
│   ├── main.tsx               # Ponto de entrada da aplicação
│   └── index.css              # Estilos globais e importação do Tailwind
│
├── index.html                 # HTML base
├── package.json               # Dependências e scripts
├── pnpm-lock.yaml             # Lock file do pnpm
├── vite.config.ts             # Configuração do Vite
├── tailwind.config.js         # Configuração do Tailwind CSS
├── postcss.config.js          # Configuração do PostCSS
├── tsconfig.json              # Configuração base do TypeScript
├── tsconfig.app.json          # Configuração do TypeScript para app
├── tsconfig.node.json         # Configuração do TypeScript para Node
└── eslint.config.js           # Configuração do ESLint
```

### Arquitetura Feature-Based

O projeto segue uma **arquitetura feature-based**, organizando o código em módulos isolados e reutilizáveis:

- **`config/`** - Configurações globais e constantes da aplicação
- **`features/`** - Módulos de negócio isolados (preparado para expansão futura)
- **`shared/`** - Código compartilhado entre features, incluindo:
  - Componentes UI reutilizáveis
  - Context API para gerenciamento de estado
  - Custom hooks
  - Serviços de integração
  - Definições de tipos TypeScript
  - Funções utilitárias

### Path Aliases Configurados

```typescript
@/           → src/
@features/   → src/features/
@shared/     → src/shared/
@config/     → src/config/
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

#### Filtros do Data Grid

Optei por **não utilizar os filtros internos do Data Grid**, pois, mesmo quando desativados, os elementos de filtro continuavam sendo **renderizados visualmente** na interface.

Para evitar inconsistências visuais e manter maior controle sobre a experiência do usuário, a filtragem foi implementada de forma externa.

 
### Context API

Optei por utilizar a **Context API**, pois esse era um dos **requisitos opcionais** do desafio.

Embora para o escopo atual a solução possa ser considerada um leve overengineering, a escolha foi feita com o objetivo de atender ao critério proposto e demonstrar a aplicação da Context API de forma controlada.

---

## 👥 Autor
Francisco Italo Silva do Nascimento
<!-- Adicionar informações do autor/equipe -->
