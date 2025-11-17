# Portal Financeiro - Validação de Dados

Sistema de validação de dados (CPF e E-mail) com integração via webhook.

## 📋 Funcionalidades

- ✅ Formulário de validação com CPF e E-mail
- ✅ Validação em tempo real
- ✅ Integração com webhook
- ✅ Redirecionamento automático após validação
- ✅ Página de erro caso a validação falhe
- ✅ Design responsivo e moderno
- ✅ Elementos interativos e animações

## 🚀 Como Usar

1. Preencha o formulário com CPF e E-mail
2. Clique em "Validar Dados"
3. Aguarde a validação
4. Será redirecionado automaticamente ou verá mensagem de erro

## 🛠️ Tecnologias

- HTML5
- CSS3 (com animações e transições)
- JavaScript (Vanilla)
- Webhook API

## 📁 Estrutura do Projeto

```
├── index.html          # Página principal (formulário)
├── validacao.html      # Página de validação
├── sucesso.html        # Página de erro/validação
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos principais
│   ├── js/
│   │   ├── main.js     # Lógica do formulário
│   │   ├── validacao.js # Lógica de validação
│   │   └── sucesso.js   # Lógica da página de sucesso
│   └── images/
│       └── logo.png    # Logo da empresa
└── README.md
```

## 🌐 Deploy

Veja o arquivo `DEPLOY.md` para instruções detalhadas de como colocar o projeto no ar.

Opções recomendadas:
- Netlify
- Vercel
- GitHub Pages

## ⚙️ Configuração

O webhook está configurado para:
```
https://webhook.conhecimentointegrado.com.br/webhook/Portal-Financeiro
```

## 📝 Licença

Este projeto é privado e de uso interno.

