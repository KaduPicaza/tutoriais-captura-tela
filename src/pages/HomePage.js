import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router for navigation

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tutoriais de Captura de Tela</h1>
        <p className="text-lg text-gray-600">
          Bem-vindo ao nosso centro de tutoriais! Aprenda a capturar a tela do seu dispositivo de forma rápida e fácil, 
          seja no Windows, iOS ou Android. Também oferecemos guias sobre como anexar suas capturas no Google Classroom.
        </p>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Card para Windows */}
          <Link to="/windows" className="block p-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Windows</h2>
            <p>Tutoriais para capturar tela no sistema operacional Windows.</p>
          </Link>

          {/* Card para iOS */}
          <Link to="/ios" className="block p-6 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition-colors">
            <h2 className="text-2xl font-semibold mb-2">iOS</h2>
            <p>Aprenda a tirar prints em iPhones e iPads.</p>
          </Link>

          {/* Card para Android */}
          <Link to="/android" className="block p-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Android</h2>
            <p>Descubra como capturar a tela em dispositivos Android.</p>
          </Link>

          {/* Card para Google Classroom */}
          <Link to="/google-classroom" className="block p-6 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Google Classroom</h2>
            <p>Como anexar suas capturas de tela nas atividades.</p>
          </Link>
        </section>

        <section className="text-center">
          <p className="text-gray-700">
            Navegue pelas seções para encontrar vídeos, guias passo a passo e imagens ilustrativas que facilitarão seu aprendizado.
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
