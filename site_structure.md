# Estrutura do Site de Tutoriais de Captura de Tela (HTML/CSS/JS)

## Visão Geral
Site responsivo e simples que centraliza tutoriais sobre como tirar print (captura de tela) nos sistemas Windows, iOS e Android, além de como anexar imagens no Google Classroom.

## Estrutura de Arquivos

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
    ├── images/                 # Imagens ilustrativas
    │   ├── windows/            # Imagens para tutoriais do Windows
    │   ├── ios/                # Imagens para tutoriais do iOS
    │   ├── android/            # Imagens para tutoriais do Android
    │   └── classroom/          # Imagens para tutoriais do Google Classroom
    └── icons/                  # Ícones e logos
```

## Estrutura de Conteúdo

### Página Inicial (index.html)
- Cabeçalho com título e navegação
- Introdução sobre capturas de tela
- Cards/botões para cada sistema operacional (Windows, iOS, Android)
- Card/botão para Google Classroom
- Rodapé com informações de contato/copyright

### Páginas de Sistemas (windows.html, ios.html, android.html)
Cada página terá:
- Cabeçalho com navegação
- Título e introdução específica para o sistema
- Seção de tutoriais em vídeo (YouTube)
- Seção de tutoriais em texto com passo a passo
- Seção de imagens ilustrativas
- Rodapé

### Página Google Classroom (google-classroom.html)
- Cabeçalho com navegação
- Título e introdução
- Tutoriais sobre como anexar imagens capturadas em atividades
- Links para vídeos, textos e imagens explicativas
- Rodapé

## Elementos de Design
- Layout responsivo para desktop e dispositivos móveis
- Esquema de cores simples e acessível
- Navegação intuitiva entre as páginas
- Incorporação de vídeos do YouTube
- Links externos para tutoriais detalhados
