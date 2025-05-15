import React from 'react';
import OsSection from '../components/OsSection';
import { Link } from 'react-router-dom';

const iosData = {
  title: "Tutoriais de Captura de Tela no iOS (iPhone & iPad)",
  videoTutorials: [
    { title: "Como tirar print no iPhone (Oficial Apple)", url: "https://www.youtube.com/embed/cpYxV1bLdLQ", platform: "YouTube" }, // Placeholder, Apple video usually on their site
    { title: "Como tirar print no iPad (Oficial Apple)", url: "https://www.youtube.com/embed/V3-150N-L1c", platform: "YouTube" }, // Placeholder
    { title: "Como Tirar Print no iPhone 14/13/12/11/XR/X/8/7", url: "https://www.youtube.com/embed/Y_xO6uW_m7o", platform: "YouTube" }, // Example, find actual recent video
  ],
  textTutorials: [
    { title: "Tirar uma captura de tela no iPhone - Suporte da Apple (BR)", description: "Guia oficial da Apple sobre como capturar a tela em iPhones com Face ID e com botão de Início.", url: "https://support.apple.com/pt-br/guide/iphone/iphc872c0115/ios" },
    { title: "Tirar uma captura de tela no iPad - Suporte da Apple (BR)", description: "Instruções oficiais da Apple para capturar a tela em diferentes modelos de iPad.", url: "https://support.apple.com/pt-br/guide/ipad/ipad08a40f3b/ipados" },
    { title: "Como tirar print no iPhone 14? Tutorial ensina 5 métodos fáceis - Techtudo", description: "Artigo do Techtudo com métodos variados, incluindo botões, AssistiveTouch e Siri.", url: "https://www.techtudo.com.br/dicas-e-tutoriais/2025/01/como-tirar-print-no-iphone-14-tutorial-ensina-5-metodos-faceis-edmobile.ghtml" },
  ],
  imageTutorials: [
    { url: "/assets/images/ios_faceid_screenshot.png", alt: "Como tirar print em iPhone com Face ID", caption: "iPhone com Face ID: Botão lateral + Aumentar volume" },
    { url: "/assets/images/ios_homebutton_screenshot.png", alt: "Como tirar print em iPhone com botão de Início", caption: "iPhone com Touch ID: Botão lateral/superior + Início" },
    { url: "/assets/images/ipad_screenshot_buttons.png", alt: "Como tirar print no iPad usando botões", caption: "iPad: Botão superior + Aumentar/Diminuir volume" },
  ],
  // Nota: As imagens acima são placeholders. Recomenda-se usar imagens oficiais da Apple ou criar screenshots claros.
  // As páginas de suporte da Apple possuem boas ilustrações.
};

function IOSPage() {
  return <OsSection {...iosData} />;
}

export default IOSPage;
