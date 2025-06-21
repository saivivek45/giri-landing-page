"use client";
import React from "react";
import {motion} from "framer-motion";

const AnimatedSection:React.FC<{ children:React.ReactNode }> = ({children}) => {
    return(
        <motion.div
        initial = {{opacity:0,y:50}}
        whileInView = {{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8,ease:"easeOut"}}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedSection