# Projeto Base — Plataforma de Landing Page + Admin + Orçamentos Internos

## Objetivo

Criar um projeto base robusto e escalável para uma operação que começa como **landing page institucional com captação de leads** e evolui para um **sistema interno de orçamento, organização operacional, agenda, rotas, valores e gestão de atendimento**.

A prioridade deste projeto é:

1. **Ter arquitetura moderna e bonita para currículo/portfólio**
2. **Manter baixo atrito de desenvolvimento**
3. **Permitir evolução sem retrabalho estrutural**
4. **Evitar overengineering desnecessário neste primeiro ciclo**

---

## Stack obrigatória

Use exatamente esta stack como base do projeto:

### Backend
- PHP 8.3+
- Laravel 13
- MySQL 8.4 LTS
- Redis preparado para uso futuro (cache/queue), mas opcional no bootstrap inicial

### Frontend
- Inertia.js com React
- TypeScript
- Tailwind CSS
- Vite

### Admin / Painel
- Filament (painel administrativo principal)
- O painel deve ser preparado desde o início, mesmo que alguns recursos fiquem apenas com CRUD inicial

### Autenticação
- Autenticação padrão do starter kit oficial do Laravel com React + Inertia
- Controle de acesso por papéis (roles)
- Middleware para áreas administrativas

### Ferramentas auxiliares
- ESLint
- Prettier
- Pint
- PHPStan (nível razoável, sem exagero)
- EditorConfig

---

## Estratégia arquitetural

Este projeto deve seguir o conceito de **modern monolith**:

- Uma única aplicação Laravel
- Front público com React via Inertia
- Painel interno com Filament
- Lógica de negócio centralizada no backend
- Sem API pública separada neste momento
- Sem microserviços
- Sem separar frontend/back em repositórios distintos

### Motivo da decisão
Queremos uma arquitetura que:
- fique profissional no currículo
- permita crescimento real
- reduza complexidade operacional
- evite duplicação de autenticação, regras e infraestrutura

---

## Tipo de projeto

Criar a base como um **produto SaaS interno / sistema operacional comercial em evolução**, com estes blocos:

1. **Site público / landing page**
2. **Painel administrativo**
3. **Captação e gestão de leads**
4. **Motor de orçamento**
5. **Agenda operacional**
6. **Rotas e deslocamentos**
7. **Relatórios e indicadores**
8. **Configurações de marketing e SEO**
9. **Base para futura automação de operação**

---

## Contexto funcional do negócio

O sistema deve ser modelado para um negócio de serviços locais, com possibilidade de:

- captar leads pela landing page
- receber pedidos de orçamento
- cadastrar serviços e preços
- montar orçamento por itens
- considerar deslocamento/rota/tempo
- controlar status do lead e do atendimento
- organizar agenda e operação interna
- armazenar scripts/tokens de marketing
- gerenciar depoimentos, avaliações e conteúdos institucionais
- permitir evolução futura para automação de propostas e geração de PDF

---

## Princípios de implementação

### 1. Código limpo e previsível
- Evite acoplamento excessivo
- Não coloque regra de negócio pesada dentro de controllers
- Não concentre tudo em models gigantes
- Use Services / Actions / Data objects quando fizer sentido

### 2. Organização por domínio
A estrutura deve ser preparada por contexto de negócio, não só por camada técnica.

### 3. Base pronta para crescer
Mesmo que o MVP inicial seja simples, já deixar:
- entidades principais modeladas
- migrations consistentes
- enums onde fizer sentido
- seeds iniciais
- painel pronto para administrar a base

### 4. UX administrativa
O Filament deve nascer funcional, não apenas instalado.

---

## Estrutura de diretórios esperada

Organizar o projeto de forma limpa. Pode seguir algo nesta linha:

```txt
app/
  Actions/
  Data/
  Domain/
    Client/
    Lead/
    Marketing/
    Quote/
    Scheduling/
    Routing/
    Review/
    Settings/
    ServiceCatalog/
    User/
  Enums/
  Filament/
    Resources/
    Pages/
    Widgets/
  Http/
    Controllers/
    Middleware/
    Requests/
  Models/
  Policies/
  Services/
  Support/

database/
  factories/
  migrations/
  seeders/

resources/
  js/
    Components/
    Layouts/
    Pages/
      Public/
      Dashboard/
      Auth/
    lib/
    types/
  css/

routes/
  web.php
  auth.php

tests/
  Feature/
  Unit/
```

---

## Módulos obrigatórios no projeto base

## 1. Módulo Public Site
Criar front público com páginas iniciais:

- Home
- Sobre
- Serviços
- Contato
- Solicitar orçamento
- Política de privacidade
- Termos de uso

### Requisitos
- Componentização com React + Inertia
- Layout público reutilizável
- SEO básico por página
- Estrutura pronta para receber conteúdo dinâmico futuramente

---

## 2. Módulo de Leads
Cadastrar e gerenciar leads vindos da landing page.

### Campos mínimos de lead
- id
- nome
- sobrenome (nullable)
- telefone
- email (nullable)
- origem (site, whatsapp, indicação, anúncio, orgânico, manual)
- campanha (nullable)
- canal (nullable)
- mensagem inicial
- interesse principal (nullable)
- status
- score (nullable)
- observações internas
- assigned_user_id (nullable)
- created_at / updated_at

### Status sugeridos
- new
- contacted
- qualified
- quoted
- won
- lost
- archived

### Requisitos
- formulário público de captação
- listagem no admin
- filtros por status, origem e data
- registro de observações internas

---

## 3. Módulo de Serviços
Catálogo de serviços com preço base e parâmetros.

### Campos mínimos
- nome
- slug
- descrição curta
- descrição interna
- categoria
- preço base
- unidade de cobrança (fixo, hora, visita, km, item, diária)
- duração estimada em minutos (nullable)
- ativo
- ordem de exibição

---

## 4. Módulo de Clientes
Quando um lead evolui, ele pode se tornar cliente.

### Campos mínimos
- tipo (pessoa / empresa)
- nome
- telefone principal
- email
- documento (nullable)
- endereço principal
- cidade
- estado
- zip_code
- observações
- origem do cliente
- status

---

## 5. Módulo de Endereços
Como o sistema pode evoluir para rotas e múltiplos locais, separar endereços de forma reaproveitável.

### Requisitos
- tabela própria para addresses
- poder vincular endereço a lead, cliente e visita futuramente
- suportar:
  - street
  - number
  - complement
  - neighborhood
  - city
  - state
  - postal_code
  - country
  - latitude (nullable)
  - longitude (nullable)

---

## 6. Módulo de Orçamentos
Base do motor comercial.

### Entidades principais
- quotes
- quote_items

### Campos mínimos de quotes
- client_id (nullable)
- lead_id (nullable)
- quote_number único
- status
- subtotal
- discount_amount
- travel_amount
- extra_amount
- total_amount
- currency
- notes_public
- notes_internal
- valid_until (nullable)
- created_by
- approved_at (nullable)

### Status sugeridos
- draft
- sent
- viewed
- approved
- rejected
- expired
- cancelled

### Campos mínimos de quote_items
- quote_id
- service_id (nullable)
- title
- description
- quantity
- unit_price
- line_total
- sort_order

### Requisitos
- CRUD via Filament
- cálculo automático de totais
- suporte a item manual
- suporte a serviços do catálogo
- base pronta para exportação PDF futura

---

## 7. Módulo de Agenda / Scheduling
Base inicial para organização interna.

### Entidade principal
- appointments

### Campos mínimos
- client_id (nullable)
- lead_id (nullable)
- quote_id (nullable)
- title
- description
- start_at
- end_at
- status
- assigned_user_id (nullable)
- address_id (nullable)
- estimated_duration_minutes (nullable)
- price_expected (nullable)
- notes

### Status sugeridos
- pending
- confirmed
- in_progress
- completed
- cancelled
- no_show

---

## 8. Módulo de Rotas / Deslocamento
Não precisa integrar mapas agora, mas a modelagem deve nascer pronta.

### Entidade inicial
- routes

### Campos mínimos
- appointment_id
- origin_address_id (nullable)
- destination_address_id (nullable)
- distance_km (nullable)
- estimated_minutes (nullable)
- travel_cost (nullable)
- status
- notes

---

## 9. Módulo de Reviews / Testimonials
Para alimentar a landing page com prova social.

### Campos mínimos
- nome do autor
- cargo ou contexto (nullable)
- avatar_url (nullable)
- rating
- headline (nullable)
- body
- featured
- is_published
- source (google, manual, whatsapp, facebook, other)
- published_at (nullable)
- sort_order

---

## 10. Módulo de Settings / Configurações Globais
Muito importante. O sistema deve nascer com uma tabela de configuração dinâmica em banco.

### Usar abordagem key-value estruturada
Criar tabela `settings` com suporte a:
- group
- key
- value_text
- value_json
- type
- is_public
- description

### Grupos iniciais obrigatórios
- site
- seo
- business
- social
- tracking
- integrations

### Exemplos de keys
#### site
- site_name
- site_tagline
- support_email
- support_phone
- whatsapp_number

#### seo
- meta_title_default
- meta_description_default
- meta_robots_default
- google_site_verification
- bing_site_verification

#### tracking
- google_analytics_id
- google_tag_manager_id
- meta_pixel_id
- tiktok_pixel_id
- head_scripts
- body_scripts

#### business
- default_currency
- default_quote_validity_days
- base_travel_fee
- default_city
- default_state

### Requisitos
- tela administrativa amigável
- leitura fácil no frontend/backend
- helper para consultar setting por chave
- cache opcional preparado

---

## 11. Módulo de Usuários e Papéis
Criar papéis iniciais:

- super_admin
- admin
- sales
- operator

### Requisitos
- filtrar permissões por papel
- proteger painel Filament
- preparar policies para os principais recursos

---

## Banco de dados — modelagem base

## Tabelas obrigatórias
Criar migrations e relacionamentos para as seguintes tabelas:

- users
- settings
- leads
- lead_notes
- clients
- addresses
- services
- quotes
- quote_items
- appointments
- routes
- reviews
- activity_logs

### Observações
- `activity_logs` pode ser simples no início
- usar foreign keys corretamente
- usar índices para colunas de busca e status
- usar soft deletes onde fizer sentido:
  - leads
  - clients
  - services
  - quotes
  - reviews

---

## Regras de modelagem

### Convenções
- nomes de tabelas no plural
- primary keys como bigint/ulid conforme decisão do projeto
- timestamps em todas as tabelas
- soft deletes em módulos comerciais importantes
- enums PHP quando útil, mas sem complicar demais as migrations
- status críticos devem ter defaults coerentes

### Índices recomendados
Criar índices, no mínimo, para:
- leads.status
- leads.origem
- leads.created_at
- clients.email
- services.slug
- quotes.quote_number
- quotes.status
- appointments.start_at
- reviews.is_published
- settings.group
- settings.key

---

## Seeders obrigatórios

Criar seeders iniciais para:

### 1. Usuário administrador padrão
- nome: Admin
- email: admin@example.com
- senha: password
- papel: super_admin

### 2. Papéis básicos
- super_admin
- admin
- sales
- operator

### 3. Configurações base
Popular settings com valores iniciais vazios ou defaults úteis

### 4. Serviços de exemplo
Criar ao menos 5 serviços fake para facilitar testes

### 5. Reviews fake
Criar alguns depoimentos publicados para a landing

---

## Painel Filament — recursos mínimos obrigatórios

Criar recursos do Filament para:

- Users
- Leads
- Clients
- Services
- Quotes
- Appointments
- Reviews
- Settings

### Requisitos de UX no Filament
- tabelas com busca
- filtros por status quando aplicável
- ordenação padrão útil
- formulários organizados em seções/tabs quando necessário
- campos validados
- máscaras apenas se simples; evitar excesso de JS custom no admin inicial

### Widgets iniciais no dashboard
Criar widgets básicos:
- total de leads
- leads novos esta semana
- total de orçamentos
- orçamentos aprovados
- agendamentos futuros

---

## Front público — requisitos de implementação

Criar um frontend público limpo e profissional com:

- Home com hero section
- seção de serviços
- seção de diferenciais
- seção de reviews
- CTA para solicitar orçamento
- formulário de contato/orçamento
- footer com dados de contato

### Importante
Mesmo sendo inicial, o front deve ter:
- boa estrutura semântica
- componentes reutilizáveis
- tipagem coerente
- organização limpa em `resources/js`

---

## Captura de formulário público

Criar pelo menos 2 formulários públicos:

### 1. Contato simples
Campos:
- nome
- telefone
- email
- mensagem

### 2. Solicitação de orçamento
Campos:
- nome
- telefone
- email
- serviço de interesse
- endereço (texto simples por enquanto)
- detalhes do pedido

### Comportamento
- salvar como lead
- definir origem = site
- permitir rastrear campanha/canal por query params quando existirem
- mostrar feedback de sucesso amigável

---

## SEO e scripts dinâmicos

O projeto deve nascer preparado para:

- meta title e meta description por página
- robots dinâmico global
- injeção de scripts globais configuráveis
- site verification tags
- Open Graph básico

### Implementação desejada
- helper ou service para carregar configurações globais
- componente/layout de SEO centralizado no frontend

---

## Logs e rastreabilidade

Criar estrutura simples para auditoria inicial:

### activity_logs
Campos mínimos:
- user_id (nullable)
- subject_type (nullable)
- subject_id (nullable)
- event
- description
- properties_json (nullable)
- created_at

Registrar pelo menos eventos de:
- criação de lead
- criação de orçamento
- atualização de status de orçamento
- criação de agendamento

---

## Regras de qualidade

## Backend
- Form Requests para validação
- Services/Actions para regras relevantes
- Não colocar lógica pesada em controllers
- Policies em recursos sensíveis

## Frontend
- TypeScript habilitado
- componentes reutilizáveis
- sem gambiarra de props
- páginas separadas por domínio lógico

## Banco
- migrations idempotentes
- relacionamento coerente
- defaults explícitos
- cuidado com nullable

---

## Testes mínimos

Criar testes iniciais para:

- usuário autenticado acessar dashboard
- formulário público gerar lead
- admin criar orçamento
- cálculo básico do total do orçamento
- recurso protegido impedir acesso sem login

Não precisa cobertura extrema, mas o projeto deve nascer com testes base funcionando.

---

## Entregáveis esperados

Ao final, o projeto deve estar pronto com:

1. Laravel configurado com Inertia + React + TypeScript
2. MySQL configurado via `.env.example`
3. Migrations completas
4. Seeders funcionando
5. Filament instalado e utilizável
6. Recursos administrativos principais criados
7. Front público inicial funcional
8. Formulários públicos salvando leads
9. Estrutura de settings pronta
10. README técnico claro com comandos de setup

---

## README que deve ser criado

Gerar um `README.md` no projeto contendo:

- visão geral do projeto
- stack utilizada
- requisitos
- instalação
- configuração do `.env`
- comandos de desenvolvimento
- comandos para migration e seed
- acesso ao painel
- estrutura resumida de módulos

---

## Comandos esperados no bootstrap do projeto

O agente deve entregar o projeto já configurado para rodar com algo próximo deste fluxo:

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
npm run build
php artisan serve
```

Se optar por `npm run dev` no ambiente local, tudo bem. Mas o projeto deve ficar coeso para ambiente de desenvolvimento local comum.

---

## Restrições importantes

- Não usar arquitetura de microserviços
- Não criar API REST pública agora sem necessidade
- Não usar pacotes desnecessários para cada detalhe
- Não exagerar em DDD ceremonial
- Não criar abstrações vazias
- Não superengenheirar o motor de orçamento neste primeiro passo
- Não acoplar regras do negócio ao Filament diretamente se elas puderem viver em services/actions

---

## Decisões técnicas adicionais

### IDs
Pode usar bigint auto increment nas tabelas principais para simplificar o início. Se quiser usar ULID, faça isso apenas se mantiver consistência total no projeto.

### Dinheiro
Valores monetários devem ser persistidos com `decimal(12,2)` ou similar, evitando float.

### Datas
Usar timezone consistente e `datetime`/`timestamp` de forma padronizada.

### Slugs
Serviços públicos devem ter slug único.

### Segurança
- CSRF padrão do Laravel
- validação server-side obrigatória
- sanitização razoável de inputs textuais
- controle de acesso no painel

---

## Critérios de aceite

O projeto será considerado correto se:

1. subir sem erros com instalação padrão
2. migrar e semear o banco sem falhas
3. permitir login no admin
4. abrir o painel Filament
5. cadastrar lead pelo formulário público
6. visualizar leads no painel
7. criar serviço
8. criar orçamento com itens e total
9. cadastrar review e exibir no site
10. editar settings básicos no admin
11. manter código organizado e legível

---

## Instrução final para execução

Implemente este projeto de forma pragmática e profissional, priorizando:

- compatibilidade
- clareza de arquitetura
- base limpa
- baixo retrabalho futuro
- boa apresentação técnica para portfólio/currículo

Sempre prefira decisões simples, sólidas e coerentes com Laravel moderno.

Se precisar escolher entre “mais bonito no papel” e “mais estável para entregar”, escolha a opção mais estável desde que preserve a boa arquitetura geral.
