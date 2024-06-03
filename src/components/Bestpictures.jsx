
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
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg",
      desc: "Margot Robbie, Tom Ackerley, Robbie Brenner, and David Heyman",
      title: "Barbie"
    },
    {
                id: 4,
                src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg",
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
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <div className="aspect-w-16 aspect-h-9">
            <img className="object-cover" src={image.src} alt={`Best Picture ${image.id}`} />
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

