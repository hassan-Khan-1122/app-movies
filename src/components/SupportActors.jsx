import React from 'react'

export default function SupportActors() {
    const images = [
        {
          id: 1,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/vjFATaJfAyBie56J4Qv2DQ9Dyem.jpg" ,
          title: "The Morign",
          desc: "Anatomie d'une chute",
        },
        {
          id: 2,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg" ,
        

          title: "The army",
          desc: "The faminaste"
        },
        {
          id: 3,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" ,
    
          title: "The army",
          desc: "The faminaste"
        },
        {
          id: 4,
          src :"https://media.themoviedb.org/t/p/w220_and_h330_face/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg" ,

          title: "The army",
          desc: "The faminaste"
        },
        {
            id :5 ,
            src : "https://media.themoviedb.org/t/p/w220_and_h330_face/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg",
            title : "the armmeuh",
            desc :" the Faminaste"
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
