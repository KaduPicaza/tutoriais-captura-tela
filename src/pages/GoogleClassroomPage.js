import React from 'react';
import OsSection from '../components/OsSection'; // Reutilizando o OsSection por enquanto
import { Link } from 'react-router-dom';

const googleClassroomData = {
  title: "Tutoriais: Anexar Imagens no Google Classroom",
  videoTutorials: [
    { title: "Como ENVIAR ATIVIDADE com FOTO ou ARQUIVO no CLASSROOM pelo CELULAR", url: "https://www.youtube.com/embed/N-DbX0qy3oY", platform: "YouTube" }, // Exemplo, buscar vídeo específico e recente
    { title: "Como ANEXAR ARQUIVOS nas atividades do Google Classroom (PC)", url: "https://www.youtube.com/embed/LhmtWkVOLgE", platform: "YouTube" }, // Exemplo
    { title: "Google Classroom: Como Alunos Postam Atividades (FOTOS, VÍDEOS, ARQUIVOS)", url: "https://www.youtube.com/embed/T7pY_pKuZaM", platform: "YouTube" }, // Exemplo
  ],
  textTutorials: [
    { title: "Entregar uma atividade - Ajuda do Google Classroom", description: "Guia oficial do Google sobre como entregar atividades, incluindo anexar arquivos e fotos.", url: "https://support.google.com/edu/classroom/answer/6020285?hl=pt-BR" },
    { title: "Adicionar anexos às atividades - Ajuda do Google Classroom", description: "Instruções detalhadas do Google sobre os tipos de anexos que os alunos podem adicionar às atividades.", url: "https://support.google.com/edu/classroom/answer/9073520?hl=pt-BR&co=GENIE.Platform%3DDesktop" }, // Link para Desktop, verificar se há para mobile ou geral
    { title: "Como postar fotos de atividades no Google Classroom - Tecnoblog", description: "Tutorial do Tecnoblog focado em como alunos podem enviar fotos de suas tarefas.", url: "https://tecnoblog.net/responde/como-postar-fotos-de-atividades-no-google-classroom/" },
  ],
  imageTutorials: [
    { url: "/assets/images/classroom_anexar_pc.png", alt: "Anexar arquivo no Google Classroom pelo computador", caption: "Anexar no PC: Botão Adicionar ou criar" },
    { url: "/assets/images/classroom_anexar_celular.png", alt: "Anexar arquivo no Google Classroom pelo celular", caption: "Anexar no Celular: Opção Adicionar trabalho" },
    { url: "/assets/images/classroom_entregar_atividade.png", alt: "Entregar atividade no Google Classroom após anexar", caption: "Confirmar entrega da atividade" },
  ],
  // Nota: As imagens acima são placeholders. Recomenda-se usar screenshots claros da interface do Google Classroom em português (PC e Mobile).
  // As páginas de ajuda do Google e tutoriais em vídeo costumam ter boas ilustrações.
};

function GoogleClassroomPage() {
  return <OsSection {...googleClassroomData} />;
}

export default GoogleClassroomPage;
