

// import React, { useEffect, useState } from "react";
// import { FaSearchLocation } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// function Toprated() {
//   const [show, setShow] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredMovies, setFilteredMovies] = useState([]);

//   const navigate = useNavigate();

//   const getMovie = () => {
//     fetch(
//       "https://api.themoviedb.org/3/trending/movie/week?api_key=a6d86a939602ad4fa0ae979abebc93f3"
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         setShow(json.results);
//         setFilteredMovies(json.results);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getMovie();
//   }, []);

//   useEffect(() => {
//     const filtered = show.filter((movie) =>
//       movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredMovies(filtered);
//   }, [searchQuery, show]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleImageClick = (id) => {
//     navigate(`/movie/${id}`);
//   };

//   return (
//     <>
//       {/* This is a search input */}
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className="flex justify-center mt-8">
//           <div className="relative w-full max-w-md">
//             <input
//               type="search"
//               id="search-dropdown"
//               className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//               placeholder="Searching Movies"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               required
//             />
//             <button
//               type="submit"
//               className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               <FaSearchLocation />
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* This is a map function */}
//       <h1 className="text-3xl font-mono text-center mt-8 mb-4">Top Rated Movies</h1>
//       <div className="flex flex-wrap justify-center gap-4">
//         {filteredMovies.length > 0 ? (
//           filteredMovies.map((item) => (
//             <div
//               key={item.id}
//               className="w-full sm:w-60 h-80 bg-white shadow-lg rounded-lg overflow-hidden m-2 sm:m-4 flex flex-col"
//             >
//               <div className="w-full h-3/4">
//                 <img
//                   className="w-full h-full object-cover"
//                   src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//                   alt={item.title}
//                   onClick={() => handleImageClick(item.id)}
//                 />
//               </div>
//               <div className="p-4 h-1/4 flex flex-col justify-between">
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-gray-600">{item.release_date}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-xl font-semibold mt-8">No movie found</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Toprated;
import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Toprated() {
  const [show, setShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const navigate = useNavigate();

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=a6d86a939602ad4fa0ae979abebc93f3"
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
    <div className="container mx-auto">
      <form onSubmit={(e) => e.preventDefault()} className="mt-8 mb-4">
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Movies"
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaSearchLocation />
          </button>
        </div>
      </form>

      <h1 className="text-3xl font-mono text-center mt-8 mb-4">Top Rated Movies</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-80 bg-white shadow-lg rounded-lg overflow-hidden m-2 sm:m-4 flex flex-col"
            >
              <div className="w-full h-3/4">
                <img
                  className="w-full h-full object-cover cursor-pointer"
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
          <p className="text-xl font-semibold mt-8">No movie found</p>
        )}
      </div>
    </div>
  );
}

export default Toprated;
