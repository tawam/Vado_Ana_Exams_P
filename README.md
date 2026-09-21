# Leitura integrada dos exames — Ana & Vado

Site estático, responsivo e sem dependências externas para organizar a leitura contextual dos exames laboratoriais de julho de 2026. Termos técnicos recebem notas interativas em linguagem simples e também aparecem em um glossário pesquisável.

## Abrir localmente

Abra `dist/index.html` no navegador. Para servir com um servidor local:

```bash
python3 -m http.server 8080 --directory dist
```

Depois, acesse `http://localhost:8080`.

## Publicar no GitHub Pages

1. Crie um repositório e envie todo o conteúdo desta pasta.
2. Em **Settings → Pages**, escolha **Deploy from a branch**.
3. Como o GitHub Pages publica a raiz ou `/docs`, use uma destas opções:
   - mova o conteúdo de `dist/` para a raiz do repositório; ou
   - renomeie `dist/` para `docs/` e selecione a pasta `/docs`.
4. Salve e aguarde a URL do GitHub Pages.

## Estrutura

- `dist/index.html` — conteúdo e estrutura semântica;
- `dist/styles.css` — design responsivo, tema escuro e impressão;
- `dist/app.js` — filtros, tabela, navegação e interações;
- `.openai/hosting.json` — configuração de hospedagem estática.
