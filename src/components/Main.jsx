// import React from 'react'
// import { motion } from "framer-motion";
// import { FaLongArrowAltRight } from "react-icons/fa"
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';


// export default function Main() {
//   return (
//     <div className='bg-black w-[full] h-[550px] '>
//         <div className='flex flex-col ml-32 '>
//         <motion.div initial={{ x: -100, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{
//               delay: 0.2,
//               x: { type: "spring", stiffness: 60 },
//               opacity: { duration: 1 },
//               ease: "easeIn",
//               duration: 1,
//             }}>
//         <h1 className='text-white text-7xl mt-40 font-mono'>Welcome.</h1>
//         <h2 className='text-white text-3xl mt-2 font-mono'>Millions of movies, TV shows and people to discover. Explore now</h2>
//         </motion.div>

//         <div className='mt-16 '>
//          <h1 className='text-6xl text-white'>OSCARS</h1>
//          <div className='mt-7'>

// <Link to ="/page">
//          <Button  variant="contained" disableElevation>
//        View the Winters
//        <FaLongArrowAltRight className='ml-5 ' size={30}/>
//     </Button>
// </Link>

//     </div>

//          </div>
//         </div>
//     </div>
//   )
// }

import React from 'react';
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='bg-slate-800 w-full min-h-screen'>
      <div className='flex flex-col ml-32'>
        <motion.div initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}>
          <h1 className='text-white text-7xl mt-36 font-mono'>Welcome.</h1>
          <h2 className='text-white text-3xl mt-2 font-mono'>
            Millions of movies, TV shows and people to discover. Explore now
          </h2>
        </motion.div>

        <div className='mt-14'>
          <h1 className='text-9xl text-white'>OSCARS</h1>
          <div className='mt-7'>
            <Link to="/page">
              <Button variant="contained" disableElevation className='ml-28'>
                View the Winners
                <FaLongArrowAltRight className='ml-5' size={30} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
