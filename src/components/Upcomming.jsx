
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaSearchLocation } from "react-icons/fa";


// export default function Upcomming() {
//   const [show, setShow] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredMovies, setFilteredMovies] = useState([]);


//   const navie = useNavigate();

//   const getMovies = () => {
//     fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=a6d86a939602ad4fa0ae979abebc93f3')
//       .then(res => res.json())
//       .then(json => {
//         setShow(json.results);
//       })
//       .catch(error => console.log('Error fetching data:', error));
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);
//   useEffect(() => {

//     const filtered = show.filter((movie) =>
//       movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredMovies(filtered);
//   }, [searchQuery, show]);

//   // image handle can be id
// const handleImage = (id)=>{
//   navie(`/movie/${id}`)
// }
//   return (
// <>
//     <form onSubmit={(e) => e.preventDefault()}>
//     <div className="flex mt-8">
//       <div className="relative w-[400px] ml-[70%]">
//       <input
//   type="search"
//   id="search-dropdown"
//   className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//   placeholder="Searching Movies"
//   value={searchQuery} // Controlled input value
//   onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
//   required
// />
//         <button
//           type="submit"
//           className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           <FaSearchLocation />
//         </button>
//       </div>
//     </div>
//   </form>
//     <div className='w-full h-auto'>
//       <h1 className="text-3xl font-mono ml-36 mt-8">Upcoming Movies</h1>
//       <div className='flex flex-wrap justify-center'>
//         {show.map((item) => (
//           <div
//             key={item.id}
//             className="w-60 h-96 bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col"
//           >
//             <div className="w-full h-3/4">
//               <img
//                 className="w-full h-full object-cover cursor-pointer overflow-hidden"
//                 src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//                 alt={item.title}
//                 onClick={()=>handleImage(item.id)}
//                  />
//             </div>
//             <div className="p-4 h-1/4 flex flex-col justify-between">
//               <h2 className="text-lg font-semibold">{item.title}</h2>
//               <p className="text-gray-600">{item.release_date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
// </>

//   );
// }




import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Upcomming() {
  const [show, setShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const navigate = useNavigate();

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=a6d86a939602ad4fa0ae979abebc93f3"
    )
      .then((res) => res.json())
      .then((json) => {
        setShow(json.results);
        setFilteredMovies(json.results); 
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {

    const filtered = show.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchQuery, show]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleImageClick = (id) => {
    navigate(`/movie/${id}`);
};


  return (
    <>
      {/* This is a search input */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex mt-8">
          <div className="relative w-[400px] ml-[70%]">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Searching Movies"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaSearchLocation />
            </button>
          </div>
        </div>
      </form>

      {/* This is a map function */}
      <h1 className="text-3xl font-mono ml-36">Up Comming Movies</h1>
      <div className="flex flex-wrap justify-center cursor-pointer">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((item) => (
            <div
              key={item.id}
              className="w-60 h-80 bg-white shadow-lg rounded-lg overflow-hidden m-4 flex flex-col"
            >
              <div className="w-full h-3/4">
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  onClick={() => handleImageClick(item.id)}
                />
              </div>
              <div className="p-4 h-1/4 flex flex-col justify-between">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">{item.release_date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl font-semibold mt-8">No movie Found</p>
        )}
      </div>
    </>
  );
}

export default Upcomming;

