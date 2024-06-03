

import React from 'react';
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='bg-slate-800  w-full h-96 md:w-full h-[100%] '>
      <div className='flex flex-col justify-center items-center text-center py-20 px-5'>
        <motion.div initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}>
          <h1 className='text-white text-5xl md:text-7xl font-mono'>Welcome.</h1>
          <h2 className='text-white text-lg md:text-3xl mt-2 font-mono'>
            Millions of movies, TV shows and people to discover. Explore now
          </h2>
        </motion.div>

        <div className='mt-14'>
          <h1 className='text-5xl md:text-9xl text-white'>OSCARS</h1>
          <div className='mt-7'>
            <Link to="/frontbtn">
              <Button variant="contained" disableElevation>
                View the Winners
                <FaLongArrowAltRight className='ml-2 md:ml-5' size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
