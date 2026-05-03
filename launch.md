# CSDM3D — Plano de Lançamento

> Documento operacional para o **Pierrondi-IA** publicar a campanha do CSDM3D em X (e LinkedIn como espelho opcional). Cada post é entregue pronto para colar — texto final, idioma, asset e janela de publicação.

- **Janela de campanha:** 2026-05-03 (Dom) → 2026-05-10 (Dom)
- **Fuso de referência:** America/Sao_Paulo (BRT, UTC-3)
- **Conta:** @pierrondi (publisher) — voz: Paulo Pierrondi, Enterprise Architect
- **Idioma primário:** PT-BR. Variante EN incluída para a thread técnica.
- **Cadência:** 6 posts em 7 dias. Não publicar nada Sex 18h → Sáb 18h (baixa engagement B2B).
- **Asset hero (anexar nos posts marcados):** `public/csdm3d-assets/csdm3d-clip-5s.mp4` (1280×720, 5 s, silencioso, autoplay+loop nativo no X)
- **Asset fallback (LinkedIn / Slack):** `public/csdm3d-assets/csdm3d-clip-5s.gif` (720p)

---

## Cronograma resumido

| # | Quando (BRT)         | Canal | Tipo                  | Asset          |
|---|----------------------|-------|------------------------|----------------|
| 1 | Dom 03/05 · 19:30    | X     | Hero · vídeo           | clip-5s.mp4    |
| 2 | Dom 03/05 · 21:30    | X     | Quote tweet do #1      | —              |
| 3 | Seg 04/05 · 09:30    | X     | Thread técnica (5/5)   | clip-5s.mp4 + screenshot 02 |
| 4 | Seg 04/05 · 19:00    | X     | Stack post / arquitetura | screenshot 03-csdm3d-universe.png |
| 5 | Qua 06/05 · 09:00    | X     | Reflexão / lições      | screenshot 03-dashboard-insights.png |
| 6 | Qui 07/05 · 18:00    | X     | CTA + recap            | clip-5s.mp4    |
| LI | Dom 03/05 · 20:00   | LinkedIn | Espelho do #1, formato longo | clip-5s.gif |

---

## Post 1 — Hero · Domingo 03/05 · 19:30 BRT

**Canal:** X · **Anexo:** `csdm3d-clip-5s.mp4`

```
CSDM 5.0 não precisa ser planilha de auditoria.

Conecta a instância → 5 domínios são scoreados → 2 agentes especialistas (Pierrondi EA + ITOM Doctor) traduzem o resultado em narrativa executiva e plano de ataque de CMDB.

Tudo num mapa 3D do CMDB. 👇
```

(277 caracteres, cabe em conta padrão.)

**Notas:** publicar com vídeo silencioso. Sem hashtag — a cópia já tem keyword. Pin no perfil até o fim da campanha.

---

## Post 2 — Quote tweet do #1 · Domingo 03/05 · 21:30 BRT

**Canal:** X · **Anexo:** nenhum (citação visual já vem do #1)

```
Detalhe que ninguém pede mas todo mundo quer:

cada insight muda conforme o stage da instância (Foundation → Crawl → Walk → Run → Fly), o gap até o próximo nível, e quais tabelas-âncora estão ausentes.

É opinião, não relatório. ☝️
```

(244 caracteres.)

**Notas:** quote tweet do post #1 — aproveita o segundo pico de timeline noturna.

---

## Post 3 — Thread técnica · Segunda 04/05 · 09:30 BRT

**Canal:** X · **Anexo (1/5):** `csdm3d-clip-5s.mp4` · **Anexo (3/5):** `02-workspace-overview.png`

**1/5**
```
Construí o CSDM3D: você conecta uma instância ServiceNow e em segundos vê a maturidade CSDM 5.0 num mapa 3D do CMDB, com dois agentes especialistas explicando o que cada score significa.

🎥 5 segundos:
```

**2/5**
```
Como funciona: o backend faz probe read-only nas tabelas-âncora de cada um dos 5 domínios CSDM 5.0 (cmdb_ci, cmdb_ci_business_app, cmdb_ci_service_discovered, etc.), calcula score 0–100 e posiciona na escada Foundation → Crawl → Walk → Run → Fly.

Sem job agendado. Sem dado persistido.
```

**3/5**
```
Os dois agentes:

🟣 Pierrondi EA — narrativa executiva, onde começar (KPI mensurável), readiness de Now Assist, roadmap até o próximo stage.

🟢 ITOM Doctor — saúde do CMDB, sinal de Service Mapping, alinhamento de catálogo, tabelas-âncora ausentes.
```

**4/5**
```
O conteúdo NÃO é genérico.

Faltou cmdb_ci_service_business?
"single highest-leverage gap on the instance"

cmdb_ci_service_auto baixo?
"Service Mapping is installed but the automated-services table is shallow"

A leitura sai pronta para slide de board.
```

**5/5**
```
Stack: Next.js 16 (App Router), React 19, Tailwind v4, three.js + react-three-fiber, ServiceNow Table API.

Demo público (sem credenciais persistidas):
[link da demo aqui]

Aceitando feedback. 🛠️
```

**Notas:** publicar como thread real (cada parte como reply ao tweet anterior), não 5 tweets soltos. No tweet 1/5, anexar o vídeo.

---

## Post 4 — Stack & arquitetura · Segunda 04/05 · 19:00 BRT

**Canal:** X · **Anexo:** `03-csdm3d-universe.png`

```
A parte 3D do CSDM3D é só react-three-fiber em cima do `three.js`:

• 5 domínios = 5 plataformas
• tabelas-âncora = nós flutuantes com pip RAG
• curvas Bézier ligando os domínios são coloridas pela média de score do par
• 130 partículas instanced viajam pelas curvas; velocidade escala com o score global

Todo o resto é só dado bem cuidado.
```

(390 caracteres — exige Premium.)

**Versão curta (280 char) caso conta padrão:**

```
A parte 3D do CSDM3D é react-three-fiber sobre three.js:

• 5 domínios = 5 plataformas
• tabelas-âncora = nós com pip RAG
• curvas Bézier coloridas pela média de score
• 130 partículas instanced; velocidade escala com o score global

Todo o resto é dado bem cuidado.
```

(279 caracteres ✓.)

---

## Post 5 — Reflexão · Quarta 06/05 · 09:00 BRT

**Canal:** X · **Anexo:** `03-dashboard-insights.png`

```
Coisa que aprendi construindo o CSDM3D:

a maior parte do valor de uma "ferramenta de IA" não vem do modelo. Vem de:

1. dado certo na entrada (probe das tabelas-âncora)
2. heurísticas opinativas no meio (stage + spread + tabelas faltando)
3. linguagem direta na saída

Modelo grande sem isso = relatório bonito sem opinião.
```

(330 caracteres — Premium.)

**Versão 280:**

```
Aprendizado construindo o CSDM3D:

valor de "IA" raramente vem do modelo. Vem de:

1. dado certo na entrada
2. heurística opinativa no meio
3. linguagem direta na saída

Modelo grande sem isso = relatório bonito, opinião nenhuma.
```

(232 caracteres ✓.)

---

## Post 6 — CTA + recap · Quinta 07/05 · 18:00 BRT

**Canal:** X · **Anexo:** `csdm3d-clip-5s.mp4`

```
Recap rápido do CSDM3D, agora que rodou por 4 dias:

✓ scoring em segundos
✓ 2 agentes que dizem onde começar
✓ mapa 3D pra apresentar pra board
✓ zero credencial persistida

Quem testar e mandar print do resultado, eu comento o plano de ataque.

[link]
```

(266 caracteres ✓.)

**Notas:** essa é a chamada para conversa — se alguém responder com print, **comentar com mini-análise**. Esse é o anzol da campanha.

---

## Post LinkedIn — Domingo 03/05 · 20:00 BRT

**Canal:** LinkedIn · **Anexo:** `csdm3d-clip-5s.gif`

```
Lancei o CSDM3D este fim de semana.

Você conecta uma instância ServiceNow, ele faz probe read-only nas tabelas-âncora dos 5 domínios CSDM 5.0, calcula score 0–100 por domínio e te entrega:

• um mapa 3D do CMDB
• dois agentes especialistas que leem o resultado:
   — Pierrondi EA: narrativa executiva, onde começar, readiness de Now Assist, roadmap
   — ITOM Doctor: saúde do CMDB, Service Mapping, tabelas-âncora ausentes

A parte que mais me orgulha não é o 3D. É que cada insight muda conforme o stage da instância, o gap até o próximo nível e quais tabelas estão ausentes — então a saída soa como diagnóstico de consultor sênior, não relatório genérico.

Stack: Next.js 16, React 19, Tailwind v4, three.js, react-three-fiber, ServiceNow Table API.

Read-only. Credenciais nunca persistidas server-side.

Demo: [link]

#CSDM #ServiceNow #CMDB #ITOM #NowAssist #EnterpriseArchitecture
```

**Notas:** LinkedIn premia post com 6+ linhas e parágrafo de payoff. Manter formato. Não usar emoji em excesso.

---

## Diretrizes para o Pierrondi-IA

1. **Voz:** primeira pessoa, opinião assumida, sem hedging (~"talvez", ~"acho que"). Pierrondi fala com autoridade sobre CSDM e ITOM.
2. **Não use** as palavras: "revolucionário", "game-changer", "disruptivo", "incrível". Soa LinkedIn-genérico.
3. **Replies:**
   - Pergunta técnica → responder com diagnóstico curto e termo-âncora (ex: "Provável raiz: cmdb_rel_ci abaixo de 2:1. Discovery não rodou full sweep recente.").
   - Pergunta comercial ("vende?") → não vendemos hoje, é projeto open-demo. Apontar o link.
   - Print de resultado → mini-análise em até 4 linhas usando os mesmos termos do app (stage, blocker, tabela ausente).
4. **Métricas a observar (não publicar):**
   - Impressões do post #1 (alvo: 8k em 24h)
   - CTR do link na thread #3 e CTA #6
   - Replies com print → alvo: 3 conversas em 7 dias
5. **Kill switch:** se o post hero não passar de 1.000 impressões em 4h, **republicar #1** às 09:00 BRT do dia seguinte com ajuste de hook (trocar primeira linha por "Olha o tipo de coisa que dá pra fazer com IA hoje:").

---

## Checklist pré-publicação (cada post)

- [ ] Texto colado idêntico (sem reescrita "para soar mais natural")
- [ ] Asset correto anexado (vídeo MP4, não GIF, no X)
- [ ] Link da demo testado em aba anônima
- [ ] Horário programado em BRT, não UTC
- [ ] Pin no perfil (apenas Post 1)

---

## Demo data referenciada

A "instância demo" mostrada no vídeo é **Northwind Bank** — fictícia, ~5k funcionários, banco de varejo. Foi desenhada para o motor produzir uma narrativa juicy:

- Foundational sólido (47 mil CIs, 142 mil relações = 3:1 healthy)
- APM nunca instalado → `cmdb_application_product_model` unreachable
- Service Mapping rodou levemente → `cmdb_ci_service_auto` com 14 registros
- Catálogo de business service raso (12 entradas) e `sn_consumer` ausente

O motor dispara, em ordem: "APM não deployed", "Service Mapping shallow", "consumer-contract traceability is broken". É exatamente isso que aparece nas screenshots.

Se o Pierrondi-IA receber print de um seguidor, deve **traduzir o resultado dele para esse mesmo formato de diagnóstico** — não inventar.
