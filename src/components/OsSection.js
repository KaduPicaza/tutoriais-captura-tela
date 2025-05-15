import React from 'react';

// Este componente será usado para exibir o conteúdo de cada seção de SO
// Ele receberá dados como props (título, vídeos, textos, imagens)
function OsSection({ title, videoTutorials, textTutorials, imageTutorials }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">&larr; Voltar para Início</Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>

      {/* Seção de Vídeos */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tutoriais em Vídeo</h2>
        {videoTutorials && videoTutorials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTutorials.map((video, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2">{video.title}</h3>
                {/* Placeholder para embed de vídeo */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded mb-2">
                  <iframe src={video.url} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                </div>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Ver no {video.platform || 'YouTube'}</a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Nenhum tutorial em vídeo disponível no momento.</p>
        )}
      </section>

      {/* Seção de Textos Explicativos */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Textos Explicativos e Passo a Passo</h2>
        {textTutorials && textTutorials.length > 0 ? (
          <div className="space-y-4">
            {textTutorials.map((text, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2">{text.title}</h3>
                <p className="text-gray-600 mb-2">{text.description}</p>
                <a href={text.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Ler Artigo Completo</a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Nenhum texto explicativo disponível no momento.</p>
        )}
      </section>

      {/* Seção de Imagens Ilustrativas */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Imagens Ilustrativas</h2>
        {imageTutorials && imageTutorials.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageTutorials.map((image, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow">
                <img src={image.url} alt={image.alt || 'Imagem Ilustrativa'} className="w-full h-auto rounded"/>
                {image.caption && <p className="text-sm text-gray-600 mt-1 text-center">{image.caption}</p>}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Nenhuma imagem ilustrativa disponível no momento.</p>
        )}
      </section>
    </div>
  );
}

export default OsSection;
