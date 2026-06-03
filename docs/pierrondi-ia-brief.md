# Brief para o Pierrondi IA — Lançamento CSDM3D

Este arquivo é um pacote único pra colar no Pierrondi IA. Ele contém: o vídeo, as imagens, o post (PT-BR + EN), o roteiro e o prompt final que orienta a IA a gerar o conteúdo de lançamento.

---

## 1. Assets prontos (anexar/referenciar no chat)

| Arquivo | Caminho | Uso |
|---|---|---|
| Vídeo principal MP4 | `public/csdm3d-assets/csdm3d-demo.mp4` | Vídeo do post LinkedIn |
| Vídeo WebM | `public/csdm3d-assets/csdm3d-demo.webm` | Backup web |
| Screenshot login | `public/csdm3d-assets/01-login.png` | Carrossel slide 1 |
| Screenshot workspace | `public/csdm3d-assets/02-workspace-overview.png` | Carrossel slide 2 |
| Screenshot universo 3D | `public/csdm3d-assets/03-csdm3d-universe.png` | Carrossel slide 3 |
| Screenshot insights | `public/csdm3d-assets/03-dashboard-insights.png` | Carrossel slide 4 |
| Repo GitHub | https://github.com/paulopierrondi/csdm3d | CTA do post |

---

## 2. Post LinkedIn — PT-BR (versão pronta)

> Maturidade CSDM não devia ficar presa em planilha.
>
> Eu construí o **CSDM3D**, um projeto público para a comunidade ServiceNow que conecta numa instância, lê sinais leves de CMDB/CSDM via API e transforma a maturidade CSDM5 num mapa 3D visual.
>
> O objetivo é simples: deixar a maturidade fácil de **ver, explicar e priorizar**.
>
> O que ele faz hoje:
> - Workspace com login
> - Conexão direta com instância ServiceNow
> - Análise dos 5 domínios CSDM5
> - Mapa 3D de maturidade
> - Insights prontos pra conversa de AI/Now Assist
> - Dashboard + export do relatório em JSON
>
> Importante: o CSDM3D **não substitui** ServiceNow CMDB, Discovery, Service Mapping, Now Assist ou governança. É um acelerador da comunidade pra ajudar arquitetos e times de plataforma a explicar onde a instância está, quais são os bloqueadores e o que priorizar a seguir.
>
> Por que AI importa aqui: AI só entrega valor quando o modelo de CMDB é explicável. O CSDM3D expõe o padrão de maturidade antes de escalar automação, recomendação ou agentes.
>
> Estou abrindo o código pra comunidade ServiceNow. Se você trabalha com arquitetura ServiceNow, CMDB, ITOM, SPM ou CSDM, baixa, testa, dá fork e melhora.
>
> GitHub: https://github.com/paulopierrondi/csdm3d
>
> Esse tipo de mapa visual de maturidade ajudaria no seu próximo workshop de CSDM?
>
> #ServiceNow #CSDM #CMDB #ITOM #EnterpriseArchitecture #AI #DigitalTransformation

### Hooks alternativos (PT-BR)

- Transformei a maturidade CSDM num mapa 3D.
- Antes da AI agir no seu CMDB, o CMDB precisa ser explicável.
- Maturidade CSDM não devia viver só em planilha.
- E se a sua instância ServiceNow mostrasse a maturidade CSDM visualmente?
- Construí e abri o código de um mapa de maturidade CSDM5 pra comunidade ServiceNow.

---

## 3. Post LinkedIn — EN (versão pronta)

> CSDM maturity should not live only in spreadsheets.
>
> I built **CSDM3D**, a public ServiceNow community project that connects to a ServiceNow instance, reads lightweight CMDB/CSDM signals through APIs, and turns CSDM5 maturity into a visual 3D map.
>
> The goal is simple: make maturity easier to **see, explain, and act on**.
>
> What it does today:
> - Login-style workspace
> - ServiceNow instance connection
> - CSDM5 domain analysis
> - 3D maturity map
> - AI-ready insights
> - Dashboard and JSON report export
>
> Important: CSDM3D does **not** replace ServiceNow CMDB, Discovery, Service Mapping, Now Assist, or governance. It is a community accelerator to help architects and platform teams explain where the instance is, where the blockers are, and what to prioritize next.
>
> Why AI matters here: AI is only valuable when the underlying CMDB model is explainable. CSDM3D exposes the maturity pattern before teams scale automation, recommendations, or agentic workflows.
>
> I am open-sourcing this for the ServiceNow community. If you work with ServiceNow architecture, CMDB, ITOM, SPM, or CSDM, download it, test it, fork it, and improve it.
>
> GitHub: https://github.com/paulopierrondi/csdm3d
>
> Would this type of visual maturity map help your next CSDM workshop?
>
> #ServiceNow #CSDM #CMDB #ITOM #EnterpriseArchitecture #AI #DigitalTransformation

---

## 4. Roteiro de vídeo (45–60s, vertical/quadrado, legenda burned-in)

| Tempo | Texto na tela | Voiceover |
|---|---|---|
| 0–3s (hook) | `Maturidade CSDM não devia viver em planilha.` | "Maturidade CSDM precisa ser visível, explicável e acionável." |
| 3–10s (reveal) | `CSDM3D` | "Por isso construí o CSDM3D, um app público da comunidade ServiceNow." |
| 10–20s (connect) | `Login. Conecte ServiceNow. Analise CSDM5.` | "Você faz login, conecta uma instância ServiceNow e roda uma análise leve do CSDM5 via API." |
| 20–35s (mapa) | `Mapa 3D de maturidade` | "O resultado é um mapa 3D de maturidade nos cinco domínios: Foundational Data, Design, Build, Technical Services e Sell/Consume." |
| 35–48s (AI) | `Insights prontos pra AI` | "AI começa com um CMDB explicável. O CSDM3D vira sinais de maturidade em insights e próximas ações." |
| 48–60s (CTA) | `Open source no GitHub` | "Tô abrindo pra comunidade. Baixa, testa, dá fork — e me conta o que você adicionaria." |

---

## 5. Prompt pra colar no Pierrondi IA

Cole **tudo o que vem abaixo** (junto com os arquivos da seção 1) numa mensagem só pro Pierrondi IA:

```
Você é o Pierrondi IA. Vou te passar o pacote de lançamento do CSDM3D
(repositório público, ServiceNow community).

ENTREGÁVEIS QUE PRECISO DE VOCÊ:

1. Versão final do post LinkedIn em PT-BR, com hook reescrito pelos
   3 melhores ângulos possíveis (3 variações de hook + corpo único).
2. Versão final do post LinkedIn em EN, mesmo formato.
3. Vídeo legendado a partir do MP4 anexado, mantendo:
   - duração 45–60s
   - captions burned-in em PT-BR (legenda grande, alto contraste)
   - primeiro frame com o hook, NÃO com logo
   - CTA final apontando pro GitHub
4. Carrossel LinkedIn de 4 slides usando os PNGs anexados, com
   uma frase forte por slide (slide 1 = hook, slide 4 = CTA GitHub).
5. Pergunta de fechamento do post otimizada pra gerar comentário
   de arquiteto ServiceNow.

CONTEXTO E TOM (obrigatório):

- Posicionamento: acelerador da comunidade, NÃO substitui ServiceNow.
- Linguagem permitida: "construído com ServiceNow APIs", "ajuda a explicar
  maturidade CSDM", "apoia workshops e conversas de maturidade".
- Linguagem PROIBIDA: "substitui", "melhor que ServiceNow", "remediação
  autônoma sem governança", "ferramenta oficial ServiceNow".
- Mensagem central: AI só entrega valor com CMDB explicável. CSDM3D
  expõe maturidade antes de escalar automação/agentes.
- CTA: https://github.com/paulopierrondi/csdm3d
- Hashtags: #ServiceNow #CSDM #CMDB #ITOM #EnterpriseArchitecture #AI
  #DigitalTransformation

ASSETS ANEXADOS:

- Vídeo: csdm3d-demo.mp4
- Imagens: 01-login.png, 02-workspace-overview.png,
  03-csdm3d-universe.png, 03-dashboard-insights.png

REGRAS DE FORMATO:

- Post LinkedIn: máximo 1.300 caracteres, primeira linha é hook puro,
  link do GitHub depois do valor (não na primeira linha), pergunta no final.
- Vídeo: vertical 9:16 OU quadrado 1:1, legenda em PT-BR sempre visível.
- Carrossel: 1080x1350, fundo escuro consistente com o produto, peso
  tipográfico ≤ 600.

Me devolve cada entregável separadamente, na ordem 1 → 5.
```

---

## 6. Checklist final antes de postar

- [ ] Vídeo com legenda burned-in renderizado
- [ ] Carrossel exportado em 1080x1350
- [ ] Post copiado pro LinkedIn (não publicar — salvar como rascunho)
- [ ] Link do GitHub testado
- [ ] Pergunta de fechamento revisada
- [ ] Horário de publicação definido (terça–quinta, 9h–11h BRT)
