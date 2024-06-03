// import React from 'react'

// export default function BesActor() {

//     const img = [
//         {
//             img1: "https://media.themoviedb.org/t/p/w220_and_h330_face/mOn5lo038i8vw6qqJTwKw35KCL7.jpg",
//             title:"The Morign",
//             desc:"Anatomie d'une chute",
//         },{
//             img2:"https://media.themoviedb.org/t/p/w220_and_h330_face/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg",
//             tile:"The army",
//             desc :" the faminaste"
//         },
//         {
//             img3:"https://media.themoviedb.org/t/p/w220_and_h330_face/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg",
//             tile:"The army",
//             desc :" the faminaste"
//         },
//         {
//             img4:"https://media.themoviedb.org/t/p/w220_and_h330_face/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg",
//             tile:"The army",
//             desc :" the faminaste"
//         },
      
//     ]
//   return (
//     <div>

//     </div>
//   )
// }

import React from 'react';

export default function BesActor() {
  const images = [
    {
      id: 1,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/mOn5lo038i8vw6qqJTwKw35KCL7.jpg",
      title: "The Morign",
      desc: "Anatomie d'une chute",
    },
    {
      id: 2,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg",
      title: "The army",
      desc: "The faminaste"
    },
    {
      id: 3,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg",

      title: "The army",
      desc: "The faminaste"
    },
    {
      id: 4,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/kwKfSubzU8B0uLCEiPvY1mGOVwZ.jpg",
      title: "The army",
      desc: "The faminaste"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-4 shado-lg">
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
