# Plano de Levantamento de Requisitos - Website Institucional

Este documento apresenta o planejamento estrutural, visual e de conteúdo para o desenvolvimento das páginas do website, servindo como guia de pré-produção.

---

## 🎨 Identidade Visual e Arquitetura Base (Comum a Todas as Páginas)

### Paleta de Cores (CSS Puro)
*   **Cor Primária:** `black` (`#000000`) - Preto absoluto para blocos de destaque e contraste rigoroso.
*   **Cor Secundária:** `#3D2314` - Marrom tabaco para elementos de transição, bordas e detalhes elegantes.
*   **Fundo (Background):** `#C5A059` - Dourado envelhecido como base cromática predominante.
*   **Texto:** `#EAE6DF` - Cinzel (tom mineral claro, inspirado na pedra lapidada) para legibilidade de alto contraste sobre fundos escuros.

### Componentes Globais
1.  **Cabeçalho Fixo (Navbar):**
    *   Layout responsivo via Flexbox.
    *   Menu com links estruturados para: `\`, `/produtos`, `/sobre` e `/contato`.
2.  **Rodapé (Footer):**
    *   Direitos autorais fictícios reservados.
    *   Links para redes sociais simuladas (Instagram, LinkedIn, X).

---

## 📄 Estrutura de Páginas do Projeto

### 1. 🏠 Página Inicial (Home) - [PÁGINA PRINCIPAL / ENTRADA]
*   **Objetivo:** Introduzir o conceito da marca, reter a atenção do usuário e direcionar o tráfego para as seções internas.
*   **Seções de Conteúdo:**
    *   **Hero Section:** Banner de impacto com uma chamada (Heading 1) imponente e botão de ação (CTA) para `/produtos`.
    *   **Destaques de Conceito:** Mosaico em CSS Grid com 3 pilares da marca (Exclusividade, Tradição, Modernidade).
    *   **Chamada para Engajamento:** Bloco centralizado convidando o usuário a conhecer a história da marca (/sobre).

### 2. 📦 Página de Produtos (`/produtos`)
*   **Objetivo:** Exibir o catálogo de itens de forma organizada, atraente e responsiva.
*   **Seções de Conteúdo:**
    *   **Vitrine Responsiva:** Grid dinâmico (`grid-template-columns: repeat(auto-fit, minmax(...))`) com cartões de produtos.
    *   **Filtros Rápidos:** Menu superior em Flexbox para simulação de categorias.
    *   **Cards de Produto:** Cada card conterá imagem simulada, título do produto, breve descrição, preço e botão "Ver Detalhes".

### 3. 📜 Página Sobre Nós (`/sobre`)
*   **Objetivo:** Humanizar a marca, contar a história, valores e a proposta de valor por trás do negócio.
*   **Seções de Conteúdo:**
    *   **Manifesto Institucional:** Texto formatado em coluna elegante com foco na tipografia Cinzel sobre fundo contrastante.
    *   **Linha do Tempo / Linha Histórica:** Layout vertical em Flexbox alternado mostrando a evolução da marca.
    *   **Missão e Valores:** Três blocos laterais limpos detalhando o propósito comercial e ético.

### 4. 📬 Página de Contato (`/contato`)
*   **Objetivo:** Oferecer canais diretos e funcionais para que o cliente estabeleça comunicação.
*   **Seções de Conteúdo:**
    *   **Formulário de Mensagem:** Campos estilizados em CSS puro (Nome, E-mail, Assunto, Mensagem) com validação nativa.
    *   **Informações de Localização:** Endereço fictício, telefone e horários de atendimento dispostos lado a lado via Flexbox.
    *   **Mapa Simulado:** Área reservada com proporção fixa (Aspect-Ratio) para simular a inserção de um mapa de localização.
