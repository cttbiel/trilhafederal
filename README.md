# Trilha Federal

O **Trilha Federal** é uma plataforma criada para democratizar o acesso à educação pública de qualidade no Brasil, conectando estudantes de todo o país às melhores oportunidades em universidades, institutos e colégios federais.

## Nossa Missão

Acreditamos que todo jovem brasileiro merece a chance de sonhar alto e conquistar uma vaga em instituições públicas de excelência, independentemente de sua origem ou das condições da escola onde estudou. O Trilha Federal nasceu para ser o guia, o atalho e o incentivo que faltava para quem vem de escolas públicas, especialmente estaduais, que muitas vezes não oferecem o suporte necessário para enfrentar os vestibulares mais concorridos.

## Para quem é o Trilha Federal?

- Para estudantes de escolas públicas que querem mudar de vida através do ensino superior gratuito.
- Para quem sente que "faltou orientação" ou "faltou oportunidade" durante o ensino médio.
- Para quem busca informações claras, organizadas e atualizadas sobre vestibulares, cursos, cotas, calendários e oportunidades nas instituições federais.

## Por que criamos o Trilha Federal?

Somos **Gabriel Junio Silva de Carvalho** e **Kauã**, dois jovens que estudaram em escolas estaduais de baixa qualidade em Belo Horizonte. Sabemos, na pele, o quanto a falta de estrutura e orientação pode dificultar o acesso às melhores universidades do país. Se o Trilha Federal existisse na nossa época, nossa trajetória teria sido muito mais fácil e justa. Por isso, criamos essa plataforma: para que outros jovens não passem pelas mesmas dificuldades e possam trilhar um caminho de sucesso.

## O que você encontra aqui?

- Informações detalhadas sobre universidades, institutos e colégios federais.
- Calendário de vestibulares, simulados, dicas de estudo e recursos exclusivos.
- Ferramentas para acompanhar favoritos, receber notificações e participar de uma comunidade de estudantes.
- Um ambiente acolhedor, feito por quem entende os desafios de quem vem da escola pública.

## Nosso compromisso

O Trilha Federal é, acima de tudo, um projeto social. Queremos inspirar, informar e transformar vidas através da educação pública gratuita e de qualidade. Se você também acredita nesse propósito, seja bem-vindo à nossa comunidade!

## Sobre o Projeto

O Trilha Federal é uma plataforma que democratiza o acesso à informação sobre vestibulares federais. Nossa missão é divulgar informações sobre vestibulares de universidades federais, institutos federais e escolas técnicas públicas que, apesar de serem públicas, são pouco conhecidas pela população.

## Características

- **Universidades Federais**: Informações sobre instituições de ensino superior públicas federais
- **Institutos Federais**: Rede de instituições que oferecem educação profissional, científica e tecnológica
- **Escolas Técnicas**: Instituições especializadas em formação técnica de qualidade
- **Recursos Educacionais**: Calendário de vestibulares, guias de estudo, simulados e mais
- **Comunidade**: Conecte-se com outros estudantes e compartilhe experiências
- **Autenticação Segura**: Login com Google e cadastro tradicional via Supabase
- **Dashboard Personalizado**: Acompanhe seus favoritos e progresso

## Tecnologias Utilizadas

- **Frontend**: React 19, Vite, React Router DOM
- **Autenticação**: Supabase (Google OAuth + Email/Senha)
- **UI/UX**: React Icons, CSS3 com variáveis CSS
- **Design**: Responsivo e acessível
- **Deploy**: Vercel

## Funcionalidades Implementadas

### ✅ Autenticação Completa

- Login social com Google (1 clique)
- Cadastro tradicional com email e senha
- Logout seguro
- Redirecionamento automático

### ✅ Dashboard Personalizado

- Exibição do nome e email do usuário
- Lista de instituições favoritas
- Atalhos para recursos
- Interface responsiva

### ✅ Sistema de Favoritos

- Adicionar/remover instituições
- Persistência local
- Exibição no dashboard

### ✅ Design Responsivo

- Funciona em desktop, tablet e mobile
- Interface moderna e acessível
- Feedback visual para ações

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header/          # Header com autenticação
│   ├── MainContent/     # Conteúdo principal
│   ├── Footer/          # Rodapé
│   └── MapaDoBrasil/    # Mapa interativo
├── pages/
│   ├── Login_page/      # Login e cadastro
│   ├── dashboard/       # Dashboard do usuário
│   └── Pages_inter/     # Páginas de instituições
├── supabaseClient.js    # Configuração Supabase
└── AuthContext.jsx      # Contexto de favoritos
```

## Nossa História

Fundado em 2025 por quatro jovens estudantes do CEFET-MG, o Trilha Federal nasceu da experiência pessoal de Gabriel Junio Silva de Carvalho e Kauã Sergio Ramos Faria, que descobriram tardiamente as oportunidades em instituições federais após estudarem em escolas de ensino médio com poucos recursos. Hoje, junto com Gabriel Expedito Campos Coelho da Silva e Caio Bertolato Silva, todos cursando Engenharia de Computação, criaram esta plataforma para evitar que outros estudantes passem pela mesma situação.

## Contato

- **Email**: atrilhafederal@gmail.com
- **WhatsApp**: (31) 99999-9999
- **Localização**: Belo Horizonte, MG - Brasil
- **Instituição**: CEFET-MG - Centro Federal de Educação Tecnológica de Minas Gerais

## Licença

© 2025 Trilha Federal. Todos os direitos reservados.

Desenvolvido para democratizar a educação pública.
