

// // // import React, { useEffect, useState } from 'react';
// // // import { motion } from "framer-motion";
// // // import { useNavigate } from 'react-router-dom';
// // // import ToggleButton from '@mui/material/ToggleButton';
// // // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// // // export default function Movies() {
// // //     const [show, setShow] = useState([]);
// // //     const [select, setSelect] = useState("movie");
// // //     const [alignment, setAlignment] = useState('movie');
// // //     const navigate = useNavigate();

// // //     const getMovies = () => {
// // //         console.log(`Fetching ${select}`); 
// // //         fetch(`https://api.themoviedb.org/3/discover/${select}?api_key=a6d86a939602ad4fa0ae979abebc93f3`)
// // //             .then(res => res.json())
// // //             .then(json => {
// // //                 console.log(json)
// // //                 setShow(json.results);
// // //             })
// // //             .catch(error => console.log('Error fetching data:', error)); 
// // //     };

// // //     useEffect(() => {
// // //         getMovies();
// // //     }, [select]);

// // //     const handleChange = (event, newAlignment) => {
// // //         if (newAlignment !== null) {
// // //             setAlignment(newAlignment);
// // //             setSelect(newAlignment === 'movie' ? 'movie' : 'tv');
// // //         }
// // //     };

// // //     const handleImageClick = (id) => {
// // //         navigate(`/movie/${id}`);
// // //     };

// // //     return (
// // //         <>
// // //             <div className="flex ml-9 mt-10">
// // //                 <h1 className='flex items-center text-4xl '>Trending</h1>
// // //                 <ToggleButtonGroup
// // //                     color="primary"
// // //                     value={alignment}
// // //                     exclusive
// // //                     onChange={handleChange}
// // //                     aria-label="Platform"
// // //                     className='ml-9'
// // //                 >
// // //                     <ToggleButton value="movie">Today</ToggleButton>
// // //                     <ToggleButton value="tv">This Week</ToggleButton>
// // //                 </ToggleButtonGroup>
// // //             </div>
// // //             <div className="flex flex-nowrap overflow-x-auto gap-4 p-4 mt-5 cursor-pointer">
// // //                 {show.map((data) => (
// // //                     <motion.div
// // //                         key={data.id}
// // //                         className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden shadow-lg w-[200px]"
// // //                         initial={{ opacity: 0, y: 50 }}
// // //                         animate={{ opacity: 1, y: 0 }}
// // //                         transition={{ duration: 2 }}
// // //                         onClick={() => handleImageClick(data.id)}
// // //                     >
// // //                         <img
// // //                             loading="lazy"
// // //                             className="w-full h-[250px] object-cover"
// // //                             src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
// // //                             alt={data?.title || data?.name}
// // //                         />
// // //                         <p className="text-center p-2 text-sm font-semibold h-12 overflow-hidden">
// // //                             {data.title || data.name}
// // //                         </p>
// // //                     </motion.div>
// // //                 ))}
// // //             </div>
// // //         </>
// // //     );
// // // }

// // import React, { useEffect, useState } from 'react';
// // import { motion } from "framer-motion";
// // import { useNavigate } from 'react-router-dom';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// // export default function Movies() {
// //     const [show, setShow] = useState([]);
// //     const [select, setSelect] = useState("movie");
// //     const [alignment, setAlignment] = useState('movie');
// //     const navigate = useNavigate();

// //     const getMovies = () => {
// //         console.log(`Fetching ${select}`); 
// //         fetch(`https://api.themoviedb.org/3/discover/${select}?api_key=a6d86a939602ad4fa0ae979abebc93f3`)
// //             .then(res => res.json())
// //             .then(json => {
// //                 console.log(json)
// //                 setShow(json.results);
// //             })
// //             .catch(error => console.log('Error fetching data:', error)); 
// //     };

// //     useEffect(() => {
// //         getMovies();
// //     }, [select]);

// //     const handleChange = (event, newAlignment) => {
// //         if (newAlignment !== null) {
// //             setAlignment(newAlignment);
// //             setSelect(newAlignment === 'movie' ? 'movie' : 'tv');
// //         }
// //     };

// //     const handleImageClick = (id) => {
// //         navigate(`/movie/${id}`);
// //     };

// //     return (
// //         <>
// //             <div className="flex flex-col sm:flex-row items-center ml-4 mt-6 sm:ml-9 sm:mt-10">
// //                 <h1 className='text-2xl sm:text-4xl'>Trending</h1>
// //                 <ToggleButtonGroup
// //                     color="primary"
// //                     value={alignment}
// //                     exclusive
// //                     onChange={handleChange}
// //                     aria-label="Platform"
// //                     className='mt-4 sm:mt-0 sm:ml-9'
// //                 >
// //                     <ToggleButton value="movie">Today</ToggleButton>
// //                     <ToggleButton value="tv">This Week</ToggleButton>
// //                 </ToggleButtonGroup>
// //             </div>
// //             <div className="flex flex-wrap justify-center sm:flex-nowrap sm:overflow-x-auto gap-4 p-4 mt-5 cursor-pointer">
// //                 {show.map((data) => (
// //                     <motion.div
// //                         key={data.id}
// //                         className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden shadow-lg w-[150px] sm:w-[200px]"
// //                         initial={{ opacity: 0, y: 50 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 2 }}
// //                         onClick={() => handleImageClick(data.id)}
// //                     >
// //                         <img
// //                             loading="lazy"
// //                             className="w-full h-[200px] sm:h-[250px] object-cover"
// //                             src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
// //                             alt={data?.title || data?.name}
// //                         />
// //                         <p className="text-center p-2 text-xs sm:text-sm font-semibold h-12 overflow-hidden">
// //                             {data.title || data.name}
// //                         </p>
// //                     </motion.div>
// //                 ))}
// //             </div>
// //         </>
// //     );
// // }

// import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion";
// import { useNavigate } from 'react-router-dom';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// export default function Movies() {
//     const [show, setShow] = useState([]);
//     const [select, setSelect] = useState("movie");
//     const [alignment, setAlignment] = useState('movie');
//     const navigate = useNavigate();

//     const getMovies = () => {
//         console.log(`Fetching ${select}`); 
//         fetch(`https://api.themoviedb.org/3/discover/${select}?api_key=a6d86a939602ad4fa0ae979abebc93f3`)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 setShow(json.results);
//             })
//             .catch(error => console.log('Error fetching data:', error)); 
//     };

//     useEffect(() => {
//         getMovies();
//     }, [select]);

//     const handleChange = (event, newAlignment) => {
//         if (newAlignment !== null) {
//             setAlignment(newAlignment);
//             setSelect(newAlignment === 'movie' ? 'movie' : 'tv');
//         }
//     };

//     const handleImageClick = (id) => {
//         navigate(`/movie/${id}`);
//     };

//     return (
//         <>
//             <div className="flex flex-col sm:flex-row items-center ml-4 mt-6 sm:ml-9 sm:mt-10">
//                 <h1 className='text-2xl sm:text-4xl'>Trending</h1>
//                 <ToggleButtonGroup
//                     color="primary"
//                     value={alignment}
//                     exclusive
//                     onChange={handleChange}
//                     aria-label="Platform"
//                     className='mt-4 sm:mt-0 sm:ml-9'
//                 >
//                     <ToggleButton value="movie">Today</ToggleButton>
//                     <ToggleButton value="tv">This Week</ToggleButton>
//                 </ToggleButtonGroup>
//             </div>
//             <div className="flex flex-wrap justify-center sm:flex-nowrap sm:overflow-x-auto gap-4 p-4 mt-5 cursor-pointer">
//                 {show.map((data) => (
//                     <motion.div
//                         key={data.id}
//                         className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden shadow-lg w-[150px] h-[225px] sm:w-[200px] sm:h-[300px]"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 2 }}
//                         onClick={() => handleImageClick(data.id)}
//                     >
//                         <img
//                             loading="lazy"
//                             className="w-full h-full object-cover"
//                             src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
//                             alt={data?.title || data?.name}
//                         />
//                         <p className="text-center p-2 text-xs sm:text-sm font-semibold h-12 overflow-hidden">
//                             {data.title || data.name}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </>
//     // );
// 
// import React, { useEffect, useState } from 'react';
// import { motion } from "framer-motion";
// import { useNavigate } from 'react-router-dom';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// export default function Movies() {
//     const [show, setShow] = useState([]);
//     const [select, setSelect] = useState("movie");
//     const [alignment, setAlignment] = useState('movie');
//     const navigate = useNavigate();

//     const getMovies = () => {
//         console.log(`Fetching ${select}`); 
//         fetch(`https://api.themoviedb.org/3/discover/${select}?api_key=a6d86a939602ad4fa0ae979abebc93f3`)
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 setShow(json.results);
//             })
//             .catch(error => console.log('Error fetching data:', error)); 
//     };

//     useEffect(() => {
//         getMovies();
//     }, [select]);

//     const handleChange = (event, newAlignment) => {
//         if (newAlignment !== null) {
//             setAlignment(newAlignment);
//             setSelect(newAlignment === 'movie' ? 'movie' : 'tv');
//         }
//     };

//     const handleImageClick = (id) => {
//         navigate(`/movie/${id}`);
//     };

//     return (
//         <>
//             <div className="flex flex-col sm:flex-row items-center ml-4 mt-6 sm:ml-9 sm:mt-10">
//                 <h1 className='text-2xl sm:text-4xl'>Trending</h1>
//                 <ToggleButtonGroup
//                     color="primary"
//                     value={alignment}
//                     exclusive
//                     onChange={handleChange}
//                     aria-label="Platform"
//                     className='mt-4 sm:mt-0 sm:ml-9'
//                 >
//                     <ToggleButton value="movie">Today</ToggleButton>
//                     <ToggleButton value="tv">This Week</ToggleButton>
//                 </ToggleButtonGroup>
//             </div>
//             <div className="flex flex-wrap justify-center sm:flex-nowrap sm:overflow-x-auto gap-4 p-4 mt-5 cursor-pointer">
//                 {show.map((data) => (
//                     <motion.div
//                         key={data.id}
//                         className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden shadow-lg w-full sm:w-[200px] h-[225px] sm:h-[300px]"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 2 }}
//                         onClick={() => handleImageClick(data.id)}
//                     >
//                         <img
//                             loading="lazy"
//                             className="w-full h-full object-cover"
//                             src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
//                             alt={data?.title || data?.name}
//                         />
//                         <p className="text-center p-2 text-xs sm:text-sm font-semibold h-12 overflow-hidden">
//                             {data.title || data.name}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </>
//     );
// }


// 3rdd 
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Movies() {
    const [show, setShow] = useState([]);
    const [select, setSelect] = useState("movie");
    const [alignment, setAlignment] = useState('movie');
    const [fullScreenImage, setFullScreenImage] = useState(null); // State to track full-screen image
    const navigate = useNavigate();

    const getMovies = () => {
        console.log(`Fetching ${select}`);
        fetch(`https://api.themoviedb.org/3/discover/${select}?api_key=a6d86a939602ad4fa0ae979abebc93f3`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setShow(json.results);
            })
            .catch(error => console.log('Error fetching data:', error));
    };

    useEffect(() => {
        getMovies();
    }, [select]);

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            setSelect(newAlignment === 'movie' ? 'movie' : 'tv');
        }
    };

    const handleImageClick = (id) => {
        navigate(`/movie/${id}`);
    };

    const toggleFullScreen = (id) => {
        if (fullScreenImage === id) {
            setFullScreenImage(null); // If the clicked image is already full-screen, close it
        } else {
            setFullScreenImage(id); // Set the clicked image to full-screen
        }
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center ml-4 mt-6 sm:ml-9 sm:mt-10">
                <h1 className='text-2xl sm:text-4xl'>Trending</h1>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    className='mt-4 sm:mt-0 sm:ml-9'
                >
                    <ToggleButton value="movie">Today</ToggleButton>
                    <ToggleButton value="tv">This Week</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="flex flex-wrap justify-center sm:flex-nowrap sm:overflow-x-auto gap-4 p-4 mt-5 cursor-pointer">
                {show.map((data) => (
                    <motion.div
                        key={data.id}
                        className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden shadow-lg w-full sm:w-[200px] h-[225px] sm:h-[300px]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        onClick={() => handleImageClick(data.id)}
                    >
                        <img
                            loading="lazy"
                            className="w-full h-full object-cover"
                            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                            alt={data?.title || data?.name}
                            onClick={() => toggleFullScreen(data.id)} // Toggle full-screen on image click
                        />
                        <p className="text-center p-2 text-xs sm:text-sm font-semibold h-12 overflow-hidden">
                            {data.title || data.name}
                        </p>
                    </motion.div>
                ))}
            </div>
            {fullScreenImage && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => toggleFullScreen(fullScreenImage)}>
                    <img
                        loading="lazy"
                        className="max-w-full max-h-full"
                        src={`https://image.tmdb.org/t/p/original${show.find(item => item.id === fullScreenImage)?.poster_path}`}
                        alt={show.find(item => item.id === fullScreenImage)?.title || show.find(item => item.id === fullScreenImage)?.name}
                    />
                </div>
            )}
        </>
    );
}


