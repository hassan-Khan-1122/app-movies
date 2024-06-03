// 
import React from 'react';

export default function Bestpictures() {
  const images = [
    {
      id: 1,
      src: "https://image.tmdb.org/t/p/original/u5kboZR4OMi4QdbOhawCZuzMVWJ.jpg",
      title: "American Movie",
      desc: "Ben LeClair, Nikos Karamigios, Jermaine Johnson, and Cord Jefferson"
    },
    {
      id: 2,
      src: "https://ih1.redbubble.net/image.3468393245.5941/fposter,small,wall_texture,square_product,600x600.jpg",
      title: "Francisco Movie",
      desc: "Marie-Ange Luciani and David Thion"
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
      id: 4,
      src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSn5XOujw9Ca6d4FNLCmJdNoGo9_KfVfcD4ty2t3as4m3D9ogpCysikFGJnCfkE9KZjAcEw0Age1qzYQ0FCBZ2p6rJx3d7UKI1JNE0XsuY",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
      id: 5,
      src: "https://upload.wikimedia.org/wikipedia/en/7/70/My_Fault_%28film%29_poster.jpg",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
      id: 6,
      src: "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tPbnRsVQFDWh8E3CxfSpjlTyYzMg8aJxuQ&s",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
      id: 8,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
      id: 9,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/hUu9zyZmDd8VZegKi1iK1Vk0RYS.jpg",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
      id: 10,
      src: "https://media.themoviedb.org/t/p/w220_and_h330_face/57MFWGHarg9jid7yfDTka4RmcMU.jpg",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
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
  );
}
