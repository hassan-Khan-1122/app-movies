// import React, { useEffect, useState } from "react";

// function Moves() {
//   const [show, setshow] = useState([]);
//   const [select, setselect] = useState("movie");

//   const getmovie = () => {
//     fetch(
//       `https://api.themoviedb.org/3/discover/${select}?api_key=a6d86a939602ad4fa0ae979abebc93f3`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json.results);
//         setshow(json.results);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getmovie();
//   }, [select]);

//   return (
//     <>
//       <div className="mt-5">
//         {select === "tv" ? (
//           <h1 className="text-center  text-4xl">This a Tv Movies</h1>
//         ) : (
//           <h1 className="text-center  text-4xl">This is a latest Movies</h1>
//         )}
//       </div>
//       <div className="flex flex-wrap justify-center gap-4 p-4">
//         {show.map((data) => (
//           <div
//             key={data.id}
//             className="border border-gray-200 rounded-lg overflow-hidden shadow-lg"
//           >
//             <img
//               className="w-[200px] h-[250px] object-cover"
//               src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
//               alt={data?.title}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           type="button"
//           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//      onClick={()=>setselect("movie")}   >
//           New Movies
//         </button>
//         <button
//           type="button"
//           class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//       onClick={()=>setselect("tv")}  >
//           New Tv{" "}
//         </button>

//       </div>
//     </>
//   );
// }

// export default Moves;

// // import React, { useEffect, useState } from 'react';

// // function Moves() {
//     const [show, setshow] = useState([]);
//     const [select, setselect] = useState("");

//     const getmovie = () => {
//         fetch(`https://api.themoviedb.org/3/discover/${select ? select : "movie"}?api_key=a6d86a939602ad4fa0ae979abebc93f3`)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json.results);
//                 setshow(json.results);
//             })
//             .catch(error => console.log (error));
//     };

//     useEffect(() => {
//         getmovie();
//     }, [select]);

//     return (
//         <>
//           <div>
//             {
//                 select === "tv"? "this is a tv":"this is a movie"
//             }
//           </div>
//             <div className="flex flex-wrap justify-center gap-4 p-4">
//                 {show.map((data) => (
//                     <div key={data.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
//                         <img className="w-[200px] h-[250px] object-cover" src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data?.title} />
//                     </div>
//                 ))}
//             </div>
//             <div className="flex justify-center mt-4">
//                 <button className="bg-orange-500 text-white py-2 px-4 mx-2 rounded" onClick={() => setselect("movie")}>Movies</button>
//                 <button className="bg-red-500 text-white py-2 px-4 mx-2 rounded" onClick={() => setselect("tv")}>TV</button>
//             </div>
//         </>
//     );
// }

// // export default Moves;
