# UI

Bem-vindo ao desenvolvimento da Interface de Usuário da Plataforma Netuno.

Aqui você pode construir seus dashboards e funcionalidades adicionais.

Esta configuração padrão é baseada em React e Ant.Design, Vite, Bun e PNPM.

Você é livre para alterar, remover ou substituir qualquer tecnologia padrão conforme desejar.

### Requisitos Padrão

PNPM e Bun são necessários no sistema como padrão.

1. [**Instalação do PNPM**](https://pnpm.io/installation)
2. [**Instalação do Bun**](https://bun.sh/docs/installation)

[Mais sobre PNPM e Bun.](https://doc.netuno.org/docs/academy/website/pnpm-bun/)

### Instalar Pacotes

`pnpm install`

### Desenvolvimento do Dashboard (Admin Netuno)

Para trabalhar no dashboard principal (integrado com o Netuno):

1. Rode o comando watch:
   ```bash
   bun run watch
   ```
2. Acesse via Netuno:
   `http://localhost:9000/demux/`

### Desenvolvimento do Portfólio

Para trabalhar na página do Portfólio, você tem duas opções:

#### Opção 1: Desenvolvimento Rápido (Recomendado para UI)
Roda um servidor Vite local. Atualizações rápidas, mas isolado do backend do Netuno.

1. Rode o comando dev:
   ```bash
   bun run dev:portfolio
   ```
2. Acesse via Vite:
   `http://localhost:5173/portfolio.html`

#### Opção 2: Desenvolvimento Integrado
Compila os arquivos para a pasta `public` do Netuno. Use isso para testar a integração final.

1. Rode o comando watch:
   ```bash
   bun run watch:portfolio
   ```
2. Acesse via Netuno:
   `http://localhost:9000/demux/portfolio.html`
