import React from 'react'

function Actress() {
    const images = [
        {
          id: 1,
          src:"https://media.themoviedb.org/t/p/w220_and_h330_face/sBiiRwAVXd0FCRZ87m0I89qGBvy.jpg",
          title: "Annette Bening",
          desc: "New releaed",
        },
        {
          id: 2,
          src:"https://media.themoviedb.org/t/p/w220_and_h330_face/qep2yrwl02N4KUHy7MEchnjwHN9.jpg",
          title: "Lily Gladstone",
          desc: "Killers of the Flower Moon"
        },
        {
          id: 3,
          src:"https://media.themoviedb.org/t/p/w220_and_h330_face/jQfKXVCPTH9KEnzHHU4QemCnlMe.jpg",
    
          title: "Sandra Hüller",
          desc: "Anatomie d'une chute"
        },
        {
          id: 4,
          src:"https://media.themoviedb.org/t/p/w220_and_h330_face/iwVHhqoz5b62FR0SDpZ7wfsuTBI.jpg",
          title: "Carey Mulligan",
          desc: "Maestro"
        },
        {
            id:5,
            src : "https://media.themoviedb.org/t/p/w220_and_h330_face/cZ8a3QvAnj2cgcgVL6g4XaqPzpL.jpg",
            title:"Emma Stone",
            desc:"Poor Things"
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

export default Actress