# Como Colocar o Projeto no Ar

## Opção 1: Netlify (Recomendado - Mais Fácil) ⭐

### Passo a passo:
1. Acesse [netlify.com](https://www.netlify.com)
2. Crie uma conta gratuita (pode usar GitHub, Google ou email)
3. No dashboard, clique em "Add new site" → "Deploy manually"
4. Arraste a pasta do projeto ou faça upload dos arquivos
5. Pronto! Você receberá uma URL tipo: `seu-projeto.netlify.app`

### Vantagens:
- ✅ Gratuito
- ✅ HTTPS automático
- ✅ Deploy em segundos
- ✅ URL personalizada disponível
- ✅ Renovação automática

---

## Opção 2: Vercel (Muito Rápido)

### Passo a passo:
1. Acesse [vercel.com](https://vercel.com)
2. Crie uma conta (pode usar GitHub)
3. Clique em "Add New Project"
4. Faça upload da pasta do projeto
5. Deploy automático!

### Vantagens:
- ✅ Gratuito
- ✅ Muito rápido
- ✅ HTTPS automático
- ✅ Integração com GitHub (opcional)

---

## Opção 3: GitHub Pages (Gratuito)

### Passo a passo:
1. Crie uma conta no [GitHub](https://github.com) se não tiver
2. Crie um novo repositório (ex: `portal-financeiro`)
3. Faça upload dos arquivos do projeto
4. Vá em Settings → Pages
5. Selecione a branch `main` e pasta `/root`
6. Salve e aguarde alguns minutos
7. Seu site estará em: `seu-usuario.github.io/portal-financeiro`

### Vantagens:
- ✅ Totalmente gratuito
- ✅ Integração com Git
- ✅ HTTPS automático

---

## Opção 4: Surge.sh (Super Simples via Terminal)

### Passo a passo:
1. Instale o Surge: `npm install -g surge`
2. No terminal, dentro da pasta do projeto, execute:
   ```bash
   surge
   ```
3. Siga as instruções (crie conta se necessário)
4. Pronto! Site no ar em segundos

### Vantagens:
- ✅ Gratuito
- ✅ Muito rápido via terminal
- ✅ HTTPS automático

---

## Opção 5: Hospedagem Tradicional (cPanel, etc)

Se você já tem uma hospedagem:
1. Acesse o painel (cPanel, Plesk, etc)
2. Vá em "Gerenciador de Arquivos" ou use FTP
3. Faça upload de todos os arquivos para a pasta `public_html` ou `www`
4. Acesse seu domínio

---

## ⚠️ Importante - Ajustes Necessários

### Para funcionar corretamente, você precisa:

1. **Servidor HTTPS**: O webhook precisa de HTTPS para funcionar em produção
   - Netlify, Vercel e GitHub Pages já fornecem HTTPS automaticamente ✅

2. **CORS do Webhook**: Verifique se o webhook permite requisições do seu domínio
   - Se necessário, configure CORS no servidor do webhook

3. **Teste o Webhook**: Após o deploy, teste se o webhook está funcionando corretamente

---

## 🚀 Recomendação

**Para começar rápido**: Use **Netlify** ou **Vercel**
- São as opções mais simples
- Deploy em menos de 5 minutos
- HTTPS automático
- Gratuito

**Para integração com Git**: Use **GitHub Pages** ou **Vercel com GitHub**
- Atualizações automáticas ao fazer push
- Versionamento do código

---

## 📝 Checklist Antes do Deploy

- [ ] Testar localmente que tudo funciona
- [ ] Verificar se todos os caminhos de arquivos estão corretos (assets/css, assets/js, etc)
- [ ] Testar o formulário e webhook
- [ ] Verificar se as imagens carregam corretamente
- [ ] Testar em diferentes navegadores

---

## 🔗 Links Úteis

- [Netlify](https://www.netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Surge.sh](https://surge.sh)

