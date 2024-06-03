
import React from 'react';

function Actor() {
  const images = [
    {
      id: 1,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/DPnessSsWqVXRbKm93PtMjB4Us.jpg",
      title: "The Morign",
      desc: "Anatomie d'une chute",
    },
    {
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/2tu6T9ugnf82qIMGVKWSb0dvvq5.jpg",
      id: 2,
      title: "The army",
      desc: "The faminaste"
    },
    {
      id: 3,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/kn7LAbFYP5RPC2r61tDx2CRUeuw.jpg",
      title: "The army",
      desc: "The faminaste"
    },
    {
      id: 4,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/2lKs67r7FI4bPu0AXxMUJZxmUXn.jpg",
      title: "The army",
      desc: "The faminaste"
    },
    {
      id: 5,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/yGcuHGW4glqRpOPxgiCvjcren7F.jpg",
      title: "The Moragan",
      desc: "American Fiction",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4 shadow-lg">
      {images.map((image) => (
        <div
          key={image.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
        >
          <div className="w-full h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={image.src}
              alt={`Best Picture ${image.id}`}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">{image.title}</h2>
            <p className="text-gray-600">{image.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Actor;

