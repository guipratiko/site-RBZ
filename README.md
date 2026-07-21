# RBZ Representações - Site

Site institucional da RBZ Representações (Next.js App Router + TypeScript + Tailwind CSS v4).

Escopo desta etapa (MVP): páginas institucionais (Home, Sobre, Marcas, Showroom, Contato, Seja Parceiro, Política de Privacidade) com formulários de captação de lead integrados via webhook. Blog e painel administrativo ficam para uma próxima etapa (ver plano em `.claude/plans` ou a memória do projeto).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Configure `N8N_WEBHOOK_URL` em `.env.local` (veja `.env.example`) - é o único lugar onde essa URL é lida, sempre no servidor (nunca exposta ao cliente).

## Build e verificação

```bash
npm run lint
npm run build
```

## Deploy (Easypanel / Docker)

O projeto usa `output: "standalone"` e um `Dockerfile` multi-stage pronto para produção:

```bash
docker build -t rbz-site .
docker run -p 3000:3000 -e N8N_WEBHOOK_URL="..." rbz-site
```

No Easypanel: crie a aplicação a partir do `Dockerfile` no repositório, exponha a porta 3000, defina `N8N_WEBHOOK_URL` na aba de variáveis de ambiente e aponte o domínio.

## Estrutura de dados das marcas

`src/lib/data/brands.ts` é a fonte de verdade para `/marcas` e as páginas individuais - histórico, público e coleções são conteúdo placeholder e precisam ser revisados com a RBZ antes do lançamento. O formato já é compatível com uma futura migração para um CMS headless (Sanity/Payload) sem precisar reescrever os componentes.
