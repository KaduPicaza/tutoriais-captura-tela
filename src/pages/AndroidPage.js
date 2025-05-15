import React from 'react';
import OsSection from '../components/OsSection';
import { Link } from 'react-router-dom';

const androidData = {
  title: "Tutoriais de Captura de Tela no Android",
  videoTutorials: [
    { title: "3 MANEIRAS DE TIRAR PRINT NO CELULAR", url: "https://www.youtube.com/embed/PcH___7WyVE", platform: "YouTube" },
    { title: "CONFIGURAR E USAR CAPTURA DE TELA NO ANDROID 12 E SUPERIORES", url: "https://www.youtube.com/embed/C2-e1GI37NE", platform: "YouTube" },
    { title: "Como Tirar Print no Celular com Gestos (Xiaomi, Motorola, Samsung)", url: "https://www.youtube.com/embed/r7IRHdwpcfc", platform: "YouTube" }, // Example, combine info from various gesture videos
  ],
  textTutorials: [
    { title: "Como tirar print da tela do celular Android - Google", description: "Guia oficial do Google sobre como fazer uma captura de tela no Android, incluindo edições e compartilhamento.", url: "https://support.google.com/android/answer/9075928?hl=pt-BR" },
    { title: "Como tirar print no celular Samsung: diferentes formas", description: "Guia da Samsung com métodos específicos para aparelhos Galaxy, incluindo gestos e Smart Select.", url: "https://www.samsung.com/br/support/mobile-devices/como-tirar-print-no-celular-samsung/" },
    { title: "Como tirar print no Xiaomi? Veja todas as formas", description: "Tutorial do TecMundo para celulares Xiaomi, cobrindo botões, gestos e a Central de Controle.", url: "https://www.tecmundo.com.br/software/237058-tirar-print-xiaomi-veja-todas-formas.htm" }, // Placeholder, find actual recent article
    { title: "Como tirar print da tela do celular Motorola", description: "Instruções da Motorola para captura de tela em seus dispositivos, incluindo o gesto de três dedos.", url: "https://motorola-global-portal-pt.custhelp.com/app/answers/detail/a_id/164974/~/como-tirar-print-da-tela---moto-g53-5g" }, // Example for a specific model, generalize or find broader article
  ],
  imageTutorials: [
    { url: "/assets/images/android_buttons_screenshot.png", alt: "Como tirar print no Android usando botões", caption: "Android: Botão Diminuir volume + Ligar/Desligar" },
    { url: "/assets/images/android_gesture_screenshot.png", alt: "Como tirar print no Android usando gestos", caption: "Alguns Androids: Deslizar 3 dedos para baixo" },
    { url: "/assets/images/android_quicksettings_screenshot.png", alt: "Como tirar print no Android pelo painel de notificações", caption: "Opção de Captura de Tela no Painel Rápido" },
  ],
  // Nota: As imagens acima são placeholders. Recomenda-se usar imagens claras e específicas para diferentes interfaces Android ou criar screenshots.
  // Os sites de suporte dos fabricantes (Samsung, Motorola, Google) e portais de tecnologia costumam ter boas ilustrações.
};

function AndroidPage() {
  return <OsSection {...androidData} />;
}

export default AndroidPage;
