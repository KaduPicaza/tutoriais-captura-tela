import React from 'react';
import OsSection from '../components/OsSection';
import { Link } from 'react-router-dom';

const windowsData = {
  title: "Tutoriais de Captura de Tela no Windows",
  videoTutorials: [
    { title: "Como Tirar print no pc de forma fácil e rápida!", url: "https://www.youtube.com/embed/MZSQhHCl08g", platform: "YouTube" },
    { title: "Como tirar print da tela no PC usando a Ferramenta de Captura do Windows", url: "https://www.youtube.com/embed/U644ZBFjEnI", platform: "YouTube" },
    { title: "Como tirar print de tela no Windows 11", url: "https://www.youtube.com/embed/O_9MHwVripI", platform: "YouTube" },
  ],
  textTutorials: [
    { title: "Como tirar print no PC? Veja 7 formas diferentes de fazer - Canaltech", description: "Guia completo do Canaltech com 7 métodos para capturar a tela no Windows, incluindo atalhos e a Ferramenta de Captura.", url: "https://canaltech.com.br/software/como-tirar-print-no-pc/" },
    { title: "Como Fazer uma Captura de Tela no Windows (7, 8, 10) - Kinsta", description: "Artigo detalhado da Kinsta cobrindo desde o básico com a tecla Print Screen até ferramentas como Snipping Tool e Snip & Sketch.", url: "https://kinsta.com/pt/blog/captura-de-tela-no-windows/" },
    { title: "Como tirar print no PC e notebook? Guia definitivo com 9 métodos - Techtudo", description: "Guia do Techtudo com 9 métodos, incluindo Xbox Game Bar e como salvar em PDF.", url: "https://www.techtudo.com.br/guia/2024/06/como-tirar-um-print-da-tela-no-pc-e-no-notebook-guia-definitivo-edsoftwares.ghtml" },
  ],
  imageTutorials: [
    { url: "/assets/images/windows_print_screen_key.png", alt: "Tecla Print Screen no teclado Windows", caption: "Tecla Print Screen (PrtScn)" },
    { url: "/assets/images/windows_snipping_tool.png", alt: "Ferramenta de Captura do Windows", caption: "Ferramenta de Captura" },
    { url: "/assets/images/windows_snip_sketch.png", alt: "Ferramenta Captura e Esboço (Snip & Sketch) no Windows", caption: "Captura e Esboço" },
  ],
  // Nota: As imagens acima são placeholders. Recomenda-se criar ou obter imagens reais e armazená-las em public/assets/images/
  // Os artigos do Canaltech e Kinsta possuem boas imagens ilustrativas que podem servir de referência.
};

function WindowsPage() {
  return <OsSection {...windowsData} />;
}

export default WindowsPage;
