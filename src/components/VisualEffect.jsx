import React from 'react'

export default function VisualEffect() {
    const images = [
        {
          id: 1,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg" ,
          title: "The Morign",
          desc: "Anatomie d'une chute",
        },
        {
          id: 2,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg" ,
        

          title: "The army",
          desc: "The faminaste"
        },
        {
          id: 3,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/buvBq2zLP7CcJth8tjrI4znvfEO.jpg" ,
    
          title: "The army",
          desc: "The faminaste"
        },
        {
          id: 4,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" ,

          title: "The army",
          desc: "The faminaste"
        },
        {
            id :5 ,
            src : "https://media.themoviedb.org/t/p/w220_and_h330_face/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
            title : "The Creator",
            desc :" the Feminis"
        }
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
  )
}
