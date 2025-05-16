# Tutoriais de Captura de Tela

Este é um site estático simples que centraliza tutoriais sobre como fazer capturas de tela em diferentes sistemas operacionais (Windows, iOS e Android) e como anexar essas imagens em atividades do Google Classroom.

## Estrutura do Projeto

```
tutoriais-captura-tela-html/
├── index.html                  # Página inicial com resumo e botões para cada sistema
├── windows.html                # Página específica para Windows
├── ios.html                    # Página específica para iOS
├── android.html                # Página específica para Android
├── google-classroom.html       # Página para tutoriais do Google Classroom
├── css/
│   ├── style.css               # Estilos gerais do site
│   └── responsive.css          # Estilos específicos para responsividade
├── js/
│   └── main.js                 # Funcionalidades JavaScript básicas
└── assets/
    ├── images/                 # Imagens ilustrativas (placeholders)
    │   ├── windows/            # Imagens para tutoriais do Windows
    │   ├── ios/                # Imagens para tutoriais do iOS
    │   ├── android/            # Imagens para tutoriais do Android
    │   └── classroom/          # Imagens para tutoriais do Google Classroom
    └── icons/                  # Ícones e logos (placeholders)
```

## Como Publicar o Site

### Opção 1: Vercel (Recomendado)

1. Crie uma conta na [Vercel](https://vercel.com/) se ainda não tiver
2. Clique em "New Project"
3. Escolha "Import Git Repository" e conecte sua conta do GitHub, ou use "Upload" para fazer upload direto dos arquivos
4. Siga as instruções para concluir o deploy

### Opção 2: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos deste projeto para o repositório
3. Vá para Settings > Pages
4. Em "Source", selecione "main" (ou "master") e salve
5. Seu site estará disponível em `https://seu-usuario.github.io/nome-do-repositorio`

### Opção 3: Hospedagem Compartilhada

1. Acesse o painel de controle da sua hospedagem
2. Encontre a opção para gerenciar arquivos ou FTP
3. Faça upload de todos os arquivos deste projeto para a pasta raiz do seu domínio
4. O site estará disponível no seu domínio

## Personalização

### Adicionando Imagens Reais

As imagens no site são placeholders. Para adicionar imagens reais:

1. Substitua os arquivos nas pastas dentro de `assets/images/` e `assets/icons/`
2. Mantenha os mesmos nomes de arquivo ou atualize as referências nos arquivos HTML

### Modificando Conteúdo

Para modificar o conteúdo do site:

1. Edite os arquivos HTML correspondentes a cada página
2. As seções de tutoriais estão claramente marcadas com comentários
3. Você pode adicionar, remover ou modificar tutoriais conforme necessário

## Tecnologias Utilizadas

- HTML5
- CSS3 (com design responsivo)
- JavaScript (vanilla)
- Font Awesome para ícones

## Contato

Se precisar de ajuda ou tiver dúvidas sobre o site, entre em contato.
